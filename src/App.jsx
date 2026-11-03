import React, { useState } from 'react';
import { 
  Terminal, Cpu, Cloud, Zap, ShieldCheck, ExternalLink, 
  Layers, ArrowUpRight, CheckCircle2, ChevronRight, Mail, Boxes, Bot, Server, Activity, Workflow, Gauge, Sparkles, Sliders, Check
} from 'lucide-react';

export default function App() {
  const [velocityMultiplier, setVelocityMultiplier] = useState(5);
  const [activeTab, setActiveTab] = useState('all');

  // Case Studies Data
  const caseStudies = [
    {
      id: 'ai-engine',
      title: 'Autonomous Multi-Agent & Workflow Engine',
      type: 'Contractor',
      period: '2025 - Present',
      company: 'gdscreate',
      tagline: 'n8n Workflow Orchestration & Distributed AI Automation',
      description: 'Engineered a scalable multi-agent automation platform combining low-code orchestration with deep API integrations, Stripe billing pipelines, and voice/image expense parsing.',
      impact: '10x delivery speed for distributed workflows; automated expense capture and financial tracking to cloud storage.',
      stack: ['n8n', 'Claude AI', 'Node.js (3 yrs)', 'PostgreSQL', 'Stripe API', 'React (AI-Assisted)'],
      link: 'https://gdscreate.com',
      icon: <Bot className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 'telco-modernization',
      title: 'Telco Ecosystem Modernization & Integration',
      type: 'Contractor',
      period: 'Jan 2026 - Present',
      company: 'Wide Open West',
      tagline: 'AI-Assisted Microservices & Legacy Core System Unification',
      description: 'Integrated legacy telco CRMs (ICOMS), field service tooling, and scheduling systems into unified microservices driven by Node.js, AWS, and event-driven architecture.',
      impact: 'Dramatically reduced call-center friction and technician field operation overhead.',
      stack: ['Node.js', 'AWS', 'C# / .NET', 'React / Next.js', 'Claude', 'Datadog'],
      link: 'https://gdscreate.com',
      icon: <Server className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 'aws-migration',
      title: 'High-Throughput AWS Cloud Architecture',
      type: 'Permanent',
      period: '2022 - 2025',
      company: 'Verizon Connect',
      tagline: 'Serverless Migration & Fuel/DVIR Transaction Engine',
      description: 'Architected and migrated high-volume financial transaction processors from EC2 to AWS Lambda. Designed RDS Aurora and SQS messaging queues for mission-critical driver reports.',
      impact: 'Achieved 40%+ cloud cost reduction and eliminated runtime deployment bottlenecks.',
      stack: ['AWS Lambda', 'RDS Aurora', 'DynamoDB', 'SQS', 'Terraform (Medium)', 'Docker'],
      link: 'https://gdscreate.com',
      icon: <Cloud className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 'betting-engine',
      title: 'High-Performance Resulting & Pricing Logic',
      type: 'Contractor',
      period: '2017 - 2018',
      company: 'Paddy Power Betfair',
      tagline: 'Low-Latency Sports Betting Resulting & Pricing Platform',
      description: 'Architected high-performance resulting and pricing logic for high-frequency sports betting systems, processing millions of concurrent real-time transactions.',
      impact: 'Delivered sub-millisecond calculation speeds under ultra-high load peak sporting events.',
      stack: ['C# / .NET', 'Redis', 'High-Concurrency APIs', 'SQL Server', 'Autofac', 'CI/CD'],
      link: 'https://gdscreate.com',
      icon: <Activity className="w-5 h-5 text-emerald-400" />
    }
  ];

  // Velocity Calculator Estimates (Standard Days vs AI Virtual Team Days)
  const calcEstimates = (multiplier) => {
    const baseScaffold = 14;
    const baseIntegration = 21;
    const baseInfra = 10;

    return {
      scaffold: Math.max(1, Math.round(baseScaffold / multiplier)),
      integration: Math.max(2, Math.round(baseIntegration / multiplier)),
      infra: Math.max(1, Math.round(baseInfra / multiplier)),
      savedDays: Math.round((baseScaffold + baseIntegration + baseInfra) * (1 - 1 / multiplier))
    };
  };

  const estimates = calcEstimates(velocityMultiplier);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Background Subtle Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f17]/90 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight flex items-center gap-2">
            <Boxes className="w-5 h-5 text-emerald-400" />
            <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Gonçalo Dias
            </span>
            <span className="text-zinc-500 text-sm font-normal hidden sm:inline">/ AI Solutions Architect & Systems Lead</span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-zinc-400 font-medium">
            <a href="#ai-framework" className="hover:text-emerald-400 transition-colors">AI Framework</a>
            <a href="#architectures" className="hover:text-emerald-400 transition-colors">Architectures</a>
            <a href="#stack" className="hover:text-emerald-400 transition-colors">Tech Matrix</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
          <Zap size={14} className="text-emerald-400" /> AI-Native Solutions Architect & Systems Lead
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Orchestrating <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-200">
              Autonomous Workflows
            </span> & Enterprise Cloud Systems.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Combining 8+ years of enterprise cloud engineering with AI virtual teams (Claude, n8n, multi-agent frameworks) to design, scale, and deliver complex cloud solutions at unmatched velocity.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center pt-2">
          <a href="#architectures" className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/15">
            Explore Architectures <ChevronRight size={16} />
          </a>
          <a href="https://github.com/gds03" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 font-medium text-sm transition-all flex items-center gap-2">
            <Terminal size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/gds03/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 font-medium text-sm transition-all flex items-center gap-2">
            <ExternalLink size={16} /> LinkedIn
          </a>
        </div>
      </section>

      {/* AI Agentic Virtual Team & Velocity Framework (Interactive Section) */}
      <section id="ai-framework" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800/60 space-y-12">
        <div>
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
            <Sparkles size={14} /> AGENTIC LEVERAGE MODEL
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">AI Virtual Team & Agentic Velocity Engine</h2>
          <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">
            By shifting from manual syntax typing to high-agency architectural governance, I deploy automated multi-agent pipelines (Claude 3.7 & n8n) that deliver the output of a full engineering team while maintaining enterprise security and cloud standards.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Bot size={20} />
            </div>
            <h3 className="font-bold text-slate-100 text-base">Multi-Agent Orchestration</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Leveraging Claude 3.7 & n8n workflow engines to route complex tasks across autonomous AI micro-agents.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Workflow size={20} />
            </div>
            <h3 className="font-bold text-slate-100 text-base">Autonomous Delivery Pipelines</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Automated scaffolding, refactoring, and OpenAPI documentation generated in minutes with human oversight.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-slate-100 text-base">Architectural Governance</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              8+ years of production experience ensuring cloud security (IAM), zero deployment bottlenecks, and cost control.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Zap size={20} />
            </div>
            <h3 className="font-bold text-slate-100 text-base">AI-Accelerated Full Stack</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Rapid UI prototyping using React/Next.js and tailwind, letting backend architecture remain the primary focus.
            </p>
          </div>
        </div>

        {/* Interactive Leverage Calculator */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-[#0b0f17] border border-zinc-800 space-y-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Gauge className="text-emerald-400" size={20} /> Interactive Delivery Acceleration Calculator
              </h3>
              <p className="text-xs text-zinc-400">Adjust the slider to simulate AI virtual team execution multiplier against standard manual development cycles.</p>
            </div>
            <div className="text-right font-mono">
              <span className="text-2xl font-extrabold text-emerald-400">{velocityMultiplier}x</span>
              <span className="text-xs text-zinc-500 block">Velocity Multiplier</span>
            </div>
          </div>

          {/* Slider Control */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-zinc-400 font-mono">
              <span>2x (Standard AI Assistant)</span>
              <span>5x (Agentic Orchestration)</span>
              <span>10x (Full Virtual Team)</span>
            </div>
            <input 
              type="range" 
              min="2" 
              max="10" 
              value={velocityMultiplier} 
              onChange={(e) => setVelocityMultiplier(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
            />
          </div>

          {/* Impact Results Cards */}
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0b0f17]/90 border border-zinc-800/80 text-center">
              <span className="text-xs text-zinc-400 font-mono block mb-1">Microservice Scaffolding</span>
              <span className="text-xl font-bold text-emerald-400">{estimates.scaffold} Days</span>
              <span className="text-[10px] text-zinc-500 block mt-1">vs 14 Days manual</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0b0f17]/90 border border-zinc-800/80 text-center">
              <span className="text-xs text-zinc-400 font-mono block mb-1">Ecosystem API Integration</span>
              <span className="text-xl font-bold text-emerald-400">{estimates.integration} Days</span>
              <span className="text-[10px] text-zinc-500 block mt-1">vs 21 Days manual</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0b0f17]/90 border border-zinc-800/80 text-center">
              <span className="text-xs text-zinc-400 font-mono block mb-1">IaC Cloud Provisioning</span>
              <span className="text-xl font-bold text-emerald-400">{estimates.infra} Days</span>
              <span className="text-[10px] text-zinc-500 block mt-1">vs 10 Days manual</span>
            </div>
          </div>

          <div className="text-center text-xs text-emerald-400 font-mono pt-2 flex items-center justify-center gap-2">
            <Check size={14} /> Estimated ~{estimates.savedDays} Engineering Days Saved Per Major Release Cycle
          </div>
        </div>
      </section>

      {/* Case Studies / Proof of Work */}
      <section id="architectures" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800/60 space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Systems Architecture & Proof of Work</h2>
          <p className="text-zinc-400 text-sm">Key engagement outcomes across Contractor and Permanent positions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div key={study.id} className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/30 transition-all group flex flex-col justify-between space-y-4">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium ${
                    study.type === 'Contractor' 
                      ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' 
                      : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                  }`}>
                    {study.type}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{study.period}</span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/50">
                    {study.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400/80">{study.company} — {study.tagline}</p>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed my-3">{study.description}</p>
                
                <div className="p-3 rounded bg-[#0b0f17]/80 border border-zinc-800/80 text-xs text-zinc-300">
                  <strong className="text-emerald-400 font-semibold">Impact:</strong> {study.impact}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/40">
                {study.stack.map((item, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Matrix */}
      <section id="stack" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800/60 space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Technical Proficiency & Tooling Matrix</h2>
          <p className="text-zinc-400 text-sm">Clear categorization of core depth versus AI-accelerated frameworks.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800">
            <Cloud className="text-emerald-400 mb-4" size={24} />
            <h3 className="font-bold mb-3 text-slate-100">Cloud & IaC</h3>
            <ul className="text-sm space-y-2 text-zinc-400">
              <li className="flex justify-between border-b border-zinc-800/40 pb-1.5"><span>AWS (Lambda, ECS, S3, IAM)</span> <span className="text-emerald-400 font-mono text-xs">Expert</span></li>
              <li className="flex justify-between border-b border-zinc-800/40 pb-1.5"><span>Terraform</span> <span className="text-zinc-300 font-mono text-xs">Medium</span></li>
              <li className="flex justify-between border-b border-zinc-800/40 pb-1.5"><span>Azure Platform</span> <span className="text-zinc-300 font-mono text-xs">Certified</span></li>
              <li className="flex justify-between"><span>Docker / Microservices</span> <span className="text-zinc-300 font-mono text-xs">Advanced</span></li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800">
            <Cpu className="text-emerald-400 mb-4" size={24} />
            <h3 className="font-bold mb-3 text-slate-100">AI & Workflows</h3>
            <ul className="text-sm space-y-2 text-zinc-400">
              <li className="flex justify-between border-b border-zinc-800/40 pb-1.5"><span>Claude / Multi-Agent</span> <span className="text-emerald-400 font-mono text-xs">Native</span></li>
              <li className="flex justify-between border-b border-zinc-800/40 pb-1.5"><span>n8n Orchestration</span> <span className="text-emerald-400 font-mono text-xs">Advanced</span></li>
              <li className="flex justify-between border-b border-zinc-800/40 pb-1.5"><span>Node.js / TypeScript</span> <span className="text-emerald-400 font-mono text-xs">3 Years</span></li>
              <li className="flex justify-between"><span>React / Next.js UI</span> <span className="text-amber-400 font-mono text-xs">AI-Accelerated</span></li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800">
            <Layers className="text-emerald-400 mb-4" size={24} />
            <h3 className="font-bold mb-3 text-slate-100">Data Stores & Caching</h3>
            <ul className="text-sm space-y-2 text-slate-400">
              <li className="flex justify-between border-b border-zinc-800/40 pb-1.5"><span>Redis</span> <span className="text-emerald-400 font-mono text-xs">High-Speed</span></li>
              <li className="flex justify-between border-b border-zinc-800/40 pb-1.5"><span>DynamoDB / NoSQL</span> <span className="text-zinc-300 font-mono text-xs">Serverless</span></li>
              <li className="flex justify-between border-b border-zinc-800/40 pb-1.5"><span>RDS Aurora / Postgres</span> <span className="text-emerald-400 font-mono text-xs">Enterprise</span></li>
              <li className="flex justify-between"><span>SQL Server / MongoDB</span> <span className="text-zinc-300 font-mono text-xs">Advanced</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-zinc-800/80 py-12 bg-[#0b0f17]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-bold text-slate-200">Gonçalo Dias</p>
            <p className="text-xs text-zinc-500">AI-Native Solutions Architect & Systems Lead</p>
          </div>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="https://gdscreate.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">gdscreate.com</a>
            <a href="https://www.linkedin.com/in/gds03/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}