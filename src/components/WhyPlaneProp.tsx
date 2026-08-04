"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyPlaneProp() {
  const cards = [
    {
      title: "Community First",
      desc: "A tight-knit community that supports you at every step.",
      icon: "/assets/icon-community.png",
      bgClass: "bg-[#FDF1DC]", // Pale peach/yellow
    },
    {
      title: "Real Guidance",
      desc: "From industry experts who've been there and done that.",
      icon: "/assets/icon-mentorship.png",
      bgClass: "bg-[#F3ECE3]", // Pale warm beige
    },
    {
      title: "Curated Resources",
      desc: "Handpicked material to help you learn better and faster.",
      icon: "/assets/icon-resources.png",
      bgClass: "bg-[#F3ECE3]", // Pale warm grey/beige
    },
    {
      title: "Career Support",
      desc: "Interview prep, resume reviews and career guidance.",
      icon: "/assets/icon-career.png",
      bgClass: "bg-[#E5EFF0]", // Pale teal
    },
    {
      title: "Beyond Training",
      desc: "We prepare you for the real world, not just the exams.",
      icon: "/assets/icon-beyond.png",
      bgClass: "bg-[#FDF1DC]", // Pale peach/yellow
    },
  ];

  return (
    <section id="why-plane-prop" className="relative py-24 lg:py-32 border-b border-[#F3EFE8] bg-[#FBFAF6] overflow-hidden">
      {/* Decorative Dotted Flight Path - same fine-dot style as Hero, so the
          motif reads as one continuous thread carried down from above */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute w-full h-full text-[#D7A640]"
          fill="none"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Picks up near where the Hero path ends, loops through the section */}
          <path
            d="M 150,-20 C 100,40 40,60 80,110 C 120,160 200,120 180,180"
            stroke="currentColor"
            strokeWidth="2"
            className="dotted-path"
          />

          {/* Right side loop echoing the Hero's right-side flourish */}
          <path
            d="M 1250,60 C 1320,20 1400,60 1380,140 C 1360,220 1260,200 1300,280"
            stroke="currentColor"
            strokeWidth="2"
            className="dotted-path"
          />
        </svg>

        {/* Small paper airplane resting on the left path, matching Hero's icon */}
        <div className="absolute left-[6%] top-[24%] w-10 h-10 opacity-90 -rotate-[20deg] text-[#D7A640]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M0,10 L24,3 L13,14 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#111111] leading-tight">
            Why Plane & Prop?
          </h2>
          <p className="text-sm md:text-base text-[#5B5B5B] font-light">
            Because flying is a journey best taken together.
          </p>
        </div>

        {/* Horizontal Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-y-0 md:gap-x-2 lg:gap-x-4 max-w-[1200px] mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group relative"
            >
              {/* Icon Circle */}
              <div className={`w-20 h-20 rounded-full ${card.bgClass} flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
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
              <h3 className="text-base md:text-lg font-medium text-[#111111] font-serif text-center mt-6 mb-3 group-hover:text-[#D7A640] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-[#5B5B5B] leading-relaxed text-center font-light px-2 max-w-[200px]">
                {card.desc}
              </p>

              {/* Vertical Dashed Divider (shown only on desktop between columns) */}
              {index < cards.length - 1 && (
                <div className="hidden md:block absolute right-[-4px] lg:right-[-8px] top-12 bottom-4 w-px border-r border-dashed border-[#EAE6DF]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
