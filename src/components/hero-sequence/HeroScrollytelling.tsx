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
        {/* Full-bleed illustration: painted behind everything, filling the
            entire viewport with no container edge, so it reads as the page
            itself rather than embedded media. */}
        <HeroSequence containerRef={containerRef} onProgress={handleProgress} />

        {/* Text floats in the scene's negative space above the artwork. */}
        <div className="relative h-full w-full" style={{ zIndex: 10 }}>
          <HeroContent activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}
