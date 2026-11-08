"""Build the three static product pages. Python stdlib only; no runtime build required."""
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APPS = json.loads((ROOT / 'content/apps.json').read_text(encoding='utf-8'))
COPY = {'tr': {}, 'en': {}}
BASE = 'https://aykutkutlu.github.io/AykutKutlu/'
MAIL = 'aykutkutlu08@gmail.com'
VIDEOS = [('zaQTnNX64Eg', 'OPS dikkatinizi dağıtabilir!', 'OPS may distract you!', False),
          ('CSgLeQA-TLk', 'OPS sevdiklerinizle daha çok vakit geçirin!', 'Spend more time with your loved ones!', True),
          ('5iqZ6PtnM9A', 'İlk tanıtım · Shorts', 'First introduction · Shorts', True)]


def e(value):
    return escape(str(value), quote=True)


def tr(key, turkish, english, tag='span', cls=''):
    COPY['tr'][key] = turkish
    COPY['en'][key] = english
    class_attr = f' class="{e(cls)}"' if cls else ''
    return f'<{tag} data-i18n="{key}"{class_attr}>{e(turkish)}</{tag}>'


def head(title, desc, page, image='images/kutvoks/banner.png'):
    return f'''<!DOCTYPE html>
<html lang="tr"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{e(title)}</title><meta name="description" content="{e(desc)}">
<link rel="canonical" href="{BASE}{page}">
<meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(desc)}">
<meta property="og:type" content="website"><meta property="og:url" content="{BASE}{page}">
<meta property="og:image" content="{BASE}{image}"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#153c70">
<link rel="icon" type="image/png" href="images/kutvoks/kutvoks-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>'''


def header(home=False):
    apps = tr('nav.apps', 'Uygulamalar', 'Apps') if home else 'Uygulamalar'
    about = tr('nav.about', 'Kutvoks hakkında', 'About Kutvoks') if home else 'Kutvoks hakkında'
    support = tr('nav.support', 'Destek', 'Support') if home else 'Destek'
    toggle = '''<div class="lang-toggle" role="group" aria-label="Dil / Language"><button class="lang-opt" type="button" data-lang="tr" aria-label="Türkçe">TR</button><button class="lang-opt" type="button" data-lang="en" aria-label="English">EN</button></div>''' if home else ''
    skip = tr('nav.skip', 'İçeriğe geç', 'Skip to content') if home else 'İçeriğe geç'
    prefix = '' if home else 'index.html'
    return f'''<a class="skip-link" href="#icerik">{skip}</a>
<header class="site-header" id="siteHeader"><div class="wrap header-inner">
<a class="brand" href="index.html" aria-label="Kutvoks"><img src="images/kutvoks/kutvoks-icon.png" alt="" width="44" height="44"><span><b>Kutvoks</b><span>app studio</span></span></a>
<nav class="nav-links" aria-label="Ana menü"><a href="{prefix}#uygulamalar">{apps}</a><a href="{prefix}#hakkinda">{about}</a><a href="{prefix}#iletisim">{support}</a></nav>{toggle}
</div></header>'''


def footer(home=False):
    note = tr('footer.note', 'Günlük finans için bağımsız Android uygulamaları.', 'Independent Android apps for everyday finance.', 'p') if home else '<p>Günlük finans için bağımsız Android uygulamaları.</p>'
    privacy = tr('footer.privacy', 'Gizlilik ve bilgiler', 'Privacy & information') if home else 'Gizlilik ve bilgiler'
    ops_privacy = tr('footer.opsPrivacy', 'OPS · Gizlilik', 'OPS · Privacy') if home else 'OPS · Gizlilik'
    budget_privacy = tr('footer.budgetPrivacy', 'Bütçe Takip · Gizlilik', 'Bütçe Takip · Privacy') if home else 'Bütçe Takip · Gizlilik'
    disclaimer = tr('footer.disclaimer', 'OPS içerikleri bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.', 'OPS content is for information, not investment advice.') if home else 'OPS içerikleri bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.'
    feedback = tr('footer.feedback', 'Geri bildirim formu', 'Feedback form') if home else 'Geri bildirim formu'
    return f'''<footer class="site-footer"><div class="wrap"><div class="footer-grid">
<div class="footer-col footer-brand"><a class="brand" href="index.html"><img src="images/kutvoks/kutvoks-icon.png" alt="" width="44" height="44"><span><b>Kutvoks</b><span>app studio</span></span></a>{note}</div>
<div class="footer-col"><h3>Kutvoks</h3><a href="ops.html">OPS: Financial Support</a><a href="butce-takip.html">Bütçe Takip</a><a href="mailto:{MAIL}">{MAIL}</a></div>
<div class="footer-col"><h3>{privacy}</h3><a href="index.html#iletisim">{feedback}</a><a href="gizlilik.html">{ops_privacy}</a><a href="butce-gizlilik.html">{budget_privacy}</a><a href="app-ads.txt">app-ads.txt</a></div>
</div><div class="footer-bottom"><span>© 2026 Kutvoks</span><span>{disclaimer}</span></div></div></footer>'''


