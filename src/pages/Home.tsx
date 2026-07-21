import SEO from "../components/ui/SEO";
import Hero from "../sections/home/Hero";
import ServicesPreview from "../sections/home/ServicesPreview";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import BeforeAfter from "../sections/home/BeforeAfter";
import Gallery from "../sections/home/Gallery";
import Testimonials from "../sections/home/Testimonials";
import CTA from "../sections/home/CTA";

export default function Home() {
  return (
    <>
      <SEO
        title="Fast, Reliable, Eco-Friendly Junk Removal"
        description="Britos Junk removes furniture, appliances, construction debris and full property cleanouts — fast, licensed, insured, and eco-friendly. Book same-day service."
        path="/"
      />

      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <BeforeAfter
        beforeImage="https://upupandawayjunk.com/wp-content/uploads/2024/09/IMG_1637-3-2.jpg"
        afterImage="https://upupandawayjunk.com/wp-content/uploads/2024/09/IMG_1639-2-4.jpg"
      />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
}
