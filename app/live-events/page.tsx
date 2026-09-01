import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronDown,
  ClipboardList,
  Cog,
  LayoutGrid,
  Lock,
  Mic,
  Route,
  Search,
  UserCheck,
  UtensilsCrossed,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Event Production & Regional Activation | Storease',
  description:
    'We plan and run your regional events end to end. Flagship conferences, Lunch and Learn sessions and multi-city roadshows, delivered by one team with one point of contact.',
  alternates: { canonical: 'https://storease.ca/live-events' },
  openGraph: {
    title: 'Event Production & Regional Activation | Storease',
    description:
      'We plan and run your regional events end to end. Flagship conferences, Lunch and Learn sessions and multi-city roadshows, delivered by one team with one point of contact.',
    url: 'https://storease.ca/live-events',
    type: 'website',
    images: ['/img/live-events/hero.jpg'],
  },
};

type Service = {
  id: string;
  index: string;
  name: string;
  icon: typeof Mic;
  title: string;
  intro: string;
  included: string[];
  proof: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    id: 'conference',
    index: '01',
    name: 'Conference',
    icon: Mic,
    title: 'Your Flagship Moment',
    intro:
      'We produce your full-scale conference from the ground up: venue sourcing, speaker programming, breakout tracks, and an expo floor that makes your brand look like the category leader.',
    included: [
      'Venue sourcing and full production management',
      'Speaker sourcing, briefing, and stage management',
      'Breakout track design and content coordination',
      'Expo floor build-out for sponsors and partners',
      'Post-event reporting on attendance and engagement',
    ],
    proof:
      '“Delivered a 600-person flagship conference in 12 weeks, from venue contract to closing keynote.”',
    image: '/img/live-events/conference.jpg',
    alt: 'Keynote speaker presenting on a conference main stage to a seated professional audience',
  },
  {
    id: 'lunch-and-learn',
    index: '02',
    name: 'Lunch and Learn',
    icon: UtensilsCrossed,
    title: 'Low-Risk, Fast to Launch',
    intro:
      'A focused, single-topic session we can stand up quickly, ideal for testing a new message or nurturing a segment without committing to a full production budget.',
    included: [
      'Venue and catering coordination for a working lunch',
      'Speaker or panel briefing on a single topic',
      'Run-of-show and live Q&A facilitation',
      'Attendee list building support',
      'Fast turnaround: typically live within 3 to 4 weeks of kickoff',
    ],
    proof:
      '“Our most-requested entry point for clients running their first event with us.”',
    image: '/img/live-events/lunch-and-learn.jpg',
    alt: 'Small group of business professionals around a table during a lunch and learn session with a presenter speaking',
  },
  {
    id: 'roadshow',
    index: '03',
    name: 'Road show',
    icon: Route,
    title: 'Scale Without Duplicating a Team',
    intro:
      'We take your message on the road, 5 to 10 or more cities, without you having to build out a regional events team to do it.',
    included: [
      'Multi-city venue sourcing and logistics',
      'A repeatable single-track format, produced once and run consistently city to city',
      'Local promotion and attendee-list support per market',
      'Centralized reporting across all stops',
      'One point of contact managing the full tour',
    ],
    proof:
      '“Ran a 10-city roadshow in one quarter with a single point of contact for the client.”',
    image: '/img/live-events/roadshow.jpg',
    alt: 'Regional roadshow audience seated in a local venue with a presenter speaking at the front of the room',
  },
];

const steps = [
  {
    number: 'Step 1',
    title: 'Discovery',
    icon: Search,
    text: 'We learn your goals, audience, and budget, and recommend which format (or mix of formats) fits.',
  },
  {
    number: 'Step 2',
    title: 'Design',
    icon: ClipboardList,
    text: 'We build the run of show, source the venue and speakers, and lock the budget before anything is booked.',
  },
  {
    number: 'Step 3',
    title: 'Production',
    icon: Cog,
    text: 'We run point on logistics, vendors, and on-site delivery so your team can focus on hosting, not troubleshooting.',
  },
  {
    number: 'Step 4',
    title: 'Reporting',
    icon: BarChart3,
    text: 'We deliver attendance, engagement, and pipeline-impact reporting after every event.',
  },
];

