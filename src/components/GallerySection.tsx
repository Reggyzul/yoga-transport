import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  MapPin, 
  Users, 
  Sparkles, 
  X, 
  ChevronRight, 
  MessageSquare,
  Filter,
  CheckCircle2,
  ZoomIn
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GallerySectionProps {
  lang: 'ID' | 'EN';
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  titleEn?: string;
  category: 'tour' | 'bus' | 'beach';
  location: string;
  tag: string;
  description: string;
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const t = TRANSLATIONS[lang];
  const [activeFilter, setActiveFilter] = useState<'all' | 'tour' | 'bus' | 'beach'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryData: GalleryItem[] = [
    {
      id: 'galeri-1',
      image: '/gallery/galeri1.avif',
      title: 'Kunjungan Study Trip Orlin Farm',
      titleEn: 'Orlin Farm Educational Study Trip',
      category: 'tour',
      location: 'Malang Jawa Timur',
      tag: 'Study & Educational Trip',
      description: 'Dokumentasi rombongan peserta kunjungan edukasi & wisata di Orlin Farm bersama unit kendaraan Yoga Transport Malang.'
    },
    {
      id: 'galeri-2',
      image: '/gallery/galeri2.avif',
      title: 'Rombongan Wisata Premium Coach',
      titleEn: 'Touring Group with Premium Coach',
      category: 'bus',
      location: 'Kawasan Wisata Batu Malang',
      tag: 'Sewa Bus & Long Elf VIP',
      description: 'Foto kenangan rombongan peserta tour wisata Malang-Batu bersama armada bus pariwisata Premium Coach Yoga Transport.'
    },
    {
      id: 'galeri-3',
      image: '/gallery/galeri3.avif',
      title: 'Snorkeling & Wisata Bahari',
      titleEn: 'Snorkeling & Marine Eco Trip',
      category: 'beach',
      location: 'Pantai & Pulau Malang Selatan',
      tag: 'Wisata Pantai & Snorkeling',
      description: 'Keseruan rombongan wisatawan menikmati pengalaman luar biasa snorkeling & explorasi pantai berpasir putih di Malang Selatan.'
    },
    {
      id: 'galeri-4',
      image: '/gallery/galeri4.avif',
      title: 'Tour Group Dolan-Dolan Megatrans',
      titleEn: 'Group Tour with Megatrans Bus',
      category: 'bus',
      location: 'Perjalanan Dinas & Trip Malang',
      tag: 'Bus Charter & Gathering',
      description: 'Kecerian peserta gathering rombongan besar Shipping Line Dolan-Dolan menggunakan fasilitas bus pariwisata Megatrans.'
    },
    {
      id: 'galeri-5',
      image: '/gallery/galeri5.avif',
      title: 'Spot Foto Wooden View Pantai Malang',
      titleEn: 'Ocean Platform Deck Photoshoot',
      category: 'beach',
      location: 'Spot Wooden Deck Malang South Coast',
      tag: 'Eksplor Pantai Malang',
      description: 'Dokumentasi kebersamaan wisatawan di spot foto wooden deck bermandikan pemandangan laut biru jernih Malang Selatan.'
    },
    {
      id: 'galeri-6',
      image: '/gallery/galeri6.avif',
      title: 'Spot Candi Laut Pantai Balekambang',
      titleEn: 'Balekambang Temple & Ocean Bridge',
      category: 'beach',
      location: 'Pantai Balekambang Malang',
      tag: 'Ikon Wisata Pantai Malang',
      description: 'Foto kebersamaan wisatawan di atas jembatan ikonik penyeberangan Candi Pura Ismoyo Pantai Balekambang Malang.'
    },
    {
      id: 'galeri-7',
      image: '/gallery/galeri7.avif',
      title: 'Wisata Edukasi Dino Mall Jatim Park 3',
      titleEn: 'Jatim Park 3 Dino Mall Batu Tour',
      category: 'tour',
      location: 'Dino Mall Jatim Park 3 Kota Batu',
      tag: 'City Tour Batu Malang',
      description: 'Keceriaan wisatawan saat tiba di tempat hiburan populer Dino Mall Jatim Park 3 Kota Batu bersama tim Yoga Transport.'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  const handleWhatsApp = (title: string) => {
    const waNumber = '628813305066';
    const msg = `Halo Yoga Transport, saya tertarik dengan paket trip & armada seperti di galeri (${title}). Boleh info penawarannya?`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-[#d97706] tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60 inline-flex items-center gap-1.5">
            <Camera className="w-4 h-4" />
            <span>{lang === 'EN' ? 'CUSTOMER DOKUMENTATION & REVIEWS' : 'DOKUMENTASI ASLI & PERJALANAN REAL'}</span>
          </span>
          
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'OUR TOUR & TRANSPORT GALLERY' : 'DOKUMENTASI KEGIATAN & GALERI FOTO'}
          </h1>

          <div className="w-20 h-1.5 bg-[#f59e0b] rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN'
              ? 'Real documentation photos of our valued guests enjoying holiday trips, corporate bus charters, and beach adventures in Malang & Bromo.'
              : 'Kumpulan foto momen berkesan bersama para pelanggan setia Yoga Transport Malang saat perjalanan wisata, sewa bus rombongan, hingga trip pantai.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeFilter === 'all'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.02]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-[#d97706]'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'All Photos' : 'Semua Foto (7)'}</span>
          </button>

          <button
            onClick={() => setActiveFilter('tour')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeFilter === 'tour'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.02]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-[#d97706]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'Tour & Trip' : 'Tour & Kunjungan'}</span>
          </button>

          <button
            onClick={() => setActiveFilter('bus')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeFilter === 'bus'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.02]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-[#d97706]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'Bus & Rombongan' : 'Sewa Bus & Rombongan'}</span>
          </button>

          <button
            onClick={() => setActiveFilter('beach')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeFilter === 'beach'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.02]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-[#d97706]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'Beach & Snorkeling' : 'Wisata Pantai & Snorkeling'}</span>
          </button>
        </div>

        {/* Gallery Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col justify-between"
              >
                {/* Photo Image Container */}
                <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Category Tag Badge */}
                  <span className="absolute top-4 left-4 bg-luxury-gold text-black font-display font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                    {item.tag}
                  </span>

                  {/* Zoom Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center border border-white/40 shadow-xl scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Location Label */}
                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center gap-1.5 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                    <span className="truncate drop-shadow-sm">{item.location}</span>
                  </div>
                </div>

                {/* Card Info Footer */}
                <div className="p-5 text-left space-y-2 bg-white flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-gray-900 group-hover:text-[#d97706] transition-colors">
                      {lang === 'EN' && item.titleEn ? item.titleEn : item.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#d97706]">
                    <span>{lang === 'EN' ? 'Click to Enlarge' : 'Klik Untuk Memperbesar'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Banner for Gallery Page */}
        <div className="mt-16 bg-luxury-black text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-luxury-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left relative overflow-hidden">
          <div className="space-y-2 z-10">
            <span className="font-display font-bold text-xs text-luxury-gold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span>{lang === 'EN' ? 'RESERVE YOUR TRIP TODAY' : 'AGENDAKAN PERJALANAN IMPIAN ANDA'}</span>
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {lang === 'EN' ? 'Want Your Trip Photos Like This?' : 'Ingin Momen Liburan Anda Diabadikan Seperti Ini?'}
            </h3>
            <p className="font-sans text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Tim Yoga Transport Malang siap melayani paket tur pribadi, keluarga, rombongan dinas, hingga sewa bus pariwisata berkualitas.
            </p>
          </div>

          <button
            onClick={() => handleWhatsApp('Dokumentasi Galeri')}
            className="z-10 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-extrabold text-xs uppercase py-3.5 px-7 rounded-xl shadow-lg transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{lang === 'EN' ? 'CONSULT VIA WHATSAPP' : 'KONSULTASI RUTIN VIA WA'}</span>
          </button>
        </div>

      </div>

      {/* INTERACTIVE LIGHTBOX MODAL FOR GALLERY IMAGE */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col relative z-10 border border-gray-100"
            >
              {/* Lightbox Header */}
              <div className="bg-luxury-black text-white p-4 sm:p-5 flex items-center justify-between border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-9 h-9 rounded-xl bg-luxury-gold text-black font-display font-bold flex items-center justify-center shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-luxury-gold block">
                      {selectedImage.tag}
                    </span>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-white">
                      {lang === 'EN' && selectedImage.titleEn ? selectedImage.titleEn : selectedImage.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-300 hover:text-white bg-white/15 hover:bg-white/25 p-2 rounded-full transition-all cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Full Photo */}
              <div className="relative bg-black flex items-center justify-center max-h-[65vh] overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full max-h-[65vh] object-contain"
                />
              </div>

              {/* Lightbox Caption & Action Footer */}
              <div className="p-5 bg-white space-y-4 text-left border-t border-gray-100 shrink-0">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#d97706]">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <span className="text-xs text-gray-500 font-semibold">
                    Yoga Transport Malang - Official Gallery
                  </span>

                  <button
                    type="button"
                    onClick={() => handleWhatsApp(selectedImage.title)}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs py-2.5 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Tanya Paket Trip Seperti Foto Ini</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
