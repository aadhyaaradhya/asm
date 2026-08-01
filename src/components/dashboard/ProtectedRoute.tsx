"use client";

import React from "react";

export type UserRole = "client";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  return <>{children}</>;
}

export default ProtectedRoute;
