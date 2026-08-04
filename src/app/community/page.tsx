"use client";

import { useState } from "react";
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
  HelpCircle 
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
                <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px]">
                  
                  {/* Petal 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -40, y: -40 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.04, zIndex: 30 }}
                    className="absolute top-0 left-0 w-[49.5%] h-[49.5%] bg-[#FAF5E6] border border-[#F2DFAC] rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[0] p-6 sm:p-8 flex flex-col justify-between shadow-sm cursor-pointer group"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-xs sm:text-sm font-bold text-[#D7A640] font-sans">01</span>
                      <div className="w-8 h-8 rounded-full bg-[#D7A640]/10 flex items-center justify-center text-[#D7A640] group-hover:rotate-[15deg] transition-transform">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-1">Connect</h3>
                      <p className="text-[10px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Meet fellow aviators, join regional pilot hubs, and share flight logs.
                      </p>
                    </div>
                  </motion.div>

                  {/* Petal 2 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 40, y: -40 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.04, zIndex: 30 }}
                    className="absolute top-0 right-0 w-[49.5%] h-[49.5%] bg-[#EEF4F0] border border-[#D4E5D9] rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%] rounded-bl-[0] p-6 sm:p-8 flex flex-col justify-between shadow-sm cursor-pointer group"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-xs sm:text-sm font-bold text-[#4F8B64] font-sans">02</span>
                      <div className="w-8 h-8 rounded-full bg-[#4F8B64]/10 flex items-center justify-center text-[#4F8B64] group-hover:rotate-[-15deg] transition-transform">
                        <Users className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-1">Mentor</h3>
                      <p className="text-[10px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Get matched with experienced Captains for direct 1-on-1 guidance.
                      </p>
                    </div>
                  </motion.div>

                  {/* Petal 3 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -40, y: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    whileHover={{ scale: 1.04, zIndex: 30 }}
                    className="absolute bottom-0 left-0 w-[49.5%] h-[49.5%] bg-[#F3EFF8] border border-[#DFD3EC] rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%] rounded-tr-[0] p-6 sm:p-8 flex flex-col justify-between shadow-sm cursor-pointer group"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-xs sm:text-sm font-bold text-[#805AD5] font-sans">03</span>
                      <div className="w-8 h-8 rounded-full bg-[#805AD5]/10 flex items-center justify-center text-[#805AD5] group-hover:scale-110 transition-transform">
                        <BookOpen className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-1">Collab</h3>
                      <p className="text-[10px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Form study groups for DGCA ground classes & mock oral prep.
                      </p>
                    </div>
                  </motion.div>

                  {/* Petal 4 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 40, y: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.04, zIndex: 30 }}
                    className="absolute bottom-0 right-0 w-[49.5%] h-[49.5%] bg-[#ECF3F6] border border-[#D1E2EA] rounded-tr-[50%] rounded-br-[50%] rounded-bl-[50%] rounded-tl-[0] p-6 sm:p-8 flex flex-col justify-between shadow-sm cursor-pointer group"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-xs sm:text-sm font-bold text-[#2B6CB0] font-sans">04</span>
                      <div className="w-8 h-8 rounded-full bg-[#2B6CB0]/10 flex items-center justify-center text-[#2B6CB0] group-hover:translate-y-[-2px] transition-transform">
                        <Calendar className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-1">Events</h3>
                      <p className="text-[10px] sm:text-xs text-[#5B5B5B] leading-normal font-light">
                        Weekly webinars, live Q&As, and virtual hangar meetup logs.
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
                </div>
              </div>

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

        {/* Reddit-Style Feed & Sidebar Section */}
        <section id="feed" className="py-20 lg:py-24 bg-[#F2EFE8]/30 border-b border-[#F3EFE8]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Reddit Feed (lg:col-span-8) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Feed Controller / Header bar */}
                <div className="bg-white border border-[#EAE6DF] rounded-xl px-6 py-4 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-semibold text-[#F2542D] border-b-2 border-[#F2542D] pb-1 cursor-pointer">
                      Hot Logs
                    </span>
                    <span className="text-xs text-[#5B5B5B] hover:text-[#111111] transition-colors cursor-pointer">
                      New Reports
                    </span>
                    <span className="text-xs text-[#5B5B5B] hover:text-[#111111] transition-colors cursor-pointer">
                      Top Safety
                    </span>
                  </div>
                  <div className="text-xs text-[#5B5B5B] font-light">
                    Hangar Feed
                  </div>
                </div>

                {/* Posts List */}
                <div className="space-y-5">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white border border-[#EAE6DF] rounded-2xl overflow-hidden shadow-xs hover:border-[#D7A640] transition-colors flex"
                    >
                      {/* Left: Upvote/Downvote Column (Reddit feel) */}
                      <div className="bg-[#FAF9F5] border-r border-[#EAE6DF]/60 w-12 flex-shrink-0 flex flex-col items-center py-4 gap-1.5">
                        <button
                          onClick={() => handleVote(post.id, "up")}
                          className={`p-1 rounded hover:bg-[#EAE6DF]/40 transition-colors ${
                            post.userVote === "up" ? "text-[#F2542D]" : "text-[#5B5B5B]/65"
                          }`}
                        >
                          <ArrowBigUp className={`w-5 h-5 ${post.userVote === "up" ? "fill-[#F2542D]" : ""}`} />
                        </button>
                        <span
                          className={`text-xs font-bold font-sans ${
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
                          onClick={() => handleVote(post.id, "down")}
                          className={`p-1 rounded hover:bg-[#EAE6DF]/40 transition-colors ${
                            post.userVote === "down" ? "text-[#2B6CB0]" : "text-[#5B5B5B]/65"
                          }`}
                        >
                          <ArrowBigDown className={`w-5 h-5 ${post.userVote === "down" ? "fill-[#2B6CB0]" : ""}`} />
                        </button>
                      </div>

                      {/* Right: Post Content Area */}
                      <div className="flex-1 p-6 space-y-4">
                        
                        {/* Post Header: origin, author, timestamp */}
                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#5B5B5B]">
                          <span className="font-bold text-[#111111] hover:underline cursor-pointer">
                            {post.subreddit}
                          </span>
                          <span>•</span>
                          <span>Posted by</span>
                          <span className="hover:underline cursor-pointer">{post.author}</span>
                          <span>{post.timeAgo}</span>
                          
                          {post.id === "1" && (
                            <span className="ml-auto bg-[#FBEBE8] text-[#F2542D] font-bold text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1">
                              <ShieldAlert className="w-2.5 h-2.5" /> CRITICAL
                            </span>
                          )}
                        </div>

                        {/* Title & description */}
                        <div className="space-y-2">
                          <h3 className="text-xl font-serif text-[#111111] font-semibold leading-tight hover:underline cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-xs md:text-sm text-[#5B5B5B] font-light leading-relaxed">
                            {post.description}
                          </p>
                        </div>

                        {/* Visual Media Embed */}
                        <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden bg-[#FAF6EE] border border-[#EAE6DF]/40">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {post.topics.map((t) => (
                            <span key={t} className="text-[10px] font-medium text-[#5B5B5B] bg-[#FBFAF6] border border-[#EAE6DF] rounded-md px-2 py-0.5">
                              #{t}
                            </span>
                          ))}
                        </div>

                        {/* Footer Interactions */}
                        <div className="pt-4 border-t border-[#EAE6DF]/60 flex items-center gap-6 text-xs text-[#5B5B5B]">
                          <button className="hover:bg-[#FAF9F5] px-3 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium">
                            <MessageSquare className="w-4 h-4 text-[#5B5B5B]/85" />
                            <span>{post.commentsCount} Comments</span>
                          </button>
                          
                          <button className="hover:bg-[#FAF9F5] px-3 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium">
                            <Share2 className="w-4 h-4 text-[#5B5B5B]/85" />
                            <span>Share</span>
                          </button>

                          <button className="hover:bg-[#FAF9F5] px-3 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium ml-auto">
                            <Bookmark className="w-4 h-4 text-[#5B5B5B]/85" />
                            <span>Save Log</span>
                          </button>
                        </div>

                      </div>
                    </article>
                  ))}
                </div>

              </div>

              {/* Right Column: Reddit-style About sidebar (lg:col-span-4) */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* About Community card */}
                <div className="bg-white border border-[#EAE6DF] rounded-2xl overflow-hidden shadow-xs">
                  {/* Banner accent color */}
                  <div className="h-12 bg-[#0B1528] w-full relative">
                    <span className="absolute bottom-2 left-4 text-xs font-bold text-[#FAF6EE] tracking-wider uppercase font-serif">
                      Hangar Board
                    </span>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-base font-serif text-[#111111] font-semibold">About the Unified Crew</h4>
                      <p className="text-xs text-[#5B5B5B] font-light leading-relaxed">
                        Welcome to the official, unified flight deck community. A collective hangar where student aviators, private pilots, and veteran captains share real crash investigations, flight theory logs, and veteran lore.
                      </p>
                    </div>

                    {/* Community Stats */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-[#EAE6DF]/60 py-4">
                      <div>
                        <div className="text-xl font-bold text-[#111111] font-sans">15.4k</div>
                        <div className="text-[10px] text-[#5B5B5B] font-light">Aviators Joined</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-[#4F8B64] font-sans flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#4F8B64] inline-block animate-pulse"></span>
                          <span>124</span>
                        </div>
                        <div className="text-[10px] text-[#5B5B5B] font-light">In the Hangar</div>
                      </div>
                    </div>

                    {/* Simple rules list */}
                    <div className="space-y-3">
                      <span className="text-[11px] font-bold text-[#F2542D] uppercase tracking-wider">
                        Hangar Rules
                      </span>
                      <ol className="space-y-2 text-xs text-[#5B5B5B] font-light list-decimal pl-4">
                        <li>Focus on safety: share incident details constructively.</li>
                        <li>Learn from veterans: respect captain wisdom and lore.</li>
                        <li>Keep ground theory accurate and verified.</li>
                      </ol>
                    </div>

                    {/* CTA button inside sidebar */}
                    <button className="w-full bg-[#111111] hover:bg-[#D7A640] text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2">
                      <span>Post Log File</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Helpful resources widget */}
                <div className="bg-white border border-[#EAE6DF] rounded-2xl p-6 shadow-xs space-y-4">
                  <h4 className="text-sm font-serif font-bold text-[#111111] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#D7A640]" /> Useful Resources
                  </h4>
                  <ul className="space-y-2 text-xs text-[#5B5B5B] font-light">
                    <li>
                      <a href="#" className="hover:text-[#F2542D] flex items-center justify-between">
                        <span>FAA/DGCA Incident Database</span>
                        <ArrowUpRight className="w-3 h-3 text-[#5B5B5B]/50" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#F2542D] flex items-center justify-between">
                        <span>Checkride Prep Guides</span>
                        <ArrowUpRight className="w-3 h-3 text-[#5B5B5B]/50" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#F2542D] flex items-center justify-between">
                        <span>Flight Risk Assessment Tool</span>
                        <ArrowUpRight className="w-3 h-3 text-[#5B5B5B]/50" />
                      </a>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

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
