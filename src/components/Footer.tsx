import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[rgba(255,255,255,0.08)] pt-24 pb-12 relative overflow-hidden">
      {/* Subtle Glow Backgrounds */}
      <div className="glow-orb-indigo -bottom-40 left-1/4 opacity-40 pointer-events-none" />
      <div className="glow-orb-cyan -bottom-40 right-1/4 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Big Callout */}
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-16">
          <p className="text-[#00E5FF] font-mono text-xs uppercase tracking-widest mb-4">
            {"/// READY TO BUILD?"}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.1]">
            Let&apos;s create something <span className="text-gradient-accent">worth remembering.</span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black font-semibold text-base px-8 py-4 rounded-full hover:bg-[#00E5FF] hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] interactive"
            >
              Start Your Project <ArrowUpRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:hello@artisan.dev"
              className="text-[#9A9A9A] hover:text-white font-mono text-sm underline underline-offset-8 transition-colors"
            >
              hello@artisan.dev
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16">
          {/* Col 1: Brand Info */}
          <div className="col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="font-bold text-white text-xl tracking-wider uppercase">
                ARTISAN<span className="text-[#00E5FF]">.DEV</span>
              </span>
              <p className="text-sm text-[#9A9A9A] max-w-sm mt-3 leading-relaxed">
                We design and engineer scalable websites, web applications, and custom software solutions for ambitious digital brands.
              </p>
            </div>
            <div className="mt-6 text-xs text-[#5A5A66] font-mono">
              Based in Global / Remote Studio
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5 font-mono">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#9A9A9A]">
              <li>
                <Link href="/work" className="hover:text-[#00E5FF] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00E5FF] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00E5FF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#00E5FF] transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#00E5FF] transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5 font-mono">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-[#9A9A9A]">
              <li>
                <Link href="/services" className="hover:text-[#00E5FF] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00E5FF] transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00E5FF] transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00E5FF] transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00E5FF] transition-colors">
                  API Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5 font-mono">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-[#9A9A9A]">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF] transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF] transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF] transition-colors">
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#5A5A66] gap-4">
          <p>© 2026 Artisan.Dev Studio. All rights reserved.</p>
          <div className="flex gap-6 font-mono">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
