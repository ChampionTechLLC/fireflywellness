"use client";

import { lcpcListing } from "@/data/careers";
import {
  CAREERS_APPLY_EMAIL,
  CAREERS_APPLY_SUBJECT,
} from "@/constants";
import { link } from "@/styles";

const listing = lcpcListing;

const applyMailto = `mailto:${CAREERS_APPLY_EMAIL}?subject=${encodeURIComponent(CAREERS_APPLY_SUBJECT)}`;

function ListingBlock({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-heading">{heading}</h2>
      {children}
    </section>
  );
}

function PlainList({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-1 pl-0 text-base leading-snug text-body">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CareersPageContent() {
  const { meta } = listing;

  return (
    <main className="min-h-screen bg-background pt-20 md:pt-0">
      <article className="mx-auto max-w-2xl px-6 py-10 md:px-8 md:py-14">
        <header className="space-y-3 border-b border-body/15 pb-6">
          <h1 className="text-xl font-medium text-heading md:text-2xl">
            {listing.title}
          </h1>
          <ul className="space-y-0.5 text-sm text-muted">
            <li>{meta.location}</li>
            <li>{meta.employmentType}</li>
            <li>{meta.compensation}</li>
          </ul>
        </header>

        <div className="mt-6 space-y-6 text-base leading-relaxed text-body">
          {listing.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <ListingBlock heading={listing.whyJoin.heading}>
            <div className="space-y-3">
              {listing.whyJoin.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ListingBlock>

          <ListingBlock heading={listing.responsibilities.heading}>
            <PlainList items={listing.responsibilities.items} />
          </ListingBlock>

          <ListingBlock heading={listing.qualifications.heading}>
            <PlainList items={listing.qualifications.items} />
          </ListingBlock>

          <ListingBlock heading={listing.cultureAndPerks.heading}>
            <PlainList items={listing.cultureAndPerks.items} />
          </ListingBlock>

          <ListingBlock heading={listing.caseload.heading}>
            <p>{listing.caseload.paragraph}</p>
          </ListingBlock>

          <ListingBlock heading={listing.apply.heading}>
            <p>{listing.apply.paragraph}</p>
            <p>
              <a href={applyMailto} className={link.root}>
                {CAREERS_APPLY_EMAIL}
              </a>
            </p>
          </ListingBlock>
        </div>
      </article>
    </main>
  );
}
