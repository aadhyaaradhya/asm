"use client";

import React from "react";
import Link from "next/link";
import { FiShield, FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/10 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1e517b] to-[#2a6f97] flex items-center justify-center text-white">
                <FiShield className="w-4 h-4 text-blue-300" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Aadhya Aaradhya ASM</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Dark Web & Attack Surface Monitoring. See What Hackers See before they exploit it.
            </p>
            <div className="pt-2">
              <p className="text-[11px] text-gray-500 font-mono">
                Developed and powered by <span className="text-gray-300 font-semibold">Aadhya Aaradhya</span>.
              </p>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href="/services#attack-surface" className="hover:text-white transition-colors">Attack Surface Monitoring</Link></li>
              <li><Link href="/services#dark-web" className="hover:text-white transition-colors">Dark Web Monitoring</Link></li>
              <li><Link href="/services/vuln-intel/vulnerabilities" className="hover:text-white transition-colors">Vulnerability Intelligence</Link></li>
              <li><Link href="/services/takedowns" className="hover:text-white transition-colors">Automated Takedowns</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Request Demo</Link></li>
              <li><Link href="/client/login" className="hover:text-white transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AADHYA AARADHYA ASM. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-400 transition-colors">Terms</Link>
            <a href="mailto:sales@aadhyaaradhya.com" className="hover:text-gray-400 transition-colors flex items-center gap-1.5">
              <FiMail className="w-3.5 h-3.5" />
              <span>sales@aadhyaaradhya.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
