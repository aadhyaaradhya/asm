"use client";

import React from "react";
import * as FiIcons from "react-icons/fi";
import { FiShield } from "react-icons/fi";

export interface DynamicIconProps {
  name?: string;
  className?: string;
}

export function DynamicIcon({ name, className = "w-5 h-5" }: DynamicIconProps) {
  if (!name) return <FiShield className={className} />;
  const Component = (FiIcons as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Component) return <FiShield className={className} />;
  return <Component className={className} />;
}

export default DynamicIcon;
