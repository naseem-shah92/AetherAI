import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { TrustedBy } from "./components/TrustedBy";
import { Features } from "./components/Features";
import { ApiSandboxSection } from "./components/ApiSandboxSection";
import { StatusSection } from "./components/StatusSection";
import { DocsSection } from "./components/DocsSection";
import { SignInView } from "./components/SignInView";
import { GetStartedView } from "./components/GetStartedView";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { SplineScene } from "./components/ui/spline";
import { Spotlight } from "./components/ui/spotlight";
import { Card } from "./components/ui/card";
import { Play, ArrowRight, Activity, Percent, Sparkles } from "lucide-react";
import { InteractiveModalProvider, useInteractiveModals } from "./context/InteractiveModalContext";
import { InteractiveDialogs } from "./components/InteractiveDialogs";

function AppContent() {
  const { openModal } = useInteractiveModals();
  const [currentView, setCurrentView] = useState<"landing" | "signin" | "get-started">("landing");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#signin") {
        setCurrentView("signin");
        window.scrollTo({ top: 0 });
      } else if (hash === "#get-started") {
        setCurrentView("get-started");
        window.scrollTo({ top: 0 });
      } else {
        setCurrentView("landing");
        if (hash) {
          // If there is an anchor hash on entry, smoothly scroll down
          setTimeout(() => {
            const sectionId = hash.substring(1);
            const element = document.getElementById(sectionId);
            if (element) {
              const yOffset = -90;
              const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }, 200);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial check
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.location.hash = `#${id}`;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {currentView === "landing" ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#15121b] text-white min-h-screen relative font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-white"
        >
          {/* Background decoration elements */}
          {/* Ambient Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Dynamic Interactive Spotlight */}
          <Spotlight className="opacity-70" fill="rgba(147, 51, 234, 0.12)" />

          {/* Custom Header */}
          <Header />

          {/* Hero Section */}
          <main className="relative pt-24 min-h-screen flex flex-col justify-center">
            {/* Glow circles behind Spline */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-12">
              {/* Two-column responsive layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left side text pillar (Col span: 6) */}
                <div className="lg:col-span-5 space-y-8 relative z-20 text-center lg:text-left flex flex-col items-center lg:items-start">
                  
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center space-x-2 bg-[#2c2832]/60 border border-[#958ea0]/20 rounded-full px-4 py-1.5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
                    onClick={() => scrollToAnchor("status")}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-purple-300 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#cbc3d7] uppercase">
                      ⚡ Powered by Advanced AI (View Status)
                    </span>
                  </motion.div>

                  {/* Title heading */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    className="font-sans text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white"
                  >
                    Build Smarter <br className="hidden sm:inline" />
                    Products With <br />
                    <span className="bg-gradient-to-r from-purple-300 via-[#d0bcff] to-cyan-400 bg-clip-text text-transparent hover:brightness-110 transition-all duration-300">
                      Artificial <br className="hidden sm:inline" />
                      Intelligence
                    </span>
                  </motion.h1>

                  {/* Subhead text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-sm sm:text-base md:text-lg text-[#cbc3d7]/90 max-w-xl font-sans leading-relaxed"
                  >
                    Automate workflows, generate insights, and scale your business using next-generation AI technology designed for the cognitive era.
                  </motion.p>

                  {/* Call-to-action buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
                  >
                    {/* Free trial button */}
                    <button
                      onClick={() => { window.location.hash = "#get-started"; }}
                      className="relative px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 via-[#6d3bd7] to-cyan-500 overflow-hidden shadow-[0_0_20px_rgba(109,59,215,0.4)] hover:shadow-[0_0_30px_rgba(76,215,246,0.5)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 shrink-0 border-0 cursor-pointer min-h-[44px]"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-4 h-4 text-white hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Watch demo button */}
                    <button
                      onClick={() => openModal("watch_demo")}
                      className="px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-[#cbc3d7] border border-white/10 hover:border-white/20 hover:text-white bg-white/[0.02] hover:bg-white/5 backdrop-blur-md hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 shrink-0 cursor-pointer min-h-[44px]"
                    >
                      <Play className="w-4 h-4 text-cyan-400 fill-current" />
                      <span>Watch Demo</span>
                    </button>
                  </motion.div>

                  {/* Floating Analytics Card 3: PROCESSING REQUESTS */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                    className="pt-2 cursor-pointer w-full sm:w-auto flex justify-center lg:justify-start"
                    onClick={() => scrollToAnchor("sandbox")}
                  >
                    <Card
                      className="w-full sm:w-auto min-w-[240px] max-w-[260px] border-glass bg-glass flex items-center space-x-4 shadow-[0_15px_35px_rgba(0,0,0,0.5)] scale-90 sm:scale-100 origin-center lg:origin-left"
                      hoverGlow={true}
                    >
                      <div className="p-2.5 bg-purple-500/10 rounded-xl">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="text-left">
                        <span className="block text-[9px] font-mono tracking-widest text-[#cbc3d7]/40 uppercase">
                          PROCESSING REQUESTS
                        </span>
                        <span className="block text-xl font-extrabold text-white">
                         Live
                         </span>
                      </div>
                    </Card>
                  </motion.div>

                </div>

                {/* Right side container: Spline scene + overlay cards (Col span: 7) */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center relative w-full">
                  
                  {/* Spline container with responsive aspect ratio and heights */}
                  <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[420px] md:h-[480px] lg:h-[650px] flex items-center justify-center">
                    
                    {/* Decorative radial gradients to accent Spline lighting */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
                    <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/15 blur-[120px] pointer-events-none rounded-full" />

                    {/* Dynamic spline loader container */}
                    <div className="w-full h-full relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden select-none">
                      <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
                    </div>

                    {/* Desktop/Tablet absolute overlay widgets (hidden on mobile, shown on md+) */}
                    {/* Floating Analytics Card 1: AI AGENTS ACTIVE */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="hidden md:block absolute top-4 left-4 z-20 cursor-pointer md:scale-90 lg:scale-100 origin-top-left"
                      onClick={() => { window.location.hash = "#get-started"; }}
                    >
                      <Card
                        className="border-glass bg-glass p-3 sm:p-4 rounded-xl flex items-center space-x-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-purple-500/20"
                        hoverGlow={true}
                      >
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Activity className="w-4 h-4 text-purple-300" />
                        </div>
                        <div>
                          <span className="block text-[8px] font-mono tracking-widest text-[#cbc3d7]/50 uppercase">
                            AI AGENTS ACTIVE
                          </span>
                         <span className="block text-sm sm:text-base font-extrabold text-purple-300">
                             Beta
                               </span>
                        </div>
                      </Card>
                    </motion.div>

                    {/* Floating Analytics Card 2: AUTOMATION SUCCESS */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="hidden md:block absolute right-4 bottom-4 md:bottom-12 z-20 cursor-pointer md:scale-90 lg:scale-100 origin-bottom-right"
                      onClick={() => scrollToAnchor("status")}
                    >
                      <Card
                        className="border-glass bg-glass p-3 sm:p-4 rounded-xl flex items-center space-x-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-cyan-500/20"
                        hoverGlow={true}
                      >
                        <div className="p-2 bg-cyan-500/20 rounded-lg">
                          <Percent className="w-4 h-4 text-cyan-300" />
                        </div>
                        <div>
                          <span className="block text-[8px] font-mono tracking-widest text-[#cbc3d7]/50 uppercase">
                            AUTOMATION SUCCESS
                          </span>
                          <span className="block text-sm sm:text-base font-extrabold text-cyan-400">
                           New
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Mobile responsive stats cards row (shown on mobile < 768px, hidden on md+) */}
                  <div className="grid grid-cols-2 gap-3 w-full max-w-sm sm:max-w-md mt-6 px-1 md:hidden z-20">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="cursor-pointer"
                      onClick={() => { window.location.hash = "#get-started"; }}
                    >
                      <Card
                        className="border-glass bg-glass p-3 rounded-xl flex items-center space-x-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.5)] border-purple-500/20 w-full"
                        hoverGlow={true}
                      >
                        <div className="p-1.5 bg-purple-500/20 rounded-md shrink-0">
                          <Activity className="w-3.5 h-3.5 text-purple-300" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-[7.5px] font-mono tracking-widest text-[#cbc3d7]/50 uppercase truncate">
                            AI ACTIVE
                          </span>
                          <span className="block text-xs sm:text-sm font-extrabold text-purple-300 truncate">
                            +128%
                          </span>
                        </div>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="cursor-pointer"
                      onClick={() => scrollToAnchor("status")}
                    >
                      <Card
                        className="border-glass bg-glass p-3 rounded-xl flex items-center space-x-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.5)] border-cyan-500/20 w-full"
                        hoverGlow={true}
                      >
                        <div className="p-1.5 bg-cyan-500/20 rounded-md shrink-0">
                          <Percent className="w-3.5 h-3.5 text-cyan-300" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-[7.5px] font-mono tracking-widest text-[#cbc3d7]/50 uppercase truncate">
                            SUCCESS RATE
                          </span>
                          <span className="block text-xs sm:text-sm font-extrabold text-cyan-400 truncate">
                            98.7%
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  </div>

                </div>

              </div>
            </div>
          </main>

          {/* Trusted By Lineup */}
          <TrustedBy />

          {/* Bento Grid Features - Models Grid Section (#models) */}
          <Features />

          {/* API Sandbox Section (#sandbox) */}
          <ApiSandboxSection />

          {/* Infrastructure Telemetry Section (#status) */}
          <StatusSection />

          {/* Sovereign Docs Section (#docs) */}
          <DocsSection />

          {/* Interactive Call to Action */}
          <CTASection />

          {/* Footer Links & Info */}
          <Footer />

          {/* Interactive Modal System (strictly secondary modules) */}
          <InteractiveDialogs />
        </motion.div>
      ) : currentView === "signin" ? (
        <motion.div
          key="signin"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -45 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full bg-[#0c0a0f]"
        >
          <SignInView onBack={() => setCurrentView("landing")} />
        </motion.div>
      ) : (
        <motion.div
          key="get-started"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -45 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full bg-[#0c0a0f]"
        >
          <GetStartedView onBack={() => setCurrentView("landing")} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <InteractiveModalProvider>
      <AppContent />
    </InteractiveModalProvider>
  );
}
