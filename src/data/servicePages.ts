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
    cta: string;
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
  related: {
    title: string;
    paragraph: string;
    links: ServiceRelatedLink[];
  };
  closing: {
    title: string;
    paragraph: string;
    cta: string;
    cliniciansLabel: string;
    cliniciansHref: string;
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
  offerings: {
    title: string;
    blurb: string;
    href: string;
    learnMore: string;
  }[];
  braincheck: {
    title: string;
    paragraph: string;
  };
  concerns: {
    title: string;
    intro: string;
    items: string[];
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
  "LGBTQ",
  "Life Transitional Difficulties",
  "Relationship Issues",
  "Attention Problems",
  "School Issues",
  "Phobias and Fears",
  "Family, Couples, Marriage",
  "Premarital Counseling",
  "Women's Issues",
  "Emotional Regulation",
  "Obsessive Behaviors",
  "Workplace Issues",
  "Sleep Problems",
];

const concernsItemsEs = [
  "Depresion",
  "Ansiedad y estres",
  "Trauma",
  "TEPT",
  "Intimidad sexual",
  "LGBTQ",
  "Dificultades en transiciones de vida",
  "Problemas de relacion",
  "Problemas de atencion",
  "Problemas escolares",
  "Fobias y miedos",
  "Familia, parejas, matrimonio",
  "Consejeria prematrimonial",
  "Temas de la mujer",
  "Regulacion emocional",
  "Conductas obsesivas",
  "Problemas laborales",
  "Problemas de sueno",
];

const servicePagesContent: Record<Locale, ServicePagesContent> = {
  en: {
    hub: {
      meta: {
        title: "Services | Firefly Wellness",
        description:
          "Therapy, ADHD and attention testing, and psychiatric medication in Hinsdale, IL—coordinated care under one practice.",
      },
      hero: {
        title: "Our Services",
        subtitle:
          "Firefly Wellness brings therapy, ADHD and attention testing, and psychiatric medication together so you can get thoughtful care in one coordinated practice.",
        cta: "Schedule an Appointment",
      },
      offerings: [
        {
          title: "Therapy",
          blurb:
            "Individual counseling for adolescents, young adults, and adults—focused on insight, coping skills, and lasting change.",
          href: "/therapy",
          learnMore: "Learn more about therapy",
        },
        {
          title: "ADHD & Attention Testing",
          blurb:
            "Computer-based T.O.V.A. testing to help evaluate attention and impulse control as part of a broader clinical picture.",
          href: "/adhd-testing",
          learnMore: "Learn more about ADHD testing",
        },
        {
          title: "Psychiatric Medication",
          blurb:
            "Prescribing visits and ongoing medication support with our on-staff PMHNP, including tools that inform thoughtful medication decisions.",
          href: "/medication-management",
          learnMore: "Learn more about psychiatric medication",
        },
      ],
      braincheck: {
        title: "Memory and cognitive check-ins",
        paragraph:
          "We also offer BrainCheck assessments to track memory and cognitive function over time. Your clinician reviews results with you and helps decide next steps—often alongside therapy or medication care when useful.",
      },
      concerns: {
        title: "Concerns we treat",
        intro:
          "We offer a wide array of services and modalities in English and Spanish to fit your needs.",
        items: concernsItemsEn,
      },
      closing: {
        title: "Ready to take the next step?",
        paragraph:
          "Whether you are seeking therapy, attention testing, or medication support, we are here to help you move toward steadier ground.",
        cta: "Schedule an Appointment",
      },
    },
    therapy: {
      slug: "therapy",
      meta: {
        title: "Therapy | Firefly Wellness",
        description:
          "Evidence-based counseling in Hinsdale for anxiety, depression, trauma, relationships, and life transitions—adolescents through adults.",
      },
      hero: {
        title: "Therapy",
        subtitle:
          "Thoughtful, evidence-based counseling for adolescents, young adults, and adults in Hinsdale—so you can reconnect with your strengths and move toward a steadier life.",
        cta: "Schedule an Appointment",
      },
      who: {
        title: "Who therapy can help",
        intro:
          "Our clinicians work with a range of ages and concerns. Many clients come to us during periods of stress, change, or when familiar patterns stop working.",
        items: [
          "Adolescents, college students, young adults, and adults",
          "Anxiety, stress, and emotional overwhelm",
          "Depression and low mood",
          "Trauma, PTSD, and lasting effects of difficult experiences",
          "Relationship, family, and intimacy concerns",
          "Life transitions, school or workplace challenges, and ADHD-related support",
        ],
      },
      what: {
        title: "Why therapy",
        paragraphs: [
          "Life can feel overwhelming. Trauma, chronic stress, relationship strain, or major transitions can leave you anxious, low, or stuck in unhelpful patterns.",
          "You are not alone. According to the National Alliance on Mental Illness (NAMI), 1 in 5 adults experience mental health challenges each year. Struggling does not mean you are failing.",
          "Therapy can help. At Firefly Wellness, we walk alongside you as you reconnect with your strengths and move toward a steadier, more meaningful life.",
          "Our clinicians draw on approaches such as Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), strengths-based work, and expressive arts therapies when they fit your goals and preferences.",
        ],
      },
      expect: {
        title: "What to expect",
        intro:
          "Therapy provides a safe, nonjudgmental space for reflection, growth, and change. Sessions typically focus on:",
        steps: [
          "Understanding your thoughts, emotions, and patterns",
          "Strengthening coping skills you can use between sessions",
          "Creating sustainable emotional and behavioral shifts",
          "Clarifying goals with your therapist and tracking meaningful progress",
          "Collaborating with other Firefly providers when medication or testing may help",
        ],
      },
      related: {
        title: "Related care at Firefly",
        paragraph:
          "Some clients benefit from coordinated supports alongside therapy. When it is a good fit, we can connect you with attention testing or medication management within the same practice.",
        links: [
          { label: "ADHD & attention testing", href: "/adhd-testing" },
          {
            label: "Medication management",
            href: "/medication-management",
          },
        ],
      },
      closing: {
        title: "Start with a conversation",
        paragraph:
          "Feeling nervous about beginning therapy is completely normal. Many clients describe starting as one of the most valuable steps they have taken for themselves.",
        cta: "Schedule an Appointment",
        cliniciansLabel: "Meet our clinicians",
        cliniciansHref: "/#clinicians",
      },
    },
    adhdTesting: {
      slug: "adhd-testing",
      meta: {
        title: "ADHD Testing | Firefly Wellness",
        description:
          "T.O.V.A. attention and impulse-control testing in Hinsdale as part of a thoughtful ADHD and attention evaluation.",
      },
      hero: {
        title: "ADHD & Attention Testing",
        subtitle:
          "Objective attention testing with T.O.V.A., reviewed by your clinician as part of a larger picture—so you can better understand focus, impulse control, and next steps.",
        cta: "Schedule an Appointment",
      },
      who: {
        title: "Who may benefit",
        intro:
          "Attention concerns show up differently across ages and settings. Testing can be useful when focus, impulsivity, or follow-through are getting in the way of school, work, or daily life.",
        items: [
          "Adolescents and adults wondering about ADHD or attention difficulties",
          "Students struggling with concentration, organization, or school performance",
          "Professionals noticing focus problems at work or under stress",
          "Clients already in therapy who want clearer data about attention and impulse control",
          "People seeking a structured tool to inform next steps with their clinician",
        ],
      },
      what: {
        title: "What T.O.V.A. testing is",
        paragraphs: [
          "T.O.V.A. (Test of Variables of Attention) is a simple, computer-based test that uses a special device to look at attention and impulse control.",
          "It is one of the tools we may use when evaluating concerns like ADHD and other attention-related issues. Results are never the whole story on their own—your clinician places them in context with your history, symptoms, and goals.",
          "At Firefly Wellness, testing sits within a coordinated behavioral health model. That means findings can inform therapy recommendations, referrals for medication evaluation, or further clinical follow-up when appropriate.",
        ],
      },
      expect: {
        title: "What to expect",
        steps: [
          "Discuss concerns with a Firefly clinician and determine whether testing is a good next step",
          "Complete the T.O.V.A. assessment in a structured testing appointment",
          "Review results with your clinician in plain language",
          "Talk through recommendations—therapy support, medication evaluation, school/work strategies, or additional assessment",
          "Continue coordinated care within the practice when helpful",
        ],
      },
      related: {
        title: "Related care at Firefly",
        paragraph:
          "Testing often pairs well with ongoing therapy for skills and support, and with medication management when a prescribing clinician is part of the plan.",
        links: [
          { label: "Therapy", href: "/therapy" },
          {
            label: "Medication management",
            href: "/medication-management",
          },
        ],
      },
      closing: {
        title: "Get clearer answers about attention",
        paragraph:
          "If focus or impulse control has been hard to understand on your own, structured testing can add useful information to the conversation with your clinician.",
        cta: "Schedule an Appointment",
        cliniciansLabel: "Meet our clinicians",
        cliniciansHref: "/#clinicians",
      },
    },
    medicationManagement: {
      slug: "medication-management",
      meta: {
        title: "Psychiatric Medication | Firefly Wellness",
        description:
          "Psychiatric medication in Hinsdale with our on-staff PMHNP, including tools like Tempus and BrainCheck when clinically useful.",
      },
      hero: {
        title: "Psychiatric Medication",
        subtitle:
          "Prescribing visits and ongoing medication support with a clinician on our team—coordinated with therapy and testing when that leads to better care.",
        cta: "Schedule an Appointment",
      },
      who: {
        title: "Who medication management may help",
        intro:
          "Medicine is not right for everyone, and it is never a replacement for connection and skill-building. For some people, it creates enough relief to sleep, focus, and benefit more fully from therapy.",
        items: [
          "Clients who still feel very low, anxious, or on edge even when therapy is going well",
          "People considering medication for mood, anxiety, attention, or sleep-related concerns",
          "Clients who want careful follow-up after starting or changing a medication",
          "Individuals who may benefit from additional decision-support tools alongside clinical judgment",
        ],
      },
      what: {
        title: "How we approach medication",
        paragraphs: [
          "We offer prescribing visits and medication management with a clinician on our team as part of Firefly’s more comprehensive behavioral health model.",
          "Your clinician considers your symptoms, history, preferences, and goals—and may collaborate with your therapist so treatment stays aligned.",
          "Tempus genetic testing can provide additional information about how your body may process certain medications. Results are reviewed with you and used alongside—not instead of—your clinical picture.",
          "When useful, BrainCheck assessments help monitor memory and cognitive function over time, with an initial visit and periodic check-ins so you and your clinician can track changes together.",
        ],
      },
      expect: {
        title: "What to expect",
        steps: [
          "Share your concerns, history, and goals in an evaluation-focused visit",
          "Discuss whether medication is a good fit and review options, benefits, and considerations",
          "Begin or adjust a medication plan when you and your clinician agree it makes sense",
          "Attend follow-up visits to monitor response, side effects, and next steps",
          "Coordinate with therapy or attention testing within Firefly when that supports your care",
        ],
      },
      related: {
        title: "Related care at Firefly",
        paragraph:
          "Medication often works best alongside therapy. Attention testing can also inform the broader clinical picture when focus and impulse control are part of what you are navigating.",
        links: [
          { label: "Therapy", href: "/therapy" },
          { label: "ADHD & attention testing", href: "/adhd-testing" },
        ],
      },
      closing: {
        title: "Explore whether medication support is right for you",
        paragraph:
          "If you are curious about medication as one part of your care, we can help you weigh options carefully and stay supported over time.",
        cta: "Schedule an Appointment",
        cliniciansLabel: "Meet our clinicians",
        cliniciansHref: "/#clinicians",
      },
    },
  },
  es: {
    hub: {
      meta: {
        title: "Servicios | Firefly Wellness",
        description:
          "Terapia, pruebas de TDAH y atencion, y medicacion psiquiatrica en Hinsdale, IL—cuidado coordinado en una sola practica.",
      },
      hero: {
        title: "Nuestros Servicios",
        subtitle:
          "Firefly Wellness reune terapia, pruebas de TDAH y atencion, y medicacion psiquiatrica para que reciba cuidado reflexivo en una practica coordinada.",
        cta: "Programar una cita",
      },
      offerings: [
        {
          title: "Terapia",
          blurb:
            "Consejeria individual para adolescentes, adultos jovenes y adultos—con enfoque en comprension, habilidades de afrontamiento y cambio duradero.",
          href: "/therapy",
          learnMore: "Conozca mas sobre terapia",
        },
        {
          title: "Pruebas de TDAH y atencion",
          blurb:
            "Pruebas T.O.V.A. por computadora para ayudar a evaluar la atencion y el control de impulsos como parte de un panorama clinico mas amplio.",
          href: "/adhd-testing",
          learnMore: "Conozca mas sobre pruebas de TDAH",
        },
        {
          title: "Medicacion psiquiatrica",
          blurb:
            "Visitas de prescripcion y apoyo continuo con nuestra PMHNP del equipo, incluyendo herramientas que orientan decisiones de medicacion reflexivas.",
          href: "/medication-management",
          learnMore: "Conozca mas sobre medicacion psiquiatrica",
        },
      ],
      braincheck: {
        title: "Revisiones de memoria y cognicion",
        paragraph:
          "Tambien ofrecemos evaluaciones BrainCheck para dar seguimiento a la memoria y la funcion cognitiva con el tiempo. Su clinico revisa los resultados con usted y ayuda a decidir los proximos pasos—a menudo junto con terapia o manejo de medicamentos cuando es util.",
      },
      concerns: {
        title: "Temas que tratamos",
        intro:
          "Ofrecemos una amplia variedad de servicios y modalidades en ingles y espanol para adaptarse a sus necesidades.",
        items: concernsItemsEs,
      },
      closing: {
        title: "Listo para dar el siguiente paso?",
        paragraph:
          "Ya sea que busque terapia, pruebas de atencion o apoyo con medicamentos, estamos aqui para ayudarle a avanzar hacia un terreno mas estable.",
        cta: "Programar una cita",
      },
    },
    therapy: {
      slug: "therapy",
      meta: {
        title: "Terapia | Firefly Wellness",
        description:
          "Consejeria basada en evidencia en Hinsdale para ansiedad, depresion, trauma, relaciones y transiciones de vida—desde adolescentes hasta adultos.",
      },
      hero: {
        title: "Terapia",
        subtitle:
          "Consejeria reflexiva y basada en evidencia para adolescentes, adultos jovenes y adultos en Hinsdale—para reconectarse con sus fortalezas y avanzar hacia una vida mas estable.",
        cta: "Programar una cita",
      },
      who: {
        title: "A quien puede ayudar la terapia",
        intro:
          "Nuestros clinicos trabajan con diversas edades e inquietudes. Muchos clientes llegan durante periodos de estres, cambio o cuando los patrones habituales dejan de funcionar.",
        items: [
          "Adolescentes, estudiantes universitarios, adultos jovenes y adultos",
          "Ansiedad, estres y abrumo emocional",
          "Depresion y animo bajo",
          "Trauma, TEPT y efectos duraderos de experiencias dificiles",
          "Inquietudes de relacion, familia e intimidad",
          "Transiciones de vida, desafios escolares o laborales, y apoyo relacionado con TDAH",
        ],
      },
      what: {
        title: "Por que terapia",
        paragraphs: [
          "La vida puede sentirse abrumadora. El trauma, el estres cronico, las dificultades en las relaciones o las transiciones importantes pueden dejarle con ansiedad, animo bajo o atrapado en patrones que no ayudan.",
          "No esta solo. Segun la National Alliance on Mental Illness (NAMI), 1 de cada 5 adultos experimenta desafios de salud mental cada ano. Tener dificultades no significa que este fallando.",
          "La terapia puede ayudar. En Firefly Wellness, caminamos a su lado mientras se reconecta con sus fortalezas y avanza hacia una vida mas estable y significativa.",
          "Nuestros clinicos utilizan enfoques como la Terapia Cognitivo-Conductual (CBT), la Terapia de Aceptacion y Compromiso (ACT), trabajo basado en fortalezas y terapias de arte expresivo cuando se ajustan a sus metas y preferencias.",
        ],
      },
      expect: {
        title: "Que puede esperar",
        intro:
          "La terapia ofrece un espacio seguro y sin juicio para la reflexion, el crecimiento y el cambio. Las sesiones suelen enfocarse en:",
        steps: [
          "Comprender sus pensamientos, emociones y patrones",
          "Fortalecer habilidades de afrontamiento para usar entre sesiones",
          "Crear cambios emocionales y conductuales sostenibles",
          "Aclarar metas con su terapeuta y dar seguimiento a un progreso significativo",
          "Colaborar con otros proveedores de Firefly cuando la medicacion o las pruebas puedan ayudar",
        ],
      },
      related: {
        title: "Cuidado relacionado en Firefly",
        paragraph:
          "Algunos clientes se benefician de apoyos coordinados junto con la terapia. Cuando es una buena opcion, podemos conectarle con pruebas de atencion o manejo de medicamentos dentro de la misma practica.",
        links: [
          {
            label: "Pruebas de TDAH y atencion",
            href: "/adhd-testing",
          },
          {
            label: "Manejo de medicamentos",
            href: "/medication-management",
          },
        ],
      },
      closing: {
        title: "Comience con una conversacion",
        paragraph:
          "Sentirse nervioso al comenzar terapia es completamente normal. Muchos clientes describen ese primer paso como uno de los mas valiosos que han tomado por si mismos.",
        cta: "Programar una cita",
        cliniciansLabel: "Conozca a nuestros clinicos",
        cliniciansHref: "/#clinicians",
      },
    },
    adhdTesting: {
      slug: "adhd-testing",
      meta: {
        title: "Pruebas de TDAH | Firefly Wellness",
        description:
          "Pruebas T.O.V.A. de atencion y control de impulsos en Hinsdale como parte de una evaluacion reflexiva de TDAH y atencion.",
      },
      hero: {
        title: "Pruebas de TDAH y atencion",
        subtitle:
          "Pruebas objetivas de atencion con T.O.V.A., revisadas por su clinico como parte de un panorama mas amplio—para comprender mejor el enfoque, el control de impulsos y los proximos pasos.",
        cta: "Programar una cita",
      },
      who: {
        title: "Quien puede beneficiarse",
        intro:
          "Las inquietudes de atencion se manifiestan de formas distintas segun la edad y el entorno. Las pruebas pueden ser utiles cuando la concentracion, la impulsividad o el seguimiento dificultan la escuela, el trabajo o la vida diaria.",
        items: [
          "Adolescentes y adultos con dudas sobre TDAH o dificultades de atencion",
          "Estudiantes con problemas de concentracion, organizacion o rendimiento escolar",
          "Profesionales que notan problemas de enfoque en el trabajo o bajo estres",
          "Clientes ya en terapia que desean datos mas claros sobre atencion y control de impulsos",
          "Personas que buscan una herramienta estructurada para orientar proximos pasos con su clinico",
        ],
      },
      what: {
        title: "Que es la prueba T.O.V.A.",
        paragraphs: [
          "T.O.V.A. (Test of Variables of Attention) es una prueba sencilla por computadora que usa un dispositivo especial para observar la atencion y el control de impulsos.",
          "Es una de las herramientas que podemos usar al evaluar inquietudes como TDAH y otros asuntos relacionados con la atencion. Los resultados nunca son toda la historia por si solos—su clinico los coloca en contexto con su historial, sintomas y metas.",
          "En Firefly Wellness, las pruebas forman parte de un modelo coordinado de salud conductual. Eso significa que los hallazgos pueden orientar recomendaciones de terapia, evaluaciones de medicacion u otro seguimiento clinico cuando corresponde.",
        ],
      },
      expect: {
        title: "Que puede esperar",
        steps: [
          "Hablar de sus inquietudes con un clinico de Firefly y decidir si las pruebas son un buen siguiente paso",
          "Completar la evaluacion T.O.V.A. en una cita estructurada",
          "Revisar los resultados con su clinico en un lenguaje claro",
          "Conversar sobre recomendaciones—apoyo en terapia, evaluacion de medicamentos, estrategias escolares/laborales u otra evaluacion",
          "Continuar el cuidado coordinado dentro de la practica cuando sea util",
        ],
      },
      related: {
        title: "Cuidado relacionado en Firefly",
        paragraph:
          "Las pruebas suelen combinar bien con terapia continua para habilidades y apoyo, y con manejo de medicamentos cuando un clinico que prescribe forma parte del plan.",
        links: [
          { label: "Terapia", href: "/therapy" },
          {
            label: "Manejo de medicamentos",
            href: "/medication-management",
          },
        ],
      },
      closing: {
        title: "Obtenga respuestas mas claras sobre la atencion",
        paragraph:
          "Si el enfoque o el control de impulsos ha sido dificil de entender por su cuenta, una prueba estructurada puede aportar informacion util a la conversacion con su clinico.",
        cta: "Programar una cita",
        cliniciansLabel: "Conozca a nuestros clinicos",
        cliniciansHref: "/#clinicians",
      },
    },
    medicationManagement: {
      slug: "medication-management",
      meta: {
        title: "Manejo de Medicamentos | Firefly Wellness",
        description:
          "Manejo de medicamentos psiquiatricos en Hinsdale con un clinico autorizado para recetar, incluyendo herramientas como Tempus y BrainCheck cuando son clinicamente utiles.",
      },
      hero: {
        title: "Manejo de medicamentos",
        subtitle:
          "Visitas de prescripcion y apoyo continuo con un clinico de nuestro equipo—coordinado con terapia y pruebas cuando eso lleva a un mejor cuidado.",
        cta: "Programar una cita",
      },
      who: {
        title: "A quien puede ayudar el manejo de medicamentos",
        intro:
          "La medicina no es adecuada para todos, y nunca reemplaza la conexion ni el desarrollo de habilidades. Para algunas personas, crea suficiente alivio para dormir, concentrarse y beneficiarse mas plenamente de la terapia.",
        items: [
          "Clientes que aun se sienten muy decaidos, ansiosos o tensos aunque la terapia vaya bien",
          "Personas que consideran medicacion para el animo, la ansiedad, la atencion o el sueno",
          "Clientes que desean un seguimiento cuidadoso al iniciar o cambiar un medicamento",
          "Personas que pueden beneficiarse de herramientas adicionales de apoyo a la decision junto con el criterio clinico",
        ],
      },
      what: {
        title: "Como abordamos la medicacion",
        paragraphs: [
          "Ofrecemos visitas de prescripcion y manejo de medicamentos con un clinico de nuestro equipo como parte del modelo mas integral de salud conductual de Firefly.",
          "Su clinico considera sus sintomas, historial, preferencias y metas—y puede colaborar con su terapeuta para que el tratamiento se mantenga alineado.",
          "Las pruebas geneticas de Tempus pueden aportar informacion adicional sobre como su cuerpo podria procesar ciertos medicamentos. Los resultados se revisan con usted y se usan junto con—no en lugar de—su panorama clinico.",
          "Cuando es util, las evaluaciones BrainCheck ayudan a monitorear la memoria y la funcion cognitiva con el tiempo, con una visita inicial y revisiones periodicas para que usted y su clinico puedan seguir los cambios juntos.",
        ],
      },
      expect: {
        title: "Que puede esperar",
        steps: [
          "Compartir sus inquietudes, historial y metas en una visita enfocada en evaluacion",
          "Hablar sobre si la medicacion es una buena opcion y revisar alternativas, beneficios y consideraciones",
          "Iniciar o ajustar un plan de medicacion cuando usted y su clinico acuerden que tiene sentido",
          "Asistir a visitas de seguimiento para monitorear la respuesta, los efectos secundarios y los proximos pasos",
          "Coordinar con terapia o pruebas de atencion dentro de Firefly cuando eso apoye su cuidado",
        ],
      },
      related: {
        title: "Cuidado relacionado en Firefly",
        paragraph:
          "La medicacion suele funcionar mejor junto con la terapia. Las pruebas de atencion tambien pueden informar el panorama clinico mas amplio cuando el enfoque y el control de impulsos forman parte de lo que esta atravesando.",
        links: [
          { label: "Terapia", href: "/therapy" },
          {
            label: "Pruebas de TDAH y atencion",
            href: "/adhd-testing",
          },
        ],
      },
      closing: {
        title: "Explore si el apoyo con medicamentos es adecuado para usted",
        paragraph:
          "Si tiene curiosidad sobre la medicacion como una parte de su cuidado, podemos ayudarle a sopesar opciones con cuidado y mantenerse apoyado con el tiempo.",
        cta: "Programar una cita",
        cliniciansLabel: "Conozca a nuestros clinicos",
        cliniciansHref: "/#clinicians",
      },
    },
  },
};

export function getServicePagesContent(locale: Locale): ServicePagesContent {
  return servicePagesContent[locale] ?? servicePagesContent.en;
}
