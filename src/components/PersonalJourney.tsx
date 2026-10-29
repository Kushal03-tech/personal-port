import React from 'react';
import { ExternalLink, Lightbulb } from 'lucide-react';
import { PERSONAL_MILESTONES, FOUNDER_DATA } from '../data/portfolioData';

export const PersonalJourney: React.FC = () => {
  return (
    <section id="personal-journey" className="py-20 lg:py-32 bg-pureWhite border-b border-stoneBeige/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-stoneBeige mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-3">
            <span className="w-2 h-2 bg-carbonBlack"></span>
            <span>Section 03 — Chronological Evolution</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-carbonBlack tracking-tight">
                Kushal's Personal Growth Journey
              </h2>
              <p className="text-sm sm:text-base text-charcoalGrey mt-3 max-w-2xl font-normal leading-relaxed">
                From early student experimentation to independent website execution, frontline sales internships, and founding WEBB HEADS — a real-world progression grounded in experimentation, unit economics, and client delivery.
              </p>
            </div>
            <div className="text-xs font-mono text-mutedTaupe">
              <span>6 CHRONOLOGICAL STEPS // FOUNDER EVOLUTION</span>
            </div>
          </div>
        </div>

        {/* Chronological Timeline Grid */}
        <div className="relative mb-24">
          {/* Vertical subtle center line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-stoneBeige -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {PERSONAL_MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.number}
                  className={`relative flex flex-col lg:flex-row items-stretch ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node for Timeline */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-pureWhite border-2 border-carbonBlack items-center justify-center text-xs font-mono font-bold text-carbonBlack shadow-subtle">
                    {item.number}
                  </div>

                  {/* Content Card (Half width on desktop) */}
                  <div className="lg:w-1/2 lg:px-10">
                    <div className="bg-surface-50 p-7 sm:p-8 border border-stoneBeige hover:border-carbonBlack transition-all hover:shadow-card group">
                      
                      {/* Top Meta info */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-stoneBeige/50">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 bg-warmIvory text-carbonBlack">
                            MILESTONE {item.number}
                          </span>
                          {item.timeframe && (
                            <span className="text-xs font-mono text-mutedTaupe">
                              • {item.timeframe}
                            </span>
                          )}
                        </div>

                        {item.stats && (
                          <div className="text-right">
                            <span className="text-sm font-bold font-mono text-carbonBlack block">
                              {item.stats.value}
                            </span>
                            <span className="text-[10px] font-mono text-charcoalGrey">
                              {item.stats.label}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-carbonBlack mb-1 group-hover:text-charcoalGrey transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-mono text-charcoalGrey/80 mb-4 font-medium">
                        {item.subtitle}
                      </div>

                      {/* Main Narrative */}
                      <p className="text-xs sm:text-sm text-charcoalGrey leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>

                      {/* Key Lessons / Insights */}
                      <div className="pt-4 border-t border-stoneBeige/60">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-mutedTaupe font-bold block mb-2.5">
                          Ground Realities & Takeaways
                        </span>
                        <ul className="space-y-2 mb-4">
                          {item.lessons.map((lesson, lIdx) => (
                            <li key={lIdx} className="text-xs text-carbonBlack flex items-start gap-2 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-carbonBlack mt-1.5 shrink-0"></span>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>

                        {item.link && (
                          <div className="pt-2">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-carbonBlack hover:underline"
                            >
                              <span>{item.linkLabel || "View Reference"}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Empty placeholder space for alignment on desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Callout: What Early Ventures Taught Me */}
        <div className="p-8 sm:p-12 bg-warmIvory/40 border border-stoneBeige">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-2">
              <Lightbulb className="w-4 h-4 text-carbonBlack" />
              <span>Core Principles</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbonBlack">
              What the Early Ventures Taught Me
            </h3>
            <p className="text-sm text-charcoalGrey mt-2">
              Non-negotiable operational truths derived through direct commercial exposure rather than textbook theory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOUNDER_DATA.principles.map((pr, idx) => (
              <div
                key={pr.title}
                className="p-6 bg-pureWhite border border-stoneBeige flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-mutedTaupe uppercase font-bold">
                      Principle 0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-carbonBlack"></span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-carbonBlack mb-2">
                    {pr.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoalGrey italic leading-relaxed">
                    "{pr.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
