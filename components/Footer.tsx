import Link from 'next/link';
import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

const services = [
  { name: 'Virtual Events', href: '/services/virtual-events' },
  { name: 'LinkedIn Ad Campaigns', href: '/services/linkedin-campaigns' },
  { name: 'List Building & Augmentation', href: '/services/list-building' },
  { name: 'Customer Success Stories', href: '/services/customer-success-stories' },
  { name: 'Design & Content Creation', href: '/services/design-content' },
  { name: 'Video Creation', href: '/services/video-creation' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C2340] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Storease" width={32} height={32} className="w-8 h-8" />
              <span className="text-lg font-extrabold tracking-[0.12em] uppercase">STOREASE</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Where CX Strategy Meets Human Behavior. We help ambitious brands elevate every customer experience and drive measurable growth.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#F5A623] rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#F5A623] rounded-full flex items-center justify-center transition-colors">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#F5A623] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors">All Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@storease.ca"
                className="flex items-center gap-3 text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                <div className="w-8 h-8 bg-[#F5A623]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={13} className="text-[#F5A623]" />
                </div>
                info@storease.ca
              </a>
              <a
                href="tel:+14377779453"
                className="flex items-center gap-3 text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                <div className="w-8 h-8 bg-[#F5A623]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-[#F5A623]" />
                </div>
                +1 (437)-777-9453
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#F5A623] hover:bg-[#D48C10] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">© 2025 Storease. All rights reserved.</p>
          <p className="text-gray-500 text-xs">Where CX Strategy Meets Human Behavior</p>
        </div>
      </div>
    </footer>
  );
}
