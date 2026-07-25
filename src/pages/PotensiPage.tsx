import React, { useState } from 'react';
import { VillagePotential } from '../types';
import { MapPin, Search, Filter, Phone, ArrowRight, X, Image as ImageIcon, Sparkles } from 'lucide-react';

interface PotensiPageProps {
  potentials: VillagePotential[];
}

export const PotensiPage: React.FC<PotensiPageProps> = ({ potentials }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPotential, setSelectedPotential] = useState<VillagePotential | null>(null);

  const categories = ['Semua', 'Pertanian', 'Perdagangan', 'UMKM', 'Peternakan', 'Perikanan', 'Jasa', 'Wisata Desa'];

  const filteredPotentials = potentials.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-600/40 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30">
            <MapPin className="w-4 h-4 text-emerald-300" />
            <span>Kekayaan Alam & Usaha Warga</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Potensi Desa Sriamur Tambun Utara
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Menampilkan komoditas unggulan pertanian, peternakan, perikanan, wisata saung desa, serta beragam kluster usaha mikro di Desa Sriamur, Kabupaten Bekasi.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari potensi pertanian, UMKM..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Grid Potensi Desa */}
      {filteredPotentials.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-500">
          Tidak ditemukan potensi desa dengan pencarian tersebut.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPotentials.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-base text-slate-800 dark:text-white group-hover:text-emerald-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-semibold">
                    <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <button
                    onClick={() => setSelectedPotential(item)}
                    className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-emerald-600 hover:text-white text-slate-800 dark:text-slate-200 font-bold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-2"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>Lihat Deskripsi & Galeri</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL POTENSI MODAL */}
      {selectedPotential && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-60 bg-slate-900">
              <img 
                src={selectedPotential.image} 
                alt={selectedPotential.title}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <button 
                onClick={() => setSelectedPotential(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">
                  {selectedPotential.category}
                </span>
                <h3 className="text-xl font-bold">{selectedPotential.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-1">Deskripsi Lengkap</h4>
                <p className="leading-relaxed">{selectedPotential.description}</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="font-bold text-slate-800 dark:text-white text-xs flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span>Dampak Ekonomi Bagi Desa:</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">{selectedPotential.impact}</p>
              </div>

              {selectedPotential.contactPerson && (
                <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold">Kontak Koordinator Sektor:</div>
                    <div>{selectedPotential.contactPerson}</div>
                  </div>
                </div>
              )}

              {/* Gallery Images */}
              {selectedPotential.gallery && selectedPotential.gallery.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-800 dark:text-white text-xs">Galeri Dokumentasi Potensi:</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedPotential.gallery.map((img, idx) => (
                      <img key={idx} src={img} alt="Galeri potensi" className="h-24 w-full object-cover rounded-lg border border-slate-200 dark:border-slate-700" />
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedPotential(null)}
                className="bg-slate-800 dark:bg-slate-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-slate-700 transition"
              >
                Tutup Window
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
