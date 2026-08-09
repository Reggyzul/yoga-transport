import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  MapPin, 
  Wifi, 
  Sparkles, 
  Bed, 
  Coffee, 
  Tv, 
  Car, 
  CheckCircle2, 
  MessageSquare,
  ChevronRight,
  Info,
  Calendar
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HomestaySectionProps {
  lang: 'ID' | 'EN';
}

export default function HomestaySection({ lang }: HomestaySectionProps) {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'rja1' | 'rja2'>('rja1');

  const homestays = [
    {
      id: 'rja1',
      name: 'RJA 1 - Jaksa Agung Suprapto',
      shortName: 'RJA 1',
      address: 'Jl. Jaksa Agung Suprapto, Klojen, Kota Malang',
      image: '/rja1.png',
      badge: 'Pusat Kota Malang',
      price: 'Hubungi Admin untuk Tarif',
      description: lang === 'EN'
        ? 'A cozy, aesthetic homestay strategically located in the heart of Malang city center near Jaksa Agung Suprapto main road.'
        : 'Penginapan homestay estetik & nyaman berlokasi sangat strategis di pusat Kota Malang (dekat Jl. Jaksa Agung Suprapto). Cocok untuk liburan keluarga & rombongan.',
      features: [
        lang === 'EN' ? 'Spacious Bedrooms & Clean Beds' : 'Gedung 2 Lantai & Kamar Luas',
        lang === 'EN' ? 'High Speed Wi-Fi & Smart TV' : 'Wi-Fi Cepat & Smart TV',
        lang === 'EN' ? 'Full AC & Hot Water Shower' : 'Full AC & Water Heater Mandi',
        lang === 'EN' ? 'Private Parking Area' : 'Area Parkir Mobil Luas & Aman',
        lang === 'EN' ? 'Kitchen & Dining Tools' : 'Fasilitas Dapur & Alat Makan Complete'
      ],
      waMessage: 'Halo Yoga Transport, saya ingin booking/tanya ketersediaan Penginapan RJA 1 (Jl. Jaksa Agung Suprapto Malang).'
    },
    {
      id: 'rja2',
      name: 'RJA 2 - Tawangmangu',
      shortName: 'RJA 2',
      address: 'Jl. Tawangmangu, Lowokwaru, Kota Malang',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      badge: 'Aesthetic & Cozy',
      price: 'Hubungi Admin untuk Tarif',
      description: lang === 'EN'
        ? 'A stylish pastel modern homestay in Tawangmangu Malang with complete home facilities for private vacations.'
        : 'Penginapan homestay bernuansa pastel modern yang estetik di kawasan Tawangmangu Malang. Lingkungan tenang, bersih, dan nyaman.',
      features: [
        lang === 'EN' ? 'Pastel Aesthetic Interior' : 'Interior Pastel Estetik & Spot Foto',
        lang === 'EN' ? 'High Speed Wi-Fi & Entertainment' : 'Wi-Fi Cepat & TV Hiburan',
        lang === 'EN' ? 'Air Conditioned Rooms' : 'Kamar Nyaman Full AC',
        lang === 'EN' ? 'Car & Motorbike Parking' : 'Parkir Mobil & Sepeda Motor',
        lang === 'EN' ? 'Clean Bathrooms & Toiletries' : 'Kamar Mandi Bersih & Toiletries'
      ],
      waMessage: 'Halo Yoga Transport, saya ingin booking/tanya ketersediaan Penginapan RJA 2 (Jl. Tawangmangu Malang).'
    }
  ];

  const currentHomestay = homestays.find(h => h.id === activeTab) || homestays[0];

  const handleWhatsApp = (msg: string) => {
    const waNumber = '628813305066';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="penginapan" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-luxury-gold tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60 inline-block">
            {lang === 'EN' ? 'RECOMMENDED ACCOMMODATION' : 'REKOMENDASI PENGINAPAN & HOMESTAY'}
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'HOMESTAY MALANG BY YOGA TRANSPORT' : 'PENGINAPAN HOMESTAY MALANG'}
          </h2>

          <div className="w-16 h-1 bg-[#f59e0b] rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN'
              ? 'Enjoy comfortable private lodging options in Malang city for your holiday & tour group accommodation.'
              : 'Nikmati pilihan penginapan homestay yang bersih, nyaman, estetik, dan strategis di Kota Malang untuk menyempurnakan liburan Anda.'}
          </p>
        </div>

        {/* Tab Selector Buttons (RJA 1 & RJA 2) */}
        <div className="flex justify-center gap-3 mb-10">
          {homestays.map((hs) => {
            const isActive = activeTab === hs.id;
            return (
              <button
                key={hs.id}
                onClick={() => setActiveTab(hs.id as any)}
                className={`px-6 sm:px-8 py-3 rounded-full font-display font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-sm flex items-center gap-2 border ${
                  isActive
                    ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.03]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-luxury-gold hover:text-luxury-gold'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>{hs.shortName}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-luxury-gold text-black' : 'bg-gray-100 text-gray-600'}`}>
                  {hs.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Homestay Main Feature Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHomestay.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            
            {/* Left: Image Container */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full bg-gray-900 overflow-hidden group">
              <img
                src={currentHomestay.image}
                alt={currentHomestay.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="bg-[#f59e0b] text-gray-950 font-display font-bold text-[10px] uppercase px-3 py-1 rounded-md tracking-wider">
                  {currentHomestay.badge}
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl drop-shadow-md">
                  {currentHomestay.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                  <span>{currentHomestay.address}</span>
                </div>
              </div>
            </div>

            {/* Right: Info & Features List */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    INFO PENGINAPAN
                  </span>
                  <h4 className="font-display font-extrabold text-xl text-gray-900 mt-0.5">
                    {currentHomestay.name}
                  </h4>
                </div>

                <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {currentHomestay.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-2 border-t border-gray-100">
                  <span className="font-display font-bold text-xs text-gray-900 uppercase tracking-wider block">
                    Fasilitas Lengkap:
                  </span>
                  {currentHomestay.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Booking Action */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                    STATUS & TARIF
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-[#d97706]">
                    {currentHomestay.price}
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsApp(currentHomestay.waMessage)}
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Tanya / Booking</span>
                </button>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
