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
    name: "Jeannette Sziler",
    credentials: "PMHNP-BC, LCPC",
    subtitle: "Founder, Bilingual Therapist",
    email: "Jeannette@FireflyCounseling.net",
    phone: "779.379.2311",
    imageUrl: "/photos/jeannette-sziler.jpeg",
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
    scheduleUrl: "https://practice.mbpractice.com/OnlineBooking/DoctorBooking?doctorGuid=b7152bef-e82f-4618-bb85-cdfb3f6860b8&divisionId=434",
  },
  {
    id: "2",
    name: "Meghan Tortorici",
    credentials: "LCPC",
    subtitle: "Staff Therapist",
    email: "Meghan@FireflyCounseling.net",
    phone: "708.325.8250",
    imageUrl: "/photos/meghan-tortorici.jpeg",
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
    scheduleUrl: "https://practice.mbpractice.com/OnlineBooking/DoctorBooking?doctorGuid=9e2a908b-2a86-4850-a7a6-75fbbf339524&divisionId=434",
  },
  {
    id: "3",
    name: "Tricia Opperman",
    credentials: "LCSW",
    subtitle: "Staff Therapist",
    email: "Tricia@FireflyCounseling.net",
    phone: "630.294.3909",
    imageUrl: "/photos/tricia-opperman.jpg",
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
    scheduleUrl: "#",
  },
];
