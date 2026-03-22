import Link from 'next/link';
import { ArrowRight, Calendar, Linkedin, Database, BookOpen, Palette, Video, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Calendar,
    title: 'Virtual Events – Full Service',
    tagline: 'From zero to a standout event that drives pipeline.',
    description: 'End-to-end virtual event production including strategy, registration page design, email campaigns, technical setup, live support, and post-event analytics.',
    includes: ['Event strategy & planning', 'Invite & follow-up emails', 'Registration page design', 'Promotion via email, social & paid ads', 'Technical setup & live support', 'Post-event analytics'],
    href: '/services/virtual-events',
    color: 'bg-amber-50',
    iconColor: 'text-[#F5A623]',
    borderColor: 'border-amber-200',
    tag: 'Most Popular',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Ad Campaigns',
    tagline: 'Reach decision-makers where they actually spend time.',
    description: 'Precision-targeted LinkedIn campaigns built with ad creative that converts — backed by strategic consultation, audience targeting, campaign management and full reporting.',
    includes: ['Consultation & strategy', 'Ad design & creation', 'Audience targeting & campaign setup', 'Campaign management', 'Reporting & analysis'],
    href: '/services/linkedin-campaigns',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-200',
    tag: '',
  },
  {
    icon: Database,
    title: 'List Building & Augmentation',
    tagline: 'The right contacts. Verified. CRM-ready.',
    description: 'ICP-aligned prospect lists built from scratch or augmented with accurate data — job titles, company size, revenue, and more — cleaned and delivered ready to activate.',
    includes: ['Build targeted prospect lists (ICP-based)', 'Data augmentation (job titles, company size, revenue)', 'Data cleaning & verification', 'CRM-ready delivery'],
    href: '/services/list-building',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    borderColor: 'border-green-200',
    tag: '',
  },
  {
    icon: BookOpen,
    title: 'Customer Success Stories',
    tagline: 'Turn your best outcomes into your best sales tool.',
    description: 'Professionally crafted case studies built through customer interviews, story creation, and polished design — delivered as compelling 2-page PDFs ready to close deals.',
    includes: ['Customer interviews & research', 'Story creation & content writing', 'Professional design & branding', 'Delivery as polished 2-page PDF'],
    href: '/services/customer-success-stories',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    borderColor: 'border-purple-200',
    tag: '',
  },
  {
    icon: Palette,
    title: 'Design & Content Creation',
    tagline: 'Content that educates, converts, and builds authority.',
    description: 'From one-pagers and infographics to e-books, whitepapers, blog posts, PR releases, and full strategic decks — all built to your brand and content themes.',
    includes: ['One-pagers & infographics', 'E-books & whitepapers', 'Blogs & PR releases', 'Strategic decks & sales enablement'],
    href: '/services/design-content',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
    borderColor: 'border-rose-200',
    tag: '',
  },
  {
    icon: Video,
    title: 'Video Creation',
    tagline: 'Stories that move. Content that stays.',
    description: 'Professional video content for B2B brands — including case study videos, explainer content, social reels, and LinkedIn snippets that build trust and drive action.',
    includes: ['Case study videos', 'Social media reels', 'Explainer videos', 'LinkedIn snippets'],
    href: '/services/video-creation',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    borderColor: 'border-orange-200',
    tag: 'New',
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full opacity-60 translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative text-center">
          <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-4">What We Do</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1C2340] leading-[1.05] tracking-tight mb-6">
            Six Ways to Elevate<br />
            <span className="text-[#F5A623]">Your Customer Experience</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
            Every service we offer is built around one question: how does this make your customer&apos;s experience better? That&apos;s the Storease difference.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-amber-200">
            Get a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={s.href} className={`bg-white rounded-2xl border ${i === 0 ? 'border-amber-200' : 'border-gray-100'} hover:border-amber-200 hover:shadow-lg transition-all duration-300 overflow-hidden`}>
                <div className="p-8 flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <s.icon size={22} className={s.iconColor} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-2xl font-black text-[#1C2340]">{s.title}</h2>
                          {s.tag && (
                            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${s.tag === 'New' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                              {s.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[#F5A623] font-semibold text-sm">{s.tagline}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 leading-relaxed mb-6 max-w-xl">{s.description}</p>
                    <Link href={s.href} className="inline-flex items-center gap-2 text-[#F5A623] font-bold hover:gap-3 transition-all">
                      Learn more about this service <ChevronRight size={16} />
                    </Link>
                  </div>
                  <div className="lg:w-72 flex-shrink-0">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">What&apos;s Included</p>
                    <div className="space-y-2">
                      {s.includes.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1C2340]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-4">Not Sure Where to Start?</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Let&apos;s Find the Right Service<br />for Your Business
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-xl mx-auto">
            Every Storease engagement starts with a free discovery conversation. No pressure — just clarity.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-amber-900/30">
            Book a Free Discovery Call <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
