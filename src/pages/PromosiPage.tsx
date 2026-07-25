import React, { useState, useEffect } from 'react';
import { PromoItem, Product, Testimonial } from '../types';
import { COOP_INFO } from '../data/initialData';
import { 
  Percent, 
  Clock, 
  Flame, 
  Gift, 
  ShoppingBag, 
  Play, 
  Star, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface PromosiPageProps {
  promos: PromoItem[];
  products: Product[];
  testimonials: Testimonial[];
  onSelectProduct: (p: Product) => void;
}

export const PromosiPage: React.FC<PromosiPageProps> = ({
  promos,
  products,
  testimonials,
  onSelectProduct
}) => {
  // Flash Sale Countdown Timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashSaleProducts = products.filter(p => p.originalPrice && p.originalPrice > p.price);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-600 via-amber-600 to-red-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Pesta Diskon Waserda Desa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Promosi & Flash Sale Merah Putih
          </h1>
          <p className="text-red-100 text-sm sm:text-base leading-relaxed">
            Khusus anggota dan warga Desa Sriamur! Nikmati potongan harga sembako, promo bundel hemat harian, serta diskon spesial produk karya UMKM lokal.
          </p>
        </div>
      </div>

      {/* FLASH SALE COUNTDOWN SECTION */}
      <section className="bg-gradient-to-br from-slate-900 to-red-950 text-white p-6 sm:p-8 rounded-3xl border border-red-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-red-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-600 rounded-2xl animate-pulse">
              <Flame className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Flash Sale Waserda Sriamur</h2>
              <p className="text-xs text-red-200">Batas Waktu Penawaran Terbatas Hari Ini</p>
            </div>
          </div>

          {/* Countdown Digit Boxes */}
          <div className="flex items-center gap-2 text-center">
            <span className="text-xs font-bold text-slate-300 mr-2 hidden sm:inline">Berakhir Dalam:</span>
            <div className="bg-red-600 px-3 py-2 rounded-xl text-lg font-black font-mono border border-red-400 shadow-xs">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span className="text-amber-400 font-bold text-xl">:</span>
            <div className="bg-red-600 px-3 py-2 rounded-xl text-lg font-black font-mono border border-red-400 shadow-xs">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="text-amber-400 font-bold text-xl">:</span>
            <div className="bg-red-600 px-3 py-2 rounded-xl text-lg font-black font-mono border border-red-400 shadow-xs">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Flash Sale Item List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashSaleProducts.slice(0, 3).map((prod) => {
            const discount = Math.round(((prod.originalPrice! - prod.price) / prod.originalPrice!) * 100);
            return (
              <div 
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 hover:border-red-500 transition cursor-pointer flex gap-4 group"
              >
                <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-slate-900">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <span className="absolute top-1 left-1 bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded">
                    -{discount}%
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-white group-hover:text-amber-300 transition line-clamp-2">
                      {prod.name}
                    </h3>
                    <div className="text-[11px] text-slate-400 mt-1">Stok promo: {prod.stock} unit</div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 line-through">
                      Rp {prod.originalPrice?.toLocaleString('id-ID')}
                    </div>
                    <div className="text-base font-extrabold text-amber-400">
                      Rp {prod.price.toLocaleString('id-ID')}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROMO BANNERS GRID */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">
            Penawaran Pilihan
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">
            Program Promo Mingguan Koperasi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800 text-white h-64 flex flex-col justify-between p-6 group"
            >
              <img 
                src={promo.bannerImage} 
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-red-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {promo.type}
                </span>
                <span className="text-xs text-amber-300 font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                  Berlaku s/d {new Date(promo.validUntil).toLocaleDateString('id-ID')}
                </span>
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="text-xl font-extrabold text-white">{promo.title}</h3>
                <p className="text-xs text-slate-300">{promo.subtitle}</p>
                <a
                  href="https://wa.me/6281288990011?text=Halo%20Admin%20Koperasi,%20saya%20ingin%20mengklaim%20promo%20mingguan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition mt-2"
                >
                  <Gift className="w-4 h-4" />
                  <span>Klaim Voucher via WA</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO PROMOSI SHOWCASE */}
      <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">
              Video Edukasi & Promosi
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">
              Video Profil Waserda & Kegiatan Koperasi
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-64 border border-slate-700 shadow-md group">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
              alt="Video Waserda Sriamur" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href={COOP_INFO.socialMedia.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition"
              >
                <Play className="w-8 h-8 ml-1 fill-white" />
              </a>
            </div>
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <div className="text-xs font-bold">Tur Digital Waserda Sembako Sriamur</div>
              <div className="text-[10px] text-slate-300">Durasi: 2 Min • Channel YouTube Koperasi</div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-64 border border-slate-700 shadow-md group">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" 
              alt="Video Pertanian Sriamur" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href={COOP_INFO.socialMedia.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition"
              >
                <Play className="w-8 h-8 ml-1 fill-white" />
              </a>
            </div>
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <div className="text-xs font-bold">Dokumentasi Kemitraan Panen Padi Organik</div>
              <div className="text-[10px] text-slate-300">Durasi: 4 Min • Koperasi Desa Sriamur</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI ANGGOTA */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
            Ulasan Kepuasan
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">
            Pengalaman Warga Berbelanja di Waserda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">{t.name}</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
