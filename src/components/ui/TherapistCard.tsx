import { Button, Expandable, Text } from "@/components/ui";
import { bulletList } from "@/styles";
import type { Therapist } from "@/data/therapists";

type TherapistCardProps = {
  therapist: Therapist;
};

export function TherapistCard({ therapist }: TherapistCardProps) {
  const { name, credentials, subtitle, imageUrl, aboutMe, aboutMeBullets, scheduleUrl } =
    therapist;

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
          Schedule with {name.split(" ")[0]}
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
        <Text variant="h4">About me</Text>
        {summary && !hasMore && (
          <Text variant="text">{summary}</Text>
        )}

        {summary && hasMore && (
          <Expandable collapsed={<Text variant="text">{summary}</Text>}>
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
