import pathlib, re
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
m = re.search(
    r"https://static\.wixstatic\.com/media/11062b_[a-z0-9]+~mv2\.(?:png|jpg|jpeg|webp)",
    t,
    re.I,
)
print(m.group(0) if m else "none")
