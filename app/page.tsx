import Link from 'next/link';
import { ArrowRight, CheckCircle, Target, Brain, Zap, BarChart3, Calendar, Linkedin, Database, BookOpen, Palette, Video, Star, ChevronRight, TrendingUp, Users, MousePointerClick } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import CursorArrow from '@/components/ui/cursor-arrow';

const services = [
  {
    icon: Calendar,
    title: 'Virtual Events',
    description: 'End-to-end virtual event production — from strategy and registration to live execution and post-event analytics.',
    href: '/services/virtual-events',
    color: 'bg-amber-50',
    iconColor: 'text-[#F5A623]',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Ad Campaigns',
    description: 'Precision-targeted LinkedIn campaigns that reach the right decision-makers, built with creative that converts.',
    href: '/services/linkedin-campaigns',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Database,
    title: 'List Building & Augmentation',
    description: 'ICP-aligned prospect lists, enriched with verified data and delivered CRM-ready for immediate outreach.',
    href: '/services/list-building',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    icon: BookOpen,
    title: 'Customer Success Stories',
    description: 'Compelling case studies that turn your best client outcomes into your most powerful sales assets.',
    href: '/services/customer-success-stories',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: Palette,
    title: 'Design & Content Creation',
    description: 'From infographics and e-books to whitepapers and strategic decks — content that educates and engages.',
    href: '/services/design-content',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: Video,
    title: 'Video Creation',
    description: 'Case study videos, explainer content, social reels and LinkedIn snippets that make your brand unforgettable.',
    href: '/services/video-creation',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
];

const values = [
  {
    icon: Target,
    title: 'CX-Centric DNA',
    description: 'Every decision is built around customer experience. We never lose sight of the human behind every interaction.',
  },
  {
    icon: Brain,
    title: 'Behavioral Science Meets Marketing',
    description: 'Data + empathy = stronger engagement. We blend psychology with strategy to create campaigns that genuinely resonate.',
  },
  {
    icon: Zap,
    title: 'End-to-End Execution',
    description: 'From consulting to creative delivery — we handle the full journey so your team can focus on what matters most.',
  },
  {
    icon: BarChart3,
    title: 'Transparent Results',
    description: 'Dashboards that measure sentiment, loyalty, and growth. No vanity metrics — only insights that drive real decisions.',
  },
];

const framework = [
  { step: '01', title: 'CX Insight Discovery', subtitle: 'Consulting', description: "Understand your customer's mindset and motivations through deep research and behavioral analysis." },
  { step: '02', title: 'Persona & Journey Mapping', subtitle: 'Strategy', description: "Define who you're targeting and how they engage at every touchpoint along the customer journey." },
  { step: '03', title: 'Omni-Channel Engagement', subtitle: 'Execution', description: 'Deliver consistent, compelling campaigns across digital, social, and live event channels.' },
  { step: '04', title: 'CX Performance Optimization', subtitle: 'Measurement', description: 'Track, refine, and continuously improve with data-driven insights and transparent reporting.' },
];

const stats = [
  { value: '15+', label: 'Years of Expertise' },
  { value: '6', label: 'Core Services' },
  { value: '100%', label: 'CX-Focused' },
  { value: '360°', label: 'Campaign Coverage' },
];

const testimonials = [
  {
    quote: "Storease transformed how we approach customer engagement. Their behavioral science framework uncovered insights we simply didn't have before — and our conversion rates showed it.",
    name: 'Sarah M.',
    title: 'VP Marketing, B2B SaaS Company',
    rating: 5,
  },
  {
    quote: "The LinkedIn campaign Storease ran for our Q3 launch exceeded every KPI. Their team genuinely understands how to reach decision-makers with messages that land.",
    name: 'James R.',
    title: 'Head of Demand Gen, Tech Scale-up',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Cursor arrow — draws amber arrow from cursor → "Let's Talk" CTA */}
      <CursorArrow />

      {/* HERO */}
      <section data-hero-section className="relative bg-white pt-32 pb-24 overflow-hidden min-h-[680px]">
        {/* FlickeringGrid background */}
        <div className="absolute inset-0 pointer-events-none">
          <FlickeringGrid
            className="absolute inset-0 w-full h-full"
            squareSize={4}
            gridGap={6}
            flickerChance={0.3}
            color="rgb(245,166,35)"
            maxOpacity={0.32}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/65 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full"></span>
                Where CX Strategy Meets Human Behavior
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1C2340] leading-[1.05] tracking-tight mb-6">
                Elevate Every<br />
                {/* Highlighted word — cursor arrow points here too */}
                <span className="relative inline-block text-[#F5A623]">
                  Experience.
                  {/* Soft amber underline glow */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#F5A623] via-amber-300 to-transparent opacity-70" />
                </span><br />
                Drive Real Growth.
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
                Today, attention isn&apos;t enough — emotion is the new metric. Storease crafts customer journeys that go beyond engagement and into true brand connection.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* data-cursor-target → amber arrow from cursor points here */}
                <Link href="/contact" data-cursor-target="true" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-amber-200">
                  Let&apos;s Talk <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 border-2 border-[#1C2340] text-[#1C2340] hover:bg-[#1C2340] hover:text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200">
                  Explore Services
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-10">
                {['CX-Driven Strategy', 'Behavioral Science', '15+ Years Experience'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle size={15} className="text-[#F5A623]" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Floating UI Cards */}
            <div className="hidden lg:block relative h-[480px]">
              {/* Main dashboard card */}
              <div className="absolute top-8 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-fade-in-up">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">CX Performance</span>
                  <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-amber-50 rounded-xl p-3">
                    <p className="text-2xl font-black text-[#F5A623]">94%</p>
                    <p className="text-xs text-gray-500 mt-0.5">Satisfaction</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3">
                    <p className="text-2xl font-black text-blue-600">3.2x</p>
                    <p className="text-xs text-gray-500 mt-0.5">ROI</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Engagement Rate', val: 78, color: 'bg-[#F5A623]' },
                    { label: 'Conversion Lift', val: 62, color: 'bg-blue-500' },
                    { label: 'Brand Sentiment', val: 88, color: 'bg-green-500' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{item.label}</span><span className="font-bold">{item.val}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating metric card 1 */}
              <div className="absolute top-0 left-4 bg-[#1C2340] rounded-2xl shadow-xl p-4 w-44 animate-fade-in delay-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[#F5A623]/20 rounded-lg flex items-center justify-center">
                    <TrendingUp size={14} className="text-[#F5A623]" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Pipeline</span>
                </div>
                <p className="text-2xl font-black text-white">+218%</p>
                <p className="text-xs text-gray-400 mt-1">vs. last quarter</p>
              </div>

              {/* Floating metric card 2 */}
              <div className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-52 animate-fade-in delay-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center">
                    <Users size={14} className="text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1C2340]">New Prospects</p>
                    <p className="text-xs text-gray-400">This month</p>
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-amber-100 rounded-sm" style={{ height: `${h * 0.4}px` }}>
                      <div className="w-full bg-[#F5A623] rounded-sm" style={{ height: `${h * 0.4 * 0.7}px`, marginTop: `${h * 0.4 * 0.3}px` }} />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-green-600 font-bold mt-2">↑ 34 this week</p>
              </div>

              {/* Floating action card */}
              <div className="absolute bottom-0 right-8 bg-[#F5A623] rounded-2xl shadow-xl p-4 w-48 animate-fade-in delay-400">
                <div className="flex items-center gap-2 mb-2">
                  <MousePointerClick size={14} className="text-white" />
                  <span className="text-xs text-white/80 font-medium">Campaign Click-Rate</span>
                </div>
                <p className="text-3xl font-black text-white">12.4%</p>
                <p className="text-xs text-white/70 mt-1">Industry avg: 2.1%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#1C2340] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center border-r border-white/10 last:border-0 px-4">
                <p className="text-4xl font-black text-[#F5A623] mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Why Storease</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-4">
              CX-Driven Services for<br />Ambitious Brands
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Plan → Deliver → Optimize → Measure. Every engagement starts with understanding your customer and ends with measurable impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-[#1C2340] text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Our Services</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-4">
              Everything You Need to<br />Win at Customer Experience
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From strategy to execution to measurement — six deeply integrated service areas, all built around your customer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-5`}>
                  <s.icon size={22} className={s.iconColor} />
                </div>
                <h3 className="font-bold text-[#1C2340] text-lg mb-2 group-hover:text-[#F5A623] transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                <div className="flex items-center gap-1 text-[#F5A623] text-sm font-semibold">
                  Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 border-2 border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">How We Work</span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-5">
                The Storease<br />Marketing Framework
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our four-stage framework ensures every engagement delivers consistent results — from the first insight to the final optimized campaign.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#F5A623] font-bold hover:gap-3 transition-all">
                Learn about our approach <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              {framework.map((f) => (
                <div key={f.step} className="flex gap-5 p-5 rounded-2xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5A623] to-[#D48C10] flex items-center justify-center">
                      <span className="text-white font-black text-sm">{f.step}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#1C2340] text-base">{f.title}</h3>
                      <span className="text-xs bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded-full">{f.subtitle}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#1C2340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Client Stories</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Brands That Trust Storease</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Real results from real clients. Here&apos;s what happens when CX strategy meets fearless execution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="#F5A623" className="text-[#F5A623]" />
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5A623] to-[#D48C10] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-50 rounded-full opacity-60 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-4">Ready to Begin?</span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#1C2340] mb-6 leading-tight">
            Let&apos;s Start Your<br />Marketing Journey Together
          </h2>
          <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto">
            Whether you&apos;re launching your first CX program or scaling an existing one — Storease is ready to elevate your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-amber-200">
              Get Started Today <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border-2 border-gray-200 text-[#1C2340] hover:border-[#F5A623] hover:text-[#F5A623] font-bold px-10 py-5 rounded-full text-lg transition-all duration-200">
              View Our Services
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#F5A623]" /> No long-term commitment required</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#F5A623]" /> Free discovery consultation</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#F5A623]" /> Results in 30 days</span>
          </div>
        </div>
      </section>

    </div>
  );
}