const faqs = [
  {
    q: "What's the typical budget range for each format?",
    a: 'It depends on the format, the city count, and the production level, so we scope every engagement individually. Lunch and Learn is the lightest budget of the three, the conference is the largest, and a roadshow sits in between based on the number of stops. Whichever you choose, we lock the full budget with you in the design phase, before anything is booked.',
  },
  {
    q: 'How far in advance do we need to book?',
    a: 'A Lunch and Learn can typically be live within 3 to 4 weeks of kickoff. A flagship conference is realistic in about 12 weeks. For a multi-city roadshow, plan for a quarter from kickoff to the final stop. If your date is closer than that, talk to us anyway and we will tell you what is achievable.',
  },
  {
    q: 'Which cities or regions do you cover?',
    a: 'We source venues and manage logistics wherever your audience is, from a single city to a 10-city tour. Tell us the markets you need to reach and we will confirm coverage on the strategy call.',
  },
  {
    q: 'Can we start with one event before committing to a retainer?',
    a: 'Yes, and most clients do. A single Lunch and Learn is our most-requested entry point. Once you have seen how we run one event, scaling up to a roadshow or a flagship conference is a straightforward next step.',
  },
];

const reasons = [
  {
    icon: UserCheck,
    title: 'One point of contact',
    text: 'One producer owns your event from kickoff to wrap. No chasing vendors, no relaying messages between agencies.',
  },
  {
    icon: Lock,
    title: 'Budget locked before booking',
    text: 'You approve the full budget in the design phase, before a single venue or speaker is committed. No surprise invoices.',
  },
  {
    icon: LayoutGrid,
    title: 'A format for every stage',
    text: 'Test a message with a Lunch and Learn, take it to ten cities, or anchor the year with a flagship conference. Same team throughout.',
  },
  {
    icon: BarChart3,
    title: 'Reporting you can forward',
    text: 'Attendance, engagement, and pipeline impact after every event, in a format your leadership can act on.',
  },
];

const stats = [
  { value: '600', label: 'attendees at a single flagship conference' },
  { value: '12 weeks', label: 'from venue contract to closing keynote' },
  { value: '10 cities', label: 'covered in one quarter, with one point of contact' },
  { value: '3 to 4 weeks', label: 'from kickoff to a live Lunch and Learn' },
];

