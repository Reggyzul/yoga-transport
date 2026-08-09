import React from 'react';
import { Headset, Phone, MapPin, Instagram } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { openWhatsApp } from '../utils/whatsapp';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
}

export default function Footer({ onNavClick, lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="contact" className="bg-luxury-black text-white pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Absolute background accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold via-gold-300 to-luxury-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper pre-footer callout section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-white/10 items-center">
          <div className="space-y-2 text-left">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-luxury-gold animate-pulse">
              YOGA TRANSPORT MALANG
            </h3>
            <p className="font-sans text-sm text-gray-300">
              {t.footer_pre_desc}
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <div className="font-display font-black text-2xl text-white/40 tracking-wider">
              EST. 2026
            </div>
          </div>
        </div>

        {/* Core Footer grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 pb-12">
          
          {/* Column 1: Brand & Office Address */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <picture>
                <source srcSet="/logo.avif" type="image/avif" />
                <source srcSet="/logo.png" type="image/png" />
                <img
                  src="/logo.png"
                  alt="Yoga Transport Emblem Logo"
                  className="h-20 sm:h-24 w-auto max-h-[96px] object-contain filter drop-shadow-xl"
                />
              </picture>
            </div>

            <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
              {t.footer_desc}
            </p>

            <div className="text-xs text-gray-400 font-sans space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4.5 h-4.5 text-luxury-gold shrink-0 mt-0.5" />
                <span>{t.footer_office}</span>
              </div>
              <p>©2026 Yoga Transport Malang. {t.footer_rights}</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-luxury-gold uppercase border-l-2 border-luxury-gold pl-2">
              Menu
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-gray-400">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_about}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_services}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('cars')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_cars}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('steps')} className="hover:text-luxury-gold transition-colors cursor-pointer text-left w-full">
                  {t.nav_steps}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details & Interactive Google Map */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-luxury-gold uppercase border-l-2 border-luxury-gold pl-2">
              {t.footer_hubungi}
            </h4>
            
            <div className="space-y-4 text-xs font-sans text-gray-400">
              {/* WhatsApp Fast Response */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Headset className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">WhatsApp Fast Response</p>
                  <button 
                    onClick={() => openWhatsApp()}
                    className="text-sm font-display font-bold text-white hover:text-luxury-gold mt-0.5 block cursor-pointer text-left"
                  >
                    08813305066
                  </button>
                </div>
              </div>

              {/* Instagram Official */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Instagram Official</p>
                  <a 
                    href="https://instagram.com/yoga_transport"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-display font-bold text-rose-400 hover:text-luxury-gold mt-0.5 block"
                  >
                    @yoga_transport
                  </a>
                </div>
              </div>

              {/* Direct Call Tel */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Direct Call</p>
                  <a href="tel:+628813305066" className="font-semibold text-white mt-0.5 block hover:text-luxury-gold">
                    08813305066
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="pt-2">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg w-full h-36 bg-white/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3533816434454!2d112.64539121477793!3d-7.962382994265147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62854378f44ff%3A0xe54e60938bf8c60f!2sJl.%20Rawa%2C%20Bunulrejo%2C%20Kec.%20Blimbing%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065123!5e0!3m2!1sid!2sid!4v1689999999999!5m2!1sid!2sid"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yoga Transport Malang Location Map"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

        {/* Lower Disclaimer */}
        <div className="border-t border-white/10 pt-8 text-center text-[10px] text-gray-500 font-sans leading-relaxed">
          {t.footer_disclaimer}
        </div>

      </div>
    </footer>
  );
}
