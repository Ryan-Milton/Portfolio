import { ImageResponse } from "next/og";

export const alt = "Ryan Milton, senior software engineer";
export const contentType = "image/png";
export const size = { height: 630, width: 1200 };

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#09090b",
          color: "#fafafa",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "76px 86px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#c4b5fd",
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Ryan Milton / Seattle
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Senior software engineer building products across web, mobile, and desktop.
          </div>
          <div style={{ color: "#a1a1aa", display: "flex", fontSize: 26 }}>
            Product engineering / React / React Native / TypeScript
          </div>
        </div>
      </div>
    ),
    size,
  );
}
