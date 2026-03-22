'use client';

import { useState } from 'react';
import { Mail, Phone, ArrowRight, CheckCircle, Clock, Calendar } from 'lucide-react';

const services = [
  'Virtual Events',
  'LinkedIn Ad Campaigns',
  'List Building & Augmentation',
  'Customer Success Stories',
  'Design & Content Creation',
  'Video Creation',
  "I'm not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full opacity-60 translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl">
            <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-widest mb-4">Get In Touch</span>
            <h1 className="text-5xl sm:text-6xl font-black text-[#1C2340] leading-[1.05] tracking-tight mb-5">
              Let&apos;s Start Your<br />
              <span className="text-[#F5A623]">Marketing Journey</span><br />
              Together.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Whether you have a specific project in mind or just want to explore what&apos;s possible — we&apos;d love to hear from you. Every great partnership starts with a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-10 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* LEFT: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white border border-amber-200 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-[#F5A623]" />
                  </div>
                  <h2 className="text-3xl font-black text-[#1C2340] mb-3">Message Received!</h2>
                  <p className="text-gray-500 text-lg mb-6">
                    Thank you for reaching out. A member of the Storease team will be in touch within 24 hours.
                  </p>
                  <p className="text-sm text-gray-400">
                    In the meantime, feel free to email us directly at{' '}
                    <a href="mailto:info@storease.ca" className="text-[#F5A623] font-semibold">info@storease.ca</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-black text-[#1C2340] mb-6">Send Us a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1C2340] mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-amber-100 transition-all placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1C2340] mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-amber-100 transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-[#1C2340] mb-1.5">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corporation"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-amber-100 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-[#1C2340] mb-1.5">What are you interested in? *</label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-amber-100 transition-all text-gray-600 bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-[#1C2340] mb-1.5">Tell us about your project</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What are your goals? What challenges are you facing? The more context, the better..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-amber-100 transition-all placeholder:text-gray-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#F5A623] hover:bg-[#D48C10] text-white font-bold py-4 rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-amber-200 flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT: Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct contact */}
              <div className="bg-[#1C2340] rounded-2xl p-7">
                <h3 className="text-white font-bold text-lg mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:info@storease.ca" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-[#F5A623]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Email</p>
                      <p className="text-white font-semibold text-sm group-hover:text-[#F5A623] transition-colors">info@storease.ca</p>
                    </div>
                  </a>
                  <a href="tel:+14377779453" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-[#F5A623]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                      <p className="text-white font-semibold text-sm group-hover:text-[#F5A623] transition-colors">+1 (437)-777-9453</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-7">
                <h3 className="text-[#1C2340] font-bold text-lg mb-5">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#F5A623]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={14} className="text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1C2340] text-sm">Response within 24 hours</p>
                      <p className="text-gray-500 text-xs mt-0.5">We respect your time and respond quickly.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#F5A623]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calendar size={14} className="text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1C2340] text-sm">Free discovery consultation</p>
                      <p className="text-gray-500 text-xs mt-0.5">We&apos;ll schedule a 30-min call to understand your needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#F5A623]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1C2340] text-sm">No pressure, no obligation</p>
                      <p className="text-gray-500 text-xs mt-0.5">We&apos;ll recommend the right path for your specific situation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services quick list */}
              <div className="bg-white border border-gray-100 rounded-2xl p-7">
                <h3 className="text-[#1C2340] font-bold text-lg mb-4">Our Services</h3>
                <div className="space-y-2">
                  {['Virtual Events', 'LinkedIn Ad Campaigns', 'List Building & Augmentation', 'Customer Success Stories', 'Design & Content Creation', 'Video Creation'].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
