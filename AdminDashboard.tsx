import React, { useState } from 'react';
import { Product } from '../types';
import { 
  ShoppingBag, 
  Search, 
  SlidersHorizontal, 
  Star, 
  Sparkles, 
  MessageCircle, 
  X, 
  Check, 
  Tag, 
  Package, 
  Info,
  ChevronDown
} from 'lucide-react';

interface ProdukPageProps {
  products: Product[];
  selectedProductModal?: Product | null;
  setSelectedProductModal: (p: Product | null) => void;
}

export const ProdukPage: React.FC<ProdukPageProps> = ({
  products,
  selectedProductModal,
  setSelectedProductModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'lowest' | 'highest' | 'popular' | 'newest'>('popular');
  const [badgeFilter, setBadgeFilter] = useState<'all' | 'new' | 'bestseller' | 'featured'>('all');
  
  // Quantity counter for modal purchase
  const [quantity, setQuantity] = useState<number>(1);

  const categories = [
    'Semua', 
    'Sembako', 
    'Produk Pertanian', 
    'Produk UMKM', 
    'Makanan', 
    'Minuman', 
    'Kerajinan', 
    'Produk Rumah Tangga'
  ];

  // Filtering Logic
  const filteredProducts = products.filter((prod) => {
    const matchesCategory = selectedCategory === 'Semua' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (prod.producer && prod.producer.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let matchesBadge = true;
    if (badgeFilter === 'new') matchesBadge = !!prod.isNew;
    if (badgeFilter === 'bestseller') matchesBadge = !!prod.isBestSeller;
    if (badgeFilter === 'featured') matchesBadge = !!prod.isFeatured;

    return matchesCategory && matchesSearch && matchesBadge;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'lowest') return a.price - b.price;
    if (sortBy === 'highest') return b.price - a.price;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return b.soldCount - a.soldCount; // popular
  });

  const openProductDetail = (p: Product) => {
    setSelectedProductModal(p);
    setQuantity(1);
  };

  const handleOrderWhatsApp = (p: Product, qty: number = 1) => {
    const totalPrice = p.price * qty;
    const text = encodeURIComponent(
      `Halo Admin Koperasi Desa Merah Putih Sriamur,\n\nSaya ingin memesan produk:\n• Nama: ${p.name}\n• Kategori: ${p.category}\n• Jumlah: ${qty} ${p.unit}\n• Total Harga: Rp ${totalPrice.toLocaleString('id-ID')}\n\nMohon info ketersediaan stok dan metode pengiriman/pengambilan di Waserda. Terima kasih!`
    );
    window.open(`https://wa.me/6281288990011?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Marketplace Header */}
      <div className="bg-gradient-to-r from-red-800 via-red-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-600/40 text-red-200 text-xs font-semibold px-3 py-1 rounded-full border border-red-500/30">
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
            <span>Pasar Waserda Digital Sriamur</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Marketplace Koperasi Desa Merah Putih
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Dapatkan kebutuhan pokok sembako murah, produk pertanian organik, serta aneka olahan kuliner & kerajinan tangan buatan UMKM lokal Desa Sriamur.
          </p>
        </div>
      </div>

      {/* Search, Filter, Sort Controls */}
      <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
        
        {/* Top Row Search & Sort */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Field */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari beras, minyak, keripik, dodol..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Badge Filters */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
              <button
                onClick={() => setBadgeFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition ${badgeFilter === 'all' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500'}`}
              >
                Semua
              </button>
              <button
                onClick={() => setBadgeFilter('bestseller')}
                className={`px-3 py-1.5 rounded-lg transition ${badgeFilter === 'bestseller' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-500'}`}
              >
                Terlaris
              </button>
              <button
                onClick={() => setBadgeFilter('new')}
                className={`px-3 py-1.5 rounded-lg transition ${badgeFilter === 'new' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500'}`}
              >
                Baru
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-xl px-4 py-2.5 appearance-none pr-8 cursor-pointer focus:outline-none"
              >
                <option value="popular">Terpopuler</option>
                <option value="lowest">Harga Terendah</option>
                <option value="highest">Harga Tertinggi</option>
                <option value="newest">Terbaru</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2.5 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Bottom Row Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none border-t border-slate-100 dark:border-slate-700/60">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Marketplace Grid */}
      {sortedProducts.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-500">
          Tidak ditemukan produk dengan kriteria pencarian tersebut.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => openProductDetail(product)}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                  {product.isBestSeller && (
                    <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs uppercase">
                      Terlaris
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs uppercase">
                      Baru
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-1 rounded-md">
                  Stok: {product.stock} {product.unit.split(' ')[0]}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white line-clamp-2 group-hover:text-red-600 transition">
                    {product.name}
                  </h3>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Produsen: {product.producer || 'Koperasi Sriamur'}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <div>
                      {product.originalPrice && (
                        <div className="text-[11px] text-slate-400 line-through">
                          Rp {product.originalPrice.toLocaleString('id-ID')}
                        </div>
                      )}
                      <div className="text-base font-extrabold text-red-600 dark:text-red-400">
                        Rp {product.price.toLocaleString('id-ID')}
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      / {product.unit}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openProductDetail(product);
                      }}
                      className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold py-2 rounded-lg text-xs transition"
                    >
                      Detail
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrderWhatsApp(product, 1);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg text-xs transition flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order WA</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL PRODUK MODAL */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 bg-slate-100 dark:bg-slate-800">
              <img 
                src={selectedProductModal.image} 
                alt={selectedProductModal.name}
                className="w-full h-full object-cover" 
              />
              <button 
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full backdrop-blur-md transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 left-4 flex gap-1">
                {selectedProductModal.isBestSeller && (
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    Terlaris
                  </span>
                )}
                {selectedProductModal.isNew && (
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    Baru
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {selectedProductModal.category}
                </span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-0.5">
                  {selectedProductModal.name}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Produsen: <span className="font-semibold text-slate-700 dark:text-slate-300">{selectedProductModal.producer || 'Waserda Kopdes'}</span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Harga Per Satuan ({selectedProductModal.unit})</div>
                  <div className="text-2xl font-extrabold text-red-600 dark:text-red-400">
                    Rp {selectedProductModal.price.toLocaleString('id-ID')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Status Stok</div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Tersedia ({selectedProductModal.stock} {selectedProductModal.unit.split(' ')[0]})
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-800 dark:text-white">Deskripsi Produk:</div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProductModal.description}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-800 dark:text-white">Jumlah Pesanan:</div>
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-bold text-slate-800 dark:text-white">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(Math.min(selectedProductModal.stock, quantity + 1))}
                    className="px-3 py-1.5 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <div className="text-xs">
                <div className="text-slate-400">Total Pembayaran:</div>
                <div className="text-lg font-bold text-red-600 dark:text-red-400">
                  Rp {(selectedProductModal.price * quantity).toLocaleString('id-ID')}
                </div>
              </div>

              <button
                onClick={() => handleOrderWhatsApp(selectedProductModal, quantity)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Langsung via WA</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
