import React, { useState } from 'react';
import { MemberRegistration } from '../types';
import { 
  UserPlus, 
  ShieldCheck, 
  UploadCloud, 
  CheckCircle2, 
  FileText, 
  CreditCard, 
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface MenjadiAnggotaPageProps {
  onRegisterSubmit: (reg: Omit<MemberRegistration, 'id' | 'status' | 'createdAt'>) => void;
}

export const MenjadiAnggotaPage: React.FC<MenjadiAnggotaPageProps> = ({ onRegisterSubmit }) => {
  const [formData, setFormData] = useState({
    nama: '',
    nik: '',
    alamat: '',
    noHp: '',
    email: '',
    jenisKeanggotaan: 'Anggota Biasa' as 'Anggota Biasa' | 'Anggota Luar Biasa' | 'Mitra UMKM',
  });

  const [ktpPreview, setKtpPreview] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRegId, setSubmittedRegId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleKtpUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setKtpPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nama.trim() || !formData.nik.trim() || !formData.alamat.trim() || !formData.noHp.trim()) {
      setErrorMessage('Mohon lengkapi seluruh kolom formulir pendaftaran wajib.');
      return;
    }

    if (formData.nik.length !== 16 || !/^\d+$/.test(formData.nik)) {
      setErrorMessage('Nomor NIK harus berupa 16 digit angka sesuai KTP Anda.');
      return;
    }

    const newId = `REG-2026-${Math.floor(100 + Math.random() * 900)}`;

    onRegisterSubmit({
      ...formData,
      ktpImage: ktpPreview || undefined
    });

    setSubmittedRegId(newId);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-800 via-red-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-600/40 text-red-200 text-xs font-semibold px-3 py-1 rounded-full border border-red-500/30">
            <UserPlus className="w-4 h-4 text-emerald-400" />
            <span>Pendaftaran Anggota Koperasi Online</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Gabung Menjadi Anggota Koperasi
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Nikmati beragam keuntungan eksklusif: diskon belanja Waserda sembako, bagian SHU bagi hasil tahunan, akses modal simpan pinjam syariah, dan pendampingan UMKM.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form Area */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xs space-y-6">
          
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">Formulir Pendaftaran Keanggotaan</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Isi data calon anggota sesuai dengan KTP elektronik yang berlaku.</p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
                Pendaftaran Berhasil Dikirim!
              </h3>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
                Nomor Registrasi Anda: <span className="font-mono font-bold bg-white dark:bg-slate-900 px-2.5 py-1 rounded border border-emerald-300">{submittedRegId}</span>. Pengurus Koperasi akan melakukan verifikasi data NIK dan menghubungi Anda melalui WhatsApp untuk aktivasi kartu anggota.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    nama: '',
                    nik: '',
                    alamat: '',
                    noHp: '',
                    email: '',
                    jenisKeanggotaan: 'Anggota Biasa'
                  });
                  setKtpPreview(null);
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition inline-block"
              >
                Daftarkan Anggota Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {errorMessage && (
                <div className="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 p-3 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Jenis Keanggotaan */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-800 dark:text-slate-200">Jenis Keanggotaan</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'Anggota Biasa', label: 'Anggota Biasa (Warga Sriamur)' },
                    { id: 'Anggota Luar Biasa', label: 'Anggota Luar Biasa (Luar Sriamur)' },
                    { id: 'Mitra UMKM', label: 'Mitra Usaha UMKM Desa' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, jenisKeanggotaan: item.id as any })}
                      className={`p-3 rounded-xl border text-left font-semibold transition text-xs ${
                        formData.jenisKeanggotaan === item.id
                          ? 'border-red-600 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nama Lengkap */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-800 dark:text-slate-200">Nama Lengkap (Sesuai KTP) *</label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              {/* NIK */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-800 dark:text-slate-200">Nomor Induk Kependudukan (NIK 16 Digit) *</label>
                <input
                  type="text"
                  maxLength={16}
                  value={formData.nik}
                  onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                  placeholder="321608xxxxxxxxxx"
                  className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500 font-mono"
                  required
                />
              </div>

              {/* Alamat Lengkap */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-800 dark:text-slate-200">Alamat Tempat Tinggal Lengkap *</label>
                <textarea
                  rows={3}
                  value={formData.alamat}
                  onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                  placeholder="Nama jalan, nomor rumah, RT/RW, Dusun, Desa Sriamur, Tambun Utara"
                  className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              {/* Handphone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800 dark:text-slate-200">Nomor WhatsApp Aktif *</label>
                  <input
                    type="tel"
                    value={formData.noHp}
                    onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
                    placeholder="081234567890"
                    className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800 dark:text-slate-200">Alamat Email (Opsional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Upload Foto KTP */}
              <div className="space-y-1.5 pt-2">
                <label className="font-bold text-slate-800 dark:text-slate-200">Unggah Foto KTP / Kartu Identitas</label>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-center hover:bg-slate-50 dark:hover:bg-slate-900/40 transition">
                  {ktpPreview ? (
                    <div className="space-y-2">
                      <img src={ktpPreview} alt="Preview KTP" className="h-36 mx-auto rounded-xl object-contain border border-slate-200" />
                      <button 
                        type="button" 
                        onClick={() => setKtpPreview(null)} 
                        className="text-xs text-red-600 hover:underline font-bold"
                      >
                        Ganti Foto KTP
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer space-y-2 block">
                      <UploadCloud className="w-8 h-8 mx-auto text-slate-400" />
                      <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                        Klik untuk memilih file foto KTP dari perangkat
                      </div>
                      <div className="text-[10px] text-slate-400">Format JPG, PNG (Maks 5MB)</div>
                      <input type="file" accept="image/*" onChange={handleKtpUpload} className="hidden" />
                    </label>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg transition"
                >
                  Kirim Formulir Pendaftaran Anggota
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Simpanan Info Box */}
          <div className="bg-gradient-to-br from-slate-900 to-red-950 text-white rounded-3xl p-6 border border-slate-800 shadow-lg space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <CreditCard className="w-6 h-6 text-emerald-400" />
              <div>
                <h3 className="font-bold text-base">Ketentuan Simpanan Koperasi</h3>
                <p className="text-[11px] text-slate-300">Sesuai Keputusan RAT Koperasi Sriamur</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <div className="font-bold text-amber-300">1. Simpanan Pokok (Hanya 1x Awal)</div>
                <div className="text-lg font-black text-white mt-0.5">Rp 100.000</div>
                <div className="text-[11px] text-slate-400 mt-1">Dibayarkan satu kali saat dinyatakan resmi diterima.</div>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <div className="font-bold text-emerald-300">2. Simpanan Wajib (Rutin Bulanan)</div>
                <div className="text-lg font-black text-white mt-0.5">Rp 10.000 / Bulan</div>
                <div className="text-[11px] text-slate-400 mt-1">Menjadi akumulasi modal dasar untuk pembagian SHU tahunan.</div>
              </div>
            </div>
          </div>

          {/* Manfaat Anggota */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-xs space-y-3">
            <h3 className="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Hak & Hak Istimewa Anggota</span>
            </h3>

            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Diskon harga sembako & poin belanja Waserda Desa.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Hak suara dalam Rapat Anggota Tahunan (RAT).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Pembagian Sisa Hasil Usaha (SHU) secara proporsional.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Akses pembiayaan modal kerja syariah tanpa bunga.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
