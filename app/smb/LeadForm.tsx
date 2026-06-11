'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: 'SMB Marketing (Landing Page)' }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={30} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-[#1C2340] mb-3">You&apos;re all set!</h3>
        <p className="text-gray-500">
          Thanks for reaching out. Our team will get back to you within one business day to schedule your free strategy call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-10">
      <h3 className="text-2xl font-black text-[#1C2340] mb-2">Book Your Free Strategy Call</h3>
      <p className="text-gray-500 text-sm mb-7">30 minutes. No pitch deck, no pressure. Just a clear picture of what we&apos;d do for your business.</p>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lp-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Name *</label>
            <input
              id="lp-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-amber-100 transition-all"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="lp-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Work Email *</label>
            <input
              id="lp-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-amber-100 transition-all"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="lp-company" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Company</label>
          <input
            id="lp-company"
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-amber-100 transition-all"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="lp-message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">What&apos;s your biggest marketing challenge?</label>
          <textarea
            id="lp-message"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-amber-100 transition-all resize-none"
            placeholder="Optional, but it helps us prepare"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D48C10] disabled:opacity-60 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-amber-200"
        >
          {status === 'sending' ? (
            <>Sending <Loader2 size={18} className="animate-spin" /></>
          ) : (
            <>Book My Free Strategy Call <ArrowRight size={18} /></>
          )}
        </button>
        {status === 'error' && (
          <p className="text-sm text-red-500 text-center">Something went wrong. Please try again or email us at info@storease.ca</p>
        )}
        <p className="text-xs text-gray-400 text-center">No spam, no commitment. We respond within one business day.</p>
      </div>
    </form>
  );
}
