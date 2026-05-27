import React from 'react';
import LandingHero from '@/components/LandingHero';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import WorkProcess from '@/components/WorkProcess';
import Footer from '@/components/Footer';



const Page = () => {

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <LandingHero />

          {/* Features */}
          <Features />

          {/* How it works */}
          <WorkProcess />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Page

