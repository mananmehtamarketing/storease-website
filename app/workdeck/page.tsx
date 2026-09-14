/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, X, ArrowDown } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type Film = {
  id: string;
  brand: string;
  format: string;
  note: string;
};

const FILMS: Film[] = [
  {
    id: '1-kB2lJ2J48',
    brand: 'Vanta',
    format: 'Product film',
    note: 'A security and compliance platform explained in one calm, confident minute. No jargon, no feature list.',
  },
  {
    id: 'UcZfSIegPNw',
    brand: 'Airtable',
    format: 'Launch film',
    note: 'A whole platform generation introduced through real work, not slides. This is how a big release should land.',
  },
  {
    id: '92QjC95cbvM',
    brand: 'Pendo',
    format: 'Platform film',
    note: 'Three separate products shown as one system. The hardest brief in B2B video, done cleanly.',
  },
  {
    id: 'sEgPNk-vSyc',
    brand: 'Alation',
    format: 'Brand film',
    note: 'A category reframed. From data museum to data community, carried entirely by the story.',
  },
];

const SPREADS = [
  { id: 'cover', label: 'Cover' },
  { id: 'contents', label: 'Contents' },
  { id: 'video', label: 'Video' },
  { id: 'events', label: 'Events' },
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'social', label: 'Social' },
  { id: 'brand', label: 'Brand' },
  { id: 'environments', label: 'Environments' },
  { id: 'web', label: 'Web' },
  { id: 'process', label: 'Process' },
];

const CONTENTS = [
  { n: '01', title: 'Video Creation', line: 'Brand films, launch films, product films, demos and social cutdowns.' },
  { n: '02', title: 'Live and Virtual Events', line: 'Conferences, roadshows, lunch and learns, filmed and cut properly.' },
  { n: '03', title: 'Campaign Systems', line: 'One idea, built out across every placement your buyers actually see.' },
  { n: '04', title: 'Social and Content', line: 'Carousels, statics and post systems for LinkedIn-first B2B.' },
  { n: '05', title: 'Brand Identity', line: 'Marks, palettes, type systems and the rules that keep them intact.' },
  { n: '06', title: 'Brand Environments', line: 'Stands, billboards, screens and the places a brand meets people.' },
  { n: '07', title: 'Web and Landing Pages', line: 'Pages built to convert, not just to look finished.' },
];

const CAMPAIGN_IMGS = ['p01.jpg', 'p09.jpg', 'p07.jpg', 'p08.jpg', 'p03.jpg', 'p05.jpg'];
const SOCIAL_IMGS = ['p18.jpg', 'p13.jpg', 'p19.jpg'];
const BRAND_IMGS = ['p11.jpg', 'p16.jpg', 'p10.jpg', 'p12.jpg', 'p14.jpg'];
const ENV_IMGS = ['v05.jpg', 'v04.jpg', 'v08.jpg', 'v03.jpg', 'v06.jpg', 'v10.jpg', 'v07.jpg', 'v09.jpg'];
const WEB_IMGS = ['p02.jpg', 'p04.jpg', 'p15.jpg', 'p17.jpg'];

const EVENT_IMGS = [
  { src: '/img/live-events/conference.jpg', label: 'Conferences' },
  { src: '/img/live-events/roadshow.jpg', label: 'Roadshows' },
  { src: '/img/live-events/lunch-and-learn.jpg', label: 'Lunch and learns' },
];

const PROCESS = [
  { n: '01', t: 'We learn the product', d: 'Before anything gets designed we sit with the product and the people who sell it. Most agencies skip this and it shows in the work.' },
  { n: '02', t: 'We build the idea', d: 'One idea, written down in a line. If it cannot survive a single sentence it will not survive a campaign.' },
  { n: '03', t: 'We make it properly', d: 'Film, design, edit, build. In house, to the standard in this deck, not to whatever the deadline allows.' },
  { n: '04', t: 'We put it to work', d: 'Campaigns go live, leads come back, and we tell you honestly which parts earned their place.' },
];

