'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ProductsPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialAnimationPlayed, setIsInitialAnimationPlayed] = useState(false);
  const [comingSoonText, setComingSoonText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const totalScroll = scrollHeight - clientHeight;
      const progress = (scrollTop / totalScroll) * 2; // 3 pages, so we multiply by 2
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    if (!isInitialAnimationPlayed) {
      let currentIndex = 0;
      const fullComingSoonText = 'Metro Route Finder App';
      intervalRef.current = setInterval(() => {
        if (currentIndex <= fullComingSoonText.length) {
          setComingSoonText(fullComingSoonText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalRef.current!);
          setIsInitialAnimationPlayed(true);
        }
      }, 100);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isInitialAnimationPlayed]);

  const scrollToSection = (sectionIndex: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  const existingApps = [
    {
      name: 'App 1',
      description: 'This is a description for App 1.',
      icon: '/file.svg',
    },
    {
      name: 'App 2',
      description: 'This is a description for App 2.',
      icon: '/globe.svg',
    },
    {
      name: 'App 3',
      description: 'This is a description for App 3.',
      icon: '/window.svg',
    },
  ];

  const getSection1Styles = (element: 'left' | 'right') => {
    const progress = Math.min(1, Math.max(0, scrollProgress * 3));
    const easedProgress = 1 - Math.pow(1 - progress, 2);
    if (element === 'left') {
      return {
        opacity: isInitialAnimationPlayed ? 1 - easedProgress : 1,
        transform: `translateX(${(easedProgress) * -50}px)`,
      };
    }
    return {
      opacity: isInitialAnimationPlayed ? 1 - easedProgress : 1,
      transform: `translateX(${(easedProgress) * 50}px)`,
    };
  };

  const getSection2Styles = (element: 'left' | 'right') => {
    let opacity = 1;
    let translateX = 0;

    // Animate In (when scrolling from Section 1 to Section 2)
    const progressIn = Math.min(1, Math.max(0, (scrollProgress - 0.67) * 3));
    const easedProgressIn = 1 - Math.pow(1 - progressIn, 2);

    // Animate Out (when scrolling from Section 2 to Section 3)
    const progressOut = Math.min(1, Math.max(0, (scrollProgress - 1.33) * 3));
    const easedProgressOut = 1 - Math.pow(1 - progressOut, 2);

    if (scrollProgress <= 1.33) { // Section 2 is animating in or fully visible
      opacity = easedProgressIn;
      translateX = (1 - easedProgressIn) * (element === 'left' ? -50 : 50);
    } else { // Section 2 is animating out
      opacity = 1 - easedProgressOut;
      translateX = easedProgressOut * (element === 'left' ? -50 : 50);
    }

    return {
      opacity: opacity,
      transform: `translateX(${translateX}px)`,
    };
  };
  
  const getSection3Styles = () => {
    const progress = Math.min(1, Math.max(0, (scrollProgress - 1.67) * 3));
    return {
      opacity: progress,
    };
  };

  return (
    <div ref={containerRef} onScroll={handleScroll} className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* Coming Soon Section 1 */}
      <section className="h-full snap-start flex flex-col md:flex-row items-center justify-center text-center md:text-left relative overflow-hidden">
        <div style={{opacity: 1 - Math.min(1, scrollProgress * 3)}} className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_rgba(255,165,0,0.3)_0%,_transparent_70%)]"></div>
        <div style={getSection1Styles('left')} className="z-10 p-8 md:w-1/2">
          {/* App Name at Top with animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-orange-400 min-h-[96px]">
            {isInitialAnimationPlayed ? 'Metro Route Finder App' : comingSoonText}
            {!isInitialAnimationPlayed && <span>|</span>}
          </h1>
          {/* Description below it */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto md:mx-0 text-gray-300 mb-8">
            Our upcoming Metro Route Finder app will revolutionize your daily commute. Get real-time updates, find the fastest routes, and navigate the metro system like a pro.
          </p>
          
          <a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Coming Soon
          </a>
        </div>
        <div style={getSection1Styles('right')} className="z-10 p-8 md:w-1/4 hidden md:block flex justify-end">
            <Image src="/images/metroComingSoon.png" alt="Metro Coming Soon" width={300} height={600} className="rounded-lg ml-auto" />
        </div>
        <button onClick={() => scrollToSection(1)} className="absolute bottom-24 right-8 bg-orange-600 text-white p-4 rounded-full hover:bg-orange-700 transition-colors duration-300 z-20">
          &darr;
        </button>
      </section>

      {/* Coming Soon Section 2 */}
      <section className="h-full snap-start flex flex-col md:flex-row items-center justify-center text-center md:text-left relative overflow-hidden">
        <div style={{opacity: Math.min(1, Math.max(0, (scrollProgress - 0.67) * 3))}} className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_center,_rgba(128,0,128,0.3)_0%,_transparent_70%)]"></div>
        {/* Image column (left) */}
        <div style={getSection2Styles('left')} className="z-10 p-8 md:w-1/4 hidden md:block flex justify-end">
          <div className="w-full h-64 bg-purple-900 bg-opacity-50 rounded-lg"></div>
        </div>
        {/* Text column (right) */}
        <div style={getSection2Styles('right')} className="z-10 p-8 md:w-1/2">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-purple-400">Coming Soon</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-300">Attendance Tracker App</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto md:mx-0 text-gray-300 mb-8">
              Track attendance with ease. Our new app will help you manage and monitor attendance for your team, students, or events.
            </p>
            <a href="https://www.linkedin.com/company/rediflow-ai/" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Follow us for updates &rarr;
            </a>
        </div>
        
        <button onClick={() => scrollToSection(0)} className="absolute bottom-24 right-24 bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition-colors duration-300 z-20">
          &uarr;
        </button>
        <button onClick={() => scrollToSection(2)} className="absolute bottom-24 right-8 bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition-colors duration-300 z-20">
          &darr;
        </button>
      </section>

      {/* Existing Apps Section */}
      <section className="h-full snap-start flex flex-col items-center justify-center text-center relative">
        <div style={getSection3Styles()} className="w-full max-w-5xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Our Existing Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingApps.map((app, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
                <img src={app.icon} alt={`${app.name} icon`} className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-white">{app.name}</h3>
                <p className="text-gray-400">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => scrollToSection(1)} className="absolute bottom-24 right-8 bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition-colors duration-300 z-20">
          &uarr;
        </button>
      </section>
    </div>
  );
}
