'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Linkedin, Database, BookOpen, Palette, Video, ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MegaMenu from '@/components/ui/mega-menu';
import type { MegaMenuItem } from '@/components/ui/mega-menu';

const NAV_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: 'Services',
    subMenus: [
      {
        title: 'Events & Campaigns',
        items: [
          { label: 'Virtual Events', description: 'End-to-end event production & analytics', icon: Calendar, href: '/services/virtual-events' },
          { label: 'LinkedIn Ad Campaigns', description: 'Reach decision-makers where it matters', icon: Linkedin, href: '/services/linkedin-campaigns' },
          { label: 'List Building & Augmentation', description: 'Verified, ICP-aligned prospect data', icon: Database, href: '/services/list-building' },
        ],
      },
      {
        title: 'Content & Brand',
        items: [
          { label: 'Customer Success Stories', description: 'Case studies that close deals', icon: BookOpen, href: '/services/customer-success-stories' },
          { label: 'Design & Content Creation', description: 'Visual storytelling that converts', icon: Palette, href: '/services/design-content' },
          { label: 'Video Creation', description: 'Stories that move — content that stays', icon: Video, href: '/services/video-creation' },
        ],
      },
    ],
  },
  { id: 2, label: 'About',   link: '/about' },
  { id: 3, label: 'Contact', link: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 bg-[#1C2340] ${
        scrolled ? 'shadow-lg shadow-black/25' : ''
      }`}
    >
      {/* ── Single consistent inner bar — py-4 always ─────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Storease" width={38} height={38} className="w-[38px] h-[38px]" />
          <span className="text-[17px] font-extrabold tracking-[0.12em] text-white uppercase">STOREASE</span>
        </Link>

        {/* Desktop Nav — ALL items through MegaMenu (handles both links and submenus) */}
        <div className="hidden md:flex items-center">
          <MegaMenu items={NAV_ITEMS} />
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 bg-[#F5A623] hover:bg-[#D48C10] text-white font-semibold px-5 py-2 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-amber-900/30"
          >
            Let&apos;s Talk
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-[#151C35] border-t border-white/10"
          >
            <div className="px-4 py-5 space-y-1">

              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2.5 px-3 text-white/70 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
              >
                <span>Services</span>
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-90' : ''}`}
                />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.18 }}
                    className="overflow-hidden pl-3"
                  >
                    <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest px-3 pt-3 pb-2">
                      Events & Campaigns
                    </p>
                    {[
                      { name: 'Virtual Events', href: '/services/virtual-events', Icon: Calendar },
                      { name: 'LinkedIn Ad Campaigns', href: '/services/linkedin-campaigns', Icon: Linkedin },
                      { name: 'List Building & Augmentation', href: '/services/list-building', Icon: Database },
                    ].map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-3 py-2.5 px-3 text-white/70 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <s.Icon size={14} className="text-white/40" />
                        {s.name}
                      </Link>
                    ))}

                    <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest px-3 pt-4 pb-2">
                      Content & Brand
                    </p>
                    {[
                      { name: 'Customer Success Stories', href: '/services/customer-success-stories', Icon: BookOpen },
                      { name: 'Design & Content Creation', href: '/services/design-content', Icon: Palette },
                      { name: 'Video Creation', href: '/services/video-creation', Icon: Video },
                    ].map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-3 py-2.5 px-3 text-white/70 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <s.Icon size={14} className="text-white/40" />
                        {s.name}
                      </Link>
                    ))}

                    <Link
                      href="/services"
                      className="flex items-center gap-1 py-2.5 px-3 text-[#F5A623] text-sm font-semibold hover:bg-white/5 rounded-lg transition-colors mt-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      View all services <ArrowRight size={13} />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/about" className="block py-2.5 px-3 text-white/70 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block py-2.5 px-3 text-white/70 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>

              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-6 py-3 rounded-full text-sm text-center transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Let&apos;s Talk <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
