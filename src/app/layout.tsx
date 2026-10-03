import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/ui";
import { SITE_URL } from "@/constants";
import "./globals.css";

const fontPrimary = Nunito({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Firefly Wellness",
  description:
    "Firefly Wellness offers therapy, ADHD testing, and psychiatric medication in Hinsdale, IL and nearby western suburbs.",
  openGraph: {
    siteName: "Firefly Wellness",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontPrimary.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
