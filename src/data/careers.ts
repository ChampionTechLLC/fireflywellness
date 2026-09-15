export type CareersListing = {
  title: string;
  meta: {
    location: string;
    employmentType: string;
    compensation: string;
  };
  intro: string[];
  whyJoin: {
    heading: string;
    paragraphs: string[];
  };
  responsibilities: {
    heading: string;
    items: string[];
  };
  qualifications: {
    heading: string;
    items: string[];
  };
  cultureAndPerks: {
    heading: string;
    items: string[];
  };
  caseload: {
    heading: string;
    paragraph: string;
  };
  apply: {
    heading: string;
    paragraph: string;
    ctaLabel: string;
  };
};

export const lcpcListing: CareersListing = {
  title: "Licensed Clinical Professional Counselor (LCPC)",
  meta: {
    location: "Location: Hinsdale, IL (Hybrid)",
    employmentType: "Employment Type: W-2 Employee",
    compensation:
      "Compensation: Starting at $50 per completed clinical session, with additional compensation available for clinicians able to provide therapy in Polish.",
  },
  intro: [
    "Firefly Wellness is seeking a licensed therapist to join our growing team in Hinsdale.",
    "For nearly a decade, Firefly has provided high-quality counseling services to individuals and families across Illinois. In addition to therapy, we are expanding into a more comprehensive behavioral health model that includes medication management and ADHD/cognitive testing through our on-staff Psychiatric Mental Health Nurse Practitioner (PMHNP).",
    "We are looking for a clinician who enjoys working with adolescents, college students, young adults, and emerging professionals, while also being comfortable supporting adult clients.",
  ],
  whyJoin: {
    heading: "Why Join Firefly",
    paragraphs: [
      "At Firefly Wellness, therapists are not expected to build their own caseload from scratch. We provide referrals, administrative support, and a collaborative environment that allows clinicians to focus on clinical care.",
      "This role includes the opportunity to immediately absorb approximately 10–12 weekly appointments from an existing caseload.",
      "As our organization grows, clients will have access to therapy, psychiatric medication management, ADHD evaluations, and cognitive testing within one coordinated practice. We believe this integrated approach leads to better outcomes for both clients and providers.",
    ],
  },
  responsibilities: {
    heading: "Responsibilities",
    items: [
      "Provide individual therapy to adolescents, young adults, and adults",
      "Conduct assessments and develop treatment plans",
      "Complete timely, accurate clinical documentation",
      "Collaborate with colleagues and psychiatric providers as needed",
      "Maintain ethical and professional standards consistent with Illinois licensure requirements",
    ],
  },
  qualifications: {
    heading: "Qualifications",
    items: [
      "LCPC required",
      "2+ years of clinical experience preferred",
      "Experience with adolescents, college students, and young adults",
      "Comfortable treating anxiety, depression, ADHD, trauma, relationship concerns, and life transitions",
      "Strong foundation in CBT and evidence-based treatment approaches",
      "Spanish-speaking clinicians encouraged to apply",
      "Polish-speaking clinicians strongly encouraged to apply",
    ],
  },
  cultureAndPerks: {
    heading: "Culture and Perks",
    items: [
      "Flexible scheduling",
      "Hybrid work model",
      "Autonomy over scheduling",
      "Established referral stream",
      "PTO available beginning at 25 sessions per week",
      "Technology stipend/credit",
      "Continuing education support",
      "Healthcare credit provided until health insurance benefits begin in late 2026",
      "Differential or additional compensation available for clinicians able to provide therapy in Polish",
    ],
  },
  caseload: {
    heading: "Caseload Expectations",
    paragraph:
      "Typical full-time clinicians maintain 25–30 sessions per week.",
  },
  apply: {
    heading: "Apply",
    paragraph:
      "Please submit your resume and a brief cover letter outlining your clinical experience, populations of interest, and preferred schedule.",
    ctaLabel: "Apply by email",
  },
};
