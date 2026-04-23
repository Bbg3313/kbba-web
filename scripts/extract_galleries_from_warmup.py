# -*- coding: utf-8 -*-
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[1]
html = (ROOT / "_wix-page.html").read_text(encoding="utf-8")
m = re.search(
    r'<script type="application/json" id="wix-warmup-data">(.+?)</script>',
    html,
    re.DOTALL,
)
assert m
data = json.loads(m.group(1))
apps = data["appsWarmupData"]
MEDIA = "https://static.wixstatic.com/media/"


def sorted_gallery_items(g: dict) -> list[dict]:
    items = g.get("items") or []
    return sorted(items, key=lambda x: float(x.get("orderIndex", 0)))


def to_url(media_url: str) -> str:
    if media_url.startswith("http"):
        return media_url
    return MEDIA + media_url


for aid, body in apps.items():
    if not isinstance(body, dict):
        continue
    for k, v in body.items():
        if not k.endswith("_galleryData") or not isinstance(v, dict):
            continue
        items = sorted_gallery_items(v)
        total = v.get("totalItemsCount", len(items))
        print(f"{aid[:8]}… {k}: len(items)={len(items)} totalItemsCount={total}")
        for i, it in enumerate(items[:3], 1):
            md = it.get("metaData") or {}
            fn = md.get("fileName") or md.get("title") or ""
            print(f"   {i}. orderIndex={it.get('orderIndex')} file={fn!r}")
        if len(items) > 3:
            print(f"   ... {len(items) - 3} more")
