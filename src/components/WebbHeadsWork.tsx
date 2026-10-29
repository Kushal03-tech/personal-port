import React, { useState } from 'react';
import { ExternalLink, Check } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const WebbHeadsWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Featured' | 'Web'>('All');

  const avaniProject = PROJECTS_DATA.find((p) => p.id === 'avani-organics')!;
  const prahariProject = PROJECTS_DATA.find((p) => p.id === 'prahari-realty')!;
  const otherProjects = PROJECTS_DATA.filter((p) => !p.isFeatured);

  return (
    <section id="selected-work" className="py-20 lg:py-32 bg-pureWhite border-b border-stoneBeige/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-stoneBeige mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-3">
            <span className="w-2 h-2 bg-carbonBlack"></span>
            <span>Section 04 — WebbHeads Work Portfolio</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-carbonBlack tracking-tight">
                WebbHeads Client Work Portfolio
              </h2>
              <p className="text-sm sm:text-base text-charcoalGrey mt-3 max-w-2xl font-normal leading-relaxed">
                Documented agency engagements executed across organic food, real estate, clean nanotechnology, community wellness, and state-level event systems.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {(['All', 'Featured', 'Web'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3.5 py-1.5 uppercase tracking-wider transition-all border ${
                    activeFilter === tab
                      ? 'bg-carbonBlack text-pureWhite border-carbonBlack font-semibold'
                      : 'bg-pureWhite text-charcoalGrey border-stoneBeige hover:border-carbonBlack'
                  }`}
                >
                  {tab === 'All' ? 'All 6 Projects' : tab === 'Featured' ? 'Highlights (Avani & Prahari)' : 'Web & Software Engineering'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PROJECT 01: AVANI ORGANICS (Prominent Highlight)              */}
        {/* ============================================================== */}
        {(activeFilter === 'All' || activeFilter === 'Featured') && (
          <div className="mb-20">
            <div className="border border-carbonBlack bg-surface-50 p-6 sm:p-10 lg:p-12 relative shadow-card">
              
              {/* Prominent Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-stoneBeige">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-carbonBlack text-pureWhite text-xs font-mono font-bold uppercase tracking-widest">
                    Featured Project // 01 (Highlight)
                  </span>
                  <span className="text-xs font-mono text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 font-semibold">
                    Completed Engagement
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {avaniProject.link && (
                    <a
                      href={avaniProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-carbonBlack hover:underline uppercase tracking-wider"
                    >
                      <span>{avaniProject.linkLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                <div className="lg:col-span-8">
                  <span className="text-xs font-mono text-mutedTaupe uppercase tracking-widest font-semibold block mb-2">
                    {avaniProject.category}
                  </span>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-carbonBlack mb-4">
                    {avaniProject.name}
                  </h3>
                  <div className="text-sm font-mono text-carbonBlack font-medium mb-4">
                    Scope: {avaniProject.serviceType}
                  </div>
                  <p className="text-sm sm:text-base text-charcoalGrey leading-relaxed font-normal">
                    {avaniProject.description}
                  </p>
                </div>

                {/* Evidence Note Quote */}
                <div className="lg:col-span-4 bg-warmIvory/60 p-5 border border-stoneBeige flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-carbonBlack font-bold block mb-2">
                      Evidence & Reporting Standard
                    </span>
                    <p className="text-xs text-charcoalGrey italic leading-relaxed">
                      "The performance figures are based on reported results. Instagram Insights screenshots and analytics records verify the reach, views, follower change, and reporting period."
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-mutedTaupe mt-4 block">
                    Source: Verified Founder Portfolio PDF
                  </span>
                </div>
              </div>

              {/* Documented Metrics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {avaniProject.outcomes?.map((out) => (
                  <div
                    key={out.label}
                    className="p-6 bg-pureWhite border border-stoneBeige hover:border-carbonBlack transition-colors"
                  >
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-carbonBlack block mb-1">
                      {out.metric}
                    </span>
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-charcoalGrey block mb-1">
                      {out.label}
                    </span>
                    {out.note && (
                      <span className="text-[11px] text-mutedTaupe block">
                        {out.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Real Project Imagery Grid */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-4 flex items-center justify-between">
                  <span>Visual Production & On-Ground Documentation</span>
                  <span className="text-mutedTaupe font-normal">Authentic Field & Reel Assets</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {avaniProject.images?.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="border border-stoneBeige bg-pureWhite p-2 img-hover-zoom group"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-carbonBlack">
                        <img
                          src={imgSrc}
                          alt={`Avani Organics Production Asset ${imgIdx + 1}`}
                          className="w-full h-full object-cover filter contrast-[105%]"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-charcoalGrey truncate">
                        {imgIdx === 0 && "Field Shoot / Founder Consultation"}
                        {imgIdx === 1 && "Organic Vermicompost Feedstock"}
                        {imgIdx === 2 && "Instagram High-Retention Reel 01"}
                        {imgIdx === 3 && "Instagram High-Retention Reel 02"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights List */}
              <div className="pt-6 border-t border-stoneBeige/60">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {avaniProject.highlights?.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-charcoalGrey">
                      <Check className="w-3.5 h-3.5 text-carbonBlack shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PROJECT 02: PRAHARI REALTY (Prominent Highlight)              */}
        {/* ============================================================== */}
        {(activeFilter === 'All' || activeFilter === 'Featured') && (
          <div className="mb-20">
            <div className="border border-carbonBlack bg-surface-50 p-6 sm:p-10 lg:p-12 relative shadow-card">
              
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-stoneBeige">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-carbonBlack text-pureWhite text-xs font-mono font-bold uppercase tracking-widest">
                    Featured Project // 02 (Highlight)
                  </span>
                  <span className="text-xs font-mono text-amber-900 bg-amber-100/70 px-2.5 py-0.5 font-semibold">
                    Ongoing Engagement
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {prahariProject.link && (
                    <a
                      href={prahariProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-carbonBlack hover:underline uppercase tracking-wider"
                    >
                      <span>{prahariProject.linkLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                <div className="lg:col-span-8">
                  <span className="text-xs font-mono text-mutedTaupe uppercase tracking-widest font-semibold block mb-2">
                    {prahariProject.category}
                  </span>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-carbonBlack mb-3">
                    {prahariProject.name}
                  </h3>
                  
                  {/* Instagram Inspiration Channel Callout */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pureWhite border border-stoneBeige text-xs font-mono font-semibold text-carbonBlack mb-4">
                    <svg className="w-3.5 h-3.5 text-rose-600 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/>
                    </svg>
                    <span>Instagram Channel for Content Inspiration: <a href="https://www.instagram.com/prahari_realty/" target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-600">@prahari_realty</a></span>
                  </div>

                  <div className="text-sm font-mono text-carbonBlack font-medium mb-4">
                    Scope: {prahariProject.serviceType}
                  </div>
                  <p className="text-sm sm:text-base text-charcoalGrey leading-relaxed font-normal">
                    {prahariProject.description}
                  </p>
                </div>

                {/* Strategic Objective Quote */}
                <div className="lg:col-span-4 bg-warmIvory/60 p-5 border border-stoneBeige flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-carbonBlack font-bold block mb-2">
                      Strategic Positioning Focus
                    </span>
                    <p className="text-xs text-charcoalGrey italic leading-relaxed">
                      "Building a consistent digital identity and creating educational video content via @prahari_realty that helps prospective buyers and investors understand real estate topics and build genuine trust."
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-mutedTaupe mt-4 block">
                    Source: Verified Founder Portfolio PDF
                  </span>
                </div>
              </div>

              {/* Documented Metrics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {prahariProject.outcomes?.map((out) => (
                  <div
                    key={out.label}
                    className="p-6 bg-pureWhite border border-stoneBeige hover:border-carbonBlack transition-colors"
                  >
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-carbonBlack block mb-1">
                      {out.metric}
                    </span>
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-charcoalGrey block mb-1">
                      {out.label}
                    </span>
                    {out.note && (
                      <span className="text-[11px] text-mutedTaupe block">
                        {out.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Real Video Thumbnails & Creative Architecture */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-4 flex items-center justify-between">
                  <span>Educational Series & Video Assets</span>
                  <span className="text-mutedTaupe font-normal">#decodeORR & Investor Education</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {prahariProject.images?.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="border border-stoneBeige bg-pureWhite p-2 img-hover-zoom group"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-carbonBlack">
                        <img
                          src={imgSrc}
                          alt={`Prahari Realty Video Asset ${imgIdx + 1}`}
                          className="w-full h-full object-cover filter contrast-[105%]"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-charcoalGrey truncate">
                        {imgIdx === 0 && "Video Thumbnail: Notice You First"}
                        {imgIdx === 1 && "Strategy: Digital Dominance"}
                        {imgIdx === 2 && "Infrastructure: CRM & Lead Systems"}
                        {imgIdx === 3 && "Market Context: Differentiation"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights List */}
              <div className="pt-6 border-t border-stoneBeige/60">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {prahariProject.highlights?.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-charcoalGrey">
                      <Check className="w-3.5 h-3.5 text-carbonBlack shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* REMAINING 4 PROJECTS IN EXACT SEQUENCE: 3, 4, 5, 6             */}
        {/* ============================================================== */}
        {(activeFilter === 'All' || activeFilter === 'Web') && (
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-8 flex items-center justify-between">
              <span>Web & Software Client Deliverables</span>
              <span className="text-mutedTaupe font-normal">Sequence: 03. Callotropes → 04. AUM Yoga → 05. Yog Andhra → 06. Veridica</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((proj, pIdx) => (
                <div
                  key={proj.id}
                  className="bg-surface-50 p-7 sm:p-8 border border-stoneBeige hover:border-carbonBlack transition-all hover:shadow-card flex flex-col justify-between group"
                >
                  <div>
                    {/* Status & Index */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-stoneBeige/50 text-xs font-mono">
                      <span className="text-mutedTaupe font-semibold">
                        PROJECT // 0{pIdx + 3}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          proj.status === 'Completed'
                            ? 'bg-pureWhite text-carbonBlack border border-stoneBeige'
                            : 'bg-amber-100/90 text-amber-900 border border-amber-300 font-extrabold'
                        }`}
                      >
                        {proj.status === 'Ongoing' ? 'Ongoing Project' : 'Completed'}
                      </span>
                    </div>

                    {/* Project Name */}
                    <h4 className="font-display font-bold text-2xl text-carbonBlack mb-2 group-hover:text-charcoalGrey transition-colors">
                      {proj.name}
                    </h4>

                    {/* Service Type Tag */}
                    <div className="text-xs font-mono font-medium text-carbonBlack/80 mb-3">
                      {proj.serviceType}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-charcoalGrey leading-relaxed mb-6 font-normal">
                      {proj.description}
                    </p>

                    {/* Highlights bullet points */}
                    {proj.highlights && (
                      <ul className="space-y-2 mb-6">
                        {proj.highlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className="text-xs text-charcoalGrey flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-carbonBlack rounded-full mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Tags at bottom */}
                  <div className="pt-4 border-t border-stoneBeige/50 flex flex-wrap gap-2">
                    {proj.tags.map((tg) => (
                      <span key={tg} className="text-[10px] font-mono bg-pureWhite px-2.5 py-1 border border-stoneBeige text-mutedTaupe">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
