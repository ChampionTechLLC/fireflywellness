export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export type TherapistContent = {
  subtitle?: string;
  aboutMe: string[];
  aboutMeBullets?: string[];
};

export type ComingService = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type ComingServiceGroup = {
  heading: string;
  items: ComingService[];
};

export type SiteContent = {
  language: {
    toggleLabel: string;
    english: string;
    spanish: string;
  };
  nav: {
    brand: string;
    schedule: string;
    clinicians: string;
    services: string;
    location: string;
    clientPortal: string;
    openMenu: string;
    closeMenu: string;
    mainLabel: string;
  };
  home: {
    mobileSchedule: string;
    heroLogoAlt: string;
    intro: {
      title: string;
      subtitle: string;
      paragraphs: string[];
      offerLead: string;
      offers: string[];
      mission: string;
      learnMore: string;
    };
    therapy: {
      whyTitle: string;
      whyParagraphs: string[];
      expectTitle: string;
      expectIntro: string;
      expectItems: string[];
      expectOutro: string;
    };
    wellness: {
      title: string;
      groups: ComingServiceGroup[];
    };
    commitment: {
      title: string;
      items: string[];
      closing: string;
    };
    clinicians: {
      title: string;
      aboutTitle: string;
      seeMore: string;
      seeLess: string;
      scheduleWith: (firstName: string) => string;
      profiles: Record<string, TherapistContent>;
    };
    insurance: {
      title: string;
      cashPay: string;
    };
    services: {
      title: string;
      intro: string;
      items: string[];
    };
    contact: {
      title: string;
      subtitle: string;
      scheduleWith: (firstName: string) => string;
      address: string;
      fax: string;
      mapTitle: string;
      follow: string;
    };
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    language: {
      toggleLabel: "Switch language",
      english: "English",
      spanish: "Spanish",
    },
    nav: {
      brand: "Firefly Wellness, PLLC",
      schedule: "Schedule an Appointment",
      clinicians: "Clinicians",
      services: "Services",
      location: "Location",
      clientPortal: "Client Portal",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainLabel: "Main",
    },
    home: {
      mobileSchedule: "Schedule an Appointment",
      heroLogoAlt: "Firefly Wellness logo",
      intro: {
        title: "Welcome to Firefly Wellness",
        subtitle: "(Formerly Firefly Counseling)",
        paragraphs: [
          "In 2017, Firefly Counseling was founded to help people find their light during challenging seasons and reconnect with their sense of direction and well-being",
          "In 2026, Firefly Counseling has grown into Firefly Wellness, reflecting our expanded approach to care.",
        ],
        offerLead: "As of May 2026, we now offer:",
        offers: [
          "Medication management with a prescribing clinician",
          "T.O.V.A. testing to assess attention and impulse control",
          "BrainCheck assessments to track memory and cognitive function",
        ],
        mission:
          "Our mission remains the same: provide thoughtful, evidence-based, and compassionate care-now with even more ways to support your well-being.",
        learnMore: "Learn more",
      },
      therapy: {
        whyTitle: "Why Therapy",
        whyParagraphs: [
          "Life can feel overwhelming. Trauma, chronic stress, relationship strain, or major transitions can leave you anxious, low, or stuck in unhelpful patterns.",
          "You are not alone. According to the National Alliance on Mental Illness (NAMI), 1 in 5 adults experience mental health challenges each year. Struggling doesn't mean you're failing.",
          "Therapy can help. At Firefly Wellness, we walk alongside you as you reconnect with your strengths and move toward a steadier, more meaningful life.",
        ],
        expectTitle: "What to Expect",
        expectIntro:
          "Therapy provides a safe, nonjudgmental space for reflection, growth, and change. While medication can support some individuals, therapy focuses on:",
        expectItems: [
          "Understanding your thoughts, emotions, and patterns",
          "Strengthening coping skills",
          "Creating sustainable emotional and behavioral shifts",
        ],
        expectOutro:
          "Together with your therapist, you'll clarify goals, develop practical strategies, and work toward meaningful progress. Feeling nervous is completely normal - most clients do - and starting therapy is often described as one of the most valuable steps they've taken for themselves.",
      },
      wellness: {
        title: "A More Comprehensive Approach to Wellness",
        groups: [
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
                  "T.O.V.A. (Test of Variables of Attention) is a simple, computer-based test that uses a special device to look at attention and impulse control. It's one of the tools we may use when evaluating concerns like ADHD and other attention related issues. Your clinician will go over the results with you and use them as part of a larger picture so you can better understand your focus and next steps.",
                ],
              },
            ],
          },
        ],
      },
      commitment: {
        title: "Our Commitment",
        items: [
          "Evidence-based care",
          "Warm, collaborative relationships",
          "Respect for your individuality",
          "Ethical, thoughtful clinical practice",
        ],
        closing:
          "At Firefly Wellness, our mission is to help you move from simply coping to truly thriving.",
      },
      clinicians: {
        title: "Meet Your Clinicians",
        aboutTitle: "About me",
        seeMore: "See more",
        seeLess: "See less",
        scheduleWith: (firstName) => `Schedule with ${firstName}`,
        profiles: {
          "1": {
            subtitle: "Founder, Bilingual Therapist",
            aboutMe: [
              "My name is Jeannette Sziler. I am a Psychiatric Mental Health Nurse Practitioner, Licensed Clinical Professional Counselor and founder of Firefly Counseling. I have been in the mental healthcare field in some capacity or another for almost 2 decades. I am a bilingual, bicultural and biracial Mexican American.",
              "Throughout the years, I have worked with a variety of clients, allowing me to recognize I work best with those aged 11 through their 30s. Refining my skill set has led me to truly enjoy using expressive art therapies as well as Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT).",
              "In addition to my clinical work, I recently completed my Master of Science in Nursing (MSN) and am now pursuing a post-graduate certificate as a Psychiatric-Mental Health Nurse Practitioner (PMHNP), coming in 2026. This advanced training will allow me to incorporate medication management into Firefly Counseling, expanding the ways we can support our clients' mental health needs.",
            ],
            aboutMeBullets: [
              "My fifteen minutes of fame was when I was featured in a local newspaper after my friend and I completed 100 hours of volunteer work at a local hospital when we were 13 years old.",
              "Dobby from Harry Potter is my absolute favorite magical creature. Second would be werecats, which do not get as much love as their werewolf counterparts.",
              "If my personality was a dog I'd be a chihuahua: feisty, always cold, buckets of energy and likely wearing a sweater.",
              "Being outside is one of my favorite places to be as long as the weather is cooperative.",
              "My snack of choice tends to be popcorn covered in Tapatio or Valentina hot sauce and Tajin. I will also never turn away chips and salsa.",
            ],
          },
          "2": {
            subtitle: "Staff Therapist",
            aboutMe: [
              "My name is Meghan Tortorici. I am a Licensed Clinical Professional Counselor. I have been in the field of psychology for over six years and counting! With my growing skills in treating mental health, I have developed a love of art therapy to help clients navigate their struggles.",
              "This medium is extremely beneficial while working with the population I work best with which is young adults 18 to 25 and people with Autism. I also work best with the well-lived population of 65+ years. Throughout the years, while refining my skills and learning with my clients, it has been and continues to be a gift watching clients embrace change.",
            ],
            aboutMeBullets: [
              "My fifteen minutes of fame was breaking my high school's discus throwing record.",
              "Some of my favorite snacks involve salty crunchy goodness. I also love peanut butter and dark chocolate.",
              "Creatures of fire tend to be my favorite mythological creatures; the phoenix and dragons.",
              "I enjoy Aerial yoga and walking local trails when I feel the need to move.",
              "What Dreams May Come and Donnie Darko are two movies I would love to watch again for the first time if I could, they were so transformative during my teen years.",
            ],
          },
          "3": {
            subtitle: "Staff Therapist",
            aboutMe: [
              "Hello! My name is Patricia Opperman, I go by Tricia. I am a Licensed Clinical Social Worker who has been in the game for quite some time. Being in this field has allowed me to enjoy the connections I establish with people in general, my clients specifically.",
              "Throughout my many years as a Clinical Social Worker I have learned that I work best with adults in their 30s to the well-lived population age 65+. I enjoy using a strengths perspective with a focus on what is currently working, these meaningful and genuine connections allow me to learn more effective ways of working with them.",
            ],
            aboutMeBullets: [
              "My fifteen minutes of fame was participating in a bodybuilding show in my 50s",
              "I am an avid cyclist",
              "My favorite coffee shop is 318 Coffee House in Geneva",
              "I love plants, Lavender being my favorite",
              "Cheetos and naturally, anything sweet, are my favorite snacks",
            ],
          },
        },
      },
      insurance: {
        title: "Insurance We Accept",
        cashPay: "We also accept cash pay and out-of-network insurances.",
      },
      services: {
        title: "Services (available in English and Spanish)",
        intro:
          "We are happy to offer a wide array of services and multiple modalities to best fit your needs.",
        items: [
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
        ],
      },
      contact: {
        title: "Let's Talk.",
        subtitle: "Schedule your appointment today!",
        scheduleWith: (firstName) => `Schedule with ${firstName}`,
        address: "Address",
        fax: "Fax",
        mapTitle: "Office location",
        follow: "follow firefly",
      },
    },
  },
  es: {
    language: {
      toggleLabel: "Cambiar idioma",
      english: "Ingles",
      spanish: "Espanol",
    },
    nav: {
      brand: "Firefly Wellness, PLLC",
      schedule: "Programar una cita",
      clinicians: "Clinicos",
      services: "Servicios",
      location: "Ubicacion",
      clientPortal: "Portal del cliente",
      openMenu: "Abrir menu",
      closeMenu: "Cerrar menu",
      mainLabel: "Principal",
    },
    home: {
      mobileSchedule: "Programar una cita",
      heroLogoAlt: "Logotipo de Firefly Wellness",
      intro: {
        title: "Bienvenido a Firefly Wellness",
        subtitle: "(Antes Firefly Counseling)",
        paragraphs: [
          "En 2017, Firefly Counseling fue fundado para ayudar a las personas a encontrar su luz durante temporadas dificiles y reconectarse con su sentido de direccion y bienestar.",
          "En 2026, Firefly Counseling crecio y se convirtio en Firefly Wellness, reflejando nuestro enfoque ampliado de atencion.",
        ],
        offerLead: "A partir de mayo de 2026, ahora ofrecemos:",
        offers: [
          "Manejo de medicamentos con un clinico autorizado para recetar",
          "Pruebas T.O.V.A. para evaluar la atencion y el control de impulsos",
          "Evaluaciones BrainCheck para dar seguimiento a la memoria y la funcion cognitiva",
        ],
        mission:
          "Nuestra mision sigue siendo la misma: brindar atencion compasiva, reflexiva y basada en evidencia, ahora con aun mas maneras de apoyar su bienestar.",
        learnMore: "Conozca mas",
      },
      therapy: {
        whyTitle: "Por Que Terapia",
        whyParagraphs: [
          "La vida puede sentirse abrumadora. El trauma, el estres cronico, las dificultades en las relaciones o las transiciones importantes pueden dejarle con ansiedad, animo bajo o atrapado en patrones que no ayudan.",
          "No esta solo. Segun la National Alliance on Mental Illness (NAMI), 1 de cada 5 adultos experimenta desafios de salud mental cada ano. Tener dificultades no significa que este fallando.",
          "La terapia puede ayudar. En Firefly Wellness, caminamos a su lado mientras se reconecta con sus fortalezas y avanza hacia una vida mas estable y significativa.",
        ],
        expectTitle: "Que Puede Esperar",
        expectIntro:
          "La terapia ofrece un espacio seguro y sin juicio para la reflexion, el crecimiento y el cambio. Aunque los medicamentos pueden apoyar a algunas personas, la terapia se enfoca en:",
        expectItems: [
          "Comprender sus pensamientos, emociones y patrones",
          "Fortalecer habilidades de afrontamiento",
          "Crear cambios emocionales y conductuales sostenibles",
        ],
        expectOutro:
          "Junto con su terapeuta, aclarara metas, desarrollara estrategias practicas y trabajara hacia un progreso significativo. Sentirse nervioso es completamente normal - a la mayoria de los clientes les pasa - y comenzar terapia a menudo se describe como uno de los pasos mas valiosos que han tomado por si mismos.",
      },
      wellness: {
        title: "Un Enfoque Mas Integral del Bienestar",
        groups: [
          {
            heading: "Servicios adicionales que ofrecemos:",
            items: [
              {
                id: "medication",
                title: "Manejo de medicamentos",
                paragraphs: [
                  "Algunas personas todavia se sienten muy decaidas, ansiosas o tensas incluso cuando la terapia va bien. Los medicamentos pueden aliviar esos sintomas lo suficiente como para dormir, concentrarse y beneficiarse del trabajo que hacen en terapia. Ofreceremos visitas de prescripcion y manejo de medicamentos con un clinico de nuestro equipo.",
                ],
              },
              {
                id: "braincheck",
                title: "Evaluaciones de memoria y pensamiento con BrainCheck",
                paragraphs: [
                  "Usamos BrainCheck para monitorear su memoria con el tiempo. Despues de su primera evaluacion de referencia, su clinico revisara los resultados con usted, respondera sus preguntas y le ayudara a decidir los proximos pasos. Ofrecemos una visita inicial y revisiones anuales para seguir los cambios con el tiempo.",
                ],
              },
              {
                id: "tova",
                title: "Prueba de atencion y enfoque (T.O.V.A.)",
                paragraphs: [
                  "T.O.V.A. (Test of Variables of Attention) es una prueba sencilla por computadora que usa un dispositivo especial para observar la atencion y el control de impulsos. Es una de las herramientas que podemos usar al evaluar inquietudes como TDAH y otros asuntos relacionados con la atencion. Su clinico revisara los resultados con usted y los usara como parte de un panorama mas amplio para que pueda comprender mejor su enfoque y sus proximos pasos.",
                ],
              },
            ],
          },
        ],
      },
      commitment: {
        title: "Nuestro Compromiso",
        items: [
          "Atencion basada en evidencia",
          "Relaciones calidas y colaborativas",
          "Respeto por su individualidad",
          "Practica clinica etica y reflexiva",
        ],
        closing:
          "En Firefly Wellness, nuestra mision es ayudarle a pasar de simplemente sobrellevar la vida a realmente prosperar.",
      },
      clinicians: {
        title: "Conozca a Sus Clinicos",
        aboutTitle: "Sobre mi",
        seeMore: "Ver mas",
        seeLess: "Ver menos",
        scheduleWith: (firstName) => `Programar con ${firstName}`,
        profiles: {
          "1": {
            subtitle: "Fundadora, terapeuta bilingue",
            aboutMe: [
              "Mi nombre es Jeannette Sziler. Soy enfermera practicante de salud mental psiquiatrica, consejera profesional clinica licenciada y fundadora de Firefly Counseling. He trabajado en el campo de la salud mental de una forma u otra durante casi 2 decadas. Soy mexicoamericana bilingue, bicultural y birracial.",
              "A lo largo de los anos, he trabajado con una variedad de clientes, lo que me ha permitido reconocer que trabajo mejor con personas de 11 anos hasta sus 30s. Al refinar mis habilidades, he llegado a disfrutar mucho el uso de terapias de arte expresivo, asi como la Terapia Cognitivo-Conductual (CBT) y la Terapia de Aceptacion y Compromiso (ACT).",
              "Ademas de mi trabajo clinico, recientemente complete mi Maestria en Ciencias de Enfermeria (MSN) y ahora estoy cursando un certificado de posgrado como enfermera practicante de salud mental psiquiatrica (PMHNP), previsto para 2026. Esta formacion avanzada me permitira incorporar manejo de medicamentos en Firefly Counseling, ampliando las formas en que podemos apoyar las necesidades de salud mental de nuestros clientes.",
            ],
            aboutMeBullets: [
              "Mis quince minutos de fama fueron cuando apareci en un periodico local despues de que una amiga y yo completamos 100 horas de voluntariado en un hospital local cuando teniamos 13 anos.",
              "Dobby de Harry Potter es mi criatura magica favorita. En segundo lugar estarian los gatos lobo, que no reciben tanto carino como sus contrapartes hombres lobo.",
              "Si mi personalidad fuera un perro, seria un chihuahua: con caracter, siempre con frio, lleno de energia y probablemente usando un sueter.",
              "Estar afuera es uno de mis lugares favoritos, siempre que el clima coopere.",
              "Mi snack favorito suele ser popcorn con salsa Tapatio o Valentina y Tajin. Tambien nunca rechazo chips con salsa.",
            ],
          },
          "2": {
            subtitle: "Terapeuta del equipo",
            aboutMe: [
              "Mi nombre es Meghan Tortorici. Soy consejera profesional clinica licenciada. He trabajado en el campo de la psicologia por mas de seis anos y seguimos contando. Con mis habilidades crecientes en el tratamiento de la salud mental, he desarrollado un amor por la arteterapia para ayudar a los clientes a navegar sus dificultades.",
              "Este medio es extremadamente beneficioso al trabajar con la poblacion con la que trabajo mejor: adultos jovenes de 18 a 25 anos y personas con autismo. Tambien trabajo bien con la poblacion de mayor edad, 65 anos o mas. A lo largo de los anos, mientras he refinado mis habilidades y aprendido con mis clientes, ha sido y sigue siendo un regalo verlos aceptar el cambio.",
            ],
            aboutMeBullets: [
              "Mis quince minutos de fama fueron romper el record de lanzamiento de disco de mi escuela secundaria.",
              "Algunos de mis snacks favoritos tienen esa bondad salada y crujiente. Tambien me encanta la crema de cacahuate y el chocolate oscuro.",
              "Las criaturas de fuego suelen ser mis criaturas mitologicas favoritas; el fenix y los dragones.",
              "Disfruto el yoga aereo y caminar por senderos locales cuando siento la necesidad de moverme.",
              "What Dreams May Come y Donnie Darko son dos peliculas que me encantaria ver otra vez por primera vez si pudiera; fueron muy transformadoras durante mi adolescencia.",
            ],
          },
          "3": {
            subtitle: "Terapeuta del equipo",
            aboutMe: [
              "Hola. Mi nombre es Patricia Opperman, pero me llaman Tricia. Soy trabajadora social clinica licenciada y llevo bastante tiempo en este campo. Estar en esta profesion me ha permitido disfrutar las conexiones que establezco con las personas en general, y con mis clientes en particular.",
              "A lo largo de mis muchos anos como trabajadora social clinica, he aprendido que trabajo mejor con adultos en sus 30s hasta la poblacion de mayor edad, 65 anos o mas. Disfruto usar una perspectiva basada en fortalezas con enfoque en lo que actualmente funciona; estas conexiones significativas y genuinas me permiten aprender maneras mas efectivas de trabajar con ellos.",
            ],
            aboutMeBullets: [
              "Mis quince minutos de fama fueron participar en una competencia de fisicoculturismo en mis 50s.",
              "Soy una ciclista entusiasta.",
              "Mi cafeteria favorita es 318 Coffee House en Geneva.",
              "Me encantan las plantas, especialmente la lavanda.",
              "Cheetos y, naturalmente, cualquier cosa dulce son mis snacks favoritos.",
            ],
          },
        },
      },
      insurance: {
        title: "Seguros Que Aceptamos",
        cashPay:
          "Tambien aceptamos pago privado y seguros fuera de la red.",
      },
      services: {
        title: "Servicios (disponibles en ingles y espanol)",
        intro:
          "Nos complace ofrecer una amplia variedad de servicios y multiples modalidades para adaptarnos mejor a sus necesidades.",
        items: [
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
          "Asuntos de mujeres",
          "Regulacion emocional",
          "Conductas obsesivas",
          "Problemas laborales",
          "Problemas de sueno",
        ],
      },
      contact: {
        title: "Hablemos.",
        subtitle: "Programe su cita hoy.",
        scheduleWith: (firstName) => `Programar con ${firstName}`,
        address: "Direccion",
        fax: "Fax",
        mapTitle: "Ubicacion de la oficina",
        follow: "siga a firefly",
      },
    },
  },
};

export function getSiteContent(locale: Locale) {
  return siteContent[locale] ?? siteContent.en;
}
