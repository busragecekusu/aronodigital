# Admin Paneli Kurulum ve Kullanım

## Kurulum

### 1. Admin Şifresi Ayarlama

Proje kök dizininde `.env.local` dosyası oluşturun:

```bash
# .env.local
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

**Önemli:** Güvenlik için şifreyi mutlaka değiştirin!

### 2. Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

## Kullanım

### Admin Paneline Erişim

Admin paneline şu adresten erişebilirsiniz:
```
http://localhost:3000/admin
```

### Varsayılan Giriş Bilgileri

- **Kullanıcı Adı:** admin
- **Şifre:** admin123 (veya .env.local'de belirlediğiniz şifre)

### Özellikler

1. **Teklif Talepleri Görüntüleme**
   - Tüm teklif talepleri liste halinde görüntülenir
   - Her teklif için ad, soyad, e-posta, telefon ve proje detayları görünür
   - Tarih bilgisi otomatik olarak kaydedilir

2. **Teklif Silme**
   - İstenmeyen teklifler "Sil" butonu ile silinebilir
   - Silme işlemi onay gerektirir

3. **Güvenli Giriş**
   - Session tabanlı oturum yönetimi
   - Çıkış yapma özelliği

## Veri Saklama

Teklif talepleri `data/quotes.txt` dosyasında saklanır. Bu dosya:
- Otomatik olarak oluşturulur
- JSON formatında kayıt tutar
- Git'e eklenmez (.gitignore'da)
- Her teklif `---` ayracı ile ayrılır

## Güvenlik Notları

⚠️ **Önemli Güvenlik Uyarıları:**

1. `.env.local` dosyasını mutlaka oluşturun ve güçlü bir şifre belirleyin
2. Production ortamında daha güvenli bir authentication sistemi kullanın
3. `data/` klasörünün yetkilerini kontrol edin
4. HTTPS kullanın (production'da)

## Sorun Giderme

### Admin paneline giriş yapamıyorum
- `.env.local` dosyasının doğru konumda olduğundan emin olun
- Sunucuyu yeniden başlatın (`npm run dev`)
- Tarayıcı konsolunda hata mesajlarını kontrol edin

### Teklifler görünmüyor
- `data/quotes.txt` dosyasının var olduğunu kontrol edin
- Dosya izinlerini kontrol edin
- Sunucu loglarını kontrol edin

### Form gönderimi çalışmıyor
- API route'larının doğru çalıştığını kontrol edin
- Network sekmesinde API isteklerini inceleyin
- Console'da JavaScript hatalarını kontrol edin

## Teknik Detaylar

### API Endpoints

- `POST /api/quote` - Yeni teklif talebi oluşturma
- `POST /api/admin/login` - Admin girişi
- `GET /api/admin/quotes` - Tüm teklifleri getirme
- `DELETE /api/admin/quotes` - Teklif silme

### Teknolojiler

- **Framework:** Next.js 14
- **UI:** React + TailwindCSS
- **Veri Saklama:** Dosya sistemi (txt)
- **Authentication:** Session-based (sessionStorage)
