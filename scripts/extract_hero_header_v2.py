# -*- coding: utf-8 -*-
import json
import pathlib
import re

HTML = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text(
    encoding="utf-8"
)
MEDIA = "https://static.wixstatic.com/media/"

# 1) Hero: wow-image after comp-lreem4is or img_comp-lreem4is
hero = None
for needle in ['id="img_comp-lreem4is"', 'comp-lreem4is']:
    i = HTML.find(needle)
    if i < 0:
        continue
    sub = HTML[i : i + 15_000]
    # escaped JSON
    m = re.search(
        r"&quot;uri&quot;:&quot;([a-zA-Z0-9_~.-]+~mv2\.(?:jpg|jpeg|png|webp))&quot;",
        sub,
    )
    if m:
        hero = MEDIA + m.group(1)
        break
    m2 = re.search(
        r"https://static\.wixstatic\.com/media/[a-zA-Z0-9_~.-]+~mv2\.(?:jpg|jpeg|png|webp)",
        sub,
    )
    if m2:
        hero = m2.group(0)
        break

# 2) Header logo: wow-image / vector near comp-lbahbgm9 (site logo)
header = None
i = HTML.find('id="comp-lbahbgm9"')
if i >= 0:
    sub = HTML[i : i + 25_000]
    m = re.search(
        r"&quot;uri&quot;:&quot;([a-zA-Z0-9_~.-]+~mv2\.(?:png|jpg|jpeg|webp|svg))&quot;",
        sub,
    )
    if m:
        header = MEDIA + m.group(1)
    if not header:
        m2 = re.search(
            r"https://static\.wixstatic\.com/media/11062b_[a-z0-9]+~mv2\.(?:png|jpg|jpeg|webp|svg)",
            sub,
            re.I,
        )
        if m2:
            header = m2.group(0)

# 3) Warmup JSON: search for comp-lreem4is uri in string (escaped)
if not hero:
    m = re.search(
        r"comp-lreem4is[^\"]{0,5000}?11062b_[a-z0-9]+~mv2\.(?:jpg|jpeg|png|webp)",
        HTML,
        re.I | re.DOTALL,
    )
    if m:
        um = re.search(r"11062b_[a-z0-9]+~mv2\.(?:jpg|jpeg|png|webp)", m.group(0), re.I)
        if um:
            hero = MEDIA + um.group(0)

# 4) pages.wix-data or ssr - parse viewer model in chunks
if not hero or not header:
    vm = re.search(
        r'<script type="application/json" id="wix-viewer-model">(.+?)</script>',
        HTML,
        re.DOTALL,
    )
    if vm:
        raw = vm.group(1)
        # avoid full parse - regex uri near lreem4is
        idx = raw.find("lreem4is")
        if idx >= 0:
            chunk = raw[max(0, idx - 200) : idx + 3000]
            um = re.search(
                r"\\?/media\\?/([a-zA-Z0-9_~.-]+~mv2\.(?:jpg|jpeg|png|webp))",
                chunk,
            )
            if um and not hero:
                hero = MEDIA + um.group(1).replace("\\/", "/")

print("HERO", hero)
print("HEADER", header)
