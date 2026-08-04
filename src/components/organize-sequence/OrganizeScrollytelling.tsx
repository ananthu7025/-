"use client";

import { useRef, useState } from "react";
import OrganizeSequence from "./OrganizeSequence";
import OrganizeContent, { getActiveStopIndex } from "./OrganizeContent";

export default function OrganizeScrollytelling() {
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
      className="relative w-full bg-[#F8F5EE] h-[300vh] my-12"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-bleed illustration: filling the sticky panel below the fixed
            navbar, so the artwork's top edge is never hidden behind it. */}
        <div className="absolute inset-x-0 bottom-0 top-20">
          <OrganizeSequence containerRef={containerRef} onProgress={handleProgress} />
        </div>

        {/* Text floats in the scene's negative space above the artwork. */}
        <div className="relative h-full w-full" style={{ zIndex: 10 }}>
          <OrganizeContent activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}
