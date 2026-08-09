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
  Building,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HomestaySectionProps {
  lang: 'ID' | 'EN';
}

export interface RoomType {
  id: string;
  name: string;
  badge: string;
  capacity: string;
  pricing: { pax: string; rate: string; totalNote?: string }[];
  facilities: string[];
  bedInfo: string;
  bathroom: string;
  tv: string;
  waMessage: string;
}

export default function HomestaySection({ lang }: HomestaySectionProps) {
  const t = TRANSLATIONS[lang];
  const [activeBranch, setActiveBranch] = useState<'rja1' | 'rja2'>('rja1');
  const [expandedRoomId, setExpandedRoomId] = useState<string | null>('sweet-room');

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
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Cheerful Room (Kapasitas 3 orang).'
    },
    {
      id: 'room-satu',
      name: 'Room Satu',
      badge: 'Max 5 Orang (2 Kasur Luas)',
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
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Satu (Kapasitas max 5 orang).'
    },
    {
      id: 'room-dua',
      name: 'Room Dua',
      badge: 'Max 4 Orang (2 Kasur Twin)',
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
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Dua (Maks 4 orang).'
    },
    {
      id: 'room-tiga',
      name: 'Room Tiga',
      badge: 'Rombongan AC & Smart TV (Max 8 Orang)',
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
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Tiga (Rombongan max 8 orang dengan AC & Smart TV).'
    },
    {
      id: 'room-empat',
      name: 'Room Empat',
      badge: 'Smart TV (Max 3 Orang)',
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
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Empat (Maks 3 orang + Smart TV).'
    },
    {
      id: 'room-lima',
      name: 'Room Lima',
      badge: 'Susun + AC & Smart TV (Max 6 Orang)',
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
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Lima (Maks 6 orang dengan AC & Smart TV).'
    },
    {
      id: 'room-enam',
      name: 'Room Enam',
      badge: 'Susun + Smart TV (Max 6 Orang)',
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
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Enam (Maks 6 orang + Smart TV).'
    },
    {
      id: 'family-room',
      name: 'Family Room',
      badge: 'Kamar Mandi Dalam + AC & Smart TV (Max 6 Orang)',
      capacity: 'Maksimal 6 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 225.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 112.500 / orang', totalNote: 'Total Rp 225.000' },
        { pax: '3 Orang', rate: 'Rp 75.000 / orang', totalNote: 'Total Rp 225.000' },
        { pax: '4 Orang', rate: 'Rp 65.000 / orang', totalNote: 'Total Rp 260.000' },
        { pax: '5 - 6 Orang', rate: 'Rp 60.000 / orang', totalNote: 'Total Rp 300.000 - Rp 360.000' }
      ],
      facilities: [
        '2 SET Tempat Tidur Susun (Ukuran 120 x 200 cm)',
        'Kamar Mandi Dalam Clean & Fresh',
        'SMART TV & Full AC',
        'Wi-Fi Cepat Gratis 24 Jam',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '2 SET Tidur Susun (120x200 cm)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Smart TV + AC',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Family Room (Maks 6 orang + Kamar Mandi Dalam, AC, Smart TV).'
    },
    {
      id: 'l-room',
      name: 'L - Room',
      badge: 'Kamar Mandi Dalam + AC & Smart TV (Max 4 Orang)',
      capacity: 'Maksimal 4 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 180.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 90.000 / orang', totalNote: 'Total Rp 180.000' },
        { pax: '3 Orang', rate: 'Rp 70.000 / orang', totalNote: 'Total Rp 210.000' },
        { pax: '4 Orang', rate: 'Rp 60.000 / orang', totalNote: 'Total Rp 240.000' }
      ],
      facilities: [
        '2 Set Tempat Tidur (Jumlah kasur 2: 120x200 & 120x200 cm)',
        'Kamar Mandi Dalam Clean & Fresh',
        'SMART TV & Full AC',
        'Wi-Fi Cepat Gratis 24 Jam',
        'Gantungan Baju & Selimut'
      ],
      bedInfo: '2 Kasur Twin (120x200 cm)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Smart TV + AC',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - L-Room (Maks 4 orang + Kamar Mandi Dalam, AC, Smart TV).'
    }
  ];

  const handleWhatsApp = (msg: string) => {
    const waNumber = '628813305066';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
  };

  const toggleRoomExpand = (roomId: string) => {
    if (expandedRoomId === roomId) {
      setExpandedRoomId(null);
    } else {
      setExpandedRoomId(roomId);
    }
  };

  return (
    <section id="penginapan" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-[#d97706] tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60 inline-block">
            {lang === 'EN' ? 'OFFICIAL HOMESTAY PARTNER' : 'KATALOG PENGINAPAN HOMESTAY RJA'}
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'MALANG HOMESTAY ACCOMMODATION' : 'PENGINAPAN HOMESTAY MALANG'}
          </h2>

          <div className="w-16 h-1 bg-[#f59e0b] rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN'
              ? 'Enjoy comfortable private lodging options in Malang city center for your holiday & tour group accommodation.'
              : 'Pilihan penginapan homestay bersih, nyaman, estetik, dan strategis di Kota Malang untuk melengkapi liburan Anda.'}
          </p>
        </div>

        {/* SINGLE MAIN HOMESTAY BUILDING SHOWCASE CARD (FOTO RUMAH PINK) */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden mb-12 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Single Main Pink House Building Image */}
          <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] bg-gray-900 overflow-hidden">
            <img
              src="/rja1.png"
              alt="Homestay RJA 1 Malang Pink House"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="bg-[#f59e0b] text-gray-950 font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-md tracking-wider shadow-md">
                Gedung Utama RJA 1
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl drop-shadow-md">
                RJA 1 Homestay Malang
              </h3>
              <p className="font-sans text-xs text-gray-200 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <span>Jl. Jaksa Agung Suprapto, Klojen, Kota Malang (Pusat Kota)</span>
              </p>
            </div>
          </div>

          {/* Right: Building Info Summary & Quick Highlights */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d97706]">
                    LOKASI PUSAT KOTA MALANG
                  </span>
                  <h4 className="font-display font-extrabold text-xl text-gray-900">
                    Penginapan RJA 1 - Jaksa Agung Suprapto
                  </h4>
                </div>
              </div>

              <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed">
                Gedung homestay 2 lantai berwarna khas pink yang bersih, aman, dan berlokasi strategis di pusat kota Malang. Tersedia 11 pilihan tipe kamar sesuai jumlah rombongan Anda.
              </p>

              {/* General Amenities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                  <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>Wi-Fi Cepat Gratis 24 Jam</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                  <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>Area Parkir Luas & Aman</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                  <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>Pilihan AC & Smart TV</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                  <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>Kamar Mandi Dalam / Luar</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                  INFO / RESERVASI
                </span>
                <span className="font-display font-bold text-xs text-gray-900">
                  Pusat Kota Malang
                </span>
              </div>

              <button
                onClick={() => handleWhatsApp('Halo Yoga Transport, saya ingin tanya ketersediaan penginapan RJA 1 Malang.')}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Konsultasi via WA</span>
              </button>
            </div>
          </div>

        </div>

        {/* SECTION TITLE: DAFTAR BANYAK PILIHAN KAMAR RJA 1 */}
        <div className="space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#d97706] tracking-wider block">
                KATALOG LENGKAP RJA 1
              </span>
              <h3 className="font-display font-extrabold text-2xl text-gray-900">
                Pilih Tipe Kamar (Klik Untuk Rincian Harga & Fasilitas):
              </h3>
            </div>
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Total 11 Tipe Kamar
            </span>
          </div>

          {/* ROOM ACCORDIONS GRID / LIST */}
          <div className="space-y-4">
            {rja1Rooms.map((room) => {
              const isExpanded = expandedRoomId === room.id;

              return (
                <div
                  key={room.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs ${
                    isExpanded
                      ? 'border-[#d97706] ring-2 ring-amber-400/30 shadow-md'
                      : 'border-gray-200/80 hover:border-amber-300'
                  }`}
                >
                  
                  {/* Clickable Header Button Row */}
                  <div
                    onClick={() => toggleRoomExpand(room.id)}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-amber-50/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0 transition-colors ${
                        isExpanded ? 'bg-[#d97706] text-white' : 'bg-amber-100 text-[#d97706]'
                      }`}>
                        <Bed className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-extrabold text-lg text-gray-900">
                            {room.name}
                          </h4>
                          <span className="text-[10px] bg-amber-100/80 text-[#d97706] px-2.5 py-0.5 rounded-full font-bold uppercase">
                            {room.badge}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 font-sans mt-0.5">
                          {room.capacity} • {room.bathroom} • {room.tv}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-100">
                      <span className="font-display font-bold text-xs sm:text-sm text-[#d97706]">
                        Rincian Harga & Pax
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Room Specifications & Pricing Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100 bg-amber-50/20 p-5 sm:p-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                          
                          {/* Price Breakdown Matrix Table */}
                          <div className="md:col-span-7 space-y-2">
                            <span className="font-display font-bold text-xs text-gray-900 uppercase tracking-wider block">
                              Rincian Harga per Jumlah Orang (Pax):
                            </span>
                            <div className="bg-white rounded-xl p-3.5 border border-amber-200/60 shadow-xs space-y-2">
                              {room.pricing.map((pItem, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-gray-100 last:border-0">
                                  <span className="font-bold text-gray-700 flex items-center gap-1.5">
                                    <Users className="w-3.5 h-3.5 text-[#d97706]" />
                                    {pItem.pax}
                                  </span>
                                  <div className="text-right">
                                    <span className="font-display font-bold text-[#d97706] text-sm">
                                      {pItem.rate}
                                    </span>
                                    {pItem.totalNote && (
                                      <span className="block text-[10px] text-gray-500 font-normal">
                                        ({pItem.totalNote})
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Room Specs & Facilities Checklist */}
                          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                            <div className="space-y-2">
                              <span className="font-display font-bold text-xs text-gray-900 uppercase tracking-wider block">
                                Fasilitas Kamar:
                              </span>
                              <div className="space-y-1.5">
                                {room.facilities.map((fac, fIdx) => (
                                  <div key={fIdx} className="flex items-center gap-1.5 text-xs text-gray-700">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                    <span>{fac}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Booking Action Button */}
                            <button
                              onClick={() => handleWhatsApp(room.waMessage)}
                              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                            >
                              <MessageSquare className="w-4 h-4 fill-current" />
                              <span>Booking {room.name} via WA</span>
                            </button>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
