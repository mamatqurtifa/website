'use client';

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Welcome to
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold">
              SIJA <span className="text-blue-400">BRIGHT</span>
            </h2>
            <h3 className="text-2xl lg:text-4xl font-bold text-gray-200">
              Official Website
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-lg lg:text-xl leading-relaxed">
                Tempat di mana coding, networking, dan kreativitas 
                menyatu. Explore project keren, tutorial, dan fitur seru. 
                We got it all. Let&apos;s build, learn, and vibe together!&quot;
              </p>
              <p className="text-sm lg:text-base font-medium text-blue-300">
                SIJA B&apos;27 - SMK Negeri 2 Depok (STEMBAYO)
              </p>
            </div>
          </div>

          {/* Right Content - Sliding Cards */}
          <div className="relative overflow-hidden">
            <div className="relative h-64 lg:h-80">
              {/* Cards Container */}
              <div className="absolute inset-0 flex items-center">
                <div 
                  className="flex space-x-6 transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 120}px)` }}
                >
                  {/* Generate multiple cards for continuous sliding */}
                  {[...Array(8)].map((_, index) => {
                    const cardIndex = index % 3;
                    const gradients = [
                      'from-blue-600 to-blue-800',
                      'from-blue-500 to-blue-700', 
                      'from-blue-700 to-blue-900'
                    ];
                    
                    return (
                      <div
                        key={index}
                        className={`
                          min-w-[120px] h-48 lg:min-w-[140px] lg:h-60 
                          bg-gradient-to-br ${gradients[cardIndex]} 
                          rounded-3xl shadow-2xl transform hover:scale-105 
                          transition-all duration-300 relative
                        `}
                        style={{
                          opacity: index > 4 ? Math.max(0, 1 - (index - 4) * 0.3) : 1,
                          filter: index > 4 ? `blur(${(index - 4) * 2}px)` : 'none'
                        }}
                      >
                        {/* Optional: Add some content to cards */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Fade overlay for right side */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-950 to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-blue-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-700/50 transition-colors border border-blue-600/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-blue-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-700/50 transition-colors border border-blue-600/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-400' : 'bg-blue-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;