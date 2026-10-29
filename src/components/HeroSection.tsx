import React from 'react';
import { ArrowRight, ArrowDown, ExternalLink, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { FOUNDER_DATA, WEBBHEADS_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 lg:pt-36 pb-20 lg:pb-32 bg-pureWhite border-b border-stoneBeige/50 overflow-hidden">
      {/* Subtle background precision grid pattern */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Top Editorial Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-stoneBeige/50">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-carbonBlack"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-carbonBlack font-semibold">
              Section 01 — Founder Portfolio
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-charcoalGrey">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-mutedTaupe" /> {FOUNDER_DATA.location}
            </span>
            <span className="flex items-center gap-1.5 font-medium text-carbonBlack">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Available for Strategic Collaboration & Mentorship
            </span>
          </div>
        </div>

        {/* Two-Column Hero: Left Photo, Right Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Authentic Personal Photograph */}
          <div className="lg:col-span-5 order-1">
            <div className="relative group">
              {/* Refined Frame with Porsche-like Precision Borders */}
              <div className="relative border border-stoneBeige bg-softSand/30 p-2 sm:p-3 shadow-card">
                
                {/* Photo Container */}
                <div className="relative overflow-hidden aspect-[3/4] bg-carbonBlack">
                  <img
                    src={FOUNDER_DATA.heroImage}
                    alt="Dangeti Jnana Kushal — Founder of WEBB HEADS"
                    className="w-full h-full object-cover object-center filter grayscale-[10%] contrast-[105%] group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette at bottom for text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-carbonBlack/85 via-carbonBlack/30 to-transparent pointer-events-none" />
                  
                  {/* Image Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-pureWhite text-xs font-mono">
                    <div>
                      <div className="font-semibold tracking-wide">Dangeti Jnana Kushal</div>
                      <div className="text-[11px] text-warmIvory/90">Founder, WEBB HEADS</div>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-carbonBlack/80 px-2 py-1 border border-white/20">
                      Verified Identity
                    </span>
                  </div>
                </div>

                {/* Technical Metadata Bar below photo */}
                <div className="mt-3 pt-2.5 border-t border-stoneBeige/60 flex items-center justify-between text-[11px] font-mono text-charcoalGrey">
                  <span>REF / DJK-2026</span>
                  <span>EST. AGENCY / 2024</span>
                  <a 
                    href={WEBBHEADS_DATA.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-carbonBlack hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    webbheads.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Decorative Corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-carbonBlack"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-carbonBlack"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-carbonBlack"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-carbonBlack"></div>
            </div>

            {/* Quick Quote / Philosophy below image */}
            <div className="mt-5 p-4 bg-warmIvory/30 border-l-2 border-carbonBlack">
              <p className="text-xs text-charcoalGrey italic leading-relaxed">
                "{FOUNDER_DATA.purpose}"
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Founder Profile, Credentials & Documented Skills */}
          <div className="lg:col-span-7 order-2 flex flex-col justify-between">
            <div>
              {/* Sub-badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-warmIvory/60 border border-stoneBeige text-carbonBlack text-xs font-mono uppercase tracking-widest mb-4">
                <span>Entrepreneur & Executive</span>
                <span className="w-1 h-1 rounded-full bg-carbonBlack"></span>
                <span>B.Tech Graduate</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-carbonBlack tracking-tight leading-[1.08] mb-4">
                Dangeti Jnana Kushal
              </h1>

              {/* Designation & Agency */}
              <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-medium text-charcoalGrey mb-6 font-display">
                <span className="text-carbonBlack font-semibold">{FOUNDER_DATA.role}</span>
                <span className="text-stoneBeige font-light">|</span>
                <span>{FOUNDER_DATA.designation}</span>
              </div>

              {/* Verified Introduction Paragraph */}
              <p className="text-base sm:text-lg text-charcoalGrey leading-relaxed mb-6 font-normal">
                {FOUNDER_DATA.bio}
              </p>

              {/* Current Focus Highlight Block */}
              <div className="p-5 bg-warmIvory/50 border border-stoneBeige mb-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-carbonBlack font-bold mb-2">
                  <span className="w-1.5 h-1.5 bg-carbonBlack"></span>
                  Current Operational Focus
                </div>
                <p className="text-sm sm:text-base text-carbonBlack font-medium leading-relaxed">
                  {FOUNDER_DATA.currentFocus}
                </p>
                <div className="mt-3 pt-3 border-t border-stoneBeige/60 flex flex-wrap items-center justify-between text-xs font-mono text-charcoalGrey">
                  <span>Qualification: {FOUNDER_DATA.education}</span>
                  <span className="font-semibold text-carbonBlack">Founder-Led Agency</span>
                </div>
              </div>

              {/* Documented Skills Section */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-3 flex items-center justify-between">
                  <span>Documented Capabilities & Competencies</span>
                  <span className="text-mutedTaupe font-normal">Derived from Source Portfolio</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {FOUNDER_DATA.documentedSkills.map((skill) => (
                    <div
                      key={skill}
                      className="p-2.5 bg-pureWhite border border-stoneBeige hover:border-carbonBlack transition-colors text-xs flex items-start gap-1.5 group"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-carbonBlack mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-charcoalGrey group-hover:text-carbonBlack leading-tight">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs: 'Explore My Journey', 'View Selected Work', 'Get in Touch' */}
            <div className="pt-6 border-t border-stoneBeige/60">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#personal-journey"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-carbonBlack text-pureWhite text-xs font-bold uppercase tracking-widest hover:bg-charcoalGrey transition-all shadow-subtle group"
                >
                  <span>Explore My Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#selected-work"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-pureWhite text-carbonBlack border border-carbonBlack text-xs font-bold uppercase tracking-widest hover:bg-warmIvory/60 transition-all group"
                >
                  <span>View Selected Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-widest text-charcoalGrey hover:text-carbonBlack border border-stoneBeige hover:border-carbonBlack transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </a>
              </div>

              {/* Direct Reach summary */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-mutedTaupe">
                <span>Email: <a href={`mailto:${FOUNDER_DATA.contact.email}`} className="text-carbonBlack hover:underline">{FOUNDER_DATA.contact.email}</a></span>
                <span>Phone: <a href={`tel:${FOUNDER_DATA.contact.phones[0]}`} className="text-carbonBlack hover:underline">{FOUNDER_DATA.contact.phones[0]}</a></span>
                <span>Direct LinkedIn: <a href={FOUNDER_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-carbonBlack hover:underline">/in/djkushal</a></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
