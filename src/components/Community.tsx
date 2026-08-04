"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Community() {
  return (
    <section id="community" className="py-12 md:py-16 bg-[#FBFAF6] border-b border-[#F3EFE8] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Rounded Light Blue Card Container */}
        <div className="bg-[#e8f0f2] rounded-[32px] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-sm font-semibold tracking-wide text-[#F2542D]">
              Our Community
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] leading-[1.2]">
              You're not alone<br />on this journey.
            </h2>
            <p className="text-base text-[#5B5B5B] leading-relaxed font-light max-w-sm">
              A space to connect, ask, learn, and inspire each other.
            </p>
            <div className="pt-2">
              <Link
                href="#join"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#F2542D] transition-colors border-b-2 border-[#111111] hover:border-[#F2542D] pb-1"
              >
                Join our community <span className="text-base">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Image Illustration */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[680px]"
            >
              <Image
                src="/assets/newcomunity.png"
                alt="Community of aspiring pilots looking at the sky"
                width={896}
                height={450}
                className="w-full h-auto object-contain mix-blend-multiply"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

