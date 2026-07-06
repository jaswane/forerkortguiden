import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const alt = `${SITE_NAME} – ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Enkelt, lett og merkevaretro delingsbilde. Genereres statisk ved bygg. */
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
          padding: "80px",
          background: "linear-gradient(160deg, #103e77 0%, #17549e 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "18px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#17549e",
              fontSize: "56px",
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div style={{ fontSize: "72px", fontWeight: 700, letterSpacing: "-2px" }}>
            {SITE_NAME}
          </div>
        </div>
        <div style={{ fontSize: "38px", opacity: 0.92, maxWidth: "900px" }}>
          {SITE_TAGLINE}
        </div>
        <div style={{ fontSize: "28px", opacity: 0.7, marginTop: "48px" }}>
          forerkortguiden.no
        </div>
      </div>
    ),
    size
  );
}
