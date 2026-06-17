import React from "react";
import { motion } from "framer-motion";
import { Zap, Mail } from "lucide-react";
import { useInteractiveModals } from "../context/InteractiveModalContext";

export const CTASection: React.FC = () => {
  const { openModal } = useInteractiveModals();

  return (
    <section id="enterprise" className="py-24 relative overflow-hidden bg-[#0d0a11]">
      {/* Background glow orb */}
      <div className="absolute inset-x-0 top-0 h-[100%] w-full bg-[radial-gradient(ellipse_at_top,rgba(109,59,215,0.2),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="relative rounded-3xl border border-white/5 bg-[#17141d]/50 p-12 md:p-16 backdrop-blur-xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_30px_60px_-15px_rgba(0,0,0,0.8)]">
          {/* Internal glowing decoration lines */}
          <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-gradient-to-l from-cyan-400 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Ready to transform your business?
            </h2>
            <p className="font-sans text-base md:text-lg text-[#cbc3d7]/85 max-w-2xl mx-auto leading-relaxed mb-10">
              Join thousands of forward-thinking teams building the next generation of software with AetherAI. Scale your operation safely.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal("get_started")}
                className="w-full sm:w-auto relative px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden shadow-[0_0_20px_rgba(109,59,215,0.5)] hover:shadow-[0_0_30px_rgba(109,59,215,0.7)] transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center space-x-2 border-0 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-white fill-current animate-pulse" />
                <span>Get Started Free</span>
              </button>
              <button
                onClick={() => openModal("contact_sales")}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white border border-white/10 hover:border-white/20 hover:bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center space-x-2 bg-transparent cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#cbc3d7]" />
                <span>Contact Sales</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
