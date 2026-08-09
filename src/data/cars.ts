import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  {
    id: 'all-new-avanza',
    name: 'All New Avanza',
    nameAr: 'أول نيو أفانزا',
    category: 'Family MPV',
    pricePerDay: 700000,
    priceDisplay: 'Rp 700.000 / Hari',
    image: '/avanza.avif',
    seats: 6,
    transmission: 'Manual/Matic',
    fuel: 'Gasoline',
    fuelAr: 'بنزين',
    includeList: ['Mobil', 'Driver'],
    includeListAr: ['السيارة', 'السائق'],
    description: 'Kendaraan keluarga terpopuler yang lincah dan efisien untuk perjalanan di Malang dan sekitarnya.',
    descriptionAr: 'سيارة عائلية اقتصادية من تويوta، نظيفة ومجهزة بمكيف هواء مزدوج لتوفير أقصى درجات الراحة.',
    rating: 4.8,
    reviewsCount: 92,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 6 Penumpang', labelAr: 'السعة', valueAr: '٦ ركاب' },
      { label: 'Fasilitas', value: 'Full AC, MP3/Bluetooth, Clean Interior', labelAr: 'الميزات', valueAr: 'مكيف، بلوتوث، داخلي نظيف' }
    ]
  },
  {
    id: 'toyota-innova-reborn',
    name: 'Innova Reborn',
    nameAr: 'تويوتا إنوفا ريبورن',
    category: 'Premium MPV',
    pricePerDay: 850000,
    priceDisplay: 'Rp 850.000 – Rp 900.000 / Hari',
    image: '/innova3.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Diesel / Gasoline',
    fuelAr: 'ديزل / بنزين',
    includeList: ['Mobil', 'Driver'],
    includeListAr: ['السيارة', 'السائق'],
    description: 'MPV kelas premium dengan kenyamanan suspensi ekstra lembut dan kabin lapang untuk seluruh keluarga.',
    descriptionAr: 'سيارة عائلية مريحة للغاية بمساحة داخلية واسعة ونظام تعليق ممتاز.',
    rating: 4.9,
    reviewsCount: 145,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 7 Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas', value: 'Premium Comfort, Captain Seat Look, Smooth Ride', labelAr: 'الميزات', valueAr: 'راحة ممتازة، مقاعد كابتن' }
    ]
  },
  {
    id: 'toyota-hiace-commuter',
    name: 'Toyota Hiace Commuter',
    nameAr: 'تويوتا هايس كوميوتر',
    category: 'Minibus',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/hiace.avif',
    seats: 14,
    transmission: 'Manual',
    fuel: 'Diesel',
    fuelAr: 'ديزل',
    includeList: ['Mobil', 'Driver'],
    includeListAr: ['السيارة', 'السائق'],
    description: 'Minibus berkapasitas besar dengan kabin luas dan pendingin udara merata, pilihan terbaik bagi perjalanan rombongan.',
    descriptionAr: 'ميني باص واسع ومكيف بالكامل، خيار مثالي للمجموعات والعائلات الكبيرة.',
    rating: 4.8,
    reviewsCount: 88,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 14 Penumpang', labelAr: 'السعة', valueAr: '١٤ راكب' },
      { label: 'Fasilitas', value: 'Kabin Luas, Reclining Seats, Nyaman untuk Rombongan', labelAr: 'الميزات', valueAr: 'كابينة واسعة، مقاعد قابلة للإمالة' }
    ]
  },
  {
    id: 'toyota-hiace-premio',
    name: 'Toyota Hiace Premio',
    nameAr: 'تويوتا هايس بريميو',
    category: 'Minibus VIP',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/hiace_premio.avif',
    seats: 12,
    transmission: 'Manual',
    fuel: 'Diesel',
    fuelAr: 'ديزل',
    includeList: ['Mobil', 'Driver'],
    includeListAr: ['السيارة', 'السائق'],
    description: 'Minibus kelas eksekutif dengan suspensi modern, kabin super nyaman, serta kabin yang kedap suara.',
    descriptionAr: 'ميني باص فاخر وممتاز مع مقصورة داخلية مريحة وراقية.',
    rating: 4.9,
    reviewsCount: 64,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 11-12 Penumpang', labelAr: 'السعة', valueAr: '١١-١٢ راكب' },
      { label: 'Fasilitas', value: 'VIP Interior, Modern Suspensi, Ekstra Nyaman', labelAr: 'الميزات', valueAr: 'داخلي فاخر، تعليق حديث، مريح جداً' }
    ]
  },
  {
    id: 'isuzu-elf-long',
    name: 'Isuzu Elf Long',
    nameAr: 'إيسوزو إلف طويل',
    category: 'Minibus Ekstra',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/elf_long.avif',
    seats: 19,
    transmission: 'Manual',
    fuel: 'Diesel',
    fuelAr: 'ديزل',
    includeList: ['Mobil', 'Driver'],
    includeListAr: ['السيارة', 'السائق'],
    description: 'Minibus dengan kapasitas penumpang ekstra besar, bagasi luas, serta ketangguhan mesin untuk perjalanan jauh.',
    descriptionAr: 'ميني باص بحجم كبير وحقائب واسعة وتصميم قوي للمسافات الطويلة.',
    rating: 4.7,
    reviewsCount: 56,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 18-19 Penumpang', labelAr: 'السعة', valueAr: '١٨-١٩ راكب' },
      { label: 'Fasilitas', value: 'Capacity King, Bagasi Luas, Luas & Tangguh', labelAr: 'الميزات', valueAr: 'حجم تخزين هائل، سعة قصوى، قوي' }
    ]
  },
  {
    id: 'medium-bus',
    name: 'Medium Bus / Bus Kecil',
    nameAr: 'حافلة متوسطة / حافلة صغيرة',
    category: 'Bus Pariwisata',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/medium_bus.avif',
    seats: 35,
    transmission: 'Manual',
    fuel: 'Diesel',
    fuelAr: 'ديزل',
    includeList: ['Mobil', 'Driver'],
    includeListAr: ['السيارة', 'السائق'],
    description: 'Bus pariwisata berukuran sedang dengan fasilitas hiburan lengkap, ideal untuk perjalanan dinas atau tur wisata skala besar.',
    descriptionAr: 'حافلة سياحية متوسطة الحجم بنظام صوتي ترفيهي ممتاز للرحلات والشركات.',
    rating: 4.8,
    reviewsCount: 42,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 30-35 Penumpang', labelAr: 'السعة', valueAr: '٣٠-٣٥ راكب' },
      { label: 'Fasilitas', value: 'AC Louver, Reclining Seat, Audio-Video System', labelAr: 'الميزات', valueAr: 'مكيف، مقاعد مائلة، شاشة ديجيتال' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Rian Prasetya',
    role: 'Wisatawan dari Jakarta',
    text: 'Sangat puas dengan pelayanan Yoga Transport saat liburan ke Bromo bersama keluarga. Innova Reborn-nya sangat bersih dan wangi. Driver-nya profesional, ramah, dan tahu rute terbaik menghindari kemacetan.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    carModel: 'Innova Reborn',
    date: 'Juli 2026'
  },
  {
    id: 'testi-2',
    name: 'Siti Aminah',
    role: 'Rombongan Kantor dari Surabaya',
    text: 'Kami menyewa Toyota Hiace Commuter untuk acara dinas kantor ke Batu. Unitnya terawat dengan baik, suspensinya nyaman, AC dingin. Driver-nya tepat waktu dan sangat bersahabat membantu angkat barang kami.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    carModel: 'Toyota Hiace Commuter',
    date: 'Juni 2026'
  },
  {
    id: 'testi-3',
    name: 'Budi Santoso',
    role: 'Keluarga Besar dari Semarang',
    text: 'Pelayanan yang luar biasa! Kami memesan unit Elf Long untuk keliling Malang-Batu. Kapasitas pas untuk seluruh keluarga dan bagasinya luas. Tarif transparan, tidak ada biaya tambahan aneh-aneh. Sangat dipercaya.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    carModel: 'Isuzu Elf Long',
    date: 'Mei 2026'
  }
];
