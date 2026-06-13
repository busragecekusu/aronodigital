'use client';

import { useState, useEffect, useRef } from 'react';
import AronoLogo from './AronoLogo';

export default function AronoLanding() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 0; // Header yüksekliği kadar offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowModal(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        alert(data.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      alert('Bağlantı hatası. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-[#0B1026] relative overflow-hidden">
      {/* Background gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main glows */}
        <div className="absolute -top-40 -left-40 h-[60rem] w-[60rem] rounded-full opacity-20 blur-3xl"
             style={{background:"radial-gradient(closest-side, #475569, transparent)"}}/>
        <div className="absolute -bottom-40 -right-40 h-[60rem] w-[60rem] rounded-full opacity-20 blur-3xl"
             style={{background:"radial-gradient(closest-side, #0EA5E9, transparent)"}}/>
        
        {/* Additional depth layers */}
        <div className="absolute top-1/3 left-1/4 h-[40rem] w-[40rem] rounded-full opacity-10 blur-3xl"
             style={{background:"radial-gradient(closest-side, #64748B, transparent)"}}/>
        <div className="absolute bottom-1/4 right-1/3 h-[35rem] w-[35rem] rounded-full opacity-15 blur-3xl"
             style={{background:"radial-gradient(closest-side, #0EA5E9, transparent)"}}/>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30"
             style={{backgroundImage: "radial-gradient(at 40% 20%, rgba(100, 116, 139, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(14, 165, 233, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(71, 85, 105, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(148, 163, 184, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(14, 165, 233, 0.15) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(100, 116, 139, 0.1) 0px, transparent 50%)"}}/>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
             style={{backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "100px 100px"}}/>
      </div>

      {/* Nav */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-3 flex items-center justify-between">
        <button onClick={() => scrollToSection('top')} className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0 p-0">
          <AronoLogo className="h-10 w-10 md:h-16 md:w-16" />
          <div>
            <div className="text-base md:text-xl font-bold tracking-tight">ARONO</div>
            <div className="text-[8px] md:text-[10px] text-zinc-500 tracking-wider">DIGITAL</div>
          </div>
        </button>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition bg-transparent border-0 cursor-pointer">Projelerimiz</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-white transition bg-transparent border-0 cursor-pointer">Hizmetler</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition bg-transparent border-0 cursor-pointer">İletişim</button>
        </nav>
        <button onClick={() => scrollToSection('contact')} className="ml-2 md:ml-6 inline-flex items-center gap-1.5 md:gap-2 rounded-lg md:rounded-xl px-3 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#64748B] to-[#475569] shadow-lg hover:shadow-[#64748B]/30 transition-all hover:scale-105 border-0 cursor-pointer">
          <span className="hidden sm:inline">Ücretsiz Görüşme</span>
          <span className="sm:hidden">İletişim</span>
        </button>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-0 pb-12 md:pb-20">
        {/* Floating particles and tech tags */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Original particles */}
          <div className="absolute top-20 left-[10%] h-2 w-2 rounded-full bg-[#64748B] animate-[float_6s_ease-in-out_infinite]"/>
          <div className="absolute top-40 right-[15%] h-3 w-3 rounded-full bg-[#0EA5E9] animate-[float_8s_ease-in-out_infinite]"/>
          <div className="absolute bottom-40 left-[20%] h-2 w-2 rounded-full bg-[#94A3B8] animate-[float_7s_ease-in-out_infinite]"/>
          <div className="absolute top-60 right-[25%] h-1.5 w-1.5 rounded-full bg-[#64748B] animate-[float_5s_ease-in-out_infinite]"/>
          <div className="absolute top-32 left-[30%] h-2 w-2 rounded-full bg-[#0EA5E9] animate-[float_9s_ease-in-out_infinite]"/>
          <div className="absolute bottom-20 right-[35%] h-2.5 w-2.5 rounded-full bg-[#94A3B8] animate-[float_6.5s_ease-in-out_infinite]"/>
          <div className="absolute top-[45%] left-[15%] h-1.5 w-1.5 rounded-full bg-[#64748B] animate-[float_7.5s_ease-in-out_infinite]"/>
          <div className="absolute bottom-32 left-[40%] h-2 w-2 rounded-full bg-[#0EA5E9] animate-[float_8.5s_ease-in-out_infinite]"/>
          
          {/* Floating tech tags - responsive positioning */}
          {/* TS - top right */}
          <div className="absolute top-[8%] right-[8%] lg:top-[8%] lg:right-[35%] text-xs lg:text-sm font-bold text-[#0EA5E9]/50 animate-[float_7.5s_ease-in-out_infinite] backdrop-blur-sm px-2 py-1 lg:px-2.5 lg:py-1.5 rounded border border-[#0EA5E9]/30 bg-[#0EA5E9]/10">TS</div>
          {/* HTML - middle right on desktop only */}
          <div className="hidden lg:block absolute top-[40%] right-[8%] text-sm font-bold text-[#64748B]/50 animate-[float_8s_ease-in-out_infinite] backdrop-blur-sm px-2.5 py-1.5 rounded-md border border-[#64748B]/30 bg-[#64748B]/10">&lt;HTML/&gt;</div>
          {/* CSS - bottom left, below stats */}
          <div className="absolute bottom-[2%] left-[5%] lg:top-[25%] lg:bottom-auto lg:right-[52%] lg:left-auto text-xs lg:text-sm font-bold text-[#94A3B8]/50 animate-[float_6.5s_ease-in-out_infinite] backdrop-blur-sm px-2 py-1 lg:px-2.5 lg:py-1.5 rounded border border-[#94A3B8]/30 bg-[#94A3B8]/10">{'{CSS}'}</div>
          {/* AWS - bottom center on desktop only */}
          <div className="hidden lg:block absolute bottom-[15%] right-[42%] text-sm font-bold text-[#0EA5E9]/50 animate-[float_7s_ease-in-out_infinite] backdrop-blur-sm px-2.5 py-1.5 rounded-md border border-[#0EA5E9]/30 bg-[#0EA5E9]/10">AWS</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-2 animate-[slideUp_0.7s_ease-out]">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="block text-zinc-200">Dijital Dünyada</span>
                <span className="block relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#64748B] via-[#0EA5E9] to-[#94A3B8] animate-[gradient_3s_ease-in-out_infinite]" style={{backgroundSize: '200% 200%'}}>
                    Fark Yaratan
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#64748B] via-[#0EA5E9] to-[#94A3B8] opacity-25 blur-2xl animate-pulse"/>
                </span>
                <span className="block text-zinc-200">Çözümler</span>
              </h1>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-zinc-400 max-w-xl leading-relaxed animate-[fadeIn_1s_ease-out]">
              <span className="text-zinc-300 font-semibold">Kurumsal kalitede yazılım geliştirme.</span> Güçlü backend altyapısı, kullanıcı odaklı tasarım ve kesintisiz destek. Projenizi baştan sona yönetiyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-[fadeIn_1.2s_ease-out]">
              <button onClick={() => scrollToSection('portfolio')} className="group relative overflow-hidden rounded-lg md:rounded-xl px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-bold bg-gradient-to-r from-[#64748B] to-[#475569] shadow-2xl hover:shadow-[#64748B]/50 transition-all duration-300 hover:scale-105 border-0 cursor-pointer">
                <span className="relative z-10">Projelerimizi Gör</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity"/>
              </button>
              <button onClick={() => scrollToSection('contact')} className="group rounded-lg md:rounded-xl px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-bold bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm cursor-pointer">
                <span className="group-hover:text-white transition-colors">Hemen Konuşalım</span>
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 pt-2 animate-[fadeIn_1.4s_ease-out]">
              <StatCard end={15} label="Proje" color="#64748B" gradient="from-[#64748B]/20 to-[#475569]/20" />
              <StatCard end={12} label="Müşteri" color="#0EA5E9" gradient="from-[#0EA5E9]/20 to-[#64748B]/20" />
              <StatCard end={3} label="Yıl" color="#94A3B8" gradient="from-[#94A3B8]/20 to-[#0EA5E9]/20" />
            </div>
          </div>

          {/* Right side - 3D Cards */}
          <div className="relative h-[500px] hidden lg:block animate-[fadeIn_1s_ease-out]">
            {/* Card 1 - Floating */}
            <div className="absolute top-0 right-0 w-80 animate-[float_6s_ease-in-out_infinite]">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#64748B] to-[#475569] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition"/>
                <div className="relative bg-[#0B1026] border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#64748B] to-[#475569] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Backend</div>
                      <div className="text-xs text-zinc-400">API Development</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[95%] bg-gradient-to-r from-[#64748B] to-[#475569] animate-[slideRight_2s_ease-out]"/>
                      </div>
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Floating delayed */}
            <div className="absolute top-40 left-0 w-72 animate-[float_7s_ease-in-out_infinite_0.5s]">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0EA5E9] to-[#64748B] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition"/>
                <div className="relative bg-[#0B1026] border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#64748B] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Frontend</div>
                      <div className="text-xs text-zinc-400">UI/UX Design</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[90%] bg-gradient-to-r from-[#0EA5E9] to-[#64748B] animate-[slideRight_2s_ease-out_0.3s]"/>
                      </div>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Floating more delayed */}
            <div className="absolute bottom-8 right-16 w-64 animate-[float_8s_ease-in-out_infinite_1s]">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#94A3B8] to-[#0EA5E9] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition"/>
                <div className="relative bg-[#0B1026] border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#94A3B8] to-[#0EA5E9] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Deploy</div>
                      <div className="text-xs text-zinc-400">Production Ready</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"/>
                    <span className="text-green-400 font-medium">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-20">
        <div className="text-center mb-14">
          <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-4">Referanslar</h3>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Tamamladığımız <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">Projeler</span>
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Farklı sektörlerde teslim ettiğimiz, gerçek kullanıcılara hizmet veren projelerden seçkiler
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
            color="#F59E0B"
            category="Çocuk Platformu"
            title="Masal ve Sesli Kitap Uygulaması"
            desc="Çocuklar için interaktif masallar ve sesli kitaplar. Ebeveyn kontrolü, uyku modu ve okuma istatistikleri sunan eğitim platformu."
            tags={["Sesli Kitap", "Eğitim", "Mobil Uygulama", "Ebeveyn Modu"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            color="#10B981"
            category="Yiyecek & İçecek"
            title="Global Yemek Sipariş Uygulaması"
            desc="Çoklu dil ve para birimi desteğiyle çalışan uluslararası yemek sipariş platformu. Canlı kurye takibi ve restoran değerlendirmeleri."
            tags={["Canlı Takip", "Uluslararası", "Çok Dilli", "Mobil App"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
            color="#0EA5E9"
            category="Gayrimenkul"
            title="Emlak & Konut Platformu"
            desc="Kiralık ve satılık evler için harita entegrasyonlu arama motoru. Favoriye alma, ev sahibiyle anında mesajlaşma ve bildirimler."
            tags={["Harita API", "Anlık Mesajlaşma", "Filtreleme", "Web & Mobil"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            color="#EC4899"
            category="Medya & Eğlence"
            title="Kısa Video & Sosyal Medya"
            desc="TikTok ve Instagram Reels tarzı kısa video paylaşım platformu. Filtreler, müzik ekleme, canlı yayın ve beğeni sistemleri."
            tags={["Video Akışı", "Canlı Yayın", "Filtreler", "Etkileşim"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
            color="#E11D48"
            category="Sağlık"
            title="Doktor Randevu Sistemi"
            desc="Hastalara en uygun uzmanı bulup online veya yüz yüze randevu alma imkanı sunan platform. Online görüntülü danışmanlık eklentisi."
            tags={["Görüntülü Görüşme", "Randevu", "Hasta Takibi", "Takvim"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
            color="#8B5CF6"
            category="Seyahat"
            title="Uluslararası Araç Kiralama"
            desc="Avrupa genelinde havalimanı ve şehir içi rent-a-car işlemleri için çoklu döviz destekli araç rezervasyon uygulaması."
            tags={["Rezervasyon", "Çoklu Para Birimi", "Seyahat", "B2C"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
            color="#64748B"
            category="Hobiler"
            title="Balıkçı ve Hava Durumu Uygulaması"
            desc="Amatör ve profesyonel balıkçılar için deniz koşulları, hava durumu ve konum tabanlı av haritası sunan mobil rehber."
            tags={["GPS", "Hava Durumu", "Harita", "Topluluk"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
            color="#06B6D4"
            color="#0EA5E9"
            category="Global E-Ticaret"
            title="Global B2B Pazar Yeri"
            desc="Tedarikçiler ve alıcılar için global ölçekli toptan satış platformu. Akıllı eşleştirme, güvenli ödeme ve lojistik entegrasyonu."
            tags={["B2B", "Çoklu Kur", "Global Lojistik", "Tedarik Zinciri"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            color="#8B5CF6"
            category="Finans"
            title="Uluslararası Ödeme Sistemi"
            desc="Sınır ötesi para transferleri için güvenli ve hızlı ödeme geçidi. Blockchain entegrasyonu ve anlık kur dönüştürücü."
            tags={["Fintech", "Blockchain", "Sınır Ötesi", "Güvenlik"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            color="#F59E0B"
            category="İhracat"
            title="E-İhracat Otomasyonu"
            desc="Avrupa ve Amerika pazarına yönelik e-ihracat otomasyon yazılımı. Pazar yeri entegrasyonları, depo yönetimi ve otomatik faturalama."
            tags={["Amazon API", "Depo Yönetimi", "Mikro İhracat"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
            color="#E11D48"
            category="Sosyal Medya"
            title="Sosyal Fotoğraf Uygulaması"
            desc="Instagram tarzı fotoğraf paylaşım platformu. Hikayeler, keşfet akışı, DM sistemi, canlı yayın ve etkileşim analitiği."
            tags={["Hikayeler", "Canlı Yayın", "DM Sistemi", "React Native"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>}
            color="#6366F1"
            category="Hizmet"
            title="Dijital Menü & QR Kod Sistemi"
            desc="Restoranlar ve kafeler için temassız dijital menü platformu. Özel QR kod oluşturucu, sipariş takibi ve çok dilli menü yönetimi."
            tags={["QR Kod Oluşturucu", "Dijital Menü", "Sipariş API", "Temassız"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
            color="#0EA5E9"
            category="Tasarım"
            title="Online Grafik & Afiş Tasarım Aracı"
            desc="Kullanıcıların kolayca afiş, davetiye ve sosyal medya görseli yapabileceği web tabanlı platform. Hazır şablonlar ve sürükle-bırak editör."
            tags={["Afiş Yapımı", "Sürükle-Bırak", "Şablonlar", "Kanvas"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
            color="#10B981"
            category="E-Ticaret"
            title="Çoklu Satıcılı Pazaryeri (Marketplace)"
            desc="Trendyol/Hepsiburada benzeri, birden fazla mağazanın satış yapabildiği gelişmiş e-ticaret platformu. Satıcı paneli, komisyon yönetimi ve sepet altyapısı."
            tags={["Pazaryeri", "Satıcı Paneli", "Komisyon", "E-Ticaret"]}
          />

          <ProjectCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            color="#F97316"
            category="Turizm"
            title="Otel & Tur Rezervasyon Sistemi"
            desc="Oteller ve seyahat acenteleri için geliştirilmiş akıllı rezervasyon yazılımı. Online ödeme, oda stok takibi, takvim yönetimi ve erken rezervasyon modülü."
            tags={["Rezervasyon", "Oda Takibi", "Online Ödeme", "Takvim"]}
          />
        </div>
      </section>
      {/* Services */}
      <section id="services" className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-200">Hizmetlerimiz</h2>
          <p className="mt-3 text-base text-zinc-400 max-w-2xl mx-auto">
            Tasarımdan deployment'a, full-stack çözümler sunuyoruz. Projeniz için ihtiyacınız olan her şey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
            title="Backend Geliştirme"
            desc="Yüksek performanslı API'ler, güvenli veritabanı mimarisi ve ölçeklenebilir altyapı çözümleri"
            features={["REST & GraphQL API", "Veritabanı Tasarımı", "Mikroservis Mimarisi", "Güvenlik & Auth"]}
          />
          <ServiceCard 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title="Frontend Geliştirme"
            desc="Kullanıcı deneyimi odaklı, modern ve responsive arayüzler. Web ve mobil platformlar için"
            features={["Web Uygulamaları", "Mobil Uygulamalar", "Admin Panelleri", "UI/UX Tasarım"]}
          />
          <ServiceCard 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
            title="Full-Stack Çözümler"
            desc="Konsepten canlıya tüm süreç. Proje yönetimi, geliştirme, test ve deployment dahil"
            features={["Proje Yönetimi", "DevOps & CI/CD", "Bulut Altyapısı", "Bakım & Destek"]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-20">
        <div className="relative rounded-2xl bg-[#1E293B] border border-slate-700/50 overflow-hidden shadow-xl">
          {/* Subtle accent line on top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#0EA5E9] opacity-40"/>
          
          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left side - Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-zinc-200">
                  Projenizi<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64748B] to-[#0EA5E9]">Konuşalım</span>
                </h2>
                <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                  Profesyonel yazılım geliştirme hizmetleri için bizimle iletişime geçin. Projeniz için en uygun çözümü birlikte belirleyelim.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#64748B]/20 to-[#475569]/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-300">Esnek Çalışma Takvimi</div>
                    <div className="text-xs text-zinc-400 mt-1">İhtiyaçlarınıza göre özelleştirilebilir süreç</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#64748B]/20 to-[#475569]/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-300">Güvenli İletişim</div>
                    <div className="text-xs text-zinc-400 mt-1">Tüm bilgileriniz gizlilik kapsamında korunur</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#64748B]/20 to-[#475569]/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-300">Deneyimli Ekip</div>
                    <div className="text-xs text-zinc-400 mt-1">Uzman yazılımcılar tarafından geliştirilir</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition" 
                    placeholder="Adınız"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input 
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition" 
                    placeholder="Soyadınız"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <input 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition" 
                  placeholder="E-posta Adresiniz"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition" 
                  placeholder="Telefon / WhatsApp"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <textarea 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition resize-none" 
                  rows={5} 
                  placeholder="Projenizden bahsedin... Ne yapmak istiyorsunuz?"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl px-6 py-4 text-base font-bold bg-gradient-to-r from-[#64748B] to-[#475569] hover:from-[#0EA5E9] hover:to-[#0284C7] transition-all shadow-2xl hover:shadow-[#0EA5E9]/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Ücretsiz Teklif Al →'}
                </button>
              </form>
              
              <p className="text-xs text-zinc-500 text-center mt-4">
                Formunu doldurarak <span className="text-zinc-400">gizlilik politikamızı</span> kabul etmiş olursunuz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="relative bg-[#0B1026] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-[slideUp_0.3s_ease-out]">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Talebiniz Alındı!
            </h3>
            <p className="text-zinc-400 text-center mb-6">
              Teklif talebiniz başarıyla kaydedildi. En kısa sürede size dönüş yapacağız.
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full rounded-xl px-6 py-3 text-base font-bold bg-gradient-to-r from-[#64748B] to-[#475569] hover:from-[#0EA5E9] hover:to-[#0284C7] transition-all shadow-xl hover:shadow-[#0EA5E9]/40"
            >
              Tamam
            </button>
          </div>
        </div>
      )}

      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button onClick={() => scrollToSection('top')} className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0 p-0">
            <AronoLogo className="h-16 w-16" />
            <div>
              <div className="text-lg font-bold">ARONO</div>
              <div className="text-xs text-zinc-400">Digital Solutions</div>
            </div>
          </button>
          <div className="text-sm text-zinc-400">
            © {new Date().getFullYear()} ARONO. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-zinc-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-zinc-400 hover:text-white transition">GitHub</a>
            <a href="#" className="text-zinc-400 hover:text-white transition">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({icon, color, category, title, desc, tags}) {
  return (
    <div className="group relative flex flex-col h-full rounded-xl bg-[#1E293B] border border-slate-700/50 p-6 hover:bg-[#2A374D] transition-colors duration-300 overflow-hidden shadow-lg hover:shadow-xl">
      {/* Sol tarafta ince renkli şerit vurgusu - Tek ve uyumlu marka rengi */}
      <div className="absolute top-0 left-0 w-1 h-full opacity-40 group-hover:opacity-100 transition-opacity duration-300 bg-[#0EA5E9]"/>
      
      <div className="flex items-start justify-between mb-5">
        <div className="h-12 w-12 flex-shrink-0 rounded-lg flex items-center justify-center bg-black/20 text-[#0EA5E9] group-hover:text-white transition-colors">
          {icon}
        </div>
        <span className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-md bg-black/20 text-zinc-400 whitespace-nowrap">
          {category}
        </span>
      </div>
      
      {/* Sabit 2 satır yüksekliği, böylece tüm kartlarda açıklamalar aynı hizada başlar */}
      <h3 className="text-lg font-bold text-zinc-100 mb-3 line-clamp-2 h-[56px] leading-tight">
        {title}
      </h3>
      
      {/* Sabit 4 satır yüksekliği, açıklamaların eşit yer kaplaması sağlanır */}
      <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-4 h-[84px]">
        {desc}
      </p>
      
      {/* Butonların/Etiketlerin bulunduğu alanın sabit kalması için */}
      <div className="flex flex-wrap gap-2 mt-auto content-start h-[68px]">
        {tags.map((tag, i) => (
          <span key={i} className="text-[11px] font-medium px-2.5 py-1.5 rounded bg-black/20 text-zinc-300 whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({icon, title, desc, features}) {
  return (
    <div className="group relative flex flex-col h-full rounded-xl bg-[#1E293B] border border-slate-700/50 p-6 hover:bg-[#2A374D] transition-colors duration-300 overflow-hidden shadow-lg hover:shadow-xl">
      {/* Sol tarafta ince renkli şerit vurgusu */}
      <div className="absolute top-0 left-0 w-1 h-full opacity-40 group-hover:opacity-100 transition-opacity duration-300 bg-[#0EA5E9]"/>
      
      <div className="relative flex flex-col flex-grow">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-black/20 text-[#0EA5E9] group-hover:text-white transition-colors">
          {icon}
        </div>
        <h4 className="text-lg font-bold mb-2.5 text-zinc-100">{title}</h4>
        <p className="text-sm text-zinc-400 mb-6 flex-grow leading-relaxed">{desc}</p>
        
        <ul className="space-y-2 mt-auto">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
              <div className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"/>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TechCard({name}) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-all hover:border-white/20">
      <div className="flex flex-col items-center gap-3">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#64748B]/10 to-[#475569]/10 border border-white/10 flex items-center justify-center group-hover:from-[#64748B]/20 group-hover:to-[#475569]/20 transition-all">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-[#64748B] to-[#475569]"/>
        </div>
        <span className="text-sm font-medium text-zinc-300 text-center">{name}</span>
      </div>
    </div>
  );
}

function TechBadge({children}) {
  return (
    <span className="inline-flex items-center rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-white/10 transition">
      {children}
    </span>
  );
}

function StatCard({ end, label, color, gradient }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 2000; // 2 saniye

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <div className={`h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-br ${gradient} border border-white/10 flex items-center justify-center`}>
        <span className="text-lg md:text-xl font-bold" style={{ color }}>
          {count}+
        </span>
      </div>
      <span className="text-xs md:text-sm text-zinc-400 font-medium">{label}</span>
    </div>
  );
}
