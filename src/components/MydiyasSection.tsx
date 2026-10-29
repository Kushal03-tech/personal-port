import React from 'react';
import { Sparkles, Compass, BookOpen, Brain, MessageSquare, Users2, ShieldAlert } from 'lucide-react';
import { MYDIYAS_DATA } from '../data/portfolioData';

export const MydiyasSection: React.FC = () => {
  const pillarIcons = [Brain, MessageSquare, Compass, Users2];

  return (
    <section id="mydiyas" className="py-20 lg:py-32 bg-surface-100 border-b border-stoneBeige/60 relative overflow-hidden">
      
      {/* Precision grid backdrop */}
      <div className="absolute inset-0 editorial-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-stoneBeige mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-3">
            <span className="w-2 h-2 bg-carbonBlack"></span>
            <span>Section 05 — Future Venture Concept</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-warmIvory border border-stoneBeige text-xs font-mono font-bold uppercase tracking-widest text-carbonBlack mb-3">
                <Sparkles className="w-3.5 h-3.5 text-carbonBlack" />
                <span>{MYDIYAS_DATA.badge}</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-carbonBlack tracking-tight">
                {MYDIYAS_DATA.title}
              </h2>
              <p className="text-lg font-display text-charcoalGrey mt-2 font-medium">
                {MYDIYAS_DATA.conceptHeadline}
              </p>
            </div>

            <div className="bg-pureWhite px-4 py-2.5 border border-stoneBeige text-xs font-mono text-charcoalGrey max-w-sm">
              <span className="font-semibold text-carbonBlack block mb-0.5">Status: In Conceptual Planning</span>
              <span>Envisioned as a hybrid offline/online development ecosystem.</span>
            </div>
          </div>
        </div>

        {/* Narrative Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">
          
          <div className="lg:col-span-6 bg-pureWhite p-8 sm:p-10 border border-stoneBeige relative">
            <span className="text-xs font-mono uppercase tracking-widest text-mutedTaupe font-bold block mb-3">
              Vision & Motivation
            </span>
            <h3 className="font-display font-bold text-2xl text-carbonBlack mb-5 leading-snug">
              Why 21st-Century Skills Matter for the Next Generation
            </h3>
            <p className="text-sm sm:text-base text-charcoalGrey leading-relaxed mb-6 font-normal">
              {MYDIYAS_DATA.description}
            </p>

            <div className="p-4 bg-warmIvory/50 border-l-2 border-carbonBlack text-xs text-charcoalGrey italic leading-relaxed">
              "The aim is to help young people navigate their careers and personal lives with greater clarity, practical execution capability, and emotional grounding."
            </div>
          </div>

          {/* Ecosystem Architecture Breakdown */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-mutedTaupe font-bold block mb-3">
              The Hybrid Model
            </span>
            <h3 className="font-display font-semibold text-2xl text-carbonBlack mb-4">
              Online Asynchronous Masterclasses + Offline Cohort Coaching
            </h3>
            <p className="text-sm text-charcoalGrey leading-relaxed mb-6">
              Conventional education often emphasizes theoretical absorption while neglecting ground execution, persuasive communication, and self-management. Mydiyas bridges this gap through a dual-channel methodology:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-pureWhite border border-stoneBeige">
                <span className="text-[11px] font-mono text-mutedTaupe uppercase block mb-1">Channel A</span>
                <h4 className="font-bold text-sm text-carbonBlack mb-2">Digital Core Curriculum</h4>
                <p className="text-xs text-charcoalGrey leading-relaxed">
                  On-demand modules breaking down mental models, critical thinking, digital tools, and personal systems.
                </p>
              </div>

              <div className="p-5 bg-pureWhite border border-stoneBeige">
                <span className="text-[11px] font-mono text-mutedTaupe uppercase block mb-1">Channel B</span>
                <h4 className="font-bold text-sm text-carbonBlack mb-2">Offline Cohort Studios</h4>
                <p className="text-xs text-charcoalGrey leading-relaxed">
                  High-stakes in-person debates, project simulations, pitch presentations, and structured mentor reviews.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-6 flex items-center justify-between">
            <span>The Four Developmental Pillars</span>
            <span className="text-mutedTaupe font-normal">Curricular Foundation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MYDIYAS_DATA.pillars.map((pil, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <div
                  key={pil.number}
                  className="bg-pureWhite p-6 border border-stoneBeige hover:border-carbonBlack transition-all hover:shadow-card flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-mutedTaupe group-hover:text-carbonBlack transition-colors">
                        PILLAR // {pil.number}
                      </span>
                      <div className="p-2 bg-surface-50 group-hover:bg-warmIvory text-carbonBlack transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-base text-carbonBlack mb-2.5">
                      {pil.title}
                    </h4>

                    <p className="text-xs text-charcoalGrey leading-relaxed">
                      {pil.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Responsible Transparency Disclaimer */}
        <div className="p-4 bg-pureWhite border border-stoneBeige/70 flex items-center gap-3 text-xs font-mono text-charcoalGrey">
          <ShieldAlert className="w-4 h-4 text-mutedTaupe shrink-0" />
          <span>{MYDIYAS_DATA.disclaimer}</span>
        </div>

      </div>
    </section>
  );
};
