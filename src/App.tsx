import React, { useState, useEffect } from 'react';
import { 
  PageView, 
  Product, 
  VillagePotential, 
  Article, 
  PromoItem, 
  GalleryItem, 
  Officer, 
  Testimonial, 
  MemberRegistration 
} from './types';
import { 
  INITIAL_PRODUCTS, 
  INITIAL_POTENTIALS, 
  INITIAL_ARTICLES, 
  INITIAL_PROMOS, 
  INITIAL_GALLERY, 
  INITIAL_OFFICERS, 
  INITIAL_TESTIMONIALS, 
  INITIAL_REGISTRATIONS 
} from './data/initialData';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { GlobalSearchModal } from './components/GlobalSearchModal';

import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { PotensiPage } from './pages/PotensiPage';
import { ProdukPage } from './pages/ProdukPage';
import { ArtikelPage } from './pages/ArtikelPage';
import { PromosiPage } from './pages/PromosiPage';
import { GaleriPage } from './pages/GaleriPage';
import { MenjadiAnggotaPage } from './pages/MenjadiAnggotaPage';
import { KontakPage } from './pages/KontakPage';
import { AdminDashboard } from './pages/AdminDashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // App Master Datasets State
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [potentials, setPotentials] = useState<VillagePotential[]>(INITIAL_POTENTIALS);
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [promos, setPromos] = useState<PromoItem[]>(INITIAL_PROMOS);
  const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [officers, setOfficers] = useState<Officer[]>(INITIAL_OFFICERS);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [registrations, setRegistrations] = useState<MemberRegistration[]>(INITIAL_REGISTRATIONS);

  // Active Modals state
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [selectedArticleModal, setSelectedArticleModal] = useState<Article | null>(null);

  // Dark Mode Toggle Class Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Keyboard shortcut ⌘K or Ctrl+K for search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleRegisterSubmit = (newRegData: Omit<MemberRegistration, 'id' | 'status' | 'createdAt'>) => {
    const newReg: MemberRegistration = {
      ...newRegData,
      id: `REG-2026-${Math.floor(100 + Math.random() * 900)}`,
      status: 'Pending',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setRegistrations(prev => [newReg, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-slate-950 text-stone-800 dark:text-stone-100 font-sans antialiased selection:bg-red-700 selection:text-white">
      
      {/* Header Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={(page) => {
          setCurrentPage(page);
          setSelectedArticleModal(null);
          setSelectedProductModal(null);
        }}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openSearchModal={() => setIsSearchOpen(true)}
      />

      {/* Breadcrumbs for inner pages */}
      <Breadcrumb
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        extraTitle={selectedArticleModal?.title || selectedProductModal?.name}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            products={products}
            potentials={potentials}
            articles={articles}
            promos={promos}
            testimonials={testimonials}
            onSelectProduct={(p) => {
              setSelectedProductModal(p);
              setCurrentPage('produk');
            }}
            onSelectArticle={(a) => {
              setSelectedArticleModal(a);
              setCurrentPage('artikel');
            }}
            onSelectPotential={(pot) => {
              setCurrentPage('potensi');
            }}
          />
        )}

        {currentPage === 'profil' && (
          <ProfilePage officers={officers} />
        )}

        {currentPage === 'potensi' && (
          <PotensiPage potentials={potentials} />
        )}

        {currentPage === 'produk' && (
          <ProdukPage
            products={products}
            selectedProductModal={selectedProductModal}
            setSelectedProductModal={setSelectedProductModal}
          />
        )}

        {currentPage === 'artikel' && (
          <ArtikelPage
            articles={articles}
            selectedArticleModal={selectedArticleModal}
            setSelectedArticleModal={setSelectedArticleModal}
          />
        )}

        {currentPage === 'promosi' && (
          <PromosiPage
            promos={promos}
            products={products}
            testimonials={testimonials}
            onSelectProduct={(p) => {
              setSelectedProductModal(p);
              setCurrentPage('produk');
            }}
          />
        )}

        {currentPage === 'galeri' && (
          <GaleriPage gallery={gallery} />
        )}

        {currentPage === 'anggota' && (
          <MenjadiAnggotaPage onRegisterSubmit={handleRegisterSubmit} />
        )}

        {currentPage === 'kontak' && (
          <KontakPage />
        )}

        {currentPage === 'admin' && (
          <AdminDashboard
            products={products} setProducts={setProducts}
            articles={articles} setArticles={setArticles}
            potentials={potentials} setPotentials={setPotentials}
            gallery={gallery} setGallery={setGallery}
            promos={promos} setPromos={setPromos}
            officers={officers} setOfficers={setOfficers}
            registrations={registrations} setRegistrations={setRegistrations}
          />
        )}
      </main>

      {/* Global Search Modal overlay */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        articles={articles}
        potentials={potentials}
        onSelectProduct={(p) => {
          setSelectedProductModal(p);
          setCurrentPage('produk');
        }}
        onSelectArticle={(a) => {
          setSelectedArticleModal(a);
          setCurrentPage('artikel');
        }}
        onSelectPotential={(pot) => {
          setCurrentPage('potensi');
        }}
        setCurrentPage={setCurrentPage}
      />

      {/* Floating Action Utilities */}
      <FloatingWhatsApp />
      <BackToTop />

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
