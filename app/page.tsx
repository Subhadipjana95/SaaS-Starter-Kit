import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/ui/SectionDivider';
import Showcase from '@/components/Showcase';



const Page = () => {

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <main className="relative z-10 min-h-screen w-full py-12 pt-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col border-x">
          <Hero />
          <SectionDivider className="h-16" />
          <Showcase />
          <SectionDivider className="h-16" />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Page

