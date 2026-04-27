import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
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
