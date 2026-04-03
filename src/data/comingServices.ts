/**
 * Upcoming offerings detailed under Services on the home page.
 */

export type ComingService = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  /** Omitted for coming-soon offerings with no scheduling yet. */
  cta?: { label: string; href: string };
};

export type ComingServiceGroup = {
  heading: string;
  items: ComingService[];
};

export const comingServiceGroups: ComingServiceGroup[] = [
  {
    heading: "Coming May 2026",
    items: [
      {
        id: "medication",
        title: "Medication management",
        paragraphs: [
          "Some people still feel very low, anxious, or on edge even when therapy is going well. Medicine can ease those symptoms enough to sleep, focus, and benefit from the work you do in therapy. We will offer prescribing visits and medication management with a clinician on our team.",
        ],
      },
      {
        id: "braincheck",
        title: "Memory and thinking checks using BrainCheck",
        paragraphs: [
          "We use BrainCheck to help track your memory over time. Someone on our team will go over your results with you. They will answer your questions and help you plan what to do next. We will offer a first visit and yearly check-ins.",
        ],
      },
      {
        id: "tova",
        title: "Attention and focus test (T.O.V.A.)",
        paragraphs: [
          "T.O.V.A. is a computer test that measures attention and impulse control. It helps when you are not sure about focus, finishing tasks, or slowing down when you need to. Your clinician uses the results as one part of your evaluation—not the whole story. We will offer T.O.V.A. assessments for clients who need them.",
        ],
      },
    ],
  },
];
