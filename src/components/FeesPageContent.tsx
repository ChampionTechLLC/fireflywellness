"use client";

import {
  BulletList,
  Button,
  Divider,
  InsuranceLogos,
  LinkedText,
  Section,
  Text,
} from "@/components/ui";
import { useLanguage } from "@/components/LanguageProvider";
import { SCHEDULE_URL } from "@/constants";
import { getFeesPageContent } from "@/data/feesPage";
import { link } from "@/styles";

const contentColumn = "mx-auto flex max-w-2xl flex-col gap-8 text-left";
const CMS_NO_SURPRISES_LABEL = "www.cms.gov/nosurprises";
const CMS_NO_SURPRISES_URL = "https://www.cms.gov/nosurprises";

function WithCmsLink({ text }: { text: string }) {
  const [before, after] = text.split(CMS_NO_SURPRISES_LABEL);
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <a
        href={CMS_NO_SURPRISES_URL}
        className={link.root}
        target="_blank"
        rel="noopener noreferrer"
      >
        {CMS_NO_SURPRISES_LABEL}
      </a>
      {after}
    </>
  );
}

export function FeesPageContent() {
  const { locale } = useLanguage();
  const page = getFeesPageContent(locale);

  return (
    <main className="min-h-screen pt-20 md:pt-0">
      <Section variant="white">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 text-center">
          <Text variant="h1">{page.hero.title}</Text>
          <Text variant="subtitle">{page.hero.subtitle}</Text>
          <div className="pt-2">
            <Button href={SCHEDULE_URL} variant="primary">
              {page.hero.cta}
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="green">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
          <Text variant="h2">{page.insurance.title}</Text>
          <Text variant="text">{page.insurance.paragraph}</Text>
          <InsuranceLogos />
          <Divider />
          <Text variant="text">{page.insurance.verify}</Text>
        </div>
      </Section>

      <Section variant="white">
        <div className={contentColumn}>
          <Text variant="h2">{page.selfPay.title}</Text>
          <Text variant="text">{page.selfPay.intro}</Text>
          <ul className="flex flex-col divide-y divide-body/20 border-y border-body/20">
            {page.selfPay.items.map((item) => (
              <li
                key={item.service}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              >
                <div className="flex flex-col gap-1">
                  <Text variant="h4" as="h3">
                    {item.service}
                  </Text>
                  <Text variant="text">
                    <LinkedText>{item.details}</LinkedText>
                  </Text>
                </div>
                <p
                  className="shrink-0 text-lg font-semibold text-heading sm:text-right"
                  aria-label={`${page.selfPay.priceLabel}: ${item.price}`}
                >
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
          <Text variant="text">{page.selfPay.note}</Text>
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          <Text variant="h2">{page.payment.title}</Text>
          {page.payment.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <Text variant="h3">{item.title}</Text>
              <Text variant="text">{item.paragraph}</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="white">
        <div id="good-faith-estimate" className={contentColumn}>
          <Text variant="h2">{page.goodFaith.title}</Text>
          <Text variant="text">{page.goodFaith.intro}</Text>
          <BulletList items={page.goodFaith.items} />
          <Text variant="text">
            <WithCmsLink text={page.goodFaith.contact} />
          </Text>
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          <Text variant="h2">{page.faq.title}</Text>
          {page.faq.items.map((item) => (
            <div key={item.question} className="flex flex-col gap-2">
              <Text variant="h3">{item.question}</Text>
              <Text variant="text">{item.answer}</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="white">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 pb-8 text-center">
          <Text variant="h2">{page.closing.title}</Text>
          <Text variant="text">{page.closing.paragraph}</Text>
          <div className="pt-6">
            <Button href={SCHEDULE_URL} variant="primary">
              {page.closing.cta}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
