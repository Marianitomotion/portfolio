import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: "472px",
            height: "472px",
            borderRadius: "999px",
            background: "#000000",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Arial, sans-serif",
            fontSize: "184px",
            fontWeight: 800,
            letterSpacing: "-0.065em",
            lineHeight: 1,
          }}
        >
          Mr.
        </div>
      </div>
    ),
    size,
  );
}
