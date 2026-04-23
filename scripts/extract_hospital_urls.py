import pathlib
import re

html = pathlib.Path("_wix-page.html").read_text(encoding="utf-8", errors="ignore")
idx = html.find("gallery-wrapper-comp-lcft52f9")
segment = html[idx : idx + 800000] if idx != -1 else html

urls = sorted(set(re.findall(r"https://static\.wixstatic\.com/media/e22438_[^\"<\\s]+", segment)))
print("COUNT", len(urls))
for u in urls:
    print(u)
