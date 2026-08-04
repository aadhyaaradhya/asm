"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus, FiRotateCcw, FiFilter } from "react-icons/fi";

interface IndicatorPoint {
  id: string;
  name: string;
  x: number; // Percentage X position (0 to 100)
  y: number; // Percentage Y position (0 to 100)
  type: "critical" | "high" | "medium" | "monitored";
  category: string;
  city: string;
}

const mockPoints: IndicatorPoint[] = [
  { id: "1", name: "US East C2 Node", x: 25, y: 35, type: "critical", category: "Malicious IP", city: "New York, USA" },
  { id: "2", name: "US West Exfiltration", x: 18, y: 38, type: "high", category: "Phishing", city: "San Francisco, USA" },
  { id: "3", name: "EU Central Botnet Hub", x: 49, y: 28, type: "critical", category: "Botnet", city: "Frankfurt, Germany" },
  { id: "4", name: "UK Credential Dumping", x: 45, y: 26, type: "high", category: "Credential Attack", city: "London, UK" },
  { id: "5", name: "EE Ransomware Relay", x: 55, y: 27, type: "medium", category: "Malware", city: "Warsaw, Poland" },
  { id: "6", name: "East Asia Phishing Host", x: 74, y: 36, type: "critical", category: "Phishing", city: "Tokyo, Japan" },
  { id: "7", name: "SE Asia Proxy Node", x: 70, y: 48, type: "high", category: "Malicious IP", city: "Singapore" },
  { id: "8", name: "South Asia Infrastructure", x: 65, y: 42, type: "monitored", category: "Credential Attack", city: "Mumbai, India" },
  { id: "9", name: "AU East Monitored IP", x: 83, y: 72, type: "monitored", category: "Malware", city: "Sydney, Australia" },
  { id: "10", name: "SA East Leak Node", x: 33, y: 68, type: "medium", category: "Botnet", city: "São Paulo, Brazil" },
  { id: "11", name: "EU West Gateway", x: 43, y: 31, type: "monitored", category: "Malicious IP", city: "Paris, France" },
  { id: "12", name: "ME Infrastructure Hub", x: 57, y: 40, type: "high", category: "Credential Attack", city: "Dubai, UAE" },
];

const categories = ["Critical", "High", "Medium", "Malicious IP", "Phishing", "Botnet", "Malware", "Credential Attack"];

