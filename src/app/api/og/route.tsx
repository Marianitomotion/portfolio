import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export async function GET() {
  const gameplayImage = new URL(
    "/media/unlocked/hero-gameplay.webp",
    siteConfig.url,
  ).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F7F8FA",
          color: "#12151A",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "1px solid #DFE3E8",
            borderRadius: "28px",
            background: "#FFFFFF",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "72%",
              padding: "56px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#2563EB",
                  marginBottom: "28px",
                }}
              >
                Mariano Rivas · Professional Portfolio
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: 64,
                  lineHeight: 1.02,
                  fontWeight: 700,
                  letterSpacing: "-0.045em",
                  marginBottom: "24px",
                }}
              >
                Unity / C# Developer
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: 30,
                  lineHeight: 1.35,
                  color: "#626A76",
                  maxWidth: "760px",
                }}
              >
                Production mobile development · Android · iOS · Unity IAP ·
                Localization
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                fontSize: 22,
                color: "#626A76",
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: "14px",
                  height: "14px",
                  borderRadius: "999px",
                  background: "#2563EB",
                }}
              />
              marianorivas.com
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "28%",
              background: "#F1F3F6",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <img
              alt=""
              src={gameplayImage}
              width="240"
              height="520"
              style={{
                objectFit: "cover",
                borderRadius: "22px",
                border: "1px solid #C7CDD5",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
