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
    items: string[];
  };
  responsibilities: {
    heading: string;
    items: string[];
  };
  qualifications: {
    heading: string;
    items: string[];
  };
  apply: {
    heading: string;
    paragraph: string;
    ctaLabel: string;
  };
};

export const lcpcListing: CareersListing = {
  title: "Licensed Clinical Professional Counselor / Social Worker (LCPC, LCSW)",
  meta: {
    location: "Location: Hinsdale, IL (Hybrid)",
    employmentType:
      "Employment Type: Full-Time W-2, typical caseload of 25 sessions per week",
    compensation:
      "Compensation: Competitive compensation and benefits structure based on experience",
  },
  intro: [
    "Firefly Wellness is seeking a full-time LCPC or LCSW to join our growing Hinsdale practice. Since 2017, Firefly has provided high-quality counseling to individuals and families throughout Chicago’s western suburbs.",
  ],
  whyJoin: {
    heading: "Why Join Firefly",
    items: [
      "6–10 established weekly clients immediately—no need to build a caseload from scratch",
      "Consistent referral stream and administrative support",
      "Flexible scheduling and hybrid work model",
      "Integrated behavioral health services, including therapy, psychiatric medication management, ADHD evaluations, and cognitive testing—all within one coordinated practice",
      "PTO, technology credit & continuing education support",
      "Healthcare stipend provided until health insurance benefits begin in 2027",
      "Quarterly team outings",
      "Additional compensation for Polish- or Spanish-speaking clinicians",
    ],
  },
  responsibilities: {
    heading: "Responsibilities",
    items: [
      "Provide individual therapy to adolescents, young adults, and adults",
      "Conduct assessments and develop treatment plans",
      "Complete timely, accurate clinical documentation",
      "Collaborate with colleagues and psychiatric providers as needed",
      "Maintain ethical and professional standards consistent with Illinois licensure",
    ],
  },
  qualifications: {
    heading: "Qualifications",
    items: [
      "LCPC or LCSW required",
      "Experience working with adolescents, college students, and young adults",
      "Comfortable treating anxiety, depression, ADHD, trauma, relationship concerns, and life transitions",
      "Strong foundation in CBT and evidence-based treatment approaches",
    ],
  },
  apply: {
    heading: "Apply",
    paragraph:
      "Please submit your resume and a brief cover letter outlining your clinical experience, populations of interest, and preferred schedule to our hiring team.",
    ctaLabel: "Apply by email",
  },
};
