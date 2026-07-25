import React, { useState } from 'react';
import { Product, Article, VillagePotential, PageView } from '../types';
import { Search, X, ShoppingBag, Newspaper, MapPin, ArrowRight } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  articles: Article[];
  potentials: VillagePotential[];
  onSelectProduct: (p: Product) => void;
  onSelectArticle: (a: Article) => void;
  onSelectPotential: (pot: VillagePotential) => void;
  setCurrentPage: (page: PageView) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  products,
  articles,
  potentials,
  onSelectProduct,
  onSelectArticle,
  onSelectPotential,
  setCurrentPage
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim() 
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : products.slice(0, 3);

  const filteredArticles = query.trim()
    ? articles.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase()))
    : articles.slice(0, 2);

  const filteredPotentials = query.trim()
    ? potentials.filter(pot => pot.title.toLowerCase().includes(query.toLowerCase()) || pot.category.toLowerCase().includes(query.toLowerCase()))
    : potentials.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50">
          <Search className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari produk sembako, artikel, potensi desa, atau pengumuman..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-200 dark:bg-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 transition"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-6 divide-y divide-slate-100 dark:divide-slate-800">
          
          {/* Products Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <span className="flex items-center gap-1.5 text-red-600 dark:text-red-400">
                <ShoppingBag className="w-4 h-4" />
                Produk Koperasi ({filteredProducts.length})
              </span>
              <button 
                onClick={() => { setCurrentPage('produk'); onClose(); }}
                className="text-red-600 hover:underline flex items-center gap-1 text-[11px]"
              >
                Lihat Semua Pasar <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => { onSelectProduct(product); onClose(); }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer transition flex items-center gap-3 group"
                >
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-red-600 truncate">
                      {product.name}
                    </div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      Rp {product.price.toLocaleString('id-ID')}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{product.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles Section */}
          <div className="pt-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <span className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400">
                <Newspaper className="w-4 h-4" />
                Artikel & Berita Desa ({filteredArticles.length})
              </span>
              <button 
                onClick={() => { setCurrentPage('artikel'); onClose(); }}
                className="text-sky-600 hover:underline flex items-center gap-1 text-[11px]"
              >
                Semua Berita <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => { onSelectArticle(article); onClose(); }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500 hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer transition flex items-center gap-3 group"
                >
                  <img src={article.thumbnail} alt={article.title} className="w-14 h-12 object-cover rounded-lg flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 line-clamp-1">
                      {article.title}
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Potentials Section */}
          <div className="pt-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <MapPin className="w-4 h-4" />
                Potensi Desa Sriamur ({filteredPotentials.length})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredPotentials.map((pot) => (
                <div
                  key={pot.id}
                  onClick={() => { onSelectPotential(pot); onClose(); }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer transition flex items-center gap-3 group"
                >
                  <img src={pot.image} alt={pot.title} className="w-12 h-12 object-cover rounded-lg flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 line-clamp-1">
                      {pot.title}
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">{pot.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-100 dark:bg-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 text-center border-t border-slate-200 dark:border-slate-800">
          Tip: Gunakan kata kunci seperti <span className="font-semibold text-slate-700 dark:text-slate-200">"Beras"</span>, <span className="font-semibold text-slate-700 dark:text-slate-200">"RAT"</span>, atau <span className="font-semibold text-slate-700 dark:text-slate-200">"Pertanian"</span>.
        </div>
      </div>
    </div>
  );
};
