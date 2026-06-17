import React from "react";
import { Cpu, Github, Twitter, Linkedin } from "lucide-react";
import { useInteractiveModals } from "../context/InteractiveModalContext";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { openModal } = useInteractiveModals();

  const sections = [
    {
      title: "Product",
      links: [
        { name: "Documentation", action: () => openModal("doc_reader", { title: "Cognitive Continuous Pipelines" }) },
        { name: "API Reference", action: () => openModal("api_sandbox") },
        { name: "Status Report", action: () => openModal("status_report") },
      ],
    },
    {
      title: "Legal & Security",
      links: [
        { name: "Privacy Policy", action: () => openModal("doc_reader", { title: "Security Assurance Protocols" }) },
        { name: "Terms of Service", action: () => openModal("doc_reader", { title: "Security Assurance Protocols" }) },
      ],
    },
    {
      title: "Social Channels",
      links: [
        { name: "Twitter / X", href: "https://twitter.com", icon: <Twitter className="w-4 h-4" /> },
        { name: "LinkedIn Profile", href: "https://linkedin.com", icon: <Linkedin className="w-4 h-4" /> },
        { name: "GitHub Orgs", href: "https://github.com", icon: <Github className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <footer id="pricing" className="border-t border-white/5 bg-[#09070c] py-16 text-sm font-sans text-[#cbc3d7]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo element */}
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-3 group animate-pulse">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#15121b] rounded-[7px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-sans font-extrabold text-white text-lg tracking-wide">
                AetherAI
              </span>
            </a>
            <p className="text-xs leading-relaxed max-w-xs text-[#cbc3d7]/40">
              Built for the cognitive era. Streamlining AI agent transport layer across cloud clusters.
            </p>
          </div>

          {/* Links structure */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-mono text-xs font-bold tracking-widest text-white uppercase">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="hover:text-white hover:underline underline-offset-4 transition-colors duration-200 flex items-center space-x-2 bg-transparent border-0 text-left p-0 cursor-pointer text-[#cbc3d7]/60"
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:text-white hover:underline underline-offset-4 transition-colors duration-200 flex items-center space-x-2"
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#cbc3d7]/30">
            © {currentYear} AetherAI Inc. Built for the cognitive era. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-[#cbc3d7]/30">
            <button onClick={() => openModal("doc_reader", { title: "Security Assurance Protocols" })} className="hover:text-white bg-transparent border-0 cursor-pointer text-[#cbc3d7]/30">Security</button>
            <button onClick={() => openModal("status_report")} className="hover:text-white bg-transparent border-0 cursor-pointer text-[#cbc3d7]/30">Status Monitor</button>
            <button onClick={() => openModal("api_sandbox")} className="hover:text-white bg-transparent border-0 cursor-pointer text-[#cbc3d7]/30">API Specs</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
