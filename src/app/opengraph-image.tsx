import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #fff5f7 0%, #ffe4ef 36%, #fdf2f8 68%, #faf5ff 100%)",
          color: "#4a044e",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top, rgba(255,255,255,0.95), transparent 42%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 26,
            padding: "48px 72px",
            borderRadius: 48,
            background: "rgba(255,255,255,0.74)",
            boxShadow: "0 28px 80px rgba(190, 24, 93, 0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 520,
              padding: "26px 44px",
              borderRadius: 28,
              background: "linear-gradient(135deg, #9f1239 0%, #86198f 100%)",
              color: "#ffffff",
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            KBBA
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 10,
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "0.18em", color: "#db2777" }}>
              KOREA BEAUTY BUSINESS ACADEMY
            </div>
            <div style={{ fontSize: 34, fontWeight: 600, maxWidth: 920, lineHeight: 1.35 }}>
              Korean hospital partner network, coordinator training, and beauty business programmes.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
