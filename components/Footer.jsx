'use client';

import { useState } from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 pt-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 pb-16">
    
            {/* Logo / About */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black text-2xl">
                 <img src="/logo.png"></img>
                </div>
                <h3 className="text-white text-lg font-semibold">
                  Bayanno Diagnostic Center
                </h3>
              </div>
            </div>
    
            {/* Main Menu */}
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase text-sm">
                Main Menu
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="" className="hover:text-white">Home</a></li>
                <li><a href="doctors" className="hover:text-white">Doctors</a></li>
                <li><a href="appointment" className="hover:text-white">Make An Appointment</a></li>
                <li><a href="login" className="hover:text-white">Login</a></li>
              </ul>
            </div>
    
            {/* Help & Support */}
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase text-sm">
                Help And Support
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="contact" className="hover:text-white">Contact Us</a></li>
                <li><a href="about" className="hover:text-white">About Us</a></li>
                <li><a href="blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>
    
          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>websitebytecash | 2025</p>
    
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">f</a>
                <a href="#" className="hover:text-white">t</a>
                <a href="#" className="hover:text-white">g+</a>
                <a href="#" className="hover:text-white">▶</a>
              </div>
            </div>
          </div>
         </footer>
      )
}

