"use client"
import Link from "next/link"
import { useState } from "react"

const navigationLinks = [
  { name: "HOME", href: "/" },
  { name: "DEPARTMENTS", href: "/departments" },
  { name: "DOCTORS", href: "/doctors" },
  { name: "ABOUT", href: "/about" },
  { name: "APPOINTMENT", href: "/appointment" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
  { name: "LOGIN", href: "/login" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDeptOpen, setIsDeptOpen] = useState(false);

  return (
    <header className="bg-white text-slate-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <img
            src="/logo.png"
            alt="Ash Diagnostics Center"
            className="w-9 h-9"
          />
          <span>Ash Diagnostics Center</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

       {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col text-sm font-medium">

            {/* Home */}
            <li>
              <Link href="/" className="block px-6 py-3 hover:bg-gray-50">
                HOME
              </Link>
            </li>

            {/* Departments Dropdown */}
            <li>
              <button
  onClick={() => setIsDeptOpen(!isDeptOpen)}
  className="w-full flex justify-between items-center px-6 py-3 hover:bg-gray-50"
>
  <span>DEPARTMENTS</span>
  <span>{isDeptOpen ? "-" : "+"}</span>
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

            {/* Other Links */}
            {navigationLinks
              .filter((l) => l.name !== "HOME" && l.name !== "DEPARTMENTS")
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
  )
}
