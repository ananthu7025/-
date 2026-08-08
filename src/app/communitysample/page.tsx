"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Scene {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}

const scenes: Scene[] = [
  {
    id: "discover",
    eyebrow: "01 — DISCOVER",
    title: "It starts with a shared curiosity.",
    description:
      "From the first aircraft we admired to the places we dream of reaching, aviation has always brought curious minds together."
  },
  {
    id: "connect",
    eyebrow: "02 — CONNECT",
    title: "Different journeys. One community.",
    description:
      "Pilots. Builders. Dreamers. Travelers. Storytellers. We may come from different places, but we look up at the same sky."
  },
  {
    id: "explore",
    eyebrow: "03 — EXPLORE",
    title: "Every connection leads somewhere.",
    description:
      "Discover stories, ideas, places and people that make the world of aviation feel a little smaller."
  },
  {
    id: "belong",
    eyebrow: "04 — BELONG",
    title: "The sky is vast. The community makes it feel closer.",
    description:
      "Find your people. Share your journey. Be part of Plane & Prop."
  }
];

// Constellation Main Nodes matching the reference layout
const nodes = [
  { id: 0, x: 36, y: 15, size: "large", depth: 1.25, name: "Marcus T.", label: "PILOTS" },
  { id: 1, x: 63, y: 15, size: "large", depth: 1.25, name: "Anjali K.", label: "DREAMERS" },
  { id: 2, x: 78, y: 22, size: "medium", depth: 1.0, name: "Sarah M.", label: "TRAVELERS" },
  { id: 3, x: 15, y: 62, size: "medium", depth: 1.0, name: "Vikram S.", label: "BUILDERS" },
  { id: 4, x: 27, y: 80, size: "medium", depth: 1.0, name: "Elena R.", label: "CREATORS" },
  { id: 5, x: 55, y: 85, size: "medium", depth: 1.15, name: "Omar F.", label: "DREAMERS" },
  { id: 6, x: 76, y: 76, size: "medium", depth: 1.1, name: "Rohan P.", label: "BUILDERS" },
  { id: 7, x: 37, y: 35, size: "small", depth: 0.8, name: "Mei Chen", label: "TRAVELERS" },
  { id: 8, x: 83, y: 47, size: "medium", depth: 1.05, name: "David L.", label: "CREATORS" },
  { id: 9, x: 18, y: 12, size: "small", depth: 0.8, name: "Claire V.", label: "DREAMERS" }
];

// Satellite offsets (dx, dy from parent coordinate) representing constellation branches
const satellites = [
  { parentId: 9, dx: -4, dy: -2 },
  { parentId: 9, dx: 3, dy: 4 },
  { parentId: 0, dx: -3, dy: -5 },
  { parentId: 1, dx: -4, dy: -6 },
  { parentId: 1, dx: 5, dy: -4 },
  { parentId: 3, dx: -5, dy: -6 },
  { parentId: 3, dx: -2, dy: 5 },
  { parentId: 4, dx: -4, dy: 4 },
  { parentId: 5, dx: 5, dy: 4 },
  { parentId: 6, dx: 5, dy: 6 },
  { parentId: 2, dx: 3, dy: -5 }
];

// Delicate straight connections linking nodes in a premium web layout
const connections = [
  { from: 0, to: 1, id: "line-0" },
  { from: 0, to: 3, id: "line-1" },
  { from: 0, to: 7, id: "line-2" },
  { from: 1, to: 7, id: "line-3" },
  { from: 1, to: 2, id: "line-4" },
  { from: 1, to: 8, id: "line-5" },
  { from: 3, to: 4, id: "line-6" },
  { from: 3, to: 7, id: "line-7" },
  { from: 7, to: 5, id: "line-8" },
  { from: 8, to: 2, id: "line-9" },
  { from: 8, to: 6, id: "line-10" },
  { from: 5, to: 4, id: "line-11" },
  { from: 5, to: 6, id: "line-12" },
  { from: 9, to: 0, id: "line-13" },
  { from: 9, to: 3, id: "line-14" }
];

// Story cards placed strictly on left/right margins (Explore phase)
const stories = [
  { id: 1, nodeId: 3, from: "FROM KOCHI", to: "TO DUBAI", badge: "FIRST SOLO", x: 15, y: 74 },
  { id: 2, nodeId: 8, from: "FIRST FLIGHT", to: "NEW ADVENTURE", badge: "KIT BUILDER", x: 83, y: 60 }
];

