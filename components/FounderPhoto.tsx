'use client';

import { useState } from 'react';

export default function FounderPhoto() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-amber-100">
      {!imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/founder.jpg"
          alt="Guninder Rekhi — Founder, Storease"
          className="w-full h-full object-cover object-top"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Stylised initials placeholder — shows until /public/founder.jpg is added */
        <div className="w-full h-full bg-gradient-to-br from-[#1C2340] via-[#243058] to-[#2A3A6E] flex flex-col items-center justify-center">
          <span className="text-7xl font-black text-[#F5A623] leading-none">GR</span>
          <span className="text-xs text-white/40 mt-2 font-medium tracking-wider">Guninder Rekhi</span>
        </div>
      )}
    </div>
  );
}
