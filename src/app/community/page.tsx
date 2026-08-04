"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Users, 
  BookOpen, 
  Calendar, 
  Check, 
  ArrowRight, 
  ArrowUpRight,
  Share2, 
  Bookmark, 
  ArrowBigUp, 
  ArrowBigDown, 
  Award, 
  ShieldAlert, 
  ChevronUp, 
  HelpCircle,
  Play,
  ArrowLeft
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Post {
  id: string;
  title: string;
  subreddit: string;
  author: string;
  timeAgo: string;
  description: string;
  image: string;
  upvotes: number;
  commentsCount: number;
  userVote: "up" | "down" | null;
  topics: string[];
}

export default function CommunityPage() {
  const revealContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const reelsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth - 10);
      const canScrollLeft = container.scrollLeft > 10;

      if (e.deltaY > 0 && canScrollRight) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 0.85;
      } else if (e.deltaY < 0 && canScrollLeft) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 0.85;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const words = revealContainerRef.current?.querySelectorAll(".reveal-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.15, color: "#a1a1aa" },
          {
            opacity: 1,
            color: "#111111",
            stagger: 0.1,
            scrollTrigger: {
              trigger: revealContainerRef.current,
              start: "top 80%",
              end: "bottom 55%",
              scrub: true,
            },
          }
        );
      }
    };
    initGsap();
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "NTSB Case Study: Learning from flight 451's microburst encounter",
      subreddit: "h/accident-logs",
      author: "u/safety_officer",
      timeAgo: "3 hours ago",
      description: "Breaking down the flight data recorder logs to analyze why the crew delayed the go-around decision during windshear conditions. A vital reminder on reactive cockpit habits.",
      image: "https://images.unsplash.com/photo-1508847154043-be12a927dfa8?auto=format&fit=crop&q=80&w=600",
      upvotes: 342,
      commentsCount: 64,
      userVote: null,
      topics: ["AccidentAnalysis", "NTSBLogs", "SafetyFirst"],
    },
    {
      id: "2",
      title: "What a Boeing 707 captain taught me about tailwinds and trim",
      subreddit: "h/veteran-wisdom",
      author: "u/taildragger_joe",
      timeAgo: "6 hours ago",
      description: "Back in 1978, we were flying a classic jet into a short strip with a gusty tailwind. Joe looked at me, adjusted the trim, and shared a piece of wisdom on airspeed margin that I still use today.",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=600",
      upvotes: 512,
      commentsCount: 89,
      userVote: null,
      topics: ["TaildraggerWisdom", "VeteranLore", "FlightLogs"],
    },
    {
      id: "3",
      title: "Engine failure at V1 speed: Would you continue or abort?",
      subreddit: "h/critical-scenarios",
      author: "u/checklist_check",
      timeAgo: "12 hours ago",
      description: "Here is the scenario: You are at V1 speed, maximum takeoff weight, runway is wet. Engine 1 surges. Let's debate the reaction steps according to standard crew coordination rules.",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600",
      upvotes: 289,
      commentsCount: 112,
      userVote: null,
      topics: ["EngineOut", "Microbursts", "GoAroundDecision"],
    },
    {
      id: "4",
      title: "Easy way to calculate crosswind component without a flight computer",
      subreddit: "h/ground-theory",
      author: "u/ground_school_pro",
      timeAgo: "1 day ago",
      description: "Here is the quick rule of thumb for crosswind calculation: if the wind angle is 30 degrees off, it's 50% of wind speed; if 45 degrees, it's 70%; and if 60 degrees or more, count the full velocity.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600",
      upvotes: 198,
      commentsCount: 45,
      userVote: null,
      topics: ["Aerodynamics", "Systems", "RegulationsQA"],
    },
  ]);

  const cloverPetals = [
    {
      num: "01",
      title: "Connect",
      desc: "Meet fellow aviators, join regional pilot hubs, and share flight logs.",
      bgClass: "bg-[#FAF5E6] border-[#F2DFAC]",
      icon: MessageSquare,
      position: "top-left",
    },
    {
      num: "02",
      title: "Mentor",
      desc: "Get matched with experienced Captains for direct 1-on-1 guidance.",
      bgClass: "bg-[#EEF4F0] border-[#D4E5D9]",
      icon: Users,
      position: "top-right",
    },
    {
      num: "03",
      title: "Collab",
      desc: "Form study groups for DGCA ground classes & mock oral prep.",
      bgClass: "bg-[#F3EFF8] border-[#DFD3EC]",
      icon: BookOpen,
      position: "bottom-left",
    },
    {
      num: "04",
      title: "Events",
      desc: "Weekly webinars, live Q&As, and virtual hangar meetup logs.",
      bgClass: "bg-[#ECF3F6] border-[#D1E2EA]",
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

  const handleVote = (id: string, type: "up" | "down") => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id !== id) return post;

        let diff = 0;
        let newVote: "up" | "down" | null = type;

        if (post.userVote === type) {
          diff = type === "up" ? -1 : 1;
          newVote = null;
        } else if (post.userVote === null) {
          diff = type === "up" ? 1 : -1;
        } else {
          diff = type === "up" ? 2 : -2;
        }

        return {
          ...post,
          upvotes: post.upvotes + diff,
          userVote: newVote,
        };
      })
    );
  };

  return (
    <>
      <Navbar />

      <main className="w-full bg-[#FBFAF6] pt-20 overflow-x-hidden min-h-screen">
        
        {/* Clover Hero Section */}
        <section className="relative py-16 lg:py-24 border-b border-[#F3EFE8] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="absolute w-full h-full text-[#D7A640] opacity-40" fill="none" viewBox="0 0 1440 800" preserveAspectRatio="none">
              <path d="M -50,400 C 150,300 250,550 450,400 C 650,250 550,600 700,500" stroke="currentColor" strokeWidth="1.5" className="dotted-path" />
              <path d="M 1500,200 C 1300,300 1200,100 1000,350 C 850,500 950,650 720,520" stroke="currentColor" strokeWidth="1.5" className="dotted-path" />
            </svg>
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
              
              {/* Hero Copy */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs font-bold tracking-wider text-[#F2542D] uppercase bg-[#F2542D]/10 px-3 py-1 rounded-full">
                    Tune in to Hangar Frequency
                  </span>
                  <h1 className="text-5xl lg:text-6xl font-serif text-[#111111] leading-tight">
                    One Hangar.
                    <br />
                    No separated channels.
                    <br />
                    <span className="relative inline-block">
                      Just your crew.
                      <span className="absolute bottom-1.5 left-0 w-full h-[6px] bg-[#F2542D]/20 rounded-full" />
                    </span>
                  </h1>
                  <p className="text-sm md:text-base text-[#5B5B5B] leading-relaxed font-light max-w-md">
                    The ultimate aviation clubhouse for student pilots, CPL aspirants, and sky nerds. Share checkride debriefs, cockpit instrument notes, and ATC mission logs daily.
                  </p>
                </div>

                {/* Hero CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="#feed"
                    className="premium-btn bg-[#111111] text-white hover:bg-[#D7A640] flex items-center gap-2 group cursor-pointer"
                  >
                    <span>View Hangar Feed</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#newsletter"
                    className="px-6 py-3.5 text-sm font-medium text-[#111111] hover:text-[#D7A640] transition-colors flex items-center gap-2"
                  >
                    <span>Browse Weekly Log</span>
                  </Link>
                </div>

                {/* Stats */}
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

              {/* Clover Layout */}
              <div className="lg:col-span-7 flex items-center justify-center relative min-h-[500px] sm:min-h-[600px] w-full">
                <motion.div
                  initial={{ rotate: -720, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px]"
                >
                  
                  {/* Petal 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -40, y: -40 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.04, zIndex: 30 }}
                    className="absolute top-0 left-0 w-[49.5%] h-[49.5%] bg-[#FAF5E6] border border-[#F2DFAC] rounded-[120px_120px_50px_120px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#D7A640]/10 flex items-center justify-center text-[#D7A640] mb-3 group-hover:rotate-[15deg] transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 max-w-[90%]">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">Learn</h3>
                      <p className="text-[11px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        DGCA classes, concepts, notes and more.
                      </p>
                    </div>
                  </motion.div>

                  {/* Petal 2 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 40, y: -40 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.04, zIndex: 30 }}
                    className="absolute top-0 right-0 w-[49.5%] h-[49.5%] bg-[#EEF4F0] border border-[#D4E5D9] rounded-[120px_120px_120px_50px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#4F8B64]/10 flex items-center justify-center text-[#4F8B64] mb-3 group-hover:rotate-[-15deg] transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 max-w-[90%]">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">Prepare</h3>
                      <p className="text-[11px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Mock interviews, HR & PI sessions, guidance.
                      </p>
                    </div>
                  </motion.div>

                  {/* Petal 3 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -40, y: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    whileHover={{ scale: 1.04, zIndex: 30 }}
                    className="absolute bottom-0 left-0 w-[49.5%] h-[49.5%] bg-[#F3EFF8] border border-[#DFD3EC] rounded-[120px_50px_120px_120px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#805AD5]/10 flex items-center justify-center text-[#805AD5] mb-3 group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 max-w-[90%]">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">Grow</h3>
                      <p className="text-[11px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Community support, mentorship, peer learning.
                      </p>
                    </div>
                  </motion.div>

                  {/* Petal 4 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 40, y: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.04, zIndex: 30 }}
                    className="absolute bottom-0 right-0 w-[49.5%] h-[49.5%] bg-[#ECF3F6] border border-[#D1E2EA] rounded-[50px_120px_120px_120px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#2B6CB0]/10 flex items-center justify-center text-[#2B6CB0] mb-3 group-hover:translate-y-[-2px] transition-transform">
                      {/* Briefcase/Suitcase Icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                      </svg>
                    </div>
                    <div className="space-y-1 max-w-[90%]">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">Stay Ahead</h3>
                      <p className="text-[11px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Newsletters, resources, career insights.
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.6 }}
                    className="absolute inset-[38%] rounded-full bg-white border border-[#EAE6DF] flex items-center justify-center shadow-lg z-20 group cursor-pointer animate-float"
                  >
                    <div className="w-10 h-10 relative text-[#111111] group-hover:scale-110 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full -rotate-12">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* GSAP Scroll-Driven Text Reveal Section */}
        <section ref={revealContainerRef} className="relative py-28 md:py-36 bg-[#FBFAF6] overflow-hidden border-b border-[#F3EFE8]/60">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#F2542D] uppercase block">
              About Our Community
            </span>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#111111] leading-tight tracking-tight font-medium">
                {("A collective hangar where student aviators, private pilots, and veteran captains share real crash investigations, flight theory logs, and veteran lore. No separated channels, no gatekeepers. Just a single united space designed to make you a safer, more competent pilot.")
                  .split(" ")
                  .map((word, idx) => (
                    <span key={idx} className="reveal-word inline-block mr-[0.25em]">
                      {word}
                    </span>
                  ))}
              </h2>
            </div>
          </div>
        </section>

        {/* Feature / Value Strip */}
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

        {/* Immersive Horizontal Scrolling Feed Section */}
        <section id="feed" className="py-20 lg:py-24 bg-[#F2EFE8]/30 border-b border-[#F3EFE8] overflow-hidden flex flex-col justify-center">
          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-12 mb-10 flex-shrink-0">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#F2542D] uppercase block">
                Hangar Feed Logs
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#111111] font-semibold">
                Incident Databases & Stories
              </h2>
            </div>
          </div>

          {/* Cards container with fluid, proper horizontal scroll and wheel translation */}
          <div className="w-full overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-12 pt-4 px-6 lg:px-12 snap-x snap-mandatory scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* Feed Cards */}
              {posts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{
                    opacity: 0,
                    x: 60,
                    scale: 0.98,
                    filter: "blur(6px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: (idx % 3) * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 16px 32px -10px rgba(11, 21, 40, 0.08)",
                  }}
                  style={{
                    willChange: "transform, opacity, filter",
                  }}
                  className="w-[310px] sm:w-[420px] md:w-[460px] lg:w-[500px] flex-shrink-0 bg-white border border-[#EAE6DF] rounded-2xl overflow-hidden shadow-xs hover:border-[#D7A640] transition-all duration-250 flex flex-col justify-between snap-align-start cursor-pointer motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:filter-none"
                >
                  <div className="p-6 space-y-4">
                    {/* Media Embed at Top of Card */}
                    <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden bg-[#FAF6EE] border border-[#EAE6DF]/40">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#5B5B5B]">
                      <span className="font-bold text-[#111111] hover:underline">
                        {post.subreddit}
                      </span>
                      <span>•</span>
                      <span>Posted by {post.author}</span>
                      <span>{post.timeAgo}</span>
                      
                      {post.id === "1" && (
                        <span className="ml-auto bg-[#FBEBE8] text-[#F2542D] font-bold text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1">
                          <ShieldAlert className="w-2.5 h-2.5" /> CRITICAL
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-serif text-[#111111] font-semibold leading-snug hover:underline">
                        {post.title}
                      </h3>
                      <p className="text-xs text-[#5B5B5B] font-light leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.topics.map((t) => (
                        <span key={t} className="text-[9px] font-medium text-[#5B5B5B] bg-[#FBFAF6] border border-[#EAE6DF] rounded-md px-1.5 py-0.5">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Interactive bar */}
                  <div className="px-6 pb-5 pt-3 border-t border-[#EAE6DF]/60 bg-[#FAF9F5]/30 flex items-center justify-between text-xs text-[#5B5B5B]">
                    {/* Left: Upvote/Downvote Pill */}
                    <div className="flex items-center bg-[#FAF9F5] border border-[#EAE6DF]/60 rounded-full px-2 py-0.5 gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVote(post.id, "up");
                        }}
                        className={`p-1 rounded-full hover:bg-[#EAE6DF]/40 transition-colors ${
                          post.userVote === "up" ? "text-[#F2542D]" : "text-[#5B5B5B]/65"
                        }`}
                      >
                        <ArrowBigUp className={`w-4 h-4 ${post.userVote === "up" ? "fill-[#F2542D]" : ""}`} />
                      </button>
                      <span
                        className={`text-[11px] font-bold font-sans ${
                          post.userVote === "up"
                            ? "text-[#F2542D]"
                            : post.userVote === "down"
                            ? "text-[#2B6CB0]"
                            : "text-[#111111]"
                        }`}
                      >
                        {post.upvotes}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVote(post.id, "down");
                        }}
                        className={`p-1 rounded-full hover:bg-[#EAE6DF]/40 transition-colors ${
                          post.userVote === "down" ? "text-[#2B6CB0]" : "text-[#5B5B5B]/65"
                        }`}
                      >
                        <ArrowBigDown className={`w-4 h-4 ${post.userVote === "down" ? "fill-[#2B6CB0]" : ""}`} />
                      </button>
                    </div>

                    {/* Middle: Comments */}
                    <div className="flex items-center gap-4">
                      <button className="hover:text-[#111111] transition-colors flex items-center gap-1.5 font-medium">
                        <MessageSquare className="w-3.5 h-3.5 text-[#5B5B5B]/85" />
                        <span>{post.commentsCount}</span>
                      </button>
                      
                      <button className="hover:text-[#111111] transition-colors flex items-center gap-1.5 font-medium">
                        <Share2 className="w-3.5 h-3.5 text-[#5B5B5B]/85" />
                        <span>Share</span>
                      </button>
                    </div>

                    {/* Right: Save */}
                    <button className="hover:text-[#111111] transition-colors flex items-center gap-1.5 font-medium">
                      <Bookmark className="w-3.5 h-3.5 text-[#5B5B5B]/85" />
                    </button>
                  </div>
                </motion.article>
              ))}

              {/* Card Last: Immersive Load More */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-[260px] sm:w-[300px] flex-shrink-0 bg-white/40 border border-[#EAE6DF] border-dashed rounded-2xl flex flex-col items-center justify-center p-8 text-center snap-align-start hover:border-[#D7A640] transition-colors group cursor-pointer"
                onClick={() => {
                  const newLogs: Post[] = [
                    {
                      id: String(posts.length + 1),
                      title: "Microburst vs Windshear: Practical Cockpit Recoveries",
                      subreddit: "h/ground-theory",
                      author: "u/sim_instructor",
                      timeAgo: "2 days ago",
                      description: "Reviewing flight simulator profiles on windshear escape maneuvers. Do not chase the flight director blindly—apply full power and maintain pitch attitude.",
                      image: "https://images.unsplash.com/photo-1508847154043-be12a927dfa8?auto=format&fit=crop&q=80&w=600",
                      upvotes: 145,
                      commentsCount: 22,
                      userVote: null,
                      topics: ["SimFlight", "Windshear", "EmergencyEscape"],
                    },
                    {
                      id: String(posts.length + 2),
                      title: "Tales of the Mail Plane: Flying Open Cockpit in the 1930s",
                      subreddit: "h/veteran-wisdom",
                      author: "u/barnstorm_bill",
                      timeAgo: "3 days ago",
                      description: "Excerpts from vintage logbooks: navigating by following railroad tracks (the 'iron compass') and landing in cow pastures when fog rolled in. Safety was simple—don't lose sight of the ground.",
                      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=600",
                      upvotes: 211,
                      commentsCount: 38,
                      userVote: null,
                      topics: ["VintageFlight", "AirmailHistory", "TaildraggerTales"],
                    }
                  ];
                  setPosts([...posts, ...newLogs]);
                }}
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#EAE6DF] flex items-center justify-center text-[#5B5B5B] group-hover:border-[#D7A640] group-hover:text-[#D7A640] transition-colors mb-4">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
                <h4 className="font-serif text-[#111111] font-semibold text-sm mb-1">
                  Load More Logs
                </h4>
                <p className="text-[11px] text-[#5B5B5B] font-light leading-relaxed">
                  Fetch older databases, vintage accounts, and ground school logs.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Telemetry Streams / Instagram Reels Section */}
        <section id="streams" className="py-24 bg-[#FBFAF6] border-b border-[#EAE6DF] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#F2542D] uppercase block">
                Telemetry Streams
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#111111] font-semibold">
                Step Inside the Cockpit
              </h2>
            </div>
            
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#EAE6DF] text-[#111111] hover:text-[#D7A640] hover:border-[#D7A640] transition-all duration-250 rounded-full px-5 py-2.5 text-xs font-bold flex items-center gap-2 self-start sm:self-auto"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Connect @planeandprop</span>
            </Link>
          </div>

          {/* Double-Row Marquee Container */}
          <div className="space-y-10 relative">
            
            {/* Inline CSS Keyframe Rules for infinite seamless marquees */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes marquee-ltr {
                0% { transform: translate3d(-50%, 0, 0); }
                100% { transform: translate3d(0%, 0, 0); }
              }
              @keyframes marquee-rtl {
                0% { transform: translate3d(0%, 0, 0); }
                100% { transform: translate3d(-50%, 0, 0); }
              }
              .animate-marquee-ltr {
                display: flex;
                gap: 1.5rem;
                width: max-content;
                animation: marquee-ltr 28s linear infinite;
              }
              .animate-marquee-rtl {
                display: flex;
                gap: 1.5rem;
                width: max-content;
                animation: marquee-rtl 28s linear infinite;
              }
              .animate-marquee-ltr:hover,
              .animate-marquee-rtl:hover {
                animation-play-state: paused;
              }
            `}} />

            {/* Row 1: Top Stream (Landscape images moving Left to Right) */}
            <div className="w-full overflow-hidden relative py-2">
              {/* Fade masks left/right for immersive edge blending */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FBFAF6] via-[#FBFAF6]/70 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FBFAF6] via-[#FBFAF6]/70 to-transparent z-10 pointer-events-none" />
              
              <div className="animate-marquee-ltr">
                {[
                  {
                    title: "Night Checks",
                    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=600&q=80",
                    views: "12.5k views",
                  },
                  {
                    title: "Glide Slope",
                    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
                    views: "18.2k views",
                  },
                  {
                    title: "ATC Dispatch",
                    img: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=600&q=80",
                    views: "9.1k views",
                  },
                  {
                    title: "Wind Vector",
                    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80",
                    views: "24.3k views",
                  },
                  {
                    title: "Roster Call",
                    img: "https://images.unsplash.com/photo-1508847154043-be12a927dfa8?auto=format&fit=crop&w=600&q=80",
                    views: "15.4k views",
                  }
                ].concat([
                  {
                    title: "Night Checks",
                    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=600&q=80",
                    views: "12.5k views",
                  },
                  {
                    title: "Glide Slope",
                    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
                    views: "18.2k views",
                  },
                  {
                    title: "ATC Dispatch",
                    img: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=600&q=80",
                    views: "9.1k views",
                  },
                  {
                    title: "Wind Vector",
                    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80",
                    views: "24.3k views",
                  },
                  {
                    title: "Roster Call",
                    img: "https://images.unsplash.com/photo-1508847154043-be12a927dfa8?auto=format&fit=crop&w=600&q=80",
                    views: "15.4k views",
                  }
                ]).map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="w-[220px] sm:w-[280px] flex-shrink-0 group cursor-pointer"
                  >
                    <div className="relative aspect-[1.6] rounded-[24px] overflow-hidden bg-[#FAF6EE] border border-[#EAE6DF] shadow-xs">
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#D7A640] text-black flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                          <Play className="w-5 h-5 fill-current translate-x-0.5" />
                        </div>
                      </div>

                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-102"
                      />

                      <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono text-white z-10">
                        {item.views}
                      </div>
                    </div>

                    <h3 className="text-center mt-3 text-[11px] tracking-widest font-sans font-bold text-[#111111] uppercase group-hover:text-[#D7A640] transition-colors duration-200">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Row 2: Bottom Stream (Landscape images moving Right to Left) */}
            <div className="w-full overflow-hidden relative py-2">
              {/* Fade masks left/right for immersive edge blending */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FBFAF6] via-[#FBFAF6]/70 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FBFAF6] via-[#FBFAF6]/70 to-transparent z-10 pointer-events-none" />
              
              <div className="animate-marquee-rtl">
                {[
                  {
                    title: "Cabin Debrief",
                    img: "https://images.unsplash.com/photo-1508847154043-be12a927dfa8?auto=format&fit=crop&w=600&q=80",
                    views: "11.1k views",
                  },
                  {
                    title: "Iron Compass",
                    img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80",
                    views: "7.8k views",
                  },
                  {
                    title: "Altitude Cap",
                    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
                    views: "14.2k views",
                  },
                  {
                    title: "Terminal Met",
                    img: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=600&q=80",
                    views: "16.8k views",
                  },
                  {
                    title: "Roster Update",
                    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
                    views: "10.5k views",
                  }
                ].concat([
                  {
                    title: "Cabin Debrief",
                    img: "https://images.unsplash.com/photo-1508847154043-be12a927dfa8?auto=format&fit=crop&w=600&q=80",
                    views: "11.1k views",
                  },
                  {
                    title: "Iron Compass",
                    img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80",
                    views: "7.8k views",
                  },
                  {
                    title: "Altitude Cap",
                    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
                    views: "14.2k views",
                  },
                  {
                    title: "Terminal Met",
                    img: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=600&q=80",
                    views: "16.8k views",
                  },
                  {
                    title: "Roster Update",
                    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
                    views: "10.5k views",
                  }
                ]).map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="w-[220px] sm:w-[280px] flex-shrink-0 group cursor-pointer"
                  >
                    <div className="relative aspect-[1.6] rounded-[24px] overflow-hidden bg-[#FAF6EE] border border-[#EAE6DF] shadow-xs">
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#D7A640] text-black flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                          <Play className="w-5 h-5 fill-current translate-x-0.5" />
                        </div>
                      </div>

                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-102"
                      />

                      <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono text-white z-10">
                        {item.views}
                      </div>
                    </div>

                    <h3 className="text-center mt-3 text-[11px] tracking-widest font-sans font-bold text-[#111111] uppercase group-hover:text-[#D7A640] transition-colors duration-200">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Blueprint-Themed FAQ Section */}
        <section
          id="faq"
          className="relative py-28 lg:py-36 bg-[#FBFAF6] border-b border-[#F3EFE8]/60 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(79, 139, 100, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(79, 139, 100, 0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        >
          {/* Absolute Sketch SVGs */}
          {/* Vintage Propeller - Left */}
          <div className="absolute left-[3%] top-[15%] w-48 h-48 opacity-15 pointer-events-none rotate-[25deg] hidden md:block">
            <svg viewBox="0 0 100 100" fill="none" stroke="#4F8B64" strokeWidth="0.8">
              <circle cx="50" cy="50" r="6" />
              <path d="M50 44 C 44 20, 56 20, 50 44 Z" />
              <path d="M50 56 C 44 80, 56 80, 50 56 Z" />
              <path d="M44 50 C 20 44, 20 56, 44 50 Z" />
              <path d="M56 50 C 80 44, 80 56, 56 50 Z" />
              <circle cx="50" cy="50" r="48" strokeDasharray="3,3" />
            </svg>
          </div>

          {/* Compass Rose - Right */}
          <div className="absolute right-[5%] top-[10%] w-52 h-52 opacity-15 pointer-events-none hidden md:block">
            <svg viewBox="0 0 100 100" fill="none" stroke="#4F8B64" strokeWidth="0.8">
              <circle cx="50" cy="50" r="46" />
              <circle cx="50" cy="50" r="2" fill="#4F8B64" />
              <path d="M50 4 L53 47 L50 50 L47 47 Z" fill="rgba(79, 139, 100, 0.2)" stroke="#4F8B64" />
              <path d="M50 96 L53 53 L50 50 L47 53 Z" fill="rgba(79, 139, 100, 0.1)" stroke="#4F8B64" />
              <path d="M96 50 L53 53 L50 50 L53 47 Z" fill="rgba(79, 139, 100, 0.2)" stroke="#4F8B64" />
              <path d="M4 50 L47 53 L50 50 L47 47 Z" fill="rgba(79, 139, 100, 0.1)" stroke="#4F8B64" />
              <text x="48" y="14" fontSize="6" fill="#4F8B64" fontWeight="bold">N</text>
              <text x="48" y="92" fontSize="6" fill="#4F8B64" fontWeight="bold">S</text>
              <text x="88" y="52" fontSize="6" fill="#4F8B64" fontWeight="bold">E</text>
              <text x="10" y="52" fontSize="6" fill="#4F8B64" fontWeight="bold">W</text>
            </svg>
          </div>

          {/* Aviator Goggles - Bottom Left */}
          <div className="absolute left-[5%] bottom-[8%] w-40 h-28 opacity-15 pointer-events-none hidden md:block">
            <svg viewBox="0 0 100 60" fill="none" stroke="#4F8B64" strokeWidth="0.8">
              <rect x="15" y="15" width="30" height="25" rx="12" />
              <rect x="55" y="15" width="30" height="25" rx="12" />
              <path d="M45 27 L55 27" />
              <path d="M15 27 L5 27 M85 27 L95 27" strokeDasharray="2,2" />
            </svg>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#4F8B64] uppercase block">
                Technical Logs & Documents
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#111111] leading-tight">
                Hangar Deck FAQs
              </h2>
              <p className="text-sm md:text-base text-[#5B5B5B] font-light max-w-lg mx-auto">
                A collective repository of shared answers for flight operations, safety logs, and general ground school query parameters.
              </p>
            </div>

            {/* Accordion Feed */}
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Is access to the flight deck logs completely free?",
                  a: "Yes. Our community is open to all aspiring, student, and veteran pilots. There are no gated channels, subscription fees, or hidden charges. We believe that access to safety critical resources should be open to all.",
                },
                {
                  q: "Who verifies the crash investigation reports?",
                  a: "All accident logs and safety report analyses are sourced from official government investigation databases (such as NTSB and AAIB reports). They are compiled and reviewed by certified flight instructors and seasoned captains to extract practical safety takeaways for everyday aviation.",
                },
                {
                  q: "How can aspiring aviators connect with veteran captains?",
                  a: "We run a monthly pairing matching student aviators and junior co-pilots with retired or active airline captains. It is structured around casual Q&As, resume guidance, and checkride oral prep sessions.",
                },
                {
                  q: "Can I submit my own checkride or flight safety logs?",
                  a: "Absolutely! The unified Hangar Feed is a collective board. You can submit flight logs, safety notes, checkride reports, or vintage taildragger stories directly by clicking the 'Post Log File' button in the sidebar.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm border border-[#EAE6DF] rounded-xl overflow-hidden shadow-xs hover:border-[#4F8B64]/50 transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-base font-semibold text-[#111111] group cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FBFAF6] border border-[#EAE6DF] flex items-center justify-center text-[#5B5B5B] group-hover:border-[#4F8B64] group-hover:text-[#4F8B64] transition-colors">
                      <motion.span
                        animate={{ rotate: openFaq === idx ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        +
                      </motion.span>
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === idx ? "auto" : 0,
                      opacity: openFaq === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[#5B5B5B] font-light leading-relaxed border-t border-[#EAE6DF]/40 pt-4 bg-[#FAF9F5]/40">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Wave separator curve at the bottom matching the screen design aesthetic */}
          <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden pointer-events-none z-0">
            <svg
              viewBox="0 0 1440 40"
              fill="none"
              className="absolute bottom-0 left-0 w-full h-full text-[#FBFAF6] fill-current"
              preserveAspectRatio="none"
            >
              <path d="M0 40 C 240 10, 480 10, 720 25 C 960 40, 1200 40, 1440 25 L 1440 40 L 0 40 Z" />
            </svg>
          </div>
        </section>

        {/* Community Newsletter Signup */}
        <section id="newsletter" className="py-20 bg-[#FBFAF6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="bg-[#0B1528] rounded-[32px] p-8 md:p-12 lg:p-16 text-white relative overflow-hidden max-w-5xl mx-auto">
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
