import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, X, Search, Globe, Megaphone, Palette, Mail,
  BarChart3, Brain, Users, Sparkles, Handshake, CalendarCheck, Map, Rocket,
} from 'lucide-react';
import LeadForm from './LeadForm';

export const metadata: Metadata = {
  title: 'Your Marketing Team for $5,000/Month | Storease for SMBs',
  description:
    'Storease becomes your complete marketing team. Strategy, SEO, content, design, web and reporting, all managed for a flat $5,000 a month. Built for small and medium businesses.',
};

const included = [
  { icon: Brain, title: 'Marketing Strategy & Consulting', description: 'A senior strategist who knows your industry plans every quarter with you, so nothing is random.' },
  { icon: Search, title: 'Organic SEO', description: 'Ongoing search optimization that compounds month over month and brings buyers to you.' },
  { icon: Globe, title: 'Website Updates & Improvements', description: 'Landing pages, copy changes, speed fixes and conversion improvements, handled without tickets piling up.' },
  { icon: Megaphone, title: 'Social Media Management', description: 'Consistent, on-brand presence on the channels where your customers actually spend time.' },
  { icon: Palette, title: 'Content & Design', description: 'Posts, decks, one-pagers, infographics and creatives, all designed to your brand.' },
  { icon: Mail, title: 'Email Campaigns', description: 'Nurture sequences and announcements that keep your pipeline warm and your customers engaged.' },
  { icon: BarChart3, title: 'Monthly Reporting', description: 'A clear dashboard and a monthly review call. You always know what we did and what it produced.' },
  { icon: Users, title: 'A Dedicated Team', description: 'Not a rotating cast of freelancers. The same experienced team, on your business, every month.' },
];

const inHouseCosts = [
  { role: 'Marketing Manager', cost: '$85,000+' },
  { role: 'Content Writer', cost: '$55,000+' },
  { role: 'Graphic Designer', cost: '$60,000+' },
  { role: 'Web Developer', cost: '$80,000+' },
  { role: 'Software & Tools', cost: '$15,000+' },
];

const steps = [
  { icon: CalendarCheck, step: '01', title: 'Book a Free Strategy Call', description: 'Tell us about your business, your goals and what marketing looks like for you today. 30 minutes, no obligation.' },
  { icon: Map, step: '02', title: 'Get Your Marketing Plan', description: 'Within a week, you get a clear 90-day plan: what we will do, in what order, and what results to expect.' },
  { icon: Rocket, step: '03', title: 'We Run Your Marketing', description: 'Your dedicated team executes everything, reports monthly, and adjusts as your business grows.' },
];

const faqs = [
  {
    q: 'What exactly does the $5,000 a month cover?',
    a: 'Complete marketing management: strategy and consulting, organic SEO, website updates, social media, content and design, email campaigns, and monthly reporting. One flat fee, one team, everything coordinated.',
  },
  {
    q: 'Are paid ads included?',
    a: 'Ad spend and paid campaign budgets (like LinkedIn or Google ads) are billed separately, with full transparency. We will recommend paid campaigns only when they make sense for your goals, and we manage them for you when you are ready.',
  },
  {
    q: 'Am I locked into a long contract?',
    a: 'No. We work month to month. We keep clients by delivering results, not by locking them in.',
  },
  {
    q: 'Who actually works on my account?',
    a: 'A dedicated team led by marketers with 10+ years of experience in tech and B2B marketing. The people in your kickoff call are the people doing the work.',
  },
  {
    q: 'How fast can we start?',
    a: 'Most clients have their 90-day plan within a week of the first call, and execution starts immediately after sign-off.',
  },
  {
    q: 'My industry is specific. Will you understand it?',
    a: 'That is our USP. We staff your account with people who have worked in your space, and we consult you on the activities that work in your industry, not generic playbooks.',
  },
];

