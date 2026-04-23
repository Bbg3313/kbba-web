import pathlib, re
text = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
for tag in ['id="comp-lreem4is"', "comp-lreem4is"]:
    i = text.find(tag)
    print(tag, i)
    if i != -1:
        sn = text[i : i + 8000]
        urls = re.findall(r"https://static\.wixstatic\.com/media/[^\"'\\s<>]+", sn)
        print(" urls", urls[:5])
