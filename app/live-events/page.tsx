import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Mic,
  UtensilsCrossed,
  Route,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Live Events, Conferences and Roadshows | Storease',
  description:
    'Explore Storease live events, including full-day conferences, focused Lunch and Learn sessions and regional roadshows designed for practical learning and meaningful connections.',
  alternates: { canonical: 'https://storease.ca/live-events' },
  openGraph: {
    title: 'Live Events, Conferences and Roadshows | Storease',
    description:
      'Explore Storease live events, including full-day conferences, focused Lunch and Learn sessions and regional roadshows designed for practical learning and meaningful connections.',
    url: 'https://storease.ca/live-events',
    type: 'website',
    images: ['/img/live-events/hero.jpg'],
  },
};

type Format = {
  id: string;
  index: string;
  name: string;
  icon: typeof Mic;
  heading: string;
  headingAccent: string;
  intro: string;
  happens: string[];
  audience: string[];
  attendees: string[];
  glance: { icon: typeof Clock; label: string; value: string }[];
  cta: string;
  image: string;
  alt: string;
};

const formats: Format[] = [
  {
    id: 'conference',
    index: '01',
    name: 'Conference',
    icon: Mic,
    heading: 'The Full Live Event',
    headingAccent: 'Experience.',
    intro:
      'A full-day, in-person gathering that brings the whole industry community together in one venue, with main-stage sessions, focused breakout tracks and a networking-driven expo floor running alongside.',
    happens: [
      'A keynote session on the main stage opens the day and sets the theme.',
      'Multiple breakout tracks run in parallel so attendees can follow the topics most relevant to them.',
      'A small expo floor with partner and sponsor tables remains open throughout the day for hands-on demonstrations and conversations.',
      'Structured networking breaks take place between sessions.',
      "A closing session brings together the day's key themes and takeaways.",
    ],
    audience: [
      'Teams that want the full picture in a single visit, including strategy, product knowledge and networking.',
      'Attendees who value choice and want to build their own experience through different breakout tracks.',
    ],
    attendees: [
      'Exposure to multiple topics, perspectives and speakers.',
      'Direct access to partners and specialists on the expo floor.',
      'Our most immersive and interactive live event format.',
    ],
    glance: [
      { icon: Clock, label: 'Length', value: 'Full day' },
      { icon: Users, label: 'Group size', value: 'Large, 100+ attendees' },
      { icon: MapPin, label: 'Setting', value: 'A dedicated conference venue with a main stage and breakout rooms' },
    ],
    cta: 'Explore Upcoming Conferences',
    image: '/img/live-events/conference.jpg',
    alt: 'Keynote speaker presenting on a conference main stage to a seated professional audience',
  },
  {
    id: 'lunch-and-learn',
    index: '02',
    name: 'Lunch and Learn',
    icon: UtensilsCrossed,
    heading: 'Focused Learning That Fits',
    headingAccent: 'Your Workday.',
    intro:
      'A short, focused session built around a single topic and held over a working lunch. Attendees arrive, eat, explore one specific subject and leave with practical knowledge they can use.',
    happens: [
      'Attendees arrive and are served lunch as the session begins, so no separate time is needed for the meal.',
      'A single presenter or small panel explores one topic in depth rather than moving between multiple subjects.',
      'A live Q&A closes the session and gives attendees the opportunity to discuss their own situations directly.',
    ],
    audience: [
      'Teams that want a useful introduction to a topic without setting aside a full day.',
      'Attendees who prefer a smaller and more conversational environment over a large-scale event.',
    ],
    attendees: [
      'A concentrated, single-topic takeaway that can be acted on immediately.',
      'Direct and informal access to the presenter through an open Q&A.',
      'The lowest time commitment of the three event formats.',
    ],
    glance: [
      { icon: Clock, label: 'Length', value: 'Approximately 180 minutes over lunch' },
      { icon: Users, label: 'Group size', value: 'Small, typically a few dozen attendees' },
      { icon: MapPin, label: 'Setting', value: 'A single room with a conversational rather than staged setup' },
    ],
    cta: 'Explore Lunch and Learn Sessions',
    image: '/img/live-events/lunch-and-learn.jpg',
    alt: 'Small group of business professionals around a table during a lunch and learn session with a presenter speaking',
  },
  {
    id: 'roadshow',
    index: '03',
    name: 'Roadshow',
    icon: Route,
    heading: 'The Conference Experience,',
    headingAccent: 'Closer to Home.',
    intro:
      'A compact, travelling version of the conference brought directly to a local city. It gives teams the benefits of an in-person event without requiring long-distance travel. It carries the same spirit as the full conference but is scaled down to one focused track.',
    happens: [
      'A shortened keynote opens the session and covers the same core themes as the full conference.',
      'One focused track of sessions runs through the rest of the event rather than multiple parallel tracks.',
      'Informal networking time is included before and after the sessions for a smaller local audience.',
    ],
    audience: [
      'Teams that cannot easily travel to a major conference city but still want a live, in-person learning experience.',
      'Local and regional groups that prefer to meet closer to home in a smaller setting.',
    ],
    attendees: [
      'The core conference content and energy delivered locally.',
      'A smaller and more accessible environment that still supports hands-on interaction.',
      'A middle ground between a full conference and a focused lunch session.',
    ],
    glance: [
      { icon: Clock, label: 'Length', value: 'Half day' },
      { icon: Users, label: 'Group size', value: 'Medium, with a moderate local audience' },
      { icon: MapPin, label: 'Setting', value: 'A local venue with one session track and no expo floor' },
    ],
    cta: 'Find a Roadshow Near You',
    image: '/img/live-events/roadshow.jpg',
    alt: 'Regional roadshow audience seated in a local venue with a presenter speaking at the front of the room',
  },
];

function BulletBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
      <h3 className="font-bold text-[#1C2340] text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#F5A623] flex-shrink-0 mt-1" />
            <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LiveEventsPage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#1C2340] pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/live-events/hero.jpg"
            alt="Professional audience seated at a Storease live event watching a speaker on the main stage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2340]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2340] via-[#1C2340]/80 to-[#1C2340]/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-5">
                Live Events
              </span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Connect. Learn.<br />
                <span className="text-[#F5A623]">Experience It Live.</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              From focused lunch sessions to local roadshows and full-day conferences, our live events
              give you practical knowledge, meaningful conversations and direct access to industry
              specialists.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#conference"
                className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-amber-900/30"
              >
                Explore Our Events <ArrowRight size={18} />
              </a>
              <a
                href="#find-your-format"
                className="inline-flex items-center gap-2 border-2 border-white/25 text-white hover:border-[#F5A623] hover:text-[#F5A623] font-bold px-8 py-4 rounded-full text-base transition-all"
              >
                Find the Right Format
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-8 flex items-center gap-2">
              <Sparkles size={15} className="text-[#F5A623]" />
              Choose the live event experience that fits your time, location and learning goals.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMAT QUICK BAR ─────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {formats.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="group flex items-center gap-4 py-6 sm:px-8 first:sm:pl-0 last:sm:pr-0 transition-colors"
              >
                <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5A623] transition-colors">
                  <f.icon size={20} className="text-[#F5A623] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{f.index}</p>
                  <p className="font-bold text-[#1C2340] group-hover:text-[#F5A623] transition-colors">
                    {f.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE THREE FORMATS ────────────────────────────────── */}
      {formats.map((f, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={f.id}
            id={f.id}
            className={`scroll-mt-24 py-20 sm:py-24 ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {/* Intro row: media + copy, alternating */}
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">
                {/* Media */}
                <div className={flipped ? 'lg:order-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.image}
                      alt={f.alt}
                      className="w-full h-[280px] sm:h-[400px] object-cover"
                    />
                  </div>
                </div>

                {/* Copy */}
                <div className={flipped ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center">
                      <f.icon size={22} className="text-[#F5A623]" />
                    </div>
                    <span className="text-[#F5A623] text-sm font-bold uppercase tracking-widest">
                      {f.index} / {f.name}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#1C2340] leading-[1.12] tracking-tight mb-5">
                    {f.heading}<br />
                    <span className="text-[#F5A623]">{f.headingAccent}</span>
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-8">{f.intro}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all hover:shadow-xl hover:shadow-amber-200"
                  >
                    {f.cta} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Detail row: three consistent blocks */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <BulletBlock title="What happens" items={f.happens} />
                <BulletBlock title={"Who it's for"} items={f.audience} />
                <BulletBlock title="What attendees get" items={f.attendees} />
              </div>

              {/* Format at a glance */}
              <div className="bg-[#1C2340] rounded-3xl p-7 sm:p-9">
                <h3 className="text-white font-black text-xl mb-6">Format at a glance</h3>
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                  {f.glance.map((g) => (
                    <div key={g.label} className="flex items-start gap-4 pt-5 first:pt-0 sm:pt-0 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                      <div className="w-10 h-10 bg-[#F5A623]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <g.icon size={18} className="text-[#F5A623]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                          {g.label}
                        </p>
                        <p className="text-white font-semibold leading-snug">{g.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── BREAKER BANNER ───────────────────────────────────── */}
      <section
        id="find-your-format"
        className="scroll-mt-24 py-24 bg-[#F5A623] relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Three Ways to<br />Experience More
          </h2>
          <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-9">
            Choose a focused lunch session, a half-day local roadshow or the complete conference
            experience. Each format gives you practical knowledge, direct access to specialists and
            valuable connections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1C2340] text-white font-bold px-9 py-4 rounded-full text-base hover:bg-[#2D3560] transition-all"
            >
              Explore Upcoming Live Events <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white hover:bg-white hover:text-[#F5A623] font-bold px-9 py-4 rounded-full text-base transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-8">
            Find the event format that works for your team, your schedule and your location.
          </p>
        </div>
      </section>
    </div>
  );
}
