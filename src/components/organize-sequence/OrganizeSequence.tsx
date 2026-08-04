"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useImageSequence } from "../hero-sequence/useImageSequence";

const FRAME_COUNT = 50;

function getFrameSrc(index: number) {
  const frameNumber = String(index + 1).padStart(3, "0");
  return `/newsframes/ezgif-frame-${frameNumber}.jpg`;
}

interface OrganizeSequenceProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  onProgress?: (progress: number) => void;
}

export default function OrganizeSequence({ containerRef, onProgress }: OrganizeSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameStateRef = useRef({ frame: 0 });
  const currentDrawnFrameRef = useRef(-1);
  const onProgressRef = useRef(onProgress);
  onProgressRef.current = onProgress;

  const { images, isLoading } = useImageSequence({
    frameCount: FRAME_COUNT,
    getFrameSrc,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      currentDrawnFrameRef.current = -1;
      drawFrame(frameStateRef.current.frame);
    };

    function drawFrame(frameIndex: number) {
      const image = images[frameIndex];
      if (!ctx || !canvas || !image || !image.complete || image.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imageRatio = image.naturalWidth / image.naturalHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      // Cover-fit: the illustration always fills the full panel edge-to-edge,
      // so there is never a visible rectangle boundary around it.
      let drawWidth: number;
      let drawHeight: number;

      if (imageRatio > canvasRatio) {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imageRatio;
      } else {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imageRatio;
      }

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
      currentDrawnFrameRef.current = frameIndex;
    }

    let rafId: number | null = null;

    const scheduleDraw = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const frameIndex = frameStateRef.current.frame;
        if (frameIndex !== currentDrawnFrameRef.current) {
          drawFrame(frameIndex);
        }
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.35,
      onUpdate: (self) => {
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.round(self.progress * (FRAME_COUNT - 1))
        );
        frameStateRef.current.frame = frameIndex;
        onProgressRef.current?.(self.progress);
        scheduleDraw();
      },
    });

    scheduleDraw();

    return () => {
      window.removeEventListener("resize", resize);
      trigger.kill();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [images, containerRef]);

  useEffect(() => {
    if (!isLoading) {
      const canvas = canvasRef.current;
      if (canvas) {
        currentDrawnFrameRef.current = -1;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const image = images[frameStateRef.current.frame];
          if (image && image.complete) {
            ScrollTrigger.refresh();
          }
        }
      }
    }
  }, [isLoading, images]);

  return (
    <div className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        aria-label="Animated sequence of an aviation study desk becoming organized with a newsletter, notes, and reference materials"
        role="img"
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F8F5EE]">
          <div
            className="h-9 w-9 rounded-full border-2 border-[#0B1B2B]/15 border-t-[#0B1B2B]/60 animate-spin"
            aria-label="Loading animation"
            role="status"
          />
        </div>
      )}
    </div>
  );
}
