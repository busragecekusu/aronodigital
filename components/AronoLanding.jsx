'use client';

import { useState, useEffect, useRef } from 'react';
import AronoLogo from './AronoLogo';

export default function AronoLanding() {
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-200">Tamamladığımız Projeler</h2>
          <p className="mt-3 text-base text-zinc-400 max-w-2xl mx-auto">
            Farklı sektörlerde gerçekleştirdiğimiz başarılı projeler.
          </p>
        </div>
        
        <div className="space-y-10">
          <ProjectShowcase 
            title="Yapay Zeka Destekli Butik Sistemi" 
            desc="Türkiye'de faaliyet gösteren moda butikleri için yapay zeka destekli sanal deneme platformu. Prompt ile cansız mankene otomatik giydirme ve canlı manken üzerinde gerçek zamanlı görselleştirme özellikleri. AI tabanlı stil önerileri ve ürün kombinasyonları."
            features={["AI Giydirme", "Prompt Sistemi", "Stil Önerileri"]}
          />
          
          <ProjectShowcase 
            title="Masal Web Sitesi" 
            desc="Türkiye'deki çocuklar için interaktif masal platformu. Zengin içerik yönetim sistemi, kategori bazlı masal arşivi ve kullanıcı dostu arayüz. Ebeveyn kontrol paneli ve okuma istatistikleri ile kapsamlı bir dijital masal kütüphanesi."
            features={["İçerik Yönetimi", "Kategoriler", "İstatistikler"]}
            reverse
          />
          
          <ProjectShowcase 
            title="Emlak Platformu" 
            desc="Türkiye'de büyük ölçekli gayrimenkul platformu. Harita entegrasyonu, gelişmiş filtreleme, favoriler ve anlık bildirimler. Yüksek performanslı arama altyapısı ile binlerce ilanı saniyeler içinde sıralama."
            features={["5000+ İlan", "Harita API", "Admin Panel"]}
          />
          
          <ProjectShowcase 
            title="Balıkçı Mobil Uygulaması" 
            desc="Global ölçekte balıkçılar için konum tabanlı mobil uygulama. Hava durumu, deniz koşulları ve balık türü önerileri. Gerçek zamanlı API entegrasyonları ve offline mod ile kesintisiz kullanım deneyimi."
            features={["1000+ İndirme", "Offline Mod", "Push Bildiri"]}
            reverse
          />
          
          <ProjectShowcase 
            title="E-Ticaret Sistemi" 
            desc="Global ölçekte tam donanımlı e-ticaret platformu. Ürün varyantları, stok yönetimi, ödeme entegrasyonu. Admin panelinde canlı satış analitiği, müşteri segmentasyonu ve sipariş takip sistemi ile kapsamlı online satış çözümü."
            features={["Ödeme API", "Stok Takip", "Analitik"]}
          />
          
          <ProjectShowcase 
            title="Berber Web Sitesi" 
            desc="Hollanda'da faaliyet gösteren berber salonu için modern ve kullanıcı dostu web sitesi. Online randevu sistemi, hizmet tanıtımları ve galeri özellikleri ile müşteri deneyimini dijitalleştirdik. Responsive tasarım ile tüm cihazlarda mükemmel görünüm."
            features={["Online Randevu", "Responsive", "Galeri"]}
            reverse
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
            title="Backend Geliştirme"
            desc="Yüksek performanslı API'ler, güvenli veritabanı mimarisi ve ölçeklenebilir altyapı çözümleri"
            features={["REST & GraphQL API", "Veritabanı Tasarımı", "Mikroservis Mimarisi", "Güvenlik & Auth"]}
          />
          <ServiceCard 
            title="Frontend Geliştirme"
            desc="Kullanıcı deneyimi odaklı, modern ve responsive arayüzler. Web ve mobil platformlar için"
            features={["Web Uygulamaları", "Mobil Uygulamalar", "Admin Panelleri", "UI/UX Tasarım"]}
          />
          <ServiceCard 
            title="Full-Stack Çözümler"
            desc="Konsepten canlıya tüm süreç. Proje yönetimi, geliştirme, test ve deployment dahil"
            features={["Proje Yönetimi", "DevOps & CI/CD", "Bulut Altyapısı", "Bakım & Destek"]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-20">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#64748B]/5 to-[#475569]/5 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0EA5E9]/5 to-transparent rounded-full blur-3xl"/>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#64748B]/5 to-transparent rounded-full blur-3xl"/>
          
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
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition" 
                    placeholder="Adınız"
                    type="text"
                  />
                  <input 
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition" 
                    placeholder="Soyadınız"
                    type="text"
                  />
                </div>
                <input 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition" 
                  placeholder="E-posta Adresiniz"
                  type="email"
                />
                <input 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition" 
                  placeholder="Telefon / WhatsApp"
                  type="tel"
                />
                <textarea 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9]/50 transition resize-none" 
                  rows={5} 
                  placeholder="Projenizden bahsedin... Ne yapmak istiyorsunuz?"
                />
                <button 
                  type="submit"
                  className="w-full rounded-xl px-6 py-4 text-base font-bold bg-gradient-to-r from-[#64748B] to-[#475569] hover:from-[#0EA5E9] hover:to-[#0284C7] transition-all shadow-2xl hover:shadow-[#0EA5E9]/40 hover:scale-[1.02]"
                >
                  Ücretsiz Teklif Al →
                </button>
              </form>
              
              <p className="text-xs text-zinc-500 text-center mt-4">
                Formunu doldurarak <span className="text-zinc-400">gizlilik politikamızı</span> kabul etmiş olursunuz.
              </p>
            </div>
          </div>
        </div>
      </section>

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

function ProjectShowcase({title, desc, features, reverse}) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-6 md:p-8 hover:border-white/20 transition-all">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#64748B]/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"/>
      
      <div className="relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#64748B]/20 to-[#475569]/20 border border-white/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-200">{title}</h3>
          </div>
        </div>
        
        <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-6">{desc}</p>
        
        <div className="flex flex-wrap gap-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#64748B] to-[#0EA5E9]"/>
              <span className="text-xs text-zinc-300 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({title, desc, features}) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all">
      <div className="relative">
        <div className="mb-4 inline-flex p-2.5 rounded-lg bg-gradient-to-br from-[#64748B]/20 to-[#475569]/20 border border-white/10">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#64748B] to-[#475569]"/>
        </div>
        <h4 className="text-xl font-bold mb-2 text-zinc-200">{title}</h4>
        <p className="text-sm text-zinc-400 mb-4">{desc}</p>
        <ul className="space-y-1.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
              <div className="h-1.5 w-1.5 rounded-full bg-[#64748B]"/>
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