def play(app):
    return f'https://play.google.com/store/apps/details?id={app["package"]}'


# Feedback endpoint: the random-like string is a FormSubmit alias that maps to MAIL
# (from the one-time activation mail, 08 Nov 2026). It hides the raw email from scrapers.
FORM_ALIAS = '5dbe9cf6a213ac34c2375538c0dbeff2'
FORM_ACTION = 'https://formsubmit.co/ajax/' + FORM_ALIAS


def feedback_form():
    """Contact panel form. Submissions are delivered to MAIL by formsubmit.co;
    first submission sends a one-click activation mail (see README)."""
    topics = ['Geri bildirim', 'Hata bildirimi', 'İş birliği / Fikir', 'Diğer']
    topic_en = ['Feedback', 'Bug report', 'Collaboration / Idea', 'Other']
    pick = tr('form.topicPick', '— Konu seç —', '— Choose a topic —')
    options = '<option value="" data-i18n="form.topicPick">— Konu seç —</option>' + ''.join(
        f'<option value="t{i + 1}" data-i18n="form.topic{i + 1}">{e(t)}</option>' for i, t in enumerate(topics))
    for i, (t, en) in enumerate(zip(topics, topic_en)):
        tr('form.topic' + str(i + 1), t, en)
    return f'''<form class="contact-form" data-feedback action="{FORM_ACTION}" method="POST" novalidate>
<input type="hidden" name="_subject" value="Kutvoks web — geri bildirim">
<input type="hidden" name="_template" value="table">
<input type="hidden" name="_origin" value="web">
<input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" class="honey">
<div class="field-row">
<div class="field"><label for="fbName" data-i18n="form.name">Ad (opsiyonel)</label><input id="fbName" name="name" type="text" autocomplete="name" maxlength="80" data-i18n-ph="form.namePh" placeholder="Adın"></div>
<div class="field"><label for="fbEmail" data-i18n="form.email">E-posta</label><input id="fbEmail" name="email" type="email" autocomplete="email" required maxlength="160" placeholder="ornek@posta.com"></div>
</div>
<div class="field"><label for="fbTopic" data-i18n="form.topic">Konu</label><select id="fbTopic" name="topic" required>{options}</select></div>
<div class="field"><label for="fbMsg" data-i18n="form.msg">Mesaj</label><textarea id="fbMsg" name="message" rows="5" required maxlength="4000" data-i18n-ph="form.msgPh" placeholder="Bize anlatmak istediğin her şey…"></textarea></div>
<button class="btn btn-primary" type="submit">{tr('form.send', 'Gönder', 'Send')}</button>
<p class="form-note" data-i18n="form.note">Mesajın iletişim e-postamıza ulaşsın diye bir form servisinin üzerinden iletir; sunucuda saklanmaz.</p>
<p class="form-status" data-feedback-status role="status" aria-live="polite" hidden></p>
</form>'''
# Register remaining form strings for i18n dictionaries.
tr('form.name', 'Ad (opsiyonel)', 'Name (optional)')
tr('form.namePh', 'Adın', 'Your name')
tr('form.email', 'E-posta', 'Email')
tr('form.topic', 'Konu', 'Topic')
tr('form.msg', 'Mesaj', 'Message')
tr('form.msgPh', 'Bize anlatmak istediğin her şey…', 'Anything you want to tell us…')
tr('form.send', 'Gönder', 'Send')
tr('form.note', 'Mesajın iletişim e-postamıza ulaşsın diye bir form servisinin üzerinden iletir; sunucuda saklanmaz.', 'The form sends your message to our contact email through a form service; nothing is stored on our side.')


