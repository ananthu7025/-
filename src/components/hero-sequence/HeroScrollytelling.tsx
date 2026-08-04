"use client";

import { useRef, useState } from "react";
import HeroSequence from "./HeroSequence";
import HeroContent, { getActiveStopIndex } from "./HeroContent";

export default function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndexRef = useRef(0);

  const handleProgress = (progress: number) => {
    const nextIndex = getActiveStopIndex(progress);
    if (nextIndex !== lastIndexRef.current) {
      lastIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F8F5EE] h-[220vh] lg:h-[400vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full w-full">
          {/* Mobile: image on top */}
          <div className="order-1 lg:order-2 relative w-full lg:w-[55%] h-[45vh] lg:h-full shrink-0">
            <HeroSequence containerRef={containerRef} onProgress={handleProgress} />
          </div>

          {/* Mobile: text below */}
          <div className="order-2 lg:order-1 relative w-full lg:w-[45%] h-[55vh] lg:h-full px-6 sm:px-10 lg:pl-16 lg:pr-10 max-w-[1280px] mx-auto lg:mx-0">
            <HeroContent activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
