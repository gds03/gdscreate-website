import {
  Terminal, Cpu, Cloud, Zap, ShieldCheck, ExternalLink,
  Layers, ChevronRight, Bot, Server, Activity, Workflow, Sparkles, BookOpen, GitBranch, BadgeCheck
} from 'lucide-react';

const proofStrip = [
  { value: 'Since 2010', label: 'Building with .NET', source: 'Career history on LinkedIn' },
  { value: '4 years', label: 'AWS in production', source: 'Career history on LinkedIn' },
  { value: '1 year', label: 'Azure', source: 'Career history on LinkedIn' },
  { value: 'AWS Associate', label: 'Certified Solutions Architect', source: 'Verify on Credly', href: 'https://www.credly.com/badges/1ec354f2-1a09-49ef-9413-bbbdd5ca0ad4' }
];

const openSource = [
  {
    name: 'federated-identity-poc',
    url: 'https://github.com/gds03/federated-identity-poc',
    description: 'Local federated identity & access management in .NET 10 and React: OAuth 2.0 client credentials, RS256 tokens, JWKS, OIDC with PKCE, and route-level access control. Each API can validate tokens locally or ask the central service, trading revocation speed against an extra network hop.',
    tags: ['.NET 10', 'OAuth 2.0 / OIDC', 'React', 'SQLite']
  },
  {
    name: 'agentic-ai-team',
    url: 'https://github.com/gds03/agentic-ai-team',
    description: 'A virtual software team of Claude agents (architect, developers, reviewer, QA, scrum master, researcher) driven by slash commands, a backlog and docs, with a human product owner.',
    tags: ['Claude', 'Multi-agent', 'Workflow']
  },
  {
    name: 'APIWorker',
    url: 'https://github.com/gds03/APIWorker',
    description: 'Two processes that talk through a broker: a RESTful HATEOAS API and an event-sourced worker. Placing an order triggers asynchronous payment processing across separate services.',
    tags: ['.NET', 'Event sourcing', 'RabbitMQ', 'Docker']
  }
];

const articles = [
  { title: 'Building Robust Ecommerce Workflows Using MassTransit Sagas and EFCore', tags: ['MassTransit', 'Sagas', 'EFCore'], url: 'https://medium.com/@goncalordias/building-robust-ecommerce-workflows-using-masstransit-sagas-and-efcore-92a53ab394c0' },
  { title: 'Building Lightweight .NET Minimal API Services on AWS Lambda', tags: ['.NET', 'AWS Lambda', 'Serverless'], url: 'https://medium.com/@goncalordias/building-lightweight-net-minimal-api-services-on-aws-lambda-c319d0132151' },
  { title: 'Centralizing Security Controls Across AWS Accounts Using AWS Organizations', tags: ['AWS', 'Security', 'Organizations'], url: 'https://medium.com/@goncalordias/centralizing-security-controls-across-aws-accounts-using-aws-organizations-aa4011adc12c' },
  { title: 'AWS Accounts vs Azure Subscriptions: Architecture and Management Explained', tags: ['AWS', 'Azure', 'Architecture'], url: 'https://medium.com/@goncalordias/aws-accounts-vs-azure-subscriptions-architecture-and-management-explained-2fc5df332a39' },
  { title: 'Deploy Software Without Pipelines: Practical Options for Developers', tags: ['Deployment', 'DevOps'], url: 'https://medium.com/@goncalordias/deploy-software-without-pipelines-practical-options-for-developers-bf189b793cb3' },
  { title: "PostgreSQL's Advanced Features That Outpace SQL Server in 2025", tags: ['PostgreSQL', 'SQL Server'], url: 'https://medium.com/@goncalordias/postgresqls-advanced-features-that-outpace-sql-server-in-2025-10e90501fd79' }
];

