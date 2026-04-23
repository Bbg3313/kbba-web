import pathlib

text = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
i = text.find('id="comp-lreem4is"')
print(repr(text[i : i + 2000]))
