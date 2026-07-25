import { 
  Product, 
  VillagePotential, 
  Article, 
  PromoItem, 
  GalleryItem, 
  Officer, 
  Testimonial,
  MemberRegistration
} from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Beras Premium Sriamur 5 Kg',
    category: 'Sembako',
    price: 68000,
    originalPrice: 75000,
    stock: 150,
    unit: 'Karung 5kg',
    description: 'Beras putih pulen kualitas premium hasil panen kelompok tani Desa Sriamur, Tambun Utara. Bebas pemutih dan pengawet, wangi alami.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    soldCount: 480,
    producer: 'Kelompok Tani Sri Sejahtera'
  },
  {
    id: 'prod-02',
    name: 'Minyak Goreng Merah Putih 2L',
    category: 'Sembako',
    price: 32500,
    originalPrice: 36000,
    stock: 200,
    unit: 'Pouch 2 Liter',
    description: 'Minyak goreng kelapa sawit olahan murni diproduksi melalui kemitraan unit usaha perkoperasian desa, jernih dan tahan panas.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.8,
    soldCount: 350,
    producer: 'Unit Usaha Waserda Kopdes'
  },
  {
    id: 'prod-03',
    name: 'Keripik Singkong Balado Sriamur',
    category: 'Produk UMKM',
    price: 15000,
    originalPrice: 18000,
    stock: 80,
    unit: 'Bungkus 250gr',
    description: 'Olahan singkong renyah dengan bumbu balado khas buatan UMKM Ibu-ibu PKK Desa Sriamur. Rasa gurih dan renyah tahan lama.',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    soldCount: 220,
    producer: 'UMKM Berkah Sriamur'
  },
  {
    id: 'prod-04',
    name: 'Dodol Wijen Khas Tambun',
    category: 'Makanan',
    price: 25000,
    originalPrice: 30000,
    stock: 45,
    unit: 'Kotak 300gr',
    description: 'Dodol tradisional Betawi Bekasi racikan resep warisan leluhur Tambun Utara. Dibuat dari santan kelapa murni, gula merah, dan taburan wijen harum.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 5.0,
    soldCount: 195,
    producer: 'Dapur Dodol Hj. Maryam'
  },
  {
    id: 'prod-05',
    name: 'Telur Asin Masir Sriamur (Isi 6)',
    category: 'Sembako',
    price: 22000,
    originalPrice: 25000,
    stock: 90,
    unit: 'Mika 6 Butir',
    description: 'Telur bebek pilihan dari peternakan lokal Sriamur Tambun. Diolah dengan bata merah dan garam konsentrasi pas hingga bertekstur masir dan gurih.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80',
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    rating: 4.7,
    soldCount: 140,
    producer: 'Peternakan Bebek Sumber Rjeki'
  },
  {
    id: 'prod-06',
    name: 'Sambal Gabus Asin Sriamur',
    category: 'Makanan',
    price: 28000,
    originalPrice: 32000,
    stock: 60,
    unit: 'Botol 150gr',
    description: 'Sambal racikan khas kuliner Tambun Bekasi dari perpaduan cabai rawit desa dan potongan ikan gabus asin gurih.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    soldCount: 175,
    producer: 'Dapur Dapur Betawi Sriamur'
  },
  {
    id: 'prod-07',
    name: 'Jamu Kunyit Asam Segar Desa',
    category: 'Minuman',
    price: 10000,
    originalPrice: 12000,
    stock: 40,
    unit: 'Botol 350ml',
    description: 'Minuman herbal dari kunyit organik, asam jawa murni, dan gula aren pilihan tanpa pemanis buatan maupun pengawet kimia.',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80',
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    rating: 4.8,
    soldCount: 110,
    producer: 'KWT (Kelompok Wanita Tani) Sriamur'
  },
  {
    id: 'prod-08',
    name: 'Besek Bambu Anyaman Sriamur',
    category: 'Kerajinan',
    price: 18000,
    originalPrice: 22000,
    stock: 120,
    unit: 'Set 2 Pcs',
    description: 'Kerajinan tangan anyaman bambu rapi buatan perajin lokal Sriamur. Cocok untuk wadah hantaran, bento, maupun dekorasi ramah lingkungan.',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80',
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    rating: 4.9,
    soldCount: 95,
    producer: 'Sanggar Anyaman Bambu Sriamur'
  },
  {
    id: 'prod-09',
    name: 'Pupuk Kompos Organik Sriamur 10kg',
    category: 'Produk Pertanian',
    price: 35000,
    originalPrice: 40000,
    stock: 75,
    unit: 'Karung 10kg',
    description: 'Pupuk kompos organik matang diolah dari sisa bahan organik desa dan kotoran ternak fermentasi EM4. Menyuburkan tanah dan memperkuat akar.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    rating: 4.8,
    soldCount: 130,
    producer: 'Bank Sampah & Kompos Kopdes'
  },
  {
    id: 'prod-10',
    name: 'Bibit Cabai Rawit Unggul (Polibag)',
    category: 'Produk Pertanian',
    price: 8000,
    originalPrice: 10000,
    stock: 100,
    unit: 'Polibag Siap Tanam',
    description: 'Bibit cabai rawit siap tanam varietas unggul tahan hama penyakit hasil penyemaian balai benih swadaya desa.',
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80',
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    rating: 4.7,
    soldCount: 160,
    producer: 'Pembibitan Tani Makmur'
  },
  {
    id: 'prod-11',
    name: 'Pembersih Serbaguna Merah Putih',
    category: 'Produk Rumah Tangga',
    price: 14000,
    originalPrice: 17000,
    stock: 85,
    unit: 'Pouch Refill 800ml',
    description: 'Sabun pembersih piring dan lantai berkonsentrat tinggi harum jeruk nipis buatan unit usaha kemitraan UMKM desa.',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    rating: 4.6,
    soldCount: 210,
    producer: 'Unit Kimia Kreatif Desa'
  },
  {
    id: 'prod-12',
    name: 'Batik Motif Golok & Gabus Bekasi',
    category: 'Kerajinan',
    price: 175000,
    originalPrice: 200000,
    stock: 25,
    unit: 'Kain 2 x 1.15 Meter',
    description: 'Kain batik tulis/cap eksklusif khas Kabupaten Bekasi karya pengrajin batik Sriamur dengan motif unik Ikan Gabus dan Golok Betawi.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 5.0,
    soldCount: 42,
    producer: 'Sanggar Batik Sriamur Tambun'
  }
];

