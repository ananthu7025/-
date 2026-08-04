"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function StudentLetters() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Lindqvist",
      role: "Private Pilot Candidate",
      avatar: "/assets/avatar1.png",
      rotation: "-rotate-2",
      restRotate: -2,
      text: "“I passed my checkride on the first attempt last Wednesday! The pilot mentorship here gave me standard operating procedure insights my flight school instructor simply skipped. It made the difference between confidence and hesitation in the cockpit.”",
      date: "August 1st, 2026",
    },
    {
      id: 2,
      name: "Marcus Sterling",
      role: "Commercial Student",
      avatar: "/assets/avatar2.png",
      rotation: "rotate-1",
      restRotate: 1,
      text: "“Building an airline career roadmap felt overwhelming and expensive. Through Plane & Prop, I sat down with an active Airbus captain who helped me streamline my multi-engine ratings. This community saved me thousands in mistakes.”",
      date: "July 24th, 2026",
    },
    {
      id: 3,
      name: "Maya Kaji",
      role: "First Officer Cadet",
      avatar: "/assets/avatar3.png",
      rotation: "-rotate-1",
      restRotate: -1,
      text: "“This is the digital crew room I always wished I had. The hand-crafted ground school notes, flight logs, and interview prep guides are refined to absolute perfection. It's like having a library of veteran wisdom in your pocket.”",
      date: "July 18th, 2026",
    },
  ];

  return (
    <section id="letters" className="relative py-24 lg:py-32 border-b border-[#F3EFE8] bg-[#FBFAF6] overflow-hidden">
      {/* Decorative Dotted Flight Path - continues the same motif from
          Why Plane & Prop, closing the loop near the top-right corner */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute w-full h-full text-[#D7A640]"
          fill="none"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
        >
          <path
            d="M 1300,80 C 1360,40 1420,70 1400,20"
            stroke="currentColor"
            strokeWidth="2"
            className="dotted-path"
          />
        </svg>

        {/* Small folded-note icon resting on the path, top-right */}
        <div className="absolute right-[4%] top-[4%] w-10 h-10 opacity-90 rotate-[12deg] text-[#D7A640]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M0,10 L24,3 L13,14 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D7A640] font-semibold">
            Student Letters
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111111]">
            Notes from the hangar desk.
          </h2>
          <p className="text-base md:text-lg text-[#5B5B5B] font-light">
            Real stories, handwritten notes, and checked checkrides. Hear from the pilots who make Plane & Prop their home base.
          </p>
        </div>

        {/* Testimonials Desktop Grid / Mobile Carousel */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-stretch pt-4">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: -28, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: test.restRotate }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.12,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                rotate: [test.restRotate, test.restRotate - 2, test.restRotate + 2, test.restRotate],
                transition: { duration: 0.4 },
              }}
              className="relative bg-[#FAF6EE] border border-[#EAE6DF] rounded-2xl p-8 flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10"
            >
              {/* Pushpin */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-8 drop-shadow-sm">
                <svg viewBox="0 0 24 32" fill="none" className="w-full h-full">
                  <ellipse cx="12" cy="27" rx="3" ry="2" fill="#0B1B2B" opacity="0.12" />
                  <path d="M12 14 L12 30" stroke="#8a6d1f" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="12" cy="9" r="8" fill="#D7A640" />
                  <circle cx="9" cy="6" r="2.4" fill="#F4D488" opacity="0.8" />
                </svg>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#EAE6DF] overflow-hidden flex items-center justify-center p-1.5">
                    <div className="relative w-full h-full">
                      <Image
                        src={test.avatar}
                        alt={test.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-[#111111]">
                      {test.name}
                    </h3>
                    <p className="text-xs text-[#5B5B5B] tracking-wide">{test.role}</p>
                  </div>
                </div>

                <p className="text-[#5B5B5B] italic leading-relaxed text-base font-light">
                  {test.text}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EAE6DF]/60 flex justify-between items-center text-xs text-[#5B5B5B]/80 font-mono">
                <span>{test.date}</span>
                <span className="text-[#D7A640]">&bull; Log Entry</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Slider */}
        <div className="md:hidden relative px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FAF6EE] border border-[#EAE6DF] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] relative"
            >
              {/* Pin */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D7A640]/20 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-[#D7A640]" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#EAE6DF] overflow-hidden flex items-center justify-center p-1">
                    <div className="relative w-full h-full">
                      <Image
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-[#111111]">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-xxs text-[#5B5B5B]">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                <p className="text-[#5B5B5B] italic leading-relaxed text-sm font-light">
                  {testimonials[activeIndex].text}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#EAE6DF]/60 flex justify-between items-center text-xxs text-[#5B5B5B]/80 font-mono">
                <span>{testimonials[activeIndex].date}</span>
                <span className="text-[#D7A640]">&bull; Log Entry</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-8 bg-[#D7A640]" : "w-2.5 bg-[#EAE6DF] hover:bg-[#D7A640]/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
