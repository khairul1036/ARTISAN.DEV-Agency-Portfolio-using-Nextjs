"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Technology", href: "/technology" },
  { name: "Pricing", href: "/pricing" },
  { name: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group interactive">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#00E5FF] p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(108,99,255,0.4)]">
            <div className="w-full h-full bg-[#050505] rounded-[7px] flex items-center justify-center font-bold text-white text-base tracking-tighter group-hover:bg-transparent transition-all">
              A
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base tracking-wider uppercase">
              ARTISAN<span className="text-[#00E5FF]">.DEV</span>
            </span>
            <span className="text-[10px] text-[#9A9A9A] tracking-widest uppercase -mt-1 font-mono">
              Digital Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-6 py-2 rounded-full border border-[rgba(255,255,255,0.08)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors duration-200 interactive ${isActive ? "text-white" : "text-[#9A9A9A] hover:text-white"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[rgba(255,255,255,0.1)] rounded-full -z-10 border border-[rgba(255,255,255,0.15)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Let's Talk CTA */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <MagneticButton variant="primary">
              Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-[#00E5FF]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[73px] bg-[#050505]/95 backdrop-blur-2xl z-30 flex flex-col p-8 justify-between border-t border-[rgba(255,255,255,0.08)] lg:hidden"
          >
            <div className="flex flex-col gap-4 mt-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-semibold flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-3 ${pathname === link.href ? "text-[#00E5FF]" : "text-white"
                      }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#9A9A9A]" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <Link href="/contact" className="w-full">
                <button className="w-full py-4 bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(108,99,255,0.3)]">
                  Start Your Project <ArrowUpRight className="w-5 h-5" />
                </button>
              </Link>
              <div className="text-center text-xs text-[#9A9A9A] font-mono">
                hello@artisan.dev
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
