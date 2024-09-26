import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import Testimonial from "@/components/base/Testimonial";
export default async function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col container mx-auto">

      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Testimonial />
      <Footer />
    </div>
  );
}