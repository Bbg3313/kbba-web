import html
import pathlib
import re

src = pathlib.Path("_wix-page.html").read_text(encoding="utf-8", errors="ignore")
m = re.search(
    r'<script type="application/json" id="wix-viewer-model">(.*?)</script>',
    src,
    re.DOTALL,
)
blob = html.unescape(m.group(1) if m else "")
decoded = blob.encode("utf-8", "ignore").decode("unicode_escape", "ignore")

qs = sorted(set(re.findall(r"[^\n\r<>]{8,220}\?", decoded)))
for q in qs:
    if any(ch in q for ch in "กขคฆงจฉชซญฎฏฐฑฒณดตถทธนบปผพภมยรลวศษสหอฮ"):
        print(q.strip())
print("TOTAL", len(qs))
