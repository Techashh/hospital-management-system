"use client";

import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { name: "HOME", href: "/" },
  {
    name: "DEPARTMENTS",
    href: "/",
    children: [
      { name: "Cardiology", href: "/departments/cardiology" },
      { name: "Neurology", href: "/departments/neurology" },
      { name: "Orthopedics", href: "/departments/orthopedics" },
    ],
  },
  { name: "DOCTORS", href: "/doctors" },
  { name: "ABOUT", href: "/about" },
  { name: "APPOINTMENT", href: "/appointment" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
  { name: "LOGIN", href: "/login" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [open, setOpen] = useState(null);

  const departmentLinks =
    navigationLinks.find((l) => l.name === "DEPARTMENTS")?.children || [];

  return (
    <header className="bg-white text-slate-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <img
            src="/logo.png"
            alt="Ash Diagnostics Center"
            className="w-9 h-9"
          />
          <span>Ash Diagnostics Center</span>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link, index) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setOpen(index)}
              onMouseLeave={() => setOpen(null)}
            >
              <Link
                href={link.href}
                className="font-medium hover:text-blue-600"
              >
                {link.name}
              </Link>

              {/* Desktop Dropdown */}
              {link.children && open === index && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col text-sm font-medium">
            {/* HOME */}
            <li>
              <Link
                href="/"
                className="block px-6 py-3 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
            </li>

            {/* DEPARTMENTS */}
            <li>
              <button
                onClick={() => setIsDeptOpen(!isDeptOpen)}
                className="w-full flex justify-between items-center px-6 py-3 hover:bg-gray-50"
              >
                <span>DEPARTMENTS</span>
                <span>{isDeptOpen ? "−" : "+"}</span>
              </button>

              {isDeptOpen && (
                <ul className="bg-gray-50">
                  {departmentLinks.map((dept) => (
                    <li key={dept.name}>
                      <Link
                        href={dept.href}
                        className="block px-10 py-2 text-gray-600 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dept.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* OTHER LINKS */}
            {navigationLinks
              .filter(
                (link) =>
                  link.name !== "HOME" && link.name !== "DEPARTMENTS"
              )
              .map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-6 py-3 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </header>
  );
}