def button(url, label, variant='primary', external=False):
    attrs = ' target="_blank" rel="noopener noreferrer"' if external else ''
    return f'<a class="btn btn-{variant}" href="{e(url)}"{attrs}>{label}</a>'


def video_card(video, home=False):
    vid, title, english, short = video
    label = tr('video.' + vid, title, english) if home else title
    watch = tr('video.watch.' + vid, "YouTube'da aç", 'Open on YouTube') if home else "YouTube'da aç"
    frame_title = title if title.startswith('OPS') else 'OPS — ' + title
    return f'''<article class="video-card{' video-short' if short else ''}">
<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/{vid}" title="{e(frame_title)}" width="{360 if short else 640}" height="{640 if short else 360}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe></div>
<div class="video-caption"><h3>{label}</h3><a href="https://www.youtube.com/watch?v={vid}" target="_blank" rel="noopener noreferrer">{watch}<span aria-hidden="true"> ↗</span></a></div></article>'''


def home():
    ops, budget = APPS['ops'], APPS['butce']
    title = 'Kutvoks — Piyasayı keşfet. Bütçeni yönet.'
    desc = 'OPS ile piyasaları ve portföyünü keşfet. Bütçe Takip ile gelir, gider, fiş ve ekstrelerini düzenle. Kutvoks Android uygulamalarını tanı.'
    COPY['tr'].update({'meta.title': title, 'meta.desc': desc})
    COPY['en'].update({'meta.title': 'Kutvoks — Explore markets. Manage your budget.', 'meta.desc': 'Explore markets and your portfolio with OPS. Organize income, expenses, receipts and statements with Bütçe Takip. Discover Kutvoks Android apps.'})
    text = head(title, desc, 'index.html') + '''<body class="home-page" data-meta-i18n>
<!-- THESIS: Two independent apps turn market research and everyday budgeting into clear choices.
OWN-WORLD: Existing Kutvoks navy/blue/orange, Space Grotesk, genuine icons and budget screenshots.
STORY: Choose a task, see the matching app, inspect complete features, open Google Play.
FIRST VIEWPORT: Large two-line benefit at left, equally sized OPS/Budget product exhibits at right; both routes visible.
FORM: Task journey, grounded candidate 5, seed a935e462; user chose equal emphasis and direct code preserving the brand.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->'''
    text += header(True) + '<main id="icerik"><section class="studio-hero"><div class="wrap hero-grid"><div class="hero-copy">'
    text += '<h1>' + tr('hero.first', 'Piyasayı keşfet.', 'Explore markets.') + '<br>' + tr('hero.second', 'Bütçeni yönet.', 'Own your budget.', cls='text-blue') + '</h1>'
    text += tr('hero.desc', 'Finansın iki farklı tarafı için, aynı özenle geliştirilen iki Android uygulaması. Kutvoks ile verilerini anlamlandır, günlük takibini kolaylaştır.', 'Two Android apps, built with the same care for two sides of your finances. Make sense of your data and simplify your everyday tracking.', 'p', 'hero-lead')
    text += '<div class="hero-actions">' + button('#uygulamalar', tr('hero.cta', 'Uygulamaları keşfet', 'Explore the apps')) + button('#nasil-calisir', tr('hero.how', 'Sana hangisi uygun?', 'Which one fits you?'), 'text') + '</div>'
    text += tr('hero.platform', 'Android için · Türkçe ve İngilizce · Google Play', 'For Android · Turkish & English · Google Play', 'p', 'platform-note')
    text += '</div><div class="hero-products">'
    text += '''<a class="product-exhibit exhibit-ops" href="ops.html"><div class="exhibit-title"><img src="images/apps/ops-icon.png" alt="" width="38" height="38"><strong>OPS</strong><span aria-hidden="true">↗</span></div><img class="hero-mascot" src="images/ops/mood/coin-happy.png" alt="OPS maskotu" width="270" height="270" fetchpriority="high">'''
    text += '<div class="exhibit-bottom">' + tr('hero.ops', 'Piyasanın büyük resmi.', 'A wider market view.', 'h2') + tr('hero.ops.sub', 'Piyasalar · Portföy · Analiz', 'Markets · Portfolio · Analysis', 'p') + '</div></a>'
    text += '''<a class="product-exhibit exhibit-budget" href="butce-takip.html"><div class="exhibit-title"><img src="images/apps/butce-icon.png" alt="" width="38" height="38"><strong>Bütçe Takip</strong><span aria-hidden="true">↗</span></div><div class="hero-budget-screen"><img src="images/butce/screen-home.png" alt="Bütçe Takip uygulamasının gerçek ana ekranı" width="1080" height="2460"></div>'''
    text += '<div class="exhibit-bottom">' + tr('hero.budget', 'Günlük hayatın hesabı.', 'Your everyday balance.', 'h2') + tr('hero.budget.sub', 'Gelir · Gider · Tasarruf', 'Income · Expenses · Savings', 'p') + '</div></a></div></div></section>'
    text += '<section class="section products-section" id="uygulamalar"><div class="wrap"><div class="section-heading">'
    text += tr('products.title', 'İhtiyacına göre seç. Ayrıntılarıyla tanı.', 'Find your fit. Get to know it.', 'h2')
    text += tr('products.desc', 'Biri piyasayı anlamana, diğeri kendi bütçeni görmene yardımcı olur.', 'One helps you explore markets. The other brings your own budget into focus.', 'p') + '</div>'
    for key, app, heading_tr, heading_en, intro_tr, intro_en, bullets in [
        ('ops', ops, 'Portföyünün ötesini gör.', 'See beyond your portfolio.', 'Piyasa takibini, sayısal analizleri ve kendi sağlayıcınla çalışan OPS asistanını aynı uygulamada keşfet.', 'Explore market tracking, quantitative tools and the OPS assistant powered by your chosen provider.', [('Piyasalar ve portföy', 'Markets & portfolio'), ('Backtest ve Monte Carlo', 'Backtesting & Monte Carlo'), ('Sesli maskot ve widget', 'Voice mascot & widget')]),
        ('butce', budget, 'Küçük kayıtlar. Daha net bir bütçe.', 'Small entries. A clearer budget.', 'Gelir/gider takibi, fiş OCR, kart ekstresi içe aktarma, tasarruf hedefleri ve 12 aylık bütçe görünümü.', 'Income and expenses, receipt OCR, card statement import, savings goals and a 12-month budget outlook.', [('Fiş ve PDF ekstre işleme', 'Receipt & PDF statement processing'), ('Takvim, raporlar ve tasarruf', 'Calendar, reports & savings'), ('Çevrimdışı bütçe asistanı', 'Offline budget assistant')])]:
        text += f'<article class="product-story story-{key}"><div class="story-identity"><img src="{app["icon"]}" alt="" width="68" height="68"><h3>{app["name"]}</h3><span>Android {app["android"]}</span></div><div class="story-body">'
        text += tr(key + '.heading', heading_tr, heading_en, 'h4') + tr(key + '.intro', intro_tr, intro_en, 'p')
        text += '<ul class="story-features">' + ''.join(tr(key + '.bullet.' + str(i), a, b, 'li') for i, (a, b) in enumerate(bullets)) + '</ul>'
        text += '<div class="story-actions">' + button(app['page'], tr(key + '.all', 'Tüm özellikleri incele', 'Explore all features')) + button(play(app), tr(key + '.play', "Google Play'de aç", 'Open in Google Play'), 'text', True) + '</div>'
        text += tr(key + '.conditions', 'Reklamlar ve analiz hakları · Harici sağlayıcı koşulları geçerli' if key == 'ops' else 'Ücretsiz temel takip · İsteğe bağlı Premium', 'Ads & analysis credits · External provider terms apply' if key == 'ops' else 'Free core tracking · Optional Premium', 'p', 'small-note') + '</div></article>'
    text += '</div></section><section class="section journey-section" id="nasil-calisir"><div class="wrap"><div class="section-heading">'
    text += tr('journey.title', 'Sen neyi takip etmek istiyorsun?', 'What would you like to track?', 'h2')
    text += tr('journey.desc', 'İki uygulama, birbirinden farklı ihtiyaçlar. Başlamak için sana uygun yolu seç.', 'Two apps for different needs. Pick a starting point that works for you.', 'p') + '</div>'
    text += '<div class="journey-controls" role="group" aria-label="Uygulama seçimi" hidden data-journey-controls><button type="button" data-journey="ops" aria-pressed="true">OPS</button><button type="button" data-journey="butce" aria-pressed="false">Bütçe Takip</button></div>'
    for key, intro_tr, intro_en in [('ops', 'Piyasalar ve yatırımlarım', 'Markets and my investments'), ('butce', 'Harcamalarım ve gelecek planlarım', 'My expenses and future plans')]:
        text += f'<div class="journey-panel" id="journey-{key}" data-journey-panel="{key}">' + tr('journey.' + key, intro_tr, intro_en, 'h3') + '<ol class="steps">'
        en_steps = [('Choose your markets', 'Search assets and build your favorites.'), ('Add your portfolio', 'Record quantities and average costs.'), ('Explore your tools', 'Try local analytics and connect an assistant provider.')] if key == 'ops' else [('Set up your budget', 'Choose people, categories and your budget period.'), ('Add your first entry', 'Enter an expense or check a scanned receipt or statement.'), ('See the bigger picture', 'Review reports, savings goals and the 12-month outlook.')]
        for i, (step, en_step) in enumerate(zip(APPS[key]['steps'], en_steps)):
            text += '<li>' + tr(f'journey.{key}.{i}.title', step['title'], en_step[0], 'h4') + tr(f'journey.{key}.{i}.text', step['text'], en_step[1], 'p') + '</li>'
        text += '</ol>' + button(APPS[key]['page'], tr('journey.' + key + '.link', APPS[key]['short'] + ' ile tanış', 'Meet ' + APPS[key]['short']), 'text') + '</div>'
    text += '</div></section><section class="section home-videos" id="videolar"><div class="wrap"><div class="section-heading heading-inline"><div>'
    text += tr('videos.title', "OPS'yi izleyerek tanı.", 'Meet OPS in motion.', 'h2') + tr('videos.desc', 'İki yeni tanıtım filmi yayında. İlk Shorts videosuyla birlikte tüm seri OPS sayfasında.', 'Two new introduction films are here. Find the full series, including the first Short, on the OPS page.', 'p') + '</div>'
    text += button('ops.html#tanitim', tr('videos.all', 'Üç videoyu da gör', 'See all three videos'), 'text') + '</div><div class="home-video-grid">' + ''.join(video_card(v, True) for v in VIDEOS[:2]) + '</div></div></section>'
    text += '<section class="section about-section" id="hakkinda"><div class="wrap about-grid"><div>' + tr('about.title', 'Günlük hayatta yer bulan uygulamalar.', 'Apps that earn a place in your day.', 'h2')
    text += tr('about.desc', 'Kutvoks, günlük finans ihtiyaçlarına odaklanan bağımsız bir Android uygulama stüdyosu. Karmaşık verileri anlaşılır kılmak ve düzenli takibi kolaylaştırmak için geliştiriyoruz.', 'Kutvoks is an independent Android app studio focused on everyday finance. We build to make complex data understandable and consistent tracking easier.', 'p') + '</div><div class="about-principles">'
    for key, title_tr, title_en, body_tr, body_en in [
        ('local', 'Yerel kayıt, açık veri akışı', 'Local records, clear data flow', 'Kayıtların cihazında tutulur. İnternet, hesap, reklam veya yapay zekâ kullanan özelliklerin bağlantılarını ürün sayfalarında açıklarız.', 'Records are stored on your device. Product pages explain the services used for connectivity, accounts, ads and AI.'),
        ('language', 'Türkçe ve İngilizce', 'Turkish and English', 'İki uygulamada da dilini seçebilirsin. Piyasa ve bütçe işlerini kendi alışkanlıklarınla takip et.', 'Choose your language in both apps and track markets or budgets in a way that suits you.'),
        ('terms', 'Özellikler kadar koşullar da net', 'Clear features and clear terms', 'Analiz hakları, ücretsiz kullanım sınırları ve Premium farklarını indirmeden önce inceleyebilirsin.', 'Check analysis credits, free usage limits and Premium differences before downloading.')]:
        text += '<div>' + tr('about.' + key + '.title', title_tr, title_en, 'h3') + tr('about.' + key + '.body', body_tr, body_en, 'p') + '</div>'
    text += '</div></div></section><section class="section contact-section" id="iletisim"><div class="wrap"><div class="contact-panel"><div class="contact-intro">'
    text += tr('contact.title', 'Birlikte daha iyiye.', 'Better, together.', 'h2')
    text += tr('contact.desc', 'Bir özellik önerin veya hata bildirimin mi var? Kullandığın uygulamayı ve sürümü belirterek, aşağıdaki formu kullanarak yaz.', 'Have a feature idea or a bug to report? Tell us which app and version you use in the form below.', 'p')
    text += f'<a class="contact-mail" href="mailto:{MAIL}"><span aria-hidden="true">✉</span><span>{MAIL}</span></a>'
    text += '<ul class="contact-points">' + ''.join(tr('contact.point.' + str(i), a, b, 'li') for i, (a, b) in enumerate([
        ('Uygulama deneyimine dair her geri bildirim', 'Any feedback about your app experience'),
        ('Hata bildirimi / çökme raporu', 'Bug reports and crash reports'),
        ('İş birliği ve özellik fikirleri', 'Collaboration and feature ideas')])) + '</ul></div>'
    text += feedback_form() + '</div></div></section></main>'
    text += footer(True) + '<script src="home-copy.js" defer></script><script src="lang.js" defer></script></body></html>'
    rendered = text.replace('><', '>\n<').replace('\n</textarea>', '</textarea>')
    (ROOT / 'index.html').write_text(rendered + '\n', encoding='utf-8')
    (ROOT / 'home-copy.js').write_text('/* Generated by scripts/build_site.py */\nwindow.KUTVOKS_COPY = ' + json.dumps(COPY, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')


def detail(key):
    app = APPS[key]
    is_ops = key == 'ops'
    text = head(app['name'] + ' — Özellikler ve Kullanım | Kutvoks', app['description'], app['page'], app['icon']) + f'<body class="product-page product-{key}">' + header()
    nav = [('genel', 'Genel bakış'), ('ozellikler', 'Tüm özellikler'), ('kullanim', 'Kullanım koşulları'), ('baslangic', 'Başlangıç'), ('tanitim', 'Videolar') if is_ops else ('ekranlar', 'Ekranlar'), ('sss', 'SSS')]
    text += '<nav class="subnav" aria-label="Sayfa bölümleri"><div class="wrap">' + ''.join(f'<a href="#{anchor}">{label}</a>' for anchor, label in nav) + '</div></nav><main id="icerik">'
    text += '<section class="product-hero" id="genel"><div class="wrap product-hero-grid"><div><a class="back-link" href="index.html#uygulamalar">← Kutvoks uygulamaları</a>'
    text += f'<div class="product-name"><img src="{app["icon"]}" alt="" width="52" height="52"><span>{app["name"]}</span></div><h1>{app["headline"]}</h1><p class="hero-lead">{app["intro"]}</p>'
    text += f'<div class="app-meta"><span>Android {app["android"]}</span><span>Türkçe / English</span><span>{"Reklam ve analiz hakları" if is_ops else "Ücretsiz + Premium"}</span></div>'
    text += '<div class="hero-actions">' + button(play(app), "Google Play'de aç", external=True) + button('#tanitim' if is_ops else '#ekranlar', 'Tanıtımları izle' if is_ops else 'Ekranları gör', 'text') + '</div>'
    text += '<p class="small-note">Cihazına uygun sürümü ve güncellemeleri Google Play’de bulabilirsin.</p></div>'
    if is_ops:
        text += '<figure class="product-hero-art ops-art"><img src="images/ops/mood/coin-happy.png" alt="OPS maskotu" width="340" height="340" fetchpriority="high"><figcaption>OPS — konuşan piyasa maskotun</figcaption></figure>'
    else:
        text += '<figure class="product-hero-art budget-art"><img src="images/butce/screen-home.png" alt="Bütçe Takip ana ekranı: gelir, gider ve tasarruf özeti" width="1080" height="2460" fetchpriority="high"><figcaption>Uygulamadan gerçek ekran görüntüsü</figcaption></figure>'
    text += '</div></section><section class="section catalog-section" id="ozellikler"><div class="wrap"><div class="section-heading"><h2>' + ('Takipten analize, OPS’nin tüm araçları.' if is_ops else 'İlk kayıttan gelecek planlarına, tüm özellikler.') + '</h2><p>İhtiyacın olan başlığa geç veya bütün özellikleri aşağıda incele.</p></div>'
    text += '<nav class="feature-index" aria-label="Özellik başlıkları">' + ''.join(f'<a href="#{g["id"]}">{g["title"]}</a>' for g in app['groups']) + '</nav><div class="feature-catalog">'
    for group in app['groups']:
        text += f'<article class="catalog-entry" id="{group["id"]}"><h3>{group["title"]}</h3><div><p>{group["text"]}</p><ul>' + ''.join(f'<li>{item}</li>' for item in group['items']) + '</ul>'
        if group.get('note'):
            text += f'<p class="feature-note">{group["note"]}</p>'
        text += '</div></article>'
    text += '</div></div></section>'
    text += '<section class="section usage-section" id="kullanim"><div class="wrap"><div class="section-heading"><h2>' + ('Analiz hakları nasıl çalışır?' if is_ops else 'Ücretsiz ve Premium, açıkça yan yana.') + '</h2><p>'
    text += ('Piyasa ve portföy takibinin yanında bazı analizler hak kullanır. Harici sağlayıcıların ücretleri bu haklardan ayrıdır.' if is_ops else 'Temel manuel takip ücretsizdir. Tarama, asistan ve dışa aktarma sınırlarını indirmeden önce gör.') + '</p></div><div class="table-scroll" role="region" aria-label="Kullanım koşulları tablosu" tabindex="0"><table class="comparison-table">'
    if is_ops:
        rows = [('Karşılaştırma · Değerleme · Backtest', 'Her çalıştırma 1 hak'), ('Modelleme · Monte Carlo · Optimizasyon · Haber Etkisi', 'Her çalıştırma 2 hak'), ('Başlangıç / kapasite', '20 hak'), ('Haklar sıfırlandığında', '2 saat sonra yenilenme'), ('Ödüllü reklam', 'Mevcut hakları 20’ye tamamlama'), ('Yapay zekâ ve opsiyonel veri sağlayıcıları', 'Sağlayıcının ayrı anahtar, kota ve ücret koşulları')]
        text += '<caption>OPS analiz hakları</caption><thead><tr><th scope="col">İşlem</th><th scope="col">Koşul</th></tr></thead><tbody>' + ''.join(f'<tr><th scope="row">{a}</th><td>{b}</td></tr>' for a,b in rows)
    else:
        rows = [('Temel manuel takip', 'Var', 'Var'), ('Fiş tarama', '5 / ay', 'Sınırsız'), ('PDF ekstre işleme', '1 / ay', 'Sınırsız'), ('Bütçe asistanı', '3 soru / gün', 'Sınırsız'), ('CSV gider çıktısı', 'Yok', 'Var'), ('Reklamlar', 'Var', 'Yok')]
        text += '<caption>Bütçe Takip özellik ve limit karşılaştırması</caption><thead><tr><th scope="col">Özellik</th><th scope="col">Ücretsiz</th><th scope="col">Premium</th></tr></thead><tbody>' + ''.join(f'<tr><th scope="row">{a}</th><td>{b}</td><td>{c}</td></tr>' for a,b,c in rows)
    text += '</tbody></table></div><p class="small-note">' + ('Analiz sonuçları veri ve varsayımlara bağlıdır; yatırım tavsiyesi veya gelecekteki sonuç garantisi değildir.' if is_ops else 'Fiş limitinde ödüllü reklamla +1 tarama kazanılabilir. Aylık/yıllık Premium fiyatları ve abonelik koşulları Google Play satın alma ekranında gösterilir.') + '</p></div></section>'
    text += '<section class="section" id="baslangic"><div class="wrap"><div class="section-heading"><h2>Üç adımda başla.</h2></div><ol class="steps">' + ''.join(f'<li><h3>{s["title"]}</h3><p>{s["text"]}</p></li>' for s in app['steps']) + '</ol></div></section>'
    if is_ops:
        text += '<section class="section videos-section" id="tanitim"><div class="wrap"><div class="section-heading"><h2>OPS tanıtım serisi.</h2><p>İki yeni tanıtım filmi ve projenin ilk Shorts videosu. Oynatıcı yüklenmezse her videonun altındaki YouTube bağlantısını kullanabilirsin.</p></div><div class="video-gallery">' + ''.join(video_card(v) for v in VIDEOS) + '</div><p class="small-note">Videolar YouTube tarafından sunulur. Otomatik oynatma kullanılmaz.</p></div></section>'
        text += '<section class="section mascot-section" id="ops-maskot"><div class="wrap"><div class="section-heading"><h2>OPS’nin bir karakteri var.</h2><p>Sesli sohbetten ana ekran widget’ına, OPS günlük takibine hareketleriyle eşlik eder.</p></div><div class="moods">'
        for mood, label in [('idle','Sakin'),('happy','Mutlu'),('thinking','Düşünüyor'),('alert','Alarmda'),('sleeping','Uyuyor'),('listening','Dinliyor')]:
            text += f'<figure><img src="images/ops/mood/coin-{mood}.png" alt="OPS maskotu: {label}" width="128" height="128" loading="lazy"><figcaption>{label}</figcaption></figure>'
        text += '</div></div></section>'
    else:
        text += '<section class="section" id="ekranlar"><div class="wrap"><div class="section-heading"><h2>Kendi ekranlarından tanı.</h2><p>Gelir, gider ve birikim özeti; gün gün hareketlerini görebileceğin takvim.</p></div><div class="screenshot-gallery">'
        for image, label in [('screen-home','Ana ekran · gelir, gider ve tasarruf'),('screen-calendar','Takvim · günlük hareketler')]:
            text += f'<figure><a href="images/butce/{image}.png" target="_blank" rel="noopener noreferrer"><img src="images/butce/{image}.png" alt="Bütçe Takip — {label}" width="1080" height="2460" loading="lazy"></a><figcaption>{label} · Tam boyut için aç</figcaption></figure>'
        text += '</div></div></section>'
    text += f'<section class="section privacy-section"><div class="wrap privacy-grid"><h2>Yerel kayıtlar.<br>Açık veri akışı.</h2><div><p>{app["privacy"]}</p>' + button(app['privacyPage'], 'Gizlilik politikasını oku', 'text') + '</div></div></section>'
    text += '<section class="section" id="sss"><div class="wrap"><div class="section-heading"><h2>Aklındaki sorular.</h2></div><div class="faq">' + ''.join(f'<details><summary>{q}</summary><p>{a}</p></details>' for q,a in app['faq']) + '</div></div></section>'
    text += f'<section class="section contact-section"><div class="wrap"><div class="contact-panel"><div class="contact-intro"><h2>{app["short"]} hakkında konuşalım.</h2><p>Hata bildirirken uygulama sürümünü, Android sürümünü ve sorunu tekrar etme adımlarını yazabilirsin. Özel finansal bilgilerini paylaşmana gerek yok.</p><a class="contact-mail" href="mailto:{MAIL}"><span aria-hidden="true">✉</span><span>{MAIL}</span></a></div>' + feedback_form() + '</div></div></section></main>'
    text += footer() + '<script src="lang.js" defer></script></body></html>'
    (ROOT / app['page']).write_text(text.replace('><', '>\n<').replace('\n</textarea>', '</textarea>') + '\n', encoding='utf-8')


if __name__ == '__main__':
    home()
    for key in APPS:
        detail(key)
    print('Generated index.html, ops.html, butce-takip.html and home-copy.js')
