"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-[#FBFAF6]">
      {/* Decorative Dotted Flight Paths matching the user's second image */}
      <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none z-0">
        <svg
          className="w-full h-full text-[#D7A640]"
          fill="none"
          viewBox="0 0 1440 256"
          preserveAspectRatio="none"
        >
          {/* Left flight path with paper airplane - dot styling continues
              into the Why Plane & Prop path below for one visual thread */}
          <path
            d="M -50,220 C 120,220 220,180 350,150 C 450,120 530,140 600,100"
            stroke="currentColor"
            strokeWidth="2"
            className="dotted-path"
          />
          {/* Paper airplane at the end of the left path */}
          <g transform="translate(595, 98) rotate(340)">
            <path
              d="M 0,-6 L -16,6 L -8,0 L -16,-6 Z"
              fill="currentColor"
            />
          </g>

          {/* Right flight path loop */}
          <path
            d="M 1250,210 C 1280,240 1330,220 1410,230"
            stroke="currentColor"
            strokeWidth="2"
            className="dotted-path"
          />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[460px]">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#111111] leading-[1.15]"
            >
              A community<br />
              that prepares you<br />
              for more than<br />
              just the cockpit.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-sm md:text-base text-[#5B5B5B] leading-relaxed max-w-md font-light"
            >
              Guidance. Mentorship. Resources.<br />
              Connections that last a lifetime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex flex-row gap-4 pt-2"
            >
              <Link
                href="#join"
                className="premium-btn bg-[#D7A640] text-white hover:bg-[#c99532] text-center"
              >
                Join the Community
              </Link>
              <Link
                href="#why-plane-prop"
                className="premium-btn border border-[#EAE6DF] bg-white text-[#111111] hover:bg-[#FBFAF6] text-center"
              >
                Explore More
              </Link>
            </motion.div>
          </div>

          {/* Right Hero Illustration Column */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[620px]"
            >
              <Image
                src="/assets/hero.png"
                alt="Boy looking outside airplane window"
                width={588}
                height={433}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
