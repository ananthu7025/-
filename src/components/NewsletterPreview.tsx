"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Mail, FileText, X, Download } from "lucide-react";

const SAMPLE_PDF_SRC = "/sample-newsletter.pdf";

export default function NewsletterPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  const [showToast, setShowToast] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && !dismissed) {
      const timer = setTimeout(() => setShowToast(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, dismissed]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowToast(false);
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowToast(false);
    setDismissed(true);
  };

  return (
    <>
      {/* Invisible sentinel that tracks when this section scrolls into view */}
      <div ref={sectionRef} className="absolute top-0 h-1 w-1" aria-hidden="true" />

      {mounted &&
        createPortal(
          <>
            {/* Corner toast */}
            <AnimatePresence>
              {showToast && (
                <motion.div
                  initial={{ opacity: 0, y: 40, x: 20, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="fixed bottom-6 right-6 z-[90] w-[260px]"
                >
                  <motion.button
                    type="button"
                    onClick={handleOpen}
                    whileHover={{ y: -2 }}
                    animate={{ rotate: [0, -1.5, 1.5, -1, 0] }}
                    transition={{
                      rotate: {
                        duration: 0.6,
                        delay: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                    className="group relative flex w-full items-start gap-3 rounded-2xl bg-white border border-[#EAE6DF] shadow-lg px-4 py-3.5 text-left cursor-pointer"
                  >
                    <button
                      type="button"
                      onClick={handleDismiss}
                      aria-label="Dismiss"
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <X className="w-3 h-3" />
                    </button>

                    <span className="relative flex-shrink-0 mt-0.5">
                      <span className="absolute inset-0 rounded-full bg-[#D7A640]/30 animate-ping" />
                      <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#D7A640]">
                        <Mail className="w-4 h-4 text-white" />
                      </span>
                    </span>

                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-[#111111] leading-snug">
                        You have a newsletter to read
                      </span>
                      <span className="mt-1 block text-xs text-[#5B5B5B] leading-snug">
                        Peek at a sample issue &mdash; tap to open
                      </span>
                    </span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Animated PDF viewer modal */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Sample newsletter preview"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#0B1B2B]/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setIsOpen(false)}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotateX: -12, y: 24 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateX: 8, y: 12 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformPerspective: 1200 }}
                    className="relative w-full max-w-3xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                  >
                    <div className="flex items-center justify-between px-5 py-3 border-b border-[#EAE6DF] bg-[#FAF6EE]">
                      <div className="flex items-center gap-2 text-sm font-medium text-[#111111]">
                        <FileText className="w-4 h-4 text-[#D7A640]" />
                        Plane &amp; Prop Weekly — Sample Issue
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={SAMPLE_PDF_SRC}
                          download
                          className="flex items-center gap-1.5 text-xs font-medium text-[#5B5B5B] hover:text-[#111111] transition-colors px-2.5 py-1.5 rounded-full hover:bg-[#EAE6DF]"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Download
                        </a>
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          aria-label="Close preview"
                          className="p-1.5 rounded-full text-[#5B5B5B] hover:text-[#111111] hover:bg-[#EAE6DF] transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 bg-[#EAE6DF]/40">
                      <iframe
                        src={`${SAMPLE_PDF_SRC}#toolbar=0`}
                        title="Sample newsletter PDF"
                        className="w-full h-full border-0"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>,
          document.body
        )}
    </>
  );
}
