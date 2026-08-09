import React, { useState } from 'react';
import { Clock, Gift, Sparkles, Award } from 'lucide-react';
import { TOUR_PACKAGES, TourPackage } from '../data/tours';
import TourDetailModal from './TourDetailModal';
import { motion } from 'motion/react';

interface ToursListProps {
  lang: 'ID' | 'EN';
}

export default function ToursList({ lang }: ToursListProps) {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  return (
    <section id="tours" className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Screenshot Exactly */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'OUR BEST TOUR PACKAGES' : 'PAKET WISATA TERBAIK KAMI'}
          </h2>
          
          {/* Golden Amber Accent Line */}
          <div className="w-16 h-1 bg-[#f59e0b] rounded-full mx-auto my-4" />
          
          <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
            {lang === 'EN' 
              ? 'Favorite tourist destinations with Standard, Premium, and Platinum package tiers' 
              : 'Destinasi favorit pilihan wisatawan dengan variasi paket Standard, Premium, & Platinum'}
          </p>
        </div>

        {/* 3-Column Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={pkg.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200/80 hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              {/* Image Container & Floating Badge */}
              <div 
                className="relative overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer"
                onClick={() => setSelectedTour(pkg)}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* BEST SELLER Badge on Top Right of Image */}
                {pkg.badge && (
                  <span className="absolute top-4 right-4 bg-[#f59e0b] text-white px-3 py-1 rounded-lg font-display font-extrabold text-xs uppercase shadow-md tracking-wider">
                    {pkg.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow text-left">
                
                {/* Package Title */}
                <h3 
                  onClick={() => setSelectedTour(pkg)}
                  className="font-display font-bold text-xl sm:text-2xl text-gray-900 mb-2 leading-tight group-hover:text-[#d97706] transition-colors cursor-pointer"
                >
                  {lang === 'EN' ? pkg.titleEn || pkg.title : pkg.title}
                </h3>

                {/* Price Subtitle */}
                <p className="font-display font-bold text-base sm:text-lg text-[#d97706] mb-3">
                  {lang === 'EN' ? pkg.priceTextEn || pkg.priceText : pkg.priceText}
                </p>

                {/* Description Text */}
                <p className="font-sans text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {lang === 'EN' ? pkg.descriptionEn || pkg.description : pkg.description}
                </p>

                {/* Package Tier Badge Row */}
                <div className="bg-amber-50/50 rounded-xl p-3 border border-amber-100/80 space-y-1.5 mb-4">
                  <span className="font-display font-bold text-[10px] uppercase text-[#d97706] tracking-wider block">
                    Tersedia 3 Pilihan Kategori:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
                    <span className="bg-white px-2 py-0.5 rounded border border-amber-200 text-gray-700">
                      Standard
                    </span>
                    <span className="bg-amber-100/80 px-2 py-0.5 rounded border border-amber-300 text-[#d97706]">
                      Premium
                    </span>
                    <span className="bg-amber-500 text-white px-2 py-0.5 rounded">
                      Platinum
                    </span>
                  </div>
                </div>

                {/* Divider Line */}
                <hr className="border-t border-gray-200/70 mb-4 mt-auto" />

                {/* Card Footer Row */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold pt-1">
                  
                  {/* Duration on Left with Clock Icon */}
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-[#d97706] shrink-0" />
                    <span>{lang === 'EN' ? pkg.durationEn || pkg.duration : pkg.duration}</span>
                  </div>

                  {/* Detail Paket Link / Button on Right */}
                  <button
                    onClick={() => setSelectedTour(pkg)}
                    className="text-gray-700 hover:text-[#d97706] font-semibold transition-colors cursor-pointer"
                  >
                    {lang === 'EN' ? 'Package Details' : 'Detail Paket'}
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal Component */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        lang={lang}
      />
    </section>
  );
}
