import Link from 'next/link';
import { ArrowRight, Calendar, CheckCircle, BarChart3, Mail, Settings, Target, TrendingUp, Users } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const includes = [
  { icon: Target, title: 'Event Strategy & Planning', description: 'We work with you to define event goals, target audience, format, agenda, and success metrics before a single invite goes out.' },
  { icon: Mail, title: 'Invite, Follow-Up & Registration Design', description: 'Professionally designed email sequences and registration landing pages that drive sign-ups and build anticipation.' },
  { icon: TrendingUp, title: 'Promotion via Email, Social & Paid Ads', description: 'Multi-channel promotion campaigns to maximize attendance — email marketing, LinkedIn, and targeted paid media.' },
  { icon: Settings, title: 'Technical Setup & Live Support', description: 'End-to-end platform setup, speaker briefings, rehearsals, and a dedicated technical team on the day of your event.' },
  { icon: BarChart3, title: 'Post-Event Analytics', description: 'Detailed reporting on attendance, engagement, lead scoring, and actionable insights to power your next campaign.' },
];

const results = [
  { metric: '3x', label: 'Higher attendance vs. DIY events' },
  { metric: '68%', label: 'Average lead capture rate' },
  { metric: '2x', label: 'More pipeline generated post-event' },
];

export default function VirtualEventsPage() {
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
            color="rgb(245,166,35)"
            maxOpacity={0.28}
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
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center">
                  <Calendar size={26} className="text-[#F5A623]" />
                </div>
                <span className="text-[#F5A623] text-sm font-bold uppercase tracking-widest">Virtual Events</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1C2340] leading-[1.05] tracking-tight mb-6">
                Virtual Events That<br />
                <span className="text-[#F5A623]">Fill Your Pipeline.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-8">
                A great virtual event doesn&apos;t just attract attendees — it converts them. Storease handles every detail, so your brand shows up flawlessly and your prospects show up ready to buy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-amber-200">
                  Plan My Event <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-gray-200 text-[#1C2340] hover:border-[#F5A623] hover:text-[#F5A623] font-bold px-8 py-4 rounded-full text-base transition-all">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Right: Event dashboard mockup */}
            <div className="hidden lg:block relative h-[420px]">
              {/* Event card */}
              <div className="absolute top-4 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-fade-in-up">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Upcoming Event</span>
                  <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">Live Soon</span>
                </div>
                <h3 className="font-black text-[#1C2340] text-lg mb-1">Q2 Customer Summit</h3>
                <p className="text-xs text-gray-400 mb-4">Virtual · 500 seats · April 15</p>
                <div className="space-y-3">
                  {[
                    { label: 'Registrations', val: 412, max: 500, color: 'bg-[#F5A623]' },
                    { label: 'Email open rate', val: 68, max: 100, color: 'bg-blue-500' },
                    { label: 'Speaker confirmations', val: 100, max: 100, color: 'bg-green-500' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="font-bold text-[#1C2340]">{item.val}{item.max === 100 ? '%' : ''}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${(item.val / item.max) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attendees card */}
              <div className="absolute bottom-12 left-0 bg-[#1C2340] rounded-2xl shadow-xl p-4 w-48 animate-fade-in delay-200">
                <div className="flex items-center gap-2 mb-3">
                  <Users size={14} className="text-[#F5A623]" />
                  <span className="text-xs text-gray-400 font-medium">Attendance</span>
                </div>
                <p className="text-3xl font-black text-white">3x</p>
                <p className="text-xs text-gray-400 mt-1">vs. DIY event avg</p>
              </div>

              {/* Stat badge */}
              <div className="absolute top-0 left-6 bg-[#F5A623] rounded-2xl shadow-xl p-4 w-36 text-center animate-fade-in delay-300">
                <p className="text-3xl font-black text-white">68%</p>
                <p className="text-xs text-white/80 mt-1 font-medium">Lead capture rate</p>
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
              We manage every aspect of your virtual event from concept to conversion — so you can focus on showing up and delivering value.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-[#F5A623]" />
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
            <p className="text-gray-500 mb-5">To hit the ground running, we&apos;ll ask you to bring:</p>
            <div className="space-y-3">
              {['Your brand guidelines (logo, colors, fonts)', 'A prospect list or target audience definition', 'An event goal or campaign objective'].map((item) => (
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
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Ready to Plan Your<br />Next Standout Event?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Let&apos;s build an event experience your audience will remember — and your pipeline will thank you for.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1C2340] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[#2D3560] transition-all">
            Let&apos;s Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
