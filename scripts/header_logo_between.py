import pathlib, re
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
sc = t.find('id="SITE_CONTAINER"')
hero = t.find('id="comp-lreegviq"')
print("SITE_CONTAINER", sc, "comp-lreegviq", hero)
if sc >= 0 and hero > sc:
    chunk = t[sc:hero]
    urls = re.findall(
        r"https://static\.wixstatic\.com/media/11062b_[a-z0-9]+~mv2\.(?:png|jpg|jpeg|webp|svg)",
        chunk,
        re.I,
    )
    print("11062b count", len(urls))
    for u in urls[:5]:
        print(" ", u)
    # first e22438 jpg in hero area excluded - we want 11062b
    if urls:
        print("PICK", urls[0])
    anym = re.findall(
        r"https://static\.wixstatic\.com/media/[a-zA-Z0-9_~.-]+\.(?:png|jpg|svg|webp)",
        chunk,
    )
    print("any media count", len(anym))
    for u in anym[:12]:
        print(" ", u[-70:])
