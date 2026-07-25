import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PageView } from '../types';
import { 
  Home, 
  UserCheck, 
  ShoppingBag, 
  Newspaper, 
  Percent, 
  Image as ImageIcon, 
  UserPlus, 
  Phone, 
  Search, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ShieldAlert,
  MapPin,
  Building2
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  openSearchModal: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  darkMode,
  setDarkMode,
  openSearchModal,
  cartCount = 0
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems: { id: PageView; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Beranda', icon: <Home className="w-4 h-4" /> },
    { id: 'profil', label: 'Profil', icon: <Building2 className="w-4 h-4" /> },
    { id: 'potensi', label: 'Potensi Desa', icon: <MapPin className="w-4 h-4" /> },
    { id: 'produk', label: 'Produk & Pasar', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'artikel', label: 'Artikel & Berita', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'promosi', label: 'Promosi', icon: <Percent className="w-4 h-4" /> },
    { id: 'galeri', label: 'Galeri', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'anggota', label: 'Daftar Anggota', icon: <UserPlus className="w-4 h-4" /> },
    { id: 'kontak', label: 'Kontak', icon: <Phone className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Announcement - Editorial Masthead style */}
      <div className="bg-red-900 text-red-50 text-[11px] py-2 px-4 font-medium flex justify-between items-center z-50 relative border-b border-red-950/60 tracking-wide">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="bg-red-800/80 text-red-100 text-[10px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded border border-red-700/50">
              Warta Resmi
            </span>
            <span className="font-serif italic text-red-100">Koperasi Desa Merah Putih Sriamur</span>
            <span className="hidden md:inline text-red-300/80">• Tambun Utara, Kabupaten Bekasi</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-red-200/90 font-sans">
            <span>Senin – Sabtu: 08.00 – 16.00 WIB</span>
            <button 
              onClick={() => handleNavClick('admin')}
              className="flex items-center gap-1 text-white hover:underline font-semibold bg-red-950/80 px-2.5 py-0.5 rounded border border-red-800/60"
            >
              <ShieldAlert className="w-3 h-3 text-emerald-300" />
              <span>Portal Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-stone-50/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-stone-200/90 dark:border-slate-800' 
            : 'bg-stone-50 dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')} 
              className="text-left focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1 transition"
            >
              <Logo size="md" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-md text-xs xl:text-sm font-medium tracking-tight transition-all duration-200 flex items-center gap-1.5 ${
                      isActive 
                        ? 'bg-red-800 text-white font-semibold shadow-xs' 
                        : 'text-stone-700 dark:text-stone-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-stone-200/60 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className={isActive ? 'text-white' : 'text-stone-400 dark:text-stone-500'}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Global Search Button */}
              <button
                onClick={openSearchModal}
                className="p-2 rounded-md text-stone-700 dark:text-stone-300 hover:bg-stone-200/70 dark:hover:bg-slate-800 transition flex items-center gap-1.5 text-xs font-medium border border-stone-300/80 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80"
                title="Cari Produk, Artikel, Potensi Desa..."
              >
                <Search className="w-4 h-4 text-stone-500" />
                <span className="hidden sm:inline">Cari...</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono text-stone-400 bg-stone-100 dark:bg-slate-900 rounded border border-stone-200 dark:border-slate-700">⌘K</kbd>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md text-stone-700 dark:text-stone-300 hover:bg-stone-200/70 dark:hover:bg-slate-800 transition border border-stone-300/80 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80"
                title={darkMode ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
              </button>

              {/* Quick WhatsApp Action CTA */}
              <a
                href="https://wa.me/6281288990011?text=Halo%20Koperasi%20Desa%20Merah%20Putih%20Sriamur,%20saya%20ingin%20bertanya%20informasi"
                target="_blank"
                rel="noreferrer"
                className="hidden xl:flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-md transition shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                <span>Layanan WA</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-stone-700 dark:text-stone-200 hover:bg-stone-200/70 dark:hover:bg-slate-800 transition border border-stone-300/80 dark:border-slate-700"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-red-700" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-lg animate-fadeIn">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1 mb-1">
              Menu Utama
            </div>
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold transition ${
                    isActive 
                      ? 'bg-red-600 text-white' 
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 mt-2 space-y-2">
              <button
                onClick={() => handleNavClick('admin')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-600" />
                  Portal Admin Koperasi
                </span>
                <span className="text-xs bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-2 py-0.5 rounded font-bold">Akses</span>
              </button>

              <a
                href="https://wa.me/6281288990011?text=Halo%20Koperasi%20Desa%20Merah%20Putih%20Sriamur"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-lg text-sm"
              >
                <Phone className="w-4 h-4" />
                Hubungi WhatsApp Resmi
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
