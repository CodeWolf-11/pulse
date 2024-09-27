import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import Testimonial from "@/components/base/Testimonial";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function LandingPage() {

  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col container mx-auto">

      <Navbar user={session?.user} />
      <HeroSection />
      <FeatureSection />
      <Testimonial />
      <Footer />
    </div>
  );
}