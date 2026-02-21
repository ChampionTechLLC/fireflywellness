import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Navbar } from "@/components/ui";
import "./globals.css";

const fontPrimary = Nunito({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Firefly Wellness",
  description: "Marketing site for Firefly Wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
