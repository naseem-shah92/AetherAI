import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, ChevronRight, CornerDownRight, Check, Copy, Shield, Cpu, RefreshCw } from "lucide-react";
import { Card } from "./ui/card";

export const DocsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("security");
  const [copied, setCopied] = useState<boolean>(false);

  const docs = {
    security: {
      title: "Security Assurance Protocols",
      badge: "Compliance Controls",
      icon: Shield,
      content: `### 🧠 Sovereign AI Security & Compliance

AetherAI is engineered around enterprise computational safety constraints. All deep reinforcement model layers run inside hardened, isolated hypervisor sandboxes to prevent vector bleeding and parameter contamination.

#### 🛡️ Core Security Certifications
- **SOC 2 Type II Certification:** Independent audited assessment reporting on operational security, availability, and processing integrity control criteria.
- **HIPAA Compliance Guards:** Automated, custom masking and tokenization pipelines ensuring medical and health-related metrics are fully sealed prior to model ingestion.
- **TLS 1.3 End-to-End Transport:** Absolute encryption coverage for all input vectors, grounding checks, and egress API payloads.

#### 🚨 Autonomous Incident Recovery
Should real-time telemetry systems detect an abnormal vector loop or anomalous transaction concurrency spike, AetherAI's protection pipeline auto-shunts processes to recovery sandboxes within 5ms.`,
      code: `// Enforce strict sovereign compliance bounds
import { AetherAI } from '@aether/sdk';

const client = new AetherAI({
  apiKey: process.env.AETHER_API_KEY,
  enforceHardHardening: true,
  compliance: {
    soc2TypeII: true,
    hipaaSanitization: true
  }
});`
    },
    pipelines: {
      title: "Cognitive Continuous Pipelines",
      badge: "Core Architecture",
      icon: Cpu,
      content: `### 🔄 Self-Optimizing Agent Pipelines

AetherAI provisions elastic model nodes across high-bandwidth regional Kubernetes clusters, utilizing state-of-the-art weights compilation.

#### ⚙️ Continuous Multi-Model Shifting
1. **Adaptive Instruction Routing:** Incoming user prompts are parsed by an ultra-fast local linear classifier to evaluate intent complexity.
2. **Dynamic Vector Grounding:** Synchronizes automatically with active datastore vectors to augment contextual grounding with confidence scoring.
3. **Execution Pipeline Shunting:** Prompts requiring deep reasoning are processed by secondary weights clusters, maximizing processing bandwidth efficiency.

#### ⚡ Automatic Weights Compilation
Model weights are compiled on-demand into highly consolidated, local instructions that run directly on edge nodes for minimal transport latency.`,
      code: `// Initialize dynamic prompt execution channel
const pipeline = await client.pipelines.create({
  trigger: "on_log_ingest",
  classifier: "linear-intent-v2",
  groundingSource: "active_postgres_replicas",
  concurrencyLimit: 250
});`
    },
    reflection: {
      title: "Dynamic Vector Reflection",
      badge: "Real-time Mirroring",
      icon: RefreshCw,
      content: `### 🔮 Real-time Vector Mirroring

AetherAI operates an advanced reflection layer that maps traditional structured relational tables into indexable dimensional vector weights.

#### 🛰️ Transport Mirroring Pipelines
- **Active Change Data Capture (CDC):** Direct listening on database WAL logs, capturing row updates with sub-millisecond overhead.
- **Embedding Synthesis:** Row state alterations are mapped to semantic embeddings in real-time, matching vector spaces instantly.
- **Consolidated Batch Buffers:** Writes are compressed into transactional epochs to protect operational data limits and avoid rate ceilings.

#### 🔐 Mirroring Assurance Checks
Every reflected vector contains a cryptographic header checksum to verify structural integrity across replication nodes.`,
      code: `// Mirror relational table space into vector indexes
const mirror = await client.vectorReflection.mirror({
  tableName: "active_user_transactions",
  vectorDimension: 1536,
  cdcMechanism: "postgres_wal_stream",
  encryptionKey: "aes-256-gcm-hex"
});`
    }
  };

  const activeDoc = docs[activeTab as keyof typeof docs];

  const handleCopyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="docs" className="py-24 relative overflow-hidden bg-[#110e16] scroll-mt-28">
      {/* Background aesthetic touches */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Overlay grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808002_1px,transparent_1px),linear-gradient(to_bottom,#80808002_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Summary */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-mono tracking-widest text-[#cbc3d7] uppercase font-semibold">
              Sovereign Developers Library
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            System Documentation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-sans text-base md:text-lg text-[#cbc3d7]/85 leading-relaxed"
          >
            Deep dive into our architectural paradigms, sovereign security measures, and custom CDC reflection layers. Read precise setup sequences and deploy compliant nodes.
          </motion.p>
        </div>

        {/* Side-by-Side Documentation Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Docs Tab Selection Menu (Col Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="block text-[10px] font-mono tracking-widest text-[#cbc3d7]/40 uppercase mb-4 px-2">
              DOCUMENTATION CHAPTERS
            </span>

            {Object.entries(docs).map(([key, item]) => {
              const IconComp = item.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/40 shadow-[0_4px_25px_rgba(147,51,234,0.15)]"
                      : "bg-[#181420]/40 border-white/5 hover:border-white/10 hover:bg-[#181420]/70"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`p-2 rounded-xl transition-colors duration-300 ${
                      isActive ? "bg-purple-500/20 text-purple-300" : "bg-[#100c16] text-[#cbc3d7]/50 group-hover:text-white"
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className={`block text-xs font-mono font-bold tracking-wider uppercase mb-0.5 ${
                        isActive ? "text-purple-300" : "text-[#cbc3d7]/40"
                      }`}>
                        {item.badge}
                      </span>
                      <span className={`block text-sm font-bold font-sans transition-colors ${
                        isActive ? "text-white" : "text-[#cbc3d7]/80 group-hover:text-white"
                      }`}>
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                    isActive ? "text-cyan-400 translate-x-1" : "text-[#cbc3d7]/20 group-hover:text-[#cbc3d7]/50 group-hover:translate-x-0.5"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Docs Frame Panel (Col Span 8) */}
          <div className="lg:col-span-8">
            <Card className="bg-[#120f1a]/95 border-white/5 p-6 md:p-8 space-y-8 select-text shadow-2xl relative" hoverGlow={true}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Title and metadata info */}
                  <div className="flex flex-wrap gap-4 items-center justify-between border-b border-white/5 pb-5">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        <FileText className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-sans tracking-tight">{activeDoc.title}</h3>
                        <span className="text-[10px] text-[#cbc3d7]/40 font-mono tracking-widest uppercase">SOVEREIGN CORE / REFERENCE</span>
                      </div>
                    </div>
                    
                    <span className="text-[9px] font-mono font-bold px-3 py-1 rounded bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 uppercase tracking-widest">
                      REV: v4.12
                    </span>
                  </div>

                  {/* Document Rich-text description block */}
                  <div className="prose prose-invert max-w-none text-sm leading-relaxed text-[#cbc3d7]/90 font-sans space-y-4">
                    {activeDoc.content.split("\n\n").map((para, idx) => {
                      if (para.startsWith("### ")) {
                        return (
                          <h4 key={idx} className="text-base font-extrabold text-white font-sans tracking-tight pt-2 border-b border-white/5 pb-1 flex items-center gap-2">
                            <CornerDownRight className="w-4 h-4 text-purple-400" />
                            {para.replace("### ", "")}
                          </h4>
                        );
                      }
                      if (para.startsWith("#### ")) {
                        return (
                          <h5 key={idx} className="text-sm font-bold text-[#d0bcff] font-sans tracking-wide pt-1">
                            {para.replace("#### ", "")}
                          </h5>
                        );
                      }
                      if (para.startsWith("- ") || para.startsWith("* ")) {
                        return (
                          <ul key={idx} className="space-y-2.5 pl-2">
                            {para.split("\n").map((li, liIdx) => (
                              <li key={liIdx} className="flex items-start space-x-2 text-xs text-[#cbc3d7]/85">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                                <span>{li.replace(/^(\-\s*|\*\s*)/, "")}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={idx} className="whitespace-pre-line text-xs md:text-sm text-[#cbc3d7]/85 leading-relaxed">
                          {para}
                        </p>
                      );
                    })}
                  </div>

                  {/* Code Block setup */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#cbc3d7]/40 uppercase tracking-widest px-2">
                      <span>INTELLIGENT WEIGHTS INTEGRATION CODE</span>
                      <button
                        onClick={() => handleCopyCode(activeDoc.code)}
                        className="flex items-center space-x-1 hover:text-white bg-white/5 hover:bg-white/10 px-2 py-1 rounded transition-all cursor-pointer border-0"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? "Copied" : "Copy Code"}</span>
                      </button>
                    </div>
                    <div className="bg-[#0b090f] border border-white/5 rounded-2xl p-5 font-mono text-[11px] leading-relaxed relative overflow-hidden select-all text-cyan-300">
                      <pre className="whitespace-pre overflow-x-auto scrollbar">
                        <code>{activeDoc.code}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
