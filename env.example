import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { Image as ImageIcon, Video, Calendar, Filter, X, Maximize2, Sparkles } from 'lucide-react';

interface GaleriPageProps {
  gallery: GalleryItem[];
}

export const GaleriPage: React.FC<GaleriPageProps> = ({ gallery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['Semua', 'RAT Koperasi', 'Panen Raya', 'UMKM', 'Pelatihan', 'Kegiatan'];

  const filteredGallery = gallery.filter((item) => {
    return selectedCategory === 'Semua' || item.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-800 via-slate-900 to-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-600/40 text-red-200 text-xs font-semibold px-3 py-1 rounded-full border border-red-500/30">
            <ImageIcon className="w-4 h-4 text-emerald-400" />
            <span>Dokumentasi Resmi Koperasi Sriamur</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Galeri Foto & Video Kegiatan
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Arsip liputan kegiatan musyawarah RAT, panen raya bersama kelompok tani, pelatihan kewirausahaan UMKM, serta peresmian unit usaha desa.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxItem(item)}
            className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition"></div>

              {/* Badge & Type Icon */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {item.category}
                </span>
                {item.type === 'video' && (
                  <span className="bg-amber-500 text-white p-1 rounded-md">
                    <Video className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              <button className="absolute top-3 right-3 bg-black/40 text-white p-1.5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition">
                <Maximize2 className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-[11px] text-amber-300 font-semibold flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-sm text-white line-clamp-1 group-hover:text-amber-200 transition">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
              {item.caption}
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div 
            className="relative bg-slate-900 text-white rounded-3xl overflow-hidden max-w-4xl w-full border border-slate-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2.5 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={activeLightboxItem.url}
                alt={activeLightboxItem.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                  {activeLightboxItem.category}
                </span>
                <span className="text-xs text-slate-400">{activeLightboxItem.date}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{activeLightboxItem.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{activeLightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
