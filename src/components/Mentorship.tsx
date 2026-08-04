"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Mentorship() {
  const features = [
    "1-on-1 Cockpit Debriefs",
    "Airline Captain Notes",
    "Cadet Simulator Prep"
  ];

  return (
    <section id="mentorship" className="py-12 md:py-16 bg-[#FBFAF6] border-b border-[#F3EFE8] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Rounded Blue Card Container */}
        <div className="bg-[#e3ecf0] rounded-[32px] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
 
          {/* Left Column: Mentorship Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[420px]"
            >
              <Image
                src="/assets/mentorship-new.png"
                alt="Aviation mentorship illustration"
                width={780}
                height={780}
                className="w-full h-auto object-contain mix-blend-multiply"
                priority
              />
            </motion.div>
          </div>
 
          {/* Right Column: Heading, Description, Horizontal Pills */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-sm font-semibold tracking-wide text-[#F2542D] uppercase">
              Captain's Notes
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] leading-[1.2]">
              Learn from captains<br />who have flown the lines.
            </h2>
            <p className="text-base text-[#5B5B5B] leading-relaxed font-light max-w-xl">
              Get direct cockpit briefings and debriefs from senior captains. Ditch abstract flight school advice and get real mission-critical aviation mentorship.
            </p>
 
            {/* Horizontal Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-2 bg-[#d2e0e6] px-4 py-2 rounded-full shadow-sm"
                >
                  <div className="w-4 h-4 rounded-full bg-[#111111]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#111111]" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-[#111111]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
 
            <div className="pt-4">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#F2542D] transition-colors border-b-2 border-[#111111] hover:border-[#F2542D] pb-1"
              >
                Request Callsign Briefing <span className="text-base">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

