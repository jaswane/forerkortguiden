import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch-ikon: samme merke som logoen (blå flate, tre hvite veistriper).
 * Opak bakgrunn – iOS maskerer hjørnene selv. Genereres statisk ved bygg.
 */
export default function AppleIcon() {
  const dash = {
    position: "absolute" as const,
    width: "17px",
    height: "19px",
    background: "#ffffff",
    transform: "skewX(-13deg)",
  };
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#17549e",
          position: "relative",
          display: "flex",
        }}
      >
        <div style={{ ...dash, left: "92px", top: "48px" }} />
        <div style={{ ...dash, left: "83px", top: "82px" }} />
        <div style={{ ...dash, left: "74px", top: "116px" }} />
      </div>
    ),
    size
  );
}
