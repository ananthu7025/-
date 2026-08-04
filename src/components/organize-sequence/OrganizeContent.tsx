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
    label: "Stay Organized",
    headline: "Your aviation path, all in one place.",
    paragraph: "Air law, navigation, meteorology — the reference material keeps piling up. We help you organize it.",
  },
  {
    threshold: 0.25,
    label: "Stay Organized",
    headline: "A plan for every study session.",
    paragraph: "Checklists, flight plans, and notes structured so nothing falls through the cracks.",
  },
  {
    threshold: 0.5,
    label: "Stay Organized",
    headline: "Weekly newsletters that fit right in.",
    paragraph: "Our newsletter drops into your routine like another well-organized note on the desk.",
  },
  {
    threshold: 0.72,
    label: "Stay Organized",
    headline: "A community keeping you on track.",
    paragraph: "Ask questions, compare notes, and get answers from mentors and fellow students in real time.",
  },
  {
    threshold: 0.9,
    label: "Stay Organized",
    headline: "Everything you need, one desk away.",
    paragraph: "Newsletters, handbooks, flashcards, and community — organized so you can focus on flying.",
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

interface OrganizeContentProps {
  activeIndex: number;
}

export default function OrganizeContent({ activeIndex }: OrganizeContentProps) {
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
            "linear-gradient(to right, rgba(248,245,238,0.92) 0%, rgba(248,245,238,0.55) 70%, rgba(248,245,238,0) 100%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-center px-6 sm:px-10 lg:px-16 max-w-2xl mx-auto lg:mx-0">
        <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#5a6b7f]/90 font-medium mb-6">
          {stop.label}
        </span>

        <div className="min-h-[9rem] md:min-h-[11rem]">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`headline-${activeIndex}`}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1a2332] leading-[1.15]"
            >
              {stop.headline}
            </motion.h2>
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
            href="#newsletters"
            className="premium-btn bg-[#D7A640] text-white hover:bg-[#c99532] text-center"
          >
            Get the Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
}

export { getActiveStopIndex, TEXT_STOPS };
