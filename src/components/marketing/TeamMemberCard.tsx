"use client";

import React from "react";
import { FiUser } from "react-icons/fi";

export interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  imageSrc?: string;
}

export function TeamMemberCard({ name, role, bio, imageSrc }: TeamMemberCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-center hover:border-white/20 transition-all group">
      <div className="w-20 h-20 rounded-2xl bg-[#1e517b]/30 border border-[#1e517b]/40 flex items-center justify-center mx-auto text-blue-300 overflow-hidden group-hover:scale-105 transition-transform">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        ) : (
          <FiUser className="w-8 h-8 text-blue-400" />
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-bold text-white tracking-tight">{name}</h3>
        <p className="text-xs font-mono text-blue-400 font-semibold">{role}</p>
      </div>
      {bio && <p className="text-xs text-gray-400 leading-relaxed">{bio}</p>}
    </div>
  );
}

export default TeamMemberCard;
