import pathlib, re
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
sc = t.find('id="SITE_CONTAINER"')
hi = t.find("img_comp-lreem4is", sc)
sub = t[hi : hi + 15_000]
print(sub[:3500])
