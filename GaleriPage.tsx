import React from 'react';
import { PageView, Product, VillagePotential, Article, PromoItem, Testimonial } from '../types';
import { COOP_INFO } from '../data/initialData';
import { 
  Users, 
  ShoppingBag, 
  Building2, 
  Newspaper, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Percent, 
  MapPin, 
  Star, 
  CheckCircle2, 
  PhoneCall, 
  TrendingUp,
  Award,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageView) => void;
  products: Product[];
  potentials: VillagePotential[];
  articles: Article[];
  promos: PromoItem[];
  testimonials: Testimonial[];
  onSelectProduct: (p: Product) => void;
  onSelectArticle: (a: Article) => void;
  onSelectPotential: (pot: VillagePotential) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  products,
  potentials,
  articles,
  promos,
  testimonials,
  onSelectProduct,
  onSelectArticle,
  onSelectPotential,
}) => {
  const featuredProducts = products.filter(p => p.isFeatured || p.isBestSeller).slice(0, 4);
  const topArticles = articles.slice(0, 3);
  const flashSale = promos.find(p => p.type === 'Flash Sale') || promos[0];

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. HERO BANNER SECTION - Editorial Magazine Cover Style */}
      <section className="relative bg-gradient-to-b from-stone-900 via-red-950 to-stone-900 text-stone-100 overflow-hidden py-16 lg:py-24 border-b-2 border-red-700">
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-red-950/90 border border-red-700/60 text-red-200 text-[11px] uppercase tracking-widest font-semibold px-4 py-1.5 rounded-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Warta & Portal Koperasi Desa Sriamur</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight text-white">
                Membangun Ekonomi Desa Melalui Semangat{' '}
                <span className="italic font-serif text-red-300 underline decoration-red-600/80 underline-offset-8">
                  Gotong Royong
                </span>
              </h1>

              <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans font-normal">
                Wadah pemberdayaan ekonomi dan usaha warga Desa Sriamur, Tambun Utara, Kabupaten Bekasi. Menyediakan kebutuhan sembako murah, Waserda, kemitraan pemasaran UMKM, hingga produk pertanian berkualitas.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setCurrentPage('produk')}
                  className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 group"
                >
                  <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Lihat Produk Desa</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setCurrentPage('anggota')}
                  className="w-full sm:w-auto bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700 font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-sm backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2.5 hover:border-emerald-500"
                >
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Gabung Menjadi Anggota</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-stone-300 border-t border-stone-800/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Badan Hukum Kemenkumham</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>NIB Resmi Terdaftar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Bagi Hasil SHU Transparan</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                
                <div className="bg-stone-900/90 rounded-sm border border-stone-700/90 overflow-hidden shadow-2xl p-4 space-y-4">
                  <div className="relative h-60 rounded-sm overflow-hidden border border-stone-700">
                    <img 
                      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" 
                      alt="Suasana Desa Sriamur Tambun Utara"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Potensi Agraris & Desa</div>
                      <div className="text-sm font-serif font-bold">Desa Sriamur, Tambun Utara, Bekasi</div>
                    </div>
                  </div>

                  {/* Quick Card Features */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-stone-950/80 p-3 rounded-sm border border-stone-800">
                      <div className="text-stone-400 font-medium">Sembako Murah</div>
                      <div className="text-stone-100 font-bold mt-0.5">Waserda Sriamur</div>
                    </div>
                    <div className="bg-stone-950/80 p-3 rounded-sm border border-stone-800">
                      <div className="text-stone-400 font-medium">Kemitraan Tani</div>
                      <div className="text-emerald-400 font-bold mt-0.5">Pupuk & Panen</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATISTIK KOPERASI SECTION - Editorial Metric Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-sm shadow-md border border-stone-200 dark:border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-stone-200 dark:divide-slate-800">
            
            <div className="p-2 space-y-1">
              <div className="w-10 h-10 mx-auto rounded-sm bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400 flex items-center justify-center font-bold border border-red-200 dark:border-red-900">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-2">
                {COOP_INFO.stats.members.toLocaleString('id-ID')}+
              </div>
              <div className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                Jumlah Anggota
              </div>
            </div>

            <div className="p-2 space-y-1">
              <div className="w-10 h-10 mx-auto rounded-sm bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold border border-emerald-200 dark:border-emerald-900">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-2">
                {COOP_INFO.stats.umkmProducts}+
              </div>
              <div className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                Produk UMKM
              </div>
            </div>

            <div className="p-2 space-y-1">
              <div className="w-10 h-10 mx-auto rounded-sm bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold border border-amber-200 dark:border-amber-900">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-2">
                {COOP_INFO.stats.businessUnits}
              </div>
              <div className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                Unit Usaha
              </div>
            </div>

            <div className="p-2 space-y-1">
              <div className="w-10 h-10 mx-auto rounded-sm bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 flex items-center justify-center font-bold border border-sky-200 dark:border-sky-900">
                <Newspaper className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-2">
                {COOP_INFO.stats.articles}+
              </div>
              <div className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                Artikel & Berita
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROFIL BRIEF & VISI MISI SNIPPET - Editorial Feature Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-r from-red-950 via-stone-900 to-slate-950 text-stone-100 rounded-sm p-8 sm:p-12 shadow-lg relative overflow-hidden border border-red-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2 font-sans">
                <Sparkles className="w-4 h-4" />
                <span>Mengenal Lebih Dekat</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white">
                Koperasi Desa Merah Putih Sriamur
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                Didirikan atas inisiatif gotong royong masyarakat Desa Sriamur Tambun Utara untuk memajukan perekonomian desa, membuka akses pasar bagi petani & pengrajin lokal, serta menghadirkan toko sembako murah bagi warga.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-stone-900/90 p-4 rounded-sm border border-stone-800">
                  <div className="font-serif font-bold text-amber-300 text-sm mb-1">Visi Utama</div>
                  <div className="text-xs text-stone-300">
                    Menjadi koperasi desa percontohan nasional yang mandiri, sejahtera, dan berbasis digital.
                  </div>
                </div>
                <div className="bg-stone-900/90 p-4 rounded-sm border border-stone-800">
                  <div className="font-serif font-bold text-emerald-300 text-sm mb-1">Misi Mulia</div>
                  <div className="text-xs text-stone-300">
                    Meningkatkan pendapatan anggota melalui Waserda, kemitraan pertanian, dan bagi hasil transparan.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentPage('profil')}
                  className="bg-white text-stone-900 hover:bg-stone-200 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition inline-flex items-center gap-2"
                >
                  <span>Selengkapnya Tentang Profil</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-stone-900/80 p-6 rounded-sm border border-stone-800 text-center space-y-3 w-full max-w-sm">
                <div className="w-16 h-16 bg-red-900 rounded-sm mx-auto flex items-center justify-center p-2 border border-red-700">
                  <div className="font-serif font-extrabold text-white text-lg">KMP</div>
                </div>
                <div className="text-sm font-serif font-bold text-white">Prinsip Koperasi Merah Putih</div>
                <p className="text-xs text-stone-300 font-sans">
                  Transparan • Kejujuran • Gotong Royong • Kesejahteraan Anggota
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FLASH SALE & PROMO BANNER */}
      {flashSale && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-800 via-red-900 to-stone-900 text-white rounded-sm p-6 sm:p-8 shadow-md relative overflow-hidden border-l-4 border-amber-400">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 bg-black/30 text-amber-300 text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest border border-amber-400/40">
                  <Percent className="w-3.5 h-3.5" />
                  <span>Promo Koperasi Spesial Warga</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold">{flashSale.title}</h3>
                <p className="text-stone-200 text-sm max-w-xl">{flashSale.subtitle}</p>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setCurrentPage('promosi')}
                  className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-sm shadow-xs transition"
                >
                  Klaim Diskon Sekarang
                </button>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 5. PRODUK UNGGULAN (MARKETPLACE PREVIEW) - Editorial Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-3 border-b border-stone-200 dark:border-slate-800">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-red-700 dark:text-red-400 mb-1">
              Marketplace Desa
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Produk Koperasi & UMKM Unggulan
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
              Diproduksi oleh warga lokal Desa Sriamur dengan standar higienis dan harga terjangkau.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('produk')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400 hover:underline self-start sm:self-auto"
          >
            <span>Semua Produk Marketplace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="bg-white dark:bg-slate-900 rounded-sm border border-stone-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-stone-100 dark:bg-slate-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                  {product.isBestSeller && (
                    <span className="bg-amber-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-xs shadow-xs uppercase tracking-widest">
                      Terlaris
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-emerald-800 text-white text-[9px] font-bold px-2 py-0.5 rounded-xs shadow-xs uppercase tracking-widest">
                      Baru
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2 right-2 bg-stone-950/80 backdrop-blur-md text-stone-200 text-[10px] font-mono px-2 py-0.5 rounded-xs border border-stone-800">
                  Stok: {product.stock} {product.unit.split(' ')[0]}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-sm font-serif font-bold text-stone-900 dark:text-stone-100 line-clamp-2 group-hover:text-red-700 transition">
                    {product.name}
                  </h3>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    Oleh: {product.producer || 'Waserda Sriamur'}
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-stone-400 line-through">
                      {product.originalPrice ? `Rp ${product.originalPrice.toLocaleString('id-ID')}` : ''}
                    </div>
                    <div className="text-base font-bold text-red-700 dark:text-red-400">
                      Rp {product.price.toLocaleString('id-ID')}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/6281288990011?text=Halo%20Koperasi%20Sriamur,%20saya%20ingin%20membeli%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-emerald-800 hover:bg-emerald-900 text-white p-2 rounded-xs transition"
                    title="Beli Langsung via WA"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. POTENSI DESA SECTION PREVIEW */}
      <section className="bg-stone-100/80 dark:bg-slate-900/60 py-12 border-y border-stone-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-1">
              Kekayaan Khas Desa Sriamur
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Potensi Ekonomi Desa Tambun Utara
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-2">
              Keanekaragaman sektor pertanian, peternakan, perikanan, dan produk usaha mikro yang menjadi pilar kesejahteraan warga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {potentials.slice(0, 3).map((pot) => (
              <div
                key={pot.id}
                onClick={() => onSelectPotential(pot)}
                className="bg-white dark:bg-slate-900 rounded-sm overflow-hidden border border-stone-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pot.image}
                    alt={pot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-xs uppercase tracking-widest">
                    {pot.category}
                  </span>
                </div>
                
                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 transition">
                    {pot.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 font-sans">
                    {pot.description}
                  </p>
                  <div className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1 pt-2 border-t border-stone-100 dark:border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>{pot.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button
              onClick={() => setCurrentPage('potensi')}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition inline-flex items-center gap-2"
            >
              <span>Jelajahi Seluruh Potensi Desa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 7. ARTIKEL & BERITA DESA - Editorial Magazine Columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-3 border-b border-stone-200 dark:border-slate-800">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-sky-700 dark:text-sky-400 mb-1">
              Kabar & Terbitan Desa
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Artikel, Berita & Pelatihan
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('artikel')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 hover:underline self-start sm:self-auto"
          >
            <span>Lihat Semua Artikel</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white dark:bg-slate-900 rounded-sm overflow-hidden border border-stone-200 dark:border-slate-800 shadow-xs hover:shadow-md transition cursor-pointer flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-sky-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-xs uppercase tracking-widest">
                  {article.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] text-stone-400 mb-1 font-mono">{article.date} • {article.readTime}</div>
                  <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-sky-700 transition line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 mt-2 font-sans">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-slate-800 text-xs font-semibold text-sky-700 dark:text-sky-400 flex items-center justify-between">
                  <span className="uppercase tracking-wider text-[10px]">Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONI ANGGOTA - Editorial Pull Quotes */}
      <section className="bg-stone-900 text-white py-12 rounded-sm max-w-7xl mx-auto px-6 sm:px-12 border border-stone-800 shadow-lg">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-1">
            Suara Anggota
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Manfaat Nyata Bagi Warga Sriamur
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-stone-950/80 p-6 rounded-sm border border-stone-800 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-stone-300 italic font-serif leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-stone-800">
                <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-stone-700" />
                <div>
                  <div className="text-xs font-bold text-white font-sans">{t.name}</div>
                  <div className="text-[10px] text-emerald-400 font-mono">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. JOIN CTA & MAP PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-stone-900 text-white rounded-sm p-8 sm:p-12 shadow-xl border border-emerald-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Ingin Menjadi Bagian Dari Koperasi Desa Merah Putih Sriamur?
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl font-sans">
              Daftarkan diri Anda secara online untuk menikmati manfaat simpanan berimbang, akses pembelian sembako murah, dan bagian SHU tahunan.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('anggota')}
            className="bg-white text-stone-900 hover:bg-emerald-50 font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-sm shadow-md transition flex-shrink-0 flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-emerald-800" />
            <span>Isi Formulir Pendaftaran</span>
          </button>
        </div>
      </section>

    </div>
  );
};
