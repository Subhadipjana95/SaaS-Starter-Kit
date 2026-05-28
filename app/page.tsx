import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const Page = () => {

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      {/* Main Content */}
      <main className="relative max-w-6xl min-h-screen z-10 container mx-auto py-12">

        
      </main>
      <Footer />
    </div>
  )
}

export default Page

