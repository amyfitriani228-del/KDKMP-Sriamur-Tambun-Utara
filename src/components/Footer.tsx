import React from 'react';
import { Logo } from './Logo';
import { PageView } from '../types';
import { COOP_INFO } from '../data/initialData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink,
  Heart
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t-2 border-red-700 pt-16 pb-8 relative overflow-hidden font-sans">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-red-700/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: About Koperasi */}
          <div className="space-y-4">
            <Logo size="lg" className="brightness-110" />
            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Koperasi Desa Merah Putih Sriamur adalah wadah ekonomi kerakyatan berbasis gotong royong warga Desa Sriamur, Kecamatan Tambun Utara, Kabupaten Bekasi, Jawa Barat.
            </p>
            
            {/* Legal Badges */}
            <div className="pt-2 space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Legalitas Resmi Terdaftar</span>
              </div>
              <div className="bg-stone-950 p-3 rounded-sm border border-stone-800 text-[11px] text-stone-300 space-y-1 font-mono">
                <div>• AHU-0012892.AH.01.26 (2024)</div>
                <div>• NIB: 9120301928471</div>
                <div>• SK Kemenkumham RI</div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-white border-b border-red-700/60 pb-2 inline-block">
              Navigasi Utama
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home' as PageView, label: 'Beranda Utamakan Warga' },
                { id: 'profil' as PageView, label: 'Profil & Visi Misi Koperasi' },
                { id: 'potensi' as PageView, label: 'Potensi Desa Sriamur' },
                { id: 'produk' as PageView, label: 'Marketplace Produk UMKM' },
                { id: 'artikel' as PageView, label: 'Berita & Pelatihan Desa' },
                { id: 'promosi' as PageView, label: 'Promo Sembako & Flash Sale' },
                { id: 'galeri' as PageView, label: 'Galeri Dokumentasi Kegiatan' },
                { id: 'anggota' as PageView, label: 'Formulir Pendaftaran Anggota' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="hover:text-red-400 transition flex items-center gap-2 group text-stone-400 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Jam Operasional & Unit Usaha */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-white border-b border-emerald-700/60 pb-2 inline-block">
              Jam Operasional & Unit
            </h3>
            
            <div className="bg-stone-950 p-4 rounded-sm border border-stone-800 space-y-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-serif font-bold text-white mb-0.5">Waktu Pelayanan Waserda:</div>
                  <div className="text-stone-300">Senin – Sabtu: 08.00 – 16.00 WIB</div>
                  <div className="text-red-400 font-medium mt-1">Minggu & Libur: Tutup</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                Unit Usaha Koperasi:
              </div>
              <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                <li>Waserda Sembako Merah Putih</li>
                <li>Pemasaran Hasil Tani & Peternakan</li>
                <li>Simpan Pinjam Syariah Gotong Royong</li>
                <li>Kemitraan UMKM & Pengolahan Pangan</li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-white border-b border-red-700/60 pb-2 inline-block">
              Kontak Kantor
            </h3>
            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{COOP_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`https://wa.me/${COOP_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-emerald-300">
                  {COOP_INFO.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${COOP_INFO.email}`} className="hover:text-sky-300">
                  {COOP_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2.5">Media Sosial Resmi:</div>
              <div className="flex items-center gap-2">
                <a 
                  href={COOP_INFO.socialMedia.facebook} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 bg-stone-800 hover:bg-blue-700 text-stone-300 hover:text-white rounded-sm transition"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href={COOP_INFO.socialMedia.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 bg-stone-800 hover:bg-pink-700 text-stone-300 hover:text-white rounded-sm transition"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href={COOP_INFO.socialMedia.youtube} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 bg-stone-800 hover:bg-red-700 text-stone-300 hover:text-white rounded-sm transition"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} <span className="text-stone-300 font-serif font-semibold">Koperasi Desa Merah Putih Sriamur</span>. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('profil')} className="hover:text-stone-300 transition">
              Ketentuan Service
            </button>
            <span>•</span>
            <button onClick={() => handleNav('kontak')} className="hover:text-stone-300 transition">
              Peta Lokasi Google Maps
            </button>
            <span>•</span>
            <button onClick={() => handleNav('admin')} className="hover:text-red-400 text-stone-400 font-semibold transition">
              Akses Pengurus
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
