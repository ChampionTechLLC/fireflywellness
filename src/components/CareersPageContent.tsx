"use client";

import { Button, BulletList, Section, Text } from "@/components/ui";
import { lcpcListing } from "@/data/careers";
import {
  CAREERS_APPLY_EMAIL,
  CAREERS_APPLY_SUBJECT,
} from "@/constants";
import { link } from "@/styles";

const listing = lcpcListing;

const applyMailto = `mailto:${CAREERS_APPLY_EMAIL}?subject=${encodeURIComponent(CAREERS_APPLY_SUBJECT)}`;

const contentColumn = "mx-auto flex max-w-2xl flex-col gap-6 text-left";

export function CareersPageContent() {
  const { meta, benefits } = listing;

  return (
    <main className="min-h-screen pt-20 md:pt-0">
      <Section variant="white">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 text-center">
          <Text variant="h1">{listing.pageTitle}</Text>
          <Text variant="subtitle">{listing.pageSubtitle}</Text>
          <div className="pt-2">
            <Button href={applyMailto} variant="primary">
              {listing.apply.ctaLabel}
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="green">
        <div className={contentColumn}>
          {listing.intro.map((paragraph) => (
            <Text key={paragraph} variant="text">
              {paragraph}
            </Text>
          ))}
        </div>
      </Section>

      <Section variant="white">
        <div className={contentColumn}>
          <div className="space-y-2">
            <Text variant="h2">{listing.openRoleHeading}</Text>
            <Text variant="h3">{listing.title}</Text>
            <ul className="space-y-1 text-sm text-muted">
              <li>{meta.location}</li>
              <li>{meta.employmentType}</li>
              <li>{meta.compensation}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Text variant="h3">{listing.whyJoin.heading}</Text>
            <BulletList items={listing.whyJoin.items} />
          </div>

          <div className="space-y-3">
            <Text variant="h3">{benefits.heading}</Text>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[20rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-body/25">
                    <th
                      scope="col"
                      className="py-3 pr-4 text-sm font-semibold text-heading"
                    >
                      {benefits.benefitLabel}
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-right text-sm font-semibold text-heading"
                    >
                      {benefits.amountLabel}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {benefits.items.map((item) => (
                    <tr
                      key={item.name}
                      className="border-b border-body/15"
                    >
                      <td className="py-3 pr-4 text-base text-body">
                        {item.name}
                      </td>
                      <td className="py-3 text-right text-base tabular-nums text-heading">
                        <span className="font-semibold">{item.amount}</span>
                        <span className="ml-1 font-normal text-muted">
                          {item.frequency}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-body/25">
                    <th
                      scope="row"
                      className="py-3 pr-4 text-left text-base font-semibold text-heading"
                    >
                      {benefits.totalLabel}
                    </th>
                    <td className="py-3 text-right text-base font-semibold tabular-nums text-heading">
                      {benefits.totalAmount}
                      <span className="ml-1 font-normal text-muted">
                        annually
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <Text variant="h3">{listing.responsibilities.heading}</Text>
            <BulletList items={listing.responsibilities.items} />
          </div>

          <div className="space-y-3">
            <Text variant="h3">{listing.qualifications.heading}</Text>
            <BulletList items={listing.qualifications.items} />
          </div>
        </div>
      </Section>

      <Section variant="green">
        <div className={`${contentColumn} items-start`}>
          <Text variant="h2">{listing.apply.heading}</Text>
          <Text variant="text">{listing.apply.paragraph}</Text>
          <p>
            <a href={applyMailto} className={link.root}>
              {CAREERS_APPLY_EMAIL}
            </a>
          </p>
          <Button href={applyMailto} variant="secondary">
            {listing.apply.ctaLabel}
          </Button>
        </div>
      </Section>
    </main>
  );
}
