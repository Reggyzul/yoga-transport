export interface TourPackage {
  id: string;
  title: string;
  titleEn?: string;
  priceText: string;
  priceTextEn?: string;
  numericPrice: number;
  duration: string;
  durationEn?: string;
  badge?: string | null;
  image: string;
  description: string;
  descriptionEn?: string;
  highlights: string[];
  highlightsEn?: string[];
  included: string[];
  includedEn?: string[];
  excluded: string[];
  excludedEn?: string[];
  itinerary: { title: string; desc: string }[];
  waMessage: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'bromo-sunrise',
    title: 'Paket Wisata Bromo Sunrise',
    titleEn: 'Bromo Sunrise Tour Package',
    priceText: 'Mulai Dari Rp 350.000',
    priceTextEn: 'Starting From Rp 350.000',
    numericPrice: 350000,
    duration: '1 Hari',
    durationEn: '1 Day',
    badge: 'BEST SELLER',
    image: '/tours_bromo.jpg',
    description: 'Rasakan pengalaman magis menyaksikan golden sunrise Bromo dengan armada Jeep 4x4 terbaik.',
    descriptionEn: 'Experience the magic of watching Mount Bromo golden sunrise with premium 4x4 Jeep fleet.',
    highlights: [
      'Golden Sunrise Penanjakan 1 / King Kong Hill',
      'Kawah Gunung Bromo & Pura Luhur Poten',
      'Pasir Berbisik (Whispering Sands)',
      'Padang Savana & Bukit Teletubbies'
    ],
    highlightsEn: [
      'Golden Sunrise at Penanjakan 1 / King Kong Hill',
      'Mount Bromo Crater & Luhur Poten Temple',
      'Whispering Sands (Pasir Berbisik)',
      'Savanna Meadow & Teletubbies Hill'
    ],
    included: [
      'Armada Transportasi Privat AC (Jemput Hotel/Stasiun/Bandara)',
      'Sewa Jeep 4x4 Privat di Bromo',
      'Driver Pengalaman & BBM',
      'Tiket Masuk Wisata Taman Nasional Bromo Tengger Semeru',
      'Air Mineral Kualitas Premium'
    ],
    includedEn: [
      'Private AC Car Transfer (Hotel/Station/Airport Pickup)',
      'Private 4x4 Jeep Charter at Bromo',
      'Experienced Driver & Fuel Included',
      'Bromo Tengger Semeru National Park Entrance Tickets',
      'Complimentary Mineral Water'
    ],
    excluded: [
      'Kebutuhan & Pengeluaran Pribadi',
      'Sewa Kuda di Kawah Bromo (Opsional)',
      'Tips Driver & Guide (Sukarela)'
    ],
    excludedEn: [
      'Personal Expenses & Snacks',
      'Horse Rental at Bromo Crater (Optional)',
      'Driver & Guide Tipping (Voluntary)'
    ],
    itinerary: [
      { title: '00:00 - Penjemputan', desc: 'Penjemputan peserta di Kota Malang / Batu / Surabaya.' },
      { title: '03:00 - Transfer Jeep 4x4', desc: 'Tiba di Rest Area Bromo & berpindah ke Jeep 4x4 menuju Penanjakan Sunrise Point.' },
      { title: '05:00 - Golden Sunrise', desc: 'Menikmati keindahan Golden Sunrise Mount Bromo dari Viewpoint.' },
      { title: '06:30 - Kawah Bromo & Pura Poten', desc: 'Eksplorasi Kawah Aktif Bromo & melewati Pura Luhur Poten.' },
      { title: '08:30 - Pasir Berbisik & Savana', desc: 'Sesi foto di Pasir Berbisik dan Padang Savana Bukit Teletubbies.' },
      { title: '11:00 - Kembali & Drop Off', desc: 'Perjalanan kembali ke Malang & pengantaran ke lokasi asal.' }
    ],
    waMessage: 'Halo Yoga Transport, saya ingin bertanya dan memesan Paket Wisata Bromo Sunrise (Mulai Rp 350.000). Mohon informasi ketersediaannya.'
  },
  {
    id: 'tumpak-sewu',
    title: 'Paket Explore Air Terjun Tumpak Sewu',
    titleEn: 'Tumpak Sewu Waterfall Tour Package',
    priceText: 'Mulai Dari Rp 400.000',
    priceTextEn: 'Starting From Rp 400.000',
    numericPrice: 400000,
    duration: '1 Hari',
    durationEn: '1 Day',
    badge: null,
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=800',
    description: 'Petualangan menuju "Niagara-nya Indonesia" dengan pemandangan air terjun yang megah.',
    descriptionEn: 'An adventure to the "Niagara of Indonesia" featuring breathtaking canyon waterfalls.',
    highlights: [
      'Panorama Atas Air Terjun Tumpak Sewu',
      'Trekking ke Dasar Lembah Tumpak Sewu',
      'Goa Tetes & Telaga Biru',
      'Tebing Nirwana'
    ],
    highlightsEn: [
      'Tumpak Sewu Main Panorama Viewpoint',
      'Trekking Down to Waterfall Valley',
      'Goa Tetes Cave & Blue Lagoon',
      'Nirwana Cliff Canyon'
    ],
    included: [
      'Mobil Transportasi AC Privat',
      'Driver Ramah & BBM Included',
      'Local Trekking Guide Tumpak Sewu',
      'Tiket Masuk Semua Objek Wisata',
      'Air Mineral'
    ],
    includedEn: [
      'Private AC Vehicle Transport',
      'Friendly Driver & Fuel Included',
      'Local Experienced Trekking Guide',
      'Entrance Tickets to All Sites',
      'Bottled Mineral Water'
    ],
    excluded: [
      'Sewa Sandal Trekking / Anti Selip',
      'Makan Siang & Pengeluaran Pribadi',
      'Tips Guide / Driver'
    ],
    excludedEn: [
      'Trekking Footwear Rental',
      'Lunch & Personal Expenses',
      'Guide & Driver Tipping'
    ],
    itinerary: [
      { title: '06:00 - Penjemputan', desc: 'Penjemputan di Malang/Batu dan berangkat menuju Pronojiwo Lumajang.' },
      { title: '08:30 - Tiba di Tumpak Sewu', desc: 'Briefing safety dengan Local Guide & menikmati Panorama Atas Tumpak Sewu.' },
      { title: '09:30 - Trekking Lembah', desc: 'Trekking ke dasar lembah air terjun dan eksplor Tebing Nirwana.' },
      { title: '11:30 - Goa Tetes', desc: 'Menelusuri keindahan Goa Tetes & aliran air alami.' },
      { title: '13:00 - Makan Siang & Bersih-bersih', desc: 'Istirahat, makan siang kuliner lokal, dan bilas badan.' },
      { title: '16:00 - Kembali ke Malang', desc: 'Pengantaran kembali ke Malang / Batu.' }
    ],
    waMessage: 'Halo Yoga Transport, saya ingin memesan Paket Explore Air Terjun Tumpak Sewu (Mulai Rp 400.000). Mohon bantuan jadwalnya.'
  },
  {
    id: 'ziarah-wali-5',
    title: 'Paket Ziarah Wali 5',
    titleEn: 'Wali 5 Pilgrimage Tour Package',
    priceText: 'Mulai Dari Rp 1.300.000',
    priceTextEn: 'Starting From Rp 1.300.000',
    numericPrice: 1300000,
    duration: '1 Hari',
    durationEn: '1 Day',
    badge: null,
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=800',
    description: 'Nikmati perjalanan spiritual dengan Paket Ziarah Wali 5 dari Malang. ke Makam Sunan Ampel, Sunan Giri, Sunan Bonang, Sunan Drajat, dan Sunan Maulana Malik Ibrahim dalam satu hari penuh.',
    descriptionEn: 'Spiritual pilgrimage package covering 5 sacred Walisongo tombs across East Java in one full day.',
    highlights: [
      'Makam Sunan Maulana Malik Ibrahim (Gresik)',
      'Makam Sunan Giri (Gresik)',
      'Makam Sunan Ampel (Surabaya)',
      'Makam Sunan Drajat (Lamongan)',
      'Makam Sunan Bonang (Tuban)'
    ],
    highlightsEn: [
      'Tomb of Sunan Maulana Malik Ibrahim (Gresik)',
      'Tomb of Sunan Giri (Gresik)',
      'Tomb of Sunan Ampel (Surabaya)',
      'Tomb of Sunan Drajat (Lamongan)',
      'Tomb of Sunan Bonang (Tuban)'
    ],
    included: [
      'Armada Mobil Privat (Avanza/Innova/Hiace/Bus)',
      'Driver Pengalaman Ziarah + BBM',
      'Biaya Parkir & Jalan Tol',
      'Air Mineral Untuk Rombongan'
    ],
    includedEn: [
      'Private Vehicle (Avanza/Innova/Hiace/Bus)',
      'Experienced Pilgrimage Driver & Fuel',
      'Parking Fees & Highway Tolls',
      'Complimentary Mineral Water'
    ],
    excluded: [
      'Infaq / Sedekah Pribadi di Makam',
      'Ojek / Becak Masuk Makam (Jika ada)',
      'Makan & Belanja Pribadi'
    ],
    excludedEn: [
      'Personal Donations at Tombs',
      'Local Shuttle/Rickshaw Fee to Tombs',
      'Meals & Personal Souvenirs'
    ],
    itinerary: [
      { title: '05:00 - Berangkat', desc: 'Berangkat dari Kota Malang menuju Surabaya & Gresik.' },
      { title: '07:30 - Sunan Ampel', desc: 'Ziarah Makam Sunan Ampel Surabaya.' },
      { title: '10:00 - Sunan Giri & Maulana Malik Ibrahim', desc: 'Ziarah Makam Sunan Maulana Malik Ibrahim & Sunan Giri di Gresik.' },
      { title: '13:00 - Sunan Drajat', desc: 'Makan siang & Ziarah Makam Sunan Drajat Lamongan.' },
      { title: '16:00 - Sunan Bonang', desc: 'Ziarah Makam Sunan Bonang Tuban.' },
      { title: '21:00 - Perjalanan Pulang', desc: 'Tiba kembali di Kota Malang dengan selamat.' }
    ],
    waMessage: 'Halo Yoga Transport, saya ingin memesan Paket Ziarah Wali 5 (Mulai Rp 1.300.000). Mohon informasi ketersediaan armada dan jadwalnya.'
  },
  {
    id: 'pantai-malang',
    title: 'Paket Wisata Pantai Malang',
    titleEn: 'Malang Southern Beach Tour Package',
    priceText: 'Mulai Dari Rp 1.000.000',
    priceTextEn: 'Starting From Rp 1.000.000',
    numericPrice: 1000000,
    duration: '1 Hari',
    durationEn: '1 Day',
    badge: null,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'Paket wisata Malang 4 hari 3 malam ini menawarkan pengalaman yang lengkap, mulai dari wisata edukasi, petualangan di alam, hingga kuliner khas.',
    descriptionEn: 'Explore the stunning tropical southern coastline of Malang with picturesque cliff views and white beaches.',
    highlights: [
      'Pantai Balekambang (Pura di Atas Laut)',
      'Pantai Teluk Asmara (Raja Ampat Malang)',
      'Pantai Goa Cina',
      'Pantai Batu Bengkung (Sunset View Point)'
    ],
    highlightsEn: [
      'Balekambang Beach (Sea Temple)',
      'Teluk Asmara Beach (Malang Mini Raja Ampat)',
      'Goa Cina Beach',
      'Batu Bengkung Sunset Point'
    ],
    included: [
      'Mobil Privat AC + BBM',
      'Driver Ramah Berpengalaman',
      'Tiket Masuk Seluruh Pantai',
      'Air Mineral'
    ],
    includedEn: [
      'Private AC Car + Fuel',
      'Friendly Experienced Driver',
      'Entrance Tickets to All Beaches',
      'Mineral Water'
    ],
    excluded: [
      'Makan Siang Seafood & Kuliner',
      'Sewa Gazebo / Wahana Pantai',
      'Pengeluaran Pribadi'
    ],
    excludedEn: [
      'Seafood Meals & Snacks',
      'Gazebo / Beach Rides Rental',
      'Personal Expenses'
    ],
    itinerary: [
      { title: '07:00 - Penjemputan', desc: 'Jemput di lokasi Malang Kota / Batu.' },
      { title: '09:30 - Pantai Balekambang', desc: 'Menikmati keindahan pulau karang Pura Ismoyo Balekambang.' },
      { title: '12:30 - Kuliner Seafood', desc: 'Makan siang kuliner ikan bakar segar tepi pantai.' },
      { title: '14:00 - Teluk Asmara & Goa Cina', desc: 'Eksplor gundukan pulau karang Teluk Asmara & pasir putih Goa Cina.' },
      { title: '17:00 - Sunset Batu Bengkung', desc: 'Menikmati pemandangan matahari terbenam di Batu Bengkung.' },
      { title: '19:30 - Kembali ke Malang', desc: 'Perjalanan kembali ke tempat penginapan.' }
    ],
    waMessage: 'Halo Yoga Transport, saya berminat pesan Paket Wisata Pantai Malang (Mulai Rp 1.000.000). Mohon konfirmasinya.'
  },
  {
    id: 'bromo-batu-malang',
    title: 'Paket Wisata Bromo & Batu Malang',
    titleEn: 'Bromo & Batu Malang 2D1N Package',
    priceText: 'Mulai Dari Rp 1.000.000',
    priceTextEn: 'Starting From Rp 1.000.000',
    numericPrice: 1000000,
    duration: '2 Hari 1 Malam',
    durationEn: '2 Days 1 Night',
    badge: null,
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=800',
    description: 'Paket ini sangat cocok bagi wisatawan luar kota yang memiliki waktu terbatas, seperti liburan akhir pekan.',
    descriptionEn: 'The perfect weekend escape package combining Batu city attractions with midnight Mount Bromo sunrise.',
    highlights: [
      'Midnight Sunrise Tour Bromo 4x4',
      'Malang Skyland & Bukit Santerra',
      'Museum Angkut / Jatim Park',
      'Pusat Oleh-Oleh Khas Malang & Batu'
    ],
    highlightsEn: [
      'Midnight Bromo 4x4 Sunrise Tour',
      'Malang Skyland & Santerra Flora Park',
      'Museum Angkut / Jatim Park Theme Park',
      'Batu Souvenir & Culinary Centers'
    ],
    included: [
      'Mobil Transportasi AC Privat 2 Hari',
      'Sewa Jeep Bromo 4x4 Privat',
      'Driver + BBM Selama Tour',
      'Tiket Masuk Wisata Sesuai Program',
      'Hotel / Penginapan 1 Malam (Opsional)'
    ],
    includedEn: [
      '2 Days Private AC Vehicle Transport',
      'Private 4x4 Bromo Jeep Charter',
      'Driver & Fuel for Full Itinerary',
      'Entrance Tickets to Programmed Sites',
      '1 Night Hotel Accommodation (Optional)'
    ],
    excluded: [
      'Makan Selama Tour',
      'Sewa Kuda Bromo',
      'Pengeluaran Pribadi'
    ],
    excludedEn: [
      'Meals Outside Program',
      'Bromo Horse Riding',
      'Personal Souvenirs'
    ],
    itinerary: [
      { title: 'Hari 1 - Wisata Kota Batu', desc: 'Jemput Bandara/Stasiun -> Flora Wisata Santerra -> Museum Angkut -> Check-in Hotel Batu/Malang & Istirahat.' },
      { title: 'Hari 2 - Bromo Sunrise & Drop Off', desc: '00:00 Penjemputan Bromo -> Golden Sunrise -> Kawah Bromo & Savana -> Kembali ke Malang & Drop off.' }
    ],
    waMessage: 'Halo Yoga Transport, saya ingin konsultasi & pesan Paket Wisata Bromo & Batu Malang 2D1N (Mulai Rp 1.000.000).'
  },
  {
    id: 'tour-malang-batu-3d2n',
    title: 'Paket Tour Malang & Batu',
    titleEn: 'Malang & Batu Highlights 3D2N Package',
    priceText: 'Mulai Dari Rp 1.600.000',
    priceTextEn: 'Starting From Rp 1.600.000',
    numericPrice: 1600000,
    duration: '3 Hari 2 Malam',
    durationEn: '3 Days 2 Nights',
    badge: null,
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800',
    description: 'Tanpa perlu repot mengatur itinerary, paket ini sudah mencakup berbagai destinasi populer seperti Jatim Park 2, Jatim Park 3, Museum Angkut, BNS, Wisata Petik Apel, dan Flora Wisata Santerra de Laponte.',
    descriptionEn: 'Hassle-free 3D2N tour featuring top Malang & Batu family destinations including Jatim Park 2 & 3, Museum Angkut, Apple Orchard, and Santerra.',
    highlights: [
      'Jatim Park 2 (Batu Secret Zoo) & Jatim Park 3 (Dino Park)',
      'Museum Angkut & Batu Night Spectacular (BNS)',
      'Flora Wisata Santerra de Laponte',
      'Wisata Petik Apel Kebun Asli Batu'
    ],
    highlightsEn: [
      'Jatim Park 2 (Batu Secret Zoo) & Jatim Park 3',
      'Museum Angkut & Batu Night Spectacular',
      'Santerra de Laponte Floral Gardens',
      'Fresh Batu Apple Picking Experience'
    ],
    included: [
      'Mobil Privat AC 3 Hari Full',
      'Driver Ramah & BBM',
      'Tiket Masuk Semua Wisata Utama',
      'Air Mineral Setiap Hari',
      'Antar Jemput Bandara / Stasiun'
    ],
    includedEn: [
      '3 Full Days Private AC Vehicle',
      'Experienced Driver & Fuel',
      'Entrance Tickets to All Main Theme Parks',
      'Daily Bottled Mineral Water',
      'Airport/Train Station Airport Transfers'
    ],
    excluded: [
      'Hotel / Penginapan (Bisa dibantu booking)',
      'Makan Pribadi',
      'Tips Driver & Pengeluaran Pribadi'
    ],
    excludedEn: [
      'Hotel Accommodation (Can be added on request)',
      'Personal Meals',
      'Driver Tipping & Personal Expenses'
    ],
    itinerary: [
      { title: 'Hari 1 - Flora Santerra & BNS', desc: 'Jemput Stasiun/Bandara -> Flora Wisata Santerra -> Wisata Petik Apel -> Malam di BNS -> Hotel.' },
      { title: 'Hari 2 - Jatim Park 2 & Museum Angkut', desc: 'Sarapan -> Jatim Park 2 (Batu Secret Zoo & Museum Satwa) -> Sore ke Museum Angkut -> Kuliner Malam Batu.' },
      { title: 'Hari 3 - Jatim Park 3 & Oleh-oleh', desc: 'Check out Hotel -> Jatim Park 3 Dino Park -> Pusat Oleh-oleh Khas Malang -> Transfer Bandara/Stasiun.' }
    ],
    waMessage: 'Halo Yoga Transport, saya tertarik dengan Paket Tour Malang & Batu 3D2N (Mulai Rp 1.600.000). Mohon info lengkapnya.'
  }
];