export const ThreatMap: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoveredPoint, setHoveredPoint] = useState<IndicatorPoint | null>(null);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  const filteredPoints = mockPoints.filter((point) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Critical") return point.type === "critical";
    if (activeFilter === "High") return point.type === "high";
    if (activeFilter === "Medium") return point.type === "medium";
    return point.category === activeFilter;
  });

  return (
    <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden transition-all">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-sm font-semibold text-white tracking-wide">Global Threat Map</h2>
            <span className="px-2 py-0.5 text-[9px] font-bold tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 rounded uppercase">
              SIMULATED DEMO DATA
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">22 geolocated indicators attributed to MEGA</p>
        </div>

        {/* Map Controls */}
        <div className="flex items-center gap-1.5 self-end md:self-auto">
          <button
            onClick={handleZoomIn}
            className="p-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded text-slate-300 transition-colors"
            title="Zoom In"
          >
            <FiPlus className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded text-slate-300 transition-colors"
            title="Zoom Out"
          >
            <FiMinus className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleResetZoom}
            className="p-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded text-slate-300 transition-colors"
            title="Reset Map View"
          >
            <FiRotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Filter Pill Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 custom-sidebar-scrollbar text-xs">
        <span className="text-slate-400 flex items-center gap-1 text-[11px] font-medium pr-1 flex-shrink-0">
          <FiFilter className="w-3 h-3 text-slate-500" /> Filter:
        </span>
        <button
          onClick={() => setActiveFilter("All")}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex-shrink-0 cursor-pointer ${
            activeFilter === "All"
              ? "bg-slate-700 text-white border border-slate-600 shadow-sm"
              : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800/80"
          }`}
        >
          All Indicators
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(activeFilter === cat ? "All" : cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex-shrink-0 cursor-pointer ${
              activeFilter === cat
                ? "bg-cyan-950/80 text-cyan-300 border border-cyan-700/80 shadow-sm"
                : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Map Canvas Container */}
      <div className="relative w-full h-[340px] md:h-[400px] bg-[#070b14] border border-slate-800/80 rounded-lg overflow-hidden flex items-center justify-center">
        {/* World Map SVG background */}
        <div
          className="relative w-full h-full transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg className="w-full h-full text-slate-800/40 opacity-50" viewBox="0 0 1000 500" fill="none">
            {/* World Grid Lines */}
            <line x1="0" y1="125" x2="1000" y2="125" stroke="currentColor" strokeDasharray="3 6" strokeWidth="0.5" />
            <line x1="0" y1="250" x2="1000" y2="250" stroke="currentColor" strokeDasharray="3 6" strokeWidth="0.5" />
            <line x1="0" y1="375" x2="1000" y2="375" stroke="currentColor" strokeDasharray="3 6" strokeWidth="0.5" />
            <line x1="250" y1="0" x2="250" y2="500" stroke="currentColor" strokeDasharray="3 6" strokeWidth="0.5" />
            <line x1="500" y1="0" x2="500" y2="500" stroke="currentColor" strokeDasharray="3 6" strokeWidth="0.5" />
            <line x1="750" y1="0" x2="750" y2="500" stroke="currentColor" strokeDasharray="3 6" strokeWidth="0.5" />

            {/* Simplified World Continent Shapes */}
            {/* North America */}
            <path
              d="M120 80 Q180 70 260 110 Q280 180 240 240 Q160 220 120 180 Z"
              fill="currentColor"
            />
            {/* South America */}
            <path
              d="M270 260 Q340 280 320 410 Q280 440 260 360 Z"
              fill="currentColor"
            />
            {/* Europe */}
            <path
              d="M440 100 Q540 90 560 170 Q480 200 440 140 Z"
              fill="currentColor"
            />
            {/* Africa */}
            <path
              d="M460 200 Q560 210 570 340 Q500 400 450 300 Z"
              fill="currentColor"
            />
            {/* Asia */}
            <path
              d="M570 90 Q850 80 840 230 Q700 270 580 190 Z"
              fill="currentColor"
            />
            {/* Australia */}
            <path
              d="M750 330 Q870 330 850 420 Q760 430 740 370 Z"
              fill="currentColor"
            />

            {/* Connecting Vector Threat Arcs */}
            <path
              d="M250 175 Q 370 100 490 140"
              stroke="rgba(239, 68, 68, 0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M490 140 Q 615 150 740 180"
              stroke="rgba(245, 158, 11, 0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M250 175 Q 500 250 700 240"
              stroke="rgba(239, 68, 68, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
          </svg>

          {/* Geolocated Pins */}
          {filteredPoints.map((point) => {
            let colorClass = "bg-red-500 border-red-300 shadow-[0_0_12px_rgba(239,68,68,0.8)]";
            let pulseColorClass = "bg-red-500/40";
            if (point.type === "high") {
              colorClass = "bg-amber-500 border-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.8)]";
              pulseColorClass = "bg-amber-500/40";
            } else if (point.type === "medium") {
              colorClass = "bg-yellow-400 border-yellow-200 shadow-[0_0_10px_rgba(250,204,21,0.8)]";
              pulseColorClass = "bg-yellow-400/40";
            } else if (point.type === "monitored") {
              colorClass = "bg-cyan-400 border-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.8)]";
              pulseColorClass = "bg-cyan-400/40";
            }

            return (
              <div
                key={point.id}
                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                onMouseEnter={() => setHoveredPoint(point)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                {/* Glowing Radar Pulse */}
                <div className={`absolute -inset-2 rounded-full animate-ping ${pulseColorClass} opacity-75`} />

                {/* Main Dot Marker */}
                <div className={`w-3 h-3 rounded-full border ${colorClass} transition-transform group-hover:scale-150`} />

                {/* Hover Tooltip */}
                {hoveredPoint?.id === point.id && (
                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-30 bg-slate-900/95 border border-slate-700 text-white text-[11px] p-2.5 rounded-lg shadow-2xl backdrop-blur-md whitespace-nowrap min-w-[160px]">
                    <div className="font-bold text-xs flex items-center justify-between gap-2">
                      <span>{point.name}</span>
                      <span className="uppercase text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                        {point.type}
                      </span>
                    </div>
                    <div className="text-slate-400 mt-1 text-[10px]">
                      <div>Location: <span className="text-slate-200">{point.city}</span></div>
                      <div>Threat: <span className="text-cyan-400">{point.category}</span></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Map Legend */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-slate-800/60 text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
            <span className="text-slate-300 text-xs">Critical</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            <span className="text-slate-300 text-xs">High</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.8)]" />
            <span className="text-slate-300 text-xs">Medium</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <span className="text-slate-300 text-xs">Monitored Infrastructure</span>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-mono">
          Live telemetry stream active
        </div>
      </div>
    </div>
  );
};
