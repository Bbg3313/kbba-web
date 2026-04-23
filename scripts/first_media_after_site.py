import pathlib, re
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
start = t.find('id="SITE_CONTAINER"')
print("SITE_CONTAINER", start)
chunk = t[start : start + 500_000]
# first wixstatic jpg/png in main content
m = re.search(
    r"https://static\.wixstatic\.com/media/[a-zA-Z0-9_~.-]+\.(?:jpg|jpeg|png|webp)",
    chunk,
)
print("first", m.group(0) if m else None)
# all daa8147
for m in re.finditer("daa8147", t):
    print("pos", m.start())
