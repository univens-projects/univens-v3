import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Server,
  Cloud,
  Database,
  Sparkles,
  Radio,
  TrendingUp,
  Target,
  Check,
  Zap,
  Terminal,
  Cpu,
  Layers,
  Activity,
  Code2,
  Workflow,
  Globe,
  Gauge,
  Lock,
  GitBranch,
  ShieldAlert,
  ArrowUpRight,
  MousePointer2
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 01. Digital Infrastructure Animation (Server Cluster & Traffic Mesh)        */
/* -------------------------------------------------------------------------- */
export const InfraAnimation: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [metrics, setMetrics] = useState({ requests: 4820, latency: 1.2, uptime: 99.99 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 3);
      setMetrics((prev) => ({
        requests: Math.floor(4800 + Math.random() * 200),
        latency: Number((0.9 + Math.random() * 0.5).toFixed(1)),
        uptime: 99.99
      }));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-52 rounded-2xl bg-slate-950 p-3.5 border border-slate-800/80 overflow-hidden font-mono text-[11px] relative flex flex-col justify-between shadow-xl group/card">
      {/* Background Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px] opacity-25 pointer-events-none"></div>
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* OS Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block shadow-[0_0_6px_#f43f5e]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block shadow-[0_0_6px_#f59e0b]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-[0_0_6px_#10b981]"></span>
          <span className="text-[10px] text-slate-300 font-bold ml-2 tracking-wider">univens.infra.mesh</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>SYSTEM ACTIVE</span>
        </div>
      </div>

      {/* Main Interactive Topology Mesh */}
      <div className="relative z-10 my-2 flex items-center justify-between px-3 py-2 bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800">
        {/* Node 1: Cloud Provider */}
        <motion.div
          animate={{
            borderColor: activeNode === 0 ? 'rgba(52, 211, 153, 0.8)' : 'rgba(51, 65, 85, 0.6)',
            boxShadow: activeNode === 0 ? '0 0 15px rgba(16, 185, 129, 0.25)' : 'none'
          }}
          className="p-2.5 rounded-xl bg-slate-950 border text-slate-200 flex flex-col items-center gap-1.5 transition-all duration-300"
        >
          <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
            <Cloud className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold tracking-tight">AWS/GCP</span>
        </motion.div>

        {/* Animated Particle Path 1 */}
        <div className="flex-1 h-[2px] bg-slate-800 relative mx-2 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#34d399]"
          />
        </div>

        {/* Node 2: Gateway Router */}
        <motion.div
          animate={{
            borderColor: activeNode === 1 ? 'rgba(52, 211, 153, 0.8)' : 'rgba(51, 65, 85, 0.6)',
            scale: activeNode === 1 ? 1.08 : 1,
            boxShadow: activeNode === 1 ? '0 0 20px rgba(16, 185, 129, 0.35)' : 'none'
          }}
          className="p-2.5 rounded-xl bg-slate-950 border text-slate-200 flex flex-col items-center gap-1.5 transition-all duration-300"
        >
          <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
            <Server className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold tracking-tight">LOAD BALANCER</span>
        </motion.div>

        {/* Animated Particle Path 2 */}
        <div className="flex-1 h-[2px] bg-slate-800 relative mx-2 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: 0.7 }}
            className="w-8 h-full bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_8px_#2dd4bf]"
          />
        </div>

        {/* Node 3: Database Cluster */}
        <motion.div
          animate={{
            borderColor: activeNode === 2 ? 'rgba(52, 211, 153, 0.8)' : 'rgba(51, 65, 85, 0.6)',
            boxShadow: activeNode === 2 ? '0 0 15px rgba(16, 185, 129, 0.25)' : 'none'
          }}
          className="p-2.5 rounded-xl bg-slate-950 border text-slate-200 flex flex-col items-center gap-1.5 transition-all duration-300"
        >
          <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400">
            <Database className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold tracking-tight">SQL / REDIS</span>
        </motion.div>
      </div>

      {/* Live Operational Metrics Footer */}
      <div className="relative z-10 grid grid-cols-3 gap-2 bg-slate-900/90 rounded-xl p-2 border border-slate-800/90 text-center">
        <div>
          <span className="text-[8px] text-slate-400 uppercase font-semibold block">Throughput</span>
          <span className="text-xs font-bold text-emerald-400 font-mono">{metrics.requests} req/s</span>
        </div>
        <div>
          <span className="text-[8px] text-slate-400 uppercase font-semibold block">Avg Latency</span>
          <span className="text-xs font-bold text-teal-300 font-mono">{metrics.latency}ms</span>
        </div>
        <div>
          <span className="text-[8px] text-slate-400 uppercase font-semibold block">SLA Uptime</span>
          <span className="text-xs font-bold text-blue-400 font-mono">{metrics.uptime}%</span>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 02. Product Development Animation (Live Code & Visual Builder Sync)         */
/* -------------------------------------------------------------------------- */
export const ProductDevAnimation: React.FC = () => {
  const [buildStep, setBuildStep] = useState(0);
  const codeLines = [
    'const App = () => <SaaSDashboard />',
    'export const api = createTRPCClient()',
    'deployToProduction({ region: "auto" })'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBuildStep((prev) => (prev + 1) % codeLines.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-52 rounded-2xl bg-slate-950 p-3.5 border border-slate-800/80 overflow-hidden font-mono text-[11px] relative flex flex-col justify-between shadow-xl">
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] font-bold text-slate-200">IDE & App Compiler</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[9px]">
          <GitBranch className="w-3 h-3" />
          <span>main &rarr; v2.4.0</span>
        </div>
      </div>

      {/* Code Editor & Live Preview Split */}
      <div className="grid grid-cols-12 gap-2 my-2 flex-1">
        {/* Left: Animated Code Stream */}
        <div className="col-span-6 bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 flex flex-col justify-between overflow-hidden">
          <div className="space-y-1 font-mono text-[9px]">
            <div className="text-slate-500">// Real-time build sync</div>
            <div className="text-teal-400 font-semibold">import &#123; React &#125; from 'react';</div>
            <motion.div
              key={buildStep}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-emerald-300 font-bold bg-emerald-500/10 px-1 py-0.5 rounded border border-emerald-500/20 truncate"
            >
              {codeLines[buildStep]}
            </motion.div>
          </div>
          <div className="flex items-center gap-1.5 text-[8px] text-slate-400 pt-1 border-t border-slate-800/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>TypeScript Compile: Clean</span>
          </div>
        </div>

        {/* Right: Live Rendered Interface Card */}
        <div className="col-span-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-xl p-2.5 border border-slate-800/80 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-slate-300">Live UI Canvas</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-300 text-[8px] font-bold">60 FPS</span>
          </div>

          <div className="space-y-1.5">
            <div className="w-full h-2.5 rounded bg-slate-800 overflow-hidden relative">
              <motion.div
                animate={{ width: ['20%', '100%'] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="p-1 rounded bg-blue-500/10 border border-blue-500/30 text-[8px] text-blue-300 font-bold text-center">
                React 19
              </div>
              <div className="p-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[8px] text-emerald-300 font-bold text-center">
                Tailwind v4
              </div>
            </div>
          </div>

          {/* Animated Interactive Mouse Cursor */}
          <motion.div
            animate={{
              x: [10, 70, 30, 10],
              y: [2, 18, 12, 2]
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-2 left-2 z-20 pointer-events-none drop-shadow-[0_2px_8px_rgba(52,211,153,0.5)]"
          >
            <MousePointer2 className="w-4 h-4 text-emerald-400 fill-emerald-400" />
          </motion.div>
        </div>
      </div>

      {/* Deployment Banner */}
      <div className="bg-slate-900 rounded-lg p-1.5 border border-slate-800 flex items-center justify-between text-[9px]">
        <span className="text-slate-300 flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-amber-400" />
          <span>CI/CD Pipeline: Auto-deploy on Git push</span>
        </span>
        <span className="text-emerald-400 font-bold">0.4s Build</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 03. AI & Automation Animation (Neural LLM Agent Stream)                    */
/* -------------------------------------------------------------------------- */
export const AiAutomationAnimation: React.FC = () => {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const aiTasks = [
    'User Intent: Parse contract document',
    'Agent: Extracting key clauses & entity nodes',
    'Action: Executing automated CRM sync',
    'Status: 100% Autonomous Resolution'
  ];

  return (
    <div className="w-full h-52 rounded-2xl bg-slate-950 p-3.5 border border-slate-800/80 overflow-hidden font-mono text-[11px] relative flex flex-col justify-between shadow-xl">
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>GEMINI-2.5-PRO AI AGENT</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[9px] font-bold">
          LLM WORKFLOW
        </span>
      </div>

      {/* Neural Network Graph Visualizer */}
      <div className="my-2 p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between relative overflow-hidden">
        {/* Animated Waveform Frequencies */}
        <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1">
          <span>Neural Token Streaming</span>
          <span className="text-emerald-400 font-bold">120 tokens/s</span>
        </div>

        <div className="flex items-end justify-center gap-1.5 h-10 my-1">
          {[35, 75, 40, 95, 60, 100, 50, 85, 30, 90, 65, 80, 45, 95, 55].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: ['25%', `${h}%`, '25%'] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.06 }}
              className="w-1.5 rounded-full bg-gradient-to-t from-emerald-600 via-teal-400 to-blue-400 shadow-[0_0_8px_#34d399]"
            />
          ))}
        </div>

        {/* Task Stream Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pulseIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-[9px]"
          >
            <div className="flex items-center gap-2 text-slate-200 truncate">
              <Workflow className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{aiTasks[pulseIndex]}</span>
            </div>
            <span className="text-emerald-400 font-bold shrink-0">✓ Verified</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 rounded-lg p-1.5 border border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
        <span>Autonomous Decision Accuracy:</span>
        <span className="text-emerald-400 font-bold font-mono">99.8% Precision</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 04. IoT & Robotics Animation (Cyberpunk Telemetry HUD)                      */
/* -------------------------------------------------------------------------- */
export const IotRoboticsAnimation: React.FC = () => {
  return (
    <div className="w-full h-52 rounded-2xl bg-slate-950 p-3.5 border border-slate-800/80 overflow-hidden font-mono text-[11px] relative flex flex-col justify-between shadow-xl">
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2 text-blue-400 font-bold">
          <Radio className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>EDGE TELEMETRY & ROBOTICS</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[9px] font-bold">
          MQTT 60Hz
        </span>
      </div>

      {/* Radar & Hardware HUD Grid */}
      <div className="my-2 p-2.5 bg-slate-900/80 rounded-xl border border-slate-800 flex-1 flex items-center gap-3 relative">
        {/* Radar Scanner Circle */}
        <div className="w-20 h-20 rounded-full border border-blue-500/40 relative flex items-center justify-center shrink-0 overflow-hidden bg-blue-950/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <div className="w-14 h-14 rounded-full border border-blue-500/20"></div>
          <div className="w-8 h-8 rounded-full border border-blue-500/20"></div>
          {/* Radar Scanner Sweep */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-transparent origin-center"
          />
          <span className="w-2 h-2 rounded-full bg-emerald-400 absolute top-4 left-5 animate-ping shadow-[0_0_8px_#34d399]"></span>
          <span className="w-2 h-2 rounded-full bg-blue-400 absolute bottom-4 right-5 shadow-[0_0_8px_#60a5fa]"></span>
        </div>

        {/* Live Hardware Telemetry Bars */}
        <div className="flex-1 space-y-1.5 text-[9px]">
          <div className="flex justify-between items-center bg-slate-950 p-1.5 rounded-lg border border-slate-800">
            <span className="text-slate-400 font-semibold">MOTOR_NODE_A</span>
            <span className="text-emerald-400 font-bold">3,200 RPM</span>
          </div>
          <div className="flex justify-between items-center bg-slate-950 p-1.5 rounded-lg border border-slate-800">
            <span className="text-slate-400 font-semibold">THERMAL_CORE</span>
            <span className="text-blue-400 font-bold">36.5°C OPTIMAL</span>
          </div>
          <div className="flex justify-between items-center bg-slate-950 p-1.5 rounded-lg border border-slate-800">
            <span className="text-slate-400 font-semibold">SIGNAL_PING</span>
            <span className="text-teal-300 font-bold">0.8 ms</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 rounded-lg p-1.5 border border-slate-800 flex items-center justify-between text-[9px] text-slate-300">
        <span>Hardware Bus Status:</span>
        <span className="text-blue-400 font-bold">100% Synchronized</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 05. Marketing Systems Animation (Growth Analytics Bar Graph)                */
/* -------------------------------------------------------------------------- */
export const MarketingAnimation: React.FC = () => {
  return (
    <div className="w-full h-52 rounded-2xl bg-slate-950 p-3.5 border border-slate-800/80 overflow-hidden font-mono text-[11px] relative flex flex-col justify-between shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>GROWTH FUNNEL ARCHITECTURE</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[9px] font-bold">
          +342% ROI
        </span>
      </div>

      {/* Animated Bar Chart & Metric Pill */}
      <div className="my-2 p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between relative">
        <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1">
          <span>Automated Conversion Funnel</span>
          <span className="text-emerald-400 font-bold">CAC: -38%</span>
        </div>

        <div className="flex items-end justify-between gap-3 h-16 px-2 pt-1">
          {/* Funnel Stage 1 */}
          <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
            <motion.div
              animate={{ height: ['40%', '65%', '40%'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full rounded-t-lg bg-slate-700/80"
            />
            <span className="text-[8px] text-slate-400 font-bold">LEADS</span>
          </div>
          {/* Funnel Stage 2 */}
          <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
            <motion.div
              animate={{ height: ['55%', '85%', '55%'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="w-full rounded-t-lg bg-blue-500/80"
            />
            <span className="text-[8px] text-blue-300 font-bold">SQLs</span>
          </div>
          {/* Funnel Stage 3 */}
          <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
            <motion.div
              animate={{ height: ['70%', '100%', '70%'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="w-full rounded-t-lg bg-gradient-to-t from-emerald-600 via-emerald-400 to-teal-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]"
            />
            <span className="text-[8px] text-emerald-400 font-bold">DEALS</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 rounded-lg p-1.5 border border-slate-800 flex items-center justify-between text-[9px] text-slate-300">
        <span>Campaign Automation:</span>
        <span className="text-emerald-400 font-bold">Multi-Channel Active</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 06. Strategic Execution Animation (Agile Kanban Board)                      */
/* -------------------------------------------------------------------------- */
export const StrategicAnimation: React.FC = () => {
  return (
    <div className="w-full h-52 rounded-2xl bg-slate-950 p-3.5 border border-slate-800/80 overflow-hidden font-mono text-[11px] relative flex flex-col justify-between shadow-xl">
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2 text-blue-400 font-bold">
          <Target className="w-4 h-4 text-blue-400" />
          <span>AGILE EXECUTION ROADMAP</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[9px] font-bold">
          ON SCHEDULE
        </span>
      </div>

      {/* Kanban Board Mockup */}
      <div className="my-2 p-2.5 bg-slate-900/80 rounded-xl border border-slate-800 flex-1 grid grid-cols-2 gap-2">
        {/* Column 1: In Flight */}
        <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
          <span className="text-[8px] text-slate-400 font-bold uppercase">Executing Sprint</span>
          <motion.div
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-1.5 rounded-md bg-blue-500/20 border border-blue-500/40 text-[9px] text-blue-300 font-semibold"
          >
            Specialist Alignment
          </motion.div>
        </div>

        {/* Column 2: Milestone Delivered */}
        <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
          <span className="text-[8px] text-emerald-400 font-bold uppercase">Milestone Delivered</span>
          <motion.div
            animate={{ scale: [0.98, 1, 0.98] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="p-1.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-[9px] text-emerald-300 font-semibold flex items-center justify-between"
          >
            <span>Q1 Product Release</span>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 rounded-lg p-1.5 border border-slate-800 flex items-center justify-between text-[9px] text-slate-300">
        <span>Delivery Commitment:</span>
        <span className="text-emerald-400 font-bold">100% Accountable</span>
      </div>
    </div>
  );
};
