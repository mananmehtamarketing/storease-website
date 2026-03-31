import Link from 'next/link';
import { ArrowRight, Linkedin, CheckCircle, MessageSquare, PenTool, Users, BarChart3, Target, TrendingUp } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const includes = [
  { icon: MessageSquare, title: 'Consultation & Strategy', description: 'We start with your goals — brand awareness, lead generation, or pipeline acceleration — and build a campaign strategy around them.' },
  { icon: PenTool, title: 'Ad Design & Creation', description: 'Scroll-stopping ad creative including static images, carousels, and document ads — all crafted to your brand and optimized for LinkedIn.' },
  { icon: Users, title: 'Audience Targeting & Campaign Setup', description: 'Laser-focused audience segmentation using LinkedIn\'s targeting tools — by job title, seniority, company size, industry, and more.' },
  { icon: Target, title: 'Campaign Management', description: 'Ongoing campaign oversight including bid management, A/B testing, budget pacing, and real-time optimization.' },
  { icon: BarChart3, title: 'Reporting & Analysis', description: 'Clear, comprehensive reporting on impressions, CTR, leads, cost-per-lead, and pipeline contribution — delivered on your schedule.' },
];

const results = [
  { metric: '4x', label: 'Better targeting vs. other paid channels' },
  { metric: '45%', label: 'Lower cost-per-qualified-lead' },
  { metric: '2.5x', label: 'Higher conversion to pipeline' },
];

export default function LinkedInCampaignsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-24 overflow-hidden min-h-[580px]">
        <div className="absolute inset-0 pointer-events-none">
          <FlickeringGrid
            className="absolute inset-0 w-full h-full"
            squareSize={4}
            gridGap={6}
            flickerChance={0.25}
            color="rgb(59,130,246)"
            maxOpacity={0.24}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/65 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#F5A623] mb-8 transition-colors">
                ← All Services
              </Link>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Linkedin size={26} className="text-blue-600" />
                </div>
                <span className="text-[#F5A623] text-sm font-bold uppercase tracking-widest">LinkedIn Ad Campaigns</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1C2340] leading-[1.05] tracking-tight mb-6">
                Reach Decision-Makers<br />
                <span className="text-[#F5A623]">Where It Matters.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-8">
                LinkedIn is the world&apos;s most powerful B2B advertising platform — and most brands are using it wrong. Storease combines CX strategy with LinkedIn expertise to build campaigns that reach the right people with the right message.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-amber-200">
                  Launch My Campaign <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-gray-200 text-[#1C2340] hover:border-[#F5A623] hover:text-[#F5A623] font-bold px-8 py-4 rounded-full text-base transition-all">
                  Get a Free Audit
                </Link>
              </div>
            </div>

            {/* Right: Campaign analytics mockup */}
            <div className="hidden lg:block relative h-[400px]">
              {/* Campaign card */}
              <div className="absolute top-4 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-fade-in-up">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Linkedin size={14} className="text-white" />
                    </div>
                    <span className="text-sm font-bold text-[#1C2340]">Campaign Live</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Active</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center bg-blue-50 rounded-xl p-2">
                    <p className="text-lg font-black text-blue-600">12.4%</p>
                    <p className="text-xs text-gray-400">CTR</p>
                  </div>
                  <div className="text-center bg-amber-50 rounded-xl p-2">
                    <p className="text-lg font-black text-[#F5A623]">4x</p>
                    <p className="text-xs text-gray-400">Better reach</p>
                  </div>
                  <div className="text-center bg-green-50 rounded-xl p-2">
                    <p className="text-lg font-black text-green-600">45%</p>
                    <p className="text-xs text-gray-400">Lower CPL</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                  <TrendingUp size={14} className="text-green-500" />
                  <p className="text-xs text-gray-600 font-medium">Pipeline growing at <span className="text-green-600 font-bold">+2.5x</span> vs. baseline</p>
                </div>
              </div>

              {/* Targeting badge */}
              <div className="absolute top-2 left-4 bg-[#1C2340] rounded-2xl shadow-xl p-4 w-44 animate-fade-in delay-200">
                <p className="text-xs text-gray-400 mb-2 font-medium">Audience Targeting</p>
                {['VP & C-Suite', 'B2B SaaS', '200–5,000 employees'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full" />
                    <p className="text-xs text-gray-300">{t}</p>
                  </div>
                ))}
              </div>

              {/* Impressions floating */}
              <div className="absolute bottom-8 left-2 bg-[#F5A623] rounded-2xl shadow-xl p-4 w-40 text-center animate-fade-in delay-300">
                <p className="text-3xl font-black text-white">280K</p>
                <p className="text-xs text-white/80 mt-1 font-medium">Impressions delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS BAR */}
      <section className="bg-[#1C2340] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {results.map((r) => (
              <div key={r.label} className="text-center py-4 sm:py-0 px-6">
                <p className="text-4xl font-black text-[#F5A623] mb-1">{r.metric}</p>
                <p className="text-sm text-gray-400">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Full Service</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-4">Everything Included</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              From strategy to creative to optimization — we run your LinkedIn advertising so you can focus on closing the leads we deliver.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-blue-500" />
                </div>
                <h3 className="font-bold text-[#1C2340] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREREQUISITES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-amber-100 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-[#1C2340] mb-4">What You&apos;ll Need to Get Started</h3>
            <div className="space-y-3">
              {['LinkedIn account access (Company Page admin)', 'Defined campaign goals (awareness, leads, pipeline)', 'Target audience profile or ICP definition', 'Budget range for your campaign'].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F5A623] relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Ready to Turn LinkedIn<br />Into a Revenue Channel?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Book a free strategy session and we&apos;ll show you exactly how we&apos;d approach your campaign.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1C2340] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[#2D3560] transition-all">
            Book a Free Strategy Call <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
