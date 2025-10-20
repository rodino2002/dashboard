"use client";

import { Header } from "@/components/Layout/header";
import { Sidebar } from "@/components/Layout/sidebar";
import { useState } from "react";


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (

    <div className="flex h-screen bg-background">
      {/* Sidebar fixa à esquerda */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Área da direita (Header + Conteúdo) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 overflow-auto p-4 md:p-6 transition-all duration-300 ease-in-out">
          {children}
        </main>
      </div>
    </div>



  )
}
