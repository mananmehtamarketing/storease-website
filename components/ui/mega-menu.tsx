// components/ui/mega-menu.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      href?: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${className || ''}`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => setOpenMenu(navItem.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            {/* ── Render as Next.js Link if item has a plain href ── */}
            {navItem.link && !navItem.subMenus ? (
              <Link
                href={navItem.link}
                className="relative flex items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/60 transition-colors duration-300 hover:text-white group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-white/10"
                    style={{ borderRadius: 99 }}
                  />
                )}
              </Link>
            ) : (
              /* ── Render as button for items with sub-menus ── */
              <button
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/60 transition-colors duration-300 hover:text-white group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openMenu === navItem.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-white/10"
                    style={{ borderRadius: 99 }}
                  />
                )}
              </button>
            )}

            {/* ── Dropdown mega panel ── */}
            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                // Extra-wide invisible hit zone so mouse can reach the panel
                <div className="absolute left-0 top-full pt-1" style={{ zIndex: 9999 }}>
                  <motion.div
                    className="w-max border border-white/10 bg-[#0F1629] p-5 shadow-2xl"
                    style={{ borderRadius: 16 }}
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                  >
                    <div className="flex w-fit shrink-0 space-x-9 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <div className="w-full" key={sub.title}>
                          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#F5A623]">
                            {sub.title}
                          </h3>
                          <ul className="space-y-5">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <Link
                                    href={item.href || '#'}
                                    className="flex items-start space-x-3 group"
                                    onClick={() => setOpenMenu(null)}
                                  >
                                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/70 transition-all duration-200 group-hover:bg-[#F5A623] group-hover:border-[#F5A623] group-hover:text-white">
                                      <Icon className="h-4 w-4 flex-none" />
                                    </div>
                                    <div className="w-max leading-5">
                                      <p className="shrink-0 text-sm font-semibold text-white">
                                        {item.label}
                                      </p>
                                      <p className="shrink-0 text-xs text-white/50 transition-colors duration-200 group-hover:text-white/80">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Footer link inside dropdown */}
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5A623] hover:text-amber-400 transition-colors"
                        onClick={() => setOpenMenu(null)}
                      >
                        View all services →
                      </Link>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = 'MegaMenu';

export default MegaMenu;
