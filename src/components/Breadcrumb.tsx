import React from 'react';
import { PageView } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  extraTitle?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  currentPage, 
  setCurrentPage, 
  extraTitle 
}) => {
  const pageNames: Record<PageView, string> = {
    home: 'Beranda',
    profil: 'Profil Koperasi',
    potensi: 'Potensi Desa',
    produk: 'Produk & Pasar Desa',
    artikel: 'Artikel & Berita',
    promosi: 'Promosi & Flash Sale',
    galeri: 'Galeri Dokumentasi',
    anggota: 'Menjadi Anggota',
    kontak: 'Kontak Kantor',
    admin: 'Portal Admin Koperasi'
  };

  if (currentPage === 'home') return null;

  return (
    <nav className="bg-stone-100 dark:bg-slate-900/90 border-b border-stone-200 dark:border-slate-800 py-2.5 px-4 sm:px-6 lg:px-8 text-xs font-medium text-stone-500 dark:text-stone-400">
      <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <button 
          onClick={() => setCurrentPage('home')} 
          className="hover:text-red-700 dark:hover:text-red-400 transition flex items-center gap-1 text-stone-600 dark:text-stone-300"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Beranda</span>
        </button>
        
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        
        <span className={extraTitle ? "text-stone-600 dark:text-stone-300 hover:underline cursor-pointer" : "text-red-700 dark:text-red-400 font-bold font-serif"}
              onClick={() => extraTitle && setCurrentPage(currentPage)}>
          {pageNames[currentPage]}
        </span>

        {extraTitle && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-red-700 dark:text-red-400 font-bold font-serif truncate max-w-xs">
              {extraTitle}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};
