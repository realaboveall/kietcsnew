"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Info", href: "#info" },
  { label: "Placement", href: "#placement" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "COE", href: "#coe" },
  { label: "Clubs", href: "#clubs" },
  //   { label: "Dean's Message", href: "#deans-message" },
  { label: "Faculty", href: "#faculty" },
  //   { label: "Testimonials", href: "#testimonials" },
  //   { label: "Publications & Research", href: "#publications-research" },
  { label: "Syllabus", href: "#syllabus" },
];

export default function FixedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#overview");

  const handleItemClick = (href: string) => {
    setActiveHref(href);
    setIsMenuOpen(false);
  };

  const baseItemClass =
    "type-nav type-interactive relative px-2 py-3 text-[#333] transition-colors duration-(--motion-normal) ease-(--ease-standard) hover:text-[#f07a00] after:absolute after:left-2 after:right-2 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#f07a00] after:transition-transform after:duration-(--motion-normal) after:ease-(--ease-standard) hover:after:scale-x-100";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-[0_4px_18px_rgba(15,23,42,0.06)]">
      {/* Thin accent line */}
      <div className="h-1 w-full bg-[#f07a00]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="h-16 relative flex items-center justify-between">
          <a
            href="#overview"
            className="z-10 inline-flex items-center"
            aria-label="KIET Home">
            <Image
              src="/logo.png"
              alt="KIET logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Department navigation"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center justify-center gap-1 xl:gap-2 whitespace-nowrap">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <li key={item.href} className="text-center">
                    <a
                      href={item.href}
                      onClick={() => handleItemClick(item.href)}
                      className={`${baseItemClass} ${
                        isActive
                          ? "text-[#1f2937] after:scale-x-100 after:bg-[#1d4ed8]"
                          : ""
                      }`}
                      aria-current={isActive ? "page" : undefined}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden z-10 inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 transition-colors duration-(--motion-fast) ease-(--ease-standard) hover:border-orange-300 hover:text-orange-600"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsMenuOpen((prev) => !prev)}>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile slide-down panel */}
        <div
          id="mobile-nav-panel"
          className={`lg:hidden absolute left-0 right-0 top-full px-4 pb-4 will-transform transition-[opacity,transform] duration-(--motion-slow) ease-(--ease-standard) ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}>
          <nav aria-label="Mobile department navigation">
            <ul className="grid grid-cols-1 gap-1 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => handleItemClick(item.href)}
                      className={`type-nav type-interactive block rounded-md px-3 py-2 transition-colors duration-(--motion-fast) ease-(--ease-standard) ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-[#333] hover:bg-orange-50 hover:text-[#f07a00]"
                      }`}
                      aria-current={isActive ? "page" : undefined}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
