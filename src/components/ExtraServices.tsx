import React from 'react';
import { motion } from 'motion/react';
import { Plane, Users, MapPin, Camera, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ExtraServicesProps {
  lang: 'ID' | 'EN';
}

export default function ExtraServices({ lang }: ExtraServicesProps) {
  const services = [
    {
      id: 'airport-shuttle',
      icon: <Plane className="w-7 h-7 text-[#2563eb]" />,
      badge: lang === 'EN' ? 'Airport Transfer' : 'Drop & Pick Up',
      title: lang === 'EN' ? 'Airport Shuttle & Drop Off' : 'Shuttle & Drop Bandara',
      subtitle: lang === 'EN' ? 'Juanda (SUB) & Abdulrachman Saleh (MLG)' : 'Bandara Juanda (Surabaya) & Abd. Saleh (Malang)',
      description: lang === 'EN'
        ? 'Punctual private door-to-door shuttle service between Malang/Batu and Surabaya Juanda Airport.'
        : 'Layanan antar-jemput privat tepat waktu dari/ke Bandara Juanda Surabaya atau Bandara Abdulrachman Saleh Malang.',
      highlights: [
        lang === 'EN' ? '24 Hours On-Time Guarantee' : 'Jaminan Tepat Waktu 24 Jam',
        lang === 'EN' ? 'Luggage Assistance Included' : 'Bantuan Bagasi & BBM Included',
        lang === 'EN' ? 'Avanza, Innova, & Hiace Fleet' : 'Armada Avanza, Innova, & Hiace'
      ],
      priceText: lang === 'EN' ? 'Starting From Rp 450.000' : 'Mulai Rp 450.000 / Drop',
      waMessage: 'Halo Yoga Transport, saya ingin memesan Layanan Shuttle & Drop Bandara. Mohon informasi ketersediaannya.'
    },
    {
      id: 'gathering-event',
      icon: <Users className="w-7 h-7 text-[#d97706]" />,
      badge: lang === 'EN' ? 'Corporate & Group' : 'Gathering & Outing',
      title: lang === 'EN' ? 'Corporate & Family Gathering' : 'Corporate & Family Gathering',
      subtitle: lang === 'EN' ? 'Capacity 10 to 500+ Participants' : 'Kapasitas 10 hingga 500+ Peserta',
      description: lang === 'EN'
        ? 'Complete event & tour package solutions for company outings, school trips, and big family reunions in Malang Batu.'
        : 'Solusi lengkap kegiatan gathering kantor, outing sekolah, & event keluarga besar dengan armada Medium & Big Bus.',
      highlights: [
        lang === 'EN' ? 'Custom Itinerary & Meal Plans' : 'Custom Itinerary & Catering',
        lang === 'EN' ? 'Outbound & Fun Games' : 'Fasilitas Outbound & Fun Games',
        lang === 'EN' ? 'Big Bus & Hiace Premio Fleet' : 'Armada Hiace Premio & Big Bus'
      ],
      priceText: lang === 'EN' ? 'Custom Package Proposal' : 'Penawaran Khusus Group',
      waMessage: 'Halo Yoga Transport, saya ingin konsultasi paket Corporate/Family Gathering di Malang & Batu.'
    },
    {
      id: 'overland-charter',
      icon: <MapPin className="w-7 h-7 text-emerald-600" />,
      badge: lang === 'EN' ? 'Intercity Trip' : 'Luar Kota & Dinas',
      title: lang === 'EN' ? 'Intercity & Official Business Charter' : 'Car Charter & Perjalanan Dinas',
      subtitle: lang === 'EN' ? 'Java & Bali Overland Coverage' : 'Melayani Seluruh Pulau Jawa & Bali',
      description: lang === 'EN'
        ? 'Private car rental with experienced driver for official business trips, state visits, and overland journeys across Java & Bali.'
        : 'Sewa mobil privat harian/mingguan dengan driver berpengalaman untuk perjalanan dinas instansi & eksplorasi antar kota.',
      highlights: [
        lang === 'EN' ? 'Professional Uniformed Drivers' : 'Driver Profesional & Ramah',
        lang === 'EN' ? 'Sterilized Clean Fleet' : 'Armada Steril & Terawat',
        lang === 'EN' ? 'Flexible Daily Schedule' : 'Jadwal Fleksibel & Bebas Stress'
      ],
      priceText: lang === 'EN' ? 'Starting From Rp 500.000 / Day' : 'Mulai Rp 500.000 / Hari',
      waMessage: 'Halo Yoga Transport, saya tertarik menyewa Car Charter / Perjalanan Dinas Luar Kota.'
    },
    {
      id: 'documentation',
      icon: <Camera className="w-7 h-7 text-purple-600" />,
      badge: lang === 'EN' ? 'Media & Add-on' : 'Dokumentasi Special',
      title: lang === 'EN' ? 'Professional Trip Documentation' : 'Dokumentasi Photo & Cinematic Video',
      subtitle: lang === 'EN' ? 'Drone Pilot & Photographer Guide' : 'Foto, Video Reels/TikTok & Drone',
      description: lang === 'EN'
        ? 'Capture every moment of your Bromo & Malang trip with professional photographers, drone pilots, and reels creators.'
        : 'Abadikan setiap momen liburan Bromo & Malang Anda dengan tim fotografer profesional, drone pilot, & videografer reels.',
      highlights: [
        lang === 'EN' ? 'All RAW & Edited Photos Handover' : 'Semua Foto Edited & RAW Given',
        lang === 'EN' ? 'Short Cinematic Video Reels' : 'Bonus Video Reels Short Cinematic',
        lang === 'EN' ? 'Friendly Photographers' : 'Kamera Mirrorless & Drone HD'
      ],
      priceText: lang === 'EN' ? 'Special Add-on Rate' : 'Paket Tambahan Terjangkau',
      waMessage: 'Halo Yoga Transport, saya ingin menambah layanan Dokumentasi Foto & Drone untuk trip saya.'
    }
  ];

  const handleWhatsApp = (waMessage: string) => {
    const waNumber = '628813305066';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(waMessage)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="extra-services" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-[#d97706] tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block">
            {lang === 'EN' ? 'ADDITIONAL SERVICES' : 'LAYANAN TAMBAHAN PILIHAN'}
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'COMPLETE TRANSPORT SOLUTIONS' : 'LAYANAN PERJALANAN LENGKAP KAMI'}
          </h2>

          <div className="w-16 h-1 bg-[#f59e0b] rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN'
              ? 'Beyond tour packages, we provide tailored airport shuttles, corporate gathering events, and intercity charters.'
              : 'Selain paket wisata, kami menyediakan layanan antar-jemput bandara, gathering perusahaan, hingga sewa luar kota.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all pointer-events-none" />

              <div className="space-y-4">
                
                {/* Header Row: Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="font-display font-bold text-xs uppercase px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {service.badge}
                  </span>
                </div>

                {/* Service Titles */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 group-hover:text-[#d97706] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-display font-semibold text-xs text-[#2563eb] mt-0.5">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {service.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer: Price & CTA Action */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                    {lang === 'EN' ? 'ESTIMATE RATE' : 'TARIF ESTIMASI'}
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-[#d97706]">
                    {service.priceText}
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsApp(service.waMessage)}
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{lang === 'EN' ? 'Book Service' : 'Pesan Layanan'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Fast Contact Banner */}
        <div className="mt-14 bg-luxury-charcoal text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left z-10">
            <span className="font-display font-bold text-xs text-[#f59e0b] uppercase tracking-widest">
              {lang === 'EN' ? 'NEED A CUSTOM REQUEST?' : 'BUTUH LAYANAN KHUSUS ATAU KUSTOM?'}
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              {lang === 'EN' ? 'Contact Our 24/7 Transport Consultant' : 'Konsultasikan Kebutuhan Perjalanan Anda Bersama Tim Kami'}
            </h3>
            <p className="font-sans text-gray-300 text-xs sm:text-sm max-w-xl">
              {lang === 'EN'
                ? 'Free consultation for large group travel, VIP transfers, bus charters, and customized tour packages in Malang East Java.'
                : 'Konsultasi gratis untuk sewa bus rombongan, VIP transfer, sewa mobil dinas, hingga paket trip khusus Malang & Bromo.'}
            </p>
          </div>

          <button
            onClick={() => handleWhatsApp('Halo Yoga Transport, saya ingin konsultasi layanan transportasi kustom.')}
            className="z-10 bg-[#2563eb] hover:bg-blue-700 text-white font-display font-extrabold text-xs uppercase py-3.5 px-7 rounded-xl shadow-lg transition-all shrink-0 cursor-pointer text-center"
          >
            {lang === 'EN' ? 'CHAT CONSULTANT' : 'HUBUNGI TIM KAMI'}
          </button>
        </div>

      </div>
    </section>
  );
}
