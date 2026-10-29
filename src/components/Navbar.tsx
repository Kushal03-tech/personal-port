import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Mail, Phone } from 'lucide-react';
import { FOUNDER_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About WebbHeads", href: "#about-webbheads", index: "01" },
    { label: "Founder Journey", href: "#personal-journey", index: "02" },
    { label: "Selected Work", href: "#selected-work", index: "03" },
    { label: "Mydiyas / Future", href: "#mydiyas", index: "04" },
    { label: "Contact", href: "#contact", index: "05" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-pureWhite/95 backdrop-blur-md border-b border-stoneBeige/60 shadow-subtle py-3' 
          : 'bg-pureWhite border-b border-stoneBeige/40 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Brand identity */}
        <a href="#" className="group flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm sm:text-base tracking-wider uppercase text-carbonBlack group-hover:text-charcoalGrey transition-colors">
              Dangeti Jnana Kushal
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-carbonBlack"></span>
          </div>
          <span className="text-[11px] font-mono tracking-widest uppercase text-charcoalGrey/80 font-medium">
            Founder, WEBB HEADS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-charcoalGrey hover:text-carbonBlack flex items-center gap-1.5 py-1 transition-colors relative group"
            >
              <span className="text-[10px] font-mono text-mutedTaupe group-hover:text-carbonBlack transition-colors">
                {item.index}
              </span>
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-carbonBlack transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-carbonBlack text-xs font-semibold tracking-wider uppercase text-carbonBlack hover:bg-carbonBlack hover:text-pureWhite transition-all"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-carbonBlack hover:bg-warmIvory/50 border border-stoneBeige"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-pureWhite border-b border-stoneBeige shadow-card p-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 border-b border-stoneBeige/40 text-sm font-medium text-carbonBlack hover:text-charcoalGrey"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-mutedTaupe">{item.index}</span>
              </a>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-carbonBlack text-pureWhite text-xs font-semibold uppercase tracking-wider hover:bg-charcoalGrey transition-colors"
              >
                Get in Touch
              </a>
              <div className="flex items-center justify-between text-xs text-charcoalGrey pt-2 font-mono">
                <a href={`mailto:${FOUNDER_DATA.contact.email}`} className="flex items-center gap-1.5 hover:text-carbonBlack">
                  <Mail className="w-3.5 h-3.5" /> {FOUNDER_DATA.contact.email}
                </a>
                <a href={`tel:${FOUNDER_DATA.contact.phones[0]}`} className="flex items-center gap-1.5 hover:text-carbonBlack">
                  <Phone className="w-3.5 h-3.5" /> {FOUNDER_DATA.contact.phones[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
