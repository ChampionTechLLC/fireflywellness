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
          {page.hero.availabilityNote ? (
            <Text variant="text" className="w-full text-center">
              {page.hero.availabilityNote}
            </Text>
          ) : null}
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

      {page.related ? (
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
            {page.note ? <Text variant="text">{page.note}</Text> : null}
          </div>
        </Section>
      ) : page.note ? (
        <Section variant="white">
          <div className={contentColumn}>
            <Text variant="text">{page.note}</Text>
          </div>
        </Section>
      ) : null}

      {page.faq ? (
        <Section variant="green">
          <div className={contentColumn}>
            <Text variant="h2">{page.faq.title}</Text>
            {page.faq.items.map((item) => (
              <div key={item.question} className="flex flex-col gap-2">
                <Text variant="h3">{item.question}</Text>
                <Text variant="text">
                  <LinkedText>{item.answer}</LinkedText>
                </Text>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      <Section
        variant={page.faq || !page.related ? "white" : "green"}
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 pb-8 text-center">
          <Text variant="h2">{page.closing.title}</Text>
          <Text variant="text">{page.closing.paragraph}</Text>
          {page.closing.cta ? (
            <div className="flex w-full justify-center pt-6">
              <Button href={SCHEDULE_URL} variant="primary">
                {page.closing.cta}
              </Button>
            </div>
          ) : null}
          {page.closing.scheduleLabel ? (
            <Text variant="text" className={page.closing.cta ? undefined : "pt-6"}>
              <a
                href={SCHEDULE_URL}
                className={link.root}
                target="_blank"
                rel="noopener noreferrer"
              >
                {page.closing.scheduleLabel}
              </a>
            </Text>
          ) : null}
          {page.closing.cliniciansLabel && page.closing.cliniciansHref ? (
            <NextLink href={page.closing.cliniciansHref} className={link.root}>
              {page.closing.cliniciansLabel}
            </NextLink>
          ) : null}
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
          <Text variant="h2">{hub.overview.title}</Text>
          {hub.overview.paragraphs.map((paragraph) => (
            <Text key={paragraph} variant="text">
              {paragraph}
            </Text>
          ))}
        </div>
      </Section>

      <Section variant="white">
        <div className={contentColumn}>
          <Text variant="h2">{hub.offeringsTitle}</Text>
          {hub.offerings.map((offering) => (
            <div key={offering.href} className="flex flex-col gap-3">
              <Text variant="h3">{offering.title}</Text>
              <Text variant="text">{offering.blurb}</Text>
              <NextLink href={offering.href} className={`${link.root} self-start`}>
                {offering.learnMore}
              </NextLink>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          <Text variant="h2">{hub.braincheck.title}</Text>
          <Text variant="text">
            <LinkedText>{hub.braincheck.paragraph}</LinkedText>
          </Text>
        </div>
      </Section>

      <Section variant="white">
        <div className={contentColumn}>
          <Text variant="h2">{hub.concerns.title}</Text>
          <Text variant="text">{hub.concerns.intro}</Text>
          <div className="[&>ul]:columns-1 [&>ul]:md:columns-2 [&>ul]:gap-8">
            <BulletList items={hub.concerns.items} />
          </div>
          <Text variant="text">{hub.concerns.note}</Text>
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          <Text variant="h2">{hub.faq.title}</Text>
          {hub.faq.items.map((item) => (
            <div key={item.question} className="flex flex-col gap-2">
              <Text variant="h3">{item.question}</Text>
              <Text variant="text">{item.answer}</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="white">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 pb-8 text-center">
          <Text variant="h2">{hub.closing.title}</Text>
          <Text variant="text">{hub.closing.paragraph}</Text>
          <div className="flex w-full justify-center pt-6">
            <Button href={SCHEDULE_URL} variant="primary">
              {hub.closing.cta}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
