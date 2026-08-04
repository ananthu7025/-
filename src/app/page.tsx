import Navbar from "@/components/Navbar";
import HeroScrollytelling from "@/components/hero-sequence/HeroScrollytelling";
import WhyPlaneProp from "@/components/WhyPlaneProp";
import Community from "@/components/Community";
import StudentLetters from "@/components/StudentLetters";
import Mentorship from "@/components/Mentorship";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#FBFAF6]">
        <HeroScrollytelling />
        <div className="max-w-[1280px] mx-auto overflow-x-hidden">
          <WhyPlaneProp />
          <Community />
          <StudentLetters />
          <Mentorship />
          <Newsletter />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
