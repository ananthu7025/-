"use client";

import { useEffect, useRef, useState } from "react";

interface UseImageSequenceOptions {
  frameCount: number;
  getFrameSrc: (index: number) => string;
}

interface UseImageSequenceResult {
  images: HTMLImageElement[];
  isLoading: boolean;
  progress: number;
}

export function useImageSequence({
  frameCount,
  getFrameSrc,
}: UseImageSequenceOptions): UseImageSequenceResult {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(frameCount);

    setIsLoading(true);
    setProgress(0);

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = getFrameSrc(i);

      const onSettle = () => {
        loadedCount += 1;
        if (!cancelled) {
          setProgress(loadedCount / frameCount);
          if (loadedCount === frameCount) {
            setIsLoading(false);
          }
        }
      };

      img.onload = onSettle;
      img.onerror = onSettle;

      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount]);

  return { images: imagesRef.current, isLoading, progress };
}
