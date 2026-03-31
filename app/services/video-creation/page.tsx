import Link from 'next/link';
import { ArrowRight, Video, CheckCircle, Film, Smartphone, Play, Linkedin, TrendingUp } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const includes = [
  { icon: Film, title: 'Case Study Videos', description: 'Professional interview-style videos that bring your customer success stories to life — ideal for your website, sales conversations, and LinkedIn.' },
  { icon: Smartphone, title: 'Social Media Reels', description: 'Short-form vertical video content optimized for LinkedIn, Instagram, and other social platforms — built to stop the scroll and spark engagement.' },
  { icon: Play, title: 'Explainer Videos', description: 'Clear, compelling video content that explains your product, service, or process to prospects who prefer watching over reading.' },
  { icon: Linkedin, title: 'LinkedIn Snippets', description: 'Short, punchy video clips tailored for LinkedIn — designed for founder personal brands, product announcements, and thought leadership.' },
];

const results = [
  { metric: '80%', label: 'Of buyers prefer video over text content' },
  { metric: '3x', label: 'Higher engagement on LinkedIn with video' },
  { metric: '2x', label: 'More pipeline from video-led outreach' },
];

export default function VideoCreationPage() {
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
            color="rgb(249,115,22)"
            maxOpacity={0.08}
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
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center">
                  <Video size={26} className="text-orange-500" />
                </div>
                <div>
                  <span className="text-[#F5A623] text-sm font-bold uppercase tracking-widest">Video Creation</span>
                  <span className="ml-2 text-xs bg-green-100 text-green-700 font-bold px-2.5 py-0.5 rounded-full">New Service</span>
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1C2340] leading-[1.05] tracking-tight mb-6">
                Stories That Move.<br />
                <span className="text-[#F5A623]">Content That Stays.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-8">
                Video is the most powerful format in B2B marketing today — and most brands are leaving it on the table. Storease produces professional video content that builds trust, drives engagement, and converts prospects into customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-amber-200">
                  Get a Video Quote <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-gray-200 text-[#1C2340] hover:border-[#F5A623] hover:text-[#F5A623] font-bold px-8 py-4 rounded-full text-base transition-all">
                  See Sample Work
                </Link>
              </div>
            </div>

            {/* Right: Video types mockup */}
            <div className="hidden lg:block relative h-[420px]">
              {/* Video types card */}
              <div className="absolute top-4 right-0 w-72 bg-[#1C2340] rounded-2xl shadow-2xl p-5 animate-fade-in-up">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Video Formats We Produce</p>
                <div className="space-y-3">
                  {[
                    { icon: Film, label: 'Case Study Videos', tag: 'Most popular' },
                    { icon: Smartphone, label: 'Social Reels', tag: 'LinkedIn ready' },
                    { icon: Play, label: 'Explainer Videos', tag: 'High retention' },
                    { icon: Linkedin, label: 'LinkedIn Snippets', tag: 'Thought leadership' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon size={14} className="text-orange-400" />
                      </div>
                      <p className="text-sm text-white font-medium flex-1">{item.label}</p>
                      <span className="text-xs text-gray-400 bg-white/10 px-2 py-0.5 rounded-full whitespace-nowrap">{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engagement badge */}
              <div className="absolute top-2 left-4 bg-[#F5A623] rounded-2xl shadow-xl p-4 w-36 text-center animate-fade-in delay-200">
                <p className="text-3xl font-black text-white">80%</p>
                <p className="text-xs text-white/80 mt-1 font-medium">Buyers prefer video over text</p>
              </div>

              {/* Pipeline badge */}
              <div className="absolute bottom-8 left-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-44 animate-fade-in delay-300">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={14} className="text-green-500" />
                  <span className="text-xs text-gray-400 font-medium">Pipeline impact</span>
                </div>
                <p className="text-2xl font-black text-[#1C2340]">2x More</p>
                <p className="text-xs text-gray-400 mt-1">from video-led outreach</p>
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
              Professional production, strategic scripting, and delivery-ready video assets — for every format your brand needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-orange-500" />
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
              {['Your brand guidelines (logo, colors, fonts)', 'Key messaging or script direction', 'Stakeholder or customer access for interviews', 'Target platform and video format preferences'].map((item) => (
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
            Bring Your Brand to Life<br />With Professional Video
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Your audience is watching. Let&apos;s make sure what they see makes them want to know more.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1C2340] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[#2D3560] transition-all">
            Start My Video Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
