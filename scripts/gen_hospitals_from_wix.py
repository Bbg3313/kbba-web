"""Regenerate src/data/hospitals.ts from Wix pro-gallery order in _wix-page.html."""
import pathlib
import re

root = pathlib.Path(__file__).resolve().parents[1]
html = (root / "_wix-page.html").read_text(encoding="utf-8")
start = html.find('id="pro-gallery-comp-lrpusuya"')
chunk = html[start:] if start != -1 else html
pat = r"https://static\.wixstatic\.com/media/[^\s\"'<>]+?\.(?:jpg|jpeg|png|webp)"
urls = re.findall(pat, chunk, flags=re.I)
seen: set[str] = set()
ordered: list[str] = []
for u in urls:
    u = u.replace("&amp;", "&")
    if u not in seen:
        seen.add(u)
        ordered.append(u)

if len(ordered) < 60:
    raise SystemExit(f"expected 60 gallery urls, got {len(ordered)}")
ordered = ordered[:60]

lines = [
    "export type HospitalPartner = {",
    "  id: string;",
    "  shortName: string;",
    "  imageSrc: string;",
    "};",
    "",
    "/** ลำดับโลโก้ตรงกับแกลเลอรี Wix (pro-gallery-comp-lrpusuya) — โหลดจาก static.wixstatic.com */",
    "export const hospitalPartners: HospitalPartner[] = [",
]
for i, url in enumerate(ordered, start=1):
    lines.append(
        "  {"
        + f' id: "partner-{i:02d}", shortName: "พันธมิตร {i:02d}", '
        + f'imageSrc: "{url}" '
        + "},"
    )
lines.append("];")
lines.append("")
(root / "src" / "data" / "hospitals.ts").write_text("\n".join(lines), encoding="utf-8")
print("wrote", len(ordered), "partners")
