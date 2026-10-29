import React from 'react';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';
import { WEBBHEADS_DATA } from '../data/portfolioData';

export const AboutWebbHeads: React.FC = () => {
  return (
    <section id="about-webbheads" className="py-20 lg:py-28 bg-surface-50 border-b border-stoneBeige/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stoneBeige mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-3">
              <span className="w-2 h-2 bg-carbonBlack"></span>
              <span>Section 02 — The Agency Platform</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-carbonBlack tracking-tight">
              About WEBB HEADS
            </h2>
            <p className="text-sm sm:text-base font-mono text-charcoalGrey mt-2">
              webbheads.com • Marketing + Technology
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WEBBHEADS_DATA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-pureWhite border border-carbonBlack text-xs font-bold uppercase tracking-wider text-carbonBlack hover:bg-carbonBlack hover:text-pureWhite transition-all"
            >
              <span>Visit Official Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Agency Identity & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Summary Box */}
          <div className="lg:col-span-5 bg-warmIvory/40 p-8 sm:p-10 border border-stoneBeige flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-carbonBlack font-bold mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-carbonBlack" />
                <span>What We Do</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbonBlack mb-4 leading-snug">
                {WEBBHEADS_DATA.coreMission}
              </h3>
              <p className="text-sm sm:text-base text-charcoalGrey leading-relaxed mb-6 font-normal">
                {WEBBHEADS_DATA.overview}
              </p>
            </div>

            <div className="pt-6 border-t border-stoneBeige/70">
              <div className="text-xs font-mono uppercase tracking-wider text-carbonBlack font-bold mb-3">
                Cross-Industry Execution Footprint
              </div>
              <div className="flex flex-wrap gap-2">
                {WEBBHEADS_DATA.crossIndustryExposure.map((ind) => (
                  <span
                    key={ind}
                    className="text-xs font-mono bg-pureWhite px-3 py-1.5 border border-stoneBeige text-carbonBlack"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Framework Explanation: How the Services Connect */}
          <div className="lg:col-span-7 bg-pureWhite p-8 sm:p-10 border border-stoneBeige flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-mutedTaupe font-bold block mb-2">
                Unified Operating Engine
              </span>
              <h3 className="font-display font-bold text-2xl text-carbonBlack mb-4">
                How Our Services Connect to Deliver Growth
              </h3>
              <p className="text-sm text-charcoalGrey leading-relaxed mb-8">
                Rather than treating web development, creative content, and marketing distribution as siloed efforts, WebbHeads unifies them into a coherent digital operating engine. A strong digital presence requires a conversion-optimised website as the anchor, high-retention storytelling to capture attention, organic social distribution to scale reach, and technology workflows to automate customer capture.
              </p>

              {/* Strategic Workflow Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-surface-50 border border-stoneBeige mb-8">
                <div className="border-l-2 border-carbonBlack pl-4 py-1">
                  <span className="text-[11px] font-mono text-mutedTaupe uppercase block">Step 01 / Identity</span>
                  <span className="text-sm font-bold text-carbonBlack block mt-0.5">Website & Brand</span>
                  <span className="text-xs text-charcoalGrey mt-1 block">Establish digital authority and trust.</span>
                </div>

                <div className="border-l-2 border-stoneBeige pl-4 py-1">
                  <span className="text-[11px] font-mono text-mutedTaupe uppercase block">Step 02 / Distribution</span>
                  <span className="text-sm font-bold text-carbonBlack block mt-0.5">Content & Social</span>
                  <span className="text-xs text-charcoalGrey mt-1 block">Organic audience engagement & reels.</span>
                </div>

                <div className="border-l-2 border-stoneBeige pl-4 py-1">
                  <span className="text-[11px] font-mono text-mutedTaupe uppercase block">Step 03 / Conversion</span>
                  <span className="text-sm font-bold text-carbonBlack block mt-0.5">Growth & Technology</span>
                  <span className="text-xs text-charcoalGrey mt-1 block">Turn visibility into commercial sales.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stoneBeige/50 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-charcoalGrey">
                Headquartered in India • Operating Across Multiple Verticals
              </span>
              <a
                href="#selected-work"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-carbonBlack hover:underline uppercase tracking-wider"
              >
                <span>View Client Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
