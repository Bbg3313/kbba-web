# -*- coding: utf-8 -*-
"""Pick up to 60 partner/hospital-like images from extracted zip folder."""
from __future__ import annotations

import json
import os
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXTRACT = ROOT / "public" / "images" / "_zip_extract"
OUT_DIR = ROOT / "public" / "images" / "hospitals"
META_OUT = ROOT / "src" / "data" / "hospital-images.json"

EXTS = {".png", ".jpg", ".jpeg", ".webp", ".svg"}
MAX_BYTES = 3 * 1024 * 1024
MIN_BYTES = 2000


def score(p: Path) -> tuple[int, int, str]:
    b = p.name.lower()
    size = p.stat().st_size
    if size < MIN_BYTES or size > MAX_BYTES:
        return (999, size, b)
    # brand-only assets (navbar / hero), not partner strip
    if b in {"kbba.png", "kbba.svg", "kbba (1).png"}:
        return (998, size, b)
    if "kbba (korea beauty business academy)" in b and "pdf" not in b:
        return (997, size, b)  # long infographic — skip for grid
    if "1 page -agency" in b or "korea beauty business academy (800" in b:
        return (996, size, b)
    if "adobestock" in b:
        return (50, size, b)
    if "partner clinic in thai" in b:
        return (0, size, b)
    if b.startswith("clinic_") or "dermatology clinic" in b:
        return (1, size, b)
    if re.match(r"^\d{2}", p.name):
        return (2, size, b)
    if re.search(r"\(\d+\)\.(png|jpe?g)$", b):
        return (3, size, b)
    if "logo" in b and "kbba" not in b:
        return (4, size, b)
    if "pride logo" in b or "viu.u logo" in b or "ab logo" in b:
        return (4, size, b)
    return (10, size, b)


def main() -> None:
    if not EXTRACT.is_dir():
        raise SystemExit(f"Missing extract dir: {EXTRACT}")

    candidates: list[Path] = []
    for p in EXTRACT.iterdir():
        if not p.is_file():
            continue
        ext = p.suffix.lower()
        if ext == ".jpeg":
            ext = ".jpg"
        if ext not in EXTS:
            continue
        sc = score(p)
        if sc[0] >= 900:
            continue
        candidates.append(p)

    candidates.sort(key=lambda p: (score(p)[0], score(p)[1], p.name.lower()))

    # de-dupe by inode
    seen: set[int] = set()
    unique: list[Path] = []
    for p in candidates:
        st = p.stat().st_ino
        if st in seen:
            continue
        seen.add(st)
        unique.append(p)

    chosen = unique[:60]

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    # clear previous numbered imports (keep .gitkeep)
    for old in OUT_DIR.iterdir():
        if old.name == ".gitkeep":
            continue
        if re.match(r"^\d{2}\.", old.name):
            old.unlink()

    mapping: list[dict[str, str]] = []
    for i, src in enumerate(chosen, start=1):
        ext = src.suffix.lower()
        if ext == ".jpeg":
            ext = ".jpg"
        dest_name = f"{i:02d}{ext}"
        dest = OUT_DIR / dest_name
        shutil.copy2(src, dest)
        mapping.append(
            {
                "id": f"partner-{i:02d}",
                "shortName": f"พันธมิตร {i:02d}",
                "imageSrc": f"/images/hospitals/{dest_name}",
                "source": src.name,
            }
        )

    META_OUT.write_text(json.dumps(mapping, ensure_ascii=False, indent=2), encoding="utf-8")

    ts_path = ROOT / "src" / "data" / "hospitals.ts"
    lines = [
        "export type HospitalPartner = {",
        "  id: string;",
        "  shortName: string;",
        "  imageSrc: string;",
        "};",
        "",
        "/** Auto-filled by scripts/import-hospital-images.py — edit shortName labels if needed. */",
        "export const hospitalPartners: HospitalPartner[] = [",
    ]
    for m in mapping:
        lines.append(
            "  {"
            + f' id: "{m["id"]}", shortName: "{m["shortName"]}", imageSrc: "{m["imageSrc"]}" '
            + "},"
        )
    lines.append("];")
    lines.append("")
    ts_path.write_text("\n".join(lines), encoding="utf-8")

    print(f"Copied {len(mapping)} files to {OUT_DIR.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
