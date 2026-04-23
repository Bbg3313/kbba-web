import pathlib, re
text = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
i = text.find('id="comp-lreem4is"')
sn = text[i : i + 25_000]
for um in re.finditer(r"url\((https://static\.wixstatic\.com/media/[^)]+)\)", sn):
    print(um.group(1)[:120])
# also image src
for um in re.finditer(r"src=\"(https://static\.wixstatic\.com/media/[^\"]+)\"", sn):
    print("src", um.group(1)[:120])
