import type { Locale } from "@/data/siteContent";

export type FeeItem = {
  service: string;
  details: string;
  price: string;
};

export type FeesPageCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  insurance: {
    title: string;
    paragraph: string;
    verify: string;
  };
  selfPay: {
    title: string;
    intro: string;
    priceLabel: string;
    items: FeeItem[];
    note: string;
  };
  payment: {
    title: string;
    items: {
      title: string;
      paragraph: string;
    }[];
  };
  goodFaith: {
    title: string;
    intro: string;
    items: string[];
    contact: string;
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

const feesPageContent: Record<Locale, FeesPageCopy> = {
  en: {
    meta: {
      title: "Insurance & Self-Pay Rates | Firefly Wellness, Hinsdale",
      description:
        "Insurance plans accepted at Firefly Wellness in Hinsdale—Cigna, BCBS, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare—plus self-pay rates for psychiatric evaluation, medication management, therapy, and ADHD testing.",
    },
    hero: {
      title: "Insurance & Fees",
      subtitle:
        "Clear information about the insurance plans we accept and what care costs if you choose to pay out of pocket—so you can focus on getting the support you need.",
      cta: "Schedule an Appointment",
    },
    insurance: {
      title: "Insurance We Accept",
      paragraph:
        "Firefly Wellness is in network with Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare for psychiatric evaluation, medication management, therapy, and ADHD evaluation.",
      verify:
        "Coverage, copays, and deductibles vary by plan. We are happy to help you check your benefits before your first visit.",
    },
    selfPay: {
      title: "Self-Pay Rates",
      intro:
        "If you do not have insurance, your plan is out of network, or you prefer not to use insurance, these are our standard self-pay rates.",
      priceLabel: "Rate",
      items: [
        {
          service: "Initial Psychiatric Evaluation",
          details:
            "60-minute comprehensive evaluation with our board-certified PMHNP, including diagnosis and treatment recommendations",
          price: "$300",
        },
        {
          service: "Medication Management Follow-Up",
          details:
            "30-minute follow-up visit for ongoing medication care, including supportive therapy when part of the visit",
          price: "$175",
        },
        {
          service: "Therapy Intake Assessment",
          details:
            "60-minute first session with a Firefly therapist to understand your history, concerns, and goals",
          price: "$200",
        },
        {
          service: "Individual Therapy Session",
          details: "53–60-minute ongoing therapy session",
          price: "$160",
        },
        {
          service: "ADHD Evaluation with T.O.V.A. Testing",
          details:
            "Computer-based attention testing, clinical interpretation, and a review of results with your clinician",
          price: "$300",
        },
        {
          service: "BrainCheck Cognitive Assessment",
          details:
            "Memory and cognitive check-in, with results reviewed by your clinician",
          price: "$125",
        },
        {
          service: "Tempus Genetic Testing",
          details:
            "Pharmacogenomic testing is processed and billed directly by Tempus. We will help you understand your expected cost and any coverage before testing.",
          price: "Billed by Tempus",
        },
      ],
      note: "Rates are subject to change. If you are self-pay or not using insurance, you will receive a Good Faith Estimate of your expected costs before your visit.",
    },
    payment: {
      title: "Payment Information",
      items: [
        {
          title: "Payment at the Time of Service",
          paragraph:
            "Copays and self-pay fees are due at the time of your appointment. We accept major credit and debit cards, including HSA and FSA cards.",
        },
        {
          title: "Out-of-Network Benefits",
          paragraph:
            "If your plan is not listed, you may still be able to use out-of-network benefits. We can provide a superbill you can submit to your insurance company for possible reimbursement.",
        },
        {
          title: "Questions About Your Bill",
          paragraph:
            "If you have questions about coverage, charges, or a statement, contact our office and we will be glad to help.",
        },
      ],
    },
    goodFaith: {
      title: "Your Right to a Good Faith Estimate",
      intro:
        "You have the right to receive a “Good Faith Estimate” explaining how much your medical care will cost. Under the law, health care providers need to give patients who do not have insurance or who are not using insurance an estimate of the bill for medical items and services.",
      items: [
        "You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.",
        "Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.",
        "If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.",
        "Make sure to save a copy or picture of your Good Faith Estimate.",
      ],
      contact:
        "For questions or more information about your right to a Good Faith Estimate, visit www.cms.gov/nosurprises or call 1-800-985-3059.",
    },
    faq: {
      title: "Insurance & Fees FAQ",
      items: [
        {
          question: "Which insurance plans do you accept?",
          answer:
            "We accept Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest, and UnitedHealthcare.",
        },
        {
          question: "What if my insurance is not listed?",
          answer:
            "You can choose self-pay, or you may be able to use out-of-network benefits. We can provide a superbill to submit to your insurance company for possible reimbursement.",
        },
        {
          question: "How much does a psychiatric evaluation cost without insurance?",
          answer:
            "Our self-pay rate for an initial 60-minute psychiatric evaluation is $300. Follow-up medication management visits are $175.",
        },
        {
          question: "How much does ADHD testing cost without insurance?",
          answer:
            "Our self-pay rate for an ADHD evaluation with T.O.V.A. testing, including interpretation and a results review, is $300.",
        },
        {
          question: "Is Tempus genetic testing covered by insurance?",
          answer:
            "Coverage varies by plan. Tempus bills for the test directly, and we will help you understand your expected cost before testing.",
        },
      ],
    },
    closing: {
      title: "Ready to Get Started?",
      paragraph:
        "Whether you are using insurance or paying out of pocket, we will help you understand your costs before your first visit.",
      cta: "Schedule an Appointment",
    },
  },
  es: {
    meta: {
      title: "Seguros y Tarifas de Pago Privado | Firefly Wellness, Hinsdale",
      description:
        "Seguros aceptados en Firefly Wellness en Hinsdale—Cigna, BCBS, Curative, Lyra, Medicare, TriWest y UnitedHealthcare—ademas de tarifas de pago privado para evaluacion psiquiatrica, manejo de medicamentos, terapia y pruebas de TDAH.",
    },
    hero: {
      title: "Seguros y Tarifas",
      subtitle:
        "Informacion clara sobre los seguros que aceptamos y el costo del cuidado si decide pagar por su cuenta—para que pueda enfocarse en recibir el apoyo que necesita.",
      cta: "Programar una cita",
    },
    insurance: {
      title: "Seguros Que Aceptamos",
      paragraph:
        "Firefly Wellness esta dentro de la red de Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare para evaluacion psiquiatrica, manejo de medicamentos, terapia y evaluacion de TDAH.",
      verify:
        "La cobertura, los copagos y los deducibles varian segun el plan. Con gusto le ayudamos a revisar sus beneficios antes de su primera visita.",
    },
    selfPay: {
      title: "Tarifas de Pago Privado",
      intro:
        "Si no tiene seguro, su plan esta fuera de la red o prefiere no usar su seguro, estas son nuestras tarifas estandar de pago privado.",
      priceLabel: "Tarifa",
      items: [
        {
          service: "Evaluacion Psiquiatrica Inicial",
          details:
            "Evaluacion integral de 60 minutos con nuestra PMHNP certificada por la junta, incluyendo diagnostico y recomendaciones de tratamiento",
          price: "$300",
        },
        {
          service: "Seguimiento de Manejo de Medicamentos",
          details:
            "Visita de seguimiento de 30 minutos para el cuidado continuo con medicamentos, incluyendo terapia de apoyo cuando forma parte de la visita",
          price: "$175",
        },
        {
          service: "Evaluacion Inicial de Terapia",
          details:
            "Primera sesion de 60 minutos con un terapeuta de Firefly para comprender su historial, inquietudes y metas",
          price: "$200",
        },
        {
          service: "Sesion de Terapia Individual",
          details: "Sesion de terapia continua de 53 a 60 minutos",
          price: "$160",
        },
        {
          service: "Evaluacion de TDAH con Prueba T.O.V.A.",
          details:
            "Prueba de atencion por computadora, interpretacion clinica y revision de resultados con su clinico",
          price: "$300",
        },
        {
          service: "Evaluacion Cognitiva BrainCheck",
          details:
            "Revision de memoria y cognicion, con resultados revisados por su clinico",
          price: "$125",
        },
        {
          service: "Pruebas Geneticas Tempus",
          details:
            "Las pruebas farmacogenomicas son procesadas y facturadas directamente por Tempus. Le ayudaremos a comprender su costo esperado y cualquier cobertura antes de la prueba.",
          price: "Facturado por Tempus",
        },
      ],
      note: "Las tarifas estan sujetas a cambios. Si paga de forma privada o no usa su seguro, recibira un Presupuesto de Buena Fe de sus costos esperados antes de su visita.",
    },
    payment: {
      title: "Informacion de Pago",
      items: [
        {
          title: "Pago al Momento del Servicio",
          paragraph:
            "Los copagos y las tarifas de pago privado se pagan al momento de su cita. Aceptamos las principales tarjetas de credito y debito, incluidas tarjetas HSA y FSA.",
        },
        {
          title: "Beneficios Fuera de la Red",
          paragraph:
            "Si su plan no aparece en la lista, es posible que pueda usar sus beneficios fuera de la red. Podemos proporcionarle un recibo detallado (superbill) para que lo presente a su compania de seguros y solicite un posible reembolso.",
        },
        {
          title: "Preguntas Sobre Su Factura",
          paragraph:
            "Si tiene preguntas sobre cobertura, cargos o un estado de cuenta, comuniquese con nuestra oficina y con gusto le ayudaremos.",
        },
      ],
    },
    goodFaith: {
      title: "Su Derecho a un Presupuesto de Buena Fe",
      intro:
        "Usted tiene derecho a recibir un “Presupuesto de Buena Fe” que explique cuanto costara su atencion medica. Segun la ley, los proveedores de atencion medica deben entregar a los pacientes que no tienen seguro o que no usan su seguro un estimado de la factura de los articulos y servicios medicos.",
      items: [
        "Usted tiene derecho a recibir un Presupuesto de Buena Fe por el costo total esperado de cualquier articulo o servicio que no sea de emergencia. Esto incluye costos relacionados como pruebas medicas, medicamentos recetados, equipo y cargos de hospital.",
        "Asegurese de que su proveedor de atencion medica le entregue un Presupuesto de Buena Fe por escrito al menos 1 dia habil antes de su servicio o articulo medico. Tambien puede pedir a su proveedor de atencion medica, y a cualquier otro proveedor que elija, un Presupuesto de Buena Fe antes de programar un articulo o servicio.",
        "Si recibe una factura que es al menos $400 mayor que su Presupuesto de Buena Fe, puede disputar la factura.",
        "Asegurese de guardar una copia o foto de su Presupuesto de Buena Fe.",
      ],
      contact:
        "Si tiene preguntas o desea mas informacion sobre su derecho a un Presupuesto de Buena Fe, visite www.cms.gov/nosurprises o llame al 1-800-985-3059.",
    },
    faq: {
      title: "Preguntas Frecuentes Sobre Seguros y Tarifas",
      items: [
        {
          question: "Que seguros aceptan?",
          answer:
            "Aceptamos Cigna, Blue Cross Blue Shield, Curative, Lyra, Medicare, TriWest y UnitedHealthcare.",
        },
        {
          question: "Que pasa si mi seguro no aparece en la lista?",
          answer:
            "Puede elegir pagar de forma privada o usar sus beneficios fuera de la red. Podemos proporcionarle un recibo detallado (superbill) para presentar a su compania de seguros y solicitar un posible reembolso.",
        },
        {
          question: "Cuanto cuesta una evaluacion psiquiatrica sin seguro?",
          answer:
            "Nuestra tarifa de pago privado para una evaluacion psiquiatrica inicial de 60 minutos es de $300. Las visitas de seguimiento de manejo de medicamentos cuestan $175.",
        },
        {
          question: "Cuanto cuesta una prueba de TDAH sin seguro?",
          answer:
            "Nuestra tarifa de pago privado para una evaluacion de TDAH con prueba T.O.V.A., incluyendo interpretacion y revision de resultados, es de $300.",
        },
        {
          question: "El seguro cubre las pruebas geneticas Tempus?",
          answer:
            "La cobertura varia segun el plan. Tempus factura la prueba directamente, y le ayudaremos a comprender su costo esperado antes de la prueba.",
        },
      ],
    },
    closing: {
      title: "Listo para Comenzar?",
      paragraph:
        "Ya sea que use su seguro o pague por su cuenta, le ayudaremos a comprender sus costos antes de su primera visita.",
      cta: "Programar una cita",
    },
  },
};

export function getFeesPageContent(locale: Locale): FeesPageCopy {
  return feesPageContent[locale] ?? feesPageContent.en;
}
