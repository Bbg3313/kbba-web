import pathlib
import re

html = pathlib.Path("who-we-are-live.html").read_text(encoding="utf-8", errors="ignore")
urls = sorted(set(re.findall(r"https://static\.wixstatic\.com/media/[^\"]+", html)))

for u in urls:
    print(u)

print("TOTAL", len(urls))
