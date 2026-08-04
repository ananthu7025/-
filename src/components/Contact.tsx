"use client";

import Image from "next/image";
import { Mail, MapPin, Check, Headphones, HeartHandshake, Send, ArrowRight } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  const contactCards = [
    {
      title: "EMAIL",
      value: "hello@planeandprop.com",
      desc: "We usually reply within 24 hours.",
      icon: Mail,
      doodle: "/assets/contact-mail-doodle.png",
      doodleAlt: "Mail doodle",
      href: "mailto:hello@planeandprop.com",
    },
    {
      title: "INSTAGRAM",
      value: "@planeandprop",
      desc: "Follow for updates, resources & more.",
      icon: InstagramIcon,
      doodle: "/assets/contact-insta-doodle.png",
      doodleAlt: "Instagram doodle",
      href: "https://instagram.com/planeandprop",
    },
    {
      title: "BASE LOCATION",
      value: "Seattle, WA • KBFI",
      desc: "Building dreams. One flight at a time.",
      icon: MapPin,
      doodle: "/assets/contact-map-doodle.png",
      doodleAlt: "Map doodle",
      href: "https://maps.google.com/?q=KBFI",
    },
  ];

  const bottomAudience = [
    {
      title: "For Students",
      desc: "Starting your journey? We've got you.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#E5EFF0] border border-[#CBDDE0] flex items-center justify-center text-[#1C4E5B]">
          <Headphones className="w-6 h-6" />
        </div>
      ),
    },
    {
      title: "For Aspirants",
      desc: "Guidance, prep & clarity for every step.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#F3ECE3] border border-[#E4D9C9] flex items-center justify-center text-[#5C4D3C]">
          {/* Captain/Pilot Hat SVG */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5c0-.828.672-1.5 1.5-1.5h15c.828 0 1.5.672 1.5 1.5v1.5c0 .828-.672 1.5-1.5 1.5H4.5A1.5 1.5 0 0 1 3 15v-1.5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12V8.25A2.25 2.25 0 0 1 7.25 6h9.5A2.25 2.25 0 0 1 19 8.25V12" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-1.5 0-3-1-3-2s1.5-2 3-2 3 1 3 2-1.5 2-3 2Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18c0 1.5 1 2 6 2s6-.5 6-2" />
          </svg>
        </div>
      ),
    },
    {
      title: "For Professionals",
      desc: "Mentor, collaborate & give back.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#E8F0F2] border border-[#D2E0E6] flex items-center justify-center text-[#2A5C66]">
          <HeartHandshake className="w-6 h-6" />
        </div>
      ),
    },
    {
      title: "For Dreamers",
      desc: "Big dreams are always welcome here.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#FAF6EE] border border-[#EFE9DF] flex items-center justify-center text-[#D7A640]">
          <Send className="w-5 h-5 -rotate-12" />
        </div>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#FBFAF6] border-b border-[#F3EFE8] overflow-hidden">
      
      {/* Background ATC Tower & Clouds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* ATC Tower - Left */}
        <div className="absolute left-[-20px] lg:left-0 bottom-[-20px] lg:bottom-0 w-[180px] md:w-[260px] lg:w-[320px] aspect-[4/5] opacity-25 md:opacity-100">
          <Image
            src="/assets/contact-tower.png"
            alt="Control Tower Illustration"
            fill
            className="object-contain object-left-bottom mix-blend-multiply"
          />
        </div>
        {/* Clouds & Birds - Right */}
        <div className="absolute right-0 top-10 w-[200px] md:w-[300px] lg:w-[400px] aspect-[5/3] opacity-30 md:opacity-100">
          <Image
            src="/assets/contact-clouds-birds.png"
            alt="Clouds and Birds Illustration"
            fill
            className="object-contain object-right-top mix-blend-multiply"
          />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-semibold tracking-wider text-[#F2542D] uppercase">
              Hangar Door is Open
            </span>
            <div className="flex items-center">
              <span className="h-[1px] w-8 bg-[#F2542D] opacity-60"></span>
              <span className="text-[#F2542D] text-xs ml-1">✈</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#111111] leading-tight inline-block relative">
            <span className="relative z-10">Let's Connect</span>
            <span className="absolute bottom-1.5 left-0 w-full h-[5px] bg-[#F2542D]/20 rounded-full z-0"></span>
          </h2>
          
          <p className="text-sm md:text-base text-[#5B5B5B] font-light leading-relaxed">
            Whether you're a student starting your flight path or a captain looking to mentor, we would love to hear from you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                target={card.title !== "EMAIL" ? "_blank" : undefined}
                rel={card.title !== "EMAIL" ? "noopener noreferrer" : undefined}
                className="relative bg-white border border-[#EAE6DF] rounded-[24px] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-full bg-[#FAF6EE] border border-[#EFE9DF] flex items-center justify-center mb-5 text-[#111111] group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-[#111111]" />
                </div>
                
                {/* Category Label */}
                <span className="text-xs font-bold text-[#F2542D] tracking-wider mb-2 uppercase">
                  {card.title}
                </span>
                
                {/* Main Value */}
                <span className="text-base font-semibold text-[#111111] mb-2 font-sans">
                  {card.value}
                </span>
                
                {/* Description */}
                <p className="text-xs text-[#5B5B5B] font-light leading-relaxed max-w-[200px] mb-8">
                  {card.desc}
                </p>

                {/* Doodle Asset in Corner */}
                <div className="absolute right-4 bottom-4 w-12 h-12">
                  <Image
                    src={card.doodle}
                    alt={card.doodleAlt}
                    width={48}
                    height={48}
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Get in Touch Button */}
        <div className="flex justify-center mb-24 relative">
          <div className="relative group">
            {/* Hand-drawn style orange ticks above right side of button */}
            <div className="absolute right-[-10px] top-[-14px] w-6 h-6 pointer-events-none flex gap-[3px] rotate-[15deg]">
              <span className="w-[2px] h-[8px] bg-[#F2542D] rounded-full transform rotate-[-20deg]"></span>
              <span className="w-[2px] h-[10px] bg-[#F2542D] rounded-full"></span>
              <span className="w-[2px] h-[8px] bg-[#F2542D] rounded-full transform rotate-[20deg]"></span>
            </div>
            
            <a
              href="mailto:hello@planeandprop.com"
              className="inline-flex items-center gap-3 bg-[#0B1528] hover:bg-[#152746] text-white font-medium rounded-full px-8 py-4 text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 -rotate-12" />
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Community Banner */}
        <div className="bg-[#EBF3F5] border border-[#D2E0E6]/30 rounded-[32px] p-8 md:p-10 lg:p-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 relative overflow-hidden">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 relative flex-shrink-0">
                <Image
                  src="/assets/contact-community-icon.png"
                  alt="Community icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#111111] leading-tight">
                  More than messages.
                  <br />
                  <span className="text-[#F2542D]">It's a community.</span>
                </h3>
              </div>
            </div>
            <p className="text-xs md:text-sm text-[#5B5B5B] font-light leading-relaxed max-w-sm">
              Join pilots, students, and aviation enthusiasts learning and growing together.
            </p>
          </div>

          {/* Middle List */}
          <div className="lg:col-span-4 space-y-4">
            {[
              "Ask questions & get guidance",
              "Share experiences & learn together",
              "Access resources & opportunities",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1C4E5B]/10 flex items-center justify-center text-[#1C4E5B] flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs md:text-sm text-[#111111] font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] aspect-[4/3]">
              <Image
                src="/assets/contact-sunset.png"
                alt="Sunset at the hangar with pilots and plane"
                fill
                className="object-contain object-bottom mix-blend-multiply"
              />
            </div>
          </div>
        </div>

        {/* Bottom Target Audiences Strip */}
        <div className="max-w-5xl mx-auto border-t border-[#EAE6DF]/60 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bottomAudience.map((audience, index) => (
            <div
              key={audience.title}
              className={`flex items-start gap-4 ${
                index > 0 ? "lg:border-l lg:border-[#EAE6DF]/60 lg:pl-6" : ""
              }`}
            >
              <div className="flex-shrink-0">{audience.icon}</div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[#111111]">
                  {audience.title}
                </h4>
                <p className="text-xs text-[#5B5B5B] font-light leading-relaxed">
                  {audience.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
