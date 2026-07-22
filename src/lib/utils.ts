export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const BUSINESS = {
  name: "Britos Junk",
  phoneDisplay: "(786) 431-6282",
  phoneHref: "+17864316282",
  whatsappHref: "https://wa.me/17864316282",
  email: " britosjunk@icloud.com",
  addressLine: "Lehigh acres, florida",
  hours: [
    { day: "Mon – Fri", time: "7:00 AM – 8:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "9:00 AM – 4:00 PM" },
  ],
};
