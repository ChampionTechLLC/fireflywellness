import {
  Section,
  Text,
  Button,
  Divider,
  BulletList,
  Image,
  TherapistCard,
} from "@/components/ui";
import { StorybookDisplay } from "@/components/StorybookDisplay";
import { HERO_LOGO_URL } from "@/constants";
import { therapists } from "@/data/therapists";
import { insurances } from "@/data/insurances";
import { locationData } from "@/data/location";
import { comingServiceGroups } from "@/data/comingServices";
import { services } from "@/data/services";
import { socialLinks } from "@/data/social";
import { bulletList, link, socialIcon } from "@/styles";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex w-full justify-center pb-2 pt-4 md:hidden">
        <Button
          href="https://google.com"
          variant="primary"
        >
          Schedule an Appointment
        </Button>
      </div>
      <Image src={HERO_LOGO_URL} alt="Firefly Wellness logo" className="p-[1.65rem] max-w-[80%] [&_img]:max-w-full" />
      <Section variant="green">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-4 text-left">
          <Text variant="h1" className="w-full text-center">
            Welcome to Firefly Wellness
          </Text>
          <Text variant="subtitle" className="-mt-[10px] w-full text-center">
            (Formerly Firefly Counseling)
          </Text>
          <Text variant="text" className="mt-2 w-full">
            In 2017, Firefly Counseling was founded to help people find their light during challenging seasons.
          </Text>
          <Text variant="text" className="w-full">
            In 2026, Firefly Counseling has grown into Firefly Wellness, reflecting our expanded approach to care.
          </Text>
          <Text variant="text" className="w-full">
            Starting May 2026, we will be offering:
          </Text>
          <ul className={`${bulletList.listSection} w-full pl-4`}>
            <li>Clinical Cognitive Assessments for ADHD and dementia</li>
            <li>Medication Management</li>
          </ul>
          <Text variant="text" className="w-full">
            Our mission remains the same: provide thoughtful, evidence-based, and compassionate care—now with even more ways to support your well-being.
          </Text>
          <Text variant="text" className="w-full">
            <a href="#comprehensive-wellness" className={link.root}>
              Learn more
            </a>
          </Text>
        </div>
      </Section>
      <Section variant="white">
        <div className="mx-auto flex max-w-2xl flex-col gap-8 text-left">
          <Text variant="h2">Why Therapy</Text>
          <Text variant="text">
            Life can feel overwhelming. Trauma, chronic stress, relationship strain, or major transitions can leave you anxious, low, or stuck in unhelpful patterns.
          </Text>
          <Text variant="text">
            You are not alone. According to the National Alliance on Mental Illness (NAMI), 1 in 5 adults experience mental health challenges each year. Struggling doesn’t mean you’re failing.
          </Text>
          <Text variant="text">
            Therapy can help. At Firefly Wellness, we walk alongside you as you reconnect with your strengths and move toward a steadier, more meaningful life.
          </Text>

          <Text variant="h2">What to Expect</Text>
          <Text variant="text">
            Therapy provides a safe, nonjudgmental space for reflection, growth, and change. While medication can support some individuals, therapy focuses on:
          </Text>
          <ul className={bulletList.listSection}>
            <li>Understanding your thoughts, emotions, and patterns</li>
            <li>Strengthening coping skills</li>
            <li>Creating sustainable emotional and behavioral shifts</li>
          </ul>
          <Text variant="text">
            Together with your therapist, you’ll clarify goals, develop practical strategies, and work toward meaningful progress. Feeling nervous is completely normal — most clients do — and starting therapy is often described as one of the most valuable steps they’ve taken for themselves.
          </Text>
        </div>
      </Section>

      <Section variant="green">
        <div
          id="comprehensive-wellness"
          className="mx-auto flex max-w-2xl scroll-mt-24 flex-col gap-8 text-left"
        >
          <Text variant="h2">A More Comprehensive Approach to Wellness</Text>
          {comingServiceGroups.map((group) => (
            <div key={group.heading} className="flex flex-col gap-6">
              <Text variant="h3">{group.heading}</Text>
              {group.items.map((item) => (
                <div key={item.id} className="flex flex-col gap-3">
                  <Text variant="h4">{item.title}</Text>
                  {item.paragraphs.map((paragraph, i) => (
                    <Text key={i} variant="text">
                      {paragraph}
                    </Text>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section variant="white">
        <div className="mx-auto flex max-w-2xl flex-col gap-8 text-left">
          <Text variant="h2">Our Commitment</Text>
          <BulletList
            items={[
              "Evidence-based care",
              "Warm, collaborative relationships",
              "Respect for your individuality",
              "Ethical, thoughtful clinical practice",
            ]}
          />
          <Text variant="text">
            At Firefly Wellness, our mission is to help you move from simply coping to truly thriving.
          </Text>
        </div>
      </Section>

      <Section variant="green">
        <div
          id="clinicians"
          className="mx-auto flex max-w-[72rem] scroll-mt-24 flex-col gap-8"
        >
          <Text variant="h2" className="text-center">
            Meet Your Clinicians
          </Text>
          <div className="flex flex-wrap justify-center gap-10">
            {therapists.map((therapist) => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </div>
        </div>
      </Section>

      <Section variant="white">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <Text variant="h2" className="text-center">
            Insurance We Accept
          </Text>
          <div className="flex flex-wrap justify-center gap-8">
            {insurances.map((insurance) => (
              <div key={insurance.name} className="flex h-16 w-32 items-center justify-center rounded bg-section-white">
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
            We also accept cash pay and out-of-network insurances.
          </Text>
        </div>
      </Section>

      <Section variant="green">
        <div
          id="services"
          className="mx-auto flex max-w-2xl scroll-mt-24 flex-col gap-8 text-left"
        >
          <Text variant="h2">Services (available in English and Spanish)</Text>
          <Text variant="text">
            We are happy to offer a wide array of services and multiple modalities to best fit your needs.
          </Text>
          <div className="[&>ul]:columns-1 [&>ul]:md:columns-2 [&>ul]:gap-8">
            <BulletList items={services} />
          </div>
        </div>
      </Section>

      <Section variant="white">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <Text variant="h2" className="text-center">Let's Talk.</Text>
          <Text variant="subtitle" className="text-center">Schedule your appointment today!</Text>
          <div className="flex w-full flex-wrap justify-center gap-x-14 gap-y-16 text-center md:gap-x-16 md:gap-y-20 md:text-left">
            {therapists.map((therapist) => (
              <div key={therapist.id} className="flex w-full min-w-0 basis-full flex-col items-center gap-2 md:basis-auto md:w-auto md:items-start">
                <Text variant="h4">{therapist.name}, {therapist.credentials}</Text>
                <Text variant="text">{therapist.email}</Text>
                <Text variant="text">{therapist.phone}</Text>
                <Button href={therapist.scheduleUrl ?? "#"} variant="primary" className="mt-1 w-full md:w-auto md:self-start">
                  Schedule with {therapist.name.split(" ")[0]}
                </Button>
              </div>
            ))}
          </div>
          <div className="w-full">
            <Divider />
          </div>
          {locationData.length > 0 && (
            <div className="flex w-full flex-col items-center gap-2 text-center">
              <Text variant="h4">Address</Text>
              {locationData.map((address, i) => (
                <address key={i} className="not-italic">
                  <Text variant="text" className="text-center">{address.address1}</Text>
                  {address.address2 && (
                    <Text variant="text" className="text-center">{address.address2}</Text>
                  )}
                  <Text variant="text" className="text-center">
                    {address.city}, {address.state} {address.zip}
                  </Text>
                  {address.fax && (
                    <Text variant="text" className="text-center">
                      Fax: {address.fax}
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
                title="Office location"
                src={locationData[0].mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col items-center gap-6">
              <Text variant="h4" className="lowercase">
                follow firefly
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
