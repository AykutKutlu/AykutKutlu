/* Progressive enhancement: static content remains readable without JavaScript. */
(function () {
  "use strict";
  var translations = window.KUTVOKS_COPY;
  var storageKey = "kutvoks-lang";
  function applyLanguage(language) {
    if (!translations || !translations[language]) return;
    var dict = translations[language];
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = dict[node.getAttribute("data-i18n")];
      if (value !== undefined) node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (node) {
      var value = dict[node.getAttribute("data-i18n-ph")];
      if (value !== undefined) node.placeholder = value;
    });
    document.documentElement.lang = language;
    if (dict["meta.title"]) document.title = dict["meta.title"];
    ["meta[name='description']", "meta[property='og:description']"].forEach(function (selector) {
      var node = document.querySelector(selector);
      if (node && dict["meta.desc"]) node.setAttribute("content", dict["meta.desc"]);
    });
    var ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle && dict["meta.title"]) ogTitle.setAttribute("content", dict["meta.title"]);
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      var active = button.getAttribute("data-lang") === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem(storageKey, language); } catch (error) { /* Optional preference. */ }
  }
  if (translations) {
    var language = "tr";
    try { language = localStorage.getItem(storageKey) || language; } catch (error) { /* Storage may be blocked. */ }
    if (language !== "tr" && language !== "en") language = "tr";
    applyLanguage(language);
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.addEventListener("click", function () { applyLanguage(button.getAttribute("data-lang")); });
    });
  }

  /* ---------- Feedback form (formsubmit.co → MAIL) ---------- */
  var FORM_MESSAGES = {
    tr: {
      sending: "Gönderiliyor…",
      success: "Mesajın ulaştı — teşekkürler! Genellikle bir gün içinde yanıt veririz.",
      pending: "Geri bildirim kanalın şu an etkinleştirme aşamasında. Bu sürede mesajını doğrudan e-postayla paylaşabilirsin:",
      fail: "Mesajını otomatik gönderemedik. Aşağıdaki bağlantıdan doğrudan e-posta ile iletebilirsin:",
      invalid: "Lütfen gerekli alanları (e-posta, konu ve mesaj) kontrol et.",
      subject: "Kutvoks web geri bildirimi"
    },
    en: {
      sending: "Sending…",
      success: "Feedback received — thank you! We usually reply within a day.",
      pending: "This feedback channel is being activated right now. Meanwhile, share your message directly by email:",
      fail: "We couldn't send your message automatically. You can email us directly here:",
      invalid: "Please check the required fields (email, topic and message).",
      subject: "Kutvoks web feedback"
    }
  };

  function feedbackMessages() {
    var lang = "tr";
    try { lang = localStorage.getItem("kutvoks-lang") || "tr"; } catch (error) { /* Optional preference. */ }
    if (lang !== "en") lang = "tr";
    return FORM_MESSAGES[lang];
  }

  var feedbackForm = document.querySelector("form[data-feedback]");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var messages = feedbackMessages();
      var status = feedbackForm.querySelector("[data-feedback-status]");
      var submit = feedbackForm.querySelector("button[type='submit']");
      var show = function (text, cls) {
        if (!status) return;
        status.hidden = false;
        status.className = "form-status " + (cls || "");
        status.textContent = text;
      };
      var showWithMail = function (text, cls, href) {
        if (!status) return;
        status.hidden = false;
        status.className = "form-status " + (cls || "");
        status.textContent = "";
        var label = document.createElement("span");
        label.textContent = text + " ";
        status.appendChild(label);
        var link = document.createElement("a");
        link.href = href || "mailto:aykutkutlu08@gmail.com";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "aykutkutlu08@gmail.com";
        status.appendChild(link);
      };
      var prefilledMail = function (data, messages) {
        var email = String(data.get("email") || "");
        var body = String(data.get("message") || "");
        var nameLabel = String(data.get("name") || "");
        var topic = String(data.get("topic") || "");
        return "mailto:aykutkutlu08@gmail.com?subject=" +
          encodeURIComponent(messages.subject + (topic ? " — " + topic : "")) +
          "&body=" + encodeURIComponent(body + (email ? "\n\n(E-posta: " + email + (nameLabel ? " · " + nameLabel : "") + ")" : "") + "\n");
      };
      if (!feedbackForm.checkValidity()) {
        show(messages.invalid, "is-err");
        feedbackForm.reportValidity();
        return;
      }
      var topicSelect = feedbackForm.querySelector("#fbTopic");
      var data = new FormData(feedbackForm);
      if (topicSelect && topicSelect.selectedIndex > 0) {
        data.set("topic", topicSelect.options[topicSelect.selectedIndex].textContent.trim() || topicSelect.value);
      }
      data.set("_origin", "web · " + (location && location.pathname ? location.pathname : "/"));
      show(messages.sending);
      if (submit) submit.disabled = true;
      fetch(feedbackForm.action, { method: "POST", body: data, headers: { "Accept": "application/json" } })
        .then(function (response) {
          if (!response.ok) return Promise.reject(new Error("HTTP " + response.status));
          return response.json();
        })
        .then(function (json) {
          if (json && String(json.success) === "true") {
            show(messages.success, "is-ok");
            feedbackForm.reset();
            return;
          }
          var serverMessage = (json && json.message) || "";
          if (/activat/i.test(serverMessage)) {
            showWithMail(messages.pending, "is-ok", prefilledMail(data, messages));
            feedbackForm.reset();
            return;
          }
          throw new Error("form-error");
        })
        .catch(function () {
          showWithMail(messages.fail, "is-err", prefilledMail(data, messages));
        })
        .finally(function () {
          if (submit) submit.disabled = false;
        });
    });
  }
  var controls = document.querySelector("[data-journey-controls]");
  if (controls) {
    var buttons = controls.querySelectorAll("[data-journey]");
    var panels = document.querySelectorAll("[data-journey-panel]");
    function selectJourney(id) {
      buttons.forEach(function (button) { button.setAttribute("aria-pressed", String(button.getAttribute("data-journey") === id)); });
      panels.forEach(function (panel) { panel.hidden = panel.getAttribute("data-journey-panel") !== id; });
    }
    buttons.forEach(function (button) {
      button.addEventListener("click", function () { selectJourney(button.getAttribute("data-journey")); });
      button.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        var next = buttons[0] === button ? buttons[1] : buttons[0];
        next.focus();
        selectJourney(next.getAttribute("data-journey"));
      });
    });
    controls.hidden = false;
    selectJourney("ops");
  }
  var links = document.querySelectorAll(".subnav a[href^='#']");
  if (links.length && "IntersectionObserver" in window) {
    var sections = [];
    links.forEach(function (link) {
      var section = document.getElementById(link.getAttribute("href").slice(1));
      if (section) sections.push(section);
    });
    function highlight(id) {
      links.forEach(function (link) {
        var active = link.getAttribute("href") === "#" + id;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) highlight(entry.target.id); });
    }, { rootMargin: "-22% 0px -60% 0px", threshold: 0 });
    sections.forEach(function (section) { observer.observe(section); });
    if (sections.length) highlight(sections[0].id);
  }
})();