export const INITIAL_POTENTIALS: VillagePotential[] = [
  {
    id: 'pot-01',
    title: 'Pertanian Padi & Hortikultura Organik',
    category: 'Pertanian',
    description: 'Desa Sriamur memiliki lahan sawah produktif seluas puluhan hektar yang menghasilkan beras berkualitas tinggi serta budidaya tanaman holtikultura cabai, terung, dan bayam.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Dusun II Sriamur, Tambun Utara',
    impact: 'Menopang ketahanan pangan lokal serta mempekerjakan lebih dari 120 petani desa.',
    contactPerson: 'Bpk. H. Sutisna (Ketua Kelompok Tani) - 0812-9876-5432'
  },
  {
    id: 'pot-02',
    title: 'Pusat Usaha Kuliner & Kerajinan UMKM',
    category: 'UMKM',
    description: 'Kluster usaha mikro desa yang memproduksi aneka makanan olahan tradisional khas Betawi Bekasi, keripik kemasan, jamu tradisional, dan kerajinan tangan.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'RT 03/RW 02 Desa Sriamur',
    impact: 'Meningkatkan pendapatan keluarga dan kemandirian ekonomi perempuan desa.',
    contactPerson: 'Ibu Maryam (Koordinator UMKM) - 0813-1122-3344'
  },
  {
    id: 'pot-03',
    title: 'Peternakan Ayam Kampung & Bebek Petelur',
    category: 'Peternakan',
    description: 'Budidaya ternak ungas organik yang terintegrasi dengan pakan fermentasi alamiah. Menghasilkan telur asin berkualitas masir dan daging unggas segar.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Dusun I Tambun Utara',
    impact: 'Memasok kebutuhan telur dan daging berkategori bebas antibiotik untuk pasar kecamatan.',
    contactPerson: 'Bpk. Herman (Ketua Peternak) - 0857-4433-2211'
  },
  {
    id: 'pot-04',
    title: 'Budidaya Perikanan Lele & Gurame',
    category: 'Perikanan',
    description: 'Sistem kolam darat bioflok dan kolam tanah yang memanfaatkan saluran irigasi bersih desa untuk membesarkan ikan lele, gurame, dan nila.',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Blok Sawah Tengah Sriamur',
    impact: 'Panen rutin tiap bulan sebanyak 2.5 ton ikan segar siap konsumsi.',
    contactPerson: 'Sdr. Rizky (Mina Sriamur) - 0819-7766-5544'
  },
  {
    id: 'pot-05',
    title: 'Wisata Edukasi & Saung Budaya Sriamur',
    category: 'Wisata Desa',
    description: 'Destinasi wisata edukasi pertanian, workshop membatik motif Bekasi, dan wisata kuliner lesehan saung pinggir sawah bagi pelajar dan wisatawan keluarga.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Jl. Raya Sriamur KM 3',
    impact: 'Mengenalkan budaya lokal Bekasi dan membuka lapangan kerja sektor pariwisata.',
    contactPerson: 'Bpk. Agus Raharjo - 0812-3344-5566'
  },
  {
    id: 'pot-06',
    title: 'Pasar Desa & Unit Waserda Gotong Royong',
    category: 'Perdagangan',
    description: 'Pusat jual beli barang kebutuhan pokok dan komoditas warga yang terkelola secara kolektif dengan sistem harga stabil dan ramah kantong.',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Area Kantor Koperasi Sriamur',
    impact: 'Menjaga keterjangkauan harga sembako warga di tengah inflasi.',
    contactPerson: 'Ibu Siti Nurjanah (Pengelola Waserda) - 0811-9988-7766'
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-01',
    title: 'Pelaksanaan Rapat Anggota Tahunan (RAT) Tahun Buku Koperasi Desa Merah Putih Sriamur',
    slug: 'rat-tahun-buku-koperasi-sriamur',
    summary: 'Koperasi Desa Merah Putih Sriamur sukses menggelar RAT dengan pertanggungjawaban pimpinan, pembagian SHU, dan penetapan program kerja baru.',
    content: `Rapat Anggota Tahunan (RAT) Koperasi Desa Merah Putih Sriamur Tambun Utara Kabupaten Bekasi telah diselenggarakan secara khidmat dan transparan pada hari Sabtu lalu di Aula Balai Desa Sriamur. 

Kegiatan tahunan ini dihadiri oleh Pengurus, Pengawas, Dinas Koperasi dan UMKM Kabupaten Bekasi, Kepala Desa Sriamur, serta lebih dari 350 perwakilan anggota aktif dari seluruh wilayah dusun.

Dalam laporannya, Ketua Koperasi menyampaikan peningkatan sisa hasil usaha (SHU) sebesar 18.5% dibandingkan tahun sebelumnya, seiring dengan perluasan unit usaha pasar desa dan layanan simpan pinjam gotong royong. Anggota menyetujui laporan keuangan secara acclamation dan menyepakati alokasi dana cadangan untuk modernisasi marketplace digital koperasi.`,
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    author: 'Ahmad Subagja, S.Pd (Sekretaris)',
    date: '2026-07-15',
    category: 'RAT Koperasi' as any,
    views: 430,
    readTime: '4 min',
    tags: ['RAT', 'SHU', 'RapatAnggota', 'KoperasiDesa']
  },
  {
    id: 'art-02',
    title: 'Pelatihan Digitalisasi UMKM Desa: Pemasaran Produk Lokal Tembus Pasar Nasional',
    slug: 'pelatihan-digitalisasi-umkm-desa-sriamur',
    summary: 'Sebanyak 45 pelaku UMKM Desa Sriamur mengikuti workshop pemanfaatan foto produk, kemasan modern, dan penjualan e-commerce.',
    content: `Unit Pengembangan Usaha Koperasi Desa Merah Putih Sriamur bekerjasama dengan Dinas UMKM Kabupaten Bekasi menggelar Pelatihan Digitalisasi Produk Lokal.

Acara bertema "Menembus Batas Desa Lewat Teknologi Digital" ini membekali para pengrajin dan pembuat kuliner cara mengemas produk secara hygienic, teknik foto produk menggunakan smartphone, hingga onboarding ke marketplace Koperasi Desa Merah Putih dan akun WhatsApp Business.

"Dengan platform digital resmi koperasi ini, produk seperti Sambal Gabus dan Dodol Tambun bisa langsung dipesan pembeli dari Jakarta, Bandung, hingga luar Jawa," ujar pelatih workshop.`,
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    author: 'Tim Humas Kopdes',
    date: '2026-07-02',
    category: 'Pelatihan',
    views: 312,
    readTime: '3 min',
    tags: ['Pelatihan', 'UMKM', 'Digitalisasi', 'Pemasaran']
  },
  {
    id: 'art-03',
    title: 'Panen Raya Padi Organik Sriamur Disambut Antusias Warga Tambun Utara',
    slug: 'panen-raya-padi-organik-sriamur',
    summary: 'Hasil panen kelompok tani mitra Koperasi Desa mencapai 6.8 ton per hektar berkat penerapan pupuk kompos alami binaan perkoperasian.',
    content: `Para petani Desa Sriamur Tambun Utara merayakan Panen Raya Padi Varietas Unggul Organik. Dari total luas lahan binaan 15 hektar, rata-rata produktivitas padi tercatat meningkat signifikan mencapai 6.8 ton gabah kering panen per hektar.

Seluruh gabah diproses di penggilingan beras milik unit pertanian koperasi desa, kemudian dikemas secara higienis menjadi "Beras Premium Sriamur" yang didistribusikan kepada anggota dengan harga khusus.`,
    thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    author: 'Ir. Hendra Gunawan',
    date: '2026-06-20',
    category: 'Kegiatan',
    views: 520,
    readTime: '5 min',
    tags: ['Pertanian', 'PanenRaya', 'BerasSriamur', 'KetahananPangan']
  },
  {
    id: 'art-04',
    title: 'Pengumuman Pembentukan Unit Layanan Simpan Pinjam Syariah Koperasi Desa',
    slug: 'pengumuman-simpan-pinjam-syariah-kopdes',
    summary: 'Mulai bulan depan Koperasi melayani simpanan wadiah dan pembiayaan murabahah untuk modal usaha UMKM tanpa riba.',
    content: `Disampaikan kepada seluruh anggota Koperasi Desa Merah Putih Sriamur bahwa pengurus telah resmi menerbitkan izin operasional Unit Simpan Pinjam Syariah (USPS).

Prinsip akad yang digunakan meliputi Wadiah Yad Dhamanah untuk simpanan anggota dan Murabahah/Mudharabah untuk modal kerja produktif. Skema ini dirancang tanpa bunga/riba untuk membantu masyarakat terhindar dari jeratan rentenir liar.`,
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    author: 'Pengurus Koperasi',
    date: '2026-06-10',
    category: 'Pengumuman',
    views: 640,
    readTime: '3 min',
    tags: ['Pengumuman', 'SimpanPinjam', 'Syariah', 'BebasRiba']
  }
];

