# -*- coding: utf-8 -*-
"""Locate hero WPhoto and header logo in Wix HTML (wow-image / data-image-info)."""
import json
import pathlib
import re

HTML = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text(
    encoding="utf-8"
)
MEDIA = "https://static.wixstatic.com/media/"


def urls_from_data_image_info(html: str, comp_id: str) -> list[str]:
    """Extract uri from wow-image data-image-info JSON near comp id."""
    i = html.find(comp_id)
    if i < 0:
        return []
    chunk = html[max(0, i - 500) : i + 12_000]
    out = []
    # HTML-escaped JSON in attribute
    for m in re.finditer(r'data-image-info="([^"]+)"', chunk):
        raw = m.group(1).replace("&quot;", '"')
        try:
            d = json.loads(raw)
        except json.JSONDecodeError:
            continue
        img = (d.get("imageData") or d.get("image")) or {}
        uri = img.get("uri")
        if uri and not uri.startswith("http"):
            out.append(MEDIA + uri)
        elif uri:
            out.append(uri)
    return out


def first_wow_after(html: str, anchor: str) -> str | None:
    i = html.find(anchor)
    if i < 0:
        return None
    chunk = html[i : i + 150_000]
    m = re.search(
        r'data-image-info="\{[^"]*&quot;uri&quot;:&quot;([^&]+)&quot;',
        chunk,
    )
    if m:
        return MEDIA + m.group(1)
    return None


# Hero section contains comp-lreem4is (WPhoto) — find wow-image after comp-lreegviq body
hero_section = HTML.find('id="comp-lreegviq"')
if hero_section < 0:
    hero_section = HTML.find("comp-lreegviq")

chunk_hero = HTML[hero_section : hero_section + 400_000] if hero_section >= 0 else HTML
hero_uri = None
# Prefer image tied to lreem4is
for pat in ['id="img_comp-lreem4is"', "comp-lreem4is"]:
    idx = chunk_hero.find(pat)
    if idx >= 0:
        sub = chunk_hero[idx : idx + 8000]
        m = re.search(
            r'&quot;uri&quot;:&quot;([a-zA-Z0-9_~.-]+~mv2\.(?:jpg|jpeg|png|webp))&quot;',
            sub,
        )
        if m:
            hero_uri = MEDIA + m.group(1)
            break

if not hero_uri:
    hero_uri = first_wow_after(HTML, 'id="comp-lreegviq"')

# Header: SITE_PAGES or master header — logo often comp-lbahbgm9 or first VectorImage with uri
header_uri = None
for anchor in ['id="comp-lbahbgm9"', "comp-lbahbgm9", 'id="SITE_HEADER"']:
    u = first_wow_after(HTML, anchor)
    if u:
        header_uri = u
        break

# Fallback: VectorImage svgUrl in header region
hdr = HTML.find("SITE_HEADER")
if hdr >= 0 and not header_uri:
    head = HTML[hdr : hdr + 200_000]
    m = re.search(
        r"https://static\.wixstatic\.com/media/[a-zA-Z0-9_~.-]+\.svg",
        head,
    )
    if m:
        header_uri = m.group(0)

print("HERO:", hero_uri)
print("HEADER:", header_uri)
