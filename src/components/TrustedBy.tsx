import React from "react";
import { motion } from "framer-motion";

export const TrustedBy: React.FC = () => {
  const logos = [
    {
      name: "OpenAI",
      icon: (
        <svg className="w-5 h-5 text-[#cbc3d7]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M19.07 4.93l-4.24 4.24M9.17 14.83l-4.24 4.24" />
        </svg>
      ),
    },
    {
      name: "Stripe",
      icon: (
        <svg className="w-5 h-5 text-[#cbc3d7]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-1h2v1zm1.5-3.5c0 1.5-1.5 2-2.5 2H11v-1.5h1c.8 0 1-.2 1-.5s-.2-.5-1-.5h-1c-1 0-2.5-.5-2.5-2s1.5-2 2.5-2h1V11h-1c-.8 0-1 .2-1 .5s.2.5 1 .5h1c1 0 2.5.5 2.5 2z" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      icon: (
        <svg className="w-4 h-4 text-[#cbc3d7]/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22H22L12 2Z" />
        </svg>
      ),
    },
    {
      name: "Notion",
      icon: (
        <svg className="w-5 h-5 text-[#cbc3d7]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8v8h2V10l4 6h2V8h-2v6l-4-6H8z" />
        </svg>
      ),
    },
    {
      name: "Anthropic",
      icon: (
        <svg className="w-5 h-5 text-[#cbc3d7]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 20L12 4L20 20M7 14h10" />
        </svg>
      ),
    },
    {
      name: "Perplexity",
      icon: (
        <svg className="w-5 h-5 text-[#cbc3d7]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M12 6v12M8 10h8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-[#100e16]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] md:text-xs font-mono font-bold tracking-widest text-[#cbc3d7]/40 uppercase mb-8">
          Trusted By Innovative Teams Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 filter grayscale opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              {logo.icon}
              <span className="font-sans font-semibold text-sm text-[#cbc3d7]/70 tracking-wide">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
