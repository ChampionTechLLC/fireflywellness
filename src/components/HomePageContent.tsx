"use client";

import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Section,
  Text,
  Button,
  Divider,
  BulletList,
  Image,
  TherapistCard,
  LinkedText,
} from "@/components/ui";
import { useLanguage } from "@/components/LanguageProvider";
import { HERO_LOGO_URL, SCHEDULE_URL } from "@/constants";
import { therapists } from "@/data/therapists";
import { insurances } from "@/data/insurances";
import { locationData } from "@/data/location";
import { socialLinks } from "@/data/social";
import { bulletList, link, socialIcon } from "@/styles";

export function HomePageContent() {
  const { content } = useLanguage();
  const home = content.home;
  const [isScheduleCompact, setIsScheduleCompact] = useState(false);
  const scheduleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleScroll() {
      setIsScheduleCompact(true);

      if (scheduleTimerRef.current) {
        clearTimeout(scheduleTimerRef.current);
      }

      scheduleTimerRef.current = setTimeout(() => {
        setIsScheduleCompact(false);
      }, 2000);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scheduleTimerRef.current) {
        clearTimeout(scheduleTimerRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen pt-20 md:pt-0">
      <div
        className={`fixed top-28 z-40 transition-all duration-300 ease-out md:hidden ${
          isScheduleCompact
            ? "left-6 translate-x-0"
            : "left-1/2 -translate-x-1/2"
        }`}
      >
        <Button
          href={SCHEDULE_URL}
          variant="primary"
          className={`shadow-lg transition-all duration-300 ease-out ${
            isScheduleCompact
              ? "h-11 w-11 !rounded-full !p-0 border border-heading/35"
              : "whitespace-nowrap"
          }`}
        >
          {isScheduleCompact ? (
            <>
              <span className="sr-only">{home.mobileSchedule}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <path d="M3 10h18" />
                <rect x="3" y="4" width="18" height="18" rx="2" />
              </svg>
            </>
          ) : (
            home.mobileSchedule
          )}
        </Button>
      </div>
      <Image
        src={HERO_LOGO_URL}
        alt={home.heroLogoAlt}
        className="p-[1.65rem] max-w-[80%] md:max-w-[48%] [&_img]:max-w-full"
      />
      <Section variant="green">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-4 text-left">
          <Text variant="h1" className="w-full text-center">
            {home.intro.title}
          </Text>
          <Text variant="subtitle" className="-mt-[10px] w-full text-center">
            {home.intro.subtitle}
          </Text>
          {home.intro.paragraphs.map((paragraph, i) => (
            <Text
              key={paragraph}
              variant="text"
              className={`${i === 0 ? "mt-2 " : ""}w-full`}
            >
              {paragraph}
            </Text>
          ))}
          <Text variant="text" className="w-full">
            {home.intro.offerLead}
          </Text>
          <ul className={`${bulletList.listSection} w-full pl-4`}>
            {home.intro.offers.map((offer) => (
              <li key={offer.href + offer.label}>
                <NextLink href={offer.href} className={link.root}>
                  {offer.label}
                </NextLink>
              </li>
            ))}
          </ul>
          <Text variant="text" className="w-full">
            {home.intro.mission}
          </Text>
        </div>
      </Section>
      <Section variant="white">
        <div className="mx-auto flex max-w-2xl flex-col gap-8 text-left">
          <Text variant="h2" className="text-center">
            {home.servicesOverview.title}
          </Text>
          <Text variant="text">{home.servicesOverview.intro}</Text>
          {home.servicesOverview.items.map((item) => (
            <div key={item.href} className="flex flex-col gap-2">
              <Text variant="h3">{item.title}</Text>
              <Text variant="text">{item.blurb}</Text>
              <NextLink href={item.href} className={`${link.root} self-start`}>
                {item.learnMore}
              </NextLink>
            </div>
          ))}
          <Text variant="text">
            <LinkedText>{home.servicesOverview.supportingNote}</LinkedText>
          </Text>
          <Button href="/services" variant="primary" className="self-start">
            {home.servicesOverview.viewAllCta}
          </Button>
        </div>
      </Section>

      <Section variant="green">
        <div className="mx-auto flex max-w-2xl flex-col gap-8 text-left">
          <Text variant="h2" className="text-center">
            {home.whyFirefly.title}
          </Text>
          <Text variant="text">{home.whyFirefly.intro}</Text>
          <BulletList items={home.whyFirefly.items} />
          <Text variant="text">{home.whyFirefly.closing}</Text>
          <NextLink href="/#clinicians" className={`${link.root} self-start`}>
            {home.whyFirefly.cliniciansLink}
          </NextLink>
          <Text variant="text">
            {home.hiringTeaser.text}{" "}
            <NextLink href={home.hiringTeaser.href} className={link.root}>
              {home.hiringTeaser.linkLabel}
            </NextLink>
          </Text>
        </div>
      </Section>

      <Section variant="white">
        <div
          id="clinicians"
          className="mx-auto flex max-w-[72rem] scroll-mt-24 flex-col gap-8"
        >
          <Text variant="h2" className="text-center">
            {home.clinicians.title}
          </Text>
          <div className="flex flex-wrap justify-center gap-10">
            {therapists.map((therapist) => {
              const therapistContent = home.clinicians.profiles[therapist.id];

              if (!therapistContent) return null;

              return (
                <TherapistCard
                  key={therapist.id}
                  therapist={therapist}
                  content={therapistContent}
                  labels={home.clinicians}
                />
              );
            })}
          </div>
        </div>
      </Section>

      <Section variant="green">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <Text variant="h2" className="text-center">
            {home.insurance.title}
          </Text>
          <div className="flex flex-wrap justify-center gap-8">
            {insurances.map((insurance) => (
              <div
                key={insurance.name}
                className="flex h-16 w-32 items-center justify-center rounded bg-section-white"
              >
                <Image
                  src={insurance.image}
                  alt={insurance.name}
                  width={128}
                  height={64}
                  className="max-h-full max-w-full [&_img]:object-contain"
                />
              </div>
            ))}
          </div>
          <Divider />
          <Text variant="text" className="text-center">
            {home.insurance.cashPay}
          </Text>
        </div>
      </Section>

      <Section variant="white">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <Text variant="h2" className="text-center">
            {home.contact.title}
          </Text>
          <Text variant="subtitle" className="text-center">
            {home.contact.subtitle}
          </Text>
          <div className="flex w-full flex-wrap justify-center gap-x-14 gap-y-16 text-center md:gap-x-16 md:gap-y-20 md:text-left">
            {therapists.map((therapist) => (
              <div
                key={therapist.id}
                className="flex w-full min-w-0 basis-full flex-col items-center gap-2 md:basis-auto md:w-auto md:items-start"
              >
                <Text variant="h4">
                  {therapist.name}, {therapist.credentials}
                </Text>
                <Text variant="text">{therapist.email}</Text>
                <Text variant="text">{therapist.phone}</Text>
                <Button
                  href={therapist.scheduleUrl ?? "#"}
                  variant="primary"
                  className="mt-1 w-full md:w-auto md:self-start"
                >
                  {home.contact.scheduleWith(therapist.name.split(" ")[0])}
                </Button>
              </div>
            ))}
          </div>
          <div className="w-full">
            <Divider />
          </div>
          {locationData.length > 0 && (
            <div className="flex w-full flex-col items-center gap-2 text-center">
              <Text variant="h4">{home.contact.address}</Text>
              {locationData.map((address, i) => (
                <address key={i} className="not-italic">
                  <Text variant="text" className="text-center">
                    {address.address1}
                  </Text>
                  {address.address2 && (
                    <Text variant="text" className="text-center">
                      {address.address2}
                    </Text>
                  )}
                  <Text variant="text" className="text-center">
                    {address.city}, {address.state} {address.zip}
                  </Text>
                  {address.phone && (
                    <Text variant="text" className="text-center">
                      <a href={`tel:${address.phone.replace(/\./g, "")}`} className={link.root}>
                        {home.contact.phone}: {address.phone}
                      </a>
                    </Text>
                  )}
                  {address.fax && (
                    <Text variant="text" className="text-center">
                      {home.contact.fax}: {address.fax}
                    </Text>
                  )}
                </address>
              ))}
            </div>
          )}
        </div>
      </Section>

      {locationData[0]?.mapEmbedUrl && (
        <Section variant="white">
          <div
            id="location"
            className="-mt-10 flex scroll-mt-24 flex-col gap-10 md:-mt-16"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                title={home.contact.mapTitle}
                src={locationData[0].mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col items-center gap-6">
              <Text variant="h4" className="lowercase">
                {home.contact.follow}
              </Text>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className={socialIcon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={link.icon}
                      alt=""
                      className={socialIcon.size}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}
    </main>
  );
}
