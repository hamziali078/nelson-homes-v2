import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import TrustBar from "@/components/home/TrustBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import BuyingProcess from "@/components/home/BuyingProcess";
import ConstructionQuality from "@/components/home/ConstructionQuality";
import FounderSection from "@/components/home/FounderSection";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/Faq";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/common/FloatingContact";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <FeaturedProjects />
      <BuyingProcess />
      <ConstructionQuality />
      <FounderSection />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingContact />
    </>
  );
}