export default function CommunitySamplePage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cloudBgRef = useRef<HTMLDivElement>(null);
  const networkContainerRef = useRef<HTMLDivElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  const [activeScene, setActiveScene] = useState<string>("discover");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let ctx: ReturnType<typeof import("gsap")["default"]["context"]> | null = null;

    const initScrollAnimations = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (cancelled || !trackRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.0,
            pin: viewportRef.current,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
              if (self.progress < 0.25) {
                setActiveScene("discover");
              } else if (self.progress >= 0.25 && self.progress < 0.5) {
                setActiveScene("connect");
              } else if (self.progress >= 0.5 && self.progress < 0.75) {
                setActiveScene("explore");
              } else {
                setActiveScene("belong");
              }
            }
          }
        });

        // 1. Cloud Parallax
        if (cloudBgRef.current) {
          mainTimeline.to(cloudBgRef.current, {
            scale: 1.1,
            yPercent: -2,
            ease: "none"
          }, 0);
        }

        // 2. Clovers / Particles drift
        const particles = gsap.utils.toArray(".floating-particle");
        particles.forEach((p: any, idx: number) => {
          const depth = parseFloat(p.getAttribute("data-depth") || "1");
          mainTimeline.to(p, {
            y: `-=${120 * depth}px`,
            x: `+=${(idx % 2 === 0 ? 25 : -25) * depth}px`,
            rotation: idx % 2 === 0 ? 30 : -30,
            ease: "none"
          }, 0);
        });

        // 3. Editorial Typography Transitions
        const textBlocks = gsap.utils.toArray(".editorial-text-block");
        textBlocks.forEach((block: any, idx: number) => {
          const startPercent = idx * 0.25;
          const peakPercent = startPercent + 0.125;

          if (idx < 3) {
            mainTimeline.fromTo(block, 
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, ease: "power1.out", duration: 0.1 },
              startPercent
            ).to(block,
              { opacity: 0, y: -20, ease: "power1.in", duration: 0.1 },
              peakPercent + 0.05
            );
          } else {
            mainTimeline.fromTo(block, 
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, ease: "power1.out", duration: 0.1 },
              startPercent
            );
          }
        });

        // 4. Constellation Nodes & Satellites (z-index 20)
        const nodeEls = gsap.utils.toArray(".network-node");
        const lineEls = gsap.utils.toArray(".network-line");
        const satelliteEls = gsap.utils.toArray(".satellite-group");

        // Initial setup
        gsap.set(nodeEls, { opacity: 0, scale: 0.7 });
        gsap.set(satelliteEls, { opacity: 0 });
        gsap.set(lineEls, { strokeDasharray: 550, strokeDashoffset: 550 });

        // Discover Phase (0% - 25%): Fade in Marcus (0), Anjali (1), Sarah (2)
        mainTimeline.to([".node-0", ".node-1", ".node-2"], {
          opacity: 0.85,
          scale: 1,
          duration: 0.12,
          stagger: 0.03,
          ease: "power2.out"
        }, 0.02);

        // Connect Phase (25% - 50%): Fade in all nodes & satellites at MAXIMUM prominence
        mainTimeline.to(nodeEls, {
          opacity: 1,
          scale: 1.05,
          duration: 0.12,
          stagger: 0.01,
          ease: "power2.out"
        }, 0.25);

        mainTimeline.to(satelliteEls, {
          opacity: 1,
          duration: 0.12,
          stagger: 0.01,
          ease: "power2.out"
        }, 0.26);

        mainTimeline.to(lineEls, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 0.22,
          stagger: 0.01,
          ease: "power1.inOut"
        }, 0.28);

        // Explore Phase (50% - 75%): Push network slightly to background to make story cards prominent
        mainTimeline.to([nodeEls, satelliteEls], {
          opacity: 0.45,
          scale: 0.95,
          duration: 0.15
        }, 0.5);

        mainTimeline.to(lineEls, {
          opacity: 0.35,
          duration: 0.15
        }, 0.5);

        // Reveal story cards (strictly at left/right edges)
        gsap.set(".story-card", { opacity: 0, scale: 0.85, y: 15 });
        mainTimeline.to(".story-card", {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.15,
          stagger: 0.04,
          ease: "power2.out"
        }, 0.55);

        // Belong Phase (75% - 100%): Network convergence and focus final CTA
        if (networkContainerRef.current) {
          mainTimeline.to(networkContainerRef.current, {
            scale: 0.94,
            yPercent: -3,
            opacity: 0.25,
            duration: 0.25,
            ease: "power2.inOut"
          }, 0.75);
        }

        mainTimeline.to(".story-card", {
          opacity: 0.08,
          duration: 0.15
        }, 0.75);

      }, trackRef);

      ScrollTrigger.refresh();
      window.setTimeout(() => ScrollTrigger.refresh(), 300);
    };

    initScrollAnimations();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="w-full bg-[#FBFAF6] text-[#1a2332] font-sans overflow-x-hidden">
        
        <div ref={trackRef} className="relative w-full h-[400vh] bg-[#FBFAF6]">

          <div 
            ref={viewportRef}
            className="sticky-viewport sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#FBFAF6]"
          >
            
            {/* z-index 0: CLOUD BACKGROUND */}
            <div 
              ref={cloudBgRef}
              className="absolute -inset-[8%] bg-cover bg-center pointer-events-none will-change-transform opacity-60 z-0"
              style={{ backgroundImage: "url('/assets/hero_cloud_bg.png')" }}
            />
            {/* Atmospheric Ivory Wash */}
            <div className="absolute inset-0 bg-[#FBFAF6]/25 pointer-events-none z-0 mix-blend-multiply" />

            {/* z-index 10: SUBTLE ATMOSPHERIC PARTICLES / CLOVERS */}
            <div ref={particlesContainerRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
              {[
                { top: "18%", left: "12%", depth: 0.6 },
                { top: "16%", left: "82%", depth: 1.1 },
                { top: "70%", left: "10%", depth: 0.8 },
                { top: "85%", left: "84%", depth: 0.7 }
              ].map((p, idx) => (
                <div
                  key={idx}
                  className="floating-particle absolute opacity-30"
                  data-depth={p.depth}
                  style={{
                    top: p.top,
                    left: p.left,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#4F8B64]/40">
                    <path
                      d="M12 12C10.5 8 7.5 8 7.5 10.5C7.5 13 10.5 13 12 12ZM12 12C13.5 8 16.5 8 16.5 10.5C16.5 13 13.5 13 12 12ZM12 12C8 13.5 8 16.5 10.5 16.5C13 16.5 13 13.5 12 12ZM12 12C16 13.5 16 16.5 13.5 16.5C11 16.5 11 13.5 12 12ZM12 12C12 15 10 19 8 20"
                      fill="currentColor"
                    />
                    <path d="M12 12C12 15 10 19 8 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
              ))}
            </div>

            {/* z-index 20: COMMUNITY NETWORK / PEOPLE / CONNECTIONS */}
            <div 
              ref={networkContainerRef} 
              className="absolute inset-0 w-full h-full z-20 flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-full h-full max-w-[1440px] mx-auto">
                
                {/* SVG Connections & Satellites (Desktop only) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible hidden md:block">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F8B64" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#8C7D70" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>
                  
                  {/* Constellation Web Links */}
                  {connections.map((c) => {
                    const fromNode = nodes.find(n => n.id === c.from);
                    const toNode = nodes.find(n => n.id === c.to);
                    if (!fromNode || !toNode) return null;
                    
                    return (
                      <line
                        key={c.id}
                        x1={`${fromNode.x}%`}
                        y1={`${fromNode.y}%`}
                        x2={`${toNode.x}%`}
                        y2={`${toNode.y}%`}
                        stroke="url(#lineGrad)"
                        strokeWidth="1.2"
                        className={`network-line ${c.id} transition-all duration-500`}
                        style={{
                          strokeDasharray: 550,
                          strokeDashoffset: 550
                        }}
                      />
                    );
                  })}

                  {/* Satellite Constellation Radial lines */}
                  {satellites.map((sat, idx) => {
                    const parent = nodes.find(n => n.id === sat.parentId);
                    if (!parent) return null;

                    const endX = parent.x + sat.dx;
                    const endY = parent.y + sat.dy;

                    return (
                      <g key={idx} className="satellite-group transition-all duration-300">
                        {/* Radial Line */}
                        <line
                          x1={`${parent.x}%`}
                          y1={`${parent.y}%`}
                          x2={`${endX}%`}
                          y2={`${endY}%`}
                          stroke="#8C7D70"
                          strokeWidth="1.0"
                          strokeOpacity="0.25"
                          strokeDasharray="2 3"
                        />
                        {/* Outer Satellite Sub-dot */}
                        <circle
                          cx={`${endX}%`}
                          cy={`${endY}%`}
                          r="2.2"
                          fill="#8C7D70"
                          fillOpacity="0.65"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* People Nodes (Hidden or simplified on mobile via responsive classes) */}
                {nodes.map((node, index) => {
                  const isMobileVisible = index <= 1;
                  const nodeClass = isMobileVisible ? "flex" : "hidden md:flex";
                  const bubbleScale = node.depth;
                  
                  // Vary node sizing slightly
                  const sizeClasses = 
                    node.size === "large" ? "w-11 h-11" : 
                    node.size === "medium" ? "w-9 h-9" : "w-7.5 h-7.5";

                  return (
                    <div
                      key={node.id}
                      className={`network-node node-${node.id} absolute flex-col items-center pointer-events-auto transition-transform duration-300`}
                      style={{
                        top: `${node.y}%`,
                        left: `${node.x}%`,
                        transform: `translate(-50%, -50%) scale(${bubbleScale})`
                      }}
                    >
                      {/* White circle with border and custom silhouette */}
                      <div className={`${sizeClasses} rounded-full bg-white border border-[#EAE6DF] flex items-center justify-center shadow-xs cursor-pointer hover:border-[#4F8B64] hover:shadow-sm`}>
                        <svg className="w-[45%] h-[45%] text-[#6E5A4F]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 11c1.93 0 3.5-1.57 3.5-3.5S13.93 4 12 4 8.5 5.57 8.5 7.5 10.07 11 12 11zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                      </div>
                    </div>
                  );
                })}

                {/* Explore Story Cards (Desktop only) */}
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className="story-card absolute bg-white/95 border border-[#EAE6DF]/80 rounded-xl p-3.5 shadow-xs pointer-events-auto backdrop-blur-xs hidden md:block"
                    style={{
                      top: `${story.y}%`,
                      left: `${story.x}%`,
                      width: "140px",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <span className="text-[7.5px] font-bold text-[#4F8B64] tracking-wider bg-[#EEF4F0] px-1.5 py-0.5 rounded-sm uppercase block w-fit mb-1.5">
                      {story.badge}
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-[9.5px] font-medium text-[#111111] leading-none">
                        {story.from}
                      </div>
                      <div className="text-[8.5px] text-[#5B5B5B] flex items-center gap-1">
                        <span>&rarr;</span> {story.to}
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* z-index 30: MAIN EDITORIAL TYPOGRAPHY */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 px-6">
              <div className="max-w-[760px] text-center relative w-full h-[320px] flex items-center justify-center">
                
                {scenes.map((scene) => (
                  <div
                    key={scene.id}
                    className="editorial-text-block absolute inset-0 flex flex-col justify-center items-center opacity-0 select-none"
                  >
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#4F8B64] uppercase mb-3.5">
                      {scene.eyebrow}
                    </span>
                    <h2 
                      className="font-serif text-[#111111] leading-tight tracking-tight font-medium mb-4 max-w-xl"
                      style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
                    >
                      {scene.title}
                    </h2>
                    <p 
                      className="text-[#5B5B5B] leading-relaxed font-light max-w-md"
                      style={{ fontSize: "clamp(13px, 1.2vw, 16px)" }}
                    >
                      {scene.description}
                    </p>

                    {/* z-index 40: CTA */}
                    {scene.id === "belong" && (
                      <div className="mt-7 pointer-events-auto z-40">
                        <a
                          href="/community"
                          className="premium-btn inline-block bg-[#111111] text-[#FBFAF6] hover:bg-[#4F8B64] transition-all duration-300 font-medium text-[10px] tracking-[0.15em] uppercase shadow-sm rounded-full px-7 py-3"
                        >
                          JOIN THE COMMUNITY &rarr;
                        </a>
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* SCROLL STEP INDICATOR DOTS */}
            <div className="absolute bottom-16 right-12 z-50 flex items-center gap-2">
              {scenes.map((scene) => (
                <span
                  key={scene.id}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeScene === scene.id ? "bg-[#4F8B64] scale-125" : "bg-[#EAE6DF]"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