export const INITIAL_PROMOS: PromoItem[] = [
  {
    id: 'promo-01',
    title: 'Flash Sale Paket Sembako Gotong Royong',
    subtitle: 'Beras Premium 5kg + Minyak 2L + Gula 1kg Hanya Rp 105.000!',
    type: 'Flash Sale',
    discountPercent: 15,
    bannerImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    validUntil: '2026-08-01T23:59:59',
    featuredProductId: 'prod-01'
  },
  {
    id: 'promo-02',
    title: 'Promo Spesial Anggota Baru Koperasi',
    subtitle: 'Daftar Anggota Bulan Ini & Dapatkan Voucher Belanja Waserda Rp 25.000',
    type: 'Diskon',
    discountPercent: 20,
    bannerImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
    validUntil: '2026-08-15T23:59:59'
  },
  {
    id: 'promo-03',
    title: 'Diskon Beli 3 Produk UMKM Kuliner Sriamur',
    subtitle: 'Dukung Usaha Tetangga Desa dengan Harga Promo Mingguan',
    type: 'Promo Mingguan',
    discountPercent: 10,
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    validUntil: '2026-07-30T23:59:59',
    featuredProductId: 'prod-03'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Suasana Rapat Anggota Tahunan Koperasi Sriamur',
    type: 'foto',
    category: 'RAT Koperasi',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    date: '15 Juli 2026',
    caption: 'Musyawarah mufakat perwakilan anggota dalam penetapan SHU dan anggaran kerja.'
  },
  {
    id: 'gal-02',
    title: 'Panen Bersama Kelompok Tani Desa Sriamur',
    type: 'foto',
    category: 'Panen Raya',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    date: '20 Juni 2026',
    caption: 'Keceriaan petani saat panen raya padi organik binaan perkoperasian.'
  },
  {
    id: 'gal-03',
    title: 'Bazar UMKM & Produk Olahan Ibu PKK',
    type: 'foto',
    category: 'UMKM',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    date: '05 Juni 2026',
    caption: 'Pameran aneka makanan, cemilan, dan jamu buatan warga desa.'
  },
  {
    id: 'gal-04',
    title: 'Pelatihan Kemasan Produk Bersama Dinas UMKM',
    type: 'foto',
    category: 'Pelatihan',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    date: '02 Juli 2026',
    caption: 'Pendampingan desain label dan standar kemasan pangan aman.'
  },
  {
    id: 'gal-05',
    title: 'Kunjungan Pengawas dan Penyerahan Modal Kerja',
    type: 'foto',
    category: 'Kegiatan',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    date: '10 Mei 2026',
    caption: 'Penyerahan dukungan alat produksi untuk mitra kelompok perikanan.'
  },
  {
    id: 'gal-06',
    title: 'Peresmian Waserda Digital Merah Putih',
    type: 'foto',
    category: 'Kegiatan',
    url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1000&q=80',
    date: '12 April 2026',
    caption: 'Potong pita pengoperasian minimarket dan gudang sembako desa.'
  }
];

