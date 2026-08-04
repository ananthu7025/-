"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Why Plane & Prop", href: "/#why-plane-prop" },
    { name: "Community", href: "/community" },
    { name: "Student Letters", href: "/#letters" },
    { name: "Mentorship", href: "/#mentorship" },
    { name: "Newsletters", href: "/#newsletters" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBFAF6]/80 backdrop-blur-md border-b border-[#EAE6DF]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#111111] transition-colors group-hover:text-[#D7A640]">
            Plane & Prop
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D7A640] block"></span>
        </Link>

        {/* Menu Center (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#5B5B5B] hover:text-[#111111] transition-colors duration-250 relative py-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Right (Desktop) */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#join"
            className="premium-btn bg-[#111111] text-white hover:bg-[#D7A640] transition-colors duration-300"
          >
            Join Us
          </Link>
        </div>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#111111] hover:text-[#D7A640] transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#FBFAF6] border-b border-[#EAE6DF] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#5B5B5B] hover:text-[#111111] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#EAE6DF]">
                <Link
                  href="#join"
                  onClick={() => setIsOpen(false)}
                  className="premium-btn bg-[#111111] text-white hover:bg-[#D7A640] transition-colors duration-300 block text-center w-full"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
