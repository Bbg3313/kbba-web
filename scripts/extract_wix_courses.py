import html
import json
import pathlib
import re
from collections.abc import Iterable


def walk(node):
    if isinstance(node, dict):
        for k, v in node.items():
            yield (k, v)
            yield from walk(v)
    elif isinstance(node, list):
        for item in node:
            yield from walk(item)


raw = pathlib.Path("_wix-page.html").read_text(encoding="utf-8", errors="ignore")
m = re.search(
    r'<script type="application/json" id="wix-viewer-model">(.*?)</script>',
    raw,
    flags=re.DOTALL,
)
if not m:
    raise SystemExit("wix-viewer-model not found")

json_blob = html.unescape(m.group(1))
model = json.loads(json_blob)

targets = ("services-4", "our-course", "course", "package", "คอร์ส", "แพ็ก", "หลักสูตร")

hits = []
for k, v in walk(model):
    if isinstance(v, str):
        low = v.lower()
        if any(t in low for t in targets):
            hits.append((k, v))

seen = set()
for k, v in hits:
    key = (k, v)
    if key in seen:
        continue
    seen.add(key)
    print(f"[{k}] {v}")
