import pathlib, re
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
for needle in ['id="comp-lbahbgm9"', "comp-lbahbgm9"]:
    i = t.find(needle)
    print(needle, i)
    if i >= 0:
        s = t[i : i + 20_000]
        for pat in [
            r"https://static\.wixstatic\.com/[^\"'\\s<>]+",
            r"&quot;uri&quot;:&quot;([^&]+)&quot;",
            r"KBBA",
        ]:
            m = re.search(pat, s)
            print(" ", pat[:40], "->", (m.group(0) if m else "")[:100])
