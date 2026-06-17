import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Mail, Lock, ChevronRight, Check, ShieldCheck, ArrowLeft, Terminal } from "lucide-react";
import { Card } from "./ui/card";

interface SignInViewProps {
  onBack: () => void;
}

export const SignInView: React.FC<SignInViewProps> = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"input" | "success">("input");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
    }, 1500);
  };

  const handleBackToLanding = () => {
    // Reset login states and clear location hash
    window.location.hash = "";
    onBack();
  };

  return (
    <div className="min-h-screen bg-[#0c0a0f] text-white flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden">
      {/* Dynamic Background decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating terminal design lines */}
      <div className="absolute top-8 left-12 font-mono text-[9px] text-[#cbc3d7]/30 uppercase tracking-widest hidden md:block">
        <span>AETHER AUTHENTICATOR // SYSTEM STATUS: SHIELDED</span>
      </div>

      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={handleBackToLanding}
        className="absolute top-10 left-6 md:left-12 flex items-center space-x-2 text-xs font-mono tracking-widest text-[#cbc3d7]/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 border border-white/5 rounded-full px-4 py-2 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>BACK TO ORCHESTRATOR</span>
      </motion.button>

      <div className="max-w-md w-full relative z-10">
        
        {/* Animated Brand Logo heading */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-3 bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px] rounded-2xl shadow-[0_0_20px_rgba(109,59,215,0.25)] mb-4"
          >
            <div className="p-3 bg-[#110e16] rounded-[14px]">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-sans font-extrabold text-white tracking-tight"
          >
            AetherAI Node Gateway
          </motion.h1>
          <p className="text-xs text-[#cbc3d7]/50 mt-1.5 font-mono">AUTHORIZED PROTOCOL COMPILATION ACCESS ONLY</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Card className="bg-[#121017]/90 border-white/10 p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.85)] relative overflow-hidden backdrop-blur-2xl" hoverGlow={true}>
            {step === "success" ? (
              <div className="text-center py-6 space-y-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-purple-650 via-cyan-400 to-green-400 p-[1.5px] flex items-center justify-center relative animate-bounce">
                  <div className="w-full h-full bg-[#15121b] rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-green-400/20 blur" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-sans tracking-tight">Identity Approved</h3>
                  <p className="text-sm text-[#cbc3d7]/70 leading-relaxed max-w-xs mx-auto">
                    Welcome back. Your credentials matched successfully. Synchronizing telemetry ports and streaming model weights.
                  </p>
                </div>

                <div className="p-4 bg-[#0a080d] rounded-2xl border border-white/5 font-mono text-left space-y-2">
                  <span className="block text-[#cbc3d7]/40 uppercase tracking-[0.1em] text-[9px] font-bold pb-1 border-b border-white/5 flex items-center justify-between">
                    <span>SECURITY INFRASTRUCTURE ACCORD</span>
                    <span className="text-green-400">PASSED</span>
                  </span>
                  <div className="text-[10px] space-y-1 text-[#cbc3d7]/70">
                    <span className="block"><strong className="text-purple-300">AUTHORIZED TOKEN:</strong> jwt_token_aether_817293817aed</span>
                    <span className="block"><strong className="text-cyan-400">SESSION CLASS:</strong> HIGH_SERVICE_SLA</span>
                    <span className="block"><strong className="text-[#cbc3d7]">HOST VERIFIED:</strong> edge-ingress-node-3</span>
                  </div>
                </div>

                <button
                  onClick={handleBackToLanding}
                  className="w-full py-4 rounded-xl text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-purple-600 via-[#6d3bd7] to-cyan-500 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 border-0 cursor-pointer shadow-[0_0_15px_rgba(109,59,215,0.4)]"
                >
                  <span>STREAM ACCESS FORUM</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Terminal className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-sans tracking-tight">Access Control System</h3>
                    <p className="text-xs text-[#cbc3d7]/50">Enter credentials for secure orchestration</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-[#cbc3d7]/45 uppercase mb-2">
                      WORKSPACE ACCESS EMAIL
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbc3d7]/40" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. administrator@enterprise.ai"
                        className="w-full pl-12 pr-4 py-3 bg-[#0a080d] border border-white/10 rounded-xl focus:border-purple-500/70 focus:outline-none transition-all placeholder:text-[#cbc3d7]/25 text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-[#cbc3d7]/45 uppercase mb-2">
                      CLUSTER PASSKEY SECURE STATE
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbc3d7]/40" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full pl-12 pr-4 py-3 bg-[#0a080d] border border-white/10 rounded-xl focus:border-cyan-400/70 focus:outline-none transition-all placeholder:text-[#cbc3d7]/25 text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer text-[#cbc3d7]/70 hover:text-white select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="rounded bg-[#0a080d] border-white/10 text-purple-600 focus:ring-0 cursor-pointer"
                      />
                      <span>Keep workspace authenticated</span>
                    </label>
                    <a href="#" className="text-cyan-400 hover:underline">Forgot passkey?</a>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 mt-4 rounded-xl text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(109,59,215,0.4)] disabled:opacity-50 cursor-pointer border-0"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
                        <span>DECRYPTING SECURE PASSKEY LOGS...</span>
                      </>
                    ) : (
                      <>
                        <span>BOOT SECURE INTERACTION</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
