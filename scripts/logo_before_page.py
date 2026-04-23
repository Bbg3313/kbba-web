import pathlib, re
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
page = t.find('"swqqt"')  # rough page start in json
print("page ref", page)
chunk = t[:page] if page > 0 else t[:800000]
m = None
for m in re.finditer(
    r"https://static\.wixstatic\.com/media/11062b_[a-z0-9]+~mv2\.(?:png|jpg|jpeg|webp)",
    chunk,
    re.I,
):
    pass
print("last before page", m.group(0) if m else None)
