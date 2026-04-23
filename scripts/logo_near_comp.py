import pathlib, re
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
for comp in ["comp-lbahbgm9", "comp-lba9t299", "SITE_HEADER"]:
    i = t.find(comp)
    print(comp, i)
    if i != -1:
        sn = t[i : i + 30_000]
        for u in re.findall(r"https://static\.wixstatic\.com/media/[^\"'\\s<>]+", sn)[:8]:
            print(" ", u)