export const INITIAL_OFFICERS: Officer[] = [
  {
    id: 'off-01',
    name: 'H. M. Supriyadi, S.E.',
    role: 'Ketua Pengurus',
    department: 'Pengurus',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    phone: '0812-8899-0011',
    email: 'ketua@sriamur.koperasi.id',
    bio: 'Berpengalaman lebih dari 15 tahun menggerakkan pemberdayaan ekonomi pedesaan dan manajemen perkoperasian di Kabupaten Bekasi.'
  },
  {
    id: 'off-02',
    name: 'Ahmad Subagja, S.Pd.',
    role: 'Sekretaris',
    department: 'Pengurus',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    phone: '0813-7766-5544',
    email: 'sekretaris@sriamur.koperasi.id',
    bio: 'Aktif mengelola administrasi, pendaftaran keanggotaan, serta tata kelola informasi digital koperasi.'
  },
  {
    id: 'off-03',
    name: 'Hj. Siti Nurjanah',
    role: 'Bendahara',
    department: 'Pengurus',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    phone: '0811-2233-4455',
    email: 'bendahara@sriamur.koperasi.id',
    bio: 'Mengelola pembukuan, arus kas usaha Waserda, dan tata kelola simpan pinjam anggota secara akuntabel.'
  },
  {
    id: 'off-04',
    name: 'Dr. Ir. Gunawan, M.M.',
    role: 'Ketua Pengawas',
    department: 'Pengawas',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    phone: '0815-9988-7711',
    email: 'pengawas@sriamur.koperasi.id',
    bio: 'Pakar tata kelola organisasi dan akademisi pertamanan & ekonomi pertanian pedesaan.'
  },
  {
    id: 'off-05',
    name: 'Siti Rohmah, S.E.',
    role: 'Anggota Pengawas',
    department: 'Pengawas',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Fokus memastikan kepatuhan standar akuntansi dan transparansi laporan berkala kepada anggota.'
  },
  {
    id: 'off-06',
    name: 'Rahmat Hidayat',
    role: 'Manajer Unit Waserda & Marketplace',
    department: 'Manajemen Operational',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Mengatur logistik barang sembako, pasokan pupuk petani, dan pengiriman order online.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-01',
    name: 'Bpk. Jamalludin',
    role: 'Anggota Petani Sriamur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Sejak bergabung dengan Koperasi Merah Putih Sriamur, pasokan pupuk dan bibit selalu terjamin dengan harga terjangkau. Pemasaran gabah panen juga dipastikan dibeli koperasi.',
    rating: 5
  },
  {
    id: 'test-02',
    name: 'Ibu Hj. Maryam',
    role: 'Pelaku UMKM Dodol Tambun',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Alhamdulillah, usaha dodol saya sekarang punya jangkauan pemesan lebih luas lewat marketplace resmi Koperasi Desa. Pendaftarannya mudah dan transparan.',
    rating: 5
  },
  {
    id: 'test-03',
    name: 'Sdr. Bagus Triyono',
    role: 'Warga Dusun II Sriamur',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'Belanja sembako bulanan di Waserda Koperasi jauh lebih hemat. Ditambah tiap tahun dapet bagi hasil SHU. Bener-bener terasa manfaat gotong royongnya!',
    rating: 5
  }
];

