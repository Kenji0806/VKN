import React, { useEffect, useState } from "react";
import {
  Network,
  Database,
  Cloud,
  ShieldCheck,
  GitBranch,
  ExternalLink,
  Linkedin,
  Activity,
  Server,
  Wifi,
  ArrowUpRight,
  Radio,
} from "lucide-react";

const LAYERS = [
  {
    tag: "L5",
    label: "Analytics Layer",
    desc: "Reporting & BI",
    items: ["Data Warehousing", "Dashboards", "Power BI", "Splunk"],
    icon: Activity,
  },
  {
    tag: "L4",
    label: "DevOps & Data Pipeline",
    desc: "Version, transform, orchestrate",
    items: ["Git", "GitHub", "CI/CD", "Python", "Apache Airflow", "Apache Spark", "Advanced SQL", "Databricks", "dbt"],
    icon: Database,
  },
  {
    tag: "L3",
    label: "Compute & Cloud",
    desc: "Hosts & hypervisors",
    items: ["AWS", "Azure", "Docker", "Proxmox / ESXi", "Linux", "Windows Server"],
    icon: Cloud,
  },
  {
    tag: "L2",
    label: "Security & Perimeter",
    desc: "Access & defense",
    items: ["pfSense", "Firewalls", "Cisco Meraki VPN", "IAM", "Cloudflare", "Tailscale", "Wazuh"],
    icon: ShieldCheck,
  },
  {
    tag: "L1",
    label: "Physical & Transport",
    desc: "The wire itself",
    items: ["Fiber Optic", "Cisco Switches", "Routing & Switching", "SAN/NAS"],
    icon: Network,
  },
];

const PROJECTS = [
  {
    tag: "NET",
    icon: Network,
    title: "Multi-Office Network Infrastructure with Failover",
    desc: "Architected and deployed enterprise network infrastructure across 5 regional offices using Cisco switches interconnected via fiber optic cabling. Integrated Cisco Meraki VPNs as auto-failover backup connections, achieving high availability and zero-downtime cross-site communication.",
    stats: [
      { label: "Sites", value: "5" },
      { label: "Downtime", value: "0" },
    ],
  },
  {
    tag: "DATA",
    icon: Database,
    title: "On-Premises to Cloud ETL Pipeline & Data Lake Setup",
    desc: "Designed, built, and optimized automated data pipelines migrating transactional data from on-premises SQL Server to Microsoft Azure. Streamlined cross-environment synchronization to power enterprise analytics.",
    stats: [
      { label: "Source", value: "SQL Server" },
      { label: "Target", value: "Azure" },
    ],
  },
  {
    tag: "QA",
    icon: ShieldCheck,
    title: "Data Pipeline Maintenance & Quality Validation Framework",
    desc: "Maintained mission-critical ETL workflows built on a medallion (bronze/silver/gold) architecture, and implemented automated data validation and integrity checks — ensuring high data quality, accuracy, and schema consistency from raw ingestion through to downstream reporting layers.",
    stats: [
      { label: "Checks", value: "Automated" },
      { label: "Focus", value: "Schema" },
    ],
  },
];

const EXPERIENCE = [
  {
    period: "Current",
    role: "Network Administrator & Data Engineer",
    org: "Batangas I Electric Cooperative, Inc.",
  },
  {
    period: "Previous",
    role: "Data Engineer",
    org: "ERNI Philippines",
  },
];

function useTicker() {
  const [uptime, setUptime] = useState(0);
  const [throughput, setThroughput] = useState(842);
  useEffect(() => {
    const t = setInterval(() => setUptime((u) => u + 1), 1000);
    const th = setInterval(
      () => setThroughput(780 + Math.floor(Math.random() * 140)),
      1800
    );
    return () => {
      clearInterval(t);
      clearInterval(th);
    };
  }, []);
  const h = String(Math.floor(uptime / 3600)).padStart(2, "0");
  const m = String(Math.floor((uptime % 3600) / 60)).padStart(2, "0");
  const s = String(uptime % 60).padStart(2, "0");
  return { clock: `${h}:${m}:${s}`, throughput };
}

function SectionTag({ children }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        letterSpacing: "0.12em",
        color: "var(--accent-amber)",
      }}
      className="text-xs"
    >
      {children}
    </span>
  );
}

