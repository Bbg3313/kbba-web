import pathlib
t = pathlib.Path(__file__).resolve().parents[1].joinpath("_wix-page.html").read_text("utf-8")
sc = t.find('id="SITE_CONTAINER"')
hc = t.find('comp-lbahbgm9', sc)
i362 = t.find("11062b_362ef89dec51403eb0ee59a21bde967c", sc)
ica = t.find("11062b_ca1d837ce7194421b781ee7384061a8e", sc)
print("comp-lbahbgm9", hc, "362", i362, "ca1", ica)
# pick 11062b url with smallest index after sc but before hero
hero = t.find("img_comp-lreem4is", sc)
chunk = t[sc:hero]
idx362 = chunk.find("11062b_362ef89")
idxca = chunk.find("11062b_ca1d837")
print("relative 362", idx362, "ca1", idxca)
