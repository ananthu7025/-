"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Users, BookOpen, Calendar, Check, ArrowRight, ArrowUpRight, Search, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  const cloverPetals = [
    {
      num: "01",
      title: "Connect",
      desc: "Meet fellow aviators, join regional pilot hubs, and share flight logs.",
      bgClass: "bg-[#FAF5E6] border-[#F2DFAC]", // Pale Warm Yellow
      icon: MessageSquare,
      position: "top-left",
    },
    {
      num: "02",
      title: "Mentor",
      desc: "Get matched with experienced Captains for direct 1-on-1 guidance.",
      bgClass: "bg-[#EEF4F0] border-[#D4E5D9]", // Pale Green
      icon: Users,
      position: "top-right",
    },
    {
      num: "03",
      title: "Collab",
      desc: "Form study groups for DGCA ground classes & mock oral prep.",
      bgClass: "bg-[#F3EFF8] border-[#DFD3EC]", // Pale Purple
      icon: BookOpen,
      position: "bottom-left",
    },
    {
      num: "04",
      title: "Events",
      desc: "Weekly webinars, live Q&As, and virtual hangar meetup logs.",
      bgClass: "bg-[#ECF3F6] border-[#D1E2EA]", // Pale Blue
      icon: Calendar,
      position: "bottom-right",
    },
  ];

  const valueStrip = [
    {
      title: "Exam-Focused Learning",
      desc: "DGCA exams, interview prep & concept clarity.",
      icon: "/assets/icon-mentorship.png",
    },
    {
      title: "Community Support",
      desc: "Learn with peers, ask questions, grow together.",
      icon: "/assets/icon-community.png",
    },
    {
      title: "Structured Study Path",
      desc: "Step-by-step guidance from zero to cockpit.",
      icon: "/assets/icon-resources.png",
    },
    {
      title: "Resources & Tools",
      desc: "Notes, calculators, charts & always updated.",
      icon: "/assets/icon-career.png",
    },
  ];

  const communityHubs = [
    {
      title: "Accident & Crash Investigation Logs",
      members: "Analyze real reports",
      topics: ["Crash Analysis", "NTSB Breakdowns", "Safety Lessons"],
      accentBg: "bg-[#FBEBE8] text-[#F2542D]",
      slug: "accident-investigations",
      description: "Deconstruct real plane crashes and incident logs to learn invaluable cockpit safety habits.",
      image: "https://images.unsplash.com/photo-1508847154043-be12a927dfa8?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Old Pilots & Vintage Tales",
      members: "Aviation lore & history",
      topics: ["Taildragger Wisdom", "Veteran Lore", "Flight Logs"],
      accentBg: "bg-[#FAF5E6] text-[#D7A640]",
      slug: "veteran-wisdom",
      description: "Real stories and flight deck wisdom passed down from generations of veteran pilots.",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Emergency Decision Drills",
      members: "Interactive scenario practice",
      topics: ["Engine Out", "Microbursts", "Go-Around Decision"],
      accentBg: "bg-[#EEF4F0] text-[#4F8B64]",
      slug: "critical-scenarios",
      description: "Study structural failures, weather hazards, and high-pressure situations to improve decision making.",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Ground Theory Discussion",
      members: "One unified board",
      topics: ["Aerodynamics", "Systems", "Regulations QA"],
      accentBg: "bg-[#ECF3F6] text-[#2B6CB0]",
      slug: "ground-theory",
      description: "Ask questions, share advice, and explore technical aviation concepts with peers.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="w-full bg-[#FBFAF6] pt-20 overflow-x-hidden min-h-screen">
        
        {/* Clover Hero Section */}
        <section className="relative py-16 lg:py-24 border-b border-[#F3EFE8] overflow-hidden">
          {/* Background SVGs / Dotted Paths */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="absolute w-full h-full text-[#D7A640] opacity-40" fill="none" viewBox="0 0 1440 800" preserveAspectRatio="none">
              {/* Left to center loop */}
              <path d="M -50,400 C 150,300 250,550 450,400 C 650,250 550,600 700,500" stroke="currentColor" strokeWidth="1.5" className="dotted-path" />
              {/* Right side flourish */}
              <path d="M 1500,200 C 1300,300 1200,100 1000,350 C 850,500 950,650 720,520" stroke="currentColor" strokeWidth="1.5" className="dotted-path" />
            </svg>
            
            {/* Tiny paper airplanes in flight */}
            <div className="absolute left-[35%] top-[18%] w-10 h-10 opacity-70 rotate-[45deg] text-[#D7A640]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M0,10 L24,3 L13,14 Z" />
              </svg>
            </div>
            <div className="absolute right-[15%] top-[30%] w-12 h-12 opacity-80 -rotate-[30deg] text-[#D7A640]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Copy (Left 5 Cols) */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs font-bold tracking-wider text-[#F2542D] uppercase bg-[#F2542D]/10 px-3 py-1 rounded-full">
                    Join the digital hangar
                  </span>
                  <h1 className="text-5xl lg:text-6xl font-serif text-[#111111] leading-tight">
                    One Destination.
                    <br />
                    Every Step.
                    <br />
                    <span className="relative inline-block">
                      Your Crew.
                      <span className="absolute bottom-1.5 left-0 w-full h-[6px] bg-[#F2542D]/20 rounded-full" />
                    </span>
                  </h1>
                  <p className="text-sm md:text-base text-[#5B5B5B] leading-relaxed font-light max-w-md">
                    Your all-in-one flight co-pilot for pilot training, DGCA exams, and aviation interviews. Learn, grow, and fly together.
                  </p>
                </div>

                {/* Hero CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="#hubs"
                    className="premium-btn bg-[#111111] text-white hover:bg-[#D7A640] flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Explore Spaces</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#newsletter"
                    className="px-6 py-3.5 text-sm font-medium text-[#111111] hover:text-[#D7A640] transition-colors flex items-center gap-2"
                  >
                    <span>Browse Weekly Log</span>
                  </Link>
                </div>

                {/* Social Proof Stats */}
                <div className="pt-6 border-t border-[#EAE6DF]/60 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#111111] font-sans">15,000+</div>
                    <div className="text-[11px] text-[#5B5B5B] font-light">Aspiring Pilots</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#111111] font-sans">4.9/5</div>
                    <div className="text-[11px] text-[#5B5B5B] font-light">Member Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#111111] font-sans">100%</div>
                    <div className="text-[11px] text-[#5B5B5B] font-light">Free Access</div>
                  </div>
                </div>
              </div>

              {/* Clover Layout (Right 7 Cols) */}
              <div className="lg:col-span-7 flex items-center justify-center relative min-h-[500px] sm:min-h-[600px] w-full">
                
                {/* Outer wrapper to scale/contain the clover petals */}
                <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] transition-transform duration-300">
                  
                  {/* Petal 1: Top-Left (Yellow) */}
                  <div className="absolute top-0 left-0 w-[48%] h-[48%] bg-[#FAF5E6] border border-[#F2DFAC] rounded-t-[140px] rounded-bl-[140px] rounded-br-[30px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 group">
                    <div className="flex justify-between items-start">
                      <span className="text-xs sm:text-sm font-bold text-[#D7A640] font-sans">01</span>
                      <div className="w-8 h-8 rounded-full bg-[#D7A640]/10 flex items-center justify-center text-[#D7A640]">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-1">Connect</h3>
                      <p className="text-[10px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Meet fellow aviators, join regional pilot hubs, and share flight logs.
                      </p>
                    </div>
                  </div>

                  {/* Petal 2: Top-Right (Green) */}
                  <div className="absolute top-0 right-0 w-[48%] h-[48%] bg-[#EEF4F0] border border-[#D4E5D9] rounded-t-[140px] rounded-br-[140px] rounded-bl-[30px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 group">
                    <div className="flex justify-between items-start">
                      <span className="text-xs sm:text-sm font-bold text-[#4F8B64] font-sans">02</span>
                      <div className="w-8 h-8 rounded-full bg-[#4F8B64]/10 flex items-center justify-center text-[#4F8B64]">
                        <Users className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-1">Mentor</h3>
                      <p className="text-[10px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Get matched with experienced Captains for direct 1-on-1 guidance.
                      </p>
                    </div>
                  </div>

                  {/* Petal 3: Bottom-Left (Purple) */}
                  <div className="absolute bottom-0 left-0 w-[48%] h-[48%] bg-[#F3EFF8] border border-[#DFD3EC] rounded-b-[140px] rounded-tl-[140px] rounded-tr-[30px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1 hover:translate-y-1 group">
                    <div className="flex justify-between items-start">
                      <span className="text-xs sm:text-sm font-bold text-[#805AD5] font-sans">03</span>
                      <div className="w-8 h-8 rounded-full bg-[#805AD5]/10 flex items-center justify-center text-[#805AD5]">
                        <BookOpen className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-1">Collab</h3>
                      <p className="text-[10px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Form study groups for DGCA ground classes & mock oral prep.
                      </p>
                    </div>
                  </div>

                  {/* Petal 4: Bottom-Right (Blue) */}
                  <div className="absolute bottom-0 right-0 w-[48%] h-[48%] bg-[#ECF3F6] border border-[#D1E2EA] rounded-b-[140px] rounded-tr-[140px] rounded-tl-[30px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1 hover:translate-y-1 group">
                    <div className="flex justify-between items-start">
                      <span className="text-xs sm:text-sm font-bold text-[#2B6CB0] font-sans">04</span>
                      <div className="w-8 h-8 rounded-full bg-[#2B6CB0]/10 flex items-center justify-center text-[#2B6CB0]">
                        <Calendar className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-1">Events</h3>
                      <p className="text-[10px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Weekly webinars, live Q&As, and virtual hangar meetup logs.
                      </p>
                    </div>
                  </div>

                  {/* Center Circle Brand Logo */}
                  <div className="absolute inset-[40%] rounded-full bg-white border border-[#EAE6DF] flex items-center justify-center shadow-lg z-20 group">
                    <div className="w-10 h-10 relative text-[#111111] group-hover:scale-110 transition-transform duration-300">
                      {/* Simple Airplane Logo Icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full -rotate-12">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
                      </svg>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Feature / Value Strip Container */}
        <section className="relative py-12 bg-[#FBFAF6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="bg-white border border-[#EAE6DF] rounded-[24px] p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-[#EAE6DF]/60">
              {valueStrip.map((item, idx) => (
                <div key={item.title} className={`flex items-start gap-4 ${idx > 0 ? "lg:pl-6" : ""} pt-6 md:pt-0`}>
                  <div className="w-10 h-10 relative flex-shrink-0 bg-[#FAF6EE] rounded-full p-2">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className="object-contain p-1.5 mix-blend-multiply"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-[#111111]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5B5B5B] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Communities Section */}
        <section id="hubs" className="py-20 lg:py-28 bg-[#FBFAF6] border-b border-[#F3EFE8]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            {/* Grid Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-wider text-[#F2542D] uppercase">
                  Community Logs & Learning
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#111111] leading-tight">
                  Educational files in the hangar
                </h2>
              </div>
              <div className="text-sm text-[#5B5B5B] font-light max-w-sm">
                No divided hubs or gated access. Step into our unified community repository filled with accident report teardowns, seasoned pilot wisdom, and emergency checklists.
              </div>
            </div>

            {/* Hubs Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityHubs.map((hub) => (
                <div
                  key={hub.title}
                  className="bg-white border border-[#EAE6DF] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
                >
                  <div>
                    {/* Visual Preview Image */}
                    <div className="relative w-full h-48 sm:h-56 bg-[#FAF6EE] overflow-hidden">
                      <Image
                        src={hub.image}
                        alt={hub.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                      <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${hub.accentBg} backdrop-blur-md bg-opacity-90 shadow-sm`}>
                        {hub.members}
                      </span>
                    </div>

                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-serif text-[#111111] group-hover:text-[#F2542D] transition-colors leading-tight">
                        {hub.title}
                      </h3>

                      <p className="text-xs text-[#5B5B5B] font-light leading-relaxed">
                        {hub.description}
                      </p>
                      
                      {/* Topics tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {hub.topics.map((t) => (
                          <span key={t} className="text-xs text-[#5B5B5B] bg-[#FBFAF6] border border-[#EAE6DF] rounded-md px-2.5 py-1">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mx-8 mb-8 pt-6 border-t border-[#EAE6DF]/60 flex items-center justify-between">
                    <span className="text-xs text-[#5B5B5B] font-light">Accident analysis & pilot logs</span>
                    <button className="text-xs font-bold text-[#111111] group-hover:text-[#F2542D] transition-colors flex items-center gap-1.5">
                      <span>View Log Files</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Community Newsletter Signup (Dark banner) */}
        <section id="newsletter" className="py-20 bg-[#FBFAF6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="bg-[#0B1528] rounded-[32px] p-8 md:p-12 lg:p-16 text-white relative overflow-hidden max-w-5xl mx-auto">
              
              {/* Decorative flight loop on dark background */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg className="w-full h-full text-white" fill="none" viewBox="0 0 1000 400">
                  <path d="M 100 200 Q 500 50 900 200" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-semibold tracking-wider text-[#D7A640] uppercase">
                    Stay in the loop
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                    Get weekly aviation insights
                    <br />
                    straight to your inbox.
                  </h2>
                  <p className="text-sm text-gray-300 font-light max-w-md">
                    Checkrides logs, expert tips, regional job alerts, and community spotlight stories delivered every Saturday morning.
                  </p>
                </div>

                {/* Inline form */}
                <div className="lg:col-span-5 w-full">
                  <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white rounded-full p-1.5 shadow-sm">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="flex-1 bg-transparent text-[#111111] placeholder:text-[#5B5B5B]/50 px-4 py-2 text-sm focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#D7A640] hover:bg-[#C59530] text-[#111111] font-bold rounded-full p-3 transition-colors flex items-center justify-center"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="text-[10px] text-gray-400 mt-3 pl-3 font-light">
                    Join 2,500+ aviators. No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
