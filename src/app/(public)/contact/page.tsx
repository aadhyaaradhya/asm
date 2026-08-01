"use client";

import React, { useState } from "react";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiCheckCircle, 
  FiClock, 
  FiShield, 
  FiMessageSquare,
  FiHelpCircle
} from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "Sales & Enterprise Demo",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#060c18] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Hero Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e517b]/30 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>24/7 SOC Global Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Get in Touch with <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Aadhya Aaradhya ASM</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Have questions about Attack Surface Management, Threat Intelligence, or Enterprise SLA? Our security team is available around the clock.
          </p>
        </div>

        {/* Grid Section: Contact Form + Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#090e1a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-6 space-y-1">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiMessageSquare className="w-5 h-5 text-blue-400" />
                <span>Send Us a Message</span>
              </h2>
              <p className="text-xs text-gray-400">Fill out the form below and an ASM security specialist will respond shortly.</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 my-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                  <FiCheckCircle />
                </div>
                <h3 className="text-lg font-bold text-white">Message Received Successfully!</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-white font-semibold">{formData.name}</span>. A dedicated security analyst will review your inquiry and contact you at <span className="text-blue-300 font-mono">{formData.email}</span> within 15 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", inquiryType: "Sales & Enterprise Demo", message: "" });
                  }}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all font-mono"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 block">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 block">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Security Inc."
                      className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all font-mono"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 block">Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-all font-mono"
                    >
                      <option value="Sales & Enterprise Demo">Sales & Enterprise Demo</option>
                      <option value="Technical Support">Technical Support & Integration</option>
                      <option value="Emergency Incident Takedown">Emergency Incident Takedown</option>
                      <option value="Partnership & MSSP">Partnership & MSSP Program</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 block">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your organization's attack surface management needs..."
                    className="w-full bg-[#030712] border border-white/10 rounded-xl p-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#0077b6] hover:opacity-90 text-xs font-bold text-white shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <FiSend className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Channels */}
            <div className="bg-[#090e1a] border border-white/10 rounded-2xl p-6 space-y-5">
              <h3 className="text-base font-bold text-white border-b border-white/10 pb-3">Direct Contact Channels</h3>

              <div className="space-y-4">
                {/* Channel 1: Sales */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Sales & Enterprise Enquiries</div>
                    <div className="text-xs text-blue-300 font-mono mt-0.5">sales@aadhyaaradhya.com</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Mon–Fri: 8 AM – 8 PM EST</div>
                  </div>
                </div>

                {/* Channel 2: SOC Emergency */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">24/7 Emergency Hotline</div>
                    <div className="text-xs text-rose-300 font-mono mt-0.5">+1 (800) 555-4357 (ASM-HELP)</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Immediate Threat Escalation</span>
                    </div>
                  </div>
                </div>

                {/* Channel 3: HQ Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FiMapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Global Headquarters</div>
                    <div className="text-xs text-gray-300 mt-0.5">Aadhya Aaradhya Security Labs</div>
                    <div className="text-[11px] text-gray-400">Cyber City, Tech Tower 4, Sector 24</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Card */}
            <div className="bg-gradient-to-tr from-[#1e517b]/30 to-[#090e1a] border border-blue-500/30 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-300 text-xs font-bold font-mono">
                <FiClock className="w-4 h-4 text-cyan-400" />
                <span>GUARANTEED RESPONSE SLA</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Enterprise subscribers benefit from a <span className="text-white font-bold">&lt; 15 minute SLA</span> for critical threat notifications and automated credential breach containment.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#090e1a] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <FiHelpCircle className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Frequently Asked Questions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="text-xs font-bold text-white">How fast is initial deployment?</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                Attack Surface Discovery begins instantly upon specifying your domain or IP ranges. Zero software installation required.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="text-xs font-bold text-white">Do you offer custom MSSP plans?</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                Yes, our multi-tenant partner portal allows MSSPs and SOC teams to manage unlimited client organizations under single-pane visibility.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="text-xs font-bold text-white">How do automated takedowns work?</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                When phishing domains, app clones, or leaked repos are detected, our takedown desk dispatches signed legal notices to registrars and hosts within minutes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
