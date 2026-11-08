# Kutvoks — App Studio

OPS: Financial Support ve Bütçe Takip için statik, GitHub Pages üzerinden yayınlanan ürün sitesi. Ziyaretçinin iki uygulamayı karşılaştırmasını, özellik ve kullanım koşullarını incelemesini ve Google Play'e ulaşmasını sağlar.

## Sayfalar

| Dosya | İçerik |
|---|---|
| `index.html` | İki ürün vitrini, etkileşimli başlangıç seçici, OPS videoları, stüdyo ve destek |
| `ops.html` | OPS özellik kataloğu, analiz hakları, başlangıç, üç video, maskot ve SSS |
| `butce-takip.html` | Bütçe özellikleri, ücretsiz/Premium tablosu, başlangıç, gerçek ekranlar ve SSS |
| `gizlilik.html` | OPS gizlilik politikası — URL sabittir |
| `butce-gizlilik.html` | Bütçe Takip gizlilik politikası — URL sabittir |
| `app-ads.txt` | Mevcut Google ve Tappx satıcı bildirimleri — kökte korunur |

## Yakında: Kairos

BIST30 sinyal uygulaması **Kairos** (kaynak: `C:\Users\aykut\Desktop\Kairos`, v2.3.0) Play'de yayına hazırlanıyor. Ana sayfada `story-kairos` "Yakında" kartı (altın rozet) ve footer'da "Kairos · Yakında" etiketi olarak gösterilir; CTA iletişim formuna işaret eder. Görseller: `images/apps/kairos-icon.png`, `images/kairos/screen-hex.png`.

Play Console için hazır linkler (kaynak: `PLAY_LISTING.md` + `PLAY_PRIVACY_POLICY.md`):

| Alan | Değer |
|---|---|
| Web sitesi | `https://aykutkutlu.github.io/AykutKutlu/` |
| Gizlilik politikası (URL) | `https://aykutkutlu.github.io/AykutKutlu/kairos-gizlilik.html` |
| Kullanım koşulları (URL) | `https://aykutkutlu.github.io/AykutKutlu/kairos-kosullar.html` |
| Destek e-posta | `aykutkutlu08@gmail.com` |
| Destek sayfası (form) | `https://aykutkutlu.github.io/AykutKutlu/index.html#iletisim` |

Yayına girdiğinde `content/apps.json` içine `kairos` girişi ekleyip `scripts/build_site.py` içinde `detail('kairos')` çağrısına bağlayınca `kairos.html` otomatik üretilir; teaser kartını Play linkli ürüne çevirmeyi unutma.

## İçerik güncelleme

Ürün özelliklerinin kaynağı `content/apps.json`. Başlıklar, açıklamalar, özellik grupları, koşullar, başlangıç adımları ve SSS bu dosyadadır. Koddan doğrulanan özelliklerin göreli kaynak kanıtları `docs/feature-audit-ops.json` ve `docs/feature-audit-butce.json` dosyalarında tutulur.

OPS kaynak sürümü **2.11.2 / Android 8+**, Bütçe Takip kaynak sürümü **1.25.3 / Android 9+** incelendi. Bunlar inceleme anındaki kaynak sürümleridir; mağazada yayındaki sürüm garantisi değildir. Kaynak depoları değiştirilmedi.

Önemli içerik ayrımları:

- OPS yerel analizleri ile harici sağlayıcı kullanan sohbet/Haber Etkisi farklıdır. Portföy bağlamı AI sağlayıcısına iletilebilir.
- Bütçe asistanı ve projeksiyonu yerel kurallara/hesaplara dayanır. Dışa aktarma CSV gider çıktısıdır; PDF, ekstre **içe aktarma** özelliğidir.
- Gerçekleşmesi garanti edilmeyen analiz, OCR, banka formatı veya yatırım sonucu vaat edilmez.
- Yeni özellik eklerken yalnız helper sınıfının varlığını değil, erişilebilir kullanıcı akışını da doğrulayın.

Python 3 standart kütüphanesiyle sayfaları yeniden üretin:

```powershell
python scripts/build_site.py
python scripts/check_site.py
node --check lang.js
node --check home-copy.js
```

`scripts/build_site.py`, `index.html`, `ops.html`, `butce-takip.html` ve `home-copy.js` üretir. Ana sayfanın TR/EN metinleri de bu script içindedir. Üretilen HTML'yi doğrudan değiştirirseniz sonraki üretimde değişiklik kaybolur. Gizlilik sayfaları ayrı düzenlenir; özellik/veri akışı değişiklikleriyle tutarlı tutulmalıdır.

`styles.css` ortak tasarımı; `lang.js` dil tercihini, klavye destekli ürün seçiciyi ve bölüm takibini yönetir. Ana içerik JavaScript olmadan da okunur. Ana sayfa TR/EN; ürün ve gizlilik sayfaları Türkçedir. Bu Türkçe sayfalar dil tercihiyle yanlış etiketlenmez.

## OPS video serisi

| Video kimliği | Sunum |
|---|---|
| `zaQTnNX64Eg` | OPS dikkatinizi dağıtabilir! — yatay |
| `CSgLeQA-TLk` | OPS sevdiklerinizle daha çok vakit geçirin! — dikey |
| `5iqZ6PtnM9A` | İlk tanıtım — dikey Shorts |

Videolar `ops.html#tanitim` altında; iki yeni video ayrıca ana sayfada bulunur. Gömüler YouTube `youtube-nocookie.com` adresini, gecikmeli yüklemeyi ve tam ekran desteğini kullanır; otomatik oynatma yoktur. Her birinde bağımsız YouTube bağlantısı vardır. Yeni video eklerken `scripts/build_site.py` içindeki `VIDEOS` listesini güncelleyin.

## Geri bildirim formu

Tüm sayfalara yerleşik geri bildirim formunda ziyaretçi yazıları **formsubmit.co** üzerinden `aykutkutlu08@gmail.com`'a iletilir:

- İlk form gönderiminde FormSubmit, iletişim adresine bir **"Activate Form"** e-postası yollar; linki bir kez tıklandıktan sonra iletiler akmaya başlar.
- Bu tek seferlik etkinleştirme yapılana kadar site, ziyaretçiye "kanal etkinleştirme aşamasında" diye bilgilendirme gösterir ve doğrudan e-posta bağlantısı önerecek şekilde tasarlandı (`lang.js` içindeki `FORM_MESSAGES`).
- `build_site.py` içindeki `FORM_ALIAS` sabiti iletişim adresini gizleyen FormSubmit anahtarını tutar; gönderiler yine `MAIL` adresine düşer. FormSubmit yeni bir anahtar üretirse (tek seferlik aktivasyon maili, 08.11.2026) eski değeri oradaki string ile güncelle; adres değişikliğinde ise `MAIL` ve aliases'i birlikte güncelle, ardından `python scripts/build_site.py` çalıştır.

## Yerel önizleme ve yayın

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Önizleme: `http://127.0.0.1:8765/`. GitHub Pages'te derleme gerekmez; üretilmiş HTML ve varlıklar repoda bulunur. Mevcut `main / (root)` yayın düzeni ve `.nojekyll` korunur. Canlı adres: `https://aykutkutlu.github.io/AykutKutlu/`.

`app-ads.txt` dosyasını, reklam yayıncı/satıcı kayıtlarını veya gizlilik URL'lerini sıradan içerik değişikliklerinde değiştirmeyin. Bu güncelleme otomatik commit/push veya yayın yapmaz.

Destek: aykutkutlu08@gmail.com
