import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/ui/SectionDivider';
import Showcase from '@/components/Showcase';
import Networks from '@/components/Networks';



const Page = () => {

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <main className="relative z-10 min-h-screen w-full sm:py-12 sm:pt-16">
        <div className="mx-auto flex w-full max-w-88 md:max-w-6xl flex-col border-x">
          <Hero />
          <SectionDivider />
          <Showcase />
          <SectionDivider />
          <Networks />
          <SectionDivider />
        </div>
      </main>
    </div>
  )
}

export default Page

