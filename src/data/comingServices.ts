/**
 * Offerings detailed under Services on the home page.
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
    heading: "Additional services we offer:",
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
          "We use BrainCheck to monitor your memory over time. After your first (baseline) assessment, your clinician will go over the results with you, answer your questions, and help you decide what comes next. We offer an initial visit and yearly check-ins to track changes over time.",
        ],
      },
      {
        id: "tova",
        title: "Attention and focus test (T.O.V.A.)",
        paragraphs: [
          "T.O.V.A. (Test of Variables of Attention) is a simple, computer-based test that uses a special device to look at attention and impulse control. It’s one of the tools we may use when evaluating concerns like ADHD and other attention related issues. Your clinician will go over the results with you and use them as part of a larger picture so you can better understand your focus and next steps.",
        ],
      },
    ],
  },
];
