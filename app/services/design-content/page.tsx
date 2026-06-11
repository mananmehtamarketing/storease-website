import Link from 'next/link';
import { ArrowRight, Palette, CheckCircle, Image, Book, Newspaper, PresentationIcon, TrendingUp } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const includes = [
  { icon: Image, title: 'One-Pagers & Infographics', description: 'Visual assets that communicate complex ideas simply, ideal for sales meetings, event handouts, and social sharing.' },
  { icon: Book, title: 'E-Books & Whitepapers', description: 'In-depth long-form content that establishes your brand as a thought leader and generates high-intent leads through content gates.' },
  { icon: Newspaper, title: 'Blogs & PR Releases', description: 'SEO-optimized blog posts and professionally crafted press releases that build organic visibility and media coverage.' },
  { icon: PresentationIcon, title: 'Strategic Decks & Sales Enablement', description: 'Pitch decks, sales presentations, and proposal templates that give your team the tools to close faster and with more confidence.' },
];

const results = [
  { metric: '3x', label: 'More leads from content-gated assets' },
  { metric: '60%', label: 'Shorter sales cycles with enablement materials' },
  { metric: '4x', label: 'Higher brand authority from consistent content' },
];

export default function DesignContentPage() {
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
            color="rgb(244,63,94)"
            maxOpacity={0.07}
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
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center">
                  <Palette size={26} className="text-rose-500" />
                </div>
                <span className="text-[#F5A623] text-sm font-bold uppercase tracking-widest">Design & Content Creation</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1C2340] leading-[1.05] tracking-tight mb-6">
                Content That Earns<br />
                <span className="text-[#F5A623]">Attention and Trust.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-8">
                In a world full of noise, the brands that win are the ones that create content worth reading, sharing, and remembering. Storease builds content that works, beautifully designed, strategically written, and purpose-built to move your audience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-amber-200">
                  Start Creating <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-gray-200 text-[#1C2340] hover:border-[#F5A623] hover:text-[#F5A623] font-bold px-8 py-4 rounded-full text-base transition-all">
                  View a Sample
                </Link>
              </div>
            </div>

            {/* Right: Content grid mockup */}
            <div className="hidden lg:block relative h-[420px]">
              {/* Content types grid */}
              <div className="absolute top-4 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-fade-in-up">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Content Portfolio</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: Image, label: 'Infographics', color: 'bg-rose-50', iconColor: 'text-rose-500' },
                    { icon: Book, label: 'E-Books', color: 'bg-amber-50', iconColor: 'text-[#F5A623]' },
                    { icon: Newspaper, label: 'Blog Posts', color: 'bg-blue-50', iconColor: 'text-blue-500' },
                    { icon: PresentationIcon, label: 'Sales Decks', color: 'bg-green-50', iconColor: 'text-green-500' },
                  ].map((item) => (
                    <div key={item.label} className={`${item.color} rounded-xl p-3 flex flex-col items-center gap-2`}>
                      <item.icon size={20} className={item.iconColor} />
                      <p className="text-xs font-bold text-[#1C2340]">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-xl flex items-center gap-3">
                  <TrendingUp size={16} className="text-green-500 flex-shrink-0" />
                  <p className="text-xs text-gray-600"><span className="font-bold text-green-600">3x</span> more leads from gated content assets</p>
                </div>
              </div>

              {/* Authority badge */}
              <div className="absolute top-2 left-4 bg-[#F5A623] rounded-2xl shadow-xl p-4 w-36 text-center animate-fade-in delay-200">
                <p className="text-3xl font-black text-white">4x</p>
                <p className="text-xs text-white/80 mt-1 font-medium">Brand authority growth</p>
              </div>

              {/* Engagement card */}
              <div className="absolute bottom-8 left-2 bg-[#1C2340] rounded-2xl shadow-xl p-4 w-44 animate-fade-in delay-300">
                <p className="text-xs text-gray-400 mb-1 font-medium">Sales cycle reduction</p>
                <p className="text-2xl font-black text-white">60% Faster</p>
                <p className="text-xs text-gray-400 mt-1">with strong enablement</p>
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
              Whether you need one asset or a full content library, we design and write everything with your brand voice, audience, and goals in mind.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-rose-500" />
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
              {['Your brand guidelines (logo, colors, fonts, tone of voice)', 'Content themes or topics you want to address', 'Target audience and their key pain points', 'Intended distribution channels (email, web, social, sales)'].map((item) => (
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
            Ready to Build Content<br />That Actually Works?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Let&apos;s create assets your audience will actually want to read, and your team will be proud to share.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1C2340] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[#2D3560] transition-all">
            Let&apos;s Create Together <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
