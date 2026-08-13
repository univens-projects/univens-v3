import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsStrip } from './components/ClientsStrip';
import { AboutSection } from './components/AboutSection';
import { SolutionsSection } from './components/SolutionsSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { FAQSection } from './components/FAQSection';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SearchModal } from './components/SearchModal';
import { GauravChatDrawer } from './components/GauravChatDrawer';
import { FloatingChatWidget } from './components/FloatingChatWidget';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [gauravOpen, setGauravOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white antialiased">
      {/* Primary Navigation */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenGaurav={() => setGauravOpen(true)}
        onOpenContact={() => setBookingOpen(true)}
      />

      {/* Main Page Layout */}
      <main>
        <Hero
          onOpenBooking={() => setBookingOpen(true)}
          onOpenGaurav={() => setGauravOpen(true)}
        />
        
        <ClientsStrip />
        
        <AboutSection />
        
        <SolutionsSection
          onOpenBooking={() => setBookingOpen(true)}
        />
        
        <HowWeWorkSection
          onOpenBooking={() => setBookingOpen(true)}
        />
        
        <CaseStudiesSection
          onOpenBooking={() => setBookingOpen(true)}
        />
        
        <ExpertiseSection />
        
        <FAQSection />
        
        <ClosingCTA
          onOpenBooking={() => setBookingOpen(true)}
          onOpenGaurav={() => setGauravOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Modals & Drawers */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onOpenGaurav={() => setGauravOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      <GauravChatDrawer
        isOpen={gauravOpen}
        onClose={() => setGauravOpen(false)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Floating Chatbot Widget */}
      <FloatingChatWidget
        onOpenGaurav={() => setGauravOpen(true)}
        isOpen={gauravOpen}
      />
    </div>
  );
}
