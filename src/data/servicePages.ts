import type { Locale } from "@/data/siteContent";

export type ServiceRelatedLink = {
  label: string;
  href: string;
};

export type ServicePageCopy = {
  slug:
    | "therapy"
    | "adhd-testing"
    | "medication-management"
    | "anxiety-treatment"
    | "depression-treatment";
  condition?: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    serviceArea?: string;
    cta: string;
    availabilityNote?: string;
    highlights?: string[];
  };
  insurance?: {
    title: string;
    paragraph: string;
    cashPay: string;
    feesLink?: string;
  };
  carePath?: {
    title: string;
    intro: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  whyFirefly?: {
    title: string;
    items: {
      title: string;
      paragraph: string;
    }[];
  };
  who: {
    title: string;
    intro: string;
    items: string[];
    closing?: string;
  };
  what?: {
    title: string;
    paragraphs: string[];
  };
  topics?: {
    id: string;
    title: string;
    intro?: string;
    paragraphs?: string[];
    bullets?: string[];
    links?: ServiceRelatedLink[];
  }[];
  expect?: {
    title: string;
    intro?: string;
    steps: string[];
  };
  ongoingCare?: {
    title: string;
    paragraphs: string[];
  };
  related?: {
    title: string;
    paragraph: string;
    links: ServiceRelatedLink[];
  };
  faq?: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  note?: string;
  closing: {
    title: string;
    paragraph: string;
    cta?: string;
    cliniciansLabel?: string;
    cliniciansHref?: string;
    scheduleLabel?: string;
  };
};

export type ServicesHubCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  overview: {
    title: string;
    paragraphs: string[];
  };
  offeringsTitle: string;
  offerings: {
    title: string;
    blurb: string;
    href: string;
    learnMore: string;
  }[];
  additionalTools: {
    title: string;
    items: {
      title: string;
      paragraph: string;
    }[];
  };
  concerns: {
    title: string;
    intro: string;
    items: string[];
    note: string;
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  closing: {
    title: string;
    paragraph: string;
    cta: string;
  };
};

export type ServicePagesContent = {
  hub: ServicesHubCopy;
  therapy: ServicePageCopy;
  adhdTesting: ServicePageCopy;
  medicationManagement: ServicePageCopy;
  anxietyTreatment: ServicePageCopy;
  depressionTreatment: ServicePageCopy;
};

const concernsItemsEn = [
  "Depression",
  "Anxiety and Stress",
  "Trauma",
  "PTSD",
  "Sexual Intimacy",
  "LGBTQ+-Affirming Care",
  "Life Transitional Difficulties",
  "Relationship Issues",
  "ADHD and Attention Concerns",
  "School Issues",
  "Phobias and Fears",
  "Family, Couples, Marriage",
  "Premarital Counseling",
  "Women's Issues",
  "Emotional Regulation",
  "OCD and Obsessive Behaviors",
  "Workplace Issues",
  "Sleep Problems",
];

const concernsItemsEs = [
  "Depresión",
  "Ansiedad y estrés",
  "Trauma",
  "TEPT",
  "Intimidad sexual",
  "Cuidado afirmativo LGBTQ+",
  "Dificultades en transiciones de vida",
  "Problemas de relación",
  "TDAH y problemas de atención",
  "Problemas escolares",
  "Fobias y miedos",
  "Familia, parejas, matrimonio",
  "Consejería prematrimonial",
  "Temas de la mujer",
  "Regulación emocional",
  "TOC y conductas obsesivas",
  "Problemas laborales",
  "Problemas de sueño",
];

