// import { FlipWords } from '@/components/ui/flip-words';
// import React from 'react';

// const BlogHead: React.FC = () => {
  // const words = ["Tech", "AI", "Startups"];

//   return (
// <section className="pt-20 text-center font-satoshi my-10 max-w-4xl mx-auto px-4">
//   <a
//     href="/"
//     className="fixed top-4 left-4 z-50 px-3 py-2 text-xs sm:text-sm md:text-base font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md transition-all duration-200"
//   >
//     ← Home
//   </a>

  // <h2 className="text-3xl uppercase font-bold sm:text-4xl flex justify-center items-center gap-2">
  //   <span className="bg-gradient-to-tr from-violet-500 to-purple-500 bg-clip-text text-transparent">
  //     Explore
  //   </span>
  //   <span className="inline-block min-w-[80px] text-green-400">
  //     <FlipWords words={words} />
  //   </span>
  // </h2>

//   <p className="mt-2 text-gray-400 text-base sm:text-lg">
//     Dive into industry news, cutting-edge AI breakthroughs, and emerging tech startups.
//   </p>
// </section>


//   );
// };

// export default BlogHead;

'use client'

import { FlipWords } from '@/components/ui/flip-words';
import React, { useEffect, useState } from 'react'

const BlogHead = () => {
  const [showButton, setShowButton] = useState(true)
    const words = ["Tech", "AI", "Startups"];


  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY) {
        setShowButton(true) // Scrolling up
      } else {
        setShowButton(false) // Scrolling down
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative pt-20 text-center font-satoshi my-6 lg:my-4 max-w-4xl mx-auto px-4">
      {/* Glass effect Home button */}
      <a
        href="/"
        className={`fixed top-4 left-4 z-50 px-4 py-2 text-sm font-semibold rounded-lg
        backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-md transition-all duration-300
        ${showButton ? 'opacity-100' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
      >
        ← Home
      </a>

      {/* Heading */}
     <h2 className="text-3xl uppercase font-bold sm:text-4xl flex justify-center items-center gap-2">
    <span className="bg-gradient-to-tr from-violet-500 to-purple-500 bg-clip-text text-transparent">
      Explore
    </span>
    <span className="inline-block min-w-[80px] text-green-400">
      <FlipWords words={words} />
    </span>
  </h2>

      {/* Subtext */}
      <p className="mt-2 text-gray-400 text-base sm:text-lg">
        Dive into industry news, cutting-edge AI breakthroughs, and emerging tech startups.
      </p>
    </section>
  )
}

export default BlogHead
