import React, { useState } from 'react';
import { COOP_INFO } from '../data/initialData';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = message.trim() 
      ? encodeURIComponent(message)
      : encodeURIComponent('Halo Admin Koperasi Desa Merah Putih Sriamur, saya ingin menanyakan informasi produk/pendaftaran anggota.');
    window.open(`https://wa.me/${COOP_INFO.whatsapp}?text=${text}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-bounceIn">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  K
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full"></span>
              </div>
              <div>
                <div className="font-bold text-sm">Layanan WA Koperasi</div>
                <div className="text-[11px] text-emerald-100">Respon Cepat Jam Kerja</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 space-y-3 text-xs">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl rounded-tl-none shadow-xs border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
              👋 Sampurasun! Selamat datang di Layanan WhatsApp Resmi Koperasi Desa Merah Putih Sriamur. Ada yang bisa kami bantu?
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik pesan Anda..."
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-lg transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Hubungi WhatsApp Koperasi Sriamur"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-bold text-xs pr-1">Chat WhatsApp</span>
        <span className="relative flex h-3 w-3 sm:hidden">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
        </span>
      </button>
    </div>
  );
};
