import type { Locale } from "@/data/siteContent";

export type ServiceRelatedLink = {
  label: string;
  href: string;
};

export type ServicePageCopy = {
  slug: "therapy" | "adhd-testing" | "medication-management";
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
  what: {
    title: string;
    paragraphs: string[];
  };
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
  "Depresion",
  "Ansiedad y estres",
  "Trauma",
  "TEPT",
  "Intimidad sexual",
  "Cuidado afirmativo LGBTQ+",
  "Dificultades en transiciones de vida",
  "Problemas de relacion",
  "TDAH y problemas de atencion",
  "Problemas escolares",
  "Fobias y miedos",
  "Familia, parejas, matrimonio",
  "Consejeria prematrimonial",
  "Temas de la mujer",
  "Regulacion emocional",
  "TOC y conductas obsesivas",
  "Problemas laborales",
  "Problemas de sueno",
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
            "Our board-certified PMHNP-BC provides personalized psychiatric medication evaluation and ongoing medication management for ADHD, anxiety, depression, and other mental health concerns. Treatment is tailored to your symptoms, history, goals, and individual needs.",
          href: "/medication-management",
          learnMore: "Learn more about psychiatric medication",
        },
        {
          title: "ADHD & Attention Testing",
          blurb:
            "Computer-based T.O.V.A. testing helps evaluate attention and impulse control as part of a broader clinical picture. Results are reviewed with your clinician and used alongside your history and goals.",
          href: "/adhd-testing",
          learnMore: "Learn more about ADHD testing",
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
              "Tempus genetic testing can provide additional information about how your body may process certain medications. Results are reviewed with you and used alongside your clinical picture, often as part of psychiatric medication care.",
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
              "Prescribing visits and ongoing medication support are provided by our on-staff board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC).",
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
          "We accept Cigna, Blue Cross Blue Shield, Humana, Lyra, Medicare, TriWest, and UnitedHealthcare for ADHD evaluation and follow-up care.",
        cashPay: "We also accept cash pay and out-of-network insurances.",
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
              "Review your findings in plain language, in the context of your full clinical picture.",
          },
          {
            title: "Psychiatric Evaluation",
            description:
              "When appropriate, meet with our board-certified PMHNP-BC to discuss treatment options, including medication.",
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
            title: "On-Staff Board-Certified PMHNP-BC",
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
              "We work with Cigna, Blue Cross Blue Shield, Humana, Lyra, Medicare, TriWest, and UnitedHealthcare.",
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
          "ADHD does not always look the way people expect, and many adults go years without answers. An evaluation may be helpful if you recognize yourself here:",
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
              "We accept Cigna, Blue Cross Blue Shield, Humana, Lyra, Medicare, TriWest, and UnitedHealthcare for ADHD evaluation and follow-up care. We also accept cash pay and out-of-network insurances.",
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
              "When appropriate, yes. Our on-staff board-certified PMHNP-BC provides psychiatric evaluation and ongoing medication management, coordinated with therapy and behavioral strategies when helpful.",
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
          "Outpatient psychiatric medication in Hinsdale with our on-staff board-certified PMHNP-BC—for adolescents through adults, coordinated with therapy and testing, including Tempus and BrainCheck when part of your care.",
      },
      hero: {
        title: "Psychiatric Medication Management in Hinsdale",
        subtitle:
          "Prescribing visits and ongoing medication support with our on-staff board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC)—coordinated with therapy and ADHD testing in Hinsdale, IL, serving Oak Brook, Clarendon Hills, Western Springs, Westmont, and nearby western suburbs.",
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
          "Our on-staff board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC) provides prescribing visits and ongoing medication support as part of Firefly’s coordinated behavioral health model.",
          "Your clinician considers your symptoms, history, preferences, and goals—and may collaborate with your therapist so care stays aligned.",
          "Tempus genetic testing can provide additional information about how your body may process certain medications. Results are reviewed with you and used alongside—not instead of—your clinical picture.",
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
          "Medication often works best alongside therapy. ADHD and attention testing can also inform the broader clinical picture when focus and impulse control are part of what you are navigating.",
        links: [
          { label: "Therapy", href: "/therapy" },
          { label: "ADHD & Attention Testing", href: "/adhd-testing" },
        ],
      },
      closing: {
        title: "Explore Whether Medication Support Is Right for You",
        paragraph:
          "If you are curious about medication as one part of your care, we can help you weigh options carefully and stay supported as you move forward.",
        scheduleLabel: "Book online now",
      },
    },
  },
  es: {
    hub: {
      meta: {
        title:
          "Medicacion Psiquiatrica, Pruebas de TDAH y Terapia en Hinsdale | Firefly Wellness",
        description:
          "Cuidado de salud mental ambulatorio coordinado en Hinsdale para adolescentes hasta adultos—medicacion psiquiatrica, pruebas de TDAH y atencion, y terapia en una sola practica.",
      },
      hero: {
        title: "Servicios de Salud Mental en Hinsdale",
        subtitle:
          "Medicacion psiquiatrica, pruebas de TDAH y atencion, y terapia en una practica coordinada en Hinsdale, IL—sirviendo Oak Brook, Clarendon Hills, Western Springs, Westmont y suburbios occidentales cercanos.",
        cta: "Programar una cita",
      },
      overview: {
        title: "Cuidado Coordinado en Una Sola Practica",
        paragraphs: [
          "En Firefly Wellness, adoptamos un enfoque colaborativo del cuidado, reuniendo la experiencia adecuada en un solo lugar. En lugar de coordinar proveedores en distintos consultorios, puede acceder a un apoyo integral dentro de una sola practica, con clinicos que trabajan juntos para mantener su cuidado conectado con sus necesidades, metas y bienestar general.",
          "Atendemos a adolescentes y adultos, con cuidado disponible en ingles y espanol. Ya sea que este dando su primer paso hacia el apoyo o buscando lo que sigue, lo acompanamos donde se encuentre y le brindamos un cuidado reflexivo y personalizado en cada paso del camino.",
        ],
      },
      offeringsTitle: "Servicios Principales",
      offerings: [
        {
          title: "Manejo de Medicacion Psiquiatrica",
          blurb:
            "Nuestra PMHNP-BC certificada por la junta ofrece evaluacion personalizada de medicacion psiquiatrica y manejo continuo de medicamentos para el TDAH, la ansiedad, la depresion y otras inquietudes de salud mental. El tratamiento se adapta a sus sintomas, historial, metas y necesidades individuales.",
          href: "/medication-management",
          learnMore: "Conozca mas sobre medicacion psiquiatrica",
        },
        {
          title: "Pruebas de TDAH y Atencion",
          blurb:
            "Las pruebas T.O.V.A. por computadora ayudan a evaluar la atencion y el control de impulsos como parte de un panorama clinico mas amplio. Los resultados se revisan con su clinico y se usan junto con su historial y metas.",
          href: "/adhd-testing",
          learnMore: "Conozca mas sobre pruebas de TDAH",
        },
        {
          title: "Terapia",
          blurb:
            "Consejeria individual para adolescentes, adultos jovenes y adultos—con enfoque en comprension, habilidades de afrontamiento y cambio duradero. Las sesiones ofrecen un espacio estable para trabajar la ansiedad, la depresion, el trauma, las relaciones y las transiciones de vida.",
          href: "/therapy",
          learnMore: "Conozca mas sobre terapia",
        },
      ],
      additionalTools: {
        title: "Pruebas y Herramientas Adicionales",
        items: [
          {
            title: "Pruebas Geneticas Tempus",
            paragraph:
              "Las pruebas geneticas de Tempus pueden aportar informacion adicional sobre como su cuerpo podria procesar ciertos medicamentos. Los resultados se revisan con usted y se usan junto con su panorama clinico, a menudo como parte del cuidado de medicacion psiquiatrica.",
          },
          {
            title: "Revisiones de Memoria y Cognicion",
            paragraph:
              "Las evaluaciones BrainCheck ayudan a establecer una referencia inicial y a monitorear cambios en la memoria y el pensamiento con el tiempo. Su clinico revisa los resultados con usted y los considera junto con su historial, sintomas y otra informacion clinica para ayudar a orientar los proximos pasos. Las evaluaciones de seguimiento pueden ayudar a observar cambios entre visitas y aportar informacion adicional para apoyar el cuidado continuo, incluyendo terapia o manejo de medicamentos cuando sea apropiado.",
          },
        ],
      },
      concerns: {
        title: "Temas Con Los Que Ayudamos",
        intro:
          "Acompanamos a adolescentes hasta adultos con una amplia gama de inquietudes de salud mental—en ingles y espanol—para que el cuidado se adapte a donde usted se encuentra.",
        items: concernsItemsEs,
        note: "Firefly Wellness ofrece cuidado de salud mental ambulatorio y no es un servicio de emergencia o crisis. Si usted o alguien que quiere esta en peligro inmediato, llame al 911 o acuda a la sala de emergencias mas cercana. Para apoyo las 24 horas, llame o envie un mensaje de texto al 988.",
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question:
              "Ofrecen medicacion y terapia en la misma practica?",
            answer:
              "Si. La medicacion, las pruebas de TDAH y atencion, y la terapia estan disponibles en una practica coordinada—nuestros proveedores trabajan juntos para que su cuidado se mantenga alineado con sus metas.",
          },
          {
            question: "Quien puede recetar medicamentos en Firefly?",
            answer:
              "Las visitas de prescripcion y el apoyo continuo con medicamentos los ofrece nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP-BC) del equipo.",
          },
          {
            question:
              "Las pruebas de TDAH son un diagnostico completo por si solas?",
            answer:
              "No. La prueba T.O.V.A. es una herramienta clinica. Su clinico coloca los resultados en contexto con su historial, sintomas y metas antes de recomendar los proximos pasos.",
          },
          {
            question: "Firefly es un servicio de emergencia o crisis?",
            answer:
              "No. Ofrecemos cuidado de salud mental ambulatorio. Si usted o alguien que quiere esta en peligro inmediato, llame al 911 o acuda a la sala de emergencias mas cercana. Para apoyo las 24 horas, llame o envie un mensaje de texto al 988.",
          },
        ],
      },
      closing: {
        title: "Listo para Dar el Siguiente Paso?",
        paragraph:
          "Ya sea que explore medicacion psiquiatrica, pruebas de atencion o terapia, estamos aqui para ayudarle a pasar de solo sobrellevar hacia un terreno mas estable.",
        cta: "Programar una cita",
      },
    },
    therapy: {
      slug: "therapy",
      meta: {
        title: "Terapia en Hinsdale | Firefly Wellness",
        description:
          "Consejeria basada en evidencia en Hinsdale para adolescentes hasta adultos—ansiedad, depresion, trauma, relaciones y transiciones de vida—coordinada con medicacion psiquiatrica y pruebas de TDAH cuando es util.",
      },
      hero: {
        title: "Terapia en Hinsdale",
        subtitle:
          "Consejeria reflexiva y basada en evidencia para adolescentes, adultos jovenes y adultos—para reconectarse con sus fortalezas y avanzar hacia una vida mas estable en Hinsdale, IL, sirviendo Oak Brook, Clarendon Hills, Western Springs, Westmont y suburbios occidentales cercanos.",
        cta: "Programar una cita",
      },
      who: {
        title: "A Quien Puede Ayudar la Terapia",
        intro:
          "Nuestros clinicos trabajan con diversas edades e inquietudes. Muchos clientes llegan durante periodos de estres, cambio o cuando los patrones habituales dejan de funcionar.",
        items: [
          "Adolescentes, estudiantes universitarios, adultos jovenes y adultos",
          "Personas que atraviesan ansiedad, estres y abrumo emocional",
          "Personas que experimentan depresion y animo bajo",
          "Clientes que trabajan el trauma, el TEPT o efectos duraderos de experiencias dificiles",
          "Personas con inquietudes de relacion, familia o intimidad",
          "Personas que atraviesan transiciones de vida, desafios escolares o laborales, y apoyo relacionado con TDAH",
        ],
      },
      what: {
        title: "Por Que Terapia",
        paragraphs: [
          "La vida puede sentirse abrumadora. El trauma, el estres cronico, las dificultades en las relaciones o las transiciones importantes pueden dejarle con ansiedad, animo bajo o atrapado en patrones que no ayudan.",
          "No esta solo. Segun la National Alliance on Mental Illness (NAMI), 1 de cada 5 adultos experimenta desafios de salud mental cada ano. Tener dificultades no significa que este fallando.",
          "La terapia puede ayudar. En Firefly Wellness, caminamos a su lado mientras se reconecta con sus fortalezas y avanza hacia una vida mas estable y significativa.",
          "Nuestros clinicos utilizan enfoques como la Terapia Cognitivo-Conductual (CBT), la Terapia de Aceptacion y Compromiso (ACT), trabajo basado en fortalezas y terapias de arte expresivo cuando se ajustan a sus metas y preferencias.",
        ],
      },
      expect: {
        title: "Que Puede Esperar",
        intro:
          "La terapia en Firefly ofrece un espacio seguro y sin juicio para la reflexion, el crecimiento y el cambio. Las sesiones suelen enfocarse en:",
        steps: [
          "Comprender sus pensamientos, emociones y patrones",
          "Fortalecer habilidades de afrontamiento para usar entre sesiones",
          "Crear cambios emocionales y conductuales sostenibles",
          "Aclarar metas con su terapeuta y dar seguimiento a un progreso significativo",
          "Colaborar con otros proveedores de Firefly cuando la medicacion psiquiatrica o las pruebas de TDAH puedan ayudar",
        ],
      },
      related: {
        title: "Cuidado Relacionado en Firefly",
        paragraph:
          "Algunos clientes se benefician de apoyos coordinados junto con la terapia. Cuando es una buena opcion, podemos conectarle con pruebas de TDAH y atencion o medicacion psiquiatrica dentro de la misma practica.",
        links: [
          {
            label: "Pruebas de TDAH y Atencion",
            href: "/adhd-testing",
          },
          {
            label: "Medicacion Psiquiatrica",
            href: "/medication-management",
          },
        ],
      },
      closing: {
        title: "Vea Si la Terapia Es Adecuada para Usted",
        paragraph:
          "Sentirse nervioso al comenzar terapia es completamente normal. Muchos clientes describen ese primer paso como uno de los mas valiosos que han tomado por si mismos.",
        scheduleLabel: "Reservar en linea ahora",
      },
    },
    adhdTesting: {
      slug: "adhd-testing",
      meta: {
        title: "Evaluacion y Pruebas de TDAH en Hinsdale | Firefly Wellness",
        description:
          "Evaluacion de TDAH para adultos y adolescentes en Hinsdale con pruebas objetivas T.O.V.A., una evaluacion clinica clara y tratamiento en una sola practica. Aceptamos la mayoria de los seguros principales. Citas a menudo disponibles en pocos dias.",
      },
      hero: {
        title: "Evaluacion y Pruebas de TDAH en Hinsdale",
        subtitle:
          "Descubra si el TDAH explica lo que ha estado viviendo—y salga con un plan claro para lo que sigue. Una evaluacion clinica integral con pruebas objetivas T.O.V.A., seguida de tratamiento en la misma practica si lo necesita.",
        serviceArea:
          "Atendemos Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont y los suburbios del oeste cercanos.",
        highlights: [
          "Citas a menudo disponibles en pocos dias",
          "Aceptamos seguros: Cigna, BCBS, UnitedHealthcare, Medicare y mas",
          "Pruebas T.O.V.A. objetivas por computadora",
          "Evaluacion, medicacion y terapia en una sola practica",
        ],
        cta: "Programar una evaluacion de TDAH",
      },
      insurance: {
        title: "Seguros Aceptados para la Evaluacion de TDAH",
        paragraph:
          "Aceptamos Cigna, Blue Cross Blue Shield, Humana, Lyra, Medicare, TriWest y UnitedHealthcare para la evaluacion de TDAH y el cuidado de seguimiento.",
        cashPay: "Tambien aceptamos pago privado y seguros fuera de la red.",
      },
      carePath: {
        title: "Evaluacion y Cuidado Continuo del TDAH en Una Sola Practica",
        intro:
          "Muchos proveedores de pruebas terminan con un informe. En Firefly, no tiene que empezar de nuevo en otro lugar—su evaluacion puede llevar directamente al tratamiento con el mismo equipo coordinado.",
        steps: [
          {
            title: "Evaluacion Clinica",
            description:
              "Hable sobre su historial, sintomas y metas con un clinico de Firefly.",
          },
          {
            title: "Prueba Objetiva T.O.V.A.",
            description:
              "Una prueba estructurada por computadora que mide la atencion y el control de impulsos.",
          },
          {
            title: "Resultados Claros",
            description:
              "Revise sus hallazgos en un lenguaje claro, en el contexto de su panorama clinico completo.",
          },
          {
            title: "Evaluacion Psiquiatrica",
            description:
              "Cuando es apropiado, reunase con nuestra PMHNP-BC certificada por la junta para hablar sobre opciones de tratamiento, incluida la medicacion.",
          },
          {
            title: "Cuidado Continuo",
            description:
              "Manejo de medicamentos, terapia y estrategias practicas—coordinados bajo un mismo techo.",
          },
        ],
      },
      whyFirefly: {
        title: "Por Que Elegir Firefly para el Cuidado del TDAH",
        items: [
          {
            title: "Sin Traslados Entre Consultorios",
            paragraph:
              "Las pruebas, la prescripcion y la terapia ocurren dentro de un mismo equipo coordinado, para que su cuidado se mantenga conectado desde la primera visita.",
          },
          {
            title: "PMHNP-BC Certificada en Nuestro Equipo",
            paragraph:
              "Si la medicacion puede ayudar, puede ser evaluado por nuestra propia Psychiatric-Mental Health Nurse Practitioner—sin necesidad de una referencia externa.",
          },
          {
            title: "Datos Objetivos, No Solo un Cuestionario",
            paragraph:
              "La prueba T.O.V.A. agrega informacion medible sobre la atencion y el control de impulsos junto con su entrevista clinica.",
          },
          {
            title: "Acceso Rapido",
            paragraph:
              "Las citas de evaluacion suelen estar disponibles en pocos dias, para que no tenga que esperar meses por respuestas.",
          },
          {
            title: "Aceptamos Seguros",
            paragraph:
              "Trabajamos con Cigna, Blue Cross Blue Shield, Humana, Lyra, Medicare, TriWest y UnitedHealthcare.",
          },
          {
            title: "Cuidado en Ingles y Espanol",
            paragraph:
              "La evaluacion y el cuidado continuo estan disponibles en ambos idiomas.",
          },
        ],
      },
      who: {
        title: "Evaluacion de TDAH en Adultos",
        intro:
          "El TDAH no siempre se ve como la gente espera, y muchos adultos pasan anos sin respuestas. Una evaluacion puede ser util si se identifica con lo siguiente:",
        items: [
          "No cumplir con fechas limite o dejar proyectos sin terminar en el trabajo",
          "Perder el control de tareas, cuentas o citas",
          "Empezar con fuerza pero tener dificultades para dar seguimiento",
          "Sentirse disperso o abrumado a pesar de un esfuerzo real",
          "Preguntarse durante anos si el TDAH explica su experiencia",
          "Haber sido diagnosticado de nino y querer una evaluacion actualizada como adulto",
        ],
        closing:
          "Tambien evaluamos a adolescentes y estudiantes cuya concentracion, organizacion o rendimiento escolar es motivo de preocupacion.",
      },
      what: {
        title: "Que Incluye Su Evaluacion",
        paragraphs: [
          "Su evaluacion de TDAH combina una evaluacion clinica de su historial y sintomas con pruebas objetivas de atencion. Revisara los resultados con su clinico en un lenguaje claro y saldra con recomendaciones personalizadas—que pueden incluir tratamiento dentro de Firefly.",
          "T.O.V.A. (Test of Variables of Attention) es una prueba sencilla por computadora que usa un dispositivo especial para observar la atencion y el control de impulsos. Es una de las herramientas que usamos al evaluar el TDAH y otras inquietudes relacionadas con la atencion.",
          "Los resultados de la prueba nunca son toda la historia por si solos—su clinico los coloca en contexto con su historial, sintomas y metas antes de recomendar los proximos pasos.",
        ],
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "Aceptan mi seguro para las pruebas de TDAH?",
            answer:
              "Aceptamos Cigna, Blue Cross Blue Shield, Humana, Lyra, Medicare, TriWest y UnitedHealthcare para la evaluacion de TDAH y el cuidado de seguimiento. Tambien aceptamos pago privado y seguros fuera de la red.",
          },
          {
            question: "Que tan pronto me pueden atender?",
            answer:
              "Las citas de evaluacion de TDAH suelen estar disponibles en pocos dias. Programe en linea o comuniquese con nuestra oficina para encontrar el proximo horario disponible.",
          },
          {
            question: "La prueba T.O.V.A. es un diagnostico por si sola?",
            answer:
              "No. T.O.V.A. es una herramienta clinica. Su clinico combina los resultados con su historial y sintomas como parte de una evaluacion integral antes de hacer cualquier diagnostico o recomendacion.",
          },
          {
            question:
              "Puedo recibir medicacion para el TDAH en Firefly despues de mi evaluacion?",
            answer:
              "Cuando es apropiado, si. Nuestra PMHNP-BC certificada por la junta ofrece evaluacion psiquiatrica y manejo continuo de medicamentos, coordinados con terapia y estrategias conductuales cuando es util.",
          },
          {
            question: "Evaluan a adolescentes?",
            answer:
              "Si. Evaluamos a adolescentes y adultos, y el cuidado esta disponible en ingles y espanol.",
          },
        ],
      },
      closing: {
        title: "Obtenga Respuestas Sobre Su Atencion y Enfoque",
        paragraph:
          "Si el enfoque, la organizacion o el seguimiento le han estado afectando, una evaluacion clara es un primer paso practico—y tendra un equipo listo para ayudarle con lo que siga.",
        cta: "Programar una evaluacion de TDAH",
        scheduleLabel: "Reservar en linea ahora",
      },
    },
    medicationManagement: {
      slug: "medication-management",
      meta: {
        title: "Manejo de Medicacion Psiquiatrica en Hinsdale | Firefly Wellness",
        description:
          "Medicacion psiquiatrica ambulatoria en Hinsdale con nuestra PMHNP-BC certificada por la junta—para adolescentes hasta adultos, coordinada con terapia y pruebas, incluyendo Tempus y BrainCheck cuando forman parte de su cuidado.",
      },
      hero: {
        title: "Manejo de Medicacion Psiquiatrica en Hinsdale",
        subtitle:
          "Visitas de prescripcion y apoyo continuo con medicamentos con nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP-BC)—coordinado con terapia y pruebas de TDAH en Hinsdale, IL, sirviendo Oak Brook, Clarendon Hills, Western Springs, Westmont y suburbios occidentales cercanos.",
        availabilityNote:
          "Las citas nuevas de medicacion suelen estar disponibles con tiempos de espera cortos.",
        cta: "Programar una cita",
      },
      who: {
        title: "A Quien Puede Ayudar la Medicacion Psiquiatrica",
        intro:
          "La medicina no es adecuada para todos, y nunca reemplaza la conexion ni el desarrollo de habilidades. Para algunas personas, crea suficiente alivio para dormir, concentrarse y beneficiarse mas plenamente de la terapia.",
        items: [
          "Adolescentes y adultos que atraviesan depresion, ansiedad, dificultades de atencion o problemas relacionados con el sueno",
          "Personas que aun se sienten muy decaidas, ansiosas o tensas aunque la terapia vaya bien",
          "Personas cuyos sintomas dificultan funcionar en la escuela, el trabajo o la vida diaria",
          "Clientes que ya toman medicacion psiquiatrica y necesitan un apoyo continuo y reflexivo con la prescripcion",
        ],
      },
      what: {
        title: "Como Abordamos la Medicacion",
        paragraphs: [
          "Nuestra Psychiatric-Mental Health Nurse Practitioner certificada por la junta (PMHNP-BC) del equipo ofrece visitas de prescripcion y apoyo continuo con medicamentos como parte del modelo coordinado de salud conductual de Firefly.",
          "Su clinico considera sus sintomas, historial, preferencias y metas—y puede colaborar con su terapeuta para que el cuidado se mantenga alineado.",
          "Las pruebas geneticas de Tempus pueden aportar informacion adicional sobre como su cuerpo podria procesar ciertos medicamentos. Los resultados se revisan con usted y se usan junto con—no en lugar de—su panorama clinico.",
        ],
      },
      expect: {
        title: "Que Puede Esperar",
        intro:
          "El cuidado con medicamentos en Firefly comienza por comprender sus necesidades y avanza a un ritmo reflexivo—sin prisas. Un recorrido tipico se ve asi:",
        steps: [
          "Compartir sus inquietudes, historial y metas en una visita enfocada en evaluacion",
          "Hablar sobre si la medicacion es una buena opcion y revisar alternativas, beneficios y consideraciones",
          "Iniciar o ajustar un plan de medicacion cuando usted y su clinico acuerden que tiene sentido",
          "Asistir a visitas de seguimiento para monitorear la respuesta, los efectos secundarios y los proximos pasos",
          "Coordinar con terapia o pruebas de TDAH y atencion dentro de Firefly cuando eso apoye su cuidado",
        ],
      },
      related: {
        title: "Cuidado Relacionado en Firefly",
        paragraph:
          "La medicacion suele funcionar mejor junto con la terapia. Las pruebas de TDAH y atencion tambien pueden informar el panorama clinico mas amplio cuando el enfoque y el control de impulsos forman parte de lo que esta atravesando.",
        links: [
          { label: "Terapia", href: "/therapy" },
          {
            label: "Pruebas de TDAH y Atencion",
            href: "/adhd-testing",
          },
        ],
      },
      closing: {
        title: "Explore Si el Apoyo con Medicamentos Es Adecuado para Usted",
        paragraph:
          "Si tiene curiosidad sobre la medicacion como una parte de su cuidado, podemos ayudarle a sopesar opciones con cuidado y mantenerse apoyado mientras avanza.",
        scheduleLabel: "Reservar en linea ahora",
      },
    },
  },
};

export function getServicePagesContent(locale: Locale): ServicePagesContent {
  return servicePagesContent[locale] ?? servicePagesContent.en;
}
