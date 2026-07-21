export interface Service {
  code: string;
  title: string;
  description: string;
  weightNote: string;
  image: string;
}

export const services: Service[] = [
  {
    code: "FRN",
    image: "https://tse3.mm.bing.net/th/id/OIP.r1L8YLQZ3pxtGnBQL976NgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/640/480",
    title: "Furniture Removal",
    description: "Sofas, sectionals, mattresses, and bed frames hauled out same day — no lifting required on your end.",
    weightNote: "avg. 180–600 lb load",
  },
  {
    code: "APP",
    image: "https://tse3.mm.bing.net/th/id/OIP.RQBtXQjtCebTPXt9XSjTrgHaD6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/640/480",
    title: "Appliance Removal",
    description: "Fridges, washers, dryers, and units freed of refrigerant and routed to certified recyclers.",
    weightNote: "avg. 150–400 lb load",
  },
  {
    code: "GAR",
    image: "https://tse1.mm.bing.net/th/id/OIP.s9cKMxU2FiVEWA52mE4sJAHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/640/480",
    title: "Garage Cleanouts",
    description: "From tools to tires — we clear it, sweep it, and hand the space back to you.",
    weightNote: "avg. 1–3 truckloads",
  },
  {
    code: "EST",
    image: "https://tse4.mm.bing.net/th/id/OIP.E3iRUKkjzsjyApaDwNB8swHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/640/480",
    title: "Estate Cleanouts",
    description: "Respectful, full-property clearing with sorting for donation, family keepsakes, and disposal.",
    weightNote: "whole-property scope",
  },
  {
    code: "HSE",
    image: "https://images.squarespace-cdn.com/content/v1/5f84d9c3f6a12b7fcb93b479/1611308799491-GRY6ASZCLQVQC38DHPB2/property+cleanout-services.jpg",
    title: "House Cleanouts",
    description: "Move-outs, foreclosures, and hoarding cleanups handled with discretion and speed.",
    weightNote: "whole-property scope",
  },
  {
    code: "OFC",
    image: "https://thejunkpros.com/wp-content/uploads/2015/03/Office-Cleanout11.png",
    title: "Office Cleanouts",
    description: "Desks, cubicles, e-waste, and old signage removed on your schedule, including after hours.",
    weightNote: "flexible dispatch window",
  },
  {
    code: "CON",
    image: "https://tse4.mm.bing.net/th/id/OIP.6nII4rPDgf1VmEw-kjfhqQHaEN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/640/480",
    title: "Construction Debris",
    description: "Drywall, lumber, tile, and mixed C&D waste cleared from active job sites.",
    weightNote: "avg. 1,000+ lb load",
  },
  {
    code: "MAT",
    image: "https://tse1.mm.bing.net/th/id/OIP.A7OwFW-F5kcK9x4V-2J0TwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/640/480",
    title: "Mattress Removal",
    description: "Single mattress or a stack of twenty — bagged, hauled, and diverted from landfill where possible.",
    weightNote: "avg. 60–90 lb / unit",
  },
  {
    code: "TUB",
    image: "https://tse4.mm.bing.net/th/id/OIP.UPyNAfOZM8-ipfM05Hi6JQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Hot Tub Removal",
    description: "Draining, dismantling, and disposal of hot tubs and spas — including the deck-side ones.",
    weightNote: "avg. 400–800 lb",
  },
];
