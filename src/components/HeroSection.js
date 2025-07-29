"use client";

import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Sample images - you can replace these with your preferred images
  const slideImages = [
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=600&fit=crop&crop=center",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1
                  className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Welcome to
                </h1>
                <h2
                  className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  SIJA{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    BRIGHT
                  </span>
                </h2>
                <h3
                  className="text-3xl lg:text-4xl font-semibold text-slate-300"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Official Website
                </h3>
              </div>

              <div className="space-y-6">
                <p
                  className="text-lg lg:text-xl leading-relaxed text-slate-300 max-w-lg"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Tempat di mana coding, networking, dan kreativitas menyatu.
                  Explore project keren, tutorial, dan fitur seru. We got it
                  all. Let&apos;s build, learn, and vibe together!
                </p>
                <p
                  className="text-base font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  SIJA B&lsquo;27 - SMK Negeri 2 Depok (STEMBAYO)
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/25">
                  Explore Projects
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="flex items-center justify-center">
                    {slideImages.map((image, index) => {
                      const isActive = index === currentSlide;
                      const isNext = index === (currentSlide + 1) % totalSlides;
                      const isPrev =
                        index ===
                        (currentSlide - 1 + totalSlides) % totalSlides;

                      let transform = "translateX(400px) scale(0.8)";
                      let opacity = 0;
                      let zIndex = 1;

                      if (isActive) {
                        transform = "translateX(0px) scale(1)";
                        opacity = 1;
                        zIndex = 10;
                      } else if (isNext) {
                        transform = "translateX(100px) scale(0.9)";
                        opacity = 0.7;
                        zIndex = 5;
                      } else if (isPrev) {
                        transform = "translateX(-100px) scale(0.9)";
                        opacity = 0.7;
                        zIndex = 5;
                      }

                      return (
                        <div
                          key={index}
                          className="absolute transition-all duration-700 ease-out"
                          style={{
                            transform,
                            opacity,
                            zIndex,
                          }}
                        >
                          <div className="w-64 h-80 lg:w-72 lg:h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden border border-slate-700/50 backdrop-blur-sm">
                            <div className="relative h-full">
                              <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute bottom-6 left-6 right-6">
                                <div className="text-white">
                                  <h4 className="font-semibold text-lg mb-2">
                                    {index + 1}
                                  </h4>
                                  <p className="text-sm text-slate-300">
                                    Our memorable moments
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
                  <button
                    onClick={prevSlide}
                    className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-xl group"
                  >
                    <svg
                      className="w-6 h-6 transform group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <div className="flex items-center space-x-3">
                    <div className="w-32 h-0.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-700 ease-out"
                        style={{
                          width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-white/60 text-sm font-medium min-w-[60px]">
                      {String(currentSlide + 1).padStart(2, "0")} /{" "}
                      {String(totalSlides).padStart(2, "0")}
                    </span>
                  </div>

                  <button
                    onClick={nextSlide}
                    className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-xl group"
                  >
                    <svg
                      className="w-6 h-6 transform group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex justify-center space-x-3 mt-12">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      currentSlide === index
                        ? "w-8 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                        : "w-3 h-3 bg-white/30 rounded-full hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-20 w-4 h-4 bg-blue-400/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-cyan-400/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-32 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
      </section>
    </>
  );
};

export default HeroSection;