/* ------------------------------------------------------------------ */
/*  SMALL PIECES                                                       */
/* ------------------------------------------------------------------ */

function Num({ n }: { n: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="text-sm font-black tabular-nums text-[#F5A623]">{n}</span>
      <span className="h-px w-10 bg-[#F5A623]" />
    </div>
  );
}

/** Title is the loud thing. Tagline and body step down from it. */
function SpreadHead({
  n,
  title,
  tagline,
  copy,
  dark,
  compact,
}: {
  n: string;
  title: string;
  tagline: string;
  copy: string;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={compact ? '' : 'mb-14 max-w-3xl'}>
      <Num n={n} />
      <h2
        className={`font-black leading-[1.02] tracking-tight ${
          compact ? 'text-4xl sm:text-5xl' : 'text-5xl sm:text-6xl lg:text-7xl'
        }`}
      >
        {title}
      </h2>
      <p className="mt-4 text-lg font-bold leading-snug text-[#F5A623] sm:text-xl">{tagline}</p>
      <p
        className={`mt-4 max-w-2xl text-sm leading-relaxed sm:text-base ${
          dark ? 'text-white/55' : 'text-gray-500'
        }`}
      >
        {copy}
      </p>
    </div>
  );
}

function Spread({
  id,
  dark,
  children,
}: {
  id: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-[68px] py-20 sm:py-28 ${dark ? 'bg-[#1C2340] text-white' : 'bg-white text-[#1C2340]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

function Tile({
  src,
  onOpen,
  dark,
}: {
  src: string;
  onOpen: (s: string) => void;
  dark?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className={`group mb-4 block w-full max-w-full break-inside-avoid overflow-hidden rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 sm:mb-6 sm:rounded-3xl ${
        dark ? 'bg-white/5 ring-1 ring-white/10 hover:ring-[#F5A623]/60' : 'bg-gray-50 ring-1 ring-gray-100 hover:ring-[#F5A623]/60 hover:shadow-xl'
      }`}
    >
      <img
        src={`/workdeck/img/${src}`}
        alt=""
        loading="lazy"
        className="block h-auto w-full max-w-full transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </button>
  );
}

function Masonry({
  items,
  onOpen,
  dark,
  cols = 'sm:columns-2 lg:columns-3',
}: {
  items: string[];
  onOpen: (s: string) => void;
  dark?: boolean;
  cols?: string;
}) {
  return (
    <div className={`columns-1 ${cols} w-full max-w-full gap-4 sm:gap-6`}>
      {items.map((src) => (
        <Tile key={src} src={src} onOpen={onOpen} dark={dark} />
      ))}
    </div>
  );
}

function FilmCard({ film }: { film: Film }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="group">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black ring-1 ring-white/10 sm:rounded-3xl">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0&modestbranding=1`}
            title={`${film.brand} ${film.format}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full"
            aria-label={`Play ${film.brand} ${film.format}`}
          >
            <img
              src={`/workdeck/img/yt-${film.id}.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[#1C2340]/35 transition-colors duration-300 group-hover:bg-[#1C2340]/15" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#1C2340]/85 via-transparent to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5A623] shadow-2xl shadow-black/40 transition-transform duration-300 group-hover:scale-110">
                <Play size={22} className="ml-0.5 fill-white text-white" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#F5A623]">
            {film.format}
          </span>
          <span className="text-sm font-bold text-white/50">{film.brand}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">{film.note}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function WorkDeckPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [active, setActive] = useState('cover');

  const open = useCallback((src: string) => setLightbox(src), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  useEffect(() => {
    const visible = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) visible.set(en.target.id, en.intersectionRatio);
          else visible.delete(en.target.id);
        });
        let best: string | null = null;
        let bestRatio = -1;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best) setActive(best);
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    SPREADS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white">
      {/* ---------------- RAIL ---------------- */}
      <nav className="fixed right-6 top-1/2 z-[900] hidden -translate-y-1/2 xl:block" aria-label="Deck sections">
        <ul className="flex flex-col gap-3">
          {SPREADS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="group flex items-center justify-end gap-3">
                <span
                  className={`rounded-full bg-[#1C2340] px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#F5A623] shadow-lg shadow-black/20 transition-all duration-300 ${
                    active === s.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    active === s.id ? 'h-2.5 w-2.5 bg-[#F5A623]' : 'h-1.5 w-1.5 bg-gray-300 group-hover:bg-[#F5A623]'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ---------------- COVER ---------------- */}
      <section id="cover" className="relative flex min-h-screen items-center overflow-hidden bg-[#1C2340]">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.55]"
          autoPlay
          muted
          loop
          playsInline
          poster="/workdeck/img/event-poster.jpg"
        >
          <source src="/workdeck/video/event-film.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2340] via-[#1C2340]/80 to-[#1C2340]/20" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1C2340] to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6">
          <div className="animate-fade-in-up">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F5A623]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
                Storease · 2026
              </span>
            </div>
            <h1 className="max-w-4xl text-6xl font-black leading-[1.0] tracking-tight text-white sm:text-8xl lg:text-9xl">
              Work Deck
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-bold leading-snug text-[#F5A623] sm:text-2xl">
              Video, brand, campaigns and events for B2B technology companies.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              No case study PDFs. No stock decks. Just the work.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contents"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#D48C10] hover:shadow-xl hover:shadow-amber-900/30"
              >
                Start the deck <ArrowDown size={18} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-8 py-4 text-base font-bold text-white transition-all hover:border-[#F5A623] hover:text-[#F5A623]"
              >
                Talk to us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTENTS ---------------- */}
      <Spread id="contents">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SpreadHead
              compact
              n="00"
              title="Contents"
              tagline="Seven things we make."
              copy="Every section below is one capability. Click anything to see it full size. The films play in the page."
            />
          </div>

          <ul className="divide-y divide-gray-100 border-t border-gray-100">
            {CONTENTS.map((c) => (
              <li key={c.n} className="group py-6">
                <div className="flex items-start gap-5 sm:gap-8">
                  <span className="pt-1 text-sm font-black tabular-nums text-[#F5A623]">{c.n}</span>
                  <div>
                    <h3 className="text-xl font-black tracking-tight transition-colors group-hover:text-[#F5A623] sm:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500 sm:text-base">{c.line}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Spread>

      {/* ---------------- VIDEO ---------------- */}
      <Spread id="video" dark>
        <SpreadHead
          dark
          n="01"
          title="Video Creation"
          tagline="The format that moves B2B."
          copy="Brand films, launch films, product films, demos and the social cutdowns that come out of them. Four films below, one of each kind, so you can hear the difference between a video that explains and a video that sells."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {FILMS.map((f) => (
            <FilmCard key={f.id} film={f} />
          ))}
        </div>

      </Spread>

      {/* ---------------- EVENTS ---------------- */}
      <Spread id="events">
        <SpreadHead
          n="02"
          title="Live and Virtual Events"
          tagline="Rooms people remember, filmed properly."
          copy="Conferences, roadshows and lunch and learns. We plan them, run them, film them, and cut the footage into something you can use for the next twelve months."
        />

        <div className="overflow-hidden rounded-3xl bg-[#1C2340] ring-1 ring-gray-100">
          <video
            className="aspect-video w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/workdeck/img/event-poster.jpg"
          >
            <source src="/workdeck/video/event-film.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="mt-5 text-sm font-bold uppercase tracking-widest text-gray-400">
          Event film · the cut that lives on the homepage
        </p>

        <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">
          {EVENT_IMGS.map((e) => (
            <div key={e.src} className="group overflow-hidden rounded-2xl ring-1 ring-gray-100 sm:rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={e.src}
                  alt={e.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#1C2340]/75 to-transparent" />
                <span className="absolute bottom-4 left-5 text-base font-black text-white">{e.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Masonry items={['v08.jpg']} onOpen={open} cols="sm:columns-1" />
        </div>
      </Spread>

      {/* ---------------- CAMPAIGNS ---------------- */}
      <Spread id="campaigns" dark>
        <SpreadHead
          dark
          n="03"
          title="Campaign Systems"
          tagline="One idea, across every placement."
          copy="A campaign is not a post. It is a system: the hero visual, the proof stat, the objection handler, the offer, and the twenty pieces that carry it for a quarter."
        />
        <Masonry items={CAMPAIGN_IMGS} onOpen={open} dark />
      </Spread>

      {/* ---------------- SOCIAL ---------------- */}
      <Spread id="social">
        <SpreadHead
          n="04"
          title="Social and Content"
          tagline="Built for the feed your buyers actually read."
          copy="LinkedIn first. Carousels, statics and post systems designed so the tenth post still looks like it came from the same company as the first."
        />
        <Masonry items={SOCIAL_IMGS} onOpen={open} />
      </Spread>

      {/* ---------------- BRAND ---------------- */}
      <Spread id="brand" dark>
        <SpreadHead
          dark
          n="05"
          title="Brand Identity"
          tagline="The mark is the easy part. The system is the work."
          copy="Logos, palettes, type scales and the rules that stop a brand falling apart the moment somebody outside the design team opens a file."
        />
        <Masonry items={BRAND_IMGS} onOpen={open} dark />
      </Spread>

      {/* ---------------- ENVIRONMENTS ---------------- */}
      <Spread id="environments">
        <SpreadHead
          n="06"
          title="Brand Environments"
          tagline="Stands, billboards, screens and stages."
          copy="The moment a software brand has to exist at full size, in a room, next to twelve competitors doing the same thing."
        />
        <Masonry items={ENV_IMGS} onOpen={open} cols="sm:columns-2" />
      </Spread>

      {/* ---------------- WEB ---------------- */}
      <Spread id="web" dark>
        <SpreadHead
          dark
          n="07"
          title="Web and Landing Pages"
          tagline="Built to convert, not just to look finished."
          copy="Landing pages, campaign pages and full sites. Fast, responsive, tracked, and written so the first screen already answers the question the visitor came with."
        />
        <Masonry items={WEB_IMGS} onOpen={open} dark cols="sm:columns-2" />
      </Spread>

      {/* ---------------- PROCESS + CTA ---------------- */}
      <Spread id="process">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SpreadHead
              compact
              n="08"
              title="How We Work"
              tagline="Four steps. No surprises."
              copy="Most of what goes wrong in agency work goes wrong in the first two weeks. This is how we stop that."
            />
          </div>
          <ol className="space-y-8">
            {PROCESS.map((p) => (
              <li key={p.n} className="rounded-3xl bg-gray-50 p-7 ring-1 ring-gray-100 sm:p-9">
                <span className="text-sm font-black tabular-nums text-[#F5A623]">{p.n}</span>
                <h3 className="mt-2 text-2xl font-black tracking-tight">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl bg-[#1C2340] px-7 py-14 text-center sm:px-14 sm:py-20">
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-[1.06] tracking-tight text-white sm:text-5xl">
            Want this level of work<br />
            <span className="text-[#F5A623]">pointed at your product?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Tell us what you are launching and who has to believe it. We will come back with an idea,
            not a rate card.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#D48C10] hover:shadow-xl hover:shadow-amber-900/30"
            >
              Start a conversation <ArrowRight size={18} />
            </Link>
            <a
              href="#cover"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-8 py-4 text-base font-bold text-white transition-all hover:border-[#F5A623] hover:text-[#F5A623]"
            >
              Back to the top
            </a>
          </div>
        </div>
      </Spread>

      {/* ---------------- LIGHTBOX ---------------- */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#1C2340]/95 p-4 sm:p-10"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F5A623]"
          >
            <X size={20} />
          </button>
          <img
            src={`/workdeck/img/${lightbox}`}
            alt=""
            className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
