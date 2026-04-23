import pathlib
import re

html = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text(encoding="utf-8")
start = html.find('id="pro-gallery-comp-lrpusuya"')
end = html.find("</div></div></div></div></div>", start)
chunk = html[start : start + 500000] if start != -1 else html
pat = r'https://static\.wixstatic\.com/media/[^\s"\'<>]+?\.(?:jpg|jpeg|png|webp)'
urls = re.findall(pat, chunk, flags=re.I)
seen: set[str] = set()
ordered: list[str] = []
for u in urls:
    u = u.replace("&amp;", "&")
    if u not in seen:
        seen.add(u)
        ordered.append(u)
print("gallery_chunk_urls", len(ordered))
for u in ordered:
    print(u)
