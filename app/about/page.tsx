import Link from 'next/link';
import { ArrowRight, Target, Brain, Zap, BarChart3, CheckCircle, Heart, Lightbulb, Users, TrendingUp } from 'lucide-react';

const differentiators = [
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

const values = [
  { icon: Heart, title: 'Empathy First', description: 'We start every project by deeply understanding the humans who will experience your brand.' },
  { icon: Lightbulb, title: 'Insight-Driven', description: "Every creative decision is backed by behavioral data and customer research, not guesswork." },
  { icon: Users, title: 'Collaborative', description: 'We work as an extension of your team — transparent, communicative, and fully invested.' },
  { icon: TrendingUp, title: 'Growth-Obsessed', description: 'We measure what matters and optimize relentlessly until your goals are not just met but exceeded.' },
];

const framework = [
  { step: '01', title: 'CX Insight Discovery', subtitle: 'Consulting', description: "Understand your customer's mindset and motivations through deep research and behavioral analysis." },
  { step: '02', title: 'Persona & Journey Mapping', subtitle: 'Strategy', description: "Define who you're targeting and how they engage at every touchpoint along the customer journey." },
  { step: '03', title: 'Omni-Channel Engagement', subtitle: 'Execution', description: 'Deliver consistent, compelling campaigns across digital, social, and live event channels.' },
  { step: '04', title: 'CX Performance Optimization', subtitle: 'Measurement', description: 'Track, refine, and continuously improve with data-driven insights and transparent reporting.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full opacity-60 translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-4">Our Story</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1C2340] leading-[1.05] tracking-tight mb-6">
              We Believe Every<br />
              <span className="text-[#F5A623]">Experience Matters.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Storease was built on a simple but powerful conviction: that the brands which win aren&apos;t just better at marketing — they&apos;re better at understanding their customers.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              With 15+ years of experience blending behavioral science, data, and creativity, we&apos;ve developed a CX-first marketing framework that transforms how brands connect with the people who matter most to them.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-[#1C2340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-4">Our Mission</span>
              <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                Elevate Every Experience.<br />Drive Real Growth.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We exist to help ambitious brands build deeper, more meaningful relationships with their customers — and to prove that great CX isn&apos;t just good for people, it&apos;s good for business.
              </p>
              <div className="space-y-3">
                {['Customer-first in everything we do', 'Data-informed, human-centered decisions', 'Accountable to measurable outcomes', 'Partners, not just vendors'].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-8">
                <p className="text-6xl font-black text-[#F5A623] mb-2">15+</p>
                <p className="text-gray-400 text-sm">Years blending behavioral science, data, and creativity</p>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                <div className="text-center">
                  <p className="text-3xl font-black text-white mb-1">6</p>
                  <p className="text-gray-400 text-xs">Core Service Areas</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-white mb-1">360°</p>
                  <p className="text-gray-400 text-xs">Campaign Coverage</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-white mb-1">CX</p>
                  <p className="text-gray-400 text-xs">First Approach Always</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-white mb-1">∞</p>
                  <p className="text-gray-400 text-xs">Optimization Cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STOREASE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Why Storease</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Plenty of agencies do marketing. We do something harder: we make your customers <em>feel</em> something — and then we measure it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                  <d.icon size={22} className="text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-[#1C2340] text-lg mb-2">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Our Values</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-4">How We Show Up</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              These aren&apos;t just words on a wall. They&apos;re how we operate every single day — for every single client.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
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

      {/* FRAMEWORK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Our Framework</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-4">
              The Storease Marketing Framework
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Four stages. One goal: extraordinary customer experiences that drive measurable business growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {framework.map((f) => (
              <div key={f.step} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl font-black text-gray-50 leading-none select-none">{f.step}</div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5A623] to-[#D48C10] flex items-center justify-center mb-5">
                  <span className="text-white font-black text-sm">{f.step}</span>
                </div>
                <span className="text-xs bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded-full mb-3 inline-block">{f.subtitle}</span>
                <h3 className="font-bold text-[#1C2340] text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F5A623] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Ready to Build Something<br />Worth Experiencing?
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-xl mx-auto">
            Let&apos;s start with a conversation about your customers, your goals, and where the biggest opportunities lie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1C2340] text-white font-bold px-8 py-4 rounded-full text-base hover:bg-[#2D3560] transition-all duration-200">
              Book a Free Discovery Call <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white font-bold px-8 py-4 rounded-full text-base hover:bg-white/30 transition-all duration-200">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
