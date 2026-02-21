/**
 * Therapist profiles for the Meet Your Therapists section.
 * Update imageUrl, aboutMe, and aboutMeBullets with real content.
 */

export type Therapist = {
  id: string;
  name: string;
  credentials: string;
  subtitle?: string;
  email: string;
  phone: string;
  imageUrl: string;
  aboutMe: string[];
  aboutMeBullets?: string[];
  scheduleUrl?: string;
};

export const therapists: Therapist[] = [
  {
    id: "1",
    name: "Jordan Blake",
    credentials: "PMHNP",
    subtitle: "Psychiatric-Mental Health Nurse Practitioner",
    email: "jordan.blake@example.com",
    phone: "(555) 123-4567",
    imageUrl: "",
    aboutMe: [
      "Jordan is a board-certified Psychiatric-Mental Health Nurse Practitioner with over eight years of experience supporting adults and adolescents through anxiety, depression, and life transitions.",
      "They believe in a collaborative, evidence-based approach and work to create a safe space where you can explore challenges and build on your strengths.",
    ],
    aboutMeBullets: [
      "Board-certified PMHNP",
      "Special interest in anxiety and mood disorders",
      "Integrates therapy and medication when appropriate",
    ],
    scheduleUrl: "#",
  },
  {
    id: "2",
    name: "Sam Rivera",
    credentials: "LCSW",
    subtitle: "Licensed Clinical Social Worker",
    email: "sam.rivera@example.com",
    phone: "(555) 234-5678",
    imageUrl: "",
    aboutMe: [
      "Sam brings a warm, person-centered approach to therapy with a focus on trauma-informed care and attachment. They have worked in outpatient and community settings for over six years.",
      "Sam is passionate about helping clients navigate relationship issues, identity, and life transitions while building lasting coping skills.",
    ],
    aboutMeBullets: [
      "LCSW, MSW",
      "Trauma-informed and attachment-focused",
      "Adults and adolescents",
    ],
    scheduleUrl: "#",
  },
  {
    id: "3",
    name: "Morgan Chen",
    credentials: "PhD, LP",
    subtitle: "Licensed Psychologist",
    email: "morgan.chen@example.com",
    phone: "(555) 345-6789",
    imageUrl: "",
    aboutMe: [
      "Morgan is a licensed psychologist specializing in cognitive behavioral therapy (CBT) and mindfulness-based interventions for anxiety, depression, and chronic stress.",
      "They value a collaborative, goal-oriented approach and enjoy helping clients develop practical strategies for lasting change.",
    ],
    aboutMeBullets: [
      "PhD in Clinical Psychology",
      "CBT and mindfulness-based approaches",
      "Evidence-based practice",
    ],
    scheduleUrl: "#",
  },
];
