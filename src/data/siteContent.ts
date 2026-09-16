export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export type TherapistContent = {
  subtitle?: string;
  aboutMe: string[];
  aboutMeBullets?: string[];
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
    careers: string;
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
      lead: string;
      whoWeHelp: string;
      scheduleLink: string;
    };
    servicesOverview: {
      title: string;
      items: {
        title: string;
        blurb: string;
        href: string;
        learnMore: string;
      }[];
      supportingNoteTitle: string;
      supportingNote: string;
      viewAllCta: string;
    };
    whyFirefly: {
      title: string;
      intro: string;
      items: string[];
      closing: string;
      cliniciansLink: string;
    };
    hiringTeaser: {
      text: string;
      linkLabel: string;
      href: string;
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
    contact: {
      title: string;
      subtitle: string;
      scheduleWith: (firstName: string) => string;
      address: string;
      phone: string;
      fax: string;
      hoursLabel: string;
      hours: string;
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
      careers: "Careers",
      clientPortal: "Client Portal",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainLabel: "Main",
    },
    home: {
      mobileSchedule: "Schedule an Appointment",
      heroLogoAlt: "Firefly Wellness logo",
      intro: {
        title: "Psychiatric Care & Therapy in Hinsdale",
        subtitle: "Firefly Wellness, PLLC",
        lead:
          "Coordinated psychiatric medication, ADHD and attention testing, and therapy for adolescents through adults. Our team brings nearly two decades of mental health experience to every client relationship.",
        whoWeHelp:
          "We help with anxiety, depression, trauma, ADHD-related concerns, relationships, and life transitions—serving Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont, and nearby western suburbs.",
        scheduleLink: "Book online now",
      },
      servicesOverview: {
        title: "Our services in Hinsdale",
        items: [
          {
            title: "Psychiatric Medication",
            blurb:
              "Prescribing visits and ongoing medication support with our on-staff PMHNP, including tools that inform thoughtful medication decisions.",
            href: "/medication-management",
            learnMore: "Learn more about psychiatric medication",
          },
          {
            title: "ADHD & Attention Testing",
            blurb:
              "Computer-based T.O.V.A. testing to help evaluate attention and impulse control as part of a broader clinical picture.",
            href: "/adhd-testing",
            learnMore: "Learn more about ADHD testing",
          },
          {
            title: "Therapy",
            blurb:
              "Individual counseling for adolescents, young adults, and adults—focused on insight, coping skills, and lasting change.",
            href: "/therapy",
            learnMore: "Learn more about therapy",
          },
        ],
        supportingNoteTitle: "Additional Testing and Tools",
        supportingNote:
          "When clinically useful, BrainCheck and Tempus can support memory monitoring and personalized medication decisions alongside your care.",
        viewAllCta: "View all services",
      },
      whyFirefly: {
        title: "Why Firefly Wellness",
        intro:
          "We work with adolescents through adults navigating anxiety, depression, trauma, relationship concerns, and life transitions.",
        items: [
          "Evidence-based care",
          "Warm, collaborative relationships",
          "Respect for your individuality",
          "Ethical, thoughtful clinical practice",
          "Services in English and Spanish",
        ],
        closing:
          "At Firefly Wellness, our mission is to help you move from simply coping to truly thriving.",
        cliniciansLink: "Meet our clinicians",
      },
      hiringTeaser: {
        text: "We're growing our clinical team in Hinsdale.",
        linkLabel: "View open positions",
        href: "/careers",
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
              "My name is Jeannette Sziler. I am a Psychiatric Mental Health Nurse Practitioner, Licensed Clinical Professional Counselor and founder of Firefly Wellness. I have been in the mental healthcare field in some capacity or another for almost 2 decades. I am a bilingual, bicultural and biracial Mexican American.",
              "Throughout the years, I have worked with a variety of clients, allowing me to recognize I work best with those aged 11 through their 30s. Refining my skill set has led me to truly enjoy using expressive art therapies as well as Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT).",
              "In addition to my work as an LCPC, I completed my Master of Science in Nursing (MSN) and am a board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC). I provide psychiatric medication care at Firefly Wellness alongside therapy, expanding the ways we can support our clients' mental health needs.",
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
      contact: {
        title: "Let's Talk.",
        subtitle: "Schedule your appointment today!",
        scheduleWith: (firstName) => `Schedule with ${firstName}`,
        address: "Address",
        phone: "Phone",
        fax: "Fax",
        hoursLabel: "Business Hours",
        hours:
          "By appointment. Each clinician sets their own schedule—book online to see available times.",
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
      careers: "Carreras",
      clientPortal: "Portal del cliente",
      openMenu: "Abrir menu",
      closeMenu: "Cerrar menu",
      mainLabel: "Principal",
    },
    home: {
      mobileSchedule: "Programar una cita",
      heroLogoAlt: "Logotipo de Firefly Wellness",
      intro: {
        title: "Atencion Psiquiatrica y Terapia en Hinsdale",
        subtitle: "Firefly Wellness, PLLC",
        lead:
          "Medicacion psiquiatrica coordinada, pruebas de TDAH y atencion, y terapia para adolescentes y adultos. Nuestro equipo aporta casi dos decadas de experiencia en salud mental a cada relacion con el cliente.",
        whoWeHelp:
          "Ayudamos con ansiedad, depresion, trauma, inquietudes relacionadas con el TDAH, relaciones y transiciones de vida—sirviendo a Hinsdale, Oak Brook, Clarendon Hills, Western Springs, Westmont y los suburbios del oeste cercanos.",
        scheduleLink: "Reservar en linea ahora",
      },
      servicesOverview: {
        title: "Nuestros servicios en Hinsdale",
        items: [
          {
            title: "Medicacion psiquiatrica",
            blurb:
              "Visitas de prescripcion y apoyo continuo con nuestra PMHNP del equipo, incluyendo herramientas que orientan decisiones de medicacion reflexivas.",
            href: "/medication-management",
            learnMore: "Conozca mas sobre medicacion psiquiatrica",
          },
          {
            title: "Pruebas de TDAH y atencion",
            blurb:
              "Pruebas T.O.V.A. por computadora para ayudar a evaluar la atencion y el control de impulsos como parte de un panorama clinico mas amplio.",
            href: "/adhd-testing",
            learnMore: "Conozca mas sobre pruebas de TDAH",
          },
          {
            title: "Terapia",
            blurb:
              "Consejeria individual para adolescentes, adultos jovenes y adultos—con enfoque en comprension, habilidades de afrontamiento y cambio duradero.",
            href: "/therapy",
            learnMore: "Conozca mas sobre terapia",
          },
        ],
        supportingNoteTitle: "Pruebas y Herramientas Adicionales",
        supportingNote:
          "Cuando es clinicamente util, BrainCheck y Tempus pueden apoyar el monitoreo de la memoria y decisiones personalizadas de medicacion junto con su cuidado.",
        viewAllCta: "Ver todos los servicios",
      },
      whyFirefly: {
        title: "Por que Firefly Wellness",
        intro:
          "Trabajamos con adolescentes y adultos que atraviesan ansiedad, depresion, trauma, inquietudes de relacion y transiciones de vida.",
        items: [
          "Atencion basada en evidencia",
          "Relaciones calidas y colaborativas",
          "Respeto por su individualidad",
          "Practica clinica etica y reflexiva",
          "Servicios en ingles y espanol",
        ],
        closing:
          "En Firefly Wellness, nuestra mision es ayudarle a pasar de simplemente sobrellevar la vida a realmente prosperar.",
        cliniciansLink: "Conozca a nuestros clinicos",
      },
      hiringTeaser: {
        text: "Estamos ampliando nuestro equipo clinico en Hinsdale.",
        linkLabel: "Ver vacantes",
        href: "/careers",
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
              "Mi nombre es Jeannette Sziler. Soy enfermera practicante de salud mental psiquiatrica, consejera profesional clinica licenciada y fundadora de Firefly Wellness. He trabajado en el campo de la salud mental de una forma u otra durante casi 2 decadas. Soy mexicoamericana bilingue, bicultural y birracial.",
              "A lo largo de los anos, he trabajado con una variedad de clientes, lo que me ha permitido reconocer que trabajo mejor con personas de 11 anos hasta sus 30s. Al refinar mis habilidades, he llegado a disfrutar mucho el uso de terapias de arte expresivo, asi como la Terapia Cognitivo-Conductual (CBT) y la Terapia de Aceptacion y Compromiso (ACT).",
              "Ademas de mi trabajo como LCPC, complete mi Maestria en Ciencias de Enfermeria (MSN) y soy enfermera practicante de salud mental psiquiatrica certificada (PMHNP-BC). Brindo atencion de medicacion psiquiatrica en Firefly Wellness junto con la terapia, ampliando las formas en que podemos apoyar las necesidades de salud mental de nuestros clientes.",
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
      contact: {
        title: "Hablemos.",
        subtitle: "Programe su cita hoy.",
        scheduleWith: (firstName) => `Programar con ${firstName}`,
        address: "Direccion",
        phone: "Telefono",
        fax: "Fax",
        hoursLabel: "Horario comercial",
        hours:
          "Solo con cita. Cada clinico establece su propio horario: reserve en linea para ver disponibilidad.",
        mapTitle: "Ubicacion de la oficina",
        follow: "siga a firefly",
      },
    },
  },
};

export function getSiteContent(locale: Locale) {
  return siteContent[locale] ?? siteContent.en;
}
