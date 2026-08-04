"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyPlaneProp() {
  const cards = [
    {
      title: "Flight Deck",
      desc: "Your custom mission panel to track ground prep progress, exam metrics, and study routines.",
      icon: "/assets/icon-career.png",
      bgClass: "bg-[#E5EFF0]", // Pale teal
    },
    {
      title: "Hangar",
      desc: "Immersive community spaces to connect with student pilots, CPL/ATPL aspirants, and flight instructors.",
      icon: "/assets/icon-community.png",
      bgClass: "bg-[#FDF1DC]", // Pale peach/yellow
    },
    {
      title: "Briefing Room",
      desc: "Access weekly checkride logs, accident briefs, and notes compiled by senior captains.",
      icon: "/assets/icon-mentorship.png",
      bgClass: "bg-[#F3ECE3]", // Pale warm beige
    },
    {
      title: "Mission Board",
      desc: "Form study cohorts for navigation, meteorology, and air regulations exams.",
      icon: "/assets/icon-resources.png",
      bgClass: "bg-[#F3ECE3]", // Pale warm grey/beige
    },
    {
      title: "Tower",
      desc: "Stay updated on airline cadet programs, exam schedules, and industry notifications.",
      icon: "/assets/icon-beyond.png",
      bgClass: "bg-[#FDF1DC]", // Pale peach/yellow
    },
    {
      title: "Logbook",
      desc: "Document your flight simulator hours, mock scores, and safety achievements.",
      icon: "/assets/icon-career.png",
      bgClass: "bg-[#E5EFF0]", // Pale teal
    },
  ];

  return (
    <section id="why-plane-prop" className="relative py-24 lg:py-32 border-b border-[#F3EFE8] bg-[#FBFAF6] overflow-hidden">
      {/* Decorative Dotted Flight Path */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute w-full h-full text-[#D7A640]"
          fill="none"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            d="M 150,-20 C 100,40 40,60 80,110 C 120,160 200,120 180,180"
            stroke="currentColor"
            strokeWidth="2"
            className="dotted-path"
          />
 
          <path
            d="M 1250,60 C 1320,20 1400,60 1380,140 C 1360,220 1260,200 1300,280"
            stroke="currentColor"
            strokeWidth="2"
            className="dotted-path"
          />
        </svg>
 
        <div className="absolute left-[6%] top-[24%] w-10 h-10 opacity-90 -rotate-[20deg] text-[#D7A640]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M0,10 L24,3 L13,14 Z" />
          </svg>
        </div>
      </div>
 
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#111111] leading-tight">
            The Crew Hub
          </h2>
          <p className="text-sm md:text-base text-[#5B5B5B] font-light max-w-md mx-auto">
            Every section is built to mirror a pilot's real-world cockpit workflow.
          </p>
        </div>
 
        {/* 3-Column Layout Grid for the 6 Crew Hub workflow components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1100px] mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center group relative p-6 bg-white border border-[#EAE6DF]/60 rounded-2xl shadow-xs hover:border-[#D7A640] transition-colors"
            >
              {/* Icon Circle */}
              <div className={`w-16 h-16 rounded-full ${card.bgClass} flex items-center justify-center p-3.5 transition-transform duration-300 group-hover:scale-105 shadow-xs`}>
                <div className="relative w-full h-full">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              </div>
 
              {/* Title & Description */}
              <h3 className="text-base md:text-lg font-medium text-[#111111] font-serif text-center mt-5 mb-2 group-hover:text-[#D7A640] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-[#5B5B5B] leading-relaxed text-center font-light px-2 max-w-[280px]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
