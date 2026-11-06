# Kutvoks — App Studio 🧭

Kutvoks, Google Play'de yayınlanan Android uygulamalarının geliştirici hesabına ait resmi web sitesidir.
GitHub Pages üzerinden yayınlanır.

## Yayındaki uygulamalar

| Uygulama | Açıklama | Play Store | Gizlilik |
|---|---|---|---|
| **OPS: Financial Support** | BIST, kripto, döviz, altın ve emtia takibi; OPS yapay zekâ asistanı | [Play](https://play.google.com/store/apps/details?id=com.finanspro) | [gizlilik.html](gizlilik.html) |
| **Bütçe Takip** (Budget Tracker) | Hızlı gider kaydı, fiş tarama, raporlar, bütçe projeksiyonu | [Play](https://play.google.com/store/apps/details?id=com.butceapp) | [butce-gizlilik.html](butce-gizlilik.html) |

## Yayınla ilgili dosyalar (DOKUNMA!)

- **`app-ads.txt`** → AdMob satıcı beyanı. Kök dizinde olmalı; alt yolda AdMob doğrulamaz.
  İçeriği: `google.com, pub-6479015583137008, DIRECT, f08c47fec0942fa0` — aynı yayıncı hesabını kullanan tüm uygulamaları (OPS: Financial Support, Bütçe Takip) kapsar, yeni uygulamada değiştirilmez.
- **`gizlilik.html`** → OPS: Financial Support gizlilik politikası. Play Console ve AdMob veri güvenliği formlarında kullanılan URL'dir; adını değiştirme.
- **`butce-gizlilik.html`** → Bütçe Takip gizlilik politikası.

## Sayfa yapısı

```
index.html           Ana sayfa (hero, banner, uygulama kartları, değerler)
ops.html             OPS: Financial Support uygulama sayfası
butce-takip.html     Bütçe Takip uygulama sayfası
gizlilik.html        OPS: Financial Support gizlilik politikası (kök düzeyinde kal — URL sabit)
butce-gizlilik.html  Bütçe Takip gizlilik politikası
styles.css           Tek ortak stil (Space Grotesk, mavi/turuncu Kutvoks marka paleti)
lang.js              TR/EN dil seçimi (sadece index) + scroll animasyonları + video slot
images/kutvoks/      Marka: logo (kutvoks-icon.png) + developer banner (banner.png)
images/apps/         Uygulama ikonları: ops-icon.png, butce-icon.png
images/ops/mood/     OPS "Şikko" maskot ruh hâlleri (idle/happy/thinking/alert/sleeping/listening)
images/butce/        Bütçe Takip ekran görüntüleri + fiş örneği
ops.html#tanitim     OPS'nin ilk tanıtımı: YouTube Shorts (5iqZ6PtnM9A)
                     → 9:16 gömülü oynatıcı + YouTube'da aç bağlantısı
videos/              Bütçe Takip için isteğe bağlı videos/butce-demo.mp4
                     → dosya koyulduğunda Bütçe sayfasındaki video alanı oynatıcıya geçer
```

## Yeni uygulama ekleme kontrol listesi

1. `images/apps/` içine 512×512 PNG ikon koy.
2. `index.html` içindeki `.apps-grid` bölümüne yeni bir `.app-card` ekle (ikon, açıklama, Play linki).
3. Ayrıca hero'daki `.chip` listesine de ekle.
4. Uygulama detay sayfası oluştur: `ops.html`'i kopyalayıp uyarla.
5. Gizlilik politikası ekle: `butce-gizlilik.html`'i kopyalayıp uyarla; footer'a linkini at.
6. Aynı AdMob yayıncı hesabındaysan `app-ads.txt` değeri aynı kalır.
7. Play Console'daki geliştirici web sitesi alanı bu sitenin adresiyle birebir aynı olmalı.

## Yayın (GitHub Pages)

1. Push sonrası `Settings → Pages → Deploy from a branch → main / (root)`.
2. Canlı adres: `https://aykutkutlu.github.io/AykutKutlu/`. Özel domain eklersen `app-ads.txt` kök dizinde kalmaya devam etmeli ve Play Console'daki site adresini güncellemelisin.
3. AdMob → Uygulama ayarları → app-ads.txt sekmesinden doğrulamayı (gerekirse "Tekrar tarama") 24 saat sonra kontrol et.

## İletişim

Destek ve hata bildirimleri: aykutkutlu08@gmail.com
