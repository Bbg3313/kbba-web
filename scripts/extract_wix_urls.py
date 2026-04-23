import pathlib
import re

html = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text(encoding="utf-8")
pat = r'https://static\.wixstatic\.com/media/[^\s"\'<>]+?\.(?:jpg|jpeg|png|webp)'
urls = re.findall(pat, html, flags=re.I)
seen: set[str] = set()
out: list[str] = []
for u in urls:
    u = u.replace("&amp;", "&")
    if u not in seen:
        seen.add(u)
        out.append(u)
print("count", len(out))
for u in out:
    print(u)
