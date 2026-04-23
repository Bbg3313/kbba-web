import pathlib, re
MEDIA = "https://static.wixstatic.com/media/"
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
sc = t.find('id="SITE_CONTAINER"')
vs = t.find("comp-lbahbgm9", sc)
he = t.find("img_comp-lreem4is", sc)
sub = t[vs:he]
urls = re.findall(
    r"https://static\.wixstatic\.com/media/11062b_[a-z0-9]+~mv2\.(?:png|jpg|jpeg|webp)",
    sub,
    re.I,
)
seen = []
for u in urls:
    if u not in seen:
        seen.append(u)
print("order unique", seen[:5])
