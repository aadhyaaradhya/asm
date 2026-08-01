"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  FiLogOut, 
  FiMenu, 
  FiX, 
  FiChevronRight, 
  FiChevronDown,
  FiHome,
  FiGrid,
  FiUsers,
  FiUser,
  FiClipboard,
  FiCalendar,
  FiAward,
  FiSettings,
  FiMessageSquare,
  FiMail,
  FiDollarSign,
  FiHelpCircle,
  FiBookOpen,
  FiClock,
  FiFileText,
  FiVideo,
  FiShield,
  FiUserCheck,
  FiCode,
  FiLayers,
  FiActivity,
  FiServer,
  FiTarget,
  FiAlertTriangle,
  FiKey,
  FiShare2,
  FiDisc,
  FiSearch,
  FiBell,
  FiMaximize2,
  FiBriefcase,
  FiZap,
  FiBook
} from "react-icons/fi";
import { IconType } from "react-icons";

// Map string icon names to React Icons
const iconMap: Record<string, IconType> = {
  Home: FiHome,
  Grid: FiGrid,
  Users: FiUsers,
  User: FiUser,
  ClipboardList: FiClipboard,
  CalendarCheck: FiCalendar,
  Award: FiAward,
  Settings: FiSettings,
  MessageSquare: FiMessageSquare,
  Mail: FiMail,
  Banknote: FiDollarSign,
  HelpCircle: FiHelpCircle,
  BookOpen: FiBookOpen,
  Calendar: FiCalendar,
  FileText: FiFileText,
  Clock: FiClock,
  Video: FiVideo,
  Shield: FiShield,
  UserCheck: FiUserCheck,
  Code: FiCode,
  Layers: FiLayers,
  Activity: FiActivity,
  Server: FiServer,
  Target: FiTarget,
  AlertTriangle: FiAlertTriangle,
  Key: FiKey,
  Share2: FiShare2,
  Disc: FiDisc,
  Search: FiSearch,
  Bell: FiBell,
  Maximize2: FiMaximize2,
  Briefcase: FiBriefcase,
  Zap: FiZap,
  Book: FiBook
};

export interface MenuItem {
  icon?: IconType | string;
  label: string;
  path?: string | null;
  badge?: string | number | null;
  color?: string; // Accent color class e.g. "text-purple-400"
  section?: string; // Category header e.g. "OVERVIEW", "SECURITY MODULES"
  subItems?: MenuItem[];
}

export interface DashboardSidebarleftSideProps {
  menuItems?: MenuItem[];
  activeItem?: string;
  onMenuItemClick?: (item: MenuItem) => void;
  userRole?: string;
  userInfo?: {
    name: string;
    email?: string;
  };
  onLogout?: () => void;
  collapsible?: boolean;
  isDark?: boolean;
}

