/* ============================================================
   KUTVOKS — i18n + scroll experience
   - TR/EN language toggle (header), stored in localStorage
   - Scroll progress bar
   - Header elevation on scroll
   - Reveal-on-scroll (IntersectionObserver)
   - Subtle parallax on hero visual
   ============================================================ */
(function () {
  "use strict";

  var T = {
    tr: {
      "brand.sub": "app studio",
      "brand.sub2": "app studio",
      "nav.apps": "Uygulamalar",
      "nav.about": "Hakkında",
      "nav.support": "Destek",
      "hero.eyebrow": "Google Play Geliştirici Hesabı",
      "hero.h1": "Piyasa gözünü, bütçeni <em>tek yerde.</em>",
      "hero.lead": "Kutvoks, günlük finansta işe yarayan Android uygulamaları geliştirir. Piyasaları tek ekranda izle, giderlerini dakikalarca kaydet.",
      "hero.cta1": "Uygulamaları Gör",
      "hero.cta2": "Play Store'da Kutvoks",
      "hero.tile": "Bağımsız bir geliştirici stüdyosu. Uygulamalar cihazda çalışır, veri cihazda kalır.",
      "hero.chip1": "BIST · Kripto · Döviz · Yapay zekâ asistanı",
      "hero.chip2": "Gider · Fiş tarama · Rapor · Projeksiyon",
      "mq.ondevice": "Veri cihazında kalır",
      "mq.ondevice2": "Veri cihazında kalır",
      "apps.title": "Yayındaki uygulamalar",
      "apps.desc": "Google Play'de ücretsiz olarak yayınlanır; reklamlar AdMob üzerinden gösterilir.",
      "ops.tagline": "BIST, kripto, döviz ve altın tek ekranda",
      "ops.video": "Tanıtımı izle",
      "ops.desc": "Portföyünü kur, kâr/zararını anlık izle, fiyat alarmları kur ve OPS yapay zekâ asistanıyla piyasa sorularını sor.",
      "ops.f1": "BIST hisseleri, ABD borsaları, kripto, döviz, altın ve emtia akışı",
      "ops.f2": "OPS yapay zekâ asistanı — kendi API anahtarınla",
      "ops.f3": "Fiyat alarmları, favoriler ve finansal RSS haberleri",
      "butce.name": "Bütçe Takip",
      "butce.name2": "Bütçe Takip",
      "butce.tagline": "Giderleri dakikalarca kaydet, aile bütceni yönet",
      "butce.desc": "Hızlı gider girişi, fiş tarama, trend grafikleri, PDF raporlar ve yapay zekâ destekli bütçe projeksiyonu.",
      "butce.f1": "Kişi, kategori ve tekrarlayan gider takibi",
      "butce.f2": "Kamera ile fiş tarama, PDF/Excel rapor çıkışı",
      "butce.f3": "Ay sonu tahminleri ve birikim projeksiyonu",
      "live": "Google Play'de yayında",
      "live2": "Google Play'de yayında",
      "dl": "İndir",
      "dl2": "İndir",
      "more": "Detaylar",
      "more2": "Detaylar",
      "about.title": "Uygulamalara nasıl inanıyoruz",
      "about.desc": "Takip ettiğin şey senindir. Kutvoks uygulamaları hesap açtırmadan çalışır ve verini cihazında saklar.",
      "about.h1": "Veri cihazında kalır",
      "about.p1": "Piyasa verisi dışına çıkmaz; portföyler, giderler ve raporlar cihazındaki veritabanında tutulur. Sunucu hesabı yoktur.",
      "about.h2": "Türkçe öncelik",
      "about.p2": "Arayüzler Türkçe tasarlanır, İngilizce desteği ikinci dildir. BIST haber akışı ve TL birimleri yerleşiktir.",
      "about.h3": "Takip etmek kolay olmalı",
      "about.p3": "Bir gider kaydetmek için dokuz alan doldurmak gerekmez. Hızlı giriş, fiş okutma ve akıllı kategoriler standart özelliktir.",
      "contact.title": "Bir sorunuz mu var?",
      "contact.desc": "Geri bildirim, hata bildirimi veya iş birliği için bize yazın — genellikle bir gün içinde yanıtlarız.",
      "footer.tagline": "Android uygulamaları: Build · Innovate · Publish",
      "footer.apps": "Uygulamalar",
      "footer.info": "Bilgiler",
      "footer.contact": "İletişim",
      "footer.privacy": "Gizlilik Politikası",
      "footer.privacy2": "Bütçe Takip Gizlilik",
      "footer.rights": "© 2026 Kutvoks. Tüm hakları saklıdır.",
      "footer.disclaimer": "Uygulamalar yatırım tavsiyesi sunmaz.",
      "meta.title": "Kutvoks — Android Uygulama Geliştiricisi",
      "meta.desc": "Kutvoks, Android uygulamaları geliştiren bir bağımsız geliştirici hesabıdır. OPS: Financial Support: BIST, kripto, döviz ve altın takibi. Bütçe Takip: pratik gider ve bütçe yönetimi."
    },
    en: {
      "brand.sub": "app studio",
      "brand.sub2": "app studio",
      "nav.apps": "Apps",
      "nav.about": "About",
      "nav.support": "Support",
      "hero.eyebrow": "Google Play Developer Account",
      "hero.h1": "Markets and budget, <em>one screen.</em>",
      "hero.lead": "Kutvoks builds Android apps that earn their place in your daily finances. Track the markets on a single screen and log expenses in minutes.",
      "hero.cta1": "Explore the Apps",
      "hero.cta2": "Kutvoks on Play Store",
      "hero.tile": "An independent developer studio. Apps run on-device — your data stays on-device.",
      "hero.chip1": "BIST · Crypto · FX · AI assistant",
      "hero.chip2": "Expenses · Receipt scan · Reports · Projections",
      "mq.ondevice": "Data stays on-device",
      "mq.ondevice2": "Data stays on-device",
      "apps.title": "Live on Google Play",
      "apps.desc": "Both apps are free on Google Play; ads are served through AdMob.",
      "ops.tagline": "BIST, crypto, FX and gold on one screen",
      "ops.video": "Watch the video",
      "ops.desc": "Build a portfolio, watch profit and loss in real time, set price alerts, and ask the OPS AI assistant about the markets.",
      "ops.f1": "BIST stocks, US markets, crypto, FX, gold and commodity streams",
      "ops.f2": "OPS AI assistant — powered by your own API key",
      "ops.f3": "Price alerts, favorites and finance RSS news",
      "butce.name": "Bütçe Takip",
      "butce.name2": "Bütçe Takip",
      "butce.tagline": "Log expenses in minutes, own your family budget",
      "butce.desc": "Fast expense entry, receipt scanning, trend charts, PDF reports and AI-powered budget projections.",
      "butce.f1": "People, categories and recurring expense tracking",
      "butce.f2": "Scan receipts with the camera, export to PDF/Excel",
      "butce.f3": "Month-end forecasts and savings projections",
      "live": "Live on Google Play",
      "live2": "Live on Google Play",
      "dl": "Get it",
      "dl2": "Get it",
      "more": "Details",
      "more2": "Details",
      "about.title": "How we think about apps",
      "about.desc": "What you track belongs to you. Kutvoks apps work without any account and keep your data on your device.",
      "about.h1": "Data stays on your device",
      "about.p1": "Nothing leaves your device except market data; portfolios, expenses and reports live in the database on your device. No server accounts.",
      "about.h2": "Turkish first",
      "about.p2": "Interfaces are designed in Turkish with English as the second language. BIST news feeds and TRY units are built in.",
      "about.h3": "Tracking should be easy",
      "about.p3": "Logging an expense shouldn't take nine fields. Quick entry, receipt scanning and smart categories come as standard.",
      "contact.title": "Have a question?",
      "contact.desc": "For feedback, bug reports or collaboration, drop us a line — we usually reply within a day.",
      "footer.tagline": "Android apps: Build · Innovate · Publish",
      "footer.apps": "Apps",
      "footer.info": "Resources",
      "footer.contact": "Contact",
      "footer.privacy": "Privacy Policy",
      "footer.privacy2": "Budget Tracker Privacy",
      "footer.rights": "© 2026 Kutvoks. All rights reserved.",
      "footer.disclaimer": "The apps do not provide investment advice.",
      "meta.title": "Kutvoks — Android App Developer",
      "meta.desc": "Kutvoks is an independent Android developer account. OPS: Financial Support: BIST, crypto, FX and gold tracking. Bütçe Takip: practical expense and budget management."
    }
  };

  var STORAGE_KEY = "kutvoks-lang";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- i18n ---------------- */
  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "tr" || saved === "en") return saved;
    } catch (e) { /* storage blocked */ }
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "tr";
    return String(nav).toLowerCase().indexOf("en") === 0 ? "en" : "tr";
  }

  var current = detectLang();

  function applyLang(lang) {
    var dict = T[lang] || T.tr;
    current = lang;
    document.documentElement.lang = lang;

    var els = document.querySelectorAll("[data-i18n], [data-i18n-html]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute("data-i18n") || el.getAttribute("data-i18n-html");
      if (!dict[key]) continue;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }

    if (document.body.hasAttribute("data-meta-i18n")) {
      var title = document.querySelector("title");
      if (title && dict["meta.title"]) title.textContent = dict["meta.title"];
      var desc = document.querySelector('meta[name="description"]');
      if (desc && dict["meta.desc"]) desc.setAttribute("content", dict["meta.desc"]);
      var ogd = document.querySelector('meta[property="og:description"]');
      if (ogd && dict["meta.desc"]) ogd.setAttribute("content", dict["meta.desc"]);
      var ogt = document.querySelector('meta[property="og:title"]');
      if (ogt && dict["meta.title"]) ogt.setAttribute("content", dict["meta.title"]);
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    updateToggle(lang);
  }

  function updateToggle(lang) {
    var opts = document.querySelectorAll(".lang-opt");
    for (var i = 0; i < opts.length; i++) {
      var on = opts[i].getAttribute("data-lang") === lang;
      opts[i].classList.toggle("active", on);
      opts[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
  }

  var toggle = document.querySelector(".lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", function (e) {
      var btn = e.target.closest(".lang-opt");
      if (btn) {
        var lang = btn.getAttribute("data-lang");
        if (lang !== current) applyLang(lang);
      }
    });
  }

  /* ---------------- scroll experience ---------------- */
  function initScroll() {
    var header = document.getElementById("siteHeader");
    var bar = document.getElementById("scrollProgressBar");

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("scrolled", y > 8);

      var doc = document.documentElement;
      var max = (doc.scrollHeight - window.innerHeight) || 1;
      var p = Math.min(Math.max(y / max, 0), 1);
      if (bar) {
        bar.style.width = (p * 100).toFixed(2) + "%";
        bar.classList.toggle("done", p >= 0.999);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add("in");
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  function initParallax() {
    if (reduceMotion) return;
    var els = document.querySelectorAll("[data-parallax]");
    if (!els.length) return;
    var ticking = false;

    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY || window.pageYOffset;
        if (y < window.innerHeight * 1.2) {
          var off = y * -0.06;
          for (var i = 0; i < els.length; i++) {
            els[i].style.transform = "translate3d(0, " + off.toFixed(1) + "px, 0)";
          }
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------------- video slot: promo player with graceful fallback ---------------- */
  function initVideoSlots() {
    var slots = document.querySelectorAll(".vslot[data-video]");
    for (var i = 0; i < slots.length; i++) {
      (function (slot) {
        var src = slot.getAttribute("data-video");
        if (!src) return;
        if (!window.fetch || !window.location.protocol || window.location.protocol === "file:") return;

        fetch(src, { method: "HEAD" }).then(function (res) {
          if (!res.ok) throw new Error("no-video");
          var v = document.createElement("video");
          v.muted = true;
          v.loop = true;
          v.playsInline = true;
          v.setAttribute("playsinline", "");
          v.controls = true;
          v.setAttribute("aria-label", "Tanıtım videosu");
          var s = document.createElement("source");
          s.src = src;
          s.type = "video/mp4";
          v.appendChild(s);
          v.addEventListener("loadeddata", function () {
            slot.classList.add("has-video");
            var p = v.play();
            if (p && p.catch) p.catch(function () { /* autoplay blocked */ });
          });
          slot.appendChild(v);
        }).catch(function () { /* no video file yet — animated preview stays */ });
      })(slots[i]);
    }
  }

  /* ---------------- subnav scrollspy ---------------- */
  function initSpy() {
    var links = document.querySelectorAll(".subnav a[href^='#']");
    if (!links.length) return;
    var map = {};
    var sections = [];
    for (var i = 0; i < links.length; i++) {
      var anchor = links[i].getAttribute("href").slice(1);
      var sec = document.getElementById(anchor);
      if (sec) { map[anchor] = links[i]; sections.push(sec); }
    }
    if (!sections.length || !("IntersectionObserver" in window)) return;

    function setActive(id) {
      for (var k in map) {
        map[k].classList.toggle("active", k === id);
      }
    }
    var io = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          setActive(entries[j].target.id);
          break;
        }
      }
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
    for (var m = 0; m < sections.length; m++) io.observe(sections[m]);
    setActive(links[0].getAttribute("href").slice(1));
  }

  function init() {
    applyLang(current);
    initScroll();
    initReveal();
    initParallax();
    initVideoSlots();
    initSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
