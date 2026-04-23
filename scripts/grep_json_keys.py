import pathlib
s = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
for needle in ["comp-lreem4is", "lreem4is", "daa8147"]:
    print(needle, s.count(needle))
