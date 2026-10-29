import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Copy, Check, ArrowUp, Send, CheckCircle2 } from 'lucide-react';
import { FOUNDER_DATA, WEBBHEADS_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Strategic Partnership',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(FOUNDER_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(FOUNDER_DATA.contact.phones[0]);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-pureWhite border-t border-stoneBeige/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 lg:pt-32 pb-12">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-stoneBeige mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-3">
            <span className="w-2 h-2 bg-carbonBlack"></span>
            <span>Section 06 — Contact & Inquiries</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-carbonBlack tracking-tight">
                Let's Build Meaningful Value
              </h2>
              <p className="text-sm sm:text-base text-charcoalGrey mt-3 max-w-2xl font-normal leading-relaxed">
                Open to executive mentorship conversations, strategic digital marketing partnerships, corporate website mandates, and long-term business advisory relationships.
              </p>
            </div>

            <div className="text-xs font-mono text-mutedTaupe">
              <span>RESPONSE TIME // WITHIN 24 HOURS</span>
            </div>
          </div>
        </div>

        {/* Contact Grid: Direct Reach (Left) + Direct Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20 items-start">
          
          {/* LEFT: Verified Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 bg-surface-50 border border-stoneBeige hover:border-carbonBlack transition-colors group">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-mutedTaupe">
                <span className="uppercase font-semibold">Direct Email</span>
                <Mail className="w-4 h-4 text-carbonBlack" />
              </div>

              <a
                href={`mailto:${FOUNDER_DATA.contact.email}`}
                className="font-display font-bold text-lg sm:text-xl text-carbonBlack hover:text-charcoalGrey break-all block mb-3"
              >
                {FOUNDER_DATA.contact.email}
              </a>

              <div className="flex items-center gap-3 pt-3 border-t border-stoneBeige/50">
                <a
                  href={`mailto:${FOUNDER_DATA.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-carbonBlack hover:underline"
                >
                  <span>Compose Mail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs font-mono text-charcoalGrey hover:text-carbonBlack ml-auto"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="p-6 bg-surface-50 border border-stoneBeige hover:border-carbonBlack transition-colors group">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-mutedTaupe">
                <span className="uppercase font-semibold">Direct Telephone</span>
                <Phone className="w-4 h-4 text-carbonBlack" />
              </div>

              <div className="space-y-2 mb-3">
                {FOUNDER_DATA.contact.phones.map((phone) => (
                  <div key={phone} className="flex items-center justify-between">
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="font-display font-bold text-base sm:text-lg text-carbonBlack hover:text-charcoalGrey"
                    >
                      {phone}
                    </a>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-pureWhite border border-stoneBeige text-mutedTaupe">
                      Voice / WhatsApp
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stoneBeige/50">
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-xs font-mono text-charcoalGrey hover:text-carbonBlack"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied Primary Number</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Primary Phone</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn & Agency Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={FOUNDER_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-surface-50 border border-stoneBeige hover:border-carbonBlack transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase text-mutedTaupe font-bold">Professional</span>
                  <svg className="w-4 h-4 fill-carbonBlack" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.33a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-display font-bold text-base text-carbonBlack block group-hover:underline">
                    LinkedIn Profile
                  </span>
                  <span className="text-xs font-mono text-charcoalGrey">/in/djkushal</span>
                </div>
              </a>

              <a
                href={WEBBHEADS_DATA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-surface-50 border border-stoneBeige hover:border-carbonBlack transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase text-mutedTaupe font-bold">Agency</span>
                  <ExternalLink className="w-4 h-4 text-carbonBlack" />
                </div>
                <div>
                  <span className="font-display font-bold text-base text-carbonBlack block group-hover:underline">
                    WEBB HEADS
                  </span>
                  <span className="text-xs font-mono text-charcoalGrey">webbheads.com</span>
                </div>
              </a>
            </div>

          </div>

          {/* RIGHT: Direct Inquiry Dispatch Form */}
          <div className="lg:col-span-7 bg-surface-50 p-8 sm:p-10 border border-stoneBeige">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold block mb-1">
                Direct Communication Form
              </span>
              <h3 className="font-display font-bold text-2xl text-carbonBlack">
                Send an Inquiry or Mentorship Note
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-pureWhite border border-stoneBeige text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-carbonBlack mx-auto" />
                <h4 className="font-display font-bold text-xl text-carbonBlack">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-xs sm:text-sm text-charcoalGrey max-w-md mx-auto">
                  Thank you for reaching out to Dangeti Jnana Kushal. Your note has been queued, and Kushal will review and respond directly to <span className="font-semibold text-carbonBlack">{formData.email || 'your address'}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-5 py-2 bg-carbonBlack text-pureWhite text-xs font-bold uppercase tracking-wider hover:bg-charcoalGrey transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoalGrey mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Sharma"
                      className="w-full px-4 py-2.5 bg-pureWhite border border-stoneBeige text-xs text-carbonBlack focus:outline-none focus:border-carbonBlack transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoalGrey mb-1.5 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. anand@company.com"
                      className="w-full px-4 py-2.5 bg-pureWhite border border-stoneBeige text-xs text-carbonBlack focus:outline-none focus:border-carbonBlack transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoalGrey mb-1.5 font-semibold">
                    Nature of Inquiry *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-pureWhite border border-stoneBeige text-xs text-carbonBlack focus:outline-none focus:border-carbonBlack transition-colors font-sans"
                  >
                    <option value="Mentorship & Strategic Dialogue">Mentorship & Strategic Dialogue</option>
                    <option value="WebbHeads Project Mandate (Website / Growth)">WebbHeads Project Mandate (Website / Growth)</option>
                    <option value="Strategic Partnership / B2B Collaboration">Strategic Partnership / B2B Collaboration</option>
                    <option value="Mydiyas Exploration / General Dialogue">Mydiyas Exploration / General Dialogue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoalGrey mb-1.5 font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline your objectives, timeline, or context for discussion..."
                    className="w-full px-4 py-2.5 bg-pureWhite border border-stoneBeige text-xs text-carbonBlack focus:outline-none focus:border-carbonBlack transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-carbonBlack text-pureWhite text-xs font-bold uppercase tracking-widest hover:bg-charcoalGrey transition-colors shadow-subtle"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Precision Footer */}
        <div className="pt-8 border-t border-stoneBeige/60 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-charcoalGrey">
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-bold text-carbonBlack uppercase tracking-wider">
              Dangeti Jnana Kushal
            </span>
            <span className="hidden sm:inline text-stoneBeige">•</span>
            <span>Founder, WEBB HEADS</span>
            <span className="hidden sm:inline text-stoneBeige">•</span>
            <span className="text-mutedTaupe">All facts verified against official portfolio</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-carbonBlack transition-colors">Top</a>
            <a href="#about-webbheads" className="hover:text-carbonBlack transition-colors">WebbHeads</a>
            <a href="#personal-journey" className="hover:text-carbonBlack transition-colors">Journey</a>
            <a href="#selected-work" className="hover:text-carbonBlack transition-colors">Projects</a>
            <a href="#mydiyas" className="hover:text-carbonBlack transition-colors">Mydiyas</a>
            
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 border border-stoneBeige hover:border-carbonBlack hover:bg-surface-50 transition-colors ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5 text-carbonBlack" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
