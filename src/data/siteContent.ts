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
      paragraphs: string[];
      offerLead: string;
      offers: { label: string; href: string }[];
      mission: string;
      learnMore: string;
    };
    therapyTeaser: {
      title: string;
      blurb: string;
      cta: string;
    };
    servicesTeaser: {
      title: string;
      blurb: string;
      cta: string;
    };
    commitment: {
      title: string;
      items: string[];
      closing: string;
    };
    careersTeaser: {
      title: string;
      blurb: string;
      cta: string;
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
        title: "Welcome to Firefly Wellness",
        subtitle: "(Formerly Firefly Counseling)",
        paragraphs: [
          "In 2017, Firefly Counseling was founded to help people find their light during challenging seasons and reconnect with their sense of direction and well-being.",
          "In 2026, Firefly Counseling has grown into Firefly Wellness, reflecting our expanded approach to care.",
        ],
        offerLead: "As of May 2026, we now offer:",
        offers: [
          {
            label: "Psychiatric medication with our on-staff PMHNP",
            href: "/medication-management",
          },
          {
            label:
              "T.O.V.A. testing to assess attention and impulse control related to ADHD.",
            href: "/adhd-testing",
          },
          {
            label:
              "BrainCheck assessments to track memory and cognitive function",
            href: "/medication-management",
          },
          {
            label:
              "Tempus genetic testing to help guide personalized medication decisions",
            href: "/medication-management",
          },
        ],
        mission:
          "Our mission remains the same: provide thoughtful, evidence-based, and compassionate care-now with even more ways to support your well-being.",
        learnMore: "Explore our services",
      },
      therapyTeaser: {
        title: "Therapy",
        blurb:
          "A safe, nonjudgmental space to understand patterns, build coping skills, and move toward lasting change—with clinicians who meet you where you are.",
        cta: "Learn more about therapy",
      },
      servicesTeaser: {
        title: "A More Comprehensive Approach to Wellness",
        blurb:
          "In addition to therapy, we offer ADHD and attention testing, medication management, and cognitive check-ins—coordinated under one practice.",
        cta: "View all services",
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
      careersTeaser: {
        title: "Join Our Team",
        blurb: "We're growing our clinical team in Hinsdale.",
        cta: "View open positions",
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
        title: "Bienvenido a Firefly Wellness",
        subtitle: "(Antes Firefly Counseling)",
        paragraphs: [
          "En 2017, Firefly Counseling fue fundado para ayudar a las personas a encontrar su luz durante temporadas dificiles y reconectarse con su sentido de direccion y bienestar.",
          "En 2026, Firefly Counseling crecio y se convirtio en Firefly Wellness, reflejando nuestro enfoque ampliado de atencion.",
        ],
        offerLead: "A partir de mayo de 2026, ahora ofrecemos:",
        offers: [
          {
            label: "Medicacion psiquiatrica con nuestra PMHNP del equipo",
            href: "/medication-management",
          },
          {
            label:
              "Pruebas T.O.V.A. para evaluar la atencion y el control de impulsos",
            href: "/adhd-testing",
          },
          {
            label:
              "Evaluaciones BrainCheck para dar seguimiento a la memoria y la funcion cognitiva",
            href: "/medication-management",
          },
          {
            label:
              "Pruebas geneticas de Tempus para orientar decisiones personalizadas sobre medicamentos",
            href: "/medication-management",
          },
        ],
        mission:
          "Nuestra mision sigue siendo la misma: brindar atencion compasiva, reflexiva y basada en evidencia, ahora con aun mas maneras de apoyar su bienestar.",
        learnMore: "Explore nuestros servicios",
      },
      therapyTeaser: {
        title: "Terapia",
        blurb:
          "Un espacio seguro y sin juicio para comprender patrones, fortalecer habilidades de afrontamiento y avanzar hacia un cambio duradero—con clinicos que le encuentran donde esta.",
        cta: "Conozca mas sobre terapia",
      },
      servicesTeaser: {
        title: "Un Enfoque Mas Integral del Bienestar",
        blurb:
          "Ademas de terapia, ofrecemos pruebas de TDAH y atencion, manejo de medicamentos y revisiones cognitivas—coordinadas en una sola practica.",
        cta: "Ver todos los servicios",
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
      careersTeaser: {
        title: "Unase a nuestro equipo",
        blurb: "Estamos ampliando nuestro equipo clinico en Hinsdale.",
        cta: "Ver vacantes",
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
