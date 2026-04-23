import json, pathlib, re

html = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
m = re.search(
    r'<script type="application/json" id="wix-viewer-model">(.+?)</script>',
    html,
    re.DOTALL,
)
if not m:
    print("no viewer model")
    raise SystemExit(1)
raw = m.group(1)
# may be huge - search substring for lreem4is
idx = raw.find("comp-lreem4is")
print("idx in viewer", idx)
if idx == -1:
    raise SystemExit(2)
chunk = raw[max(0, idx - 500) : idx + 4000]
print(chunk[:3500])
