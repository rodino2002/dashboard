"use client";

import {
  LayoutDashboard,
  DollarSign,
  FileText,
  Users,
  Folder,
  Briefcase,
  ChevronsLeft,
  ChevronsRight,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../ui/utils";

interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  path?: string;
  children?: SidebarItemProps[];
  isCollapsed?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

/* ITEM DA SIDEBAR */
function SidebarItem({ icon, label, path, isCollapsed, children }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive =
    path && (pathname === path || pathname.startsWith(`${path}/`));

  const [isOpen, setIsOpen] = useState(isActive); // abre automaticamente o menu ativo

  //  --- MENU COM SUBITENS ---
  if (children && children.length > 0) {
    const childIsActive = children.some(
      (child) => pathname === child.path || pathname.startsWith(`${child.path}/`)
    );

    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
            childIsActive
              ? "bg-[#c3c3db] text-zinc-800 font-medium"
              : "text-zinc-800 hover:bg-muted"
          )}
        >
          <div className="flex items-center space-x-3">
            <span className={cn(childIsActive && "text-zinc-800")}>{icon}</span>
            {!isCollapsed && <span className="text-[14px]">{label}</span>}
          </div>
          {!isCollapsed && (
            <span className="ml-auto text-xs">
              {isOpen ? "▾" : "▸"}
            </span>
          )}
        </button>

        {isOpen && !isCollapsed && (
          <div className="ml-6 mt-1 space-y-1">
            {children.map((child, index) => {
              const childActive =
                pathname === child.path ||
                pathname.startsWith(`${child.path}/`);
              return (
                <Link
                  key={index}
                  href={child.path ?? "#"}
                  className={cn(
                    "block px-3 py-1.5 text-sm rounded-md transition-colors",
                    childActive
                      ? "bg-[#d5d5f2] text-zinc-800"
                      : "text-zinc-800 hover:text-foreground hover:bg-muted"
                  )}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // --- ITEM SIMPLES ---
  return (
    <Link
      href={path ?? "#"}
      className={cn(
        "w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
        isActive
          ? "bg-[#d5d5f2] text-zinc-800"
          : "text-foreground hover:bg-muted"
      )}
    >
      <div className="flex items-center space-x-3">
        <span className={cn(isActive && "text-zinc-800")}>{icon}</span>
        {!isCollapsed && <span className="text-[14px]">{label}</span>}
      </div>
    </Link>
  );
}

/* SIDEBAR PRINCIPAL */
export function Sidebar({
  isOpen,
  onClose,
  isCollapsed,
  onToggleCollapse,
}: SidebarProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      const target = event.target as Node;
      if (sidebar && !sidebar.contains(target) && isOpen) onClose();
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const menuItems: SidebarItemProps[] = [
    {
      icon: <LayoutDashboard className="w-4 h-4" />,
      label: "Overview",
      path: "/dashboard/",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Business",
      children: [
        { label: "Business Snapshot", path: "/dashboard/businessSnapshot" },
        { label: "Cast Flow", path: "/dashboard/castflow" },
      ],
    },
    {
      icon: <DollarSign className="w-4 h-4" />,
      label: "Sales",
      children: [
        { label: "Sales Overview", path: "/dashboard/salesOverview" },
        { label: "Invoices", path: "/dashboard/invoice" },
        { label: "Quotes", path: "/dashboard/quotes" },
      ],
    },
    {
      icon: <FileText className="w-4 h-4" />,
      label: "Reports",
      path: "/dashboard/reports",
    },
    {
      icon: <Folder className="w-4 h-4" />,
      label: "Projects",
      path: "/dashboard/projects",
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "Contacts",
      path: "/dashboard/contacts",
    },
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" />
      )}

      {/* DESKTOP */}
      <aside
        className={cn(
          "hidden lg:flex bg-card border-r border-border p-4 transition-all duration-300 ease-in-out flex-col",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onToggleCollapse}
            className={cn(
              "p-2 hover:bg-muted rounded-md transition-colors",
              isCollapsed ? "w-full justify-center" : ""
            )}
          >
            {isCollapsed ? (
              <ChevronsRight className="w-4 h-4" />
            ) : (
              <ChevronsLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        <nav className="space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item, i) => (
            <SidebarItem key={i} {...item} isCollapsed={isCollapsed} />
          ))}
        </nav>

      </aside>

      {/* MOBILE */}
      <aside
        id="mobile-sidebar"
        className={cn(
          "fixed top-0 left-0 z-50 w-64 h-full bg-card border-r border-border p-4 transform transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold text-primary">FluxoCaixa</div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-md">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item, i) => (
            <SidebarItem key={i} {...item} />
          ))}
        </nav>
      </aside>
    </>
  );
}
