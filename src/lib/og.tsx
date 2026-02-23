import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateOGImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#84ABBF",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            N
          </div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "white",
            }}
          >
            Neon Web Agency
          </span>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#94A3B8",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              background: "#84ABBF",
              color: "white",
              padding: "12px 28px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            neoncraft.me
          </div>
          <span style={{ color: "#64748B", fontSize: "16px" }}>
            Ottawa&apos;s Premier Web Design Agency
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
