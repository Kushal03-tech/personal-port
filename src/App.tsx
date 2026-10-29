import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutWebbHeads } from './components/AboutWebbHeads';
import { PersonalJourney } from './components/PersonalJourney';
import { WebbHeadsWork } from './components/WebbHeadsWork';
import { MydiyasSection } from './components/MydiyasSection';
import { ContactSection } from './components/ContactSection';

export function App() {
  return (
    <div className="min-h-screen bg-pureWhite text-carbonBlack flex flex-col font-sans selection:bg-warmIvory selection:text-carbonBlack">
      {/* Precision Top Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* SECTION 01: Homepage / Hero (Left Photo, Right Intro, Documented Skills, CTAs) */}
        <HeroSection />

        {/* SECTION 02: About WEBB HEADS (webbheads.com, identity, mission, unified workflow) */}
        <AboutWebbHeads />

        {/* SECTION 03: Kushal's Personal Growth Journey (1. Elixir.store -> 2. Sri Chess -> 3. Matrix -> 4. Sunrise -> 5. Wrogx -> 6. WebbHeads) */}
        <PersonalJourney />

        {/* SECTION 04: WebbHeads Work Portfolio (1. Avani Organics -> 2. Prahari Realty -> 3. Callotropes -> 4. AUM Yoga -> 5. Yog Andhra -> 6. Veridica) */}
        <WebbHeadsWork />

        {/* SECTION 05: Mydiyas / Future Venture (21st-century skills development, hybrid learning ecosystem) */}
        <MydiyasSection />

        {/* SECTION 06: Contact / Closing (Verified channels, direct form, footer) */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
