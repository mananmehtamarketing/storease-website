'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { name: 'Virtual Events', href: '/services/virtual-events' },
  { name: 'LinkedIn Ad Campaigns', href: '/services/linkedin-campaigns' },
  { name: 'List Building & Augmentation', href: '/services/list-building' },
  { name: 'Customer Success Stories', href: '/services/customer-success-stories' },
  { name: 'Design & Content Creation', href: '/services/design-content' },
  { name: 'Video Creation', href: '/services/video-creation' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top butterfly wings */}
            <path d="M50 50 C30 35, 5 25, 10 10 C15 0, 35 5, 50 30 C65 5, 85 0, 90 10 C95 25, 70 35, 50 50Z" fill="#F5A623"/>
            {/* Bottom butterfly wings */}
            <path d="M50 50 C30 65, 5 75, 10 90 C15 100, 35 95, 50 70 C65 95, 85 100, 90 90 C95 75, 70 65, 50 50Z" fill="#E8950F" opacity="0.85"/>
          </svg>
          <span className="text-xl font-bold tracking-wide text-[#1C2340]">STOREASE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-[#1C2340] font-medium hover:text-[#F5A623] transition-colors text-sm">
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-2.5 text-sm text-[#1C2340] hover:bg-[#FEF3DC] hover:text-[#F5A623] transition-colors font-medium"
                  >
                    {s.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    href="/services"
                    className="block px-5 py-2.5 text-sm text-[#F5A623] font-semibold hover:bg-[#FEF3DC] transition-colors"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/about" className="text-[#1C2340] font-medium hover:text-[#F5A623] transition-colors text-sm">
            About
          </Link>
          <Link href="/contact" className="text-[#1C2340] font-medium hover:text-[#F5A623] transition-colors text-sm">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-[#F5A623] hover:bg-[#D48C10] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-amber-200"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1C2340]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block py-2 text-[#1C2340] font-medium text-sm hover:text-[#F5A623]"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-3 space-y-2">
            <Link href="/about" className="block py-2 text-[#1C2340] font-medium text-sm" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="block py-2 text-[#1C2340] font-medium text-sm" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link
              href="/contact"
              className="block mt-2 bg-[#F5A623] text-white font-semibold px-6 py-3 rounded-full text-sm text-center"
              onClick={() => setMobileOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
