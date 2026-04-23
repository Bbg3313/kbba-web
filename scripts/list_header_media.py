import pathlib, re

t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
s = t.find("SITE_HEADER")
h = t[s : s + 250_000]
urls = re.findall(r"https://static\.wixstatic\.com/media/[^\"'\\s<>]+", h)
seen = set()
for u in urls:
    if u in seen:
        continue
    seen.add(u)
    if len(seen) <= 20:
        print(u)
