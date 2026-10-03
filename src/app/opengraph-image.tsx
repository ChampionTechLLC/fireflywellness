import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Firefly Wellness - Psychiatric Care & Therapy in Hinsdale, IL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/hero/Logo A6_Logo B7.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#c3ffc1",
          padding: "48px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            borderRadius: "32px",
            gap: "24px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={330} height={224} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Psychiatric Care & Therapy in Hinsdale
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#334155" }}>
            Psychiatric Medication · ADHD Evaluation · Therapy
          </div>
        </div>
      </div>
    ),
    size,
  );
}
