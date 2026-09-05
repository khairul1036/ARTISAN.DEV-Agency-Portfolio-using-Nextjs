"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium px-7 py-3.5 rounded-full transition-all duration-300 interactive cursor-pointer select-none overflow-hidden text-sm tracking-wide";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white shadow-[0_0_25px_rgba(108,99,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] border border-transparent",
    secondary:
      "bg-[#0C0C0E] text-[#F5F5F5] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(108,99,255,0.5)] hover:bg-[#121217]",
    outline:
      "bg-transparent text-[#F5F5F5] border border-[rgba(255,255,255,0.15)] hover:border-[#6C63FF] hover:text-white",
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      >
        <button
          onClick={onClick}
          className={`${baseStyles} ${variants[variant]} ${className}`}
        >
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
      </motion.div>
    </div>
  );
}
