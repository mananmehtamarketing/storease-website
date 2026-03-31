import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle, MessageSquare, PenTool, Award, FileText, Star } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const includes = [
  { icon: MessageSquare, title: 'Customer Interviews & Research', description: 'We conduct structured interviews with your satisfied customers to uncover the real story — the challenges, the turning point, and the tangible results.' },
  { icon: PenTool, title: 'Story Creation & Content Writing', description: 'Expert copywriters craft your case study into a compelling narrative that speaks to your prospects\' exact pain points and buying motivations.' },
  { icon: Award, title: 'Professional Design & Branding', description: 'Every case study is designed to reflect your brand — professionally laid out, visually polished, and ready to represent you in any sales conversation.' },
  { icon: FileText, title: 'Delivery as Polished 2-Page PDF', description: 'Delivered as a print-ready and digital 2-page PDF — easy to share, easy to read, and built to close deals.' },
];

const results = [
  { metric: '73%', label: 'Of buyers say case studies influence purchase' },
  { metric: '5x', label: 'More persuasive than product descriptions' },
  { metric: '2x', label: 'Faster sales cycle with strong proof assets' },
];

export default function CustomerSuccessStoriesPage() {
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
            color="rgb(168,85,247)"
            maxOpacity={0.22}
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
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center">
                  <BookOpen size={26} className="text-purple-600" />
                </div>
                <span className="text-[#F5A623] text-sm font-bold uppercase tracking-widest">Customer Success Stories</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1C2340] leading-[1.05] tracking-tight mb-6">
                Your Customers&apos; Wins Are<br />
                <span className="text-[#F5A623]">Your Best Sales Tool.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-8">
                Prospects trust other customers far more than they trust you. Storease helps you capture, craft, and deploy customer success stories that build credibility, overcome objections, and accelerate deals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-amber-200">
                  Create My Case Study <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-gray-200 text-[#1C2340] hover:border-[#F5A623] hover:text-[#F5A623] font-bold px-8 py-4 rounded-full text-base transition-all">
                  See a Sample
                </Link>
              </div>
            </div>

            {/* Right: Case study mockup */}
            <div className="hidden lg:block relative h-[420px]">
              {/* Case study card */}
              <div className="absolute top-4 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-fade-in-up">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText size={14} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1C2340]">Case Study</p>
                    <p className="text-xs text-gray-400">TechCorp · Q1 2024</p>
                  </div>
                  <span className="ml-auto text-xs bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full">PDF Ready</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">Key Outcome</p>
                  <p className="text-2xl font-black text-[#1C2340]">340% ROI</p>
                  <p className="text-xs text-gray-500 mt-1">in the first 6 months of using Storease</p>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#F5A623] fill-[#F5A623]" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 italic">&ldquo;Working with Storease transformed how we acquire enterprise clients.&rdquo;</p>
                <p className="text-xs font-bold text-[#1C2340] mt-2">— CMO, TechCorp</p>
              </div>

              {/* Persuasion stat */}
              <div className="absolute top-2 left-4 bg-[#F5A623] rounded-2xl shadow-xl p-4 w-36 text-center animate-fade-in delay-200">
                <p className="text-3xl font-black text-white">73%</p>
                <p className="text-xs text-white/80 mt-1 font-medium">Buyers influenced by case studies</p>
              </div>

              {/* Sales cycle badge */}
              <div className="absolute bottom-8 left-2 bg-[#1C2340] rounded-2xl shadow-xl p-4 w-44 animate-fade-in delay-300">
                <p className="text-xs text-gray-400 mb-1 font-medium">Sales cycle impact</p>
                <p className="text-2xl font-black text-white">2x Faster</p>
                <p className="text-xs text-gray-400 mt-1">with strong proof assets</p>
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

      {/* INCLUDED */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-3">Full Service</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1C2340] mb-4">Everything Included</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              We handle the entire process — from customer outreach to final PDF delivery — so you get a polished asset without the internal lift.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-purple-500" />
                </div>
                <h3 className="font-bold text-[#1C2340] text-xl mb-2">{item.title}</h3>
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
              {['Your brand guidelines (logo, colors, fonts)', 'Access to a willing customer for an interview', 'The outcome or result you want to highlight', 'Any relevant data points or metrics from the engagement'].map((item) => (
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
            Turn Your Happy Clients<br />Into Your Strongest Asset
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Every satisfied customer is a story waiting to be told. Let us tell it in a way that wins you more business.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1C2340] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[#2D3560] transition-all">
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
