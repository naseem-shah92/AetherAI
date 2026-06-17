import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, Zap } from "lucide-react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navLinks = [
    { name: "Models Grid", id: "models" },
    { name: "API Sandbox", id: "sandbox" },
    { name: "System Status", id: "status" },
    { name: "Sovereign Docs", id: "docs" },
  ];

  // Monitor scrolling to track active section
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash === "#signin" || hash === "#get-started" || hash === "#get_started") {
        setActiveSection("");
        return;
      }

      const scrollPosition = window.scrollY + 160; // offset addition
      const sections = ["models", "sandbox", "status", "docs"];

      // Default state when at the top of the page
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Close mobile panel
    setIsOpen(false);

    const currentHash = window.location.hash;
    if (currentHash === "#signin" || currentHash === "#get-started" || currentHash === "#get_started") {
      // Navigate to main landing page first, then scroll
      window.location.hash = `#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for the fixed header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#15121b]/80 backdrop-blur-md border-b border-white/5">
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 grid grid-cols-[auto_1fr_auto] items-center w-full">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center space-x-2 lg:space-x-3 group no-underline z-10 whitespace-nowrap shrink-0">
          <div className="relative flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#15121b] rounded-[10px] flex items-center justify-center">
              <Cpu className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 group-hover:text-purple-300 transition-colors duration-300" />
            </div>
            {/* Ambient glow behind logo */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 blur opacity-40 group-hover:opacity-65 transition-opacity duration-300" />
          </div>
          <span className="font-sans font-extrabold text-white text-lg lg:text-xl tracking-wide whitespace-nowrap">
            AetherAI
          </span>
        </a>

        {/* Desktop Nav Links - Centered inside Column 2 naturally on smaller layout to prevent overlaps, and absolutely centered on lg layout */}
        <div className="hidden md:flex justify-center items-center w-full h-full relative px-2 overflow-visible">
          <nav className="flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 gap-[clamp(12px,1.5vw,28px)] xl:gap-[clamp(24px,2vw,48px)] z-10 whitespace-nowrap shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative py-1.5 px-1 text-xs lg:text-[13px] xl:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer border-0 bg-transparent outline-none whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                      : "text-[#cbc3d7]/80 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_1px_10px_rgba(147,51,234,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Actions desktop (Column 3) / Mobile Hamburg */}
        <div className="flex justify-end items-center gap-3 lg:gap-6 z-10 w-full whitespace-nowrap shrink-0">
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="#signin"
              className="text-white hover:text-cyan-400 transition-all duration-200 text-xs lg:text-sm font-medium border-0 bg-transparent cursor-pointer no-underline whitespace-nowrap shrink-0"
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="relative px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-[10px] lg:text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden shadow-[0_0_15px_rgba(109,59,215,0.4)] hover:shadow-[0_0_25px_rgba(109,59,215,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-1.5 border-0 cursor-pointer no-underline whitespace-nowrap shrink-0"
            >
              <Zap className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current text-white animate-pulse" />
              <span>GET STARTED</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[#cbc3d7] hover:text-white transition-all cursor-pointer z-50 touch-manipulation whitespace-nowrap shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer (Full-screen Slide-in Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-40 md:hidden bg-[#0d0a11]/98 backdrop-blur-2xl flex flex-col justify-between"
          >
            {/* Ambient Background decoration behind mobile menu */}
            <div className="absolute top-[20%] left-[-20%] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-20%] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Menu Header with Logo & Close Button placeholder spacing */}
            <div className="h-20 px-6 flex items-center justify-between border-b border-white/5">
              <a href="#" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 no-underline">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px]">
                  <div className="w-full h-full bg-[#15121b] rounded-[6px] flex items-center justify-center">
                    <Cpu className="w-4.5 h-4.5 text-cyan-400" />
                  </div>
                </div>
                <span className="font-sans font-extrabold text-white text-lg tracking-wide">
                  AetherAI
                </span>
              </a>
              {/* Spacer matching hamburger container alignment */}
              <div className="w-11 h-11" />
            </div>

            {/* Center aligned touch-friendly links */}
            <div className="flex-1 px-6 py-12 flex flex-col justify-start space-y-6 overflow-y-auto scrollbar select-none z-10">
              <span className="block text-[10px] font-mono tracking-widest text-[#cbc3d7]/30 uppercase mb-2">
                NAVIGATION CHANNELS
              </span>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`block text-left w-full text-2xl font-bold font-sans py-3 bg-transparent border-0 cursor-pointer transition-colors duration-250 min-h-[48px] touch-manipulation focus:outline-none focus:text-cyan-400 ${
                      isActive 
                        ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]" 
                        : "text-[#cbc3d7]/85 hover:text-white"
                    }`}
                  >
                    <span className="relative inline-flex items-center space-x-3">
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                    </span>
                  </button>
                );
              })}

              <div className="h-px bg-white/5 my-6" />

              <div className="flex flex-col gap-4">
                <a
                  href="#signin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full min-h-[48px] text-base font-semibold text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-center no-underline"
                >
                  Sign In
                </a>
                <a
                  href="#get-started"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full min-h-[48px] text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_4px_15px_rgba(109,59,215,0.3)] rounded-xl transition-all text-center no-underline"
                >
                  <span>GET STARTED</span>
                </a>
              </div>
            </div>

            {/* Footer label inside overlay */}
            <div className="p-6 border-t border-white/5 bg-black/20 text-center font-mono text-[9px] text-[#cbc3d7]/30 tracking-widest uppercase">
              AetherAI Core Orchestration Gateway // Node 4.12
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
