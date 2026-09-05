"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Star,
  CheckCircle2,
  Quote,
  Layers
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import ProjectCard from "@/components/ProjectCard";
import LogoRail from "@/components/LogoRail";
import FaqAccordion from "@/components/FaqAccordion";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { faqsData } from "@/data/faqs";

const testimonials = [
  {
    quote: "ARTISAN transformed our legacy SaaS product into a modern, lightning-fast platform. Our user retention surged by 44% in just two months after release.",
    author: "Elena Rostova",
    role: "VP of Product, Nexus Systems",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "The visual polish, typography taste, and underlying software engineering exceeded our expectations. They deliver commercial-grade software on tight deadlines.",
    author: "Marcus Thorne",
    role: "Founder & CTO, Vanguard AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Working with ARTISAN felt like having a top 1% Silicon Valley product engineering squad embedded right inside our company.",
    author: "Sarah Jenkins",
    role: "Director of Digital, Horizon Capital",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
];

const metrics = [
  { value: "99.8%", label: "On-Time Delivery" },
  { value: "4.9/5", label: "Client Satisfaction" },
  { value: "10M+", label: "Daily Active End-Users" },
  { value: "<300ms", label: "Avg API Response Time" },
];

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="relative overflow-hidden bg-[#050505] text-[#F5F5F5]">
      {/* Subtle Background Grid & Light Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="glow-orb-indigo top-10 -left-20 opacity-50" />
      <div className="glow-orb-cyan top-80 right-0 opacity-30" />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-[rgba(108,99,255,0.3)] shadow-[0_0_20px_rgba(108,99,255,0.15)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#D1D5DB] uppercase font-semibold">
                PREMIUM DIGITAL PRODUCT & SOFTWARE STUDIO
              </span>
            </motion.div>

            {/* Editorial Serif Accent Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] text-white"
            >
              Ideas In. <br />
              <span className="font-serif italic font-normal text-gradient-accent">
                Digital Products
              </span>{" "}
              Out.
            </motion.h1>

            {/* High Contrast Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-[#9A9A9A] font-light max-w-2xl leading-relaxed"
            >
              We craft high-converting web applications, scalable SaaS architectures, and custom digital experiences designed to elevate ambitious brands.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link href="/contact">
                <MagneticButton variant="primary">
                  Start Your Project <ArrowUpRight className="w-5 h-5 ml-1" />
                </MagneticButton>
              </Link>

              <Link href="/work">
                <MagneticButton variant="outline">
                  View Our Portfolio
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Proof Rating Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.06)] max-w-md"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Client Avatar"
                    className="w-8 h-8 rounded-full border-2 border-[#050505] object-cover"
                  />
                ))}
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-white font-mono ml-1">4.9/5.0</span>
                </div>
                <span className="text-[#9A9A9A] text-[11px]">
                  Rated by founders, CTOs & product leaders
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Glass Metrics Cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:grid grid-cols-2 gap-4 relative"
          >
            <div className="glow-orb-indigo -inset-4 opacity-30" />
            {metrics.map((m) => (
              <div
                key={m.label}
                className="glass-card p-6 rounded-2xl border border-[rgba(255,255,255,0.08)] hover:border-[#6C63FF]/40 transition-all duration-300 group"
              >
                <div className="text-3xl font-extrabold text-white group-hover:text-[#00E5FF] transition-colors font-mono">
                  {m.value}
                </div>
                <div className="text-xs text-[#9A9A9A] mt-2 font-medium tracking-wide uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION 2 — COLLABORATION LOGO RAIL */}
      <LogoRail />

      {/* SECTION 3 — CORE OFFER & CAPABILITIES */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase">
            {"/// OUR CAPABILITIES"}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="font-serif italic text-gradient-accent">Scale & Speed</span>
          </h2>
          <p className="text-[#9A9A9A] text-base leading-relaxed">
            From modern web design to cloud-native software architecture, we deliver complete digital product solutions under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 6).map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-[#6C63FF]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6C63FF]/20 to-[#00E5FF]/20 border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-6 text-[#00E5FF] group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.capabilities.slice(0, 3).map((item, i) => (
                  <li key={i} className="text-xs text-[#D1D5DB] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00E5FF] inline-flex items-center gap-1 transition-colors"
              >
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — FEATURED WORK & PROOF */}
      <section className="py-24 bg-[#08080c] border-y border-[rgba(255,255,255,0.06)] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase">
                {"/// SELECTED CASE STUDIES"}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
                Proven <span className="font-serif italic text-gradient-accent">Commercial Impact</span>
              </h2>
            </div>
            <Link href="/work">
              <MagneticButton variant="outline">
                Explore All Projects <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — TESTIMONIALS */}
      <section className="py-28 max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase">
            {"/// CLIENT FEEDBACK"}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted by <span className="font-serif italic text-gradient-accent">Product Leaders</span>
          </h2>
          <p className="text-[#9A9A9A] text-base">
            Here is what engineering VPs, startup founders, and design leads say about working with ARTISAN.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl relative flex flex-col justify-between hover:border-[#6C63FF]/40 transition-all"
            >
              <div>
                <Quote className="w-10 h-10 text-[#6C63FF]/30 mb-4" />
                <p className="text-sm md:text-base text-[#D1D5DB] leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-[rgba(255,255,255,0.2)]"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-[#9A9A9A]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — FAQ ACCORDION */}
      <section className="py-24 bg-[#08080c] border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase">
              {"/// COMMON QUESTIONS"}
            </span>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked <span className="font-serif italic text-gradient-accent">Questions</span>
            </h2>
          </div>
          <FaqAccordion items={faqsData} />
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a12]">
        <div className="glow-orb-indigo top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <span className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase">
            {"/// READY TO BUILD?"}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Let&apos;s Create Your Next <br />
            <span className="font-serif italic font-normal text-gradient-accent">Digital Masterpiece</span>
          </h2>
          <p className="text-lg text-[#9A9A9A] max-w-xl mx-auto leading-relaxed">
            Have a project in mind or need expert web development & software engineering? Let&apos;s make it happen.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="/contact">
              <MagneticButton variant="primary">
                Schedule a Call <ArrowUpRight className="w-5 h-5 ml-1" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
