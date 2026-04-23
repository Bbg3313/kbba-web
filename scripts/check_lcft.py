import json, pathlib, re
html = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
m = re.search(r'<script type="application/json" id="wix-warmup-data">(.+?)</script>', html, re.DOTALL)
d = json.loads(m.group(1))
g = d["appsWarmupData"]["14271d6f-ba62-d045-549b-ab972ae1f70e"]["comp-lcft52f9_galleryData"]
print("items", len(g["items"]), "totalItemsCount", g.get("totalItemsCount"))
