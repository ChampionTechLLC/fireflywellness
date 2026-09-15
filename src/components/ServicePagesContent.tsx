"use client";

import NextLink from "next/link";
import {
  BulletList,
  Button,
  LinkedText,
  Section,
  Text,
} from "@/components/ui";
import { useLanguage } from "@/components/LanguageProvider";
import { SCHEDULE_URL } from "@/constants";
import {
  getServicePagesContent,
  type ServicePageCopy,
} from "@/data/servicePages";
import { link } from "@/styles";

const contentColumn = "mx-auto flex max-w-2xl flex-col gap-8 text-left";

function ServicePageBody({ page }: { page: ServicePageCopy }) {
  return (
    <main className="min-h-screen pt-20 md:pt-0">
      <Section variant="white">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-4 text-left">
          <Text variant="h1" className="w-full text-center">
            {page.hero.title}
          </Text>
          <Text variant="subtitle" className="w-full text-center">
            {page.hero.subtitle}
          </Text>
          <div className="flex w-full justify-center pt-2">
            <Button href={SCHEDULE_URL} variant="primary">
              {page.hero.cta}
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          <Text variant="h2">{page.who.title}</Text>
          <Text variant="text">{page.who.intro}</Text>
          <BulletList items={page.who.items} />
        </div>
      </Section>

      <Section variant="white">
        <div className={contentColumn}>
          <Text variant="h2">{page.what.title}</Text>
          {page.what.paragraphs.map((paragraph) => (
            <Text key={paragraph} variant="text">
              <LinkedText>{paragraph}</LinkedText>
            </Text>
          ))}
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          <Text variant="h2">{page.expect.title}</Text>
          {page.expect.intro ? (
            <Text variant="text">{page.expect.intro}</Text>
          ) : null}
          <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-body">
            {page.expect.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </Section>

      <Section variant="white">
        <div className={contentColumn}>
          <Text variant="h2">{page.related.title}</Text>
          <Text variant="text">{page.related.paragraph}</Text>
          <ul className="flex flex-col gap-2">
            {page.related.links.map((item) => (
              <li key={item.href}>
                <NextLink href={item.href} className={link.root}>
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="green">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Text variant="h2">{page.closing.title}</Text>
          <Text variant="text">{page.closing.paragraph}</Text>
          <Button href={SCHEDULE_URL} variant="primary">
            {page.closing.cta}
          </Button>
          <NextLink href={page.closing.cliniciansHref} className={link.root}>
            {page.closing.cliniciansLabel}
          </NextLink>
        </div>
      </Section>
    </main>
  );
}

export function TherapyPageContent() {
  const { locale } = useLanguage();
  const page = getServicePagesContent(locale).therapy;
  return <ServicePageBody page={page} />;
}

export function AdhdTestingPageContent() {
  const { locale } = useLanguage();
  const page = getServicePagesContent(locale).adhdTesting;
  return <ServicePageBody page={page} />;
}

export function MedicationManagementPageContent() {
  const { locale } = useLanguage();
  const page = getServicePagesContent(locale).medicationManagement;
  return <ServicePageBody page={page} />;
}

export function ServicesHubPageContent() {
  const { locale } = useLanguage();
  const hub = getServicePagesContent(locale).hub;

  return (
    <main className="min-h-screen pt-20 md:pt-0">
      <Section variant="white">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-4 text-left">
          <Text variant="h1" className="w-full text-center">
            {hub.hero.title}
          </Text>
          <Text variant="subtitle" className="w-full text-center">
            {hub.hero.subtitle}
          </Text>
          <div className="flex w-full justify-center pt-2">
            <Button href={SCHEDULE_URL} variant="primary">
              {hub.hero.cta}
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          {hub.offerings.map((offering) => (
            <div key={offering.href} className="flex flex-col gap-3">
              <Text variant="h2">{offering.title}</Text>
              <Text variant="text">{offering.blurb}</Text>
              <NextLink href={offering.href} className={`${link.root} self-start`}>
                {offering.learnMore}
              </NextLink>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="white">
        <div className={contentColumn}>
          <Text variant="h2">{hub.braincheck.title}</Text>
          <Text variant="text">
            <LinkedText>{hub.braincheck.paragraph}</LinkedText>
          </Text>
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          <Text variant="h2">{hub.concerns.title}</Text>
          <Text variant="text">{hub.concerns.intro}</Text>
          <div className="[&>ul]:columns-1 [&>ul]:md:columns-2 [&>ul]:gap-8">
            <BulletList items={hub.concerns.items} />
          </div>
        </div>
      </Section>

      <Section variant="white">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Text variant="h2">{hub.closing.title}</Text>
          <Text variant="text">{hub.closing.paragraph}</Text>
          <Button href={SCHEDULE_URL} variant="primary">
            {hub.closing.cta}
          </Button>
        </div>
      </Section>
    </main>
  );
}
