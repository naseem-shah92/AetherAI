import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import {
  MessageSquare,
  TrendingUp,
  GitBranch,
  Sparkles,
  Search,
  Bot,
  Send,
  Terminal,
  Play,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const Features: React.FC = () => {
  // AI Assistant Interactive state
  const [activePrompt, setActivePrompt] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ sender: "user" | "bot"; text: string; code?: string }>>([
    {
      sender: "bot",
      text: "👋 Hello! I am your cognitive AI agent. Ask me to perform some continuous operations.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const predefinedPrompts = [
    {
      title: "Sync Databases",
      prompt: "Synchronize user logs from PostgreSQL to Firestore with validation.",
      response: "Setting up secure transport pipe...\nValidated 152,841 active documents.\nSynchronisation completed safely in 412ms.",
      code: "await syncCloudDatabases({ source: 'pg_db', destination: 'firestore' })",
    },
    {
      title: "Deploy Agent",
      prompt: "Instantiate an autonomous customer-support representative.",
      response: "Deploying model-layer 'support-agent-v4'...\nBound to active customer-feedback web-hook.\nAgent is ONLINE with zero errors.",
      code: "const agent = AetherAI.deployAgent('support-agent-v4')",
    },
  ];

  const handlePromptClick = (title: string, promptText: string, botRespText: string, botCode?: string) => {
    if (isTyping) return;
    setActivePrompt(title);
    setMessages((prev) => [...prev, { sender: "user", text: promptText }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botRespText,
          code: botCode,
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  // Predictive Analytics data state
  const [analyticsHover, setAnalyticsHover] = useState(false);
  const [points, setPoints] = useState<number[]>([40, 52, 45, 60, 58, 70, 68, 85]);

  useEffect(() => {
    if (analyticsHover) {
      const interval = setInterval(() => {
        setPoints((prev) => {
          const next = [...prev.slice(1)];
          const last = prev[prev.length - 1];
          const change = Math.floor(Math.random() * 15) - 6;
          const newValue = Math.min(Math.max(last + change, 30), 95);
          next.push(newValue);
          return next;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [analyticsHover]);

  // Code Gen active language state
  const [activeLang, setActiveLang] = useState<"ts" | "py" | "rust">("ts");
  const codeLanguages = {
    ts: `import { AetherAI } from '@aether/sdk';\n\nconst response = await AetherAI.generate({\n  prompt: 'Synthesize customer segments',\n  strategy: 'cognitive-high'\n});`,
    py: `from aether_sdk import AetherAI\n\nresponse = AetherAI.generate(\n    prompt="Synthesize customer segments",\n    strategy="cognitive-high"\n)`,
    rust: `use aether_sdk::AetherAI;\n\nlet response = AetherAI::new()\n    .generate("Synthesize customer segments")\n    .await?;`,
  };

  return (
    <section id="models" className="py-24 relative overflow-hidden bg-[#15121b] scroll-mt-28">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Intelligence at every layer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-sans text-base md:text-lg text-[#cbc3d7]/80 leading-relaxed"
          >
            A comprehensive suite of cognitive tools designed to accelerate your development cycle.
          </motion.p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          
          {/* 1. Large AI Assistant Terminal (Col span 2) */}
          <Card
            className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col justify-between group border-white/5 relative"
            hoverGlow={true}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">AI Assistant</h3>
                  <p className="text-sm text-[#cbc3d7]/60">Contextual inline intelligence agent</p>
                </div>
              </div>
              <span className="text-[10px] bg-purple-500/10 font-mono text-purple-300 font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                Interactive Core
              </span>
            </div>

            <p className="text-[#cbc3d7]/90 leading-relaxed mb-6 font-sans">
              Deploy contextual, conversational agents embedded directly within your application interface with streaming capabilities.
            </p>

            {/* Interactive simulated chatbox */}
            <div className="bg-[#0f0d14] rounded-xl border border-white/5 overflow-hidden flex flex-col h-[280px] mb-6">
              {/* Box header */}
              <div className="bg-[#121018] h-10 border-b border-white/5 px-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-[#cbc3d7]/40 ml-2">cognitive-playground.sh</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                  <span className="text-[9px] text-[#cbc3d7]/60 font-mono uppercase tracking-wider">Server Live</span>
                </div>
              </div>

              {/* Box chat history */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs scrollbar">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                    <div
                      className={`inline-block max-w-[85%] px-3 py-2 rounded-xl whitespace-pre-line leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-purple-600/30 text-purple-150 border border-purple-500/20"
                          : "bg-white/5 text-[#e7e0ed] border border-white/5"
                      }`}
                    >
                      {msg.text}
                      {msg.code && (
                        <pre className="mt-2 text-[10px] bg-black/60 p-2 rounded border border-white/5 text-cyan-300 overflow-x-auto">
                          <code>{msg.code}</code>
                        </pre>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-xl border border-white/5 max-w-[120px]">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[9px] text-[#cbc3d7]/40 leading-none">Thinking</span>
                  </div>
                )}
              </div>

              {/* Quick action buttons block */}
              <div className="p-3 bg-[#121018] border-t border-white/5 flex gap-2">
                {predefinedPrompts.map((p) => (
                  <button
                    key={p.title}
                    onClick={() => handlePromptClick(p.title, p.prompt, p.response, p.code)}
                    disabled={isTyping}
                    className={`flex-1 text-[11px] font-semibold py-2 px-3 rounded-lg border flex items-center justify-center space-x-1.5 transition-all duration-200 cursor-pointer ${
                      activePrompt === p.title
                        ? "bg-purple-600/20 border-purple-500/40 text-purple-200 shadow-[0_0_10px_rgba(109,59,215,0.1)]"
                        : "bg-[#18151f] border-white/5 hover:border-white/10 hover:bg-[#1f1b27] text-[#cbc3d7]/80"
                    }`}
                  >
                    <span>{p.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div
              onClick={() => {
                const el = document.getElementById("docs");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 90;
                  window.scrollTo({ top: y, behavior: "smooth" });
                  window.location.hash = "#docs";
                }
              }}
              className="border-t border-white/5 pt-4 mt-2 flex justify-between items-center group-hover:border-white/10 transition-colors duration-300 cursor-pointer"
            >
              <span className="text-xs font-mono font-bold tracking-wider text-[#cbc3d7]/40 uppercase group-hover:text-purple-300 transition-colors duration-300">
                EXPLORE CAPABILITIES
              </span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="text-purple-400"
              >
                ➔
              </motion.span>
            </div>
          </Card>

          {/* 2. Predictive Analytics */}
          <Card
            className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col justify-between group"
            onMouseEnter={() => setAnalyticsHover(true)}
            onMouseLeave={() => setAnalyticsHover(false)}
          >
            <div className="mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl w-fit mb-4">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Predictive Analytics</h3>
              <p className="text-sm text-[#cbc3d7]/80 leading-relaxed font-sans">
                Forecast trends and user behavior with high-fidelity ML models in real-time.
              </p>
            </div>

            {/* Sparkline canvas simulation */}
            <div className="h-28 flex items-end justify-between bg-[#110e16] rounded-xl border border-white/5 p-4 relative overflow-hidden">
              <div className="absolute top-2 left-4 text-[10px] font-mono text-cyan-400 font-bold bg-cyan-400/10 px-1.5 py-0.5 rounded-md uppercase">
                Live Inference Rate: 98.4%
              </div>
              
              {/* Dynamic bar points */}
              <div className="w-full flex items-end justify-between h-14 relative z-10 gap-1 mt-4">
                {points.map((p, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ height: `${p}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-cyan-600 to-cyan-400 relative group/bar"
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#cbc3d7] bg-[#1a1722] py-0.5 px-1 rounded opacity-0 group-hover/bar:opacity-100 border border-white/10 transition-opacity">
                      {p}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>

          {/* 3. Automation Engine */}
          <Card className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col justify-between group">
            <div className="mb-6">
              <div className="p-3 bg-pink-500/10 rounded-xl w-fit mb-4">
                <GitBranch className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Automation Engine</h3>
              <p className="text-sm text-[#cbc3d7]/80 leading-relaxed font-sans">
                Link disparate APIs and automate complex workflows visually with self-healing rules.
              </p>
            </div>

            {/* Micro visual workflow diagram (Responsive layout) */}
            <div className="bg-[#110e16] border border-white/5 rounded-xl p-3 md:p-4 flex flex-col justify-center space-y-3 h-auto md:h-28 relative overflow-hidden select-none">
              
              {/* Horizontal Layout (Tablet / Laptop / Desktop) */}
              <div className="hidden sm:flex items-center justify-between relative z-10 w-full">
                <div className="p-1.5 bg-purple-500/20 border border-purple-500/30 rounded-md flex items-center space-x-1.5">
                  <Play className="w-3 h-3 text-purple-400 fill-current" />
                  <span className="text-[9px] font-mono text-[#cbc3d7]">Trig_Inst</span>
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/50 to-cyan-500/50 border-dashed border-t border-purple-400/30 relative mx-2">
                  <div className="absolute top-[-4px] left-0 w-2 h-2 rounded-full bg-cyan-400 animate-ping" style={{ left: "50%" }} />
                </div>
                <div className="p-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-md flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span className="text-[9px] font-mono text-[#cbc3d7]">Write_DB</span>
                </div>
              </div>

              {/* Vertical Layout (Mobile Phone) */}
              <div className="flex sm:hidden flex-col items-center justify-center relative z-10 w-full space-y-2">
                <div className="p-1.5 bg-purple-500/20 border border-purple-500/30 rounded-md flex items-center space-x-1.5 w-fit">
                  <Play className="w-3 h-3 text-purple-400 fill-current" />
                  <span className="text-[9px] font-mono text-[#cbc3d7]">Trig_Inst</span>
                </div>
                <div className="h-6 w-[1px] bg-gradient-to-b from-purple-500/50 to-cyan-500/50 border-dashed border-l border-purple-400/30 relative">
                  <div className="absolute top-[40%] left-[-3.5px] w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
                <div className="p-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-md flex items-center space-x-1.5 w-fit">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span className="text-[9px] font-mono text-[#cbc3d7]">Write_DB</span>
                </div>
              </div>

              <div className="text-[9px] font-mono text-[#cbc3d7]/50 text-center animate-pulse">
                STATUS: PIPELINE_EXECUTION_SUCCESSFUL (5MS)
              </div>
            </div>
          </Card>

          {/* 4. AI Content Generator */}
          <Card className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col justify-between group">
            <div className="mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Content Generator</h3>
              <p className="text-sm text-[#cbc3d7]/80 leading-relaxed font-sans">
                Generate structured data, code, or high-converting copy on the fly.
              </p>
            </div>

            {/* Code Generator tab switcher */}
            <div className="bg-[#110e16] border border-white/5 rounded-xl p-3 flex flex-col justify-between h-28 font-mono text-[10px] overflow-hidden">
              <div className="flex space-x-2 border-b border-white/5 pb-2">
                {["ts", "py", "rust"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang as any)}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      activeLang === lang ? "bg-purple-600/30 text-purple-200 font-bold" : "text-[#cbc3d7]/45"
                    }`}
                  >
                    {lang === "ts" ? "TypeScript" : lang === "py" ? "Python" : "Rust"}
                  </button>
                ))}
              </div>
              <div className="text-[#cbc3d7]/80 overflow-y-auto pt-2 leading-tight select-text scrollbar whitespace-pre">
                {codeLanguages[activeLang]}
              </div>
            </div>
          </Card>

          {/* 5. Smart Search */}
          <Card className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col justify-between group">
            <div className="mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl w-fit mb-4">
                <Search className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Search</h3>
              <p className="text-sm text-[#cbc3d7]/80 leading-relaxed font-sans">
                Semantic search capabilities that understand user intent rather than keywords.
              </p>
            </div>

            {/* Interactive Search query similarity mock up */}
            <div className="bg-[#110e16] border border-white/5 rounded-xl p-4 flex flex-col justify-center space-y-3 h-28">
              <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-lg px-2.5 py-1.5">
                <span className="text-[10px] text-white/90 truncate font-mono">Q: "Deploy server edge"</span>
                <span className="text-[8px] font-mono text-cyan-400 bg-cyan-400/10 py-0.5 px-1.5 rounded uppercase">Active Vector</span>
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono bg-white/5 p-1 px-2 rounded border border-white/5">
                <span className="text-[#cbc3d7]/70">Best Match: "Cloud Run global edge orchestration"</span>
                <span className="text-green-400 font-bold bg-green-400/10 px-1 rounded">Score: 0.98</span>
              </div>
            </div>
          </Card>

          {/* 6. AI Agents */}
          <Card className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col justify-between group">
            <div className="mb-6">
              <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-4">
                <Bot className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Agents</h3>
              <p className="text-sm text-[#cbc3d7]/80 leading-relaxed font-sans">
                Deploy autonomous agents to resolve multi-step complex workflows.
              </p>
            </div>

            {/* Active multi-task visualizer */}
            <div className="bg-[#110e16] border border-white/5 rounded-xl p-3 flex flex-col justify-between h-28 font-mono text-[9px]">
              <div className="flex items-center justify-between text-[10px] text-indigo-300 font-bold border-b border-indigo-500/10 pb-1.5">
                <span>AGENT STATUS: ACTIVE</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-1.5 text-green-300">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>STEP 1: Verify credential token... OK</span>
                </div>
                <div className="flex items-center space-x-1.5 text-green-300">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>STEP 2: Provision regional cluster... OK</span>
                </div>
                <div className="flex items-center space-x-1.5 text-cyan-300 animate-pulse">
                  <Terminal className="w-3 h-3" />
                  <span>STEP 3: Compiling edge bundle (75%)...</span>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};
