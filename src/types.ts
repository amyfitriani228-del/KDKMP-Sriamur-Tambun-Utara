export type PageView = 
  | 'home' 
  | 'profil' 
  | 'potensi' 
  | 'produk' 
  | 'artikel' 
  | 'promosi' 
  | 'galeri' 
  | 'anggota' 
  | 'kontak' 
  | 'admin';

export interface Product {
  id: string;
  name: string;
  category: 'Sembako' | 'Produk Pertanian' | 'Produk UMKM' | 'Makanan' | 'Minuman' | 'Kerajinan' | 'Produk Rumah Tangga';
  price: number;
  originalPrice?: number;
  stock: number;
  unit: string;
  description: string;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  rating: number;
  soldCount: number;
  producer?: string;
}

export interface VillagePotential {
  id: string;
  title: string;
  category: 'Pertanian' | 'Perdagangan' | 'UMKM' | 'Peternakan' | 'Perikanan' | 'Jasa' | 'Wisata Desa';
  description: string;
  image: string;
  gallery: string[];
  location: string;
  impact: string;
  contactPerson?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  thumbnail: string;
  author: string;
  date: string;
  category: 'Berita Koperasi' | 'Kegiatan' | 'UMKM' | 'Edukasi' | 'Pelatihan' | 'Pengumuman';
  views: number;
  readTime: string;
  tags: string[];
}

export interface PromoItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'Flash Sale' | 'Diskon' | 'Promo Mingguan' | 'Paket Hemat';
  discountPercent?: number;
  bannerImage: string;
  validUntil: string;
  featuredProductId?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'foto' | 'video';
  category: 'Kegiatan' | 'UMKM' | 'Panen Raya' | 'RAT Koperasi' | 'Pelatihan';
  url: string;
  thumbnail?: string;
  date: string;
  caption: string;
}

export interface Officer {
  id: string;
  name: string;
  role: string;
  department: 'Pengurus' | 'Pengawas' | 'Manajemen Operational';
  photo: string;
  phone?: string;
  email?: string;
  bio: string;
}

export interface MemberRegistration {
  id: string;
  nama: string;
  nik: string;
  alamat: string;
  noHp: string;
  email: string;
  ktpImage?: string;
  jenisKeanggotaan: 'Anggota Biasa' | 'Anggota Luar Biasa' | 'Mitra UMKM';
  status: 'Pending' | 'Approved' | 'Rejected';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FilterState {
  category: string;
  searchQuery: string;
  sortBy: 'lowest' | 'highest' | 'popular' | 'newest';
  badgeFilter: 'all' | 'new' | 'bestseller' | 'featured';
}
