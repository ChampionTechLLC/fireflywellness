import { insurances } from "@/data/insurances";
import { Image } from "./Image";

export function InsuranceLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {insurances.map((insurance) => (
        <div
          key={insurance.name}
          className="flex h-16 w-32 items-center justify-center overflow-hidden rounded bg-section-white"
        >
          <Image
            src={insurance.image}
            alt={insurance.name}
            width={128}
            height={64}
            className={`flex h-full w-full items-center justify-center [&_img]:max-h-full [&_img]:w-auto [&_img]:object-contain ${insurance.className ?? ""}`.trim()}
          />
        </div>
      ))}
    </div>
  );
}