export default function App() {

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

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Background Subtle Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f17]/90 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight flex items-center gap-2">
            <img src="/logo.png" alt="gdscreate logo" className="h-10 w-10 object-contain" />
            <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Gonçalo Dias
            </span>
            <span className="text-zinc-500 text-sm font-normal hidden sm:inline">/ AI Solutions Architect & Systems Lead</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#open-source" className="hover:text-emerald-400 transition-colors">Open Source</a>
            <a href="#architectures" className="hover:text-emerald-400 transition-colors">Architectures</a>
            <a href="#writing" className="hover:text-emerald-400 transition-colors">Writing</a>
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
            Combining .NET and cloud engineering since 2010 with AI virtual teams (Claude, n8n, multi-agent frameworks) to design, scale, and deliver complex cloud solutions faster. Performance and savings figures on this site are estimates.
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

      {/* Proof strip */}
      <section aria-label="Proof" className="max-w-6xl mx-auto px-6 pb-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {proofStrip.map((item) => (
            <li key={item.label} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-center">
              <span className="block text-xl md:text-2xl font-bold text-slate-100">{item.value}</span>
              <span className="block text-xs text-zinc-400 mt-1">{item.label}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[10px] text-emerald-400/80 hover:text-emerald-300 mt-2 font-mono">
                  <BadgeCheck size={12} /> {item.source}
                </a>
              ) : (
                <span className="block text-[10px] text-zinc-500 mt-2 font-mono">Source: {item.source}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800/60 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">About</h2>
          <p className="text-emerald-400/80 text-sm font-mono">A pragmatic cloud architect</p>
        </div>
        <div className="md:col-span-2 space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed">
          <p>I'm a pragmatic person who loves simplicity in software. I don't believe building complex systems is the way to go, because software shouldn't be just for some: it should be for all.</p>
          <p>I bring neutral energy to teams and try to simplify processes rather than complicate them. My strength is shortening the path between strategic vision and technical detail, translating business goals into clear, actionable development.</p>
          <p>I also absorb domain details quickly, which lets me understand your business deeply and build solutions that fit it.</p>
        </div>
      </section>

      {/* AI Agentic Virtual Team & Velocity Framework (Interactive Section) */}
      <section id="ai-framework" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800/60 space-y-12">
        <div>
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
            <Sparkles size={14} /> AGENTIC LEVERAGE MODEL
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">AI Virtual Team & Agentic Delivery</h2>
          <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">
            By shifting from manual syntax typing to high-agency architectural governance, I deploy automated multi-agent pipelines (Claude & n8n) that deliver the output of a full engineering team while maintaining enterprise security and cloud standards.
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
              Leveraging Claude & n8n workflow engines to route complex tasks across autonomous AI micro-agents.
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
              Years of production experience ensuring cloud security (IAM), smooth deployments, and cost control.
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
      </section>

      {/* Open Source */}
      <section id="open-source" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800/60 space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Open Source</h2>
          <p className="text-zinc-400 text-sm">Code you can read. These are learning and proof-of-concept projects, built with AI assistance (MIT licensed).</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {openSource.map((repo) => (
            <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/30 transition-all group flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <GitBranch size={18} />
                  <h3 className="font-bold text-slate-100 group-hover:text-emerald-300 transition-colors font-mono text-sm break-all">{repo.name}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{repo.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/40">
                {repo.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <a href="https://github.com/gds03" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-emerald-400 transition-colors">
          <Terminal size={16} /> More on GitHub <ExternalLink size={14} />
        </a>
      </section>

      {/* Case Studies / Proof of Work */}
      <section id="architectures" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800/60 space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Systems Architecture & Proof of Work</h2>
          <p className="text-zinc-400 text-sm">Key engagement outcomes across Contractor and Permanent positions. Impact figures are my own estimates, not independently audited.</p>
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
                  <strong className="text-emerald-400 font-semibold">Estimated impact:</strong> {study.impact}
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

      {/* Writing */}
      <section id="writing" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800/60 space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">How I Think</h2>
          <p className="text-zinc-400 text-sm">Articles on architecture, cloud, and shipping software, published on Medium.</p>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <li key={article.url}>
              <a href={article.url} target="_blank" rel="noreferrer" className="h-full p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/30 transition-all group flex flex-col justify-between space-y-4">
                <h3 className="font-bold text-slate-100 group-hover:text-emerald-300 transition-colors leading-snug">{article.title}</h3>
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">{tag}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <BookOpen size={14} /> Read on Medium <ExternalLink size={12} />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <a href="https://medium.com/@goncalordias" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-emerald-400 transition-colors">
          All articles on Medium <ExternalLink size={14} />
        </a>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-zinc-800/80 py-12 bg-[#0b0f17]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-bold text-slate-200">Gonçalo Dias</p>
            <p className="text-xs text-zinc-500">AI-Native Solutions Architect & Systems Lead</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
            <a href="https://www.linkedin.com/in/gds03/" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all">
              Let's talk
            </a>
            <a href="https://gdscreate.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">gdscreate.com</a>
            <a href="https://www.linkedin.com/in/gds03/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}