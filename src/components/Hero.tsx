import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onRentClick: () => void;
  lang: 'ID' | 'EN';
}

export default function Hero({ onRentClick, lang }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const slides = [
    {
      id: 'bromo',
      title: lang === 'EN' ? 'EXPLORE THE BEAUTY OF BROMO' : 'JELAJAHI PESONA BROMO',
      subtitle: lang === 'EN' 
        ? 'Enjoy an unforgettable golden sunrise moment with our premium tour packages.'
        : 'Nikmati momen golden sunrise tak terlupakan dengan paket wisata premium kami.',
      image: '/tours_bromo.jpg',
      waMsg: 'Halo Yoga Transport, saya ingin konsultasi gratis mengenai paket wisata Bromo.'
    },
    {
      id: 'malang-batu',
      title: lang === 'EN' ? 'DISCOVER MALANG & BATU' : 'EKSPLORASI MALANG & BATU',
      subtitle: lang === 'EN'
        ? 'Best private holiday experience in Batu city theme parks and natural wonders.'
        : 'Pengalaman liburan privat terbaik keliling destinasi populer Malang dan Kota Batu.',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1600',
      waMsg: 'Halo Yoga Transport, saya ingin bertanya tentang paket wisata Malang & Batu.'
    },
    {
      id: 'tumpak-sewu',
      title: lang === 'EN' ? 'MAGNIFICENT TUMPAK SEWU' : 'KEINDAHAN TUMPAK SEWU',
      subtitle: lang === 'EN'
        ? 'Adventure to the Niagara of Indonesia with our professional local guides.'
        : 'Petualangan seru menuju Niagara-nya Indonesia dengan panduan driver berpengalaman.',
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=1600',
      waMsg: 'Halo Yoga Transport, saya tertarik dengan trip Tumpak Sewu.'
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentSlideIndex];

  const handleConsultation = () => {
    const waNumber = '628813305066';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(currentSlide.waMsg)}`, '_blank', 'noreferrer');
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-950 font-sans pt-36 sm:pt-44 pb-16 sm:pb-24"
    >
      {/* Background Image Carousel Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay Gradient matching screenshot */}
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-90" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area - Generous Top Padding so Nav Header never overlaps */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto flex flex-col items-center justify-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 sm:space-y-6 max-w-4xl"
          >
            {/* Elegant Large Serif Title matching screenshot */}
            <h1 className="font-['Playfair_Display',Georgia,serif] text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wider text-white drop-shadow-md leading-[1.2] px-2">
              {currentSlide.title}
            </h1>

            {/* Subtitle text */}
            <p className="font-sans text-gray-200 text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm px-4">
              {currentSlide.subtitle}
            </p>

            {/* KONSULTASI GRATIS Outline Gold CTA Button */}
            <div className="pt-2 sm:pt-4 flex justify-center">
              <button
                onClick={handleConsultation}
                className="px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-[#f59e0b] hover:bg-[#f59e0b] hover:text-gray-950 text-[#f59e0b] font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 rounded-sm shadow-xl cursor-pointer bg-black/30 backdrop-blur-xs"
              >
                {lang === 'EN' ? 'FREE CONSULTATION' : 'KONSULTASI GRATIS'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Golden Indicator Line */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentSlideIndex ? 'w-12 bg-[#f59e0b]' : 'w-3 bg-white/40 hover:bg-white/70'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Navigation Arrow Left */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full text-white/70 hover:text-white bg-black/30 hover:bg-black/60 transition-all cursor-pointer backdrop-blur-sm hidden sm:flex"
        title="Previous Slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Navigation Arrow Right */}
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full text-white/70 hover:text-white bg-black/30 hover:bg-black/60 transition-all cursor-pointer backdrop-blur-sm hidden sm:flex"
        title="Next Slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

    </section>
  );
}
