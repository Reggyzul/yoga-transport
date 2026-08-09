import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { motion } from 'motion/react';
import { Calendar, Users, Settings, Fuel, MapPin, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  limit?: number;
  onViewMore?: () => void;
}

export default function CarList({ onSelectCar, lang, limit, onViewMore }: CarListProps) {
  const [showAll, setShowAll] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleWhatsAppDirect = (carName: string) => {
    const waNumber = '628813305066';
    const message = `Halo Yoga Transport, saya ingin memesan unit rental mobil ${carName}. Mohon informasi ketersediaan tanggal dan tarifnya.`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const displayedCars = limit && !showAll ? CARS.slice(0, limit) : CARS;

  const handleMoreClick = () => {
    if (onViewMore) {
      onViewMore();
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="cars" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4" id="cars-heading">
          <span className="font-display font-bold text-sm text-luxury-gold tracking-widest uppercase">
            {t.cars_tag}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {t.cars_title}
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.cars_desc}
          </p>
        </div>

        {/* Cars Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="cars-grid"
        >
          {displayedCars.map((car, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={car.id}
              className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden"
              id={`car-card-${car.id}`}
            >
              {/* Image and Price Overlay Badge */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Price overlay badge on Top Right */}
                <div className="absolute top-4 right-0 bg-[#2563eb] text-white px-4 py-1.5 rounded-l-full rounded-r-none font-display font-bold text-xs shadow-md">
                  {car.pricePerDay > 0 ? `Mulai Rp ${car.pricePerDay.toLocaleString('id-ID')}` : 'Hubungi Kontak'}
                </div>

                {/* Trust Rating Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="text-yellow-500 font-bold text-xs">★</span>
                  <span className="font-display font-bold text-xs text-gray-900">{car.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 flex flex-col flex-grow space-y-4 text-left">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 group-hover:text-luxury-gold transition-colors leading-snug">
                    {car.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed pt-1.5">
                    {car.description}
                  </p>
                </div>

                {/* Specs Specifications List with icons */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-500 text-xs py-2 border-t border-b border-gray-50">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>{car.seats} {t.cars_seats}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings className="w-4 h-4 text-gray-400" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>Malang & Batu</span>
                  </div>
                </div>

                {/* Inclusions summary */}
                <div className="space-y-2">
                  <p className="font-display font-bold text-[10px] uppercase tracking-wider text-gray-400">
                    {t.cars_included_label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {car.includeList.map((inc, i) => (
                      <span 
                        key={i} 
                        className="font-sans font-semibold text-[10px] text-luxury-gold bg-blue-50/50 px-2.5 py-1 rounded-full border border-blue-100/30"
                      >
                        {inc}
                      </span>
                    ))}
                    <span className="font-sans font-semibold text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {t.cars_driver_friendly}
                    </span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 mt-auto border-t border-gray-100 flex items-center gap-3">
                  <button
                    onClick={() => onSelectCar(car)}
                    className="flex-grow bg-[#2563eb] hover:bg-blue-700 text-white font-display font-bold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id={`car-booking-btn-${car.id}`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{lang === 'EN' ? 'View Details' : 'Pesan Sekarang'}</span>
                  </button>

                  {/* WhatsApp Direct Green button next to it */}
                  <button
                    onClick={() => handleWhatsAppDirect(car.name)}
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-sm shrink-0"
                    title="Pesan via WhatsApp"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple "Selengkapnya" button with down arrow icon */}
        {limit && CARS.length > limit && !showAll && (
          <div className="mt-12 text-center flex justify-center">
            <button
              onClick={handleMoreClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-gray-200/80 hover:border-[#2563eb] text-gray-700 hover:text-[#2563eb] font-display font-semibold text-sm rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <span>{lang === 'EN' ? 'See More Fleets' : 'Selengkapnya'}</span>
              <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#2563eb] transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
