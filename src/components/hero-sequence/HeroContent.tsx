"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface TextStop {
  threshold: number;
  label: string;
  headline: string;
  paragraph: string;
}

const TEXT_STOPS: TextStop[] = [
  {
    threshold: 0,
    label: "Plane & Prop",
    headline: "Aviation clubhouse, reimagined.",
    paragraph: "A lifestyle brand and community clubhouse built for student pilots, CPL/ATPL aspirants, and sky nerds.",
  },
  {
    threshold: 0.28,
    label: "Plane & Prop",
    headline: "Weekly flight briefings.",
    paragraph: "Saturday morning checkride logs, ATC simulator details, and veteran captain briefs.",
  },
  {
    threshold: 0.38,
    label: "Plane & Prop",
    headline: "Captain's briefings & debriefs.",
    paragraph: "Get real cockpit language and veteran captain notes from captains who have flown the lines.",
  },
  {
    threshold: 0.68,
    label: "Plane & Prop",
    headline: "Belonging in the cockpit.",
    paragraph: "Connect with student pilots, flight instructors, and airline captains sharing mission logs daily.",
  },
  {
    threshold: 0.88,
    label: "Plane & Prop",
    headline: "Your hangar callsign starts here.",
    paragraph: "Enter the hangar, dial in the frequency, and start learning alongside thousands of active aviators.",
  },
];
 
function getActiveStopIndex(progress: number) {
  let activeIndex = 0;
  for (let i = 0; i < TEXT_STOPS.length; i++) {
    if (progress >= TEXT_STOPS[i].threshold) {
      activeIndex = i;
    }
  }
  return activeIndex;
}
 
interface HeroContentProps {
  activeIndex: number;
}
 
export default function HeroContent({ activeIndex }: HeroContentProps) {
  const stop = TEXT_STOPS[activeIndex];
 
  return (
    <div className="relative h-full w-full">
      {/* Soft light scrim confined to the text zone (left ~55%), so dark
          text stays legible over the illustration's flat cream background
          without ever reading as a card or panel. */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[55%]"
        style={{
          background:
            "linear-gradient(to right, rgba(248,245,238,0.9) 0%, rgba(248,245,238,0.55) 70%, rgba(248,245,238,0) 100%)",
        }}
      />
 
      <div className="relative flex h-full flex-col justify-start pt-[calc(5rem+10vh)] px-6 sm:px-10 lg:px-16 max-w-2xl mx-auto lg:mx-0">
        <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#5a6b7f]/90 font-medium mb-6">
          {stop.label}
        </span>
 
        <div className="min-h-[9rem] md:min-h-[11rem]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`headline-${activeIndex}`}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1a2332] leading-[1.12]"
            >
              {stop.headline}
            </motion.h1>
          </AnimatePresence>
 
          <AnimatePresence mode="wait">
            <motion.p
              key={`paragraph-${activeIndex}`}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="mt-6 text-base md:text-lg text-[#5a6b7f] leading-relaxed font-light max-w-md"
            >
              {stop.paragraph}
            </motion.p>
          </AnimatePresence>
        </div>
 
        <div className="flex flex-row gap-4 pt-6">
          <Link
            href="/community"
            className="premium-btn bg-[#D7A640] text-white hover:bg-[#c99532] text-center"
          >
            Enter Hangar Deck
          </Link>
          <Link
            href="#why-plane-prop"
            className="premium-btn border border-[#1a2332]/25 bg-white/40 text-[#1a2332] backdrop-blur-sm hover:bg-white/70 text-center"
          >
            Read Flight Log
          </Link>
        </div>
      </div>
    </div>
  );
}

export { getActiveStopIndex, TEXT_STOPS };
