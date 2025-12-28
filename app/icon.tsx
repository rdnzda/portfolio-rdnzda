import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505", // Fond noir profond
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0px", // Brutaliste = pas d'arrondi
        }}
      >
        {/* Le conteneur de la grille 2x2 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '36px', height: '36px', gap: '4px' }}>
            {/* Les 4 "pixels" blancs */}
            <div style={{ width: '16px', height: '16px', background: 'white' }}></div>
            <div style={{ width: '16px', height: '16px', background: 'white' }}></div>
            <div style={{ width: '16px', height: '16px', background: 'white' }}></div>
            <div style={{ width: '16px', height: '16px', background: 'white' }}></div>
        </div>
      </div>
    ),
    { ...size }
  );
}