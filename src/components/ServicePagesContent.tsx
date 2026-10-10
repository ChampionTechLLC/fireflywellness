"use client";

import NextLink from "next/link";
import {
  BulletList,
  Button,
  Divider,
  InsuranceLogos,
  LinkedText,
  Section,
  ServiceIcon,
  ServiceListItem,
  Text,
} from "@/components/ui";
import { useLanguage } from "@/components/LanguageProvider";
import { SCHEDULE_URL } from "@/constants";
import {
  getServicePagesContent,
  type ServicePageCopy,
  type ServicePagesContent,
} from "@/data/servicePages";
import { testingToolsIcon } from "@/data/serviceIcons";
import { link } from "@/styles";

const contentColumn = "mx-auto flex max-w-2xl flex-col gap-8 text-left";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="mt-0.5 h-5 w-5 shrink-0 text-heading"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ServicePageBody({ page }: { page: ServicePageCopy }) {
  const { localize } = useLanguage();
  const sections: { key: string; content: React.ReactNode }[] = [];

  sections.push({
    key: "who",
    content: (
      <div className={contentColumn}>
        <Text variant="h2">{page.who.title}</Text>
        <Text variant="text">{page.who.intro}</Text>
        <BulletList items={page.who.items} />
        {page.who.closing ? (
          <Text variant="text">{page.who.closing}</Text>
        ) : null}
      </div>
    ),
  });

  if (page.carePath) {
    sections.push({
      key: "carePath",
      content: (
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
            <Text variant="h2">{page.carePath.title}</Text>
            <Text variant="text">{page.carePath.intro}</Text>
          </div>
          <ol className="grid gap-6 md:grid-cols-5 md:gap-4">
            {page.carePath.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 md:flex-col md:items-center md:text-center"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-section-green text-base font-semibold text-heading">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <Text variant="h4" as="h3">
                    {step.title}
                  </Text>
                  <Text variant="text">
                    <LinkedText>{step.description}</LinkedText>
                  </Text>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex justify-center">
            <Button href={SCHEDULE_URL} variant="primary">
              {page.hero.cta}
            </Button>
          </div>
        </div>
      ),
    });
  }

  if (page.insurance) {
    sections.push({
      key: "insurance",
      content: (
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
          <Text variant="h2">{page.insurance.title}</Text>
          <Text variant="text">{page.insurance.paragraph}</Text>
          <InsuranceLogos />
          <Divider />
          <Text variant="text">{page.insurance.cashPay}</Text>
          {page.insurance.feesLink ? (
            <NextLink
              href={localize("/insurance-fees")}
              className={`${link.root} self-center`}
            >
              {page.insurance.feesLink}
            </NextLink>
          ) : null}
        </div>
      ),
    });
  }

  if (page.whyFirefly) {
    sections.push({
      key: "whyFirefly",
      content: (
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <Text variant="h2" className="text-center">
            {page.whyFirefly.title}
          </Text>
          <div className="grid gap-4 md:grid-cols-2">
            {page.whyFirefly.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-lg bg-section-white p-5"
              >
                <Text variant="h4" as="h3">
                  {item.title}
                </Text>
                <Text variant="text">
                  <LinkedText>{item.paragraph}</LinkedText>
                </Text>
              </div>
            ))}
          </div>
        </div>
      ),
    });
  }

  if (page.what) {
    const what = page.what;
    sections.push({
      key: "what",
      content: (
        <div className={contentColumn}>
          <Text variant="h2">{what.title}</Text>
          {what.paragraphs.map((paragraph) => (
            <Text key={paragraph} variant="text">
              <LinkedText>{paragraph}</LinkedText>
            </Text>
          ))}
        </div>
      ),
    });
  }

  for (const topic of page.topics ?? []) {
    sections.push({
      key: `topic-${topic.id}`,
      content: (
        <div id={topic.id} className={contentColumn}>
          <Text variant="h2">{topic.title}</Text>
          {topic.intro ? <Text variant="text">{topic.intro}</Text> : null}
          {topic.bullets ? <BulletList items={topic.bullets} /> : null}
          {topic.paragraphs?.map((paragraph) => (
            <Text key={paragraph} variant="text">
              <LinkedText>{paragraph}</LinkedText>
            </Text>
          ))}
          {topic.links ? (
            <ul className="flex flex-col gap-2">
              {topic.links.map((item) => (
                <li key={item.href}>
                  <NextLink href={localize(item.href)} className={link.root}>
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ),
    });
  }

  if (page.expect) {
    const expect = page.expect;
    sections.push({
      key: "expect",
      content: (
        <div className={contentColumn}>
          <Text variant="h2">{expect.title}</Text>
          {expect.intro ? <Text variant="text">{expect.intro}</Text> : null}
          <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-body">
            {expect.steps.map((step) => (
              <li key={step}>
                <LinkedText>{step}</LinkedText>
              </li>
            ))}
          </ol>
        </div>
      ),
    });
  }

  if (page.ongoingCare) {
    const ongoingCare = page.ongoingCare;
    sections.push({
      key: "ongoingCare",
      content: (
        <div className={contentColumn}>
          <Text variant="h2">{ongoingCare.title}</Text>
          {ongoingCare.paragraphs.map((paragraph) => (
            <Text key={paragraph} variant="text">
              <LinkedText>{paragraph}</LinkedText>
            </Text>
          ))}
        </div>
      ),
    });
  }

  if (page.related) {
    const related = page.related;
    sections.push({
      key: "related",
      content: (
        <div className={contentColumn}>
          <Text variant="h2">{related.title}</Text>
          <Text variant="text">{related.paragraph}</Text>
          <ul className="flex flex-col gap-2">
            {related.links.map((item) => (
              <li key={item.href}>
                <NextLink href={localize(item.href)} className={link.root}>
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
          {page.note ? <Text variant="text">{page.note}</Text> : null}
        </div>
      ),
    });
  } else if (page.note) {
    sections.push({
      key: "note",
      content: (
        <div className={contentColumn}>
          <Text variant="text">{page.note}</Text>
        </div>
      ),
    });
  }

  if (page.faq) {
    const faq = page.faq;
    sections.push({
      key: "faq",
      content: (
        <div className={contentColumn}>
          <Text variant="h2">{faq.title}</Text>
          {faq.items.map((item) => (
            <div key={item.question} className="flex flex-col gap-2">
              <Text variant="h3">{item.question}</Text>
              <Text variant="text">
                <LinkedText>{item.answer}</LinkedText>
              </Text>
            </div>
          ))}
        </div>
      ),
    });
  }

  const sectionVariant = (index: number) =>
    index % 2 === 0 ? "green" : "white";

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
          {page.hero.serviceArea ? (
            <Text variant="subtitle" className="w-full text-center">
              {page.hero.serviceArea}
            </Text>
          ) : null}
          {page.hero.availabilityNote ? (
            <Text variant="text" className="w-full text-center">
              {page.hero.availabilityNote}
            </Text>
          ) : null}
          {page.hero.highlights ? (
            <ul className="mx-auto grid gap-2 pt-2 sm:grid-cols-2 sm:gap-x-8">
              {page.hero.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-base leading-relaxed text-body"
                >
                  <CheckIcon />
                  <span>
                    <LinkedText>{highlight}</LinkedText>
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="flex w-full justify-center pt-2">
            <Button href={SCHEDULE_URL} variant="primary">
              {page.hero.cta}
            </Button>
          </div>
        </div>
      </Section>

      {sections.map((section, index) => (
        <Section key={section.key} variant={sectionVariant(index)}>
          {section.content}
        </Section>
      ))}

      <Section variant={sectionVariant(sections.length)}>
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
            <NextLink
              href={localize(page.closing.cliniciansHref)}
              className={link.root}
            >
              {page.closing.cliniciansLabel}
            </NextLink>
          ) : null}
        </div>
      </Section>
    </main>
  );
}

export function ServicePageContent({
  pageKey,
}: {
  pageKey: Exclude<keyof ServicePagesContent, "hub">;
}) {
  const { locale } = useLanguage();
  const page = getServicePagesContent(locale)[pageKey];
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
              <LinkedText>{paragraph}</LinkedText>
            </Text>
          ))}
        </div>
      </Section>

      <Section variant="white">
        <div className={contentColumn}>
          <Text variant="h2">{hub.offeringsTitle}</Text>
          {hub.offerings.map((offering) => (
            <ServiceListItem
              key={offering.href}
              {...offering}
              blurb={<LinkedText>{offering.blurb}</LinkedText>}
            />
          ))}
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          <div className="flex items-center gap-4 md:gap-6">
            <ServiceIcon src={testingToolsIcon} />
            <Text variant="h2">{hub.additionalTools.title}</Text>
          </div>
          {hub.additionalTools.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <Text variant="h3">{item.title}</Text>
              <Text variant="text">
                <LinkedText>{item.paragraph}</LinkedText>
              </Text>
            </div>
          ))}
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
              <Text variant="text">
                <LinkedText>{item.answer}</LinkedText>
              </Text>
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
