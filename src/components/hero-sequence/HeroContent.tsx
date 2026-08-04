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
    <div className="flex flex-col justify-center h-full max-w-xl px-6 lg:px-0">
      <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#5B5B5B] font-medium mb-6">
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
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B1B2B] leading-[1.12]"
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
            className="mt-6 text-base md:text-lg text-[#5B5B5B] leading-relaxed font-light max-w-md"
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
          className="premium-btn border border-[#EAE6DF] bg-white text-[#0B1B2B] hover:bg-[#F8F5EE] text-center"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
}

export { getActiveStopIndex, TEXT_STOPS };
