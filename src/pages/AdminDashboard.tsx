import React, { useState } from 'react';
import { 
  Product, 
  Article, 
  VillagePotential, 
  GalleryItem, 
  PromoItem, 
  Officer, 
  MemberRegistration 
} from '../types';
import { 
  ShieldAlert, 
  Lock, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  ShoppingBag, 
  Newspaper, 
  MapPin, 
  Image as ImageIcon, 
  Percent, 
  Users, 
  Check, 
  X, 
  Search, 
  Sparkles,
  CheckCircle2,
  XCircle,
  FileText
} from 'lucide-react';

interface AdminDashboardProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  potentials: VillagePotential[];
  setPotentials: React.Dispatch<React.SetStateAction<VillagePotential[]>>;
  gallery: GalleryItem[];
  setGallery: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
  promos: PromoItem[];
  setPromos: React.Dispatch<React.SetStateAction<PromoItem[]>>;
  officers: Officer[];
  setOfficers: React.Dispatch<React.SetStateAction<Officer[]>>;
  registrations: MemberRegistration[];
  setRegistrations: React.Dispatch<React.SetStateAction<MemberRegistration[]>>;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  products, setProducts,
  articles, setArticles,
  potentials, setPotentials,
  gallery, setGallery,
  promos, setPromos,
  officers, setOfficers,
  registrations, setRegistrations
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState<
    'overview' | 'produk' | 'artikel' | 'potensi' | 'galeri' | 'promosi' | 'pengurus' | 'anggota'
  >('overview');

  // Modal forms states
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);

  const [showArticleModal, setShowArticleModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Partial<Article> | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail === 'admin@sriamur.go.id' && loginPassword === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Email atau kata sandi admin salah. Gunakan kredensial demo.');
    }
  };

  // Product CRUD Handlers
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct?.name || !editingProduct?.price) return;

    if (editingProduct.id) {
      // Edit existing
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? { ...p, ...editingProduct } as Product : p));
    } else {
      // Add new
      const newP: Product = {
        id: `prod-${Date.now()}`,
        name: editingProduct.name || 'Produk Baru',
        category: editingProduct.category || 'Sembako',
        price: Number(editingProduct.price) || 10000,
        originalPrice: editingProduct.originalPrice ? Number(editingProduct.originalPrice) : undefined,
        stock: Number(editingProduct.stock) || 50,
        unit: editingProduct.unit || 'Pcs',
        description: editingProduct.description || 'Deskripsi produk baru',
        image: editingProduct.image || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
        isNew: !!editingProduct.isNew,
        isBestSeller: !!editingProduct.isBestSeller,
        isFeatured: !!editingProduct.isFeatured,
        rating: 5.0,
        soldCount: 0,
        producer: editingProduct.producer || 'Waserda Sriamur'
      };
      setProducts(prev => [newP, ...prev]);
    }
    setShowProductModal(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Yakin ingin menghapus produk ini?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  // Registration Approve / Reject
  const handleUpdateRegStatus = (id: string, status: 'Approved' | 'Rejected') => {
    setRegistrations(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-red-100 dark:bg-red-950/60 text-red-600 rounded-2xl mx-auto flex items-center justify-center font-bold">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Portal Pengurus & Admin</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Masuk untuk mengelola data produk, artikel, dan pendaftaran anggota.</p>
        </div>

        {/* Demo Credentials Alert Box */}
        <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-200 text-amber-900 dark:text-amber-200 text-xs space-y-1 font-mono">
          <div className="font-bold font-sans text-amber-800 dark:text-amber-300">Kredensial Demo Akses Admin:</div>
          <div>Email: <strong className="text-red-600 dark:text-red-400">admin@sriamur.go.id</strong></div>
          <div>Sandi: <strong className="text-red-600 dark:text-red-400">admin123</strong></div>
        </div>

        {loginError && (
          <div className="p-3 bg-red-100 text-red-700 text-xs font-semibold rounded-xl">
            {loginError}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1">
            <label className="font-bold text-slate-800 dark:text-slate-200">Email Admin</label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="admin@sriamur.go.id"
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-800 dark:text-slate-200">Kata Sandi</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-xl shadow-md transition"
          >
            Masuk ke Panel Admin
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Admin Header */}
      <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-600 rounded-2xl">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Dashboard Admin Koperasi Desa Sriamur</h1>
            <p className="text-xs text-slate-400">Akses Terautentikasi • Kelola Seluruh Data Microsite & Marketplace</p>
          </div>
        </div>

        <button
          onClick={() => setIsAuthenticated(false)}
          className="bg-slate-800 hover:bg-red-600 text-slate-200 hover:text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Keluar Portal</span>
        </button>
      </div>

      {/* Admin Tab Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 dark:border-slate-800">
        {[
          { id: 'overview', label: 'Ringkasan', icon: <Sparkles className="w-4 h-4" /> },
          { id: 'produk', label: `CRUD Produk (${products.length})`, icon: <ShoppingBag className="w-4 h-4" /> },
          { id: 'artikel', label: `CRUD Artikel (${articles.length})`, icon: <Newspaper className="w-4 h-4" /> },
          { id: 'potensi', label: `Potensi Desa (${potentials.length})`, icon: <MapPin className="w-4 h-4" /> },
          { id: 'galeri', label: `Galeri (${gallery.length})`, icon: <ImageIcon className="w-4 h-4" /> },
          { id: 'promosi', label: `Promosi (${promos.length})`, icon: <Percent className="w-4 h-4" /> },
          { id: 'anggota', label: `Pendaftaran Anggota (${registrations.length})`, icon: <Users className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB CONTENT: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase">Total Produk Waserda</div>
              <div className="text-3xl font-black text-slate-800 dark:text-white">{products.length}</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase">Artikel & Kabar</div>
              <div className="text-3xl font-black text-slate-800 dark:text-white">{articles.length}</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase">Pendaftaran Anggota</div>
              <div className="text-3xl font-black text-slate-800 dark:text-white">{registrations.length}</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase">Kategori Potensi</div>
              <div className="text-3xl font-black text-slate-800 dark:text-white">{potentials.length}</div>
            </div>
          </div>

          {/* Pending Registrations */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <h3 className="font-bold text-slate-800 dark:text-white text-base">
              Pendaftaran Anggota Terbaru
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
                <thead className="bg-slate-50 dark:bg-slate-900 uppercase text-[10px] text-slate-400 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3">ID Registrasi</th>
                    <th className="p-3">Nama Lengkap</th>
                    <th className="p-3">NIK</th>
                    <th className="p-3">Jenis</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {registrations.map((r) => (
                    <tr key={r.id}>
                      <td className="p-3 font-mono font-bold">{r.id}</td>
                      <td className="p-3 font-semibold">{r.nama}</td>
                      <td className="p-3 font-mono">{r.nik}</td>
                      <td className="p-3">{r.jenisKeanggotaan}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          r.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                          r.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="p-3 flex gap-1">
                        <button 
                          onClick={() => handleUpdateRegStatus(r.id, 'Approved')}
                          className="bg-emerald-600 text-white p-1 rounded hover:bg-emerald-700" 
                          title="Setujui"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => handleUpdateRegStatus(r.id, 'Rejected')}
                          className="bg-red-600 text-white p-1 rounded hover:bg-red-700" 
                          title="Tolak"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: CRUD PRODUK */}
      {activeTab === 'produk' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Manajemen Data Produk Waserda</h2>
            <button
              onClick={() => {
                setEditingProduct({});
                setShowProductModal(true);
              }}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Produk Baru</span>
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
                <thead className="bg-slate-50 dark:bg-slate-900 text-slate-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Foto</th>
                    <th className="p-3">Nama Produk</th>
                    <th className="p-3">Kategori</th>
                    <th className="p-3">Harga</th>
                    <th className="p-3">Stok</th>
                    <th className="p-3">Badge</th>
                    <th className="p-3">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td className="p-3">
                        <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-lg" />
                      </td>
                      <td className="p-3 font-bold text-slate-800 dark:text-slate-200">{p.name}</td>
                      <td className="p-3">{p.category}</td>
                      <td className="p-3 font-bold text-red-600">Rp {p.price.toLocaleString('id-ID')}</td>
                      <td className="p-3 font-semibold">{p.stock} {p.unit.split(' ')[0]}</td>
                      <td className="p-3 flex gap-1">
                        {p.isBestSeller && <span className="bg-amber-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">Terlaris</span>}
                        {p.isNew && <span className="bg-emerald-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">Baru</span>}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingProduct(p);
                              setShowProductModal(true);
                            }}
                            className="p-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-lg"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(p.id)}
                            className="p-1.5 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: PENDAFTARAN ANGGOTA */}
      {activeTab === 'anggota' && (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Daftar Pendaftar Anggota Koperasi</h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden p-4 space-y-4">
            {registrations.map((reg) => (
              <div key={reg.id} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1 text-xs">
                  <div className="font-mono text-slate-400 font-bold">{reg.id} • {reg.createdAt}</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-white">{reg.nama}</div>
                  <div className="text-slate-500">NIK: <span className="font-mono">{reg.nik}</span> | HP: {reg.noHp}</div>
                  <div className="text-slate-500">Alamat: {reg.alamat}</div>
                  <div className="font-semibold text-emerald-600">{reg.jenisKeanggotaan}</div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    reg.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                    reg.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {reg.status}
                  </span>
                  
                  {reg.status === 'Pending' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUpdateRegStatus(reg.id, 'Approved')}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg"
                      >
                        Setujui
                      </button>
                      <button
                        onClick={() => handleUpdateRegStatus(reg.id, 'Rejected')}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg"
                      >
                        Tolak
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PRODUCT ADD/EDIT MODAL */}
      {showProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl max-w-lg w-full space-y-4 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-base text-slate-800 dark:text-white">
                {editingProduct?.id ? 'Edit Data Produk' : 'Tambah Produk Baru'}
              </h3>
              <button onClick={() => setShowProductModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Nama Produk *</label>
                <input
                  type="text"
                  value={editingProduct?.name || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  placeholder="Nama produk"
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Harga (Rp) *</label>
                  <input
                    type="number"
                    value={editingProduct?.price || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Stok *</label>
                  <input
                    type="number"
                    value={editingProduct?.stock || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">URL Foto Gambar</label>
                <input
                  type="text"
                  value={editingProduct?.image || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Deskripsi</label>
                <textarea
                  rows={2}
                  value={editingProduct?.description || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <label className="flex items-center gap-1.5 font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!editingProduct?.isBestSeller}
                    onChange={(e) => setEditingProduct({ ...editingProduct, isBestSeller: e.target.checked })}
                  />
                  <span>Badge Terlaris</span>
                </label>

                <label className="flex items-center gap-1.5 font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!editingProduct?.isNew}
                    onChange={(e) => setEditingProduct({ ...editingProduct, isNew: e.target.checked })}
                  />
                  <span>Badge Baru</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition mt-2"
              >
                Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
