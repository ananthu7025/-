import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FBFAF6] border-t border-[#EAE6DF] py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold tracking-tight text-[#111111]">
              Plane & Prop
            </span>
            <span className="w-1 h-1 rounded-full bg-[#D7A640] block"></span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link
              href="#community"
              className="text-xs uppercase tracking-wider text-[#5B5B5B] hover:text-[#111111] transition-colors"
            >
              Community
            </Link>
            <Link
              href="#why-plane-prop"
              className="text-xs uppercase tracking-wider text-[#5B5B5B] hover:text-[#111111] transition-colors"
            >
              Resources
            </Link>
            <Link
              href="#mentorship"
              className="text-xs uppercase tracking-wider text-[#5B5B5B] hover:text-[#111111] transition-colors"
            >
              Mentorship
            </Link>
            <Link
              href="https://instagram.com/planeandprop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-[#5B5B5B] hover:text-[#111111] transition-colors"
            >
              Instagram
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-[#5B5B5B] tracking-wide font-light">
            &copy; {currentYear} Plane & Prop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
