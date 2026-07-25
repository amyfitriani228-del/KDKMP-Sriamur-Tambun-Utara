import React, { useState } from 'react';
import { Article } from '../types';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Eye, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Bookmark 
} from 'lucide-react';

interface ArtikelPageProps {
  articles: Article[];
  selectedArticleModal?: Article | null;
  setSelectedArticleModal: (a: Article | null) => void;
}

export const ArtikelPage: React.FC<ArtikelPageProps> = ({
  articles,
  selectedArticleModal,
  setSelectedArticleModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Semua', 
    'Berita Koperasi', 
    'Kegiatan', 
    'UMKM', 
    'Edukasi', 
    'Pelatihan', 
    'Pengumuman'
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'Semua' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-red-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-sky-600/40 text-sky-200 text-xs font-semibold px-3 py-1 rounded-full border border-sky-500/30">
            <Newspaper className="w-4 h-4 text-sky-300" />
            <span>Kabar & Informasi Publik Sriamur</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Artikel, Berita & Pengumuman
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Pusat berita resmi Koperasi Desa Merah Putih Sriamur. Dapatkan informasi seputar RAT, pelatihan UMKM, edukasi perkoperasian, hingga jadwal panen raya.
          </p>
        </div>
      </div>

      {/* ARTICLE READER MODE VIEW */}
      {selectedArticleModal ? (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-xl space-y-8 animate-fadeIn">
          
          <button
            onClick={() => setSelectedArticleModal(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-red-600 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-xl transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Artikel</span>
          </button>

          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider">
              <span className="bg-sky-100 dark:bg-sky-950 px-2.5 py-1 rounded-md">
                {selectedArticleModal.category}
              </span>
              <span>•</span>
              <span className="text-slate-400 font-normal">{selectedArticleModal.date}</span>
              <span>•</span>
              <span className="text-slate-400 font-normal">{selectedArticleModal.readTime} baca</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {selectedArticleModal.title}
            </h1>

            <div className="flex items-center justify-between pt-2 pb-4 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-red-500" />
                <span>Oleh: <strong className="text-slate-700 dark:text-slate-200">{selectedArticleModal.author}</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-slate-400" />
                  {selectedArticleModal.views} x dibaca
                </span>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="rounded-2xl overflow-hidden h-72 sm:h-96 w-full shadow-lg">
              <img 
                src={selectedArticleModal.thumbnail} 
                alt={selectedArticleModal.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Body */}
            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 pt-4 whitespace-pre-line">
              {selectedArticleModal.content}
            </div>

            {/* Tags */}
            {selectedArticleModal.tags && (
              <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                {selectedArticleModal.tags.map((t, idx) => (
                  <span key={idx} className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-lg">
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Related Articles */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Artikel Terkait Lainnya</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {articles.filter(a => a.id !== selectedArticleModal.id).slice(0, 3).map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => setSelectedArticleModal(rel)}
                  className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-sky-500 transition flex gap-3"
                >
                  <img src={rel.thumbnail} alt={rel.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-white line-clamp-2">{rel.title}</h4>
                    <span className="text-[10px] text-slate-400 mt-1 block">{rel.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* ARTICLES LIST VIEW */
        <div className="space-y-8">
          
          {/* Search & Categories */}
          <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari judul berita, pelatihan..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Featured Article Banner */}
          {featuredArticle && selectedCategory === 'Semua' && !searchQuery && (
            <div 
              onClick={() => setSelectedArticleModal(featuredArticle)}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg cursor-pointer group transition hover:shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredArticle.thumbnail} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                  Berita Utama
                </span>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider">
                    {featuredArticle.category} • {featuredArticle.date}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-sky-600 transition">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-sky-600 dark:text-sky-400">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticleModal(article)}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-sky-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-800 dark:text-white group-hover:text-sky-600 transition line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-sky-600 dark:text-sky-400">
                    <span>Baca Artikel</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
