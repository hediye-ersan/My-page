# 🌍 Portfolio Web Sitesi

Bu proje, çok dilli destek, karanlık mod ve kullanıcı tercihlerini kalıcı olarak saklayan modern, responsive ve dinamik bir **portfolio web uygulaması**dır. Proje **React**, **TailwindCSS** ve **React Context API** kullanılarak geliştirilmiştir.

🔗 [Canlı Demo](https://my-page-rho-ochre.vercel.app/)

---

## 🚀 Özellikler

- 🌐 `useContext` ile dinamik dil değiştirme ve çok dilli destek  
- 💾 Dil tercihi ve tema modu ayarlarının `localStorage`'da saklanması  
- 🌙 Kalıcı ayarlara sahip karanlık mod anahtarı  
- 📱 Tüm ekran boyutlarına uyum sağlayan responsive tasarım  
- ⚡ Tailwind CSS ile hızlı ve hafif kullanıcı arayüzü  
- 🔧 Kolay bakım ve genişletilebilirlik için temiz bileşen yapısı  

---

## 🧰 Kullanılan Teknolojiler

- React  
- React Context API  
- Tailwind CSS  
- JavaScript (ES6+)  
- Vercel (Deploy için)  
- Vercel Analytics (Ziyaretçi takibi için)  
- Google Analytics (Detaylı analitik için)  

---

## ⚙️ Başlarken

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# 1. Repoyu klonlayın
git clone https://github.com/hediye-ersan/my-portfolio-page.git

# 2. Proje klasörüne gidin
cd my-portfolio-page

# 3. Bağımlılıkları yükleyin
npm install

# 4. Geliştirme sunucusunu başlatın
npm run dev
```

---

## 📊 Analytics Kurulumu

Projede **iki farklı analitik çözüm** entegre edilmiştir:

### 1. Vercel Analytics (Otomatik)
Vercel Analytics otomatik olarak aktif olacaktır. Sadece Vercel dashboard'unuzdan analytics özelliğini etkinleştirmeniz yeterlidir.

### 2. Google Analytics
Google Analytics kullanmak için:

1. [Google Analytics](https://analytics.google.com/) hesabı oluşturun
2. Yeni bir özellik (property) oluşturun
3. Measurement ID'nizi alın (G-XXXXXXXXXX formatında)
4. `index.html` dosyasındaki `G-XXXXXXXXXX` kısmını gerçek Measurement ID'niz ile değiştirin

```html
<!-- index.html içinde -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SIZIN_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SIZIN_ID');
</script>
```

### Ziyaretçi İstatistiklerine Erişim
- **Vercel Analytics**: Vercel dashboard > Analytics bölümünden
- **Google Analytics**: analytics.google.com adresinden

### Güvenilirlik ve Güvenlik

Her iki platform da endüstri standardı ve son derece güvenilirdir:

- **Google Analytics**: Dünya çapında 28+ milyon web sitesi kullanıyor
- **Vercel Analytics**: Çerez kullanmadan anonimleştirilmiş veri toplar, daha gizlilik odaklı
- Her ikisi de AWS benzeri büyük bulut altyapılarında çalışır
- Verileriniz güvenli şekilde şifrelenir ve saklanır

### Not: GDPR/KVKK Uyumluluğu

Eğer Google Analytics kullanıyorsanız, yasal uyumluluk için cookie consent banner eklemeniz önerilir. Vercel Analytics için bu gerekli değildir çünkü çerez kullanmaz.
