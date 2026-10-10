export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export type TherapistContent = {
  subtitle?: string;
  aboutMe: string[];
  aboutMeBullets?: string[];
};

export type SiteContent = {
  /** Link to the same page in the other language. */
  languageSwitch: {
    label: string;
    ariaLabel: string;
  };
  nav: {
    brand: string;
    schedule: string;
    clinicians: string;
    services: string;
    fees: string;
    location: string;
    careers: string;
    clientPortal: string;
    more: string;
    openMenu: string;
    closeMenu: string;
    mainLabel: string;
  };
  home: {
    meta: {
      title: string;
      description: string;
    };
    mobileSchedule: string;
    heroLogoAlt: string;
    intro: {
      title: string;
      subtitle: string;
      paragraphs: string[];
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
      feesLink: string;
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
    languageSwitch: {
      label: "Español",
      ariaLabel: "Ver esta página en español",
    },
    nav: {
      brand: "Firefly Wellness, PLLC",
      schedule: "Schedule an Appointment",
      clinicians: "Clinicians",
      services: "Services",
      fees: "Insurance & Fees",
      location: "Location",
      careers: "Careers",
      clientPortal: "Client Portal",
      more: "More",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainLabel: "Main",
    },
    home: {
      meta: {
        title: "Psychiatric Care & Therapy in Hinsdale | Firefly Wellness",
        description:
          "Firefly Wellness offers therapy, ADHD testing, and psychiatric medication in Hinsdale, IL—serving Oak Brook, Clarendon Hills, Western Springs, Westmont, and nearby western suburbs.",
      },
      mobileSchedule: "Schedule an Appointment",
      heroLogoAlt: "Firefly Wellness logo",
      intro: {
        title: "Psychiatric Care & Therapy in Hinsdale",
        subtitle: "Firefly Wellness, PLLC",
        paragraphs: [
          "Welcome to Firefly Wellness. Our team brings nearly two decades of mental health experience to providing thoughtful, personalized care for adolescents and adults. We help individuals navigate ADHD, anxiety, depression, trauma, relationship challenges, and life transitions through psychiatric care, medication management, ADHD evaluation, and therapy.",
          "At Firefly Wellness, we believe meaningful care starts with understanding the whole person. We take the time to listen, understand your concerns, and create a treatment approach that feels collaborative, supportive, and tailored to your needs.",
          "Located in Hinsdale, we serve individuals and families throughout Oak Brook, Clarendon Hills, Western Springs, Westmont, and the surrounding western suburbs.",
        ],
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
              "Computer-based T.O.V.A. testing to help evaluate attention and impulse control as one part of a full evaluation.",
            href: "/adhd-testing",
            learnMore: "Learn more about ADHD testing",
          },
          {
            title: "Anxiety Treatment",
            blurb:
              "Psychiatric evaluation, medication when appropriate, and therapy for worry, panic, and other anxiety concerns—coordinated in one practice.",
            href: "/anxiety-treatment",
            learnMore: "Learn more about anxiety treatment",
          },
          {
            title: "Depression Treatment",
            blurb:
              "Psychiatric evaluation, antidepressant medication management, and therapy, with regular follow-up as you start feeling like yourself again.",
            href: "/depression-treatment",
            learnMore: "Learn more about depression treatment",
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
              "In addition to my work as an LCPC, I completed my Master of Science in Nursing (MSN) and am a board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP). I provide psychiatric medication care at Firefly Wellness alongside therapy, expanding the ways we can support our clients' mental health needs.",
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
        feesLink: "View insurance details and self-pay rates",
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
    languageSwitch: {
      label: "English",
      ariaLabel: "View this page in English",
    },
    nav: {
      brand: "Firefly Wellness, PLLC",
      schedule: "Programar una cita",
      clinicians: "Clínicos",
      services: "Servicios",
      fees: "Seguros y tarifas",
      location: "Ubicación",
      careers: "Empleo",
      clientPortal: "Portal del cliente",
      more: "Más",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      mainLabel: "Principal",
    },
    home: {
      meta: {
        title:
          "Atención Psiquiátrica y Terapia en Español en Hinsdale | Firefly Wellness",
        description:
          "Firefly Wellness ofrece terapia, evaluación de TDAH y medicación psiquiátrica en español en Hinsdale, IL—atendiendo Oak Brook, Clarendon Hills, Western Springs, Westmont y los suburbios del oeste cercanos.",
      },
      mobileSchedule: "Programar una cita",
      heroLogoAlt: "Logotipo de Firefly Wellness",
      intro: {
        title: "Atención Psiquiátrica y Terapia en Español en Hinsdale",
        subtitle: "Firefly Wellness, PLLC",
        paragraphs: [
          "Bienvenidos a Firefly Wellness. Nuestro equipo aporta casi dos décadas de experiencia en salud mental para brindar un cuidado reflexivo y personalizado a adolescentes y adultos. Ayudamos a las personas a manejar el TDAH, la ansiedad, la depresión, el trauma, los desafíos en las relaciones y las transiciones de vida mediante atención psiquiátrica, manejo de medicamentos, evaluación de TDAH y terapia.",
          "En Firefly Wellness, creemos que un cuidado significativo comienza por comprender a la persona en su totalidad. Nos tomamos el tiempo para escuchar, comprender sus inquietudes y crear un enfoque de tratamiento colaborativo, de apoyo y adaptado a sus necesidades.",
          "Ubicados en Hinsdale, atendemos a personas y familias en Oak Brook, Clarendon Hills, Western Springs, Westmont y los suburbios del oeste cercanos.",
        ],
        scheduleLink: "Reservar en línea ahora",
      },
      servicesOverview: {
        title: "Nuestros servicios en Hinsdale",
        items: [
          {
            title: "Medicación psiquiátrica",
            blurb:
              "Visitas de prescripción y apoyo continuo con nuestra PMHNP del equipo, incluyendo herramientas que orientan decisiones de medicación reflexivas.",
            href: "/medication-management",
            learnMore: "Conozca más sobre medicación psiquiátrica",
          },
          {
            title: "Pruebas de TDAH y atención",
            blurb:
              "Pruebas T.O.V.A. por computadora para ayudar a evaluar la atención y el control de impulsos como una parte de una evaluación completa.",
            href: "/adhd-testing",
            learnMore: "Conozca más sobre pruebas de TDAH",
          },
          {
            title: "Tratamiento de la ansiedad",
            blurb:
              "Evaluación psiquiátrica, medicación cuando es apropiada y terapia para la preocupación, el pánico y otras inquietudes de ansiedad—coordinados en una sola práctica.",
            href: "/anxiety-treatment",
            learnMore: "Conozca más sobre el tratamiento de la ansiedad",
          },
          {
            title: "Tratamiento de la depresión",
            blurb:
              "Evaluación psiquiátrica, manejo de antidepresivos y terapia, con seguimiento regular a medida que vuelve a sentirse como usted mismo.",
            href: "/depression-treatment",
            learnMore: "Conozca más sobre el tratamiento de la depresión",
          },
          {
            title: "Terapia",
            blurb:
              "Consejería individual para adolescentes, adultos jóvenes y adultos—con enfoque en comprensión, habilidades de afrontamiento y cambio duradero.",
            href: "/therapy",
            learnMore: "Conozca más sobre terapia",
          },
        ],
        supportingNoteTitle: "Pruebas y Herramientas Adicionales",
        supportingNote:
          "Cuando es clínicamente útil, BrainCheck y Tempus pueden apoyar el monitoreo de la memoria y decisiones personalizadas de medicación junto con su cuidado.",
        viewAllCta: "Ver todos los servicios",
      },
      whyFirefly: {
        title: "Por qué Firefly Wellness",
        intro:
          "Trabajamos con adolescentes y adultos que atraviesan ansiedad, depresión, trauma, inquietudes de relación y transiciones de vida.",
        items: [
          "Atención basada en evidencia",
          "Relaciones calidas y colaborativas",
          "Respeto por su individualidad",
          "Práctica clínica ética y reflexiva",
          "Servicios en inglés y español",
        ],
        closing:
          "En Firefly Wellness, nuestra misión es ayudarle a pasar de simplemente sobrellevar la vida a realmente prosperar.",
        cliniciansLink: "Conozca a nuestros clínicos",
      },
      hiringTeaser: {
        text: "Estamos ampliando nuestro equipo clínico en Hinsdale.",
        linkLabel: "Ver vacantes",
        href: "/careers",
      },
      clinicians: {
        title: "Conozca a Sus Clínicos",
        aboutTitle: "Sobre mí",
        seeMore: "Ver más",
        seeLess: "Ver menos",
        scheduleWith: (firstName) => `Programar con ${firstName}`,
        profiles: {
          "1": {
            subtitle: "Fundadora, terapeuta bilingüe",
            aboutMe: [
              "Mi nombre es Jeannette Sziler. Soy enfermera practicante de salud mental psiquiátrica, consejera profesional clínica licenciada y fundadora de Firefly Wellness. He trabajado en el campo de la salud mental de una forma u otra durante casi 2 décadas. Soy mexicoamericana bilingüe, bicultural y birracial.",
              "A lo largo de los años, he trabajado con una variedad de clientes, lo que me ha permitido reconocer que trabajo mejor con personas de 11 años hasta sus 30s. Al refinar mis habilidades, he llegado a disfrutar mucho el uso de terapias de arte expresivo, así como la Terapia Cognitivo-Conductual (CBT) y la Terapia de Aceptación y Compromiso (ACT).",
              "Además de mi trabajo como LCPC, completé mi Maestría en Ciencias de Enfermería (MSN) y soy enfermera practicante de salud mental psiquiátrica certificada (PMHNP). Brindo atención de medicación psiquiátrica en Firefly Wellness junto con la terapia, ampliando las formas en que podemos apoyar las necesidades de salud mental de nuestros clientes.",
            ],
            aboutMeBullets: [
              "Mis quince minutos de fama fueron cuando aparecí en un periódico local después de que una amiga y yo completamos 100 horas de voluntariado en un hospital local cuando teníamos 13 años.",
              "Dobby de Harry Potter es mi criatura mágica favorita. En segundo lugar estarían los gatos lobo, que no reciben tanto cariño como sus contrapartes hombres lobo.",
              "Si mi personalidad fuera un perro, sería un chihuahua: con carácter, siempre con frío, lleno de energía y probablemente usando un suéter.",
              "Estar afuera es uno de mis lugares favoritos, siempre que el clima coopere.",
              "Mi snack favorito suele ser popcorn con salsa Tapatío o Valentina y Tajín. También nunca rechazo chips con salsa.",
            ],
          },
          "2": {
            subtitle: "Terapeuta del equipo",
            aboutMe: [
              "Mi nombre es Meghan Tortorici. Soy consejera profesional clínica licenciada. He trabajado en el campo de la psicología por más de seis años y seguimos contando. Con mis habilidades crecientes en el tratamiento de la salud mental, he desarrollado un amor por la arteterapia para ayudar a los clientes a navegar sus dificultades.",
              "Este medio es extremadamente beneficioso al trabajar con la población con la que trabajo mejor: adultos jóvenes de 18 a 25 años y personas con autismo. También trabajo bien con la población de mayor edad, 65 años o más. A lo largo de los años, mientras he refinado mis habilidades y aprendido con mis clientes, ha sido y sigue siendo un regalo verlos aceptar el cambio.",
            ],
            aboutMeBullets: [
              "Mis quince minutos de fama fueron romper el record de lanzamiento de disco de mi escuela secundaria.",
              "Algunos de mis snacks favoritos tienen esa bondad salada y crujiente. También me encanta la crema de cacahuate y el chocolate oscuro.",
              "Las criaturas de fuego suelen ser mis criaturas mitológicas favoritas; el fénix y los dragones.",
              "Disfruto el yoga aéreo y caminar por senderos locales cuando siento la necesidad de moverme.",
              "What Dreams May Come y Donnie Darko son dos películas que me encantaría ver otra vez por primera vez si pudiera; fueron muy transformadoras durante mi adolescencia.",
            ],
          },
          "3": {
            subtitle: "Terapeuta del equipo",
            aboutMe: [
              "Hola. Mi nombre es Patricia Opperman, pero me llaman Tricia. Soy trabajadora social clínica licenciada y llevo bastante tiempo en este campo. Estar en esta profesión me ha permitido disfrutar las conexiones que establezco con las personas en general, y con mis clientes en particular.",
              "A lo largo de mis muchos años como trabajadora social clínica, he aprendido que trabajo mejor con adultos en sus 30s hasta la población de mayor edad, 65 años o más. Disfruto usar una perspectiva basada en fortalezas con enfoque en lo que actualmente funciona; estas conexiones significativas y genuinas me permiten aprender maneras más efectivas de trabajar con ellos.",
            ],
            aboutMeBullets: [
              "Mis quince minutos de fama fueron participar en una competencia de fisicoculturismo en mis 50s.",
              "Soy una ciclista entusiasta.",
              "Mi cafetería favorita es 318 Coffee House en Geneva.",
              "Me encantan las plantas, especialmente la lavanda.",
              "Cheetos y, naturalmente, cualquier cosa dulce son mis snacks favoritos.",
            ],
          },
        },
      },
      insurance: {
        title: "Seguros Que Aceptamos",
        cashPay:
          "También aceptamos pago privado y seguros fuera de la red.",
        feesLink: "Ver detalles de seguros y tarifas de pago privado",
      },
      contact: {
        title: "Hablemos.",
        subtitle: "Programe su cita hoy.",
        scheduleWith: (firstName) => `Programar con ${firstName}`,
        address: "Dirección",
        phone: "Teléfono",
        fax: "Fax",
        hoursLabel: "Horario comercial",
        hours:
          "Solo con cita. Cada clínico establece su propio horario: reserve en línea para ver disponibilidad.",
        mapTitle: "Ubicación de la oficina",
        follow: "siga a firefly",
      },
    },
  },
};

export function getSiteContent(locale: Locale) {
  return siteContent[locale] ?? siteContent.en;
}
