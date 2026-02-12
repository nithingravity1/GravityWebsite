import { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Balatro from './components/Balatro';

import ExperienceCard from './components/ExperienceCard';
import logoGravity from './assets/logo-gravity.svg';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    // Ensure elements are invisible initially to avoid flashes
    gsap.set([navRef.current, labelRef.current, line1Ref.current, line2Ref.current, subtextRef.current, buttonRef.current], { opacity: 0 });

    tl.fromTo(labelRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    )
      .fromTo(line1Ref.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(line2Ref.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1.2"
      )
      .fromTo(subtextRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1.2"
      )
      .fromTo(buttonRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
        "-=1.0"
      )
      .fromTo(navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1.0"
      );

    // Ambient background animation
    // Blob 1 - Organic wandering
    gsap.to(blob1Ref.current, {
      x: 400,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(blob1Ref.current, {
      y: -300,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(blob1Ref.current, {
      scale: 1.5,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Blob 2 - Organic wandering
    gsap.to(blob2Ref.current, {
      x: -300,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });
    gsap.to(blob2Ref.current, {
      y: 200,
      duration: 28,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });
    gsap.to(blob2Ref.current, {
      scale: 1.3,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Blob 3 - Organic wandering
    gsap.to(blob3Ref.current, {
      x: 250,
      duration: 24,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });
    gsap.to(blob3Ref.current, {
      y: 250,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5
    });
    gsap.to(blob3Ref.current, {
      scale: 0.8,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#162325] text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img src={logoGravity} alt="Gravity One" className="h-8 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-300 hover:text-white transition-colors font-medium">Products</a>
              <a href="#impact" className="text-gray-300 hover:text-white transition-colors font-medium">Impact</a>
              <a href="#ilab" className="text-gray-300 hover:text-white transition-colors font-medium">iLab</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact</a>
            </div>
            <div className="hidden md:flex">
              <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-medium transition-all transform hover:scale-105 backdrop-blur-md cursor-pointer">
                Get Started
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-gray-300 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#162325] border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Products</a>
              <a href="#impact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Impact</a>
              <a href="#ilab" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">iLab</a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">About</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background Effect */}
        <div className="absolute inset-0 z-0">
          <Balatro
            isRotate={false}
            mouseInteraction={false}
            pixelFilter={4000}
            color1="#3B82F6"
            color2="#1e3a8a"
            color3="#020617"
          />
          {/* Overlay gradient removed */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#006BB4] to-transparent opacity-50"></div>
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#162325] z-10 pointer-events-none"></div> */}
        </div>

        {/* Dark shade behind text */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-black/60 blur-[100px] rounded-full"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
          <div ref={labelRef} className="flex items-center justify-center gap-3 text-[#006BB4] font-semibold tracking-[0.2em] uppercase mb-4 opacity-0 text-sm md:text-base">
            <span className="w-2 h-2 rounded-full bg-[#006BB4]"></span> GRAVITY ONE
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[1.2] tracking-tight mb-6 py-2">
            <span ref={line1Ref} className="block text-white drop-shadow-lg transform translate-y-10 opacity-0">Empowering leaders</span>
            <span ref={line2Ref} className="block italic bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#fff] to-[#006BB4] drop-shadow-lg pb-1 transform translate-y-10 opacity-0">
              through AI
            </span>
          </h1>
          <p ref={subtextRef} className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 drop-shadow-md tracking-wide transform translate-y-8 opacity-0">
            Seamlessly integrate advanced visualization into your workflow.
            Powerful, responsive, and beautifully designed.
          </p>
          <div ref={buttonRef} className="mt-10 flex justify-center gap-6 transform scale-90 opacity-0">
            <button className="px-8 py-3 bg-[#006BB4] hover:bg-[#005a96] text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,107,180,0.6)] border border-transparent cursor-pointer">
              Explore our platform
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        className="relative z-10 py-24 bg-black border-t border-[#006BB4]/30 overflow-hidden group"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const overlay = document.getElementById('mouse-light-overlay');
          if (overlay) {
            overlay.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.4), transparent 50%)`;
          }
        }}
      >
        <div id="mouse-light-overlay" className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"></div>

        {/* Ambient Lights */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div ref={blob1Ref} className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#006BB4]/20 rounded-full blur-[100px]"></div>
          <div ref={blob2Ref} className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/20 rounded-full blur-[100px]"></div>
          <div ref={blob3Ref} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1e3a8a]/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Part */}
          <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12">
            <div className="md:w-3/5">
              <h4 className="text-gray-500 font-semibold tracking-wider mb-2 text-sm uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#006BB4]"></span> INTRODUCTION
              </h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                ORCHESTRATE, <br />
                MOBILISE, DELIVER
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                GravityONE is the world's first and only platform company dedicated to transforming the way
                executive leaders and boards orchestrate strategy.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We build products for executive leadership, designed to simplify complexity, enhance decision-making, and drive impact.
              </p>
              <button className="px-8 py-3 bg-[#006BB4] hover:bg-[#005a96] text-white rounded-full font-semibold transition-all shadow-[0_4px_14px_0_rgba(0,107,180,0.39)] hover:shadow-[0_6px_20px_rgba(0,107,180,0.23)] hover:-translate-y-1 cursor-pointer">
                Learn More
              </button>
            </div>
            {/* Visual Decoration */}
            <div className="md:w-2/5 flex justify-center items-center relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#006BB4] blur-[100px] opacity-40 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Abstract representation since we don't have the 3D asset */}
                <div className="w-40 h-40 rounded-full border border-white/10 backdrop-blur-sm bg-white/5"></div>
                <div className="absolute w-32 h-32 rounded-full border border-white/20 backdrop-blur-md bg-white/10 transform translate-x-4 -translate-y-4"></div>
              </div>
            </div>
          </div>

          {/* Stats Part */}
          <div>
            <h4 className="text-[#006BB4] font-semibold text-lg mb-8">Our experience</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <ExperienceCard
                number="1000+"
                title="leaders and executives"
                description="trust us to drive measurable success"
              />
              {/* Card 2 */}
              <ExperienceCard
                number="120+"
                title="large enterprises"
                description="partnered with to achieve strategic success"
              />
              {/* Card 3 */}
              <ExperienceCard
                number="150+"
                title="proven scenarios"
                description="making it the richest such library globally"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-[#0a1012] border-t border-[#006BB4]/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <span className="text-2xl font-bold text-white">Gravity One</span>
            <p className="text-gray-500 text-sm mt-1 ml-4">© 2026 Gravity One Inc. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#DE443B] transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-[#DE443B] transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-[#DE443B] transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
