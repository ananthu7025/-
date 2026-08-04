"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Check, Lock, Send } from "lucide-react";
import NewsletterPreview from "./NewsletterPreview";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const benefits = [
    { name: "Practical Guides", icon: "/assets/icon-mentorship.png" },
    { name: "Real World Insights", icon: "/assets/icon-beyond.png" },
    { name: "Career Support", icon: "/assets/icon-career.png" },
    { name: "Community Stories", icon: "/assets/icon-community.png" },
  ];

  return (
    <section id="newsletters" className="relative py-20 lg:py-28 bg-[#FBFAF6] border-b border-[#F3EFE8] overflow-hidden">
      <NewsletterPreview />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 space-y-12">

        {/* Main Grid: Text, Mailbox & Clouds, Sticky Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Heading & Benefits & Form (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#F2542D] uppercase">
                Our Newsletter
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#111111] leading-tight">
                <span className="relative inline-block">
                  Learning. Insights.
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#F2542D]/20 rounded" />
                </span>
                <br />
                Delivered to you.
              </h2>
              <p className="text-sm md:text-base text-[#5B5B5B] leading-relaxed font-light max-w-sm">
                Handcrafted learning resources by pilots and industry experts to help you grow every week.
              </p>
            </div>

            {/* Benefit Icons */}
            <div className="grid grid-cols-4 gap-4 max-w-md pt-2">
              {benefits.map((b) => (
                <div key={b.name} className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#EAE6DF] flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#D7A640] shadow-sm">
                    <div className="relative w-full h-full">
                      <Image
                        src={b.icon}
                        alt={b.name}
                        fill
                        className="object-contain mix-blend-multiply"
                      />
                    </div>
                  </div>
                  <span className="text-[10px] md:text-xs font-medium text-[#5B5B5B] leading-tight max-w-[80px]">
                    {b.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="space-y-4 pt-4">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#e3ecf0] border border-[#d2e0e6] text-[#111111] rounded-2xl p-6 max-w-md"
                >
                  <p className="font-medium font-serif text-lg">Clear skies ahead!</p>
                  <p className="text-sm text-[#5B5B5B] font-light mt-1">
                    Thank you for subscribing. We've added you to our weekly dispatch.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B5B5B]/50" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-[#EAE6DF] rounded-full pl-11 pr-6 py-3.5 text-sm text-[#111111] placeholder:text-[#5B5B5B]/40 focus:outline-none focus:border-[#D7A640] transition-colors shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="premium-btn bg-[#111111] text-white hover:bg-[#D7A640] font-semibold whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
                    Subscribe Free <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
              <div className="flex items-center gap-2 text-xs text-[#5B5B5B]/85 font-light pl-1">
                <span>✨</span> Join 2,500+ aspiring aviators already learning with us.
              </div>
            </div>
          </div>

          {/* Center: Mailbox & Clouds Illustration (lg:col-span-4) */}
          <div className="lg:col-span-4 flex justify-center w-full">
            <div className="relative w-full max-w-[340px] animate-float">
              <Image
                src="/assets/mailbox-clouds.png"
                alt="Mailbox with clouds illustration"
                width={360}
                height={360}
                className="w-full h-auto object-contain mix-blend-multiply"
                priority
              />
            </div>
          </div>

          {/* Right: Pinned Sticky Note (lg:col-span-3) */}
          <div className="lg:col-span-3 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, x: 20, rotate: 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-[#FFFDF9] border border-[#EFE9DF] rounded-2xl p-6 shadow-md w-full max-w-[260px]"
            >
              {/* Tape detail */}
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#F3EDE4]/65 backdrop-blur-[1px] rotate-[-2deg]" />

              <h4 className="font-serif text-base font-semibold text-[#111111] mb-4 mt-2">
                Why our newsletter?
              </h4>
              <ul className="space-y-3">
                {[
                  "Curated by pilots & experts",
                  "Actionable, easy to apply",
                  "No spam. Ever.",
                  "Always free to start",
                  "Written for students, by people who care."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px] md:text-xs text-[#5B5B5B] leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-[#F2542D] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-4">
                <span className="text-[#F2542D] text-sm">&hearts;</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Split Card: Free to Start & Go Deeper */}
        <div className="bg-[#e8f0f2]/70 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#d2e0e6] border border-[#d2e0e6]/30 shadow-sm">
          {/* Free Box */}
          <div className="flex items-center gap-4 pb-6 md:pb-0">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-3 flex-shrink-0 shadow-sm">
              <Image
                src="/assets/icon-career.png"
                alt="Paper airplane icon"
                width={24}
                height={24}
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#F2542D] font-bold">Free to start</span>
              <h4 className="font-semibold text-[#111111] text-sm md:text-base">First 3 newsletters are on us.</h4>
              <p className="text-xs text-[#5B5B5B] font-light mt-0.5">Start learning right away.</p>
            </div>
          </div>

          {/* Premium Box */}
          <div className="flex items-center justify-between gap-4 pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Lock className="w-5 h-5 text-[#D7A640]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#D7A640] font-bold">Go deeper</span>
                <h4 className="font-semibold text-[#111111] text-sm md:text-base">Premium newsletters.</h4>
                <p className="text-xs text-[#5B5B5B] font-light mt-0.5">In-depth lessons, exclusive insights and more.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Timeline (Cream Card) */}
        <div className="bg-[#FAF6EE] border border-[#EFE9DF] rounded-[32px] p-8 md:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Header Title */}
            <div className="max-w-[200px] flex-shrink-0">
              <h3 className="font-serif text-lg md:text-xl font-bold text-[#111111] leading-tight">
                How it works
              </h3>
              <p className="text-xs text-[#5B5B5B] font-light mt-1 leading-relaxed">
                Simple steps to keep learning and growing.
              </p>
            </div>

            {/* Steps Row */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center w-full">
              {[
                {
                  step: "1",
                  title: "Subscribe Free",
                  desc: "Sign up in 30 seconds and get instant access.",
                  icon: "/assets/icon-resources.png"
                },
                {
                  step: "2",
                  title: "Get Weekly Insights",
                  desc: "Practical lessons, real stories and expert advice.",
                  icon: "/assets/icon-mentorship.png"
                },
                {
                  step: "3",
                  title: "Learn & Grow",
                  desc: "Apply what you learn and move closer to your goals.",
                  icon: "/assets/icon-career.png"
                }
              ].map((item, idx) => (
                <div key={item.step} className="flex items-start gap-4 relative">
                  {/* Step bubble */}
                  <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-[#111111] text-sm flex items-center gap-2">
                      {item.title}
                      <div className="relative w-4 h-4 inline-block">
                        <Image
                          src={item.icon}
                          alt=""
                          fill
                          className="object-contain mix-blend-multiply"
                        />
                      </div>
                    </h5>
                    <p className="text-xs text-[#5B5B5B] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {/* Arrow separators (desktop only) */}
                  {idx < 2 && (
                    <div className="hidden md:block absolute right-[-15%] top-1/2 -translate-y-1/2 text-[#EAE6DF] font-light text-xl select-none">
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Accent Text */}
        <div className="text-center text-xs md:text-sm text-[#5B5B5B]/85 font-light flex items-center justify-center gap-2">
          <span>✨</span> Built for aspiring aviators. Backed by a community. Driven by purpose.
        </div>

      </div>
    </section>
  );
}
