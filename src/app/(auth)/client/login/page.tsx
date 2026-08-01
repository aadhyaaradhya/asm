"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiLock, FiMail, FiShield, FiArrowRight } from "react-icons/fi";

export default function ClientLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (email && password) {
        router.push("/client/dashboard");
      } else {
        setError("Please enter email and password");
        setLoading(false);
      }
    } catch {
      setError("An error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 relative overflow-hidden text-white">
      <div className="absolute w-[500px] h-[500px] bg-[#1e517b]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md bg-[#060c18] rounded-2xl p-8 border border-white/15 shadow-2xl relative z-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-[#1e517b]/20 border border-[#1e517b]/30 flex items-center justify-center text-[#1e517b] mx-auto">
            <FiShield className="text-2xl text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Client Login</h1>
          <p className="text-xs text-gray-400">Enter your credentials to continue</p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-gray-300 block mb-1.5 font-medium">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1e517b] focus:ring-1 focus:ring-[#1e517b] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-300 block mb-1.5 font-medium">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1e517b] focus:ring-1 focus:ring-[#1e517b] transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-[#1e517b] to-[#2a6f97] text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-[#1e517b]/25"
          >
            <span>{loading ? "Logging in..." : "Login"}</span>
            <FiArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}
