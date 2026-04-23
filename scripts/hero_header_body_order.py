import pathlib, re
MEDIA = "https://static.wixstatic.com/media/"
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
sc = t.find('id="SITE_CONTAINER"')
hi = t.find("img_comp-lreem4is", sc)
print("SITE_CONTAINER", sc, "img_comp-lreem4is", hi, "gap", hi - sc if hi > 0 else None)
if sc >= 0 and hi > sc:
    header_chunk = t[sc:hi]
    hurls = re.findall(
        r"https://static\.wixstatic\.com/media/11062b_[a-z0-9]+~mv2\.(?:png|jpg|jpeg|webp|svg)",
        header_chunk,
        re.I,
    )
    print("header 11062b candidates", len(hurls))
    for u in hurls[:6]:
        print(" ", u)
    sub = t[hi : hi + 12_000]
    m = re.search(
        r"&quot;uri&quot;:&quot;([a-zA-Z0-9_~.-]+~mv2\.(?:jpg|jpeg|png|webp))&quot;",
        sub,
    )
    hero = MEDIA + m.group(1) if m else None
    print("HERO", hero)
