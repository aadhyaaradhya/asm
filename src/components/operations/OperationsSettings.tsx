"use client";

import React, { useState } from "react";
import {
  FiDatabase,
  FiDownload,
  FiLock,
  FiCheckCircle,
  FiSave,
  FiShield,
} from "react-icons/fi";

export const OperationsSettings: React.FC = () => {
  const [firstName, setFirstName] = useState("Raju");
  const [lastName, setLastName] = useState("Hosmani");
  const [email] = useState("network@mega.io");
  const [organization] = useState("MEGA");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState(true);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

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
          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 shadow-md">
            <FiDatabase className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Settings</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Operations <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("Exporting Settings Configuration...")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-semibold rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <FiDownload className="w-3.5 h-3.5 text-slate-400" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* User Profile Banner */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-md">
          RH
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold text-white tracking-wide">Raju Hosmani</h2>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-950/80 border border-blue-800 text-blue-400 uppercase">
              MEGA
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-950/80 border border-purple-800 text-purple-400 uppercase">
              Standard Plan
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-400">
              Member since May 2026
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 font-mono">{email}</p>
        </div>
      </div>

      {/* My Plan Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-white tracking-wide">My Plan</h3>
          <p className="text-xs text-slate-400 mt-0.5">Subscription and identifier usage</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">CURRENT PLAN</span>
            <span className="text-xl font-bold text-white mt-1 block">Standard</span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Active subscription</span>
          </div>

          <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">IDENTIFIERS USED</span>
            <span className="text-xl font-bold text-white mt-1 block">20</span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Out of 100</span>
          </div>

          <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">REMAINING</span>
            <span className="text-xl font-bold text-white mt-1 block">80</span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Available identifiers</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1.5">
            <span className="text-slate-400 text-[11px]">Identifier usage</span>
            <span className="text-cyan-400 font-bold text-[11px]">20%</span>
          </div>
          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-1/5 rounded-full" />
          </div>
          <span className="text-[10px] text-slate-500 mt-2 block">
            20 of 100 identifiers used - manage them from the Watch List
          </span>
        </div>
      </div>

      {/* Middle Section: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Column: Account Information */}
        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Account Information</h3>
            <p className="text-xs text-slate-400 mt-0.5">Profile details for the signed-in analyst</p>

            <div className="flex items-center gap-3 my-4 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                RH
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Raju Hosmani</span>
                <span className="text-[10px] text-slate-400 block">Security Analyst - MEGA</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 text-[11px] block mb-1">First name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-[11px] block mb-1">Last name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 text-[11px] block mb-1">Email address</label>
                <input
                  type="text"
                  disabled
                  value={email}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 cursor-not-allowed"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">Contact administrator to change email</span>
              </div>

              <div>
                <label className="text-slate-400 text-[11px] block mb-1">Organization</label>
                <input
                  type="text"
                  disabled
                  value={organization}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => showToast("Account information saved.")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-all shadow cursor-pointer self-start"
          >
            <FiSave className="w-3.5 h-3.5" />
            <span>Save changes</span>
          </button>
        </div>

        {/* Right Column: Security Settings */}
        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Security Settings</h3>
            <p className="text-xs text-slate-400 mt-0.5">Password and multi-factor protection</p>

            <div className="space-y-3.5 mt-4 text-xs">
              <div>
                <label className="text-slate-400 text-[11px] block mb-1">New password</label>
                <input
                  type="password"
                  placeholder="Leave blank to keep current password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">Minimum 8 characters</span>
              </div>

              <div>
                <label className="text-slate-400 text-[11px] block mb-1">Confirm password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* 2FA Info Card */}
              <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl flex items-center gap-3">
                <FiShield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Two-factor authentication</span>
                  <span className="text-[10px] text-slate-300 block">Your account is protected with 2FA</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setNewPassword("");
              setConfirmPassword("");
              showToast("Security settings updated.");
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-all shadow-sm cursor-pointer self-start"
          >
            <FiLock className="w-3.5 h-3.5 text-slate-400" />
            <span>Update security</span>
          </button>
        </div>
      </div>

      {/* Bottom Section: Notification Preferences */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-white tracking-wide">Notification Preferences</h3>
          <p className="text-xs text-slate-400 mt-0.5">Managed alongside your administrator policy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-200">Email alerts</span>
            <button
              onClick={() => setEmailAlerts(!emailAlerts)}
              className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                emailAlerts ? "bg-blue-600" : "bg-slate-800"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  emailAlerts ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-200">Weekly reports</span>
            <button
              onClick={() => setWeeklyReports(!weeklyReports)}
              className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                weeklyReports ? "bg-blue-600" : "bg-slate-800"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  weeklyReports ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-200">Security alerts</span>
            <button
              onClick={() => setSecurityAlerts(!securityAlerts)}
              className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                securityAlerts ? "bg-blue-600" : "bg-slate-800"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  securityAlerts ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
          NOTIFICATION DELIVERY IS SIMULATED IN THIS PROTOTYPE
        </p>
      </div>
    </div>
  );
};