export default function SmbLandingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-70" />
          <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full"></span>
                Built for Small & Medium Businesses
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.2rem] font-black text-[#1C2340] leading-[1.05] tracking-tight mb-6">
                Your Entire<br />
                <span className="relative inline-block text-[#F5A623]">
                  Marketing Team.
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#F5A623] via-amber-300 to-transparent opacity-70" />
                </span><br />
                One Flat Fee.
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
                Storease becomes your marketing department. Strategy, SEO, content, design, web and reporting, all managed end to end for <span className="font-bold text-[#1C2340]">$5,000 a month</span>. No hiring, no overhead, no juggling five vendors.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#book-call" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-amber-200">
                  Book a Free Strategy Call <ArrowRight size={18} />
                </a>
                <a href="#whats-included" className="inline-flex items-center gap-2 border-2 border-[#1C2340] text-[#1C2340] hover:bg-[#1C2340] hover:text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200">
                  See What&apos;s Included
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-10">
                {['10+ Years in Tech Marketing', 'AI-Powered Execution', 'No Long-Term Contracts'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle size={15} className="text-[#F5A623]" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/smb-hero-team.jpg"
                  alt="The Storease marketing team collaborating on a client campaign"
                  width={880}
                  height={660}
                  priority
                  className="object-cover w-full h-[480px]"
                />
              </div>
              {/* Floating price card */}
              <div className="absolute -bottom-6 -left-6 bg-[#1C2340] rounded-2xl shadow-xl p-5 w-56">
                <p className="text-xs text-gray-400 font-medium mb-1">Complete marketing management</p>
                <p className="text-3xl font-black text-white">$5,000<span className="text-base font-bold text-gray-400">/mo</span></p>
                <p className="text-xs text-[#F5A623] font-bold mt-1">Everything included. Flat fee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST COMPARISON */}
      <section className="py-24 bg-[#1C2340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Do the Math</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              What a Marketing Team<br />Really Costs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Hiring in-house means salaries, tools, training and turnover. Storease gives you the whole team for less than the cost of one senior hire.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* In-house */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500/15 rounded-xl flex items-center justify-center">
                  <X size={18} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Building It In-House</h3>
              </div>
              <div className="space-y-3 flex-1">
                {inHouseCosts.map((item) => (
                  <div key={item.role} className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-300 text-sm">{item.role}</span>
                    <span className="text-gray-300 font-bold text-sm">{item.cost}<span className="text-gray-500 font-normal">/yr</span></span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-white font-bold">Total per year</span>
                <span className="text-2xl font-black text-red-400">$295,000+</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">Plus recruiting, onboarding, benefits and the risk of turnover.</p>
            </div>
            {/* Storease */}
            <div className="bg-white rounded-3xl p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#F5A623] text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl">
                Save $235,000+/yr
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <CheckCircle size={18} className="text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-bold text-[#1C2340]">Partnering with Storease</h3>
              </div>
              <div className="space-y-3 flex-1">
                {['Senior marketing strategist', 'Content writers & designers', 'Web & SEO specialists', 'Campaign & email managers', 'All software & tools included'].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <CheckCircle size={15} className="text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[#1C2340] font-bold">Total per year</span>
                <span className="text-2xl font-black text-[#F5A623]">$60,000</span>
              </div>
              <p className="text-xs text-gray-400 mt-3">Flat $5,000 a month. Paid ad spend billed separately, with full transparency.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#book-call" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full transition-all duration-200">
              See What We&apos;d Do for Your Business <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="whats-included" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Everything Included</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-4">
              One Fee. Your Complete<br />Marketing Function.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Stop stitching together freelancers, agencies and tools. Storease handles all of it, coordinated under one strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-[#1C2340] text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STOREASE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/smb-owner-growth.jpg"
                  alt="A business owner reviewing marketing growth results"
                  width={880}
                  height={500}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              <div className="absolute -bottom-5 right-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-60">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Your job</p>
                <p className="text-sm font-bold text-[#1C2340]">Run your business.</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-2 mb-1">Our job</p>
                <p className="text-sm font-bold text-[#F5A623]">Run your marketing.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Why Storease</span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-6">
                Experts in Your Industry,<br />Not Generic Marketers
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                    <Handshake size={22} className="text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C2340] mb-1">People who know your field</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">The team working on your account has 10+ years of experience in tech and B2B marketing. We consult you on what works in your industry, because we have done it before.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                    <Sparkles size={22} className="text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C2340] mb-1">AI experts, applied practically</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">We use AI across research, content, design and analytics to move faster and deliver more for your budget. You get modern marketing without having to figure out the tools yourself.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                    <Users size={22} className="text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C2340] mb-1">One partner instead of five vendors</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Strategy, content, design, web and reporting under one roof means everything pulls in the same direction, and you have one point of contact instead of a vendor zoo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">How It Works</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-4">
              From First Call to Full<br />Marketing Engine
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="text-center px-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#D48C10] flex items-center justify-center mx-auto mb-5">
                  <s.icon size={26} className="text-white" />
                </div>
                <span className="text-xs font-black text-[#F5A623] tracking-widest">STEP {s.step}</span>
                <h3 className="font-bold text-[#1C2340] text-lg mt-2 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Questions, Answered</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340]">Before You Ask</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white border border-gray-100 rounded-2xl px-6 py-5 hover:border-amber-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-[#1C2340]">
                  {f.q}
                  <span className="text-[#F5A623] text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-gray-500 text-sm leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section id="book-call" className="py-24 bg-[#1C2340] relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-4">Ready When You Are</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Stop Guessing at Marketing.<br />Start Growing.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                One call is all it takes to see exactly what a dedicated marketing team would do for your business, and what it would cost you not to have one.
              </p>
              <div className="space-y-4">
                {[
                  'Free 30-minute strategy call, zero obligation',
                  'A clear 90-day marketing plan within a week',
                  'Month-to-month engagement, cancel anytime',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={18} className="text-[#F5A623] flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Cross-link for enterprise visitors */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-400">
          Enterprise team looking for virtual events or campaign execution?{' '}
          <Link href="/services" className="text-[#F5A623] font-semibold hover:underline">Explore our full services</Link>
        </div>
      </section>
    </div>
  );
}
