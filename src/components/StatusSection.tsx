import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Server, Activity, ShieldCheck, Zap, Globe, RefreshCcw, Wifi, AlertTriangle } from "lucide-react";
import { Card } from "./ui/card";

export const StatusSection: React.FC = () => {
  const [latency, setLatency] = useState(4.12);
  const [concurrency, setConcurrency] = useState(14841);
  const [cpuUsage, setCpuUsage] = useState(38);
  const [uptimeDays, setUptimeDays] = useState(364);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    // Current live timestamp
    const updateTime = () => {
      const now = new Date();
      setLastUpdated(now.toLocaleTimeString());
    };
    updateTime();

    const interval = setInterval(() => {
      // Dynamic fluctuating telemetry values
      setLatency((prev) => {
        const delta = (Math.random() * 0.3 - 0.15);
        return parseFloat(Math.max(3.8, Math.min(4.8, prev + delta)).toFixed(2));
      });
      setConcurrency((prev) => {
        const delta = Math.floor(Math.random() * 80 - 40);
        return Math.max(14000, Math.min(15500, prev + delta));
      });
      setCpuUsage((prev) => {
        const delta = Math.floor(Math.random() * 6 - 3);
        return Math.max(30, Math.min(50, prev + delta));
      });
      updateTime();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const clusters = [
    {
      id: "us-central",
      name: "West US (us-central1)",
      region: "Iowa, USA",
      uptime: "99.999%",
      ping: "12ms",
      load: 34,
      status: "operational"
    },
    {
      id: "europe-west",
      name: "Europe North (europe-west4)",
      region: "Eemshaven, NL",
      uptime: "99.998%",
      ping: "28ms",
      load: 45,
      status: "operational"
    },
    {
      id: "asia-east",
      name: "East Asia (asia-east1)",
      region: "Changhua, TW",
      uptime: "100.000%",
      ping: "41ms",
      load: 21,
      status: "operational"
    },
    {
      id: "sa-east",
      name: "South America East (sa-east1)",
      region: "São Paulo, BR",
      uptime: "99.997%",
      ping: "54ms",
      load: 18,
      status: "operational"
    }
  ];

  return (
    <section id="status" className="py-24 relative overflow-hidden bg-[#15121b] scroll-mt-28">
      {/* Glow circles */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-10%] w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-4"
          >
            <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-purple-300 uppercase font-semibold">
              Live Cluster Status Systems
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Infrastructure Telemetry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-sans text-base md:text-lg text-[#cbc3d7]/80 leading-relaxed"
          >
            AetherAI operates across isolated regional high-performance hypervisors, guaranteeing low-latency transactions and enterprise-grade resilience benchmarks.
          </motion.p>
        </div>

        {/* Telemetry Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Item 1: Average Latency */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-[#1c1827]/80 border-white/5 p-6 space-y-4" hoverGlow={true}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-widest text-[#cbc3d7]/50 uppercase">
                  Avg Inference Latency
                </span>
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-cyan-400 tracking-tight">
                  {latency}ms
                </span>
                <span className="text-xs text-green-400 font-medium whitespace-nowrap">Optimal Uptime</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full w-[85%]" />
              </div>
              <span className="block text-[10px] font-mono text-[#cbc3d7]/40">SLA: &le; 10.0ms Compliant</span>
            </Card>
          </motion.div>

          {/* Item 2: Concurrency Rate */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            <Card className="bg-[#1c1827]/80 border-white/5 p-6 space-y-4" hoverGlow={true}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-widest text-[#cbc3d7]/50 uppercase">
                  Network Ingress Concurrency
                </span>
                <Zap className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-purple-300 tracking-tight">
                  {concurrency.toLocaleString()}/s
                </span>
                <span className="text-xs text-[#cbc3d7]/60 font-medium">Cap: 40k</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full w-[41.2%]" />
              </div>
              <span className="block text-[10px] font-mono text-[#cbc3d7]/40">Active Buffer load: 41.2%</span>
            </Card>
          </motion.div>

          {/* Item 3: Core CPU Load */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Card className="bg-[#1c1827]/80 border-white/5 p-6 space-y-4" hoverGlow={true}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-widest text-[#cbc3d7]/50 uppercase">
                  Global Hypervisor Load
                </span>
                <Server className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-[#d0bcff] tracking-tight">
                  {cpuUsage}%
                </span>
                <span className="text-xs text-cyan-400 font-medium">Flexible Scaling</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${cpuUsage}%` }} />
              </div>
              <span className="block text-[10px] font-mono text-[#cbc3d7]/40">Thermal limits: regular (34℃)</span>
            </Card>
          </motion.div>

          {/* Item 4: Uptime SLA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <Card className="bg-[#1c1827]/80 border-white/5 p-6 space-y-4" hoverGlow={true}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-widest text-[#cbc3d7]/50 uppercase">
                  Sovereign SLA Uptime
                </span>
                <ShieldCheck className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-green-400 tracking-tight">
                  99.999%
                </span>
                <span className="text-xs text-[#cbc3d7]/60 font-medium">{uptimeDays}d record</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full w-full" />
              </div>
              <span className="block text-[10px] font-mono text-[#cbc3d7]/40">Audits SOC2 verified weekly</span>
            </Card>
          </motion.div>
        </div>

        {/* Detailed Cluster Nodes List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active clusters sidebar (Col Span 7) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#120f1a]/80 border border-white/5 rounded-3xl p-6 md:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">Distributed Computing Nodes</h3>
                    <p className="text-xs text-[#cbc3d7]/50">Status and health metrics across multi-regional hosts</p>
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-[#cbc3d7]/40">
                    <RefreshCcw className="w-3.5 h-3.5 animate-spin text-[#cbc3d7]/40" />
                    <span>Updated at <strong className="text-cyan-400">{lastUpdated}</strong></span>
                  </div>
                </div>

                <div className="space-y-4">
                  {clusters.map((cluster) => (
                    <div
                      key={cluster.id}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all flex flex-wrap gap-4 items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2.5 bg-green-500/10 rounded-xl">
                          <Globe className="w-5 h-5 text-cyan-400 animate-pulse" />
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-white">{cluster.name}</span>
                          <span className="block text-xs text-[#cbc3d7]/50">{cluster.region}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-8">
                        {/* Load Info */}
                        <div className="hidden sm:block text-right">
                          <span className="text-[10px] font-mono text-[#cbc3d7]/40 uppercase block">NODE LOAD</span>
                          <span className="text-xs font-bold text-white font-mono">{cluster.load}%</span>
                        </div>

                        {/* Ping latency */}
                        <div className="hidden sm:block text-right">
                          <span className="text-[10px] font-mono text-[#cbc3d7]/40 uppercase block">NETWORK PING</span>
                          <span className="text-xs font-bold text-cyan-400 font-mono">{cluster.ping}</span>
                        </div>

                        {/* Uptime Badge */}
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-[#cbc3d7]/40 uppercase block mb-1">UPTIME RECORD</span>
                          <span className="text-xs font-mono font-bold text-green-400 px-2.5 py-1 rounded-full bg-green-400/10 border border-green-400/20">
                            {cluster.uptime}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* SLA Statement details card (Col Span 4) */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-[#120f1a]/80 border-white/5 p-6 md:p-8 space-y-6" hoverGlow={true}>
                <div className="p-3.5 bg-cyan-500/10 rounded-2xl w-fit">
                  <Wifi className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
                
                <h3 className="text-xl font-bold text-white font-sans">Guaranteed SLA Networks</h3>
                
                <p className="text-sm text-[#cbc3d7]/80 leading-relaxed font-sans">
                  AetherAI offers mission-critical guarantees to enterprises deploying continuous cognitive operations.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-2.5 text-xs text-[#cbc3d7]/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <p>Elastic autoscaling allocates isolated computational nodes near real-time traffic spikes.</p>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs text-[#cbc3d7]/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <p>Redundant fallback routes avoid intermediate points of failure automatically.</p>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs text-[#cbc3d7]/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <p>Continuous validation ensures absolute integrity in database reflection layers.</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
