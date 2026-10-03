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
  };
  who: {
    title: string;
    intro: string;
    items: string[];
  };
  what: {
    title: string;
    paragraphs: string[];
  };
  expect: {
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
        title: "Coordinated Care Under One Practice",
        paragraphs: [
          "At Firefly Wellness, we take a collaborative approach to care, bringing the right expertise together around you. Instead of piecing together providers across different offices, you can receive comprehensive support in one place, with clinicians working together to keep your care aligned with your needs, goals, and overall well-being.",
          "We support adolescents and adults, with care available in both English and Spanish. Whether you’re taking your first step toward support or exploring what comes next, we meet you where you are and help you move forward with thoughtful, personalized care.",
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
        title: "ADHD Evaluation & Attention Testing in Hinsdale | Firefly Wellness",
        description:
          "T.O.V.A. attention and impulse-control testing in Hinsdale as part of a broader clinical evaluation—not a standalone diagnosis—for adolescents through adults, coordinated with therapy and psychiatric medication when helpful.",
      },
      hero: {
        title: "ADHD Evaluation & Attention Testing in Hinsdale",
        subtitle:
          "Get a clearer picture of attention, focus, and impulse control with objective T.O.V.A. testing, combined with a comprehensive clinical evaluation. Your clinician uses the results alongside your history and symptoms to help guide next steps in care.",
        serviceArea:
          "Serving Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont, and surrounding western suburbs.",
        availabilityNote:
          "Testing appointments are often available with short wait times.",
        cta: "Schedule an Appointment",
      },
      who: {
        title: "When ADHD or Attention Testing May Be Helpful",
        intro:
          "Attention concerns show up differently across ages and settings. Testing can be useful when focus, impulsivity, or follow-through are getting in the way of school, work, or daily life.",
        items: [
          "Adolescents and adults wondering whether ADHD may be affecting daily life",
          "Students experiencing difficulties with concentration, organization, or school performance",
          "Adults noticing problems with focus, follow-through, or organization at work",
          "Individuals who have questions about attention or impulse control",
          "People seeking additional information to help guide conversations about treatment and next steps",
        ],
      },
      what: {
        title: "Understanding T.O.V.A. Testing",
        paragraphs: [
          "T.O.V.A. (Test of Variables of Attention) is a simple, computer-based test that uses a special device to look at attention and impulse control.",
          "It is one of the tools we may use when evaluating concerns like ADHD and other attention-related issues. Results are never the whole story on their own—your clinician places them in context with your history, symptoms, and goals.",
          "At Firefly Wellness, testing sits within a coordinated behavioral health model. That means findings can inform therapy recommendations, referrals for psychiatric medication evaluation, or further clinical follow-up when appropriate.",
        ],
      },
      expect: {
        title: "What to Expect During and After Testing",
        intro:
          "Testing is one part of understanding attention and ADHD-related concerns. The process at Firefly is straightforward and clinician-guided, and a typical path looks like this:",
        steps: [
          "Discuss your concerns with a Firefly clinician and decide whether testing is a good next step",
          "Complete the ADHD and Attention Evaluation during a structured testing appointment",
          "Review your results with your clinician in plain language, in the context of your overall history and symptoms",
          "Decide on next steps together, which may include behavioral or therapy support, additional evaluation, school or workplace strategies, or a psychiatric medication evaluation",
          "Continue coordinated care within the practice when helpful",
        ],
      },
      ongoingCare: {
        title: "ADHD Evaluation and Ongoing Care",
        paragraphs: [
          "Understanding attention concerns is only the beginning. When appropriate, Firefly Wellness provides ongoing psychiatric care and medication management tailored to your individual needs and treatment goals.",
          "For individuals diagnosed with ADHD, medication may help improve attention, reduce impulsivity, and support organization and follow-through. Your clinician can discuss whether medication is appropriate for you, explain the available treatment options, and monitor your response over time.",
          "Medication is just one part of ADHD care. Depending on your needs, treatment may also include therapy, behavioral strategies, lifestyle recommendations, or other supports.",
        ],
      },
      closing: {
        title: "See If Attention Testing Is Right for You",
        paragraph:
          "If focus or impulse control has been hard to understand on your own, structured testing can add useful information to the conversation with your clinician.",
        scheduleLabel: "Book online now",
      },
    },
    medicationManagement: {
      slug: "medication-management",
      meta: {
        title: "Psychiatric Medication in Hinsdale | Firefly Wellness",
        description:
          "Outpatient psychiatric medication in Hinsdale with our on-staff board-certified PMHNP-BC—for adolescents through adults, coordinated with therapy and testing, including Tempus and BrainCheck when part of your care.",
      },
      hero: {
        title: "Psychiatric Medication in Hinsdale",
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
          "En Firefly Wellness, la medicacion psiquiatrica, las pruebas de TDAH y atencion, y la terapia trabajan juntas cuando eso apoya un mejor cuidado. No tiene que reunir proveedores en distintos consultorios—nuestros clinicos colaboran para que las recomendaciones se mantengan alineadas con sus metas.",
          "Atendemos a adolescentes hasta adultos, y el cuidado esta disponible en ingles y espanol. Ya sea que comience con un servicio o combine apoyos con el tiempo, le ayudamos a dar pasos reflexivos.",
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
        title: "Evaluacion de TDAH y Pruebas de Atencion en Hinsdale | Firefly Wellness",
        description:
          "Pruebas T.O.V.A. de atencion y control de impulsos en Hinsdale como parte de una evaluacion clinica mas amplia—no un diagnostico por si solas—para adolescentes hasta adultos, coordinadas con terapia y medicacion psiquiatrica cuando es util.",
      },
      hero: {
        title: "Evaluacion de TDAH y Pruebas de Atencion en Hinsdale",
        subtitle:
          "Obtenga una vision mas clara de la atencion, el enfoque y el control de impulsos con pruebas objetivas T.O.V.A., combinadas con una evaluacion clinica integral. Su clinico usa los resultados junto con su historial y sintomas para ayudar a guiar los proximos pasos en su cuidado.",
        serviceArea:
          "Atendemos Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont y los suburbios del oeste cercanos.",
        availabilityNote:
          "Las citas de pruebas suelen estar disponibles con tiempos de espera cortos.",
        cta: "Programar una cita",
      },
      who: {
        title: "Cuando Puede Ser Util una Evaluacion de TDAH o Pruebas de Atencion",
        intro:
          "Las inquietudes de atencion se manifiestan de formas distintas segun la edad y el entorno. Las pruebas pueden ser utiles cuando la concentracion, la impulsividad o el seguimiento dificultan la escuela, el trabajo o la vida diaria.",
        items: [
          "Adolescentes y adultos que se preguntan si el TDAH puede estar afectando su vida diaria",
          "Estudiantes con dificultades de concentracion, organizacion o rendimiento escolar",
          "Adultos que notan problemas de enfoque, seguimiento u organizacion en el trabajo",
          "Personas con preguntas sobre la atencion o el control de impulsos",
          "Personas que buscan informacion adicional para orientar conversaciones sobre el tratamiento y los proximos pasos",
        ],
      },
      what: {
        title: "Comprendiendo la Prueba T.O.V.A.",
        paragraphs: [
          "T.O.V.A. (Test of Variables of Attention) es una prueba sencilla por computadora que usa un dispositivo especial para observar la atencion y el control de impulsos.",
          "Es una de las herramientas que podemos usar al evaluar inquietudes como TDAH y otros asuntos relacionados con la atencion. Los resultados nunca son toda la historia por si solos—su clinico los coloca en contexto con su historial, sintomas y metas.",
          "En Firefly Wellness, las pruebas forman parte de un modelo coordinado de salud conductual. Eso significa que los hallazgos pueden orientar recomendaciones de terapia, evaluaciones de medicacion psiquiatrica u otro seguimiento clinico cuando corresponde.",
        ],
      },
      expect: {
        title: "Que Esperar Durante y Despues de las Pruebas",
        intro:
          "Las pruebas son una parte de la comprension de la atencion y las inquietudes relacionadas con el TDAH. El proceso en Firefly es sencillo y guiado por un clinico, y un recorrido tipico se ve asi:",
        steps: [
          "Hablar de sus inquietudes con un clinico de Firefly y decidir si las pruebas son un buen siguiente paso",
          "Completar la Evaluacion de TDAH y Atencion durante una cita de pruebas estructurada",
          "Revisar sus resultados con su clinico en un lenguaje claro, en el contexto de su historial y sintomas generales",
          "Decidir juntos los proximos pasos, que pueden incluir apoyo conductual o terapeutico, una evaluacion adicional, estrategias para la escuela o el trabajo, o una evaluacion de medicacion psiquiatrica",
          "Continuar el cuidado coordinado dentro de la practica cuando sea util",
        ],
      },
      ongoingCare: {
        title: "Evaluacion de TDAH y Cuidado Continuo",
        paragraphs: [
          "Comprender las inquietudes de atencion es solo el comienzo. Cuando es apropiado, Firefly Wellness ofrece atencion psiquiatrica continua y manejo de medicamentos adaptados a sus necesidades individuales y metas de tratamiento.",
          "Para las personas diagnosticadas con TDAH, la medicacion puede ayudar a mejorar la atencion, reducir la impulsividad y apoyar la organizacion y el seguimiento. Su clinico puede hablar sobre si la medicacion es adecuada para usted, explicar las opciones de tratamiento disponibles y monitorear su respuesta con el tiempo.",
          "La medicacion es solo una parte del cuidado del TDAH. Segun sus necesidades, el tratamiento tambien puede incluir terapia, estrategias conductuales, recomendaciones de estilo de vida u otros apoyos.",
        ],
      },
      closing: {
        title: "Vea Si las Pruebas de Atencion Son Adecuadas para Usted",
        paragraph:
          "Si el enfoque o el control de impulsos ha sido dificil de entender por su cuenta, una prueba estructurada puede aportar informacion util a la conversacion con su clinico.",
        scheduleLabel: "Reservar en linea ahora",
      },
    },
    medicationManagement: {
      slug: "medication-management",
      meta: {
        title: "Medicacion Psiquiatrica en Hinsdale | Firefly Wellness",
        description:
          "Medicacion psiquiatrica ambulatoria en Hinsdale con nuestra PMHNP-BC certificada por la junta—para adolescentes hasta adultos, coordinada con terapia y pruebas, incluyendo Tempus y BrainCheck cuando forman parte de su cuidado.",
      },
      hero: {
        title: "Medicacion Psiquiatrica en Hinsdale",
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
