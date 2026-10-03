/**
 * Therapist profiles for the Meet Your Clinicians section.
 * Localized biography copy lives in siteContent.
 */

export type Therapist = {
  id: string;
  name: string;
  credentials: string;
  email: string;
  phone: string;
  imageUrl: string;
  scheduleUrl?: string;
};

export const therapists: Therapist[] = [
  {
    id: "1",
    name: "Jeannette Sziler",
    credentials: "PMHNP-BC, LCPC",
    email: "Jeannette@FireflyCounseling.net",
    phone: "779.379.2311",
    imageUrl: "/photos/jeannette-sziler.jpeg",
    scheduleUrl: "https://practice.mbpractice.com/OnlineBooking/DoctorBooking?doctorGuid=b7152bef-e82f-4618-bb85-cdfb3f6860b8&divisionId=434",
  },
  {
    id: "2",
    name: "Meghan Tortorici",
    credentials: "LCPC",
    email: "Meghan@FireflyCounseling.net",
    phone: "708.325.8250",
    imageUrl: "/photos/meghan-tortorici.jpeg",
    scheduleUrl: "https://practice.mbpractice.com/OnlineBooking/DoctorBooking?doctorGuid=9e2a908b-2a86-4850-a7a6-75fbbf339524&divisionId=434",
  },
  {
    id: "3",
    name: "Tricia Opperman",
    credentials: "LCSW",
    email: "Tricia@FireflyCounseling.net",
    phone: "630.294.3909",
    imageUrl: "/photos/tricia-opperman.jpg",
    scheduleUrl: "#",
  },
];
