import { Nunito } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/ui";
import type { Locale } from "@/data/siteContent";

const fontPrimary = Nunito({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

/** Shared <html> shell; each language's root layout fixes the locale. */
export function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale}>
      <body className={`${fontPrimary.variable} font-sans antialiased`}>
        <LanguageProvider locale={locale}>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
