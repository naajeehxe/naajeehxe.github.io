/* main.js — renders NEWS and PUBS from data.js. You normally don't need to edit this. */
(function () {
  "use strict";

  const esc = (s) => String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* ---------- News ---------- */
  const NEWS_VISIBLE = 5;
  const newsList = document.getElementById("news-list");
  const newsToggle = document.getElementById("news-toggle");

  function renderNews(showAll) {
    const items = showAll ? NEWS : NEWS.slice(0, NEWS_VISIBLE);
    newsList.innerHTML = items.map((n) =>
      `<li><span class="date">${esc(n.date)}</span><span class="text">${n.text}</span></li>`
    ).join("");
    if (NEWS.length > NEWS_VISIBLE) {
      newsToggle.hidden = false;
      newsToggle.textContent = showAll ? "Show less" : `Show all (${NEWS.length})`;
      newsToggle.dataset.open = showAll ? "1" : "0";
    }
  }
  if (newsList) {
    renderNews(false);
    newsToggle && newsToggle.addEventListener("click", () => renderNews(newsToggle.dataset.open !== "1"));
  }

  /* ---------- Publications ---------- */
  const LINK_LABELS = {
    paper: "Paper", code: "Code", project: "Project", video: "Video",
    poster: "Poster", slides: "Slides", supp: "Supp."
  };

  function authorHtml(name) {
    const star = name.endsWith("*");
    const clean = star ? name.slice(0, -1) : name;
    const me = clean === ME;
    return `<span class="${me ? "me" : ""}">${esc(clean)}${star ? "<sup>*</sup>" : ""}</span>`;
  }

  function pubHtml(p) {
    const links = Object.keys(LINK_LABELS)
      .filter((k) => p.links && p.links[k])
      .map((k) => `<a class="chip" href="${esc(p.links[k])}" target="_blank" rel="noopener">${LINK_LABELS[k]}</a>`)
      .join("");
    const thumb = `assets/pubs/${esc(p.id)}.png`;
    return `
      <li class="pub">
        <div class="thumb placeholder">
          <img src="${thumb}" alt=""
               onload="this.parentNode.classList.remove('placeholder');"
               onerror="this.remove();">
          <span class="ph-venue" aria-hidden="true">${esc(p.venue)}<br><small>${esc(p.year)}</small></span>
        </div>
        <div class="pub-body">
          <span class="badge">${esc(p.venue)} ${esc(p.year)}</span>
          <h3 class="pub-title">${p.links && p.links.paper
            ? `<a href="${esc(p.links.paper)}" target="_blank" rel="noopener">${esc(p.title)}</a>`
            : esc(p.title)}</h3>
          <p class="authors">${p.authors.map(authorHtml).join(", ")}</p>
          <p class="venue">${esc(p.venueFull)}${p.note ? ` <span class="muted">· ${esc(p.note)}</span>` : ""}</p>
          <div class="chips">${links}</div>
        </div>
      </li>`;
  }

  const pubList = document.getElementById("pub-list");
  if (pubList) pubList.innerHTML = PUBS.map(pubHtml).join("");

  /* ---------- Misc ---------- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Highlight the nav link of the section in view
  const links = Array.from(document.querySelectorAll(".nav a"));
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => io.observe(s));
  }
})();
