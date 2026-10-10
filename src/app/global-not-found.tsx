import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { Button, Section, Text } from "@/components/ui";
import { rootMetadata } from "@/lib/pageMetadata";
import "./globals.css";

export const metadata: Metadata = {
  ...rootMetadata("en"),
  title: "Page Not Found | Firefly Wellness",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <main className="min-h-screen pt-20 md:pt-0">
        <Section variant="white">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <Text variant="h1">Page Not Found</Text>
            <Text variant="text">
              The page you are looking for does not exist or has moved.
            </Text>
            <Text variant="text">
              <span lang="es">La página que busca no existe o se ha movido.</span>
            </Text>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button href="/" variant="primary">
                Go to Homepage
              </Button>
              <Button href="/es" variant="secondary">
                Ir a la página principal
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </RootDocument>
  );
}