export default function Portfolio() {
  const { clock, throughput } = useTicker();

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-body)",
        minHeight: "100vh",
      }}
      className="relative w-full"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --bg: #0A1220;
          --panel: #101B30;
          --panel-border: #223252;
          --text-primary: #E9EEF7;
          --text-secondary: #8CA0C2;
          --accent-amber: #FF9F45;
          --accent-cyan: #5EEAD4;
          --grid-line: rgba(140, 160, 194, 0.09);
          --font-display: 'Sora', sans-serif;
          --font-body: 'Inter', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        .bp-grid {
          background-image:
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 36px 36px;
        }

        .panel {
          background: var(--panel);
          border: 1px solid var(--panel-border);
          position: relative;
        }
        .panel::before, .panel::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-color: var(--accent-cyan);
          opacity: 0.55;
        }
        .panel::before {
          top: -1px; left: -1px;
          border-top: 2px solid var(--accent-cyan);
          border-left: 2px solid var(--accent-cyan);
        }
        .panel::after {
          bottom: -1px; right: -1px;
          border-bottom: 2px solid var(--accent-cyan);
          border-right: 2px solid var(--accent-cyan);
        }

        .font-display { font-family: var(--font-display); }
        .font-mono { font-family: var(--font-mono); }

        .glow-dot {
          box-shadow: 0 0 8px 2px var(--accent-cyan);
        }

        @keyframes travel-up {
          0% { top: 96%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { top: 2%; opacity: 0; }
        }
        .packet {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--accent-cyan);
          animation: travel-up 4s linear infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .live-blink { animation: blink 2s ease-in-out infinite; }

        .tag-chip {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--text-secondary);
          border: 1px solid var(--panel-border);
          background: rgba(255,255,255,0.02);
        }

        a { text-decoration: none; }

        ::selection { background: var(--accent-amber); color: #0A1220; }
      `}</style>

      <div className="bp-grid absolute inset-0 pointer-events-none" />

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b" style={{ borderColor: "var(--panel-border)" }}>
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 flex items-center justify-center rounded-sm font-mono text-xs"
            style={{ background: "var(--panel)", border: "1px solid var(--panel-border)", color: "var(--accent-cyan)" }}
          >
            VKN
          </div>
          <span className="font-mono text-xs hidden sm:block" style={{ color: "var(--text-secondary)" }}>
            /root/portfolio
          </span>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
          <a href="#projects" className="hover:text-white transition-colors">projects</a>
          <a href="#experience" className="hover:text-white transition-colors">experience</a>
          <a href="#stack" className="hover:text-white transition-colors">stack</a>
          <a href="#contact" className="hover:text-white transition-colors">contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative z-10 px-6 md:px-12 pt-14 md:pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full live-blink" style={{ background: "var(--accent-cyan)" }} />
            <span className="font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
              status: online · uptime {clock}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-2">
            Vishnu Kenji<br />Nankani III
          </h1>
          <p className="font-mono text-sm mb-6" style={{ color: "var(--accent-amber)" }}>
            Network Administrator &amp; Data Engineer
          </p>

          <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "var(--text-secondary)" }}>
            I build and secure resilient network infrastructure that keeps systems running seamlessly, while
            architecting scalable data pipelines that turn raw data into high-value insight — optimizing
            performance from the physical wire to the analytics layer. Outside of work, I'm usually refining my
            homelab, exploring emerging cloud tech, and digging into high-throughput systems.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-4 py-2 font-mono text-xs flex items-center gap-2"
              style={{ background: "var(--accent-amber)", color: "#0A1220", fontWeight: 600 }}
            >
              view projects <ArrowUpRight size={14} />
            </a>
            <a
              href="https://linkedin.com/in/vknankaniiii"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 font-mono text-xs flex items-center gap-2 panel"
            >
              <Linkedin size={14} /> linkedin
            </a>
          </div>
        </div>

        {/* SIGNATURE: layered infrastructure stack, wire -> analytics */}
        <div className="panel p-5 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
              SIGNAL PATH — WIRE → ANALYTICS
            </span>
            <span className="font-mono text-xs" style={{ color: "var(--accent-cyan)" }}>
              {throughput} req/s
            </span>
          </div>

          <div className="relative flex" style={{ minHeight: "280px" }}>
            <div className="relative w-6 mr-4">
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px"
                style={{ background: "var(--panel-border)", transform: "translateX(-50%)" }}
              />
              <div className="packet glow-dot" style={{ animationDelay: "0s" }} />
              <div className="packet glow-dot" style={{ animationDelay: "1.3s" }} />
              <div className="packet glow-dot" style={{ animationDelay: "2.6s" }} />
            </div>

            <div className="flex-1 flex flex-col justify-between gap-2">
              {LAYERS.map((layer) => {
                const Icon = layer.icon;
                return (
                  <div key={layer.tag} className="flex items-center gap-3 py-2">
                    <span className="font-mono text-[10px] w-6" style={{ color: "var(--text-secondary)" }}>
                      {layer.tag}
                    </span>
                    <Icon size={16} style={{ color: "var(--accent-cyan)" }} />
                    <div>
                      <div className="text-sm font-medium leading-none">{layer.label}</div>
                      <div className="font-mono text-[10px] mt-1" style={{ color: "var(--text-secondary)" }}>
                        {layer.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 px-6 md:px-12 py-16 border-t" style={{ borderColor: "var(--panel-border)" }}>
        <div className="flex items-baseline gap-3 mb-10">
          <SectionTag>NET/DATA — 01</SectionTag>
          <h2 className="font-display text-2xl md:text-3xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="panel p-5 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-sm"
                    style={{ background: "rgba(94,234,212,0.08)" }}
                  >
                    <Icon size={18} style={{ color: "var(--accent-cyan)" }} />
                  </div>
                  <span className="tag-chip px-2 py-1 rounded-sm">{p.tag}</span>
                </div>
                <h3 className="font-display text-base font-semibold mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-secondary)" }}>
                  {p.desc}
                </p>
                <div className="flex gap-4 pt-4 border-t" style={{ borderColor: "var(--panel-border)" }}>
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-mono text-sm" style={{ color: "var(--accent-amber)" }}>{s.value}</div>
                      <div className="font-mono text-[10px]" style={{ color: "var(--text-secondary)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 px-6 md:px-12 py-16 border-t" style={{ borderColor: "var(--panel-border)" }}>
        <div className="flex items-baseline gap-3 mb-10">
          <SectionTag>NET/DATA — 02</SectionTag>
          <h2 className="font-display text-2xl md:text-3xl font-bold">Experience</h2>
        </div>

        <div className="max-w-2xl">
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.org}
              className="flex gap-5 pb-8 relative"
              style={{ borderColor: "var(--panel-border)" }}
            >
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent-cyan)" }} />
                {i !== EXPERIENCE.length - 1 && (
                  <div className="w-px flex-1 mt-1" style={{ background: "var(--panel-border)" }} />
                )}
              </div>
              <div className="pb-2">
                <span className="font-mono text-xs" style={{ color: "var(--accent-amber)" }}>{e.period}</span>
                <h3 className="font-display text-lg font-semibold mt-1">{e.role}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{e.org}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="relative z-10 px-6 md:px-12 py-16 border-t" style={{ borderColor: "var(--panel-border)" }}>
        <div className="flex items-baseline gap-3 mb-10">
          <SectionTag>NET/DATA — 03</SectionTag>
          <h2 className="font-display text-2xl md:text-3xl font-bold">Stack, by Layer</h2>
        </div>

        <div className="grid gap-3">
          {LAYERS.slice().reverse().map((layer) => {
            const Icon = layer.icon;
            return (
              <div key={layer.tag} className="panel p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-3 sm:w-64 shrink-0">
                  <Icon size={16} style={{ color: "var(--accent-cyan)" }} />
                  <div>
                    <div className="font-mono text-[10px]" style={{ color: "var(--text-secondary)" }}>{layer.tag}</div>
                    <div className="text-sm font-medium">{layer.label}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="tag-chip px-2.5 py-1 rounded-sm">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="relative z-10 px-6 md:px-12 py-16 border-t" style={{ borderColor: "var(--panel-border)" }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <SectionTag>NET/DATA — 04</SectionTag>
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-3 mb-3">Let's connect</h2>
            <p className="text-sm max-w-md" style={{ color: "var(--text-secondary)" }}>
              Open to conversations on network infrastructure, data engineering, and everything in between the wire
              and the warehouse.
            </p>
          </div>
          <a
            href="https://linkedin.com/in/vknankaniiii"
            target="_blank"
            rel="noreferrer"
            className="panel px-5 py-3 flex items-center gap-3 self-start"
          >
            <Linkedin size={16} style={{ color: "var(--accent-cyan)" }} />
            <span className="font-mono text-sm">linkedin.com/in/vknankaniiii</span>
            <ExternalLink size={14} style={{ color: "var(--text-secondary)" }} />
          </a>
        </div>
        <div className="mt-14 font-mono text-[11px]" style={{ color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} Vishnu Kenji Nankani III · built wire to warehouse
        </div>
      </footer>
    </div>
  );
}
