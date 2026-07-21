export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const BUSINESS = {
  name: "Britos Junk",
  phoneDisplay: "(555) 018-2947",
  phoneHref: "+15550182947",
  whatsappHref: "https://wa.me/15550182947",
  email: " britosjunk@icloud.com",
  addressLine: "Serving the greater metro area",
  hours: [
    { day: "Mon – Fri", time: "7:00 AM – 8:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "9:00 AM – 4:00 PM" },
  ],
};
