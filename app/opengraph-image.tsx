import { ImageResponse } from "next/og";
import { BRAND_NAME, SITE_SHORT_DESCRIPTION } from "./lib/site";

export const runtime = "nodejs";
export const alt = `${BRAND_NAME} — 999.9 Fine Gold, Kreta Ayer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 78% 22%, rgba(217,184,119,0.55), rgba(217,184,119,0) 60%), radial-gradient(circle at 12% 85%, rgba(181,138,69,0.32), rgba(181,138,69,0) 60%), #f7f1e6",
          color: "#1a130b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: 26,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8b7355",
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 999,
              background:
                "radial-gradient(circle at 30% 25%, #faedcd, #d9b877 45%, #8a6626 100%)",
            }}
          />
          <span>{BRAND_NAME} · Kreta Ayer · Singapore</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: 128,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontStyle: "italic",
              color: "#1a130b",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontStyle: "normal" }}>A quiet</span>
            <span style={{ color: "#8a6626" }}>gold house.</span>
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              lineHeight: 1.35,
              maxWidth: 900,
              color: "rgba(26,19,11,0.75)",
            }}
          >
            {SITE_SHORT_DESCRIPTION}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8b7355",
          }}
        >
          <span>999.9 Fine · Struck by Hand</span>
          <span>Est. Kreta Ayer</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
