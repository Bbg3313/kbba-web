import pathlib
import re

text = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text(
    encoding="utf-8"
)
marker = "gallery-wrapper-comp-lcft52f9"
i = text.find(marker)
print("marker idx", i, "file len", len(text))
chunk = text[i : i + 400000]
urls = re.findall(
    r"https://static\.wixstatic\.com/media/[a-zA-Z0-9_~.-]+\.(?:jpg|jpeg|png|webp)",
    chunk,
)
seen: set[str] = set()
ordered: list[str] = []
for u in urls:
    if u not in seen:
        seen.add(u)
        ordered.append(u)
print("unique urls in chunk:", len(ordered))
for u in ordered[:15]:
    print(u)
# data-idx order: find pairs idx, url proximity
pairs = []
for m in re.finditer(r'data-idx="(\d+)"', chunk):
    start = m.start()
    window = chunk[start : start + 2500]
    um = re.search(
        r"https://static\.wixstatic\.com/media/[a-zA-Z0-9_~.-]+\.(?:jpg|jpeg|png|webp)",
        window,
    )
    if um:
        pairs.append((int(m.group(1)), um.group(0)))
pairs.sort(key=lambda x: x[0])
print("\nby data-idx (first 15):")
for idx, u in pairs[:15]:
    print(idx, u[-50:])
