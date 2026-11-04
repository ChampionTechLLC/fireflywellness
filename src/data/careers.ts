export type CareersBenefit = {
  name: string;
  amount: string;
  frequency: string;
};

export type CareersListing = {
  pageTitle: string;
  pageSubtitle: string;
  openRoleHeading: string;
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
  benefits: {
    heading: string;
    benefitLabel: string;
    amountLabel: string;
    items: CareersBenefit[];
    totalLabel: string;
    totalAmount: string;
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
  pageTitle: "Join Our Team",
  pageSubtitle:
    "Firefly Wellness is growing. We're looking for licensed clinicians who want to do meaningful work in a supportive, coordinated practice.",
  openRoleHeading: "Open Position",
  title: "Licensed Therapist (LPC, LCPC, LCSW)",
  meta: {
    location: "Location: Hinsdale, IL (Hybrid)",
    employmentType: "Employment Type: W-2 or 1099",
    compensation: "Estimated annual compensation: $70,000–$90,000",
  },
  intro: [
    "Firefly Wellness is seeking an LPC, LCPC or LCSW to join our growing Hinsdale practice. Since 2017, Firefly has provided high-quality mental health services to individuals and families throughout Chicago's western suburbs. We offer integrated behavioral health services, including therapy, psychiatric medication services, ADHD evaluations, and cognitive testing—all within one coordinated practice.",
  ],
  whyJoin: {
    heading: "Why Join Firefly",
    items: [
      "Consistent referral stream and administrative support",
      "Flexible scheduling and hybrid work model",
      "Integrated behavioral health services, including therapy, psychiatric medication management, ADHD evaluations, and cognitive testing—all within one coordinated practice",
      "Accrued PTO, technology credit & continuing education support for W-2 employees",
      "Monthly healthcare stipend provided for W-2 employees",
      "Quarterly team outings",
      "Additional compensation for Polish- or Spanish-speaking clinicians",
    ],
  },
  benefits: {
    heading: "Annual Benefits",
    benefitLabel: "Benefit",
    amountLabel: "Amount",
    items: [
      {
        name: "Health premium contribution",
        amount: "$3,600",
        frequency: "annually",
      },
      {
        name: "Child care credit",
        amount: "$380",
        frequency: "annually",
      },
      {
        name: "Technology credit",
        amount: "$275",
        frequency: "annually",
      },
      {
        name: "Professional development credit",
        amount: "$200",
        frequency: "annually",
      },
      {
        name: "Pet wellness credit",
        amount: "$115",
        frequency: "annually",
      },
    ],
    totalLabel: "Total benefits to be added to compensation package",
    totalAmount: "$4,570",
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
      "LCPC, LPC, or LCSW required",
      "Experience providing therapy to clients ages 7 and older",
      "If working with clients age 11 or under, must be comfortable and familiar with play therapy techniques",
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
