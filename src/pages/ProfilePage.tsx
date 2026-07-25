import React from 'react';
import { Officer } from '../types';
import { COOP_INFO } from '../data/initialData';
import { 
  Building2, 
  Target, 
  Award, 
  Users, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

interface ProfilePageProps {
  officers: Officer[];
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ officers }) => {
  const pengurusList = officers.filter(o => o.department === 'Pengurus');
  const pengawasList = officers.filter(o => o.department === 'Pengawas');
  const operationalList = officers.filter(o => o.department === 'Manajemen Operational');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-800 via-red-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-600/40 text-red-200 text-xs font-semibold px-3 py-1 rounded-full border border-red-500/30">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Profil Resmi Koperasi Desa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Koperasi Desa Merah Putih Sriamur
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Menegakkan pilar ekonomi desa berbasis gotong royong, keadilan sosial, dan asas kekeluargaan untuk seluruh warga Desa Sriamur, Tambun Utara, Kabupaten Bekasi.
          </p>
        </div>
      </div>

      {/* Sejarah & Latar Belakang */}
      <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-700 pb-4">
          <div className="p-3 bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 rounded-2xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">Sejarah Koperasi</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Langkah Awal Perjalanan Pemberdayaan Desa Sriamur</p>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
          <p>
            Koperasi Desa Merah Putih Sriamur berdiri dari gagasan bersama para tokoh masyarakat, kelompok tani, pelaku UMKM, dan aparatur Desa Sriamur, Kecamatan Tambun Utara, Kabupaten Bekasi. Keinginan mendasar warga adalah memiliki badan usaha milik bersama yang transparan dan dapat langsung dirasakan manfaatnya oleh seluruh lapisan masyarakat.
          </p>
          <p>
            Dengan semangat gotong royong dan berlandaskan Undang-Undang Koperasi Indonesia, badan usaha ini resmi disahkan oleh Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia. Koperasi bergerak dalam beberapa lini usaha produktif, mulai dari pengadaan Waserda sembako murah, kemitraan pakan dan pupuk bagi kelompok tani, hingga penampungan produk kuliner dan kerajinan tangan hasil usaha mikro warga.
          </p>
        </div>
      </section>

      {/* Visi, Misi & Nilai-Nilai */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Visi Card */}
        <div className="bg-gradient-to-br from-red-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-red-800">
          <div className="w-12 h-12 bg-red-600/40 rounded-2xl flex items-center justify-center text-amber-300">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Visi Koperasi</h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            "Menjadi Koperasi Desa Unggulan di Kabupaten Bekasi yang Mandiri, Transparan, dan Berdaya Saing Tinggi melalui Digitalisasi serta Semangat Gotong Royong."
          </p>
        </div>

        {/* Misi Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs border border-slate-200 dark:border-slate-700 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">Misi Utama</h3>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Menyediakan barang kebutuhan pokok berkualitas dengan harga terjangkau bagi seluruh anggota dan masyarakat desa.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Membantu pemasaran produk olahan UMKM dan hasil pertanian lokal hingga menjangkau pasar digital nasional.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Menyelenggarakan layanan simpan pinjam syariah yang aman, bebas dari praktek riba dan jeratan rentenir.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Mengelola keuangan koperasi secara akuntabel, profesional, dan rutin memberikan laporan SHU secara terbuka.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Nilai-Nilai Koperasi */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">
            Landasan Moral
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">
            Nilai-Nilai Utama Koperasi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Gotong Royong', desc: 'Saling bahu membahu membangun ekonomi bersama tanpa mengesampingkan warga berpenghasilan rendah.' },
            { title: 'Transparansi', desc: 'Seluruh transaksi, laporan keuangan, dan alokasi bagi hasil SHU dapat diakses anggota secara terbuka.' },
            { title: 'Kemitraan Sejati', desc: 'Mengutamakan pembinaan dan pembelian produk olahan warga desa dibanding produk pabrikan luar.' },
            { title: 'Inovasi Digital', desc: 'Memanfaatkan teknologi web dan marketplace online untuk memudahkan transaksi anggota.' }
          ].map((val, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 font-bold flex items-center justify-center text-xs mb-2">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-slate-800 dark:text-white text-base">{val.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STRUKTUR ORGANISASI, PENGURUS & PENGAWAS */}
      <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xs space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
            Struktur Organisasi
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">
            Pengurus & Pengawas Koperasi
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Amanah pengawasan dan pengurusan operasional Koperasi Desa Merah Putih Sriamur Masa Bakti 2024-2029.
          </p>
        </div>

        {/* Interactive Structure Hierarchy */}
        <div className="space-y-8">
          
          {/* Pengurus Section */}
          <div className="space-y-4">
            <div className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
              <Users className="w-4 h-4" />
              <span>Dewan Pengurus</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pengurusList.map((off) => (
                <div key={off.id} className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center space-y-3">
                  <img src={off.photo} alt={off.name} className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-md" />
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white text-base">{off.name}</h3>
                    <div className="text-xs font-bold text-red-600 dark:text-red-400">{off.role}</div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{off.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pengawas & Operational Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            
            {/* Pengawas */}
            <div className="space-y-4">
              <div className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Dewan Pengawas</span>
              </div>
              <div className="space-y-3">
                {pengawasList.map((off) => (
                  <div key={off.id} className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4">
                    <img src={off.photo} alt={off.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-sm">{off.name}</h4>
                      <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">{off.role}</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{off.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational */}
            <div className="space-y-4">
              <div className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                <Sparkles className="w-4 h-4" />
                <span>Manajemen Operasional</span>
              </div>
              <div className="space-y-3">
                {operationalList.map((off) => (
                  <div key={off.id} className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4">
                    <img src={off.photo} alt={off.name} className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-sm">{off.name}</h4>
                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{off.role}</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{off.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LEGALITAS & DOKUMEN BUKTI */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-emerald-400" />
            <div>
              <h2 className="text-xl font-bold">Legalitas & Penyelenggaraan Resmi</h2>
              <p className="text-xs text-slate-400">Terdaftar di Kementerian Hukum dan HAM serta Kementerian Koperasi RI</p>
            </div>
          </div>
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
            Status Aktif Valid
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COOP_INFO.legalities.map((leg, idx) => (
            <div key={idx} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-1">
              <div className="text-xs text-slate-400 font-medium">{leg.title}</div>
              <div className="text-xs font-mono font-bold text-emerald-300 break-all">{leg.number}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ALAMAT KANTOR, GOOGLE MAPS & JAM OPERASIONAL */}
      <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xs space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Lokasi Fisik
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">
              Alamat Kantor & Waserda Koperasi
            </h2>

            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COOP_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>{COOP_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span>{COOP_INFO.email}</span>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800 dark:text-white mb-0.5">Jam Operasional Pelayanan:</div>
                  <div>{COOP_INFO.operationalHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed Frame */}
          <div className="lg:col-span-7 h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
            <iframe
              title="Lokasi Koperasi Desa Sriamur Tambun Utara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.425129384739!2d107.05432!3d-6.20789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ea456123456%3A0x1234567890abcdef!2sSriamur%2C%20Tambun%20Utara%2C%20Bekasi%20Regency%2C%20West%20Java!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
};