export default function LiveEventsPage() {
  return (
    <div>
      {/* ── SECTION 1 · HERO ─────────────────────────────────── */}
      <section className="relative bg-[#1C2340] pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/live-events/hero.jpg"
            alt="Professional audience seated at a Storease produced live event watching a speaker on the main stage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2340]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2340] via-[#1C2340]/80 to-[#1C2340]/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-5">
                EVENT PRODUCTION &amp; REGIONAL ACTIVATION
              </span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                We plan and run your regional events,{' '}
                <span className="text-[#F5A623]">end to end.</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              From a single flagship conference to a 10-city roadshow, our team handles strategy,
              logistics, and delivery so your team can focus on the room, not the run sheet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-amber-900/30"
            >
              Book a strategy call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 · SERVICES ─────────────────────────────── */}
      <section id="services" className="scroll-mt-24 py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#1C2340] leading-[1.12] tracking-tight mb-5">
              Three ways we bring your brand and services{' '}
              <span className="text-[#F5A623]">into the room.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Same team, same quality bar, sized to fit the goal and the budget.
            </p>
          </div>

          <div className="space-y-20 sm:space-y-24">
            {services.map((s, i) => {
              const flipped = i % 2 === 1;
              return (
                <div key={s.id} id={s.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                  {/* Media + proof */}
                  <div className={flipped ? 'lg:order-2' : ''}>
                    <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-lg mb-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.image} alt={s.alt} className="w-full h-[280px] sm:h-[380px] object-cover" />
                    </div>
                    <figure className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                      <figcaption className="text-xs font-bold text-[#D48C10] uppercase tracking-wider mb-2">
                        Proof point
                      </figcaption>
                      <blockquote className="text-[#1C2340] font-semibold leading-relaxed italic">
                        {s.proof}
                      </blockquote>
                    </figure>
                  </div>

                  {/* Copy */}
                  <div className={flipped ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center">
                        <s.icon size={22} className="text-[#F5A623]" />
                      </div>
                      <span className="text-[#F5A623] text-sm font-bold uppercase tracking-widest">
                        {s.index} / {s.name}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black text-[#1C2340] leading-[1.12] tracking-tight mb-5">
                      {s.title}
                    </h3>
                    <p className="text-lg text-gray-500 leading-relaxed mb-8">{s.intro}</p>

                    <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                      <h4 className="font-bold text-[#1C2340] text-lg mb-4">What&apos;s included</h4>
                      <ul className="space-y-3">
                        {s.included.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-[#F5A623] flex-shrink-0 mt-1" />
                            <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 · HOW WE WORK ──────────────────────────── */}
      <section id="how-we-work" className="scroll-mt-24 py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#1C2340] leading-[1.12] tracking-tight">
              A repeatable process,{' '}
              <span className="text-[#F5A623]">not a one-off scramble.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gray-200" aria-hidden="true" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step) => (
                <div key={step.title} className="relative">
                  <div className="w-14 h-14 bg-[#F5A623] rounded-full flex items-center justify-center mb-5 relative shadow-md shadow-amber-200">
                    <step.icon size={22} className="text-white" />
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{step.number}</p>
                  <h3 className="font-black text-[#1C2340] text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 · FAQ ──────────────────────────────────── */}
      <section id="faq" className="scroll-mt-24 py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1C2340] leading-[1.12] tracking-tight mb-10">
            What clients ask us <span className="text-[#F5A623]">first.</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white border border-gray-100 rounded-2xl open:border-amber-200 open:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-bold text-[#1C2340]">
                  {f.q}
                  <span className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown size={18} className="text-[#F5A623]" />
                  </span>
                </summary>
                <p className="px-6 pb-6 -mt-1 text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 · WHY TEAMS HIRE US ────────────────────── */}
      <section id="why-us" className="scroll-mt-24 py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#1C2340] leading-[1.12] tracking-tight">
              Everything an in-house events team does,{' '}
              <span className="text-[#F5A623]">without the headcount.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-5">
                  <r.icon size={22} className="text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-[#1C2340] text-lg mb-3">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 · DELIVERED, NOT PROMISED ──────────────── */}
      <section id="results" className="scroll-mt-24 py-20 sm:py-24 bg-[#1C2340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white leading-[1.12] tracking-tight">
              Delivered, <span className="text-[#F5A623]">not promised.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((st) => (
              <div key={st.value} className="pt-6 first:pt-0 sm:pt-0 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <p className="text-4xl sm:text-5xl font-black text-[#F5A623] mb-3">{st.value}</p>
                <p className="text-gray-300 leading-relaxed">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7 · FINAL CTA ────────────────────────────── */}
      <section id="get-a-proposal" className="scroll-mt-24 py-24 bg-[#F5A623] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Not sure which format<br />fits your goal?
          </h2>
          <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-9">
            Tell us the goal, the audience, and the budget. We will recommend the format and send a
            scoped proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1C2340] text-white font-bold px-9 py-4 rounded-full text-base hover:bg-[#2D3560] transition-all"
            >
              Get a proposal <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white hover:bg-white hover:text-[#F5A623] font-bold px-9 py-4 rounded-full text-base transition-all"
            >
              Book a 20-minute call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
