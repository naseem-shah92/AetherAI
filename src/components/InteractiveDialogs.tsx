import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInteractiveModals } from "../context/InteractiveModalContext";
import {
  X,
  Cpu,
  Mail,
  Lock,
  ChevronRight,
  Database,
  Cloud,
  CheckCircle2,
  Server,
  Play,
  RotateCcw,
  Sliders,
  Send,
  HelpCircle,
  FileText,
  DollarSign,
  Users,
  ShieldCheck,
  Check,
  AlertCircle,
  Clock,
  Terminal,
} from "lucide-react";

export const InteractiveDialogs: React.FC = () => {
  const { activeModal, modalPayload, closeModal } = useInteractiveModals();

  // Escape key support to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  if (!activeModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-stretch sm:items-center sm:justify-center p-0 sm:p-4 md:p-6">
        {/* Semi-transparent blur backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="absolute inset-0 bg-[#0c0a0f]/80 backdrop-blur-xl"
        />

        {/* Modal Wrapper Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-2xl overflow-y-auto rounded-none sm:rounded-3xl border-0 sm:border border-white/10 bg-[#17141d]/98 sm:bg-[#17141d]/90 p-6 pt-20 sm:p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.05)] text-white backdrop-blur-3xl scrollbar relative z-10 flex flex-col justify-start sm:block"
        >
          {/* Close button top-right / top-center for best mobile access */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-6 sm:top-6 sm:right-6 p-2.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/15 transition-all text-[#cbc3d7]/80 hover:text-white cursor-pointer z-50 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 sm:w-4 sm:h-4" />
          </button>

          {/* Render target modal content */}
          {activeModal === "signin" && <SignInModalContent />}
          {activeModal === "get_started" && <GetStartedModalContent />}
          {activeModal === "watch_demo" && <WatchDemoModalContent />}
          {activeModal === "contact_sales" && <ContactSalesModalContent />}
          {activeModal === "doc_reader" && <DocReaderModalContent />}
          {activeModal === "api_sandbox" && <ApiSandboxModalContent />}
          {activeModal === "status_report" && <StatusReportModalContent />}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* 1. SIGN IN MODAL SUB-FLOW */
const SignInModalContent: React.FC = () => {
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

  if (step === "success") {
    return (
      <div className="text-center py-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px] mb-6 animate-bounce">
          <div className="w-full h-full bg-[#15121b] rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
        <h3 className="text-2xl font-bold font-sans tracking-tight mb-3">Access Granted successfully</h3>
        <p className="text-sm text-[#cbc3d7]/80 mb-6 max-w-sm mx-auto">
          Welcome back to AetherAI! Redirecting you securely to your high-availability neural control panel.
        </p>
        <div className="p-4 bg-[#100e15] rounded-xl border border-white/5 font-mono text-xs text-cyan-400 max-w-xs mx-auto text-left">
          <span className="block text-[#cbc3d7]/30 uppercase tracking-[0.15em] mb-1 text-[9px] font-bold">Inference Session Token:</span>
          <span className="break-all text-[10px]">jwt_token_aether_817293817aed</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-purple-500/10 rounded-lg">
          <Cpu className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-sans tracking-tight">Access Control</h3>
          <p className="text-xs text-[#cbc3d7]/50">Enter credentials for secure vector orchestration</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/50 uppercase mb-2">
            INTELLIGENCE WORKSPACE EMAIL
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbc3d7]/40" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. naseem@corporation.ai"
              className="w-full pl-11 pr-4 py-3 bg-[#110e16] border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none transition-all placeholder:text-[#cbc3d7]/30 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/50 uppercase mb-2">
            CRYPTO SECURE PASSKEY
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbc3d7]/40" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-11 pr-4 py-3 bg-[#110e16] border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none transition-all placeholder:text-[#cbc3d7]/30 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center space-x-2 cursor-pointer text-[#cbc3d7]/70 hover:text-white select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="rounded bg-[#110e16] border-white/10 text-purple-600 focus:ring-0 cursor-pointer"
            />
            <span>Persist workspace session?</span>
          </label>
          <a href="#" className="text-cyan-400 hover:underline">Forgot passkey?</a>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 mt-2 rounded-xl text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(109,59,215,0.4)] disabled:opacity-50 cursor-pointer"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
              <span>VALIDATING CRYPTO SHIELDS...</span>
            </>
          ) : (
            <>
              <span>CONNECT SECURE CLUSTER</span>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

/* 2. GET STARTED / FREE TRIAL INTERACTIVE DEPLOYMENT SIMULATOR */
const GetStartedModalContent: React.FC = () => {
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

        // Add a line of log periodically
        if (nextVal > (currentLogIndex + 1) * 16 && currentLogIndex < logMessages.length) {
          setLogs((l) => [...l, logMessages[currentLogIndex]]);
          currentLogIndex++;
        }

        return nextVal;
      });
    }, 350);

    return () => clearInterval(progressInterval);
  }, [deploymentStep]);

  if (deploymentStep === "complete") {
    return (
      <div className="text-center py-4">
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 via-cyan-400 to-pink-500 p-[1.5px] mb-6 flex items-center justify-center relative">
          <div className="w-full h-full bg-[#15121b] rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9 text-green-400" />
          </div>
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold font-sans tracking-tight mb-2">Cloud Sandbox Provisioned!</h3>
        <p className="text-sm text-[#cbc3d7]/80 mb-6 max-w-sm mx-auto">
          Project <strong className="text-white">"{projectName}"</strong> is successfully operating in <strong className="text-white">{region}</strong>. Standard cognitive operations are active.
        </p>

        <div className="bg-[#100e15] rounded-2xl border border-white/5 p-5 text-left font-mono text-[10px] space-y-2 mb-6 max-w-md mx-auto">
          <div className="flex items-center justify-between text-[#cbc3d7]/40 uppercase tracking-[0.1em] border-b border-white/5 pb-2">
            <span>PROVISION DATASTORE LAYERS</span>
            <span className="text-green-400 font-bold">STATUS: COGNITIVE</span>
          </div>
          <div className="text-[#cbc3d7]/80">
            <span className="block"><strong className="text-cyan-400">API Endpoint:</strong> https://api.aether.ai/v1/{projectName.toLowerCase().replace(/\s+/g, "-")}</span>
            <span className="block"><strong className="text-purple-300">Compute Tier:</strong> {computeTier === "standard" ? "Cognitive Shared Core" : computeTier === "gpu" ? "Hybrid Clustered GPU Grid" : "Uptime Sovereign Pipeline"}</span>
            <span className="block"><strong className="text-indigo-400">Network Latency:</strong> 4.1ms</span>
          </div>
        </div>

        <button
          onClick={() => {
            setDeploymentStep("setup");
            setProjectName("");
          }}
          className="text-xs font-mono tracking-widest text-[#cbc3d7]/50 hover:text-white uppercase flex items-center justify-center space-x-1 mx-auto cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Launch new cluster sandbox</span>
        </button>
      </div>
    );
  }

  if (deploymentStep === "deploying") {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-bold font-sans tracking-tight mb-2">PROVISIONING LIVE CLUSTER</h3>
          <p className="text-xs text-[#cbc3d7]/60">Spawning secure virtualization host...</p>
        </div>

        {/* Big Progress bar */}
        <div className="relative h-4 bg-white/5 border border-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 via-[#d0bcff] to-cyan-400"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs font-mono text-[#cbc3d7]/50">
          <span>{progress < 100 ? `${progress}% Compiling Model...` : "Finishing configurations..."}</span>
          <span>SLA: 99.999% secure</span>
        </div>

        {/* Sandbox logs */}
        <div className="bg-[#0f0d14] border border-white/5 rounded-xl p-4 h-40 overflow-y-auto font-mono text-[9px] text-[#cbc3d7]/80 space-y-1.5 scrollbar select-text">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{log}</span>
            </motion.div>
          ))}
          <div className="w-1.5 h-3 bg-cyan-400 inline-block animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <Cloud className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-sans tracking-tight">Deploy Cognitive Cluster</h3>
          <p className="text-xs text-[#cbc3d7]/50">Start your trial sandbox instantly on the edge network</p>
        </div>
      </div>

      <form onSubmit={runDeploymentSim} className="space-y-4">
        <div>
          <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/50 uppercase mb-2">
            WORKSPACE COGNITIVE PROJECT NAME
          </label>
          <div className="relative">
            <Database className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbc3d7]/45" />
            <input
              type="text"
              required
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="e.g. synapse-autonomous-logs"
              className="w-full pl-11 pr-4 py-3 bg-[#110e16] border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none transition-all placeholder:text-[#cbc3d7]/30 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/50 uppercase mb-2">
              DEPLOYMENT EDGE REGION
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full px-4 py-3 bg-[#110e16] border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none text-sm text-white/90"
            >
              <option value="us-central1">Iowa (us-central1)</option>
              <option value="europe-west4">Eemshaven (europe-west4)</option>
              <option value="asia-east1">Changhua (asia-east1)</option>
              <option value="southamerica-east1">São Paulo (southamerica-east1)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/50 uppercase mb-2">
              COMPUTE COMPILATION TIER
            </label>
            <div className="flex bg-[#110e16] border border-white/10 rounded-xl p-1 h-[46px]">
              {(["standard", "gpu", "infinite"] as const).map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setComputeTier(tier)}
                  className={`flex-1 text-[10px] font-mono uppercase tracking-wider rounded-lg border-0 transition-all font-bold cursor-pointer ${
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

        <div className="p-4 bg-[#100e15] border border-white/5 rounded-xl flex items-start space-x-3 text-xs leading-relaxed text-[#cbc3d7]/70">
          <Server className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <p>
            You are launching a high-availability cognitive node trial containing <strong className="text-white">AetherAI-Core-v4</strong> weights and a persistent telemetry database buffer. Maximum throughput up to 10k items/second.
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-4 mt-2 rounded-xl text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(109,59,215,0.4)] cursor-pointer"
        >
          <span>PROVISION NODE PIPELINE</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

/* 3. WATCH DEMO / DYNAMICS PLAYGROUND MODALCONTENT */
const WatchDemoModalContent: React.FC = () => {
  const [temperature, setTemperature] = useState(0.7);
  const [tokens, setTokens] = useState(2048);
  const [grounding, setGrounding] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoOutput, setDemoOutput] = useState("");

  const runModelQuery = () => {
    setIsPlaying(true);
    setDemoOutput("");
    
    setTimeout(() => {
      setDemoOutput(
        `{\n  "metadata": {\n    "concurrency_msec": 12,\n    "intelligence_layer": "AetherAI-v4",\n    "temperature": ${temperature},\n    "source_grounding_verified": ${grounding}\n  },\n  "response": "Identified anomalous vector loop at node cluster 403. Auto-routed traffic bypass successful within SLA bounds."\n}`
      );
      setIsPlaying(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <Sliders className="w-5 h-5 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-sans tracking-tight">Watch Demo Playground</h3>
          <p className="text-xs text-[#cbc3d7]/50">Alter model parameters and visualize realtime cognitive inference</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Controls col */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center text-xs font-mono tracking-widest text-[#cbc3d7]/50 mb-2 uppercase">
              <span>PARAMETER: TEMPERATURE</span>
              <span className="text-cyan-400">{temperature}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1.5"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full accent-cyan-400 bg-white/5 rounded-lg h-1"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-xs font-mono tracking-widest text-[#cbc3d7]/50 mb-2 uppercase">
              <span>PARAMETER: MAX TOKENS</span>
              <span className="text-purple-300">{tokens}</span>
            </div>
            <input
              type="range"
              min="256"
              max="4096"
              step="128"
              value={tokens}
              onChange={(e) => setTokens(parseInt(e.target.value))}
              className="w-full accent-purple-400 bg-white/5 rounded-lg h-1"
            />
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-between p-3.5 bg-white/[0.02] border border-white/5 rounded-xl">
            <span className="text-xs font-semibold text-[#cbc3d7]/90 font-sans">
              Dynamic Database Grounding
            </span>
            <button
              type="button"
              onClick={() => setGrounding(!grounding)}
              className={`w-12 h-6 rounded-full p-1 transition-all flex items-center cursor-pointer ${
                grounding ? "bg-cyan-500 justify-end" : "bg-white/5 justify-start border border-white/10"
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
            </button>
          </div>

          <button
            onClick={runModelQuery}
            disabled={isPlaying}
            className="w-full py-3.5 rounded-xl text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(109,59,215,0.4)] disabled:opacity-50 cursor-pointer"
          >
            {isPlaying ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
                <span>INFERRING COG-NETWORK LOGIC...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current text-white" />
                <span>EXECUTE EXPERIMENT RUN</span>
              </>
            )}
          </button>
        </div>

        {/* Console display output col */}
        <div className="bg-[#0f0d14] border border-white/5 rounded-2xl p-4 flex flex-col h-[230px] justify-between relative overflow-hidden font-mono text-[9px]">
          <div className="absolute top-2 right-4 text-[7px] text-[#cbc3d7]/30 tracking-widest uppercase">
            AETHER INTERPRETED SHELL
          </div>
          
          <div className="flex-1 text-[#cbc3d7]/80 scrollbar pt-4 select-text leading-tight overflow-y-auto whitespace-pre">
            {isPlaying ? (
              <span className="text-cyan-400 animate-pulse block">
                $ executing_pipeline_weights...\n[Warming GPU cluster grid node... Done]\n[Resolving Grounded Context database tokens... Done]\nCalculating vectors...
              </span>
            ) : demoOutput ? (
              demoOutput
            ) : (
              <span className="text-purple-300/60 block">
                $ Click "EXECUTE EXPERIMENT RUN" to query and synthesize live logs across cloud weights.
              </span>
            )}
          </div>
          
          <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[#cbc3d7]/35 text-[8px]">
            <span>ENGINE: Active</span>
            <span>Latency SLA verification: green</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 4. CONTACT SALES WITH PRICING CALCULATION MODALCONTENT */
const ContactSalesModalContent: React.FC = () => {
  const [teamSize, setTeamSize] = useState(25);
  const [sla, setSla] = useState<"standard" | "gold" | "platinum">("gold");
  const [corporateEmail, setCorporateEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // SLA Multipliers
  const baseCost = 299;
  const teamMultiplier = teamSize > 100 ? 8 : teamSize > 50 ? 5 : 3;
  const slaAdd = sla === "standard" ? 0 : sla === "gold" ? 150 : 499;
  const estimatedMoPlan = baseCost + teamSize * teamMultiplier + slaAdd;

  const handleSalesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!corporateEmail) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 p-[1.5px] mb-6 flex items-center justify-center animate-bounce">
          <div className="w-full h-full bg-[#15121b] rounded-full flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-green-400" />
          </div>
        </div>
        <h3 className="text-2xl font-bold font-sans tracking-tight mb-2">Request Cataloged</h3>
        <p className="text-sm text-[#cbc3d7]/80 mb-6 max-w-sm mx-auto">
          We have saved your pricing preference of <strong className="text-white">${estimatedMoPlan}/mo</strong>. An AI architecture strategist will email you at <strong className="text-white">{corporateEmail}</strong> shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setCorporateEmail("");
          }}
          className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider border border-white/10 hover:bg-white/5 transition-all text-[#cbc3d7] cursor-pointer"
        >
          Adjust parameters
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-purple-500/10 rounded-lg">
          <DollarSign className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-sans tracking-tight">Architect Dynamic SLA</h3>
          <p className="text-xs text-[#cbc3d7]/50">Select team metrics and capture pricing projections</p>
        </div>
      </div>

      <form onSubmit={handleSalesSubmit} className="space-y-4">
        {/* Slider */}
        <div>
          <div className="flex justify-between items-center text-xs font-mono tracking-widest text-[#cbc3d7]/50 mb-2 uppercase">
            <span>TEAM MEMBERS ACCESS</span>
            <span className="text-cyan-400 font-bold">{teamSize} members</span>
          </div>
          <input
            type="range"
            min="5"
            max="250"
            step="5"
            value={teamSize}
            onChange={(e) => setTeamSize(parseInt(e.target.value))}
            className="w-full accent-cyan-400 bg-white/5 rounded-lg h-1"
          />
        </div>

        {/* SLA Selection */}
        <div>
          <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/50 uppercase mb-2">
            SUPPORT RESPONSE TIME SLA GUARANTEE
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(["standard", "gold", "platinum"] as const).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setSla(level)}
                className={`py-3 rounded-xl border flex flex-col items-center justify-center space-y-1 transition-all cursor-pointer ${
                  sla === level
                    ? "bg-purple-600/20 border-purple-500/40 text-purple-100"
                    : "bg-[#110e16] border-white/5 text-[#cbc3d7]/60 hover:text-white"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider">{level}</span>
                <span className="text-[8px] font-mono opacity-60">
                  {level === "standard" ? "Next Business Day" : level === "gold" ? "≤ 2h Support Guaranteed" : "≤ 15m Mission Critical"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Corporate email */}
        <div className="pt-2">
          <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/50 uppercase mb-2">
            CORPORATE EMAIL ADDRESS
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbc3d7]/40" />
            <input
              type="email"
              required
              value={corporateEmail}
              onChange={(e) => setCorporateEmail(e.target.value)}
              placeholder="e.g. executive@enterprise-network.ai"
              className="w-full pl-11 pr-4 py-3 bg-[#110e16] border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none placeholder:text-[#cbc3d7]/30 text-sm text-white/90"
            />
          </div>
        </div>

        {/* Price Output */}
        <div className="p-4 bg-[#110e16] border border-white/5 rounded-xl flex items-center justify-between mt-2">
          <div>
            <span className="block text-[8px] font-mono tracking-widest text-[#cbc3d7]/40 uppercase">
              RESERVED PROVISION BUDGET
            </span>
            <span className="text-xs font-semibold text-[#cbc3d7]/70">
              Contract terms auto-renew quarterly
            </span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-extrabold text-[#d0bcff]">
              ${estimatedMoPlan}
            </span>
            <span className="text-[10px] font-mono text-[#cbc3d7]/40">/month</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(109,59,215,0.4)] cursor-pointer"
        >
          <Send className="w-4 h-4 text-white" />
          <span>SUBMIT ENTERPRISE SPECIFICATION</span>
        </button>
      </form>
    </div>
  );
};

/* 5. DOCUMENTATION / INFO MODALCONTENT */
const DocReaderModalContent: React.FC = () => {
  const { modalPayload, closeModal } = useInteractiveModals();
  const title = modalPayload?.title || "Security Assurance Protocols";
  const docs = {
    "Security Assurance Protocols": `
## 🧠 Sovereign AI Security & Compliance

AetherAI is engineered around enterprise computational safety constraints. All deep reinforcement model layers run inside hardened sandboxes.

### 🛡️ Core Certifications
- **SOC 2 Type II Certified:** Independent audited reports assessing operational security control criteria.
- **HIPAA Compliance Guards:** Configurable tokenization pipelines ensuring medical metrics are sealed.
- **TLS 1.3 Transport Rules:** Every single endpoint request has complete end-to-end transport layer security.

### 🚨 Autonomous Recovery
Should telemetry systems detect an abnormal vector loop or anomalous transaction concurrency rate, our pipeline auto-shunts processes within 5ms.`,

    "Cognitive Continuous Pipelines": `
## 🔄 Self-Optimizing Agent Pipelines

AetherAI provisions elastic model nodes across regional Kubernetes clusters using auto-compiling edge bundles.

### ⚙️ Multi-Model Shifting
1. **Instruction Routing:** Prompts are vetted by an ultra-fast local classifier.
2. **Dynamic Grounding:** Integrates with Firestore vectors to check real-time accuracy scoring.
3. **Execution Pipeline:** Triggers self-healing scripts with continuous monitoring.
`,
  };

  const mdText = docs[title as keyof typeof docs] || docs["Security Assurance Protocols"];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <FileText className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-sans tracking-tight">AetherAI System Docs</h3>
          <p className="text-xs text-[#cbc3d7]/50">Enterprise cognitive documentation</p>
        </div>
      </div>

      <div className="bg-[#110e16] border border-white/5 rounded-2xl p-6 text-sm leading-relaxed text-[#cbc3d7]/80 h-[300px] overflow-y-auto font-sans scrollbar whitespace-pre-wrap select-text">
        {mdText}
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={closeModal}
          className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider bg-white/5 hover:bg-white/10 text-white cursor-pointer"
        >
          Acknowledge & Close
        </button>
      </div>
    </div>
  );
};

/* 6. LIVE API SANDBOX MODALCONTENT */
const ApiSandboxModalContent: React.FC = () => {
  const [endpoint, setEndpoint] = useState("/api/v1/generate");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const performSandboxCall = () => {
    setLoading(true);
    setOutput("");
    setTimeout(() => {
      setLoading(false);
      setOutput(
        JSON.stringify(
          {
            status: "success",
            compute_latency: "4.15ms",
            model_tier: "AetherAI-Core-v4",
            grounded_data_checksum: "sha256_8291a92ffec9",
            vectors_synthesized: 14092,
            result: [
              {
                id: "node_9011_a",
                action: "Database sync completed",
                synced_documents_count: 58172,
              },
            ],
          },
          null,
          2
        )
      );
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-purple-500/10 rounded-lg">
          <Terminal className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-sans tracking-tight">Interactive API Sandbox</h3>
          <p className="text-xs text-[#cbc3d7]/50">Query our cognitive infrastructure endpoints directly</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/50 uppercase mb-2">
            SELECT ENDPOINT CHANNEL
          </label>
          <select
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="w-full px-4 py-3 bg-[#110e16] border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none text-sm text-white/90"
          >
            <option value="/api/v1/generate">POST /api/v1/generate (Cognitive Completion)</option>
            <option value="/api/v1/sync">POST /api/v1/sync (Database Mirroring Pipe)</option>
            <option value="/api/v1/telemetry">GET /api/v1/telemetry (Active SLA Health)</option>
          </select>
        </div>

        <button
          onClick={performSandboxCall}
          disabled={loading}
          className="w-full py-3.5 rounded-xl text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(109,59,215,0.4)] disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
              <span>COMMUNICATING WITH EDGE NODES...</span>
            </>
          ) : (
            <span>EXECUTE SECURE ENDPOINT QUERY</span>
          )}
        </button>

        <div className="bg-[#0f0d14] border border-white/5 rounded-2xl p-4 h-[200px] overflow-y-auto font-mono text-[10px] select-text scrollbar">
          <div className="text-[#cbc3d7]/40 mb-2 uppercase tracking-wide text-[8px] flex items-center justify-between">
            <span>RESPONSE JSON BODY</span>
            <span className="text-green-400">STATUS 200 OK</span>
          </div>
          {output ? (
            <pre className="text-cyan-300 leading-normal">{output}</pre>
          ) : (
            <span className="text-purple-300/50 block italic pt-4">
              Click the query button above to query AetherAI API and view the response output.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/* 7. SYSTEM STATUS REPORT MODALCONTENT */
const StatusReportModalContent: React.FC = () => {
  const { closeModal } = useInteractiveModals();
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <Server className="w-5 h-5 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-sans tracking-tight">Active Infrastructure Telemetry</h3>
          <p className="text-xs text-[#cbc3d7]/50">Realtime uptime verification across global micro-clusters</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-[#110e16] border border-white/5 rounded-xl text-center space-y-1">
          <span className="block text-[8px] font-mono tracking-widest text-[#cbc3d7]/40 uppercase">
            AVERAGE CLUSTER LATENCY
          </span>
          <span className="block text-2xl font-extrabold text-cyan-400">4.12ms</span>
          <span className="block text-[9px] text-[#cbc3d7]/30 tracking-wide uppercase font-mono">
            SLA: ≤ 10ms SLA Compliant
          </span>
        </div>

        <div className="p-4 bg-[#110e16] border border-white/5 rounded-xl text-center space-y-1">
          <span className="block text-[8px] font-mono tracking-widest text-[#cbc3d7]/40 uppercase">
            INTELLIGENCE CONCURRENCY
          </span>
          <span className="block text-2xl font-extrabold text-purple-300">14,841/s</span>
          <span className="block text-[9px] text-[#cbc3d7]/30 tracking-wide uppercase font-mono">
            Buffer utilization: 41.2%
          </span>
        </div>
      </div>

      <div className="bg-[#110e16] border border-white/5 rounded-xl p-4 space-y-3">
        <span className="block text-[10px] font-mono tracking-widest text-[#cbc3d7]/50 uppercase border-b border-white/5 pb-2">
          COMPUTATIONAL CLUSTERS LIST
        </span>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#cbc3d7]/80">West US (us-central1)</span>
            <span className="text-green-400 font-mono font-bold bg-green-400/10 px-2 py-0.5 rounded text-[10px]">99.999% UPTIME</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#cbc3d7]/80">Europe North (europe-west4)</span>
            <span className="text-green-400 font-mono font-bold bg-green-400/10 px-2 py-0.5 rounded text-[10px]">99.998% UPTIME</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#cbc3d7]/80">East Asia (asia-east1)</span>
            <span className="text-green-400 font-mono font-bold bg-green-400/10 px-2 py-0.5 rounded text-[10px]">100% UPTIME</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={closeModal}
          className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider bg-white/5 hover:bg-white/10 text-white cursor-pointer"
        >
          Confirm Telemetry
        </button>
      </div>
    </div>
  );
};