export function DashboardSidebarleftSide({
  menuItems = [],
  activeItem: customActiveItem = "",
  onMenuItemClick,
  userRole = "ASM",
  onLogout = () => {},
  collapsible = true,
  isDark = true,
}: DashboardSidebarleftSideProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const items = menuItems;

  const getIsActive = React.useCallback((item: MenuItem): boolean => {
    if (customActiveItem) {
      return customActiveItem === item.label;
    }
    if (!item.path) return false;
    return pathname === item.path || pathname.startsWith(item.path + "/");
  }, [customActiveItem, pathname]);

  useEffect(() => {
    const isChildActive = (menuItem: MenuItem): boolean => {
      if (!menuItem.subItems) return false;
      return menuItem.subItems.some(
        (sub) => getIsActive(sub) || isChildActive(sub)
      );
    };

    items.forEach((item) => {
      if (isChildActive(item)) {
        setExpandedItems((prev) => ({ ...prev, [item.label]: true }));
        if (item.subItems) {
          item.subItems.forEach((sub) => {
            if (isChildActive(sub)) {
              setExpandedItems((prev) => ({ ...prev, [sub.label]: true }));
            }
          });
        }
      }
    });
  }, [items, getIsActive]);

  const handleMenuClick = (item: MenuItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setExpandedItems((prev) => ({
        ...prev,
        [item.label]: !prev[item.label],
      }));
      if (isCollapsed) setIsCollapsed(false);
    } else if (item.path) {
      if (onMenuItemClick) {
        onMenuItemClick(item);
      } else {
        router.push(item.path);
      }
      setIsMobileOpen(false);
    }
  };

  const renderIconComponent = (iconProp?: IconType | string, isSubItem = false) => {
    if (!iconProp) return null;
    let IconComponent: IconType | null = null;
    if (typeof iconProp === "string") {
      IconComponent = iconMap[iconProp] || FiHome;
    } else {
      IconComponent = iconProp;
    }

    return <IconComponent className={isSubItem ? "w-3.5 h-3.5" : "w-4 h-4"} />;
  };

  const renderMenuItem = (item: MenuItem, isMobile = false, depth = 0) => {
    const isActive = getIsActive(item);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems[item.label];
    const collapsed = isMobile ? false : isCollapsed;
    const isSubItem = depth > 0;

    const iconColor = item.color || (isDark ? "text-blue-400" : "text-blue-600");

    const content = (
      <button
        type="button"
        onClick={() => handleMenuClick(item)}
        className={`
          w-full flex items-center rounded-xl cursor-pointer
          transition-all duration-200 group relative
          ${
            isActive
              ? isDark
                ? isSubItem
                  ? "bg-[#1e517b]/40 border border-[#00b4d8]/40 text-blue-200 font-bold"
                  : "bg-gradient-to-r from-[#1e517b]/80 to-[#2a6f97]/60 border border-[#00b4d8]/50 text-white font-extrabold shadow-lg shadow-[#1e517b]/40"
                : isSubItem
                ? "bg-[#0284c7]/20 border border-[#0284c7]/30 text-[#0369a1] font-bold"
                : "bg-[#0284c7] border border-[#0369a1] text-white font-bold shadow-md"
              : isDark
              ? "text-gray-400 hover:bg-white/5 hover:text-white"
              : "text-slate-700 hover:bg-[#0284c7]/10 hover:text-[#0284c7]"
          }
          ${
            collapsed && !isSubItem
              ? "justify-center px-3 py-2.5"
              : isSubItem
              ? "gap-2.5 px-3 py-1.5 text-xs"
              : "gap-3 px-3 py-2 text-xs"
          }
        `}
        title={collapsed && !isSubItem ? item.label : ""}
      >
        {isActive && (!collapsed || isMobile) && !isSubItem && (
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full shadow-sm ${isDark ? "bg-[#00b4d8]" : "bg-white"}`} />
        )}

        {item.icon && !isSubItem && (
          <div className={`flex items-center justify-center shrink-0 w-6 h-6 rounded-lg ${isActive && !isDark ? "text-white" : iconColor}`}>
            {renderIconComponent(item.icon, false)}
          </div>
        )}

        {(!collapsed || isSubItem) && (
          <>
            <span
              className={`flex-1 text-left ${
                isSubItem ? "text-[12px]" : "text-[13px]"
              } tracking-wide ${
                isActive
                  ? isDark
                    ? "font-bold text-white"
                    : isSubItem
                    ? "font-bold text-[#0369a1]"
                    : "font-bold text-white"
                  : isDark
                  ? "font-medium text-gray-300 group-hover:text-white"
                  : "font-semibold text-slate-800 group-hover:text-[#0284c7]"
              }`}
            >
              {item.label}
            </span>

            {item.badge && (
              <span
                className={`
                  px-2 py-0.5 text-[10px] font-bold rounded-full
                  ${
                    isActive
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : isDark
                      ? "bg-white/10 text-gray-300"
                      : "bg-slate-200 text-slate-700"
                  }
                `}
              >
                {item.badge}
              </span>
            )}

            {hasSubItems && (
              isExpanded ? (
                <FiChevronDown className={`w-3.5 h-3.5 ${isActive && !isDark ? "text-white" : isDark ? "text-gray-400 group-hover:text-white" : "text-slate-500 group-hover:text-[#0284c7]"}`} />
              ) : (
                <FiChevronRight className={`w-3.5 h-3.5 ${isActive && !isDark ? "text-white" : isDark ? "text-gray-400 group-hover:text-white" : "text-slate-500 group-hover:text-[#0284c7]"}`} />
              )
            )}
          </>
        )}
      </button>
    );

    return (
      <li key={item.label}>
        {item.path && !hasSubItems ? (
          <Link href={item.path} onClick={() => setIsMobileOpen(false)}>
            {content}
          </Link>
        ) : (
          content
        )}

        {hasSubItems && isExpanded && !collapsed && (
          <ul className={`mt-1 ml-4 pl-3 border-l space-y-1 my-1 ${isDark ? "border-white/10" : "border-[#93c5fd]"}`}>
            {item.subItems!.map((subItem) => renderMenuItem(subItem, isMobile, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  // Group items by section
  const sections: { title?: string; items: MenuItem[] }[] = [];
  items.forEach((item) => {
    const secTitle = item.section;
    let secObj = sections.find((s) => s.title === secTitle);
    if (!secObj) {
      secObj = { title: secTitle, items: [] };
      sections.push(secObj);
    }
    secObj.items.push(item);
  });

  return (
    <>
      {/* MOBILE TOP NAVBAR */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 z-40 h-16 border-b shadow-lg transition-colors ${
          isDark
            ? "bg-[#060c18] border-white/10 text-white"
            : "bg-[#dbeafe] border-[#93c5fd] text-slate-900"
        }`}
      >
        <div className="h-full flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                isDark ? "bg-white/5 text-white hover:bg-white/10" : "bg-white text-slate-900 border border-[#93c5fd] hover:bg-slate-100"
              }`}
            >
              {isMobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
              <span className={`font-bold text-sm tracking-tight truncate max-w-[180px] ${isDark ? "text-white" : "text-slate-900"}`}>
                Aadhya Aaradhya ASM
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onLogout}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isDark
                ? "bg-white/5 text-gray-300 hover:text-white hover:bg-rose-600/30"
                : "bg-white text-slate-600 border border-[#93c5fd] hover:text-rose-600 hover:bg-rose-50"
            }`}
            title="Logout"
          >
            <FiLogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-black/60 z-40 backdrop-blur-xs"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR DRAWER */}
      <div
        className={`
          lg:hidden fixed top-16 left-0 bottom-0 w-72 z-50
          border-r transition-transform duration-300 ease-in-out
          flex flex-col overflow-hidden shadow-2xl
          ${isDark ? "bg-[#060c18] border-white/10 text-white" : "bg-[#dbeafe] border-[#93c5fd] text-slate-900"}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex-1 px-3 pt-4 pb-4 overflow-y-auto custom-sidebar-scrollbar">
          {sections.map((sec, idx) => (
            <div key={sec.title || idx} className="mb-4">
              {sec.title && (
                <div className={`px-3 pb-1.5 text-[10px] font-mono font-bold tracking-wider uppercase ${isDark ? "text-gray-500" : "text-[#0369a1]"}`}>
                  {sec.title}
                </div>
              )}
              <ul className="space-y-0.5">
                {sec.items.map((item) => renderMenuItem(item, true))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside
        className={`
          hidden lg:flex sticky top-0 left-0 h-screen
          border-r transition-all duration-300 flex-col z-30 shadow-xl
          ${isDark ? "bg-[#060c18] border-white/10 text-white" : "bg-[#dbeafe] border-[#93c5fd] text-slate-900"}
          ${isCollapsed ? "w-20" : "w-72"}
        `}
      >
        {/* Brand Header */}
        <div className={`h-16 px-4 border-b flex items-center ${isDark ? "border-white/10" : "border-[#93c5fd]"} ${isCollapsed ? "justify-center" : "gap-3"}`}>
          {collapsible && (
            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`p-1.5 rounded-lg border transition-colors shrink-0 cursor-pointer ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 border-white/10 text-gray-400 hover:text-white"
                  : "bg-white hover:bg-blue-50 border-[#93c5fd] text-slate-700 hover:text-slate-900 shadow-2xs"
              }`}
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <FiMenu className="w-4 h-4" />
            </button>
          )}

          {!isCollapsed && (
            <Link href="/" className="flex items-center gap-2.5 min-w-0">
              <div className="space-y-0.5 truncate">
                <span className={`font-bold text-sm tracking-tight block leading-none truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                  Aadhya Aaradhya
                </span>
                <span className="text-[10px] font-mono text-blue-600 font-bold block leading-none">
                  ASM PLATFORM
                </span>
              </div>
            </Link>
          )}
        </div>

        <nav className="flex-1 py-4 px-3 overflow-y-auto custom-sidebar-scrollbar">
          {sections.map((sec, idx) => (
            <div key={sec.title || idx} className="mb-4">
              {sec.title && !isCollapsed && (
                <div className={`px-3 pb-1.5 text-[10px] font-mono font-bold tracking-wider uppercase ${isDark ? "text-gray-500" : "text-[#0369a1]"}`}>
                  {sec.title}
                </div>
              )}
              <ul className="space-y-0.5">
                {sec.items.map((item) => renderMenuItem(item, false))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={`p-3 border-t ${isDark ? "border-white/10" : "border-[#93c5fd]"}`}>
          <button
            type="button"
            onClick={onLogout}
            className={`
              w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl border
              transition-all text-xs font-semibold cursor-pointer
              ${
                isDark
                  ? "bg-white/5 border-white/10 text-gray-300 hover:bg-rose-500/10 hover:text-rose-400 hover:border-rose-500/30"
                  : "bg-white border-[#93c5fd] text-slate-700 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-300 shadow-2xs"
              }
              ${isCollapsed ? "justify-center" : ""}
            `}
          >
            <FiLogOut className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

export default DashboardSidebarleftSide;
