'use client';

import { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if already logged in
    const loggedIn = sessionStorage.getItem('adminLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
      fetchQuotes();
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        setIsLoggedIn(true);
        fetchQuotes();
      } else {
        setError(data.message || 'Giriş başarısız');
      }
    } catch (err) {
      setError('Bağlantı hatası');
    } finally {
      setLoading(false);
    }
  };

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/quotes');
      const data = await response.json();
      if (response.ok) {
        setQuotes(data.quotes || []);
      }
    } catch (err) {
      console.error('Teklifler yüklenemedi:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminLoggedIn');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setQuotes([]);
  };

  const deleteQuote = async (index) => {
    if (!confirm('Bu teklifi silmek istediğinizden emin misiniz?')) return;

    try {
      const response = await fetch('/api/admin/quotes', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ index }),
      });

      if (response.ok) {
        fetchQuotes();
      }
    } catch (err) {
      console.error('Silme hatası:', err);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0B1026] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">Admin Paneli</h1>
            <p className="text-zinc-400 text-sm text-center mb-8">Giriş yapın</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition"
                  placeholder="admin"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Şifre
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl px-6 py-4 text-base font-bold bg-gradient-to-r from-[#64748B] to-[#475569] hover:from-[#0EA5E9] hover:to-[#0284C7] transition-all shadow-2xl hover:shadow-[#0EA5E9]/40 disabled:opacity-50 disabled:cursor-not-allowed text-white"
              >
                {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1026] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Teklif Talepleri</h1>
            <p className="text-zinc-400 text-sm mt-1">
              Toplam {quotes.length} teklif talebi
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm font-medium"
          >
            Çıkış Yap
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0EA5E9] border-r-transparent"></div>
            <p className="text-zinc-400 mt-4">Yükleniyor...</p>
          </div>
        ) : quotes.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
            <p className="text-zinc-400">Henüz teklif talebi yok</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {quote.firstName} {quote.lastName}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded bg-[#0EA5E9]/20 text-[#0EA5E9] border border-[#0EA5E9]/30">
                        #{index + 1}
                      </span>
                    </div>
                    <div className="text-sm text-zinc-400 space-y-1">
                      <p className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {quote.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {quote.phone}
                      </p>
                      {quote.date && (
                        <p className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(quote.date).toLocaleString('tr-TR')}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => deleteQuote(index)}
                    className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition text-red-400 text-sm font-medium"
                  >
                    Sil
                  </button>
                </div>

                {quote.message && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm font-medium text-zinc-300 mb-2">Proje Detayları:</p>
                    <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-wrap">
                      {quote.message}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
