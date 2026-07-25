import React, { useState } from 'react';
import { COOP_INFO } from '../data/initialData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Send, 
  CheckCircle2, 
  MessageCircle,
  Building2
} from 'lucide-react';

export const KontakPage: React.FC = () => {
  const [formState, setFormState] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });

  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.nama || !formState.pesan) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setFormState({ nama: '', email: '', subjek: '', pesan: '' });
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-800 via-slate-900 to-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-600/40 text-red-200 text-xs font-semibold px-3 py-1 rounded-full border border-red-500/30">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Layanan Pertanyaan & Informasi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Hubungi Koperasi Desa Merah Putih Sriamur
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tim sekretariat dan Waserda Koperasi siap memberikan pelayanan ramah dan cepat bagi seluruh anggota maupun masyarakat luas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Info Cards & Socials */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3">
              Informasi Kontak Resmi
            </h2>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <div className="p-2.5 bg-red-100 dark:bg-red-950/60 text-red-600 rounded-xl flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">Alamat Lengkap Kantor:</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">{COOP_INFO.address}</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-xl flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">Telepon / WhatsApp Layanan:</div>
                  <a href={`https://wa.me/${COOP_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="text-emerald-600 font-bold hover:underline">
                    {COOP_INFO.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2.5 bg-sky-100 dark:bg-sky-950/60 text-sky-600 rounded-xl flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">Alamat Surat Elektronik (Email):</div>
                  <a href={`mailto:${COOP_INFO.email}`} className="text-sky-600 font-bold hover:underline">
                    {COOP_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2.5 bg-amber-100 dark:bg-amber-950/60 text-amber-600 rounded-xl flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">Jam Operasional Pelayanan:</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{COOP_INFO.operationalHours}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media Link Cards */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-md space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
              Media Sosial Resmi Koperasi
            </h3>
            <div className="grid grid-cols-3 gap-3 pt-1">
              <a 
                href={COOP_INFO.socialMedia.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-slate-800 hover:bg-blue-600 p-3 rounded-2xl text-center text-xs font-semibold transition flex flex-col items-center gap-1.5"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a 
                href={COOP_INFO.socialMedia.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-slate-800 hover:bg-pink-600 p-3 rounded-2xl text-center text-xs font-semibold transition flex flex-col items-center gap-1.5"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href={COOP_INFO.socialMedia.youtube} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-slate-800 hover:bg-red-600 p-3 rounded-2xl text-center text-xs font-semibold transition flex flex-col items-center gap-1.5"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form & Maps */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Quick Form */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Kirim Pesan atau Pertanyaan</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Pesan Anda akan langsung diterima oleh petugas pelayanan umum sekretariat.</p>

            {sentSuccess ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-2xl border border-emerald-200 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Pesan Anda telah berhasil terkirim. Terima kasih atas masukan Anda!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-800 dark:text-slate-200">Nama Anda *</label>
                    <input
                      type="text"
                      value={formState.nama}
                      onChange={(e) => setFormState({ ...formState, nama: e.target.value })}
                      placeholder="Nama lengkap"
                      className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-800 dark:text-slate-200">Email atau No. WhatsApp</label>
                    <input
                      type="text"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="Kontak balasan"
                      className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-800 dark:text-slate-200">Subjek Pesan</label>
                  <input
                    type="text"
                    value={formState.subjek}
                    onChange={(e) => setFormState({ ...formState, subjek: e.target.value })}
                    placeholder="Contoh: Pertanyaan Stok Sembako / Usulan UMKM"
                    className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-800 dark:text-slate-200">Pesan / Masukan *</label>
                  <textarea
                    rows={4}
                    value={formState.pesan}
                    onChange={(e) => setFormState({ ...formState, pesan: e.target.value })}
                    placeholder="Tuliskan pertanyaan atau saran Anda di sini..."
                    className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive Google Map Embed */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 border border-slate-200 dark:border-slate-700 shadow-xs space-y-2">
            <div className="text-xs font-bold text-slate-800 dark:text-white px-2">Peta Poin Kantor Google Maps</div>
            <div className="h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <iframe
                title="Peta Google Maps Sriamur Tambun Utara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.425129384739!2d107.05432!3d-6.20789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ea456123456%3A0x1234567890abcdef!2sSriamur%2C%20Tambun%20Utara%2C%20Bekasi%20Regency%2C%20West%20Java!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
