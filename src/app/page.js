import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SolutionsPreview from "@/components/home/SolutionsPreview";
import Industries from "@/components/home/Industries";
import RecentProjects from "@/components/home/RecentProjects";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      
      <Services />
      <WhyChooseUs />
      <SolutionsPreview />
      
      <RecentProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
}