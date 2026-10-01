import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export async function GET() {
  const mainMenuImage = new URL(
    "/media/unlocked/main-menu.webp",
    siteConfig.url,
  ).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#4AA8FF",
          color: "#12151A",
          padding: "70px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "58%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "118px",
              height: "118px",
              borderRadius: "999px",
              background: "#000000",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: 800,
              letterSpacing: "-0.06em",
              marginBottom: "34px",
            }}
          >
            Mr.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "58px",
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              color: "#12151A",
              marginBottom: "18px",
            }}
          >
            Mariano Rivas
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "34px",
              lineHeight: 1.15,
              fontWeight: 500,
              color: "#12151A",
              marginBottom: "28px",
            }}
          >
            Unity / C# Developer
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "22px",
              lineHeight: 1.45,
              color: "#26313F",
              maxWidth: "650px",
            }}
          >
            Production mobile development · Android · iOS · Unity IAP · Localization
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "46px",
              fontSize: "20px",
              fontWeight: 600,
              color: "#12151A",
            }}
          >
            marianorivas.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "35%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "278px",
              height: "548px",
              borderRadius: "46px",
              background: "#111318",
              padding: "10px",
              boxShadow: "0 22px 50px rgba(18,21,26,0.18)",
            }}
          >
            <img
              alt=""
              src={mainMenuImage}
              width="258"
              height="528"
              style={{
                objectFit: "cover",
                width: "258px",
                height: "528px",
                borderRadius: "37px",
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
