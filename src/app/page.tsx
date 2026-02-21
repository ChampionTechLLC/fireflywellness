import {
  Section,
  Text,
  Button,
  Divider,
  Link,
  BulletList,
  SocialIcon,
  Image,
  TherapistCard,
} from "@/components/ui";
import { HERO_LOGO_URL } from "@/constants";
import { therapists } from "@/data/therapists";
import { bulletList } from "@/styles";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Section variant="white">
        <div className="flex flex-col items-center gap-8">
          <Image
            src={HERO_LOGO_URL}
            alt="Firefly Wellness logo"
          />
          <Text variant="h4">
            Light for Your Journey
          </Text>
        </div>
      </Section>
      <Section variant="green">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-left">
          <Text variant="h1" className="text-center">Welcome to Firefly Wellness</Text>
          <Text variant="subtitle" className="-mt-[10px] text-center">(Formerly Firefly Counseling)</Text>
          <Text variant="text" className="mt-2">
            In 2017, Firefly Counseling was founded to help people find their light during challenging seasons.
          </Text>
          <Text variant="text">
            In 2026, Firefly Counseling has grown into Firefly Wellness, reflecting our expanded approach to care. Alongside therapy, we now offer:
          </Text>
          <ul className={bulletList.listSection}>
            <li>Clinical Cognitive Assessments for ADHD and dementia (coming March 2026)</li>
            <li>Medication Management (coming Summer 2026)</li>
          </ul>
          <Text variant="text">
            Our mission remains the same: provide thoughtful, evidence-based, and compassionate care—now with even more ways to support your well-being.
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
        <div className="mx-auto flex max-w-2xl flex-col gap-8 text-left">
          <Text variant="h2">A More Comprehensive Approach to Wellness</Text>
          <Text variant="h3">Clinical Cognitive Assessments (Coming March 2026)</Text>
          <Text variant="text">
            Structured evaluations for:
          </Text>
          <ul className={bulletList.listSection}>
            <li>ADHD</li>
            <li>Executive functioning concerns</li>
            <li>Cognitive changes and dementia screening</li>
          </ul>
          <Text variant="text">
            These assessments provide clarity, direction, and actionable next steps — whether for school accommodations, treatment planning, or peace of mind.
          </Text>

          <Text variant="h3">Medication Management (Coming Summer 2026)</Text>
          <Text variant="text">
            For individuals who may benefit from psychiatric medication, we provide thoughtful, collaborative prescribing. Our approach is never “medication first” — it is always personalized and integrated with therapeutic care when appropriate.
          </Text>
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
        <div className="mx-auto flex max-w-[72rem] flex-col gap-8">
          <Text variant="h2" className="text-center">
            Meet Your Therapists
          </Text>
          <div className="flex flex-wrap justify-center gap-10">
            {therapists.map((therapist) => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </div>
        </div>
      </Section>

      <Section variant="white">
        <div className="flex flex-col gap-8">
          <Text variant="h1">H1 header</Text>
          <Text variant="h2">H2 header</Text>
          <Text variant="h4">H4 header</Text>
          <Text variant="text">
            Lorem ipsum text dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Link href="#">Link/Nav</Link>
          <Divider />
          <Button>Button primary</Button>
          <Button variant="secondary">Button secondary</Button>
          <BulletList
            items={[
              "Bullet list item one",
              "Bullet list item two",
              "Bullet list item three",
            ]}
          />
          <div className="flex flex-wrap gap-3">
            <SocialIcon platform="instagram" href="https://instagram.com" />
            <SocialIcon platform="facebook" href="https://facebook.com" />
            <SocialIcon platform="twitter" href="https://twitter.com" />
            <SocialIcon platform="linkedin" href="https://linkedin.com" />
          </div>
          <Image
            src="https://placehold.co/400x300/png?text=Sample+Image"
            alt="Sample image for components"
          />
        </div>
      </Section>
    </main>
  );
}
