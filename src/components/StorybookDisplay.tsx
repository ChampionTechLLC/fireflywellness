import {
  Section,
  Text,
  Link,
  Divider,
  Button,
  BulletList,
  SocialIcon,
  Image,
} from "@/components/ui";

/**
 * Storybook-style display of UI components for reference and testing.
 * Renders typography, buttons, links, lists, social icons, and image samples.
 */
export function StorybookDisplay() {
  return (
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
  );
}
