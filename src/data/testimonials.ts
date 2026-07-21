export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marina T.",
    location: "Riverside Heights",
    rating: 5,
    quote:
      "Crew called ahead, showed up on time, and had the old sectional and two mattresses out in under twenty minutes. Left the hallway cleaner than they found it.",
    service: "Furniture Removal",
  },
  {
    name: "Daniel O.",
    location: "Westgate",
    rating: 5,
    quote:
      "Used them for a full estate cleanout after my father passed. They were patient, careful with anything that looked sentimental, and handled the rest without me having to ask twice.",
    service: "Estate Cleanout",
  },
  {
    name: "Priya S.",
    location: "Northfield",
    rating: 5,
    quote:
      "Booked same-day for a fridge and washer pickup before movers arrived. Text updates the whole way, and pricing matched the estimate exactly.",
    service: "Appliance Removal",
  },
  {
    name: "Carlos M.",
    location: "Harbor District",
    rating: 5,
    quote:
      "Our site had two dumpsters of mixed C&D debris blocking the loading dock. Gone by end of day, and they swept the area before leaving.",
    service: "Construction Debris",
  },
];
