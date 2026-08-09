import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../utils/translations';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Compass, 
  Car, 
  Home,
  Briefcase
} from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'tours' | 'rentals' | 'gallery';
  setCurrentPage: (page: 'home' | 'tours' | 'rentals' | 'gallery') => void;
  activeSection: string;
  onBookingClick: () => void;
}

export default function Header({
  onNavClick,
  lang,
  setLang,
  currentPage,
  setCurrentPage,
  activeSection,
  onBookingClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showLayananDropdown, setShowLayananDropdown] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageClick = (pageId: 'home' | 'tours' | 'rentals' | 'gallery') => {
    setCurrentPage(pageId);
    onNavClick(pageId);
    setIsOpen(false);
    setShowLayananDropdown(false);
  };

  const handleSectionClick = (sectionId: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      onNavClick(sectionId);
    }, 100);
    setIsOpen(false);
    setShowLayananDropdown(false);
  };

  const servicesList = [
    {
      id: 'tours',
      label: lang === 'EN' ? 'Tour Packages' : 'Paket Wisata',
      desc: lang === 'EN' ? 'Bromo, Malang & Batu Trips' : 'Trip Bromo, Malang & Batu',
      icon: Compass,
      action: () => handlePageClick('tours')
    },
    {
      id: 'rentals',
      label: lang === 'EN' ? 'Car Rental' : 'Pilihan Mobil',
      desc: lang === 'EN' ? 'City Car, SUV & Bus Charter' : 'City Car, SUV & Sewa Bus',
      icon: Car,
      action: () => handlePageClick('rentals')
    },
    {
      id: 'penginapan',
      label: lang === 'EN' ? 'Homestay Lodging' : 'Penginapan Homestay',
      desc: lang === 'EN' ? 'RJA 1 & RJA 2 Homestay Malang' : 'RJA 1 & RJA 2 Malang',
      icon: Home,
      action: () => handleSectionClick('penginapan')
    }
  ];

  const isLayananActive = currentPage === 'tours' || currentPage === 'rentals' || (currentPage === 'home' && activeSection === 'penginapan');

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-sm"
    >
      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2 border-b border-slate-100/80 shadow-sm'
            : 'bg-white py-2.5 border-b border-slate-100/80 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Logo */}
            <div 
              onClick={() => handlePageClick('home')}
              className="flex items-center cursor-pointer group py-1 gap-2.5 sm:gap-3"
              id="header-logo"
            >
              <picture>
                <source srcSet="/logo.avif" type="image/avif" />
                <source srcSet="/logo.png" type="image/png" />
                <img
                  src="/logo.png"
                  alt="Yoga Transport Emblem Logo"
                  className="h-12 sm:h-14 w-auto max-h-[56px] object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-md"
                />
              </picture>
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-base sm:text-lg text-gray-900 leading-none tracking-tight group-hover:text-[#d97706] transition-colors">
                  YOGA TRANSPORT
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#d97706] uppercase tracking-widest mt-0.5">
                  Malang Tour & Travel
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
              {/* Beranda */}
              <button
                onClick={() => handlePageClick('home')}
                className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 ${
                  currentPage === 'home' && activeSection === 'home'
                    ? 'text-luxury-gold'
                    : 'text-gray-600 hover:text-luxury-gold'
                }`}
              >
                {t.nav_home}
                {currentPage === 'home' && activeSection === 'home' && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              {/* Tentang Kami */}
              <button
                onClick={() => handleSectionClick('about')}
                className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 ${
                  currentPage === 'home' && activeSection === 'about'
                    ? 'text-luxury-gold'
                    : 'text-gray-600 hover:text-luxury-gold'
                }`}
              >
                {lang === 'EN' ? 'About Us' : 'Tentang Kami'}
                {currentPage === 'home' && activeSection === 'about' && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              {/* LAYANAN DROPDOWN MENU (Paket Wisata, Pilihan Mobil, Penginapan) */}
              <div 
                className="relative"
                onMouseEnter={() => setShowLayananDropdown(true)}
                onMouseLeave={() => setShowLayananDropdown(false)}
              >
                <button
                  onClick={() => setShowLayananDropdown(!showLayananDropdown)}
                  className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 flex items-center gap-1.5 ${
                    isLayananActive
                      ? 'text-luxury-gold'
                      : 'text-gray-600 hover:text-luxury-gold'
                  }`}
                >
                  <span>{lang === 'EN' ? 'Services' : 'Layanan'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showLayananDropdown ? 'rotate-180 text-luxury-gold' : ''}`} />
                  
                  {isLayananActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>

                {/* Dropdown Menu Floating Box */}
                <AnimatePresence>
                  {showLayananDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-2 border border-gray-100 z-50 overflow-hidden"
                    >
                      <div className="text-[10px] font-bold text-gray-400 uppercase px-3 py-1.5 tracking-wider border-b border-gray-100 mb-1">
                        {lang === 'EN' ? 'Select Service' : 'Pilihan Layanan Kami'}
                      </div>

                      {servicesList.map((srv) => {
                        const IconComp = srv.icon;
                        const isSrvActive = 
                          (srv.id === 'tours' && currentPage === 'tours') ||
                          (srv.id === 'rentals' && currentPage === 'rentals') ||
                          (srv.id === 'penginapan' && currentPage === 'home' && activeSection === 'penginapan');

                        return (
                          <button
                            key={srv.id}
                            onClick={srv.action}
                            className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center gap-3 cursor-pointer group ${
                              isSrvActive ? 'bg-amber-50 text-[#d97706]' : 'hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                              isSrvActive ? 'bg-[#d97706] text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-amber-100 group-hover:text-[#d97706]'
                            }`}>
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-display font-extrabold text-xs text-gray-900 group-hover:text-[#d97706] transition-colors">
                                {srv.label}
                              </div>
                              <div className="text-[10px] text-gray-500 font-sans">
                                {srv.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Galeri (Gallery Page) */}
              <button
                onClick={() => handlePageClick('gallery')}
                className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 ${
                  currentPage === 'gallery'
                    ? 'text-luxury-gold'
                    : 'text-gray-600 hover:text-luxury-gold'
                }`}
              >
                {lang === 'EN' ? 'Gallery' : 'Galeri'}
                {currentPage === 'gallery' && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              {/* Kontak & Lokasi */}
              <button
                onClick={() => handleSectionClick('contact')}
                className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 ${
                  currentPage === 'home' && activeSection === 'contact'
                    ? 'text-luxury-gold'
                    : 'text-gray-600 hover:text-luxury-gold'
                }`}
              >
                {t.nav_contact}
                {currentPage === 'home' && activeSection === 'contact' && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </nav>

            {/* Right Utilities (Language, solid Blue CTA, Hamburger) */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-white font-display font-semibold text-xs py-2 px-4 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
                  id="language-btn"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang === 'ID' ? 'ID' : 'EN'}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                
                <AnimatePresence>
                  {showLangDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl py-1 border border-gray-100 z-50 animate-fade-in"
                    >
                      <button
                        onClick={() => {
                          setLang('ID');
                          setShowLangDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-display font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer"
                      >
                        <span>Indonesia</span>
                        {lang === 'ID' && <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold"></span>}
                      </button>
                      <button
                        onClick={() => {
                          setLang('EN');
                          setShowLangDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-display font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer"
                      >
                        <span>English</span>
                        {lang === 'EN' && <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold"></span>}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* BOOKING SEKARANG Solid Blue CTA Button */}
              <button
                onClick={onBookingClick}
                className="bg-[#2563eb] hover:bg-blue-700 text-white font-display font-extrabold text-xs uppercase py-2.5 px-5 rounded-xl transition-all shadow-md cursor-pointer shrink-0 hidden md:block"
              >
                {lang === 'EN' ? 'BOOKING NOW' : 'BOOKING SEKARANG'}
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-luxury-gold transition-colors cursor-pointer rounded-full"
                id="mobile-menu-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 text-left">
              {/* Mobile Beranda */}
              <button
                onClick={() => handlePageClick('home')}
                className={`block w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'home' && activeSection === 'home'
                    ? 'bg-amber-50 text-luxury-gold border-l-4 border-luxury-gold pl-3'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav_home}
              </button>

              {/* Mobile Tentang Kami */}
              <button
                onClick={() => handleSectionClick('about')}
                className={`block w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'home' && activeSection === 'about'
                    ? 'bg-amber-50 text-luxury-gold border-l-4 border-luxury-gold pl-3'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {lang === 'EN' ? 'About Us' : 'Tentang Kami'}
              </button>

              {/* Mobile Layanan (Collapsible Dropdown Group) */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
                  className={`w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                    isLayananActive
                      ? 'bg-amber-50 text-luxury-gold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{lang === 'EN' ? 'Services' : 'Layanan'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLayananOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileLayananOpen && (
                  <div className="pl-4 space-y-1 border-l-2 border-amber-200 ml-4 py-1">
                    {servicesList.map((srv) => {
                      const IconComp = srv.icon;
                      return (
                        <button
                          key={srv.id}
                          onClick={srv.action}
                          className="w-full text-left px-3 py-2 text-xs font-display font-semibold text-gray-700 hover:text-luxury-gold flex items-center gap-2.5 cursor-pointer rounded-lg hover:bg-amber-50/50"
                        >
                          <IconComp className="w-4 h-4 text-[#d97706]" />
                          <span>{srv.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Galeri */}
              <button
                onClick={() => handlePageClick('gallery')}
                className={`block w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'gallery'
                    ? 'bg-amber-50 text-luxury-gold border-l-4 border-luxury-gold pl-3'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {lang === 'EN' ? 'Gallery' : 'Galeri'}
              </button>

              {/* Mobile Kontak & Lokasi */}
              <button
                onClick={() => handleSectionClick('contact')}
                className={`block w-full text-left px-4 py-2.5 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'home' && activeSection === 'contact'
                    ? 'bg-amber-50 text-luxury-gold border-l-4 border-luxury-gold pl-3'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav_contact}
              </button>
              
              {/* Mobile Booking Button */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    onBookingClick();
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-display font-extrabold text-xs uppercase py-3 rounded-xl transition-all shadow-md cursor-pointer text-center"
                >
                  {lang === 'EN' ? 'BOOKING NOW' : 'BOOKING SEKARANG'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
