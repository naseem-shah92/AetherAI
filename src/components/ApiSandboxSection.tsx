import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, Play, Cpu, ShieldCheck, CheckCircle, Clock } from "lucide-react";
import { Card } from "./ui/card";

export const ApiSandboxSection: React.FC = () => {
  const [endpoint, setEndpoint] = useState("/api/v1/generate");
  const [method, setMethod] = useState("POST");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [customHeader, setCustomHeader] = useState("Bearer aether_session_token_live");
  const [customPrompt, setCustomPrompt] = useState("Synthesize dynamic agent cluster parameters.");

  const performSandboxCall = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");
    
    setTimeout(() => {
      setLoading(false);
      if (endpoint === "/api/v1/generate") {
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
                  id: "completion_node_9011_a",
                  prompt_received: customPrompt,
                  action: "Cognitive completion synthesized successfully",
                  tokens_processed: 124,
                  confidence_score: 0.9984
                },
              ],
            },
            null,
            2
          )
        );
      } else if (endpoint === "/api/v1/sync") {
        setOutput(
          JSON.stringify(
            {
              status: "success",
              compute_latency: "12.8ms",
              sync_direction: "pg_db_to_firestore",
              mirroring_pipeline: "high-availability-vector-shunts",
              synced_records_count: 58172,
              validation_checksum: "sha256_ac987ba4ef1d",
              result: {
                integrity_check: "passed",
                errors_logged: 0,
                next_sync_epoch: Date.now() + 600000
              }
            },
            null,
            2
          )
        );
      } else {
        setOutput(
          JSON.stringify(
            {
              status: "success",
              compute_latency: "1.92ms",
              system_grade: "A+",
              active_cluster_nodes: 14,
              global_sla_uptime: "99.999%",
              metrics: {
                average_ping_msec: 4.12,
                buffer_concurrency_load_percent: 41.2,
                ddos_filtering_status: "active_and_shielded"
              }
            },
            null,
            2
          )
        );
      }
    }, 1200);
  };

  const handleEndpointSelect = (val: string) => {
    setEndpoint(val);
    if (val === "/api/v1/telemetry") {
      setMethod("GET");
    } else {
      setMethod("POST");
    }
  };

  return (
    <section id="sandbox" className="py-24 relative overflow-hidden bg-[#110e16] scroll-mt-28">
      {/* Background radial glow */}
      <div className="absolute top-[30%] -right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid line layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full px-4 py-1 mb-4"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-mono tracking-widest text-[#cbc3d7] uppercase font-semibold">
              Live Interactive Playground
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            API Sandbox Environment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-sans text-base md:text-lg text-[#cbc3d7]/80 leading-relaxed"
          >
            Design, inspect, and execute computational cognitive model queries directly. Experience low-latency execution responses across our high-performance micro-clusters.
          </motion.p>
        </div>

        {/* Content Splitting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Form (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Card className="h-full bg-[#181420]/80 border-white/5 p-6 md:p-8 flex flex-col justify-between space-y-6" hoverGlow={true}>
                <div className="space-y-6">
                  {/* Endpoint Group */}
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/55 uppercase mb-2">
                      Target Endpoint Channel
                    </label>
                    <div className="flex rounded-xl bg-[#0d0b11] border border-white/10 p-1">
                      <div className="px-3 flex items-center bg-[#181420]/50 border border-white/5 rounded-lg text-xs font-mono font-bold text-cyan-400 leading-none">
                        {method}
                      </div>
                      <select
                        value={endpoint}
                        onChange={(e) => handleEndpointSelect(e.target.value)}
                        className="flex-1 bg-transparent px-3 py-2.5 focus:outline-none text-sm text-white/90 border-0"
                      >
                        <option value="/api/v1/generate">/api/v1/generate (Cognitive Completion)</option>
                        <option value="/api/v1/sync">/api/v1/sync (Database Mirroring Pipe)</option>
                        <option value="/api/v1/telemetry">/api/v1/telemetry (Active SLA Health)</option>
                      </select>
                    </div>
                  </div>

                  {/* Header Params */}
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/55 uppercase mb-2">
                      Authorization Headers
                    </label>
                    <input
                      type="text"
                      value={customHeader}
                      onChange={(e) => setCustomHeader(e.target.value)}
                      placeholder="Bearer token"
                      className="w-full px-4 py-3 bg-[#0d0b11] border border-white/10 rounded-xl focus:border-purple-500/70 focus:outline-none transition-all placeholder:text-[#cbc3d7]/30 text-xs font-mono text-white/90"
                    />
                  </div>

                  {/* Body Parameter Inputs */}
                  {endpoint !== "/api/v1/telemetry" ? (
                    <div>
                      <label className="block text-xs font-mono tracking-widest text-[#cbc3d7]/55 uppercase mb-2">
                        {endpoint === "/api/v1/sync" ? "Sync Configuration Parameters" : "Prompt Completion Logic"}
                      </label>
                      {endpoint === "/api/v1/generate" ? (
                        <textarea
                          rows={3}
                          value={customPrompt}
                          onChange={(e) => setCustomPrompt(e.target.value)}
                          className="w-full p-4 bg-[#0d0b11] border border-white/10 rounded-xl focus:border-purple-500/70 focus:outline-none transition-all text-xs font-sans text-white/95"
                        />
                      ) : (
                        <div className="space-y-2 p-4 bg-[#0d0b11] rounded-xl border border-white/5 font-mono text-[10px] text-[#cbc3d7]/65">
                          <div className="flex justify-between">
                            <span>Sourcing:</span> <span className="text-purple-300">"pg_db_replica"</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Indexing Vector Keys:</span> <span className="text-cyan-400">"active_neural_weights_v4"</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Transport Protocol:</span> <span className="text-[#cbc3d7]">"Secure-TLS-1.3"</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 space-y-2">
                      <span className="block text-[10px] font-mono font-bold tracking-wider text-purple-300 uppercase">
                        Endpoint Metadata status
                      </span>
                      <p className="text-xs text-[#cbc3d7]/70 leading-relaxed font-sans">
                        SLA endpoints fetch live statistics across our distributed regional computing clusters, checking response bounds and active node volumes dynamically.
                      </p>
                    </div>
                  )}
                </div>

                <form onSubmit={performSandboxCall} className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4.5 rounded-xl text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-purple-600 via-[#6d3bd7] to-cyan-500 hover:shadow-[0_0_20px_rgba(109,59,215,0.4)] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer border-0"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
                        <span>INTERCEPTING ENCRYPTED SECURE TUNNEL...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-white" />
                        <span>EXECUTE SECURE ENDPOINT QUERY</span>
                      </>
                    )}
                  </button>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Console Output (Col Span 7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <div className="bg-[#0b090f] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden font-mono shadow-2xl">
                {/* Console header controls */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/20" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/20" />
                    <span className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/20" />
                    <span className="text-[10px] text-[#cbc3d7]/40 tracking-wider font-semibold ml-2">Aether Intelligent Terminal Response</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-green-400/10 text-green-400 uppercase">
                      STATUS 200 OK
                    </span>
                  </div>
                </div>

                {/* Console text contents */}
                <div className="flex-1 min-h-[300px] text-xs leading-normal select-text scrollbar overflow-y-auto max-h-[400px]">
                  {loading ? (
                    <div className="space-y-1 text-cyan-400 animate-pulse font-bold">
                      <span className="block">$ curling live secure parameters channel...</span>
                      <span className="block">[Connection negotiated on SSLv3 with cipher: AES-256-GCM]</span>
                      <span className="block">[Parsing dynamic vector shunts metadata... Ready]</span>
                      <span className="block">Rendering response body stream:</span>
                    </div>
                  ) : output ? (
                    <pre className="text-cyan-300 font-mono whitespace-pre overflow-x-auto text-xs leading-[1.6]">
                      {output}
                    </pre>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                      <div className="p-3 bg-purple-500/5 rounded-2xl border border-purple-500/10">
                        <Play className="w-8 h-8 text-purple-400 fill-current ml-0.5 animate-pulse" />
                      </div>
                      <div className="max-w-xs">
                        <span className="block text-sm font-sans font-bold text-white mb-1">Awaiting Request Execution</span>
                        <span className="block text-xs text-[#cbc3d7]/50 font-sans leading-relaxed">
                          Click "Execute Secure Endpoint Query" on the left panel to synthesize network transactions.
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Console footer stats */}
                <div className="border-t border-white/5 pt-4 mt-6 flex flex-wrap gap-4 items-center justify-between text-[#cbc3d7]/40 text-[10px] font-mono">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3 h-3 text-[#cbc3d7]/30" />
                    <span>Inference latency SLA: <strong className="text-green-400">PASSED</strong></span>
                  </div>
                  <span>Secure TLS Port: <strong>3000</strong></span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
