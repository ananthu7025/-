import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <main className="flex-1 w-full max-w-[1280px] mx-auto bg-[#FBFAF6] overflow-x-hidden">
        <Hero />
        <WhyPlaneProp />
        <Community />
        <StudentLetters />
        <Mentorship />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
