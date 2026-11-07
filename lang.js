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
