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
    headline: "Every pilot starts with a dream.",
    paragraph: "Some dreams begin quietly.",
  },
  {
    threshold: 0.3,
    label: "Plane & Prop",
    headline: "The journey begins.",
    paragraph: "Follow your curiosity beyond the window.",
  },
  {
    threshold: 0.6,
    label: "Plane & Prop",
    headline: "Find your community.",
    paragraph: "Learn with mentors and aspiring pilots.",
  },
  {
    threshold: 0.9,
    label: "Plane & Prop",
    headline: "Your future is waiting.",
    paragraph: "Take the first step with Plane & Prop.",
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
      {/* Soft scrim confined to the sky band the text lives in, so words
          stay legible without ever reading as a card or panel. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[58%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,27,43,0.32) 0%, rgba(11,27,43,0.16) 45%, rgba(11,27,43,0) 100%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-start pt-[14vh] px-6 sm:px-10 lg:px-16 max-w-2xl mx-auto lg:mx-0">
        <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/80 font-medium mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
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
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]"
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
              className="mt-6 text-base md:text-lg text-white/85 leading-relaxed font-light max-w-md drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]"
            >
              {stop.paragraph}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-row gap-4 pt-6">
          <Link
            href="#join"
            className="premium-btn bg-[#D7A640] text-white hover:bg-[#c99532] text-center"
          >
            Join the Community
          </Link>
          <Link
            href="#why-plane-prop"
            className="premium-btn border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 text-center"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}

export { getActiveStopIndex, TEXT_STOPS };
