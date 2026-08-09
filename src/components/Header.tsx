import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, MapPin, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'tours' | 'rentals';
  setCurrentPage: (page: 'home' | 'tours' | 'rentals') => void;
  onBookingClick: () => void;
}

export default function Header({ activeSection, onNavClick, lang, setLang, currentPage, setCurrentPage, onBookingClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

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

  const navItems = [
    { label: t.nav_home, id: 'home', type: 'page', pageId: 'home' },
    { label: lang === 'EN' ? 'Tours' : 'Paket Wisata', id: 'tours', type: 'page', pageId: 'tours' },
    { label: lang === 'EN' ? 'Rentals' : 'Pilihan Mobil', id: 'rentals', type: 'page', pageId: 'rentals' },
    { label: lang === 'EN' ? 'Clients' : 'Ulasan', id: 'testimonials', type: 'section', sectionId: 'testimonials' },
    { label: t.nav_contact, id: 'contact', type: 'section', sectionId: 'contact' },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    if (item.type === 'page') {
      setCurrentPage(item.pageId as any);
      onNavClick(item.pageId);
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        onNavClick(item.sectionId as any);
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-sm"
    >
      {/* 1. Top Bar / Header Contact */}
      <div className="bg-luxury-black text-gray-300 text-[10px] sm:text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/5 flex justify-between items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
            <span className="truncate max-w-[280px] sm:max-w-none text-center sm:text-left">{t.topbar_address}</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=628813305066" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-luxury-gold shrink-0 animate-pulse" />
              <span>08813305066</span>
            </a>
            <div className="h-3 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
              <span>{t.topbar_service}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 border-b border-slate-100'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div 
              onClick={() => handleItemClick({ label: t.nav_home, id: 'home', type: 'page', pageId: 'home' })}
              className="flex items-center cursor-pointer group"
              id="header-logo"
            >
              <img
                src="/logo.png"
                alt="Yoga Transport"
                className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
              {navItems.map((item) => {
                const isItemActive = 
                  (item.type === 'page' && currentPage === item.pageId) ||
                  (item.type === 'section' && activeSection === item.sectionId && currentPage === 'home');
                  
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`font-display text-sm font-semibold transition-colors cursor-pointer relative py-2 px-1 ${
                      isItemActive
                        ? 'text-luxury-gold'
                        : 'text-gray-600 hover:text-luxury-gold'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                    {isItemActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
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
                        className="w-full text-left px-4 py-2 text-xs font-display font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between"
                      >
                        <span>Indonesia</span>
                        {lang === 'ID' && <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold"></span>}
                      </button>
                      <button
                        onClick={() => {
                          setLang('EN');
                          setShowLangDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-display font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between"
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
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => {
                const isItemActive = 
                  (item.type === 'page' && currentPage === item.pageId) ||
                  (item.type === 'section' && activeSection === item.sectionId && currentPage === 'home');
                  
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`block w-full text-left px-4 py-3 font-display text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      isItemActive
                        ? 'bg-gold-50 text-luxury-gold border-l-4 border-luxury-gold pl-3'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-luxury-gold'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
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
