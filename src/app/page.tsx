import {
  Section,
  Text,
  Button,
  Divider,
  Link,
  BulletList,
  SocialIcon,
  Image,
} from "@/components/ui";
import { HERO_LOGO_URL } from "@/constants";
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
          <Text variant="h1">Welcome to Firefly Wellness</Text>
          <Text variant="subtitle" className="-mt-[10px]">(Formerly Firefly Counseling)</Text>
          <Text variant="text">
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