export const INITIAL_REGISTRATIONS: MemberRegistration[] = [
  {
    id: 'REG-2026-001',
    nama: 'Budi Santoso',
    nik: '3216081203850002',
    alamat: 'Jl. Melati RT 02/RW 03, Desa Sriamur, Tambun Utara',
    noHp: '081234567890',
    email: 'budi.santoso@gmail.com',
    jenisKeanggotaan: 'Anggota Biasa',
    status: 'Approved',
    createdAt: '2026-07-20'
  },
  {
    id: 'REG-2026-002',
    nama: 'Dewi Lestari',
    nik: '3216085510920001',
    alamat: 'Griya Sriamur Indah Blok B3 No. 12',
    noHp: '085711223344',
    email: 'dewi.lestari@yahoo.com',
    jenisKeanggotaan: 'Mitra UMKM',
    status: 'Pending',
    createdAt: '2026-07-22'
  }
];

export const COOP_INFO = {
  name: 'Koperasi Desa Merah Putih Sriamur',
  legalName: 'Koperasi Produsen Desa Merah Putih Sriamur',
  tagline: 'Membangun Ekonomi Desa Melalui Semangat Gotong Royong',
  address: 'Jl. Raya Sriamur No. 45, RT 02/RW 03, Desa Sriamur, Kecamatan Tambun Utara, Kabupaten Bekasi, Jawa Barat 17510',
  phone: '+62 812-8899-0011',
  whatsapp: '6281288990011',
  email: 'info@sriamur.koperasi.id',
  operationalHours: 'Senin - Sabtu: 08.00 - 16.00 WIB (Minggu & Hari Libur Nasional Tutup)',
  socialMedia: {
    facebook: 'https://facebook.com/kopdessriamur',
    instagram: 'https://instagram.com/kopdessriamur',
    youtube: 'https://youtube.com/@kopdessriamurofficial'
  },
  legalities: [
    { title: 'Badan Hukum Koperasi', number: 'AHU-0012892.AH.01.26.TAHUN 2024' },
    { title: 'Nomor Induk Berusaha (NIB)', number: '9120301928471' },
    { title: 'SK Kemenkumham RI', number: 'M.HH-01.AH.02.01 TAHUN 2024' },
    { title: 'Izin Operasional Waserda & USP', number: '503/412/DISKOP-UMKM/2024' }
  ],
  stats: {
    members: 1250,
    umkmProducts: 85,
    businessUnits: 6,
    articles: 42
  }
};
