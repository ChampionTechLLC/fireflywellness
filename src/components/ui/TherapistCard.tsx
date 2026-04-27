import { Button, Expandable, Text } from "@/components/ui";
import { bulletList } from "@/styles";
import type { Therapist } from "@/data/therapists";
import type { TherapistContent } from "@/data/siteContent";

type TherapistCardProps = {
  therapist: Therapist;
  content: TherapistContent;
  labels: {
    aboutTitle: string;
    seeMore: string;
    seeLess: string;
    scheduleWith: (firstName: string) => string;
  };
};

export function TherapistCard({ therapist, content, labels }: TherapistCardProps) {
  const { name, credentials, imageUrl, scheduleUrl } =
    therapist;
  const { subtitle, aboutMe, aboutMeBullets } = content;

  const summary = aboutMe[0];
  const remaining = aboutMe.slice(1);
  const tidbits = aboutMeBullets?.slice(0, 5) ?? [];
  const hasMore = remaining.length > 0 || tidbits.length > 0;

  return (
    <article className="flex w-full min-w-0 flex-col sm:max-w-[24rem]">
      <div className="flex flex-col gap-3">
        <Text variant="h3">
          {name}, {credentials}
        </Text>
        {subtitle && (
          <Text variant="subtitle" className="-mt-3">{subtitle}</Text>
        )}
        <Button
          href={scheduleUrl ?? "#"}
          variant="secondary"
          className="mt-0.5 self-start"
        >
          {labels.scheduleWith(name.split(" ")[0])}
        </Button>
      </div>

      <div className="mt-4 aspect-[3/4] w-full overflow-hidden rounded-lg bg-body/20">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={`${name}, ${credentials}`}
            className="h-full w-full object-cover [image-rendering:-webkit-optimize-contrast]"
          />
        ) : (
          <div
            className="h-full w-full bg-body/30"
            aria-hidden
          />
        )}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <Text variant="h4">{labels.aboutTitle}</Text>
        {summary && !hasMore && (
          <Text variant="text">{summary}</Text>
        )}

        {summary && hasMore && (
          <Expandable
            collapsed={<Text variant="text">{summary}</Text>}
            moreLabel={labels.seeMore}
            lessLabel={labels.seeLess}
          >
            {remaining.length > 0 && (
              <div className="flex flex-col gap-2">
                {remaining.map((paragraph, i) => (
                  <Text key={i} variant="text">
                    {paragraph}
                  </Text>
                ))}
              </div>
            )}

            {tidbits.length > 0 && (
              <ul className={bulletList.listSection}>
                {tidbits.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </Expandable>
        )}
      </div>
    </article>
  );
}
