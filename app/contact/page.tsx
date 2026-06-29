import Header from "@/components/layout/header";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/common/FloatingContact";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <MapSection />
        <CTASection />
        <FloatingContact />
      </main>

      <Footer />
    </>
  );
}