const servicePagesContent: Record<Locale, ServicePagesContent> = {
  en: {
    hub: {
      meta: {
        title:
          "Psychiatric Medication, ADHD Testing & Therapy in Hinsdale | Firefly Wellness",
        description:
          "Coordinated outpatient mental health care in Hinsdale for adolescents through adults—psychiatric medication, ADHD and attention testing, and therapy in one practice.",
      },
      hero: {
        title: "Mental Health Services in Hinsdale",
        subtitle:
          "Psychiatric medication, ADHD and attention testing, and therapy in one coordinated practice in Hinsdale, IL—serving Oak Brook, Clarendon Hills, Western Springs, Westmont, and nearby western suburbs.",
        cta: "Schedule an Appointment",
      },
      overview: {
        title: "Coordinated Care Within One Practice",
        paragraphs: [
          "At Firefly Wellness, we take a collaborative approach to care, bringing the right expertise together in one place. Instead of coordinating providers across different offices, you can access comprehensive support within one practice, with clinicians working together to keep your care connected to your needs, goals, and overall well-being.",
          "We support adolescents and adults, with care available in both English and Spanish. Whether you’re taking your first step toward support or looking for what comes next, we meet you where you are and provide thoughtful, personalized care every step of the way.",
        ],
      },
      offeringsTitle: "Core Services",
      offerings: [
        {
          title: "Psychiatric Medication Management",
          blurb:
            "Our board-certified PMHNP provides personalized psychiatric medication evaluation and ongoing medication management for ADHD, anxiety, depression, and other mental health concerns. Treatment is tailored to your symptoms, history, goals, and individual needs.",
          href: "/medication-management",
          learnMore: "Learn more about psychiatric medication",
        },
        {
          title: "ADHD & Attention Testing",
          blurb:
            "Computer-based T.O.V.A. testing helps evaluate attention and impulse control as one part of a full evaluation. Results are reviewed with your clinician and used alongside your history and goals.",
          href: "/adhd-testing",
          learnMore: "Learn more about ADHD testing",
        },
        {
          title: "Anxiety Treatment",
          blurb:
            "Psychiatric evaluation, medication management when appropriate, and therapy for generalized anxiety, panic, and other anxiety concerns—coordinated in one practice so you can feel calmer and more in control.",
          href: "/anxiety-treatment",
          learnMore: "Learn more about anxiety treatment",
        },
        {
          title: "Depression Treatment",
          blurb:
            "Psychiatric evaluation, antidepressant medication management, and therapy for depression, with regular follow-up to track progress and adjust care as you start feeling like yourself again.",
          href: "/depression-treatment",
          learnMore: "Learn more about depression treatment",
        },
        {
          title: "Therapy",
          blurb:
            "Individual counseling for adolescents, young adults, and adults—focused on insight, coping skills, and lasting change. Sessions offer a steady place to work through anxiety, depression, trauma, relationships, and life transitions.",
          href: "/therapy",
          learnMore: "Learn more about therapy",
        },
      ],
      additionalTools: {
        title: "Additional Testing and Tools",
        items: [
          {
            title: "Tempus Genetic Testing",
            paragraph:
              "Tempus genetic testing can provide additional information about how your body may process certain medications. Results are reviewed with you and considered alongside your history and symptoms, often as part of psychiatric medication care.",
          },
          {
            title: "Memory and Cognitive Check-Ins",
            paragraph:
              "BrainCheck assessments help establish a baseline and monitor changes in memory and thinking over time. Your clinician reviews the results with you and considers them alongside your history, symptoms, and other clinical information to help guide next steps. Follow-up assessments can help track changes between visits and provide additional information to support ongoing care, including therapy or medication management when appropriate.",
          },
        ],
      },
      concerns: {
        title: "Concerns We Help With",
        intro:
          "We support adolescents through adults with a wide range of mental health concerns—in English and Spanish—so care can meet you where you are.",
        items: concernsItemsEn,
        note: "Firefly Wellness provides outpatient mental health care and is not an emergency or crisis service. If you or someone you love is in immediate danger, call 911 or go to the nearest emergency room. For 24/7 support, call or text 988.",
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question:
              "Do you offer medication and therapy in the same practice?",
            answer:
              "Yes. Medication, ADHD and attention testing, and therapy are available in one coordinated practice—our providers work together so your care stays aligned with your goals.",
          },
          {
            question: "Who can prescribe medication at Firefly?",
            answer:
              "Prescribing visits and ongoing medication support are provided by our on-staff board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP).",
          },
          {
            question: "Is ADHD testing a full diagnosis by itself?",
            answer:
              "No. T.O.V.A. testing is one clinical tool. Your clinician places results in context with your history, symptoms, and goals before recommending next steps.",
          },
          {
            question: "Is Firefly an emergency or crisis service?",
            answer:
              "No. We provide outpatient mental health care. If you or someone you love is in immediate danger, call 911 or go to the nearest emergency room. For 24/7 support, call or text 988.",
          },
        ],
      },
      closing: {
        title: "Ready to Take the Next Step?",
        paragraph:
          "Whether you are exploring psychiatric medication, attention testing, or therapy, we are here to help you move from simply coping toward steadier ground.",
        cta: "Schedule an Appointment",
      },
    },
    therapy: {
      slug: "therapy",
      meta: {
        title: "Therapy in Hinsdale | Firefly Wellness",
        description:
          "Evidence-based counseling in Hinsdale for adolescents through adults—anxiety, depression, trauma, relationships, and life transitions—coordinated with psychiatric medication and ADHD testing when helpful.",
      },
      hero: {
        title: "Therapy in Hinsdale",
        subtitle:
          "Thoughtful, evidence-based counseling for adolescents, young adults, and adults—so you can reconnect with your strengths and move toward a steadier life in Hinsdale, IL, serving Oak Brook, Clarendon Hills, Western Springs, Westmont, and nearby western suburbs.",
        cta: "Schedule an Appointment",
      },
      who: {
        title: "Who Therapy May Help",
        intro:
          "Our clinicians work with a range of ages and concerns. Many clients come to us during periods of stress, change, or when familiar patterns stop working.",
        items: [
          "Adolescents, college students, young adults, and adults",
          "People navigating anxiety, stress, and emotional overwhelm",
          "Those experiencing depression and low mood",
          "Clients working through trauma, PTSD, or lasting effects of difficult experiences",
          "People facing relationship, family, or intimacy concerns",
          "Those managing life transitions, school or workplace challenges, and ADHD-related support",
        ],
      },
      what: {
        title: "Why Therapy",
        paragraphs: [
          "Life can feel overwhelming. Trauma, chronic stress, relationship strain, or major transitions can leave you anxious, low, or stuck in unhelpful patterns.",
          "You are not alone. According to the National Alliance on Mental Illness (NAMI), 1 in 5 adults experience mental health challenges each year. Struggling does not mean you are failing.",
          "Therapy can help. At Firefly Wellness, we walk alongside you as you reconnect with your strengths and move toward a steadier, more meaningful life.",
          "Our clinicians draw on approaches such as Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), strengths-based work, and expressive arts therapies when they fit your goals and preferences.",
        ],
      },
      expect: {
        title: "What to Expect",
        intro:
          "Therapy at Firefly provides a safe, nonjudgmental space for reflection, growth, and change. Sessions typically focus on:",
        steps: [
          "Understanding your thoughts, emotions, and patterns",
          "Strengthening coping skills you can use between sessions",
          "Creating sustainable emotional and behavioral shifts",
          "Clarifying goals with your therapist and tracking meaningful progress",
          "Collaborating with other Firefly providers when psychiatric medication or ADHD testing may help",
        ],
      },
      related: {
        title: "Related Care at Firefly",
        paragraph:
          "Some clients benefit from coordinated supports alongside therapy. When it is a good fit, we can connect you with ADHD and attention testing or psychiatric medication within the same practice.",
        links: [
          { label: "ADHD & Attention Testing", href: "/adhd-testing" },
          {
            label: "Psychiatric Medication",
            href: "/medication-management",
          },
          { label: "Anxiety Treatment", href: "/anxiety-treatment" },
          { label: "Depression Treatment", href: "/depression-treatment" },
        ],
      },
      closing: {
        title: "See If Therapy Is Right for You",
        paragraph:
          "Feeling nervous about beginning therapy is completely normal. Many clients describe starting as one of the most valuable steps they have taken for themselves.",
        scheduleLabel: "Book online now",
      },
    },
    adhdTesting: {
      slug: "adhd-testing",
      meta: {
        title: "ADHD Evaluation & Testing in Hinsdale | Firefly Wellness",
        description:
          "ADHD evaluation for adults and adolescents in Hinsdale with objective T.O.V.A. testing, a clear clinical assessment, and treatment in one practice. Most major insurance accepted. Appointments often available within days.",
      },
      hero: {
        title: "ADHD Evaluation & Testing in Hinsdale",
        subtitle:
          "Find out whether ADHD explains what you have been experiencing—and leave with a clear plan for what comes next. A comprehensive clinical evaluation with objective T.O.V.A. testing, followed by treatment in the same practice if you need it.",
        serviceArea:
          "Serving Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont, and surrounding western suburbs.",
        highlights: [
          "Appointments often available within days",
          "Insurance accepted: Cigna, BCBS, UnitedHealthcare, Medicare, and more",
          "Objective, computer-based T.O.V.A. testing",
          "Evaluation, medication, and therapy in one practice",
        ],
        cta: "Schedule an ADHD Evaluation",
      },
      insurance: {
        title: "Insurance Accepted for ADHD Evaluation",
        paragraph:
          "We accept Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare for ADHD evaluation and follow-up care.",
        cashPay: "We also accept cash pay and out-of-network insurances.",
        feesLink: "View insurance details and self-pay rates",
      },
      carePath: {
        title: "Evaluation and Ongoing ADHD Care in One Practice",
        intro:
          "Many testing providers stop at a report. At Firefly, you don’t have to start over somewhere else—your evaluation can lead directly into treatment with the same coordinated team.",
        steps: [
          {
            title: "Clinical Evaluation",
            description:
              "Talk through your history, symptoms, and goals with a Firefly clinician.",
          },
          {
            title: "Objective T.O.V.A. Testing",
            description:
              "A structured, computer-based test that measures attention and impulse control.",
          },
          {
            title: "Clear Results",
            description:
              "Review your findings in plain language, alongside everything else we learn about you.",
          },
          {
            title: "Psychiatric Evaluation",
            description:
              "When appropriate, meet with our board-certified PMHNP to discuss treatment options, including medication.",
          },
          {
            title: "Ongoing Care",
            description:
              "Medication management, therapy, and practical strategies—coordinated under one roof.",
          },
        ],
      },
      whyFirefly: {
        title: "Why Choose Firefly for ADHD Care",
        items: [
          {
            title: "No Hand-Offs Between Offices",
            paragraph:
              "Testing, prescribing, and therapy happen within one coordinated team, so your care stays connected from the first visit onward.",
          },
          {
            title: "On-Staff Board-Certified PMHNP",
            paragraph:
              "If medication may help, you can be evaluated by our own Psychiatric-Mental Health Nurse Practitioner—no outside referral needed.",
          },
          {
            title: "Objective Data, Not Just a Questionnaire",
            paragraph:
              "T.O.V.A. testing adds measurable information about attention and impulse control alongside your clinical interview.",
          },
          {
            title: "Fast Access",
            paragraph:
              "Evaluation appointments are often available within days, so you are not left waiting months for answers.",
          },
          {
            title: "Insurance Accepted",
            paragraph:
              "We work with Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare.",
          },
          {
            title: "Care in English and Spanish",
            paragraph:
              "Evaluation and ongoing care are available in both languages.",
          },
        ],
      },
      who: {
        title: "Adult ADHD Evaluation",
        intro:
          "ADHD does not always look the way people expect. Its symptoms can overlap with anxiety, depression, sleep problems, and other concerns, so it is sometimes missed entirely or mistaken for something else. Many adults go years without answers, or with a diagnosis that never quite fit. An evaluation may be helpful if you recognize yourself here:",
        items: [
          "Missing deadlines or leaving projects unfinished at work",
          "Losing track of tasks, bills, or appointments",
          "Starting strong but struggling with follow-through",
          "Feeling scattered or overwhelmed despite real effort",
          "Wondering for years whether ADHD explains your experience",
          "Diagnosed as a child and wanting an updated evaluation as an adult",
        ],
        closing:
          "We also evaluate adolescents and students whose concentration, organization, or school performance is a concern.",
      },
      what: {
        title: "What Your Evaluation Includes",
        paragraphs: [
          "Your ADHD evaluation combines a clinical assessment of your history and symptoms with objective attention testing. You will review the results with your clinician in plain language and leave with personalized recommendations—which may include treatment within Firefly.",
          "T.O.V.A. (Test of Variables of Attention) is a simple, computer-based test that uses a special device to look at attention and impulse control. It is one of the tools we use when evaluating ADHD and other attention-related concerns.",
          "Test results are never the whole story on their own—your clinician places them in context with your history, symptoms, and goals before recommending next steps.",
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Do you take my insurance for ADHD testing?",
            answer:
              "We accept Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare for ADHD evaluation and follow-up care. We also accept cash pay and out-of-network insurances.",
          },
          {
            question: "How soon can I be seen?",
            answer:
              "ADHD evaluation appointments are often available within days. Schedule online or contact our office to find the next available time.",
          },
          {
            question: "Is T.O.V.A. testing a diagnosis by itself?",
            answer:
              "No. T.O.V.A. is one clinical tool. Your clinician combines the results with your history and symptoms as part of a comprehensive evaluation before making any diagnosis or recommendation.",
          },
          {
            question: "Can I get ADHD medication at Firefly after my evaluation?",
            answer:
              "When appropriate, yes. Our on-staff board-certified PMHNP provides psychiatric evaluation and ongoing medication management, coordinated with therapy and behavioral strategies when helpful.",
          },
          {
            question: "Do you evaluate adolescents?",
            answer:
              "Yes. We evaluate adolescents as well as adults, and care is available in both English and Spanish.",
          },
        ],
      },
      closing: {
        title: "Get Answers About Your Attention and Focus",
        paragraph:
          "If focus, organization, or follow-through have been getting in the way, a clear evaluation is a practical first step—and you will have a team ready to help with whatever comes next.",
        cta: "Schedule an ADHD Evaluation",
        scheduleLabel: "Book online now",
      },
    },
    medicationManagement: {
      slug: "medication-management",
      meta: {
        title: "Psychiatric Medication Management in Hinsdale | Firefly Wellness",
        description:
          "Outpatient psychiatric medication in Hinsdale with our on-staff board-certified PMHNP—for adolescents through adults, coordinated with therapy and testing, including Tempus and BrainCheck when part of your care.",
      },
      hero: {
        title: "Psychiatric Medication Management in Hinsdale",
        subtitle:
          "Prescribing visits and ongoing medication support with our on-staff board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP)—coordinated with therapy and ADHD testing in Hinsdale, IL, serving Oak Brook, Clarendon Hills, Western Springs, Westmont, and nearby western suburbs.",
        availabilityNote:
          "New medication appointments are often available with short wait times.",
        cta: "Schedule an Appointment",
      },
      who: {
        title: "Who Psychiatric Medication May Help",
        intro:
          "Medicine is not right for everyone, and it is never a replacement for connection and skill-building. For some people, it creates enough relief to sleep, focus, and benefit more fully from therapy.",
        items: [
          "Adolescents and adults navigating depression, anxiety, attention difficulties, or sleep-related concerns",
          "People who still feel very low, anxious, or on edge even when therapy is going well",
          "Those whose symptoms make it harder to function at school, work, or in daily life",
          "Clients already taking psychiatric medication who need thoughtful ongoing prescribing support",
        ],
      },
      what: {
        title: "How We Approach Medication",
        paragraphs: [
          "Our on-staff board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP) provides prescribing visits and ongoing medication support as part of Firefly’s coordinated behavioral health model.",
          "Your clinician considers your symptoms, history, preferences, and goals—and may collaborate with your therapist so care stays aligned.",
          "Tempus genetic testing can provide additional information about how your body may process certain medications. Results are reviewed with you and used alongside—not instead of—your history and symptoms.",
        ],
      },
      expect: {
        title: "What to Expect",
        intro:
          "Medication care at Firefly starts with understanding your needs, then moves at a pace that feels thoughtful—not rushed. A typical path looks like this:",
        steps: [
          "Share your concerns, history, and goals in an evaluation-focused visit",
          "Discuss whether medication is a good fit and review options, benefits, and considerations",
          "Begin or adjust a medication plan when you and your clinician agree it makes sense",
          "Attend follow-up visits to monitor response, side effects, and next steps",
          "Coordinate with therapy or ADHD and attention testing within Firefly when that supports your care",
        ],
      },
      related: {
        title: "Related Care at Firefly",
        paragraph:
          "Medication often works best alongside therapy. ADHD and attention testing can also help clarify what is going on when focus and impulse control are part of what you are navigating.",
        links: [
          { label: "Therapy", href: "/therapy" },
          { label: "ADHD & Attention Testing", href: "/adhd-testing" },
          { label: "Anxiety Treatment", href: "/anxiety-treatment" },
          { label: "Depression Treatment", href: "/depression-treatment" },
        ],
      },
      closing: {
        title: "Explore Whether Medication Support Is Right for You",
        paragraph:
          "If you are curious about medication as one part of your care, we can help you weigh options carefully and stay supported as you move forward.",
        scheduleLabel: "Book online now",
      },
    },
    anxietyTreatment: {
      slug: "anxiety-treatment",
      condition: "Anxiety",
      meta: {
        title:
          "Anxiety Treatment in Hinsdale | Psychiatric Care & Therapy | Firefly Wellness",
        description:
          "Anxiety treatment in Hinsdale for adolescents and adults—psychiatric evaluation, medication management when appropriate, and therapy in one practice. Most major insurance accepted. Appointments often available within days.",
      },
      hero: {
        title: "Anxiety Treatment in Hinsdale",
        subtitle:
          "Feel calmer, sleep better, and get back to the parts of life anxiety has been crowding out. Firefly offers psychiatric evaluation, medication management when it is the right fit, and therapy—all coordinated within one practice.",
        serviceArea:
          "Serving Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont, and surrounding western suburbs.",
        highlights: [
          "Appointments often available within days",
          "Insurance accepted: Cigna, BCBS, UnitedHealthcare, Medicare, and more",
          "Board-certified PMHNP on staff",
          "Medication and therapy in one practice",
        ],
        cta: "Schedule an Anxiety Evaluation",
      },
      insurance: {
        title: "Insurance Accepted for Anxiety Treatment",
        paragraph:
          "We accept Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare for psychiatric evaluation, medication management, and therapy.",
        cashPay: "We also accept cash pay and out-of-network insurances.",
        feesLink: "View insurance details and self-pay rates",
      },
      carePath: {
        title: "How Anxiety Treatment Works at Firefly",
        intro:
          "You do not need to have everything figured out before your first visit. We start by understanding what you are experiencing, then build a plan with you—and adjust it as you improve.",
        steps: [
          {
            title: "Psychiatric Evaluation",
            description:
              "A thorough conversation about your symptoms, history, health, and goals.",
          },
          {
            title: "Personalized Plan",
            description:
              "Clear recommendations that fit your symptoms, preferences, and daily life.",
          },
          {
            title: "Therapy and Coping Skills",
            description:
              "Practical tools for worry, panic, and avoidance with a Firefly therapist.",
          },
          {
            title: "Medication, If Appropriate",
            description:
              "When medication may help, we discuss options, benefits, and side effects together.",
          },
          {
            title: "Follow-Up and Adjustments",
            description:
              "Regular check-ins to track progress and fine-tune treatment over time.",
          },
        ],
      },
      whyFirefly: {
        title: "Why Choose Firefly for Anxiety Care",
        items: [
          {
            title: "Medication and Therapy, Coordinated",
            paragraph:
              "Your prescriber and therapist work in the same practice, so treatment decisions are made with the full picture in mind.",
          },
          {
            title: "An Evaluation That Takes Its Time",
            paragraph:
              "Anxiety can overlap with sleep problems, depression, ADHD, and physical health concerns. We look at the whole picture before recommending treatment.",
          },
          {
            title: "Medication Is a Choice, Not a Default",
            paragraph:
              "Many people do well with therapy alone. When medication may help, we explain why and decide together.",
          },
          {
            title: "Fast Access",
            paragraph:
              "New appointments are often available within days, so you are not left managing anxiety on your own for months.",
          },
          {
            title: "Insurance Accepted",
            paragraph:
              "We work with Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare.",
          },
          {
            title: "Adolescents Through Adults, in English and Spanish",
            paragraph:
              "We care for teens, college students, and adults, with care available in both languages.",
          },
        ],
      },
      who: {
        title: "Signs It May Be Time to Get Help for Anxiety",
        intro:
          "Some worry is a normal part of life. It may be time to talk with a professional when anxiety is frequent, hard to control, or starting to shape your choices. Common signs include:",
        items: [
          "Worry that is constant or hard to switch off, even when things are going fine",
          "Restlessness, irritability, or feeling on edge most days",
          "Trouble falling or staying asleep because your mind will not settle",
          "Avoiding situations, people, or tasks because of how they make you feel",
          "Physical symptoms such as a racing heart, tight chest, stomach upset, or muscle tension",
          "Anxiety getting in the way of work, school, relationships, or daily routines",
        ],
        closing:
          "We treat adolescents and adults, including people who have never sought help before and those who have tried treatment in the past.",
      },
      topics: [
        {
          id: "types-of-anxiety",
          title: "Generalized Anxiety, Panic, and Other Forms of Anxiety",
          intro:
            "Anxiety is not one-size-fits-all. Part of your evaluation is understanding which patterns fit your experience, because that shapes the most effective treatment.",
          bullets: [
            "Generalized anxiety: persistent, wide-ranging worry about work, health, family, or everyday matters that is hard to control",
            "Panic attacks: sudden surges of intense fear with symptoms like a pounding heart, shortness of breath, dizziness, or feeling detached",
            "Social anxiety: intense self-consciousness or fear of judgment that leads to avoiding social or work situations",
            "Health-focused worry: ongoing fear about illness that persists despite reassurance",
            "Anxiety alongside other concerns, such as depression, ADHD, trauma, or sleep problems",
          ],
        },
        {
          id: "psychiatric-care",
          title: "Psychiatric Care for Anxiety in Hinsdale",
          paragraphs: [
            "Psychiatric care for anxiety at Firefly is provided by our on-staff board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP). Our PMHNP is trained to diagnose mental health conditions, prescribe medication, and manage treatment over time.",
            "Because our prescriber works alongside our therapists in the same Hinsdale practice, your medication plan and therapy can be coordinated rather than managed in separate offices.",
          ],
        },
        {
          id: "medication-management",
          title: "Anxiety Medication Management",
          paragraphs: [
            "Medication can be a helpful part of anxiety treatment, especially when symptoms are persistent, intense, or making it hard to benefit from therapy. Medications commonly used for anxiety include certain antidepressants, such as SSRIs and SNRIs, along with other options your clinician may discuss based on your situation.",
            "Medication is not always the first step. It may not be recommended when symptoms are mild, when you prefer to start with therapy, or when anxiety is better explained by another cause—such as a medical condition, substance use, or a stressful situation that is likely to pass.",
            "If you start medication, your clinician will explain what to expect, how long it may take to notice a difference, and possible side effects. Tempus genetic testing may also be considered to provide additional information about how your body may process certain medications.",
          ],
        },
        {
          id: "initial-evaluation",
          title: "What to Expect at Your Initial Psychiatric Evaluation",
          intro:
            "Your first visit is a conversation, not a test. It typically includes:",
          bullets: [
            "Your current symptoms, when they started, and how they affect your daily life",
            "Your mental health history, including any past treatment or medications",
            "Relevant medical history, current medications, sleep, and substance use",
            "Your goals and preferences for treatment",
            "A discussion of findings and recommended next steps before you leave",
          ],
          paragraphs: [
            "It helps to bring a list of current medications and any past mental health records you have. You will leave with a clear understanding of what we recommend and why.",
          ],
        },
        {
          id: "ongoing-care",
          title: "Ongoing Treatment and Follow-Up",
          paragraphs: [
            "Anxiety treatment works best with consistent follow-up. If you start medication, follow-up visits are usually more frequent at first so your clinician can check how you are responding, watch for side effects, and adjust the dose when needed.",
            "As symptoms improve, visits typically become less frequent. Over time, you and your clinician will decide together how long to continue treatment and when it may make sense to taper or change course.",
          ],
        },
        {
          id: "therapy",
          title: "Therapy for Anxiety",
          paragraphs: [
            "Therapy helps you understand what drives your anxiety and gives you skills to respond differently. Our clinicians draw on approaches such as Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT) to address worry, panic, and avoidance.",
            "Some people do well with therapy alone; others benefit from therapy combined with medication. At Firefly, both are available in one practice.",
          ],
          links: [{ label: "Learn more about therapy at Firefly", href: "/therapy" }],
        },
      ],
      related: {
        title: "Related Care at Firefly",
        paragraph:
          "Anxiety often overlaps with other concerns. When it is helpful, we can coordinate care across services within the same practice.",
        links: [
          {
            label: "Psychiatric Medication Management",
            href: "/medication-management",
          },
          { label: "Depression Treatment", href: "/depression-treatment" },
          { label: "ADHD & Attention Testing", href: "/adhd-testing" },
        ],
      },
      note: "Firefly Wellness provides outpatient mental health care and is not an emergency or crisis service. If you or someone you love is in immediate danger, call 911 or go to the nearest emergency room. For 24/7 support, call or text 988.",
      faq: {
        title: "Anxiety Treatment FAQ",
        items: [
          {
            question: "Do I need a psychiatrist for anxiety?",
            answer:
              "Not necessarily. At Firefly, psychiatric evaluation and medication management are provided by our board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP), who can diagnose anxiety, prescribe medication, and manage your treatment over time.",
          },
          {
            question: "Do I have to take medication for anxiety?",
            answer:
              "No. Medication is one option, not a requirement. Your clinician will explain whether it may help in your situation, and the decision is always made together with you.",
          },
          {
            question: "How long does anxiety medication take to work?",
            answer:
              "It varies by medication and person. Many commonly used anxiety medications take several weeks to reach their full effect, which is why regular follow-up is part of treatment.",
          },
          {
            question: "Can I get therapy only?",
            answer:
              "Yes. Many people treat anxiety with therapy alone. If medication becomes worth considering later, our prescriber is in the same practice.",
          },
          {
            question: "Do you take my insurance?",
            answer:
              "We accept Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare. We also accept cash pay and out-of-network insurances.",
          },
          {
            question: "How soon can I be seen?",
            answer:
              "New appointments are often available within days. Schedule online or contact our office to find the next available time.",
          },
          {
            question: "Do you treat anxiety in teens?",
            answer:
              "Yes. We work with adolescents as well as adults, and we involve parents or guardians as appropriate.",
          },
        ],
      },
      closing: {
        title: "Take the First Step Toward Feeling Calmer",
        paragraph:
          "Anxiety is highly treatable. A single evaluation can give you clarity about what is going on and a practical plan to start feeling better.",
        cta: "Schedule an Anxiety Evaluation",
        scheduleLabel: "Book online now",
      },
    },
    depressionTreatment: {
      slug: "depression-treatment",
      condition: "Depression",
      meta: {
        title:
          "Depression Treatment in Hinsdale | Psychiatric Care & Therapy | Firefly Wellness",
        description:
          "Depression treatment in Hinsdale for adolescents and adults—psychiatric evaluation, antidepressant medication management, and therapy in one practice. Most major insurance accepted. Appointments often available within days.",
      },
      hero: {
        title: "Depression Treatment in Hinsdale",
        subtitle:
          "Get your energy, interest, and sense of yourself back. Firefly provides psychiatric evaluation, medication management, and therapy for depression in one coordinated practice—with a plan built around you.",
        serviceArea:
          "Serving Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont, and surrounding western suburbs.",
        highlights: [
          "New appointments often available within days",
          "Most major insurance accepted, including Medicare",
          "On-staff board-certified PMHNP",
          "Psychiatric care and therapy under one roof",
        ],
        cta: "Schedule a Depression Evaluation",
      },
      insurance: {
        title: "Insurance Accepted for Depression Treatment",
        paragraph:
          "We accept Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare for psychiatric evaluation, medication management, and therapy.",
        cashPay: "We also accept cash pay and out-of-network insurances.",
        feesLink: "View insurance details and self-pay rates",
      },
      carePath: {
        title: "Your Path Through Depression Treatment",
        intro:
          "Depression can make even small steps feel heavy. We keep the process simple and stay with you as treatment takes effect.",
        steps: [
          {
            title: "Psychiatric Evaluation",
            description:
              "We learn about your symptoms, history, health, and what you want to change.",
          },
          {
            title: "A Clear Treatment Plan",
            description:
              "Recommendations that may include medication, therapy, or both.",
          },
          {
            title: "Starting Treatment",
            description:
              "If medication is part of your plan, we start thoughtfully and explain what to expect.",
          },
          {
            title: "Measuring Progress",
            description:
              "Regular follow-up to track mood, sleep, energy, and side effects.",
          },
          {
            title: "Long-Term Support",
            description:
              "Ongoing care to help you stay well and prevent setbacks.",
          },
        ],
      },
      whyFirefly: {
        title: "Why Choose Firefly for Depression Care",
        items: [
          {
            title: "One Team for Medication and Therapy",
            paragraph:
              "Your prescriber and therapist work together in one practice, so your treatment stays aligned as things change.",
          },
          {
            title: "Help When Your Current Treatment Is Not Working",
            paragraph:
              "If you have tried medication without enough relief, we take a careful look at what has and has not helped before recommending next steps.",
          },
          {
            title: "Progress You Can See",
            paragraph:
              "We track how you are doing over time—not just at your first visit—and adjust treatment based on how you are actually feeling.",
          },
          {
            title: "Seen Within Days, Not Months",
            paragraph:
              "New appointments are often available within days, so you can start treatment sooner.",
          },
          {
            title: "Insurance Accepted",
            paragraph:
              "We work with Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare.",
          },
          {
            title: "Care for Teens and Adults, in English and Spanish",
            paragraph:
              "We treat adolescents and adults, with care available in both languages.",
          },
        ],
      },
      who: {
        title: "Signs Professional Treatment May Be Appropriate",
        intro:
          "Everyone has hard days. Depression is different: it lingers, and it affects how you think, feel, and function. Consider an evaluation if several of these have lasted two weeks or more:",
        items: [
          "Persistent sadness, emptiness, or low mood most of the day",
          "Losing interest or enjoyment in things you used to care about",
          "Changes in sleep—sleeping much more or much less than usual",
          "Changes in appetite or weight",
          "Fatigue or low energy that makes daily tasks feel harder",
          "Feelings of worthlessness, guilt, or hopelessness",
          "Trouble concentrating or making decisions at work, school, or home",
        ],
        closing:
          "If you are having thoughts of harming yourself or that life is not worth living, please reach out now: call or text 988 for 24/7 support, or call 911 in an emergency.",
      },
      topics: [
        {
          id: "treatment",
          title: "Depression Treatment in Hinsdale",
          paragraphs: [
            "Depression is one of the most treatable mental health conditions. Effective treatment usually includes medication, therapy, or a combination of both, along with practical changes that support sleep, activity, and connection.",
            "At Firefly, your treatment is coordinated within one Hinsdale practice. That means your prescriber and therapist can share a clear picture of how you are doing and adjust care together.",
          ],
        },
        {
          id: "psychiatric-care",
          title: "Psychiatric Care for Depression",
          paragraphs: [
            "Psychiatric care for depression at Firefly is provided by our on-staff board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP), who evaluates symptoms, diagnoses depression and related conditions, prescribes medication, and manages treatment over time.",
            "We also look for factors that can mimic or worsen depression—such as sleep problems, anxiety, ADHD, medical conditions, or medication side effects—so your treatment addresses the full picture.",
          ],
        },
        {
          id: "medication-management",
          title: "Depression Medication Options and Management",
          paragraphs: [
            "Antidepressant medications can reduce symptoms of depression and help people regain energy, motivation, and focus. Common options include SSRIs, SNRIs, and other antidepressants. Your clinician will consider your symptoms, history, other health conditions, and preferences when discussing choices.",
            "Finding the right medication and dose can take time. Most antidepressants take several weeks to reach their full effect, and some people need an adjustment or a different medication before finding the best fit. Tempus genetic testing may provide additional information about how your body may process certain medications.",
            "Medication is not always the right first step. For milder depression, or when you prefer to begin with therapy, your clinician may recommend starting there. We will always explain the reasoning and decide together.",
          ],
        },
        {
          id: "initial-evaluation",
          title: "What to Expect at Your Initial Psychiatric Evaluation",
          intro:
            "Your first appointment focuses on understanding you. We will talk through:",
          bullets: [
            "How you have been feeling and how long symptoms have been present",
            "Sleep, appetite, energy, concentration, and daily functioning",
            "Past episodes of depression and any previous treatment or medications",
            "Medical history, current medications, and substance use",
            "Your safety, support system, and goals for treatment",
          ],
          paragraphs: [
            "Before you leave, your clinician will share their impressions and recommended next steps. If you have records from past treatment or a list of medications you have tried, bring them along.",
          ],
        },
        {
          id: "ongoing-care",
          title: "Ongoing Care and Follow-Up",
          paragraphs: [
            "Follow-up visits are an important part of depression treatment. Early on, they are usually more frequent so your clinician can monitor your response, check for side effects, and adjust your plan.",
            "Once you are feeling better, continuing treatment for a period of time can help prevent symptoms from returning. When and how to change or stop medication is a decision you and your clinician make together—never abruptly or on your own.",
          ],
        },
        {
          id: "therapy",
          title: "Therapy for Depression",
          paragraphs: [
            "Therapy helps you understand patterns that keep depression going and build skills to change them. Our clinicians use approaches such as Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), and strengths-based work tailored to your goals.",
            "For many people, therapy combined with medication works better than either alone. At Firefly, both are available in the same practice.",
          ],
          links: [{ label: "Learn more about therapy at Firefly", href: "/therapy" }],
        },
      ],
      related: {
        title: "Related Care at Firefly",
        paragraph:
          "Depression often overlaps with anxiety, attention concerns, and sleep problems. When it helps, we coordinate care across services within one practice.",
        links: [
          {
            label: "Psychiatric Medication Management",
            href: "/medication-management",
          },
          { label: "Anxiety Treatment", href: "/anxiety-treatment" },
          { label: "ADHD & Attention Testing", href: "/adhd-testing" },
        ],
      },
      note: "Firefly Wellness provides outpatient mental health care and is not an emergency or crisis service. If you are thinking about harming yourself or are in immediate danger, call 911 or go to the nearest emergency room. For 24/7 support, call or text 988 (Suicide & Crisis Lifeline).",
      faq: {
        title: "Depression Treatment FAQ",
        items: [
          {
            question: "Do I need a psychiatrist for depression?",
            answer:
              "Not necessarily. At Firefly, psychiatric evaluation and medication management are provided by our board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP), who can diagnose depression, prescribe medication, and manage your care over time.",
          },
          {
            question: "How do I know if it is depression or just a rough patch?",
            answer:
              "A rough patch usually eases as circumstances change. Depression tends to last two weeks or more and affects sleep, energy, interest, and daily functioning. If you are unsure, an evaluation can help clarify what is going on.",
          },
          {
            question: "How long do antidepressants take to work?",
            answer:
              "Some people notice changes in sleep or energy within the first couple of weeks, but most antidepressants take several weeks to reach their full effect. Regular follow-up helps make sure treatment is on track.",
          },
          {
            question: "What if my current medication is not working?",
            answer:
              "That is a common reason people come to Firefly. We review your history, what you have tried, and your current symptoms, then discuss options such as adjusting the dose, changing medication, adding therapy, or further evaluation.",
          },
          {
            question: "Do you take my insurance?",
            answer:
              "We accept Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare. We also accept cash pay and out-of-network insurances.",
          },
          {
            question: "How soon can I be seen?",
            answer:
              "New appointments are often available within days. Schedule online or contact our office to find the next available time.",
          },
          {
            question: "Do you treat depression in teens?",
            answer:
              "Yes. We treat adolescents and adults, and we involve parents or guardians as appropriate.",
          },
        ],
      },
      closing: {
        title: "You Do Not Have to Wait to Feel Better",
        paragraph:
          "Depression can make reaching out feel hard. Scheduling an evaluation is a meaningful first step, and our team will help you with what comes next.",
        cta: "Schedule a Depression Evaluation",
        scheduleLabel: "Book online now",
      },
    },
  },
  es: {
    hub: {
      meta: {
        title:
          "Servicios de Salud Mental en Español en Hinsdale | Firefly Wellness",
        description:
          "Atención de salud mental en español en Hinsdale, IL: medicación psiquiátrica, evaluación de TDAH y terapia para adolescentes y adultos, coordinadas en una sola práctica. Aceptamos la mayoría de los seguros.",
      },
      hero: {
        title: "Servicios de Salud Mental en Español en Hinsdale",
        subtitle:
          "Medicación psiquiátrica, pruebas de TDAH y atención, y terapia en una práctica coordinada en Hinsdale, IL—sirviendo Oak Brook, Clarendon Hills, Western Springs, Westmont y suburbios occidentales cercanos.",
        cta: "Programar una cita",
      },
      overview: {
        title: "Cuidado Coordinado en Una Sola Práctica",
        paragraphs: [
          "En Firefly Wellness, adoptamos un enfoque colaborativo del cuidado, reuniendo la experiencia adecuada en un solo lugar. En lugar de coordinar proveedores en distintos consultorios, puede acceder a un apoyo integral dentro de una sola práctica, con clínicos que trabajan juntos para mantener su cuidado conectado con sus necesidades, metas y bienestar general.",
          "Atendemos a adolescentes y adultos, con cuidado disponible en inglés y español. Ya sea que este dando su primer paso hacia el apoyo o buscando lo que sigue, lo acompañamos donde se encuentre y le brindamos un cuidado reflexivo y personalizado en cada paso del camino.",
        ],
      },
      offeringsTitle: "Servicios Principales",
      offerings: [
        {
          title: "Manejo de Medicación Psiquiátrica",
          blurb:
            "Nuestra PMHNP certificada por la junta ofrece evaluación personalizada de medicación psiquiátrica y manejo continuo de medicamentos para el TDAH, la ansiedad, la depresión y otras inquietudes de salud mental. El tratamiento se adapta a sus síntomas, historial, metas y necesidades individuales.",
          href: "/medication-management",
          learnMore: "Conozca más sobre medicación psiquiátrica",
        },
        {
          title: "Pruebas de TDAH y Atención",
          blurb:
            "Las pruebas T.O.V.A. por computadora ayudan a evaluar la atención y el control de impulsos como una parte de una evaluación completa. Los resultados se revisan con su clínico y se usan junto con su historial y metas.",
          href: "/adhd-testing",
          learnMore: "Conozca más sobre pruebas de TDAH",
        },
        {
          title: "Tratamiento de la Ansiedad",
          blurb:
            "Evaluación psiquiátrica, manejo de medicamentos cuando es apropiado y terapia para la ansiedad generalizada, el pánico y otras inquietudes de ansiedad—coordinados en una sola práctica para que se sienta más tranquilo y con más control.",
          href: "/anxiety-treatment",
          learnMore: "Conozca más sobre el tratamiento de la ansiedad",
        },
        {
          title: "Tratamiento de la Depresión",
          blurb:
            "Evaluación psiquiátrica, manejo de antidepresivos y terapia para la depresión, con seguimiento regular para observar el progreso y ajustar el cuidado a medida que vuelve a sentirse como usted mismo.",
          href: "/depression-treatment",
          learnMore: "Conozca más sobre el tratamiento de la depresión",
        },
        {
          title: "Terapia",
          blurb:
            "Consejería individual para adolescentes, adultos jóvenes y adultos—con enfoque en comprensión, habilidades de afrontamiento y cambio duradero. Las sesiones ofrecen un espacio estable para trabajar la ansiedad, la depresión, el trauma, las relaciones y las transiciones de vida.",
          href: "/therapy",
          learnMore: "Conozca más sobre terapia",
        },
      ],
      additionalTools: {
        title: "Pruebas y Herramientas Adicionales",
        items: [
          {
            title: "Pruebas Genéticas Tempus",
            paragraph:
              "Las pruebas genéticas de Tempus pueden aportar información adicional sobre cómo su cuerpo podría procesar ciertos medicamentos. Los resultados se revisan con usted y se consideran junto con su historial y síntomas, a menudo como parte del cuidado de medicación psiquiátrica.",
          },
          {
            title: "Revisiones de Memoria y Cognición",
            paragraph:
              "Las evaluaciones BrainCheck ayudan a establecer una referencia inicial y a monitorear cambios en la memoria y el pensamiento con el tiempo. Su clínico revisa los resultados con usted y los considera junto con su historial, síntomas y otra información clínica para ayudar a orientar los próximos pasos. Las evaluaciones de seguimiento pueden ayudar a observar cambios entre visitas y aportar información adicional para apoyar el cuidado continuo, incluyendo terapia o manejo de medicamentos cuando sea apropiado.",
          },
        ],
      },
      concerns: {
        title: "Temas Con Los Que Ayudamos",
        intro:
          "Acompañamos a adolescentes hasta adultos con una amplia gama de inquietudes de salud mental—en inglés y español—para que el cuidado se adapte a donde usted se encuentra.",
        items: concernsItemsEs,
        note: "Firefly Wellness ofrece cuidado de salud mental ambulatorio y no es un servicio de emergencia o crisis. Si usted o alguien que quiere está en peligro inmediato, llame al 911 o acuda a la sala de emergencias más cercana. Para apoyo las 24 horas, llame o envíe un mensaje de texto al 988.",
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question:
              "¿Ofrecen medicación y terapia en la misma práctica?",
            answer:
              "Sí. La medicación, las pruebas de TDAH y atención, y la terapia están disponibles en una práctica coordinada—nuestros proveedores trabajan juntos para que su cuidado se mantenga alineado con sus metas.",
          },
          {
            question: "¿Quién puede recetar medicamentos en Firefly?",
            answer:
              "Las visitas de prescripción y el apoyo continuo con medicamentos los ofrece nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP) del equipo.",
          },
          {
            question:
              "¿Las pruebas de TDAH son un diagnóstico completo por sí solas?",
            answer:
              "No. La prueba T.O.V.A. es una herramienta clínica. Su clínico coloca los resultados en contexto con su historial, síntomas y metas antes de recomendar los próximos pasos.",
          },
          {
            question: "¿Firefly es un servicio de emergencia o crisis?",
            answer:
              "No. Ofrecemos cuidado de salud mental ambulatorio. Si usted o alguien que quiere está en peligro inmediato, llame al 911 o acuda a la sala de emergencias más cercana. Para apoyo las 24 horas, llame o envíe un mensaje de texto al 988.",
          },
        ],
      },
      closing: {
        title: "¿Listo para Dar el Siguiente Paso?",
        paragraph:
          "Ya sea que explore medicación psiquiátrica, pruebas de atención o terapia, estamos aquí para ayudarle a pasar de solo sobrellevar hacia un terreno más estable.",
        cta: "Programar una cita",
      },
    },
    therapy: {
      slug: "therapy",
      meta: {
        title: "Terapia en Español en Hinsdale, IL | Firefly Wellness",
        description:
          "Terapia en español en Hinsdale para adolescentes y adultos—ansiedad, depresión, trauma, relaciones y transiciones de vida—con terapeutas bilingües y coordinada con medicación psiquiátrica y pruebas de TDAH cuando es útil.",
      },
      hero: {
        title: "Terapia en Español en Hinsdale",
        subtitle:
          "Consejería reflexiva y basada en evidencia para adolescentes, adultos jóvenes y adultos—para reconectarse con sus fortalezas y avanzar hacia una vida más estable en Hinsdale, IL, sirviendo Oak Brook, Clarendon Hills, Western Springs, Westmont y suburbios occidentales cercanos.",
        cta: "Programar una cita",
      },
      who: {
        title: "A Quién Puede Ayudar la Terapia",
        intro:
          "Nuestros clínicos trabajan con diversas edades e inquietudes. Muchos clientes llegan durante periodos de estrés, cambio o cuando los patrones habituales dejan de funcionar.",
        items: [
          "Adolescentes, estudiantes universitarios, adultos jóvenes y adultos",
          "Personas que atraviesan ansiedad, estrés y agobio emocional",
          "Personas que experimentan depresión y ánimo bajo",
          "Clientes que trabajan el trauma, el TEPT o efectos duraderos de experiencias difíciles",
          "Personas con inquietudes de relación, familia o intimidad",
          "Personas que atraviesan transiciones de vida, desafíos escolares o laborales, y apoyo relacionado con TDAH",
        ],
      },
      what: {
        title: "Por Que Terapia",
        paragraphs: [
          "La vida puede sentirse abrumadora. El trauma, el estrés crónico, las dificultades en las relaciones o las transiciones importantes pueden dejarle con ansiedad, ánimo bajo o atrapado en patrones que no ayudan.",
          "No está solo. Según la National Alliance on Mental Illness (NAMI), 1 de cada 5 adultos experimenta desafíos de salud mental cada año. Tener dificultades no significa que este fallando.",
          "La terapia puede ayudar. En Firefly Wellness, caminamos a su lado mientras se reconecta con sus fortalezas y avanza hacia una vida más estable y significativa.",
          "Nuestros clínicos utilizan enfoques como la Terapia Cognitivo-Conductual (CBT), la Terapia de Aceptación y Compromiso (ACT), trabajo basado en fortalezas y terapias de arte expresivo cuando se ajustan a sus metas y preferencias.",
        ],
      },
      expect: {
        title: "Que Puede Esperar",
        intro:
          "La terapia en Firefly ofrece un espacio seguro y sin juicio para la reflexión, el crecimiento y el cambio. Las sesiones suelen enfocarse en:",
        steps: [
          "Comprender sus pensamientos, emociones y patrones",
          "Fortalecer habilidades de afrontamiento para usar entre sesiones",
          "Crear cambios emocionales y conductuales sostenibles",
          "Aclarar metas con su terapeuta y dar seguimiento a un progreso significativo",
          "Colaborar con otros proveedores de Firefly cuando la medicación psiquiátrica o las pruebas de TDAH puedan ayudar",
        ],
      },
      related: {
        title: "Cuidado Relacionado en Firefly",
        paragraph:
          "Algunos clientes se benefician de apoyos coordinados junto con la terapia. Cuando es una buena opción, podemos conectarle con pruebas de TDAH y atención o medicación psiquiátrica dentro de la misma práctica.",
        links: [
          {
            label: "Pruebas de TDAH y Atención",
            href: "/adhd-testing",
          },
          {
            label: "Medicación Psiquiátrica",
            href: "/medication-management",
          },
          { label: "Tratamiento de la Ansiedad", href: "/anxiety-treatment" },
          { label: "Tratamiento de la Depresión", href: "/depression-treatment" },
        ],
      },
      closing: {
        title: "Vea Si la Terapia Es Adecuada para Usted",
        paragraph:
          "Sentirse nervioso al comenzar terapia es completamente normal. Muchos clientes describen ese primer paso como uno de los más valiosos que han tomado por sí mismos.",
        scheduleLabel: "Reservar en línea ahora",
      },
    },
    adhdTesting: {
      slug: "adhd-testing",
      meta: {
        title: "Evaluación de TDAH en Español en Hinsdale | Firefly Wellness",
        description:
          "Evaluación de TDAH en español para adultos y adolescentes en Hinsdale, IL, con pruebas objetivas T.O.V.A., una evaluación clínica clara y tratamiento en una sola práctica. Aceptamos la mayoría de los seguros principales. Citas a menudo disponibles en pocos días.",
      },
      hero: {
        title: "Evaluación de TDAH para Adultos y Adolescentes en Español",
        subtitle:
          "Descubra si el TDAH explica lo que ha estado viviendo—y salga con un plan claro para lo que sigue. Una evaluación clínica integral con pruebas objetivas T.O.V.A., seguida de tratamiento en la misma práctica si lo necesita.",
        serviceArea:
          "Atendemos Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont y los suburbios del oeste cercanos.",
        highlights: [
          "Citas a menudo disponibles en pocos días",
          "Aceptamos seguros: Cigna, BCBS, UnitedHealthcare, Medicare y más",
          "Pruebas T.O.V.A. objetivas por computadora",
          "Evaluación, medicación y terapia en una sola práctica",
        ],
        cta: "Programar una evaluación de TDAH",
      },
      insurance: {
        title: "Seguros Aceptados para la Evaluación de TDAH",
        paragraph:
          "Aceptamos Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare para la evaluación de TDAH y el cuidado de seguimiento.",
        cashPay: "También aceptamos pago privado y seguros fuera de la red.",
        feesLink: "Ver detalles de seguros y tarifas de pago privado",
      },
      carePath: {
        title: "Evaluación y Cuidado Continuo del TDAH en Una Sola Práctica",
        intro:
          "Muchos proveedores de pruebas terminan con un informe. En Firefly, no tiene que empezar de nuevo en otro lugar—su evaluación puede llevar directamente al tratamiento con el mismo equipo coordinado.",
        steps: [
          {
            title: "Evaluación Clínica",
            description:
              "Hable sobre su historial, síntomas y metas con un clínico de Firefly.",
          },
          {
            title: "Prueba Objetiva T.O.V.A.",
            description:
              "Una prueba estructurada por computadora que mide la atención y el control de impulsos.",
          },
          {
            title: "Resultados Claros",
            description:
              "Revise sus hallazgos en un lenguaje claro, junto con todo lo demás que aprendemos sobre usted.",
          },
          {
            title: "Evaluación Psiquiátrica",
            description:
              "Cuando es apropiado, reúnase con nuestra PMHNP certificada por la junta para hablar sobre opciones de tratamiento, incluida la medicación.",
          },
          {
            title: "Cuidado Continuo",
            description:
              "Manejo de medicamentos, terapia y estrategias prácticas—coordinados bajo un mismo techo.",
          },
        ],
      },
      whyFirefly: {
        title: "Por Que Elegir Firefly para el Cuidado del TDAH",
        items: [
          {
            title: "Sin Traslados Entre Consultorios",
            paragraph:
              "Las pruebas, la prescripción y la terapia ocurren dentro de un mismo equipo coordinado, para que su cuidado se mantenga conectado desde la primera visita.",
          },
          {
            title: "PMHNP Certificada en Nuestro Equipo",
            paragraph:
              "Si la medicación puede ayudar, puede ser evaluado por nuestra propia Psychiatric-Mental Health Nurse Practitioner—sin necesidad de una referencia externa.",
          },
          {
            title: "Datos Objetivos, No Solo un Cuestionario",
            paragraph:
              "La prueba T.O.V.A. agrega información medible sobre la atención y el control de impulsos junto con su entrevista clínica.",
          },
          {
            title: "Acceso Rápido",
            paragraph:
              "Las citas de evaluación suelen estar disponibles en pocos días, para que no tenga que esperar meses por respuestas.",
          },
          {
            title: "Aceptamos Seguros",
            paragraph:
              "Trabajamos con Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare.",
          },
          {
            title: "Cuidado en Inglés y Español",
            paragraph:
              "La evaluación y el cuidado continuo están disponibles en ambos idiomas.",
          },
        ],
      },
      who: {
        title: "Evaluación de TDAH en Adultos",
        intro:
          "El TDAH no siempre se ve como la gente espera. Sus síntomas pueden coincidir con los de la ansiedad, la depresión, los problemas de sueño y otras inquietudes, por lo que a veces pasa desapercibido o se confunde con otra condición. Muchos adultos pasan años sin respuestas, o con un diagnóstico que nunca encajó del todo. Una evaluación puede ser útil si se identifica con lo siguiente:",
        items: [
          "No cumplir con fechas límite o dejar proyectos sin terminar en el trabajo",
          "Perder el control de tareas, cuentas o citas",
          "Empezar con fuerza pero tener dificultades para dar seguimiento",
          "Sentirse disperso o abrumado a pesar de un esfuerzo real",
          "Preguntarse durante años si el TDAH explica su experiencia",
          "Haber sido diagnosticado de niño y querer una evaluación actualizada como adulto",
        ],
        closing:
          "También evaluamos a adolescentes y estudiantes cuya concentración, organización o rendimiento escolar es motivo de preocupación.",
      },
      what: {
        title: "Qué Incluye Su Evaluación",
        paragraphs: [
          "Su evaluación de TDAH combina una evaluación clínica de su historial y síntomas con pruebas objetivas de atención. Revisará los resultados con su clínico en un lenguaje claro y saldrá con recomendaciones personalizadas—que pueden incluir tratamiento dentro de Firefly.",
          "T.O.V.A. (Test of Variables of Attention) es una prueba sencilla por computadora que usa un dispositivo especial para observar la atención y el control de impulsos. Es una de las herramientas que usamos al evaluar el TDAH y otras inquietudes relacionadas con la atención.",
          "Los resultados de la prueba nunca son toda la historia por si solos—su clínico los coloca en contexto con su historial, síntomas y metas antes de recomendar los próximos pasos.",
        ],
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿Aceptan mi seguro para las pruebas de TDAH?",
            answer:
              "Aceptamos Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare para la evaluación de TDAH y el cuidado de seguimiento. También aceptamos pago privado y seguros fuera de la red.",
          },
          {
            question: "¿Qué tan pronto me pueden atender?",
            answer:
              "Las citas de evaluación de TDAH suelen estar disponibles en pocos días. Programe en línea o comuníquese con nuestra oficina para encontrar el próximo horario disponible.",
          },
          {
            question: "¿La prueba T.O.V.A. es un diagnóstico por sí sola?",
            answer:
              "No. T.O.V.A. es una herramienta clínica. Su clínico combina los resultados con su historial y síntomas como parte de una evaluación integral antes de hacer cualquier diagnóstico o recomendación.",
          },
          {
            question:
              "¿Puedo recibir medicación para el TDAH en Firefly después de mi evaluación?",
            answer:
              "Cuando es apropiado, sí. Nuestra PMHNP certificada por la junta ofrece evaluación psiquiátrica y manejo continuo de medicamentos, coordinados con terapia y estrategias conductuales cuando es útil.",
          },
          {
            question: "¿Evalúan a adolescentes?",
            answer:
              "Sí. Evaluamos a adolescentes y adultos, y el cuidado está disponible en inglés y español.",
          },
        ],
      },
      closing: {
        title: "Obtenga Respuestas Sobre Su Atención y Enfoque",
        paragraph:
          "Si el enfoque, la organización o el seguimiento le han estado afectando, una evaluación clara es un primer paso práctico—y tendrá un equipo listo para ayudarle con lo que siga.",
        cta: "Programar una evaluación de TDAH",
        scheduleLabel: "Reservar en línea ahora",
      },
    },
    medicationManagement: {
      slug: "medication-management",
      meta: {
        title: "Medicación Psiquiátrica en Español en Hinsdale | Firefly Wellness",
        description:
          "Atención psiquiátrica en español en Hinsdale con nuestra PMHNP certificada por la junta: evaluación y manejo de medicamentos para adolescentes y adultos, coordinados con terapia y pruebas como Tempus y BrainCheck.",
      },
      hero: {
        title: "Manejo de Medicación Psiquiátrica en Español en Hinsdale",
        subtitle:
          "Visitas de prescripción y apoyo continuo con medicamentos con nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP)—coordinado con terapia y pruebas de TDAH en Hinsdale, IL, sirviendo Oak Brook, Clarendon Hills, Western Springs, Westmont y suburbios occidentales cercanos.",
        availabilityNote:
          "Las citas nuevas de medicación suelen estar disponibles con tiempos de espera cortos.",
        cta: "Programar una cita",
      },
      who: {
        title: "A Quién Puede Ayudar la Medicación Psiquiátrica",
        intro:
          "La medicina no es adecuada para todos, y nunca reemplaza la conexión ni el desarrollo de habilidades. Para algunas personas, crea suficiente alivio para dormir, concentrarse y beneficiarse más plenamente de la terapia.",
        items: [
          "Adolescentes y adultos que atraviesan depresión, ansiedad, dificultades de atención o problemas relacionados con el sueño",
          "Personas que aún se sienten muy decaídas, ansiosas o tensas aunque la terapia vaya bien",
          "Personas cuyos síntomas dificultan funcionar en la escuela, el trabajo o la vida diaria",
          "Clientes que ya toman medicación psiquiátrica y necesitan un apoyo continuo y reflexivo con la prescripción",
        ],
      },
      what: {
        title: "Cómo Abordamos la Medicación",
        paragraphs: [
          "Nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP) del equipo ofrece visitas de prescripción y apoyo continuo con medicamentos como parte del modelo coordinado de salud conductual de Firefly.",
          "Su clínico considera sus síntomas, historial, preferencias y metas—y puede colaborar con su terapeuta para que el cuidado se mantenga alineado.",
          "Las pruebas genéticas de Tempus pueden aportar información adicional sobre cómo su cuerpo podría procesar ciertos medicamentos. Los resultados se revisan con usted y se usan junto con—no en lugar de—su historial y síntomas.",
        ],
      },
      expect: {
        title: "Que Puede Esperar",
        intro:
          "El cuidado con medicamentos en Firefly comienza por comprender sus necesidades y avanza a un ritmo reflexivo—sin prisas. Un recorrido típico se ve así:",
        steps: [
          "Compartir sus inquietudes, historial y metas en una visita enfocada en evaluación",
          "Hablar sobre si la medicación es una buena opción y revisar alternativas, beneficios y consideraciones",
          "Iniciar o ajustar un plan de medicación cuando usted y su clínico acuerden que tiene sentido",
          "Asistir a visitas de seguimiento para monitorear la respuesta, los efectos secundarios y los próximos pasos",
          "Coordinar con terapia o pruebas de TDAH y atención dentro de Firefly cuando eso apoye su cuidado",
        ],
      },
      related: {
        title: "Cuidado Relacionado en Firefly",
        paragraph:
          "La medicación suele funcionar mejor junto con la terapia. Las pruebas de TDAH y atención también pueden ayudar a aclarar lo que está pasando cuando el enfoque y el control de impulsos forman parte de lo que está atravesando.",
        links: [
          { label: "Terapia", href: "/therapy" },
          {
            label: "Pruebas de TDAH y Atención",
            href: "/adhd-testing",
          },
          { label: "Tratamiento de la Ansiedad", href: "/anxiety-treatment" },
          { label: "Tratamiento de la Depresión", href: "/depression-treatment" },
        ],
      },
      closing: {
        title: "Explore Si el Apoyo con Medicamentos Es Adecuado para Usted",
        paragraph:
          "Si tiene curiosidad sobre la medicación como una parte de su cuidado, podemos ayudarle a sopesar opciones con cuidado y mantenerse apoyado mientras avanza.",
        scheduleLabel: "Reservar en línea ahora",
      },
    },
    anxietyTreatment: {
      slug: "anxiety-treatment",
      condition: "Anxiety",
      meta: {
        title:
          "Tratamiento de Ansiedad en Español en Hinsdale | Firefly Wellness",
        description:
          "Tratamiento de ansiedad en español en Hinsdale, IL, para adolescentes y adultos—evaluación psiquiátrica, manejo de medicamentos cuando es apropiado y terapia en una sola práctica. Aceptamos la mayoría de los seguros principales. Citas a menudo disponibles en pocos días.",
      },
      hero: {
        title: "Tratamiento de Ansiedad en Español en Hinsdale",
        subtitle:
          "Siéntase más tranquilo, duerma mejor y recupere las partes de su vida que la ansiedad ha ido desplazando. Firefly ofrece evaluación psiquiátrica, manejo de medicamentos cuando es la opción adecuada y terapia—todo coordinado dentro de una sola práctica.",
        serviceArea:
          "Atendemos Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont y los suburbios del oeste cercanos.",
        highlights: [
          "Citas a menudo disponibles en pocos días",
          "Aceptamos seguros: Cigna, BCBS, UnitedHealthcare, Medicare y más",
          "PMHNP certificada por la junta en nuestro equipo",
          "Medicación y terapia en una sola práctica",
        ],
        cta: "Programar una evaluación de ansiedad",
      },
      insurance: {
        title: "Seguros Aceptados para el Tratamiento de la Ansiedad",
        paragraph:
          "Aceptamos Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare para la evaluación psiquiátrica, el manejo de medicamentos y la terapia.",
        cashPay: "También aceptamos pago privado y seguros fuera de la red.",
        feesLink: "Ver detalles de seguros y tarifas de pago privado",
      },
      carePath: {
        title: "Cómo Funciona el Tratamiento de la Ansiedad en Firefly",
        intro:
          "No necesita tener todo resuelto antes de su primera visita. Empezamos por comprender lo que está viviendo, luego creamos un plan con usted—y lo ajustamos a medida que mejora.",
        steps: [
          {
            title: "Evaluación Psiquiátrica",
            description:
              "Una conversación detallada sobre sus síntomas, historial, salud y metas.",
          },
          {
            title: "Plan Personalizado",
            description:
              "Recomendaciones claras que se ajustan a sus síntomas, preferencias y vida diaria.",
          },
          {
            title: "Terapia y Habilidades de Afrontamiento",
            description:
              "Herramientas prácticas para la preocupación, el pánico y la evitación con un terapeuta de Firefly.",
          },
          {
            title: "Medicación, Si Es Apropiada",
            description:
              "Cuando la medicación puede ayudar, hablamos juntos de opciones, beneficios y efectos secundarios.",
          },
          {
            title: "Seguimiento y Ajustes",
            description:
              "Revisiones regulares para observar el progreso y ajustar el tratamiento con el tiempo.",
          },
        ],
      },
      whyFirefly: {
        title: "Por Que Elegir Firefly para el Cuidado de la Ansiedad",
        items: [
          {
            title: "Medicación y Terapia, Coordinadas",
            paragraph:
              "Su prescriptora y su terapeuta trabajan en la misma práctica, para que las decisiones de tratamiento se tomen con el panorama completo.",
          },
          {
            title: "Una Evaluación Sin Prisas",
            paragraph:
              "La ansiedad puede coincidir con problemas de sueño, depresión, TDAH e inquietudes de salud física. Observamos el panorama completo antes de recomendar un tratamiento.",
          },
          {
            title: "La Medicación Es una Opción, No una Regla",
            paragraph:
              "Muchas personas mejoran solo con terapia. Cuando la medicación puede ayudar, le explicamos por que y decidimos juntos.",
          },
          {
            title: "Acceso Rápido",
            paragraph:
              "Las citas nuevas suelen estar disponibles en pocos días, para que no tenga que manejar la ansiedad solo durante meses.",
          },
          {
            title: "Aceptamos Seguros",
            paragraph:
              "Trabajamos con Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare.",
          },
          {
            title: "Adolescentes y Adultos, en Inglés y Español",
            paragraph:
              "Atendemos a adolescentes, estudiantes universitarios y adultos, con cuidado disponible en ambos idiomas.",
          },
        ],
      },
      who: {
        title: "Señales de Que Puede Ser Momento de Buscar Ayuda para la Ansiedad",
        intro:
          "Cierta preocupación es parte normal de la vida. Puede ser momento de hablar con un profesional cuando la ansiedad es frecuente, difícil de controlar o empieza a influir en sus decisiones. Las señales comunes incluyen:",
        items: [
          "Preocupación constante o difícil de apagar, incluso cuando las cosas van bien",
          "Inquietud, irritabilidad o sentirse tenso la mayoría de los días",
          "Dificultad para conciliar o mantener el sueño porque su mente no se calma",
          "Evitar situaciones, personas o tareas por cómo le hacen sentir",
          "Síntomas físicos como corazón acelerado, opresión en el pecho, malestar estomacal o tensión muscular",
          "Ansiedad que interfiere con el trabajo, la escuela, las relaciones o la rutina diaria",
        ],
        closing:
          "Atendemos a adolescentes y adultos, incluidas personas que nunca han buscado ayuda y quienes ya han probado tratamiento en el pasado.",
      },
      topics: [
        {
          id: "types-of-anxiety",
          title: "Ansiedad Generalizada, Pánico y Otras Formas de Ansiedad",
          intro:
            "La ansiedad no es igual para todos. Parte de su evaluación consiste en comprender que patrones se ajustan a su experiencia, porque eso orienta el tratamiento más eficaz.",
          bullets: [
            "Ansiedad generalizada: preocupación persistente y amplia sobre el trabajo, la salud, la familia o asuntos cotidianos que es difícil de controlar",
            "Ataques de pánico: oleadas repentinas de miedo intenso con síntomas como palpitaciones, falta de aire, mareo o sensación de desconexión",
            "Ansiedad social: timidez intensa o miedo a ser juzgado que lleva a evitar situaciones sociales o laborales",
            "Preocupación por la salud: miedo continuo a una enfermedad que persiste a pesar de las aclaraciones",
            "Ansiedad junto con otras inquietudes, como depresión, TDAH, trauma o problemas de sueño",
          ],
        },
        {
          id: "psychiatric-care",
          title: "Cuidado Psiquiátrico para la Ansiedad en Hinsdale",
          paragraphs: [
            "El cuidado psiquiátrico para la ansiedad en Firefly lo ofrece nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP) del equipo. Nuestra PMHNP está capacitada para diagnosticar condiciones de salud mental, recetar medicamentos y manejar el tratamiento con el tiempo.",
            "Como nuestra prescriptora trabaja junto a nuestros terapeutas en la misma práctica de Hinsdale, su plan de medicación y su terapia pueden coordinarse en lugar de manejarse en consultorios separados.",
          ],
        },
        {
          id: "medication-management",
          title: "Manejo de Medicamentos para la Ansiedad",
          paragraphs: [
            "La medicación puede ser una parte útil del tratamiento de la ansiedad, especialmente cuando los síntomas son persistentes, intensos o dificultan beneficiarse de la terapia. Los medicamentos que se usan con frecuencia para la ansiedad incluyen ciertos antidepresivos, como los ISRS y los IRSN, junto con otras opciones que su clínico puede comentar según su situación.",
            "La medicación no siempre es el primer paso. Puede no recomendarse cuando los síntomas son leves, cuando usted prefiere comenzar con terapia o cuando la ansiedad se explica mejor por otra causa—como una condición médica, el uso de sustancias o una situación estresante que probablemente pasará.",
            "Si comienza un medicamento, su clínico le explicará qué esperar, cuánto tiempo puede tardar en notar una diferencia y los posibles efectos secundarios. También se pueden considerar las pruebas genéticas de Tempus para aportar información adicional sobre cómo su cuerpo podría procesar ciertos medicamentos.",
          ],
        },
        {
          id: "initial-evaluation",
          title: "Qué Esperar en Su Evaluación Psiquiátrica Inicial",
          intro:
            "Su primera visita es una conversación, no un examen. Normalmente incluye:",
          bullets: [
            "Sus síntomas actuales, cuándo comenzaron y cómo afectan su vida diaria",
            "Su historial de salud mental, incluido cualquier tratamiento o medicamento previo",
            "Historial médico relevante, medicamentos actuales, sueño y uso de sustancias",
            "Sus metas y preferencias de tratamiento",
            "Una conversación sobre los hallazgos y los próximos pasos recomendados antes de irse",
          ],
          paragraphs: [
            "Es útil traer una lista de sus medicamentos actuales y cualquier registro previo de salud mental que tenga. Saldrá con una comprensión clara de lo que recomendamos y por que.",
          ],
        },
        {
          id: "ongoing-care",
          title: "Tratamiento Continuo y Seguimiento",
          paragraphs: [
            "El tratamiento de la ansiedad funciona mejor con un seguimiento constante. Si comienza un medicamento, las visitas de seguimiento suelen ser más frecuentes al principio para que su clínico revise cómo responde, observe efectos secundarios y ajuste la dosis cuando sea necesario.",
            "A medida que los síntomas mejoran, las visitas suelen espaciarse. Con el tiempo, usted y su clínico decidirán juntos cuánto tiempo continuar el tratamiento y cuando puede tener sentido reducirlo o cambiar de rumbo.",
          ],
        },
        {
          id: "therapy",
          title: "Terapia para la Ansiedad",
          paragraphs: [
            "La terapia le ayuda a comprender que impulsa su ansiedad y le da habilidades para responder de otra manera. Nuestros clínicos utilizan enfoques como la Terapia Cognitivo-Conductual (CBT) y la Terapia de Aceptación y Compromiso (ACT) para abordar la preocupación, el pánico y la evitación.",
            "Algunas personas mejoran solo con terapia; otras se benefician de la terapia combinada con medicación. En Firefly, ambas están disponibles en una sola práctica.",
          ],
          links: [
            { label: "Conozca más sobre la terapia en Firefly", href: "/therapy" },
          ],
        },
      ],
      related: {
        title: "Cuidado Relacionado en Firefly",
        paragraph:
          "La ansiedad a menudo coincide con otras inquietudes. Cuando es útil, podemos coordinar el cuidado entre servicios dentro de la misma práctica.",
        links: [
          {
            label: "Manejo de Medicación Psiquiátrica",
            href: "/medication-management",
          },
          { label: "Tratamiento de la Depresión", href: "/depression-treatment" },
          { label: "Pruebas de TDAH y Atención", href: "/adhd-testing" },
        ],
      },
      note: "Firefly Wellness ofrece cuidado de salud mental ambulatorio y no es un servicio de emergencia o crisis. Si usted o alguien que quiere está en peligro inmediato, llame al 911 o acuda a la sala de emergencias más cercana. Para apoyo las 24 horas, llame o envíe un mensaje de texto al 988.",
      faq: {
        title: "Preguntas Frecuentes Sobre el Tratamiento de la Ansiedad",
        items: [
          {
            question: "¿Necesito un psiquiatra para la ansiedad?",
            answer:
              "No necesariamente. En Firefly, la evaluación psiquiátrica y el manejo de medicamentos los ofrece nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP), quien puede diagnosticar la ansiedad, recetar medicamentos y manejar su tratamiento con el tiempo.",
          },
          {
            question: "¿Tengo que tomar medicamentos para la ansiedad?",
            answer:
              "No. La medicación es una opción, no un requisito. Su clínico le explicará si podría ayudar en su situación, y la decisión siempre se toma junto con usted.",
          },
          {
            question: "¿Cuánto tardan en funcionar los medicamentos para la ansiedad?",
            answer:
              "Varía según el medicamento y la persona. Muchos medicamentos comunes para la ansiedad tardan varias semanas en alcanzar su efecto completo, por eso el seguimiento regular es parte del tratamiento.",
          },
          {
            question: "¿Puedo recibir solo terapia?",
            answer:
              "Sí. Muchas personas tratan la ansiedad solo con terapia. Si más adelante vale la pena considerar la medicación, nuestra prescriptora está en la misma práctica.",
          },
          {
            question: "¿Aceptan mi seguro?",
            answer:
              "Aceptamos Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare. También aceptamos pago privado y seguros fuera de la red.",
          },
          {
            question: "¿Qué tan pronto me pueden atender?",
            answer:
              "Las citas nuevas suelen estar disponibles en pocos días. Programe en línea o comuníquese con nuestra oficina para encontrar el próximo horario disponible.",
          },
          {
            question: "¿Tratan la ansiedad en adolescentes?",
            answer:
              "Sí. Trabajamos con adolescentes y adultos, e involucramos a padres o tutores cuando corresponde.",
          },
        ],
      },
      closing: {
        title: "De el Primer Paso Hacia Sentirse Más Tranquilo",
        paragraph:
          "La ansiedad es muy tratable. Una sola evaluación puede darle claridad sobre lo que está pasando y un plan práctico para empezar a sentirse mejor.",
        cta: "Programar una evaluación de ansiedad",
        scheduleLabel: "Reservar en línea ahora",
      },
    },
    depressionTreatment: {
      slug: "depression-treatment",
      condition: "Depression",
      meta: {
        title:
          "Tratamiento de Depresión en Español en Hinsdale | Firefly Wellness",
        description:
          "Tratamiento de depresión en español en Hinsdale, IL, para adolescentes y adultos—evaluación psiquiátrica, manejo de antidepresivos y terapia en una sola práctica. Aceptamos la mayoría de los seguros principales. Citas a menudo disponibles en pocos días.",
      },
      hero: {
        title: "Tratamiento de Depresión en Español en Hinsdale",
        subtitle:
          "Recupere su energía, su interés y su sentido de sí mismo. Firefly ofrece evaluación psiquiátrica, manejo de medicamentos y terapia para la depresión en una práctica coordinada—con un plan creado en torno a usted.",
        serviceArea:
          "Atendemos Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont y los suburbios del oeste cercanos.",
        highlights: [
          "Citas nuevas a menudo disponibles en pocos días",
          "Aceptamos la mayoría de los seguros principales, incluido Medicare",
          "PMHNP certificada por la junta en nuestro equipo",
          "Cuidado psiquiátrico y terapia bajo un mismo techo",
        ],
        cta: "Programar una evaluación de depresión",
      },
      insurance: {
        title: "Seguros Aceptados para el Tratamiento de la Depresión",
        paragraph:
          "Aceptamos Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare para la evaluación psiquiátrica, el manejo de medicamentos y la terapia.",
        cashPay: "También aceptamos pago privado y seguros fuera de la red.",
        feesLink: "Ver detalles de seguros y tarifas de pago privado",
      },
      carePath: {
        title: "Su Camino en el Tratamiento de la Depresión",
        intro:
          "La depresión puede hacer que incluso los pasos pequeños se sientan pesados. Mantenemos el proceso sencillo y le acompañamos mientras el tratamiento hace efecto.",
        steps: [
          {
            title: "Evaluación Psiquiátrica",
            description:
              "Conocemos sus síntomas, historial, salud y lo que quiere cambiar.",
          },
          {
            title: "Un Plan de Tratamiento Claro",
            description:
              "Recomendaciones que pueden incluir medicación, terapia o ambas.",
          },
          {
            title: "Inicio del Tratamiento",
            description:
              "Si la medicación forma parte de su plan, comenzamos con cuidado y le explicamos qué esperar.",
          },
          {
            title: "Medición del Progreso",
            description:
              "Seguimiento regular para observar el ánimo, el sueño, la energía y los efectos secundarios.",
          },
          {
            title: "Apoyo a Largo Plazo",
            description:
              "Cuidado continuo para ayudarle a mantenerse bien y prevenir recaídas.",
          },
        ],
      },
      whyFirefly: {
        title: "Por Que Elegir Firefly para el Cuidado de la Depresión",
        items: [
          {
            title: "Un Solo Equipo para Medicación y Terapia",
            paragraph:
              "Su prescriptora y su terapeuta trabajan juntos en una sola práctica, para que su tratamiento se mantenga alineado a medida que las cosas cambian.",
          },
          {
            title: "Ayuda Cuando Su Tratamiento Actual No Funciona",
            paragraph:
              "Si ha probado medicamentos sin suficiente alivio, revisamos con cuidado lo que ha ayudado y lo que no antes de recomendar los próximos pasos.",
          },
          {
            title: "Un Progreso Que Puede Ver",
            paragraph:
              "Damos seguimiento a cómo se siente con el tiempo—no solo en su primera visita—y ajustamos el tratamiento según cómo se siente realmente.",
          },
          {
            title: "Atención en Días, No en Meses",
            paragraph:
              "Las citas nuevas suelen estar disponibles en pocos días, para que pueda comenzar el tratamiento antes.",
          },
          {
            title: "Aceptamos Seguros",
            paragraph:
              "Trabajamos con Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare.",
          },
          {
            title: "Cuidado para Adolescentes y Adultos, en Inglés y Español",
            paragraph:
              "Tratamos a adolescentes y adultos, con cuidado disponible en ambos idiomas.",
          },
        ],
      },
      who: {
        title: "Señales de Que el Tratamiento Profesional Puede Ser Apropiado",
        intro:
          "Todos tenemos días difíciles. La depresión es diferente: persiste y afecta cómo piensa, siente y funciona. Considere una evaluación si varias de estas señales han durado dos semanas o más:",
        items: [
          "Tristeza, vacío o ánimo bajo persistente la mayor parte del día",
          "Pérdida de interés o disfrute en cosas que antes le importaban",
          "Cambios en el sueño—dormir mucho más o mucho menos de lo habitual",
          "Cambios en el apetito o el peso",
          "Cansancio o poca energía que hace más difíciles las tareas diarias",
          "Sentimientos de inutilidad, culpa o desesperanza",
          "Dificultad para concentrarse o tomar decisiones en el trabajo, la escuela o el hogar",
        ],
        closing:
          "Si tiene pensamientos de hacerse daño o de que la vida no vale la pena, busque ayuda ahora: llame o envíe un mensaje de texto al 988 para apoyo las 24 horas, o llame al 911 en una emergencia.",
      },
      topics: [
        {
          id: "treatment",
          title: "Tratamiento de la Depresión en Hinsdale",
          paragraphs: [
            "La depresión es una de las condiciones de salud mental más tratables. Un tratamiento eficaz suele incluir medicación, terapia o una combinación de ambas, junto con cambios prácticos que apoyan el sueño, la actividad y la conexión.",
            "En Firefly, su tratamiento se coordina dentro de una sola práctica en Hinsdale. Eso significa que su prescriptora y su terapeuta pueden compartir un panorama claro de cómo está y ajustar el cuidado juntos.",
          ],
        },
        {
          id: "psychiatric-care",
          title: "Cuidado Psiquiátrico para la Depresión",
          paragraphs: [
            "El cuidado psiquiátrico para la depresión en Firefly lo ofrece nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP) del equipo, quien evalúa los síntomas, diagnostica la depresión y condiciones relacionadas, receta medicamentos y maneja el tratamiento con el tiempo.",
            "También buscamos factores que pueden imitar o empeorar la depresión—como problemas de sueño, ansiedad, TDAH, condiciones médicas o efectos secundarios de medicamentos—para que su tratamiento aborde el panorama completo.",
          ],
        },
        {
          id: "medication-management",
          title: "Opciones y Manejo de Medicamentos para la Depresión",
          paragraphs: [
            "Los medicamentos antidepresivos pueden reducir los síntomas de la depresión y ayudar a recuperar la energía, la motivación y la concentración. Las opciones comunes incluyen los ISRS, los IRSN y otros antidepresivos. Su clínico considerará sus síntomas, historial, otras condiciones de salud y preferencias al hablar de las opciones.",
            "Encontrar el medicamento y la dosis adecuados puede tomar tiempo. La mayoría de los antidepresivos tardan varias semanas en alcanzar su efecto completo, y algunas personas necesitan un ajuste o un medicamento diferente antes de encontrar el mejor. Las pruebas genéticas de Tempus pueden aportar información adicional sobre cómo su cuerpo podría procesar ciertos medicamentos.",
            "La medicación no siempre es el primer paso adecuado. Para una depresión más leve, o cuando prefiere comenzar con terapia, su clínico puede recomendar empezar por ahí. Siempre le explicaremos el razonamiento y decidiremos juntos.",
          ],
        },
        {
          id: "initial-evaluation",
          title: "Qué Esperar en Su Evaluación Psiquiátrica Inicial",
          intro:
            "Su primera cita se enfoca en comprenderle. Hablaremos sobre:",
          bullets: [
            "Cómo se ha sentido y cuánto tiempo han estado presentes los síntomas",
            "El sueño, el apetito, la energía, la concentración y el funcionamiento diario",
            "Episodios previos de depresión y cualquier tratamiento o medicamento anterior",
            "Historial médico, medicamentos actuales y uso de sustancias",
            "Su seguridad, su red de apoyo y sus metas de tratamiento",
          ],
          paragraphs: [
            "Antes de irse, su clínico le compartirá sus impresiones y los próximos pasos recomendados. Si tiene registros de tratamientos anteriores o una lista de medicamentos que ha probado, tráigalos.",
          ],
        },
        {
          id: "ongoing-care",
          title: "Cuidado Continuo y Seguimiento",
          paragraphs: [
            "Las visitas de seguimiento son una parte importante del tratamiento de la depresión. Al principio suelen ser más frecuentes para que su clínico observe su respuesta, revise efectos secundarios y ajuste su plan.",
            "Una vez que se siente mejor, continuar el tratamiento por un tiempo puede ayudar a evitar que los síntomas regresen. Cuándo y cómo cambiar o suspender un medicamento es una decisión que usted y su clínico toman juntos—nunca de forma repentina ni por su cuenta.",
          ],
        },
        {
          id: "therapy",
          title: "Terapia para la Depresión",
          paragraphs: [
            "La terapia le ayuda a comprender los patrones que mantienen la depresión y a desarrollar habilidades para cambiarlos. Nuestros clínicos utilizan enfoques como la Terapia Cognitivo-Conductual (CBT), la Terapia de Aceptación y Compromiso (ACT) y el trabajo basado en fortalezas, adaptados a sus metas.",
            "Para muchas personas, la terapia combinada con medicación funciona mejor que cualquiera de las dos por separado. En Firefly, ambas están disponibles en la misma práctica.",
          ],
          links: [
            { label: "Conozca más sobre la terapia en Firefly", href: "/therapy" },
          ],
        },
      ],
      related: {
        title: "Cuidado Relacionado en Firefly",
        paragraph:
          "La depresión a menudo coincide con la ansiedad, las inquietudes de atención y los problemas de sueño. Cuando ayuda, coordinamos el cuidado entre servicios dentro de una sola práctica.",
        links: [
          {
            label: "Manejo de Medicación Psiquiátrica",
            href: "/medication-management",
          },
          { label: "Tratamiento de la Ansiedad", href: "/anxiety-treatment" },
          { label: "Pruebas de TDAH y Atención", href: "/adhd-testing" },
        ],
      },
      note: "Firefly Wellness ofrece cuidado de salud mental ambulatorio y no es un servicio de emergencia o crisis. Si está pensando en hacerse daño o está en peligro inmediato, llame al 911 o acuda a la sala de emergencias más cercana. Para apoyo las 24 horas, llame o envíe un mensaje de texto al 988 (Línea de Prevención del Suicidio y Crisis).",
      faq: {
        title: "Preguntas Frecuentes Sobre el Tratamiento de la Depresión",
        items: [
          {
            question: "¿Necesito un psiquiatra para la depresión?",
            answer:
              "No necesariamente. En Firefly, la evaluación psiquiátrica y el manejo de medicamentos los ofrece nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP), quien puede diagnosticar la depresión, recetar medicamentos y manejar su cuidado con el tiempo.",
          },
          {
            question: "¿Cómo sé si es depresión o solo una mala racha?",
            answer:
              "Una mala racha suele mejorar cuando cambian las circunstancias. La depresión tiende a durar dos semanas o más y afecta el sueño, la energía, el interés y el funcionamiento diario. Si no está seguro, una evaluación puede ayudar a aclarar lo que está pasando.",
          },
          {
            question: "¿Cuánto tardan en funcionar los antidepresivos?",
            answer:
              "Algunas personas notan cambios en el sueño o la energía en las primeras semanas, pero la mayoría de los antidepresivos tardan varias semanas en alcanzar su efecto completo. El seguimiento regular ayuda a asegurar que el tratamiento va por buen camino.",
          },
          {
            question: "¿Qué pasa si mi medicamento actual no funciona?",
            answer:
              "Es una razón común por la que las personas llegan a Firefly. Revisamos su historial, lo que ha probado y sus síntomas actuales, y luego hablamos de opciones como ajustar la dosis, cambiar de medicamento, agregar terapia o realizar una evaluación adicional.",
          },
          {
            question: "¿Aceptan mi seguro?",
            answer:
              "Aceptamos Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare. También aceptamos pago privado y seguros fuera de la red.",
          },
          {
            question: "¿Qué tan pronto me pueden atender?",
            answer:
              "Las citas nuevas suelen estar disponibles en pocos días. Programe en línea o comuníquese con nuestra oficina para encontrar el próximo horario disponible.",
          },
          {
            question: "¿Tratan la depresión en adolescentes?",
            answer:
              "Sí. Tratamos a adolescentes y adultos, e involucramos a padres o tutores cuando corresponde.",
          },
        ],
      },
      closing: {
        title: "No Tiene Que Esperar para Sentirse Mejor",
        paragraph:
          "La depresión puede hacer que pedir ayuda se sienta difícil. Programar una evaluación es un primer paso significativo, y nuestro equipo le ayudará con lo que siga.",
        cta: "Programar una evaluación de depresión",
        scheduleLabel: "Reservar en línea ahora",
      },
    },
  },
};

export function getServicePagesContent(locale: Locale): ServicePagesContent {
  return servicePagesContent[locale] ?? servicePagesContent.en;
}
