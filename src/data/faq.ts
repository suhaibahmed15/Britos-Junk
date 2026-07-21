export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How fast can you get to me?",
    answer:
      "Most requests are dispatched same-day or next-day. Once you book, you'll get a two-hour arrival window and a text when the crew is on the way.",
  },
  {
    question: "Do I need to move anything before you arrive?",
    answer:
      "No. Point to what's leaving and the crew handles the lifting, carrying, and loading — inside the home, garage, or yard.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on how much space your items take up in the truck, not a flat per-item fee. You'll get a firm quote on-site before anything is loaded — no surprises on the invoice.",
  },
  {
    question: "What happens to my junk after pickup?",
    answer:
      "Items in good condition are routed to local donation partners, metal and e-waste go to certified recyclers, and only what can't be diverted goes to disposal. We track diversion on every job.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes — Britos Junk is fully licensed and insured for residential and commercial removal, including liability coverage for on-site work.",
  },
  {
    question: "Can you remove items from a basement or upstairs unit?",
    answer:
      "Yes. Stairs, tight hallways, and multi-level pickups are part of the standard service — just flag it when you book so the crew comes prepared.",
  },
  {
    question: "Do you handle hazardous materials?",
    answer:
      "We remove appliances containing refrigerant safely and to code. For paint, chemicals, and other regulated hazardous waste, we'll point you to the correct local disposal facility.",
  },
];
