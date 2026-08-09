import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  MapPin, 
  Wifi, 
  Sparkles, 
  Bed, 
  Tv, 
  CheckCircle2, 
  MessageSquare,
  Users,
  ShieldCheck,
  Building
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HomestaySectionProps {
  lang: 'ID' | 'EN';
}

export interface RoomType {
  id: string;
  name: string;
  badge?: string;
  capacity: string;
  pricing: { pax: string; rate: string; totalNote?: string }[];
  facilities: string[];
  bedInfo: string;
  bathroom: string;
  tv: string;
  image: string;
  waMessage: string;
}

export default function HomestaySection({ lang }: HomestaySectionProps) {
  const t = TRANSLATIONS[lang];
  const [activeBranch, setActiveBranch] = useState<'rja1' | 'rja2'>('rja1');
  const [activeRoomId, setActiveRoomId] = useState<string>('sweet-room');

  const rja1Rooms: RoomType[] = [
    {
      id: 'sweet-room',
      name: 'Sweet Room',
      badge: 'Favorit Hemat (Tersedia 6 Kamar)',
      capacity: 'Maksimal 2 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 117.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 58.500 / orang', totalNote: 'Total Rp 117.000' }
      ],
      facilities: [
        'Kamar Mandi Dalam Clean & Fresh',
        'Kasur Single/Queen (Ukuran 120 x 200 cm)',
        'Wi-Fi Cepat & Gratis 24 Jam',
        'Kipas Angin & Gantungan Baju',
        'Selimut & Perlengkapan Mandi'
      ],
      bedInfo: '1 Kasur (120 x 200 cm)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Non TV',
      image: '/rja1.png',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Sweet Room (Maks 2 orang).'
    },
    {
      id: 'green-room',
      name: 'Green Room',
      badge: 'Family Favorite (Tersedia 3 Kamar)',
      capacity: 'Maksimal 4 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 160.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 80.000 / orang', totalNote: 'Total Rp 160.000' },
        { pax: '3 Orang', rate: 'Rp 60.000 / orang', totalNote: 'Total Rp 180.000' },
        { pax: '4 Orang', rate: 'Rp 50.000 / orang', totalNote: 'Total Rp 200.000' }
      ],
      facilities: [
        'Kamar Mandi Dalam',
        'Kasur Queen (160 x 200 cm) + Extra Bed (80x200 min 3 orang)',
        'Televisi & Hiburan',
        'Wi-Fi Cepat Gratis',
        'Kipas Angin & Selimut Nyaman'
      ],
      bedInfo: '1 Kasur Queen (160x200 cm) + Extra Bed',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Ada TV',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Green Room (Maks 4 orang).'
    },
    {
      id: 'cheerful-room',
      name: 'Cheerful Room',
      badge: 'Cozy & Aesthetic',
      capacity: 'Kapasitas 3 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 150.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 75.500 / orang', totalNote: 'Total Rp 151.000' },
        { pax: '3 Orang', rate: 'Rp 50.000 / orang', totalNote: 'Total Rp 150.000' }
      ],
      facilities: [
        'Kamar Mandi Dalam Clean & Fresh',
        'Kasur Queen (160 x 200 cm)',
        'Televisi Layar Datar',
        'Wi-Fi Cepat & Kipas Angin',
        'Gantungan Baju & Selimut'
      ],
      bedInfo: '1 Kasur Queen (160 x 200 cm)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Ada TV',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Cheerful Room (Kapasitas 3 orang).'
    },
    {
      id: 'room-satu',
      name: 'Room Satu',
      badge: 'Kapasitas Rombongan (Max 5 Orang)',
      capacity: 'Maksimal 5 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 100.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 50.000 / orang', totalNote: 'Total Rp 100.000' },
        { pax: '3 Orang', rate: 'Rp 43.000 / orang', totalNote: 'Total Rp 129.000' },
        { pax: '4 - 5 Orang', rate: 'Rp 41.000 - Rp 43.000 / orang' }
      ],
      facilities: [
        '2 Kasur Luas (Ukuran 120x200 cm & 160x200 cm)',
        'Kamar Mandi Luar Bersih & Steril',
        'Kipas Angin & Rak Baju',
        'Wi-Fi Cepat Gratis',
        'Selimut & Perlengkapan Mandi'
      ],
      bedInfo: '2 Kasur (120x200 & 160x200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Non TV',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Satu (Kapasitas max 5 orang).'
    },
    {
      id: 'room-dua',
      name: 'Room Dua',
      badge: 'Tersedia 1 Kamar (Max 4 Orang)',
      capacity: 'Maksimal 4 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 95.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 47.500 / orang', totalNote: 'Total Rp 95.000' },
        { pax: '3 Orang', rate: 'Rp 41.000 / orang' },
        { pax: '4 Orang', rate: 'Rp 39.000 / orang' }
      ],
      facilities: [
        'Kamar Mandi Luar Bersih',
        '2 Kasur Ukuran (120 x 200 cm & 120 x 200 cm)',
        'Kipas Angin & Rak Baju',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju & Selimut'
      ],
      bedInfo: '2 Kasur Twin (120 x 200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Non TV',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Dua (Maks 4 orang).'
    },
    {
      id: 'room-tiga',
      name: 'Room Tiga',
      badge: 'Rombongan Luas + AC & Smart TV (Max 8 Orang)',
      capacity: 'Maksimal 8 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 195.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 97.500 / orang', totalNote: 'Total Rp 195.000' },
        { pax: '3 - 4 Orang', rate: 'Rp 60.000 - Rp 65.000 / orang' },
        { pax: '5 - 8 Orang', rate: 'Rp 50.000 - Rp 55.000 / orang' }
      ],
      facilities: [
        'Kamar Mandi Luar Bersih',
        'Kamar Luas + 2 SET Tempat Tidur Susun (Ukuran 120 x 200 cm)',
        'Air Conditioner (AC) & Smart TV',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '2 SET Tidur Susun (120x200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Smart TV + AC',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Tiga (Rombongan max 8 orang dengan AC & Smart TV).'
    },
    {
      id: 'room-empat',
      name: 'Room Empat',
      badge: 'Kamar Nyaman + Smart TV (Max 3 Orang)',
      capacity: 'Maksimal 3 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 99.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 49.500 / orang', totalNote: 'Total Rp 99.000' },
        { pax: '3 Orang', rate: 'Rp 48.000 / orang' }
      ],
      facilities: [
        'Kamar Mandi Luar Bersih',
        'Kasur Queen (Ukuran 160 x 200 cm)',
        'Smart TV & Kipas Angin',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '1 Kasur Queen (160 x 200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Smart TV',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Empat (Maks 3 orang + Smart TV).'
    },
    {
      id: 'room-lima',
      name: 'Room Lima',
      badge: 'Kamar Susun + AC & Smart TV (Max 6 Orang)',
      capacity: 'Maksimal 6 Orang',
      pricing: [
        { pax: '1 - 2 Orang', rate: 'Rp 75.000 - Rp 150.000 / orang' },
        { pax: '3 - 4 Orang', rate: 'Rp 60.000 - Rp 65.000 / orang' },
        { pax: '5 - 6 Orang', rate: 'Rp 50.000 / orang' }
      ],
      facilities: [
        '2 SET Tempat Tidur Susun (Ukuran 120 x 200 cm)',
        'Full Air Conditioner (AC) & Smart TV',
        'Kamar Mandi Luar Bersih',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '2 SET Tidur Susun (120x200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Smart TV + AC',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Lima (Maks 6 orang dengan AC & Smart TV).'
    },
    {
      id: 'room-enem',
      name: 'Room Enam',
      badge: 'Kamar Susun + Smart TV (Max 6 Orang)',
      capacity: 'Maksimal 6 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 117.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 58.500 / orang', totalNote: 'Total Rp 117.000' },
        { pax: '3 - 6 Orang', rate: 'Rp 50.000 / orang' }
      ],
      facilities: [
        '2 SET Tempat Tidur Susun (Ukuran 120 x 200 cm)',
        'Smart TV & Kipas Angin',
        'Kamar Mandi Luar Bersih',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '2 SET Tidur Susun (120x200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Smart TV',
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c517a?auto=format&fit=crop&q=80&w=800',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Enam (Maks 6 orang + Smart TV).'
    },
    {
      id: 'family-room',
      name: 'Family Room / L-Room',
      badge: 'Paket Rombongan Besar',
      capacity: 'Kapasitas 6 - 8+ Orang',
      pricing: [
        { pax: 'Rombongan 6-8+ Orang', rate: 'Mulai Rp 35.000 / orang' }
      ],
      facilities: [
        'Ruangan Luas & Kasur Rombongan',
        'Kamar Mandi Bersih',
        'Wi-Fi Cepat Gratis',
        'Area Kumpul Keluarga / Rombongan',
        'Full Selimut & Perlengkapan'
      ],
      bedInfo: 'Multiple Beds / Family Layout',
      bathroom: 'Kamar Mandi Bersih',
      tv: 'Ada TV',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
      waMessage: 'Halo Yoga Transport, saya ingin info booking RJA 1 - Family Room / L-Room.'
    }
  ];

  const activeRoom = rja1Rooms.find(r => r.id === activeRoomId) || rja1Rooms[0];

  const handleWhatsApp = (msg: string) => {
    const waNumber = '628813305066';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="penginapan" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-[#d97706] tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60 inline-block">
            {lang === 'EN' ? 'OFFICIAL LODGING PARTNER' : 'KATALOG PENGINAPAN & HOMESTAY RJA'}
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'MALANG HOMESTAY ACCOMMODATION' : 'PENGINAPAN HOMESTAY MALANG'}
          </h2>

          <div className="w-16 h-1 bg-[#f59e0b] rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN'
              ? 'Comfortable, clean, and strategic homestay lodging in Malang city center for your holiday and group tour stays.'
              : 'Pilihan penginapan homestay estetik, bersih, dan berlokasi strategis di Kota Malang untuk melengkapi perjalanan liburan Anda.'}
          </p>
        </div>

        {/* Branch Selector Tabs (RJA 1 vs RJA 2) */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveBranch('rja1')}
            className={`px-6 sm:px-8 py-3 rounded-full font-display font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-sm flex items-center gap-2 border ${
              activeBranch === 'rja1'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.03]'
                : 'bg-white text-gray-700 border-gray-200 hover:border-luxury-gold hover:text-luxury-gold'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>RJA 1 - Jl. Jaksa Agung Suprapto</span>
            <span className="text-[10px] bg-[#f59e0b] text-black px-2 py-0.5 rounded-full font-bold">
              Pusat Kota
            </span>
          </button>

          <button
            onClick={() => setActiveBranch('rja2')}
            className={`px-6 sm:px-8 py-3 rounded-full font-display font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-sm flex items-center gap-2 border ${
              activeBranch === 'rja2'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.03]'
                : 'bg-white text-gray-700 border-gray-200 hover:border-luxury-gold hover:text-luxury-gold'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>RJA 2 - Jl. Tawangmangu</span>
            <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-bold">
              Cozy & Pastel
            </span>
          </button>
        </div>

        {activeBranch === 'rja1' ? (
          <div className="space-y-8">
            
            {/* Interactive Room Catalog Selector Pills for RJA 1 */}
            <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60 space-y-3">
              <span className="font-display font-bold text-xs text-gray-900 uppercase tracking-wider block text-center">
                Klik Tipe Kamar RJA 1 Malang di Bawah Ini:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {rja1Rooms.map((room) => {
                  const isSelected = activeRoomId === room.id;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setActiveRoomId(room.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#d97706] text-white border-[#d97706] shadow-md scale-[1.03]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#d97706] hover:bg-amber-100/50'
                      }`}
                    >
                      {room.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Room Detail Display Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                
                {/* Left: Image Container */}
                <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full bg-gray-900 overflow-hidden group">
                  <img
                    src={activeRoom.image}
                    alt={activeRoom.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="bg-[#f59e0b] text-gray-950 font-display font-bold text-[10px] uppercase px-3 py-1 rounded-md tracking-wider">
                      {activeRoom.badge}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl drop-shadow-md">
                      {activeRoom.name}
                    </h3>
                    <p className="font-sans text-xs text-gray-200 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                      <span>Jl. Jaksa Agung Suprapto, Klojen, Kota Malang</span>
                    </p>
                  </div>
                </div>

                {/* Right: Detailed Room Specs & Pricing Matrix */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    
                    {/* Title & Capacity Header */}
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#d97706]">
                          SPESIFIKASI KAMAR RJA 1
                        </span>
                        <h4 className="font-display font-extrabold text-xl text-gray-900">
                          {activeRoom.name}
                        </h4>
                      </div>
                      <span className="bg-amber-50 text-[#d97706] font-display font-bold text-xs px-3 py-1 rounded-full border border-amber-200/60">
                        {activeRoom.capacity}
                      </span>
                    </div>

                    {/* Quick Specs Badges */}
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                      <span className="bg-gray-100 px-3 py-1 rounded-lg flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-[#d97706]" />
                        {activeRoom.bedInfo}
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-lg flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        {activeRoom.bathroom}
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-lg flex items-center gap-1.5">
                        <Tv className="w-4 h-4 text-blue-600" />
                        {activeRoom.tv}
                      </span>
                    </div>

                    {/* PRICING MATRIX TABLE */}
                    <div className="space-y-2 pt-1">
                      <span className="font-display font-bold text-xs text-gray-900 uppercase tracking-wider block">
                        Rincian Harga per Kapasitas (RJA 1):
                      </span>
                      <div className="bg-amber-50/40 rounded-xl p-3 border border-amber-100 space-y-2">
                        {activeRoom.pricing.map((priceItem, pIdx) => (
                          <div key={pIdx} className="flex items-center justify-between text-xs py-1 border-b border-amber-100/60 last:border-0">
                            <span className="font-bold text-gray-700 flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-[#d97706]" />
                              {priceItem.pax}
                            </span>
                            <div className="text-right">
                              <span className="font-display font-bold text-[#d97706]">
                                {priceItem.rate}
                              </span>
                              {priceItem.totalNote && (
                                <span className="block text-[9px] text-gray-500 font-normal">
                                  ({priceItem.totalNote})
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Facilities checklist */}
                    <div className="space-y-2 pt-1">
                      <span className="font-display font-bold text-xs text-gray-900 uppercase tracking-wider block">
                        Fasilitas Kamar Included:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeRoom.facilities.map((fac, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-xs text-gray-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{fac}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                        LOKASI STRATEGIS
                      </span>
                      <span className="font-display font-bold text-xs text-gray-900">
                        Klojen Pusat Kota Malang
                      </span>
                    </div>

                    <button
                      onClick={() => handleWhatsApp(activeRoom.waMessage)}
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Booking {activeRoom.name}</span>
                    </button>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        ) : (
          /* RJA 2 Display Card */
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full bg-gray-900 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200"
                alt="RJA 2 Tawangmangu Malang"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="bg-[#f59e0b] text-gray-950 font-display font-bold text-[10px] uppercase px-3 py-1 rounded-md tracking-wider">
                  Pastel & Cozy
                </span>
                <h3 className="font-display font-extrabold text-2xl">
                  RJA 2 - Jl. Tawangmangu Malang
                </h3>
                <p className="font-sans text-xs text-gray-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                  <span>Jl. Tawangmangu, Lowokwaru, Kota Malang</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d97706]">
                    HOMESTAY RJA 2
                  </span>
                  <h4 className="font-display font-extrabold text-xl text-gray-900">
                    Penginapan Tawangmangu Malang
                  </h4>
                </div>
                <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Penginapan homestay bernuansa pastel modern yang estetik di kawasan Tawangmangu Malang. Lingkungan tenang, bersih, dan dekat kawasan kampus & pusat kuliner.
                </p>
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="font-display font-bold text-xs text-gray-900 uppercase tracking-wider block">
                    Fasilitas Utama:
                  </span>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50 p-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Kamar Tidur Estetik Full AC & Wi-Fi Cepat</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50 p-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Kamar Mandi Dalam & Toiletries Lengkap</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50 p-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Area Parkir Mobil & Motor Aman</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                    TARIF RJA 2
                  </span>
                  <span className="font-display font-bold text-sm text-[#d97706]">
                    Hubungi Admin untuk Informasi Kamar
                  </span>
                </div>
                <button
                  onClick={() => handleWhatsApp('Halo Yoga Transport, saya ingin tanya ketersediaan & booking RJA 2 Tawangmangu Malang.')}
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Booking RJA 2</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
