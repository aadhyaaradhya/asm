"use client";

import React, { useState } from "react";
import {
  FiShield,
  FiDownload,
  FiSearch,
  FiExternalLink,
  FiMessageSquare,
  FiAlertOctagon,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";
import { TbHammer } from "react-icons/tb";

export interface ProfileAlert {
  id: string;
  name: string;
  url: string;
  platform: string;
  risk: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: "Open" | "Investigating" | "Takedown Requested" | "Resolved" | "False Positive";
  detectedDate: string;
  comments?: Array<{ id: string; author: string; text: string; timestamp: string }>;
}

const initialProfiles: ProfileAlert[] = [
  {
    id: "BG-SOC-101",
    name: "MEGA Cloud Support",
    url: "https://x.com/mega_support_io",
    platform: "X (Twitter)",
    risk: "CRITICAL",
    status: "Open",
    detectedDate: "2026-07-22",
    comments: [
      { id: "c1", author: "SOC Analyst", text: "Impersonating official support handle with phishing links.", timestamp: "2026-07-22 10:15" },
    ],
  },
  {
    id: "BG-SOC-102",
    name: "MEGA Official Offers",
    url: "https://www.facebook.com/mega.io.offers",
    platform: "Facebook",
    risk: "HIGH",
    status: "Open",
    detectedDate: "2026-07-19",
    comments: [],
  },
  {
    id: "BG-SOC-103",
    name: "mega.io.rewards",
    url: "https://www.instagram.com/mega.io.rewards",
    platform: "Instagram",
    risk: "HIGH",
    status: "Open",
    detectedDate: "2026-07-14",
    comments: [],
  },
  {
    id: "BG-SOC-104",
    name: "MEGA Storage Deals",
    url: "https://t.me/mega_io_deals",
    platform: "Telegram",
    risk: "MEDIUM",
    status: "Open",
    detectedDate: "2026-07-09",
    comments: [],
  },
  {
    id: "BG-SOC-105",
    name: "MEGA Careers HR",
    url: "https://www.linkedin.com/company/mega-io-careers",
    platform: "LinkedIn",
    risk: "MEDIUM",
    status: "Open",
    detectedDate: "2026-06-30",
    comments: [],
  },
  {
    id: "BG-SOC-106",
    name: "megaio_help",
    url: "https://www.youtube.com/megaio_help",
    platform: "YouTube",
    risk: "LOW",
    status: "Open",
    detectedDate: "2026-06-21",
    comments: [],
  },
];

export const SocialMediaImpersonation: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileAlert[]>(initialProfiles);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProfileForComment, setActiveProfileForComment] = useState<ProfileAlert | null>(null);
  const [newCommentText, setNewCommentText] = useState("");
  const [takedownProfile, setTakedownProfile] = useState<ProfileAlert | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleStatusChange = (id: string, newStatus: ProfileAlert["status"]) => {
    setProfiles((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );
    showToast(`Updated status for ${id} to ${newStatus}`);
  };

  const handleConfirmTakedown = () => {
    if (!takedownProfile) return;
    setProfiles((prev) =>
      prev.map((p) =>
        p.id === takedownProfile.id ? { ...p, status: "Takedown Requested" } : p
      )
    );
    showToast(`Takedown request issued to ${takedownProfile.platform} for ${takedownProfile.name}`);
    setTakedownProfile(null);
  };

  const handleAddComment = () => {
    if (!activeProfileForComment || !newCommentText.trim()) return;
    const newComment = {
      id: `c_${Date.now()}`,
      author: "SOC Analyst",
      text: newCommentText.trim(),
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 16),
    };

    setProfiles((prev) =>
      prev.map((p) =>
        p.id === activeProfileForComment.id
          ? { ...p, comments: [...(p.comments || []), newComment] }
          : p
      )
    );

    setActiveProfileForComment((prev) =>
      prev ? { ...prev, comments: [...(prev.comments || []), newComment] } : null
    );

    setNewCommentText("");
  };

  const filteredProfiles = profiles.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.id.toLowerCase().includes(query) ||
      p.name.toLowerCase().includes(query) ||
      p.platform.toLowerCase().includes(query) ||
      p.url.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-cyan-500/80 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up">
          <FiCheckCircle className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header Section (NO BREADCRUMBS as requested) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/60 flex items-center justify-center text-purple-400 shadow-md">
            <FiShield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Social Media</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              BrandGuard <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-amber-950/60 border border-amber-800/60 text-amber-400 text-[10px] font-bold tracking-wider rounded uppercase">
            WARNING
          </span>

          <button
            onClick={() => showToast("Exporting Social Media Brand Report...")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-semibold rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <FiDownload className="w-3.5 h-3.5 text-slate-400" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 4 Metrics Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: High Risk Profiles */}
        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-slate-700/80 transition-all">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            HIGH RISK PROFILES
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">3</span>
        </div>

        {/* Card 2: Monitored Profiles */}
        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-slate-700/80 transition-all">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            MONITORED PROFILES
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">6</span>
        </div>

        {/* Card 3: Takedowns Sent */}
        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-slate-700/80 transition-all">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            TAKEDOWNS SENT
          </span>
          <span className="text-3xl font-extrabold text-amber-500 mt-2 block">3</span>
          <span className="text-[11px] text-slate-400 mt-1 block font-normal">Platform abuse requests</span>
        </div>

        {/* Card 4: Fixed */}
        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-slate-700/80 transition-all">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            FIXED
          </span>
          <span className="text-3xl font-extrabold text-emerald-400 mt-2 block">50%</span>
          <span className="text-[11px] text-slate-400 mt-1 block font-normal">Profiles removed or resolved</span>
        </div>
      </div>

      {/* Main Container: Detected Profiles Table */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden transition-all">
        {/* Table Title and Search Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Detected Profiles</h2>
            <p className="text-xs text-slate-400 mt-0.5">Manage status, request takedown and track comment history</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">
              Showing {filteredProfiles.length} results
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search alert ID, name, platform or URL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800/90 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-all shadow-inner"
          />
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <th className="py-3 px-3">ALERT ID</th>
                <th className="py-3 px-3">PROFILE NAME</th>
                <th className="py-3 px-3">PLATFORM</th>
                <th className="py-3 px-3">RISK</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">DETECTED</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filteredProfiles.map((profile) => (
                <tr key={profile.id} className="hover:bg-slate-800/40 transition-colors group">
                  {/* Alert ID */}
                  <td className="py-3.5 px-3 font-mono text-[11px] text-cyan-400 font-medium">
                    {profile.id}
                  </td>

                  {/* Profile Name & URL */}
                  <td className="py-3.5 px-3">
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-200 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{profile.name}</span>
                      <FiExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <div className="text-[11px] text-slate-500 font-mono truncate max-w-[280px] mt-0.5">
                      {profile.url}
                    </div>
                  </td>

                  {/* Platform */}
                  <td className="py-3.5 px-3 text-slate-300 font-medium">{profile.platform}</td>

                  {/* Risk Badge */}
                  <td className="py-3.5 px-3">
                    {profile.risk === "CRITICAL" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-red-950/80 border border-red-800/80 text-red-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        CRITICAL
                      </span>
                    )}
                    {profile.risk === "HIGH" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-amber-950/80 border border-amber-800/80 text-amber-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        HIGH
                      </span>
                    )}
                    {profile.risk === "MEDIUM" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-yellow-950/80 border border-yellow-800/80 text-yellow-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        MEDIUM
                      </span>
                    )}
                    {profile.risk === "LOW" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        LOW
                      </span>
                    )}
                  </td>

                  {/* Status Dropdown */}
                  <td className="py-3.5 px-3">
                    <select
                      value={profile.status}
                      onChange={(e) =>
                        handleStatusChange(profile.id, e.target.value as ProfileAlert["status"])
                      }
                      className="bg-slate-900 border border-slate-700/80 text-slate-300 text-xs px-2.5 py-1 rounded-lg focus:outline-none focus:border-cyan-500/80 cursor-pointer"
                    >
                      <option value="Open">Open</option>
                      <option value="Investigating">Investigating</option>
                      <option value="Takedown Requested">Takedown Requested</option>
                      <option value="Resolved">Resolved</option>
                      <option value="False Positive">False Positive</option>
                    </select>
                  </td>

                  {/* Detected Date */}
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">
                    {profile.detectedDate}
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setTakedownProfile(profile)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 hover:bg-red-950/60 border border-slate-700 hover:border-red-600/80 text-slate-200 hover:text-red-300 text-xs font-semibold rounded-lg transition-all active:scale-95 cursor-pointer"
                      >
                        <TbHammer className="w-3.5 h-3.5" />
                        <span>Takedown</span>
                      </button>

                      <button
                        onClick={() => setActiveProfileForComment(profile)}
                        className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-cyan-400 rounded-lg transition-colors cursor-pointer relative"
                        title="Comment & History"
                      >
                        <FiMessageSquare className="w-3.5 h-3.5" />
                        {profile.comments && profile.comments.length > 0 && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Takedown Confirmation Modal */}
      {takedownProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0d1322] border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2 text-red-400 font-bold text-base">
                <FiAlertOctagon className="w-5 h-5" />
                <span>Request Takedown</span>
              </div>
              <button
                onClick={() => setTakedownProfile(null)}
                className="text-slate-400 hover:text-white"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Are you sure you want to issue a legal takedown notice for{" "}
              <strong className="text-white">{takedownProfile.name}</strong> on{" "}
              <strong className="text-cyan-400">{takedownProfile.platform}</strong>?
            </p>

            <div className="mt-3 p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-[11px] font-mono text-slate-400">
              <div>Target URL: {takedownProfile.url}</div>
              <div>Alert ID: {takedownProfile.id}</div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={() => setTakedownProfile(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmTakedown}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-lg shadow-lg transition-all"
              >
                Confirm Takedown Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comment & Notes Modal */}
      {activeProfileForComment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0d1322] border border-slate-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl text-white flex flex-col max-h-[85vh]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <h3 className="font-bold text-sm text-white">Comment History</h3>
                <p className="text-[11px] text-slate-400 font-mono">
                  {activeProfileForComment.id} • {activeProfileForComment.name}
                </p>
              </div>
              <button
                onClick={() => setActiveProfileForComment(null)}
                className="text-slate-400 hover:text-white"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-sidebar-scrollbar mb-4">
              {(!activeProfileForComment.comments || activeProfileForComment.comments.length === 0) ? (
                <div className="text-center text-xs text-slate-500 py-6">
                  No comments logged yet for this alert.
                </div>
              ) : (
                activeProfileForComment.comments.map((comment) => (
                  <div key={comment.id} className="p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-xs">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                      <span className="font-bold text-cyan-400">{comment.author}</span>
                      <span className="font-mono">{comment.timestamp}</span>
                    </div>
                    <p className="text-slate-200">{comment.text}</p>
                  </div>
                ))
              )}
            </div>

            {/* Add Comment Input */}
            <div className="border-t border-slate-800 pt-3 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a note or investigation comment..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              <button
                onClick={handleAddComment}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
