"use client";

import React from "react";

export type StatusVariant =
  | "critical"
  | "high"
  | "medium"
  | "low"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "neutral";

export interface StatusBadgeProps {
  label: string;
  variant?: StatusVariant;
  className?: string;
}

const variantStyles: Record<StatusVariant, string> = {
  critical: "bg-rose-50 text-rose-700 border-rose-200",
  danger: "bg-red-50 text-red-700 border-red-200",
  high: "bg-orange-50 text-orange-700 border-orange-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  medium: "bg-yellow-50 text-yellow-800 border-yellow-200",
  low: "bg-blue-50 text-blue-700 border-blue-200",
  info: "bg-sky-50 text-sky-700 border-sky-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  neutral: "bg-gray-100 text-gray-700 border-gray-200",
};

export function getVariantFromStatus(statusStr: string): StatusVariant {
  const s = (statusStr || "").toLowerCase();
  if (s.includes("critical") || s.includes("fail") || s.includes("expired") || s.includes("vulnerable")) return "critical";
  if (s.includes("high") || s.includes("unpatched") || s.includes("active")) return "high";
  if (s.includes("medium") || s.includes("expiring") || s.includes("in progress") || s.includes("submitted")) return "warning";
  if (s.includes("low") || s.includes("info")) return "low";
  if (s.includes("safe") || s.includes("pass") || s.includes("valid") || s.includes("patched") || s.includes("resolved") || s.includes("completed") || s.includes("yes")) return "success";
  if (s.includes("no") || s.includes("none")) return "neutral";
  return "neutral";
}

export function StatusBadge({ label, variant, className = "" }: StatusBadgeProps) {
  const computedVariant = variant || getVariantFromStatus(label);
  const styles = variantStyles[computedVariant] || variantStyles.neutral;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border capitalize ${styles} ${className}`}
    >
      {label}
    </span>
  );
}

export default StatusBadge;
