# -*- coding: utf-8 -*-
"""Parse Wix warmup JSON for gallery items (orderIndex) and key WPhoto URIs."""
from __future__ import annotations

import json
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
HTML = (ROOT / "_wix-page.html").read_text(encoding="utf-8")
m = re.search(
    r'<script type="application/json" id="wix-warmup-data">(.+?)</script>',
    HTML,
    re.DOTALL,
)
if not m:
    raise SystemExit("wix-warmup-data not found")
raw = m.group(1)
data = json.loads(raw)


def walk(obj, path=""):
    """Yield (path, dict) for every dict that has 'items' list with mediaUrl."""
    if isinstance(obj, dict):
        if "items" in obj and isinstance(obj["items"], list) and obj["items"]:
            first = obj["items"][0]
            if isinstance(first, dict) and "mediaUrl" in first:
                yield path, obj
        for k, v in obj.items():
            yield from walk(v, f"{path}.{k}" if path else k)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from walk(v, f"{path}[{i}]")


apps = data.get("appsWarmupData", {})
app = apps.get("14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9", {})
initial = app.get("initialData", {})
print("top initialData keys:", list(initial.keys())[:30])

MEDIA = "https://static.wixstatic.com/media/"


def gallery_urls(key: str) -> list[tuple[float, str, str]]:
    block = initial.get(key)
    if not block or "items" not in block:
        return []
    out: list[tuple[float, str, str]] = []
    for it in block["items"]:
        media = it.get("mediaUrl") or ""
        if not media:
            continue
        url = media if media.startswith("http") else MEDIA + media
        oid = float(it.get("orderIndex", 0))
        title = (it.get("metaData") or {}).get("title") or (it.get("metaData") or {}).get(
            "fileName", ""
        )
        out.append((oid, url, str(title)))
    out.sort(key=lambda x: x[0])
    return out


def find_ssr_props(comp_prefix: str) -> dict:
    """Find nested dict keys like comp-XXX in initialData."""
    found = {}
    for k, v in initial.items():
        if not k.startswith(comp_prefix):
            continue
        if isinstance(v, dict):
            found[k] = v
    return found


print("initialData keys count:", len(initial))
gkeys = [k for k in initial if "galleryData" in k]
print("galleryData keys:", gkeys)

print("\n--- walk appsWarmupData for gallery-like objects ---")
for app_id, app_body in apps.items():
    for p, obj in walk(app_body, app_id):
        n = len(obj["items"])
        print(f"path={p} items={n}")

# Galleries from Wix Pro Gallery widgets
for gkey in sorted(gkeys):
    items = gallery_urls(gkey)
    if items:
        print(f"\n=== {gkey} ({len(items)} items) ===")
        for i, (_, url, title) in enumerate(items[:5], 1):
            print(f"  {i}. {title[:50]!r} -> ...{url[-55:]}")
        if len(items) > 5:
            print(f"  ... +{len(items) - 5} more")

# Deep search for WPhoto / image props (hero)
hero_keys = [k for k in initial if "reem4is" in k or "lreem4is" in k]
print("\n=== keys containing reem4is ===", hero_keys[:20])

# SSR props often under pages or platform - search string for comp-lreem4is
idx = HTML.find("comp-lreem4is")
if idx != -1:
    snippet = HTML[max(0, idx - 200) : idx + 800]
    urls = re.findall(r"https://static\.wixstatic\.com/media/[^\"'\\s]+", snippet)
    print("\n=== URLs near comp-lreem4is in HTML ===")
    for u in urls[:6]:
        print(" ", u)
