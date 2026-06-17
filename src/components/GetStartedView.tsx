import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Database, Server, ChevronRight, CheckCircle2, RotateCcw, ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";

interface GetStartedViewProps {
  onBack: () => void;
}

export const GetStartedView: React.FC<GetStartedViewProps> = ({ onBack }) => {
  const [projectName, setProjectName] = useState("");
  const [region, setRegion] = useState("us-central1");
  const [computeTier, setComputeTier] = useState<"standard" | "gpu" | "infinite">("gpu");
  const [deploymentStep, setDeploymentStep] = useState<"setup" | "deploying" | "complete">("setup");
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const runDeploymentSim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName) return;
    setDeploymentStep("deploying");
    setLogs([]);
    setProgress(0);
  };

  const handleBackToLanding = () => {
    window.location.hash = "";
    onBack();
  };

  useEffect(() => {
    if (deploymentStep !== "deploying") return;

    const logMessages = [
      "⚡ Initializing secure transport channel pipeline...",
      "📦 Packaging regional clusters on edge framework...",
      "🤖 Bootstrapping cognitive hypervisor sandbox context...",
      "🧠 Tuning deep reinforcement model weights dynamic parameter alignment...",
      "🔒 Sealing communication ports with TLS transport rules...",
      "🚀 Host allocation active: Cluster cluster-edge-400 online!",
    ];

    let currentLogIndex = 0;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setDeploymentStep("complete");
          }, 600);
          return 100;
        }
        const stepAmt = Math.floor(Math.random() * 15) + 5;
        const nextVal = Math.min(prev + stepAmt, 100);

        if (nextVal > (currentLogIndex + 1) * 16 && currentLogIndex < logMessages.length) {
          setLogs((l) => [...l, logMessages[currentLogIndex]]);
          currentLogIndex++;
        }

        return nextVal;
      });
    }, 350);

    return () => clearInterval(progressInterval);
  }, [deploymentStep]);

  return (
    <div className="min-h-screen bg-[#0c0a0f] text-white flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={handleBackToLanding}
        className="absolute top-10 left-6 md:left-12 flex items-center space-x-2 text-xs font-mono tracking-widest text-[#cbc3d7]/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 border border-white/5 rounded-full px-4 py-2 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>BACK TO ORCHESTRATOR</span>
      </motion.button>

      <div className="max-w-xl w-full relative z-10">
        
        {/* Title */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 bg-gradient-to-tr from-cyan-400 to-indigo-600 p-[1.5px] rounded-2xl shadow-[0_0_20px_rgba(109,59,215,0.25)] mb-4"
          >
            <div className="p-3 bg-[#110e16] rounded-[14px]">
              <Cloud className="w-6 h-6 text-cyan-400" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-sans font-extrabold text-white tracking-tight"
          >
            Create Your Cognitive Cluster
          </motion.h1>
          <p className="text-sm text-[#cbc3d7]/65 mt-2">Provision your dedicated model endpoint on our latency-optimized global edge nodes.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Card className="bg-[#121017]/90 border-white/10 p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.85)] relative overflow-hidden backdrop-blur-2xl" hoverGlow={true}>
            
            {deploymentStep === "complete" ? (
              <div className="text-center py-6 space-y-6">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 via-cyan-400 to-green-400 p-[1.5px] flex items-center justify-center relative animate-bounce">
                  <div className="w-full h-full bg-[#15121b] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-450" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-sans tracking-tight">Cluster Node Active!</h3>
                  <p className="text-sm text-[#cbc3d7]/70 font-sans leading-relaxed max-w-sm mx-auto">
                    Project <strong className="text-white">"{projectName}"</strong> has been successfully provisioned. Regional model weights are locked and active in <strong className="text-white">{region}</strong>.
                  </p>
                </div>

                <div className="bg-[#0a080d] rounded-2xl border border-white/5 p-5 text-left font-mono text-[10px] space-y-2.5">
                  <div className="flex items-center justify-between text-[#cbc3d7]/40 uppercase tracking-[0.1em] border-b border-white/5 pb-2">
                    <span>COGNITIVE LAYER PARAMS</span>
                    <span className="text-green-400 font-bold">STATUS: RUNNING</span>
                  </div>
                  <div className="text-[#cbc3d7]/85 space-y-1.5">
                    <span className="block"><strong className="text-cyan-400 text-[9px] uppercase tracking-wider block">API Endpoint Endpoint:</strong> <span className="text-[11px] block mt-0.5 whitespace-nowrap bg-white/5 px-2.5 py-1 rounded border border-white/5 shrink text-[#d5cbe2] overflow-x-auto select-all">https://api.aether.ai/v1/{projectName.toLowerCase().replace(/\s+/g, "-")}</span></span>
                    <span className="block mt-4"><strong className="text-purple-300">Compute Allocation:</strong> {computeTier === "standard" ? "Cognitive Shared Core" : computeTier === "gpu" ? "Hybrid Clustered GPU Grid" : "Sovereign Low-Latency Engine"}</span>
                    <span className="block"><strong className="text-indigo-400">Guaranteed Frame Ping:</strong> 4.12ms</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setDeploymentStep("setup");
                    setProjectName("");
                  }}
                  className="text-xs font-mono tracking-widest text-[#cbc3d7]/50 hover:text-white uppercase flex items-center justify-center space-x-1.5 mx-auto cursor-pointer p-2 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Launch alternative cluster sandbox</span>
                </button>
              </div>
            ) : deploymentStep === "deploying" ? (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold font-sans tracking-tight mb-2">PROVISIONING SECURE VM</h3>
                  <p className="text-xs text-[#cbc3d7]/65">Spawning isolated sandboxed virtualization weights...</p>
                </div>

                {/* Simulated Progress bar */}
                <div className="relative h-4 bg-white/5 border border-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 via-[#d0bcff] to-cyan-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-xs font-mono text-[#cbc3d7]/40">
                  <span>{progress < 100 ? `${progress}% Mapping vector segments...` : "Sealing SSL rules..."}</span>
                  <span>SLA Guarantee: 99.999%</span>
                </div>

                {/* Console logs output */}
                <div className="bg-[#0a080d] border border-white/5 rounded-2xl p-5 h-44 overflow-y-auto font-mono text-[9px] text-[#cbc3d7]/85 space-y-2 scrollbar select-text">
                  {logs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{log}</span>
                    </motion.div>
                  ))}
                  <div className="w-1.5 h-3 bg-cyan-400 inline-block animate-pulse ml-0.5" />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Server className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-sans tracking-tight">Deploy New Infrastructure</h3>
                    <p className="text-xs text-[#cbc3d7]/50">Start your trial sandbox instantly on global edge network</p>
                  </div>
                </div>

                <form onSubmit={runDeploymentSim} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-[#cbc3d7]/45 uppercase mb-2">
                      WORKSPACE PROJECT IDENTITY
                    </label>
                    <div className="relative">
                      <Database className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbc3d7]/35" />
                      <input
                        type="text"
                        required
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="e.g. synapse-vector-stream"
                        className="w-full pl-12 pr-4 py-3 bg-[#0a080d] border border-white/10 rounded-xl focus:border-purple-500/70 focus:outline-none transition-all placeholder:text-[#cbc3d7]/25 text-sm font-sans text-white/95"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-[#cbc3d7]/45 uppercase mb-2">
                        TARGET EDGE NODE REGION
                      </label>
                      <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full px-3 py-3 bg-[#0a080d] border border-white/10 rounded-xl focus:border-cyan-400/70 focus:outline-none text-xs text-white/95"
                      >
                        <option value="us-central1">Iowa (us-central1)</option>
                        <option value="europe-west4">Eemshaven (europe-west4)</option>
                        <option value="asia-east1">Changhua (asia-east1)</option>
                        <option value="sa-east1">São Paulo (sa-east1)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-[#cbc3d7]/45 uppercase mb-2">
                        COMPILATION COMPUTE TIER
                      </label>
                      <div className="flex bg-[#0a080d] border border-white/10 rounded-xl p-1 h-[46px]">
                        {(["standard", "gpu", "infinite"] as const).map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setComputeTier(tier)}
                            className={`flex-1 text-[9px] font-mono uppercase tracking-wider rounded-lg border-0 transition-all font-bold cursor-pointer ${
                              computeTier === tier
                                ? "bg-purple-600/30 text-purple-200"
                                : "text-[#cbc3d7]/40 hover:text-white"
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-500/5 border border-purple-500/10 rounded-xl flex items-start space-x-3 text-xs leading-relaxed text-[#cbc3d7]/70 font-sans">
                    <Server className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <p>
                      Launcher instantiates a high-availability server buffer mapping <strong className="text-white">AetherAI-Core-v4</strong> weights and instant WAL streaming vector caches. Peak performance is rate-secured.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4.5 mt-2 rounded-xl text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(109,59,215,0.4)] cursor-pointer border-0"
                  >
                    <span>LAUNCH COGNITIVE CLUSTER PIPELINE</span>
                    <ChevronRight className="w-4 h-4" />
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
