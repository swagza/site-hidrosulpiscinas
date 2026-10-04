/* =========================================================
   Hidrosul Piscinas — Interações
   Os dados das unidades e depoimentos ficam em js/data.js
   ========================================================= */

const WA_MSG = "Olá! Vim pelo site da Hidrosul Piscinas e gostaria de mais informações.";
const waLink = (num, msg = WA_MSG) => `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
const mapEmbed = (u) => `https://www.google.com/maps?q=${u.lat},${u.lng}&z=16&output=embed`;
const fullAddress = (u) => `${u.endereco}, ${u.cidade} – ${u.estado}${u.cep ? ", " + u.cep : ""}`;
const icon = (id) => `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${id}"/></svg>`;

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Seletor rápido ---------- */
  document.getElementById("quickUnits").innerHTML = UNITS.map((u) =>
    `<a class="qunit" href="#unidade-${u.id}" data-unit="${u.id}">${u.nome} <small>${u.bairro}</small></a>`).join("");

  /* ---------- Cards das unidades ---------- */
  document.getElementById("unitsGrid").innerHTML = UNITS.map((u) => `
    <article class="unit reveal" id="unidade-${u.id}">
      <div class="unit__head">
        ${u.foto ? `<img src="${u.foto}" alt="Hidrosul Piscinas — ${u.nome}" loading="lazy">` : ""}
        <span class="unit__num">${u.numero}</span>
        <span class="unit__label">Unidade ${u.numero}</span>
        <h3>${u.nome.replace("Unidade ", "")}</h3>
      </div>
      <div class="unit__body">
        <div class="unit__row">${icon("i-pin")}<div><strong>Endereço</strong><span>${u.endereco}<br>${u.cidade} – ${u.estado}${u.cep ? " · CEP " + u.cep : ""}</span></div></div>
        <div class="unit__row">${icon("i-phone")}<div><strong>Telefone</strong><a href="tel:${u.telLink}">${u.telefone}</a></div></div>
        <div class="unit__row">${icon("i-wa")}<div><strong>WhatsApp</strong><a href="${waLink(u.whatsapp)}" target="_blank" rel="noopener">${u.whatsappExibicao}</a></div></div>
        ${u.email ? `<div class="unit__row">${icon("i-mail")}<div><strong>E-mail</strong><a href="mailto:${u.email}">${u.email}</a></div></div>` : ""}
        <div class="unit__row">${icon("i-clock")}<div><strong>Horário</strong><span>${u.horario.length ? u.horario.join("<br>") : "Consulte pelo WhatsApp"}</span></div></div>
        <div class="unit__row">${icon("i-map")}<div><strong>Região atendida</strong><span>${u.regiao}${u.extras ? "<br>" + u.extras : ""}</span></div></div>
      </div>
      <div class="unit__actions">
        <a class="uact uact--wa" href="${waLink(u.whatsapp)}" target="_blank" rel="noopener">${icon("i-wa")} WhatsApp</a>
        <a class="uact" href="${u.mapsLink}" target="_blank" rel="noopener">${icon("i-route")} Ver localização</a>
        <a class="uact" href="tel:${u.telLink}">${icon("i-phone")} Ligar</a>
        ${u.email ? `<a class="uact" href="mailto:${u.email}">${icon("i-mail")} E-mail</a>` : ""}
        <button class="uact" type="button" data-map="${u.id}">${icon("i-map")} Ver no mapa</button>
      </div>
    </article>`).join("");

  /* ---------- Mapa com abas ---------- */
  const frame = document.getElementById("mapFrame");
  const tabs = document.getElementById("mapTabs");
  tabs.innerHTML = UNITS.map((u, i) =>
    `<button class="map__tab${i === 0 ? " is-active" : ""}" role="tab" data-map="${u.id}"><span>${u.numero}</span>${u.nome.replace("Unidade ", "")}</button>`).join("");
  const showOnMap = (id, scroll) => {
    const u = UNITS.find((x) => x.id === id);
    frame.src = mapEmbed(u);
    frame.title = `Mapa — Hidrosul Piscinas ${u.nome}: ${fullAddress(u)}`;
    tabs.querySelectorAll(".map__tab").forEach((t) => t.classList.toggle("is-active", t.dataset.map === id));
    document.querySelectorAll(".unit").forEach((c) => c.classList.toggle("is-active", c.id === `unidade-${id}`));
    if (scroll) document.querySelector(".map").scrollIntoView({ behavior: "smooth", block: "center" });
  };
  showOnMap(UNITS[0].id);
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-map]");
    if (b) showOnMap(b.dataset.map, !b.classList.contains("map__tab"));
  });

  /* ---------- Depoimentos ---------- */
  const tWrap = document.getElementById("testimonials");
  const ini = (n) => n.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
  const stars = `<div class="quote__stars" aria-label="5 estrelas">${icon("i-star").repeat(5)}</div>`;
  if (TESTIMONIALS.length) {
    tWrap.innerHTML = TESTIMONIALS.map((t) => `
      <blockquote class="quote reveal">
        ${stars}
        <p>“${t.texto}”</p>
        <footer><span class="quote__avatar">${ini(t.nome)}</span>
          <div><strong>${t.nome}</strong><span>${icon("i-google")} Google · ${t.unidade}</span></div></footer>
      </blockquote>`).join("");
  } else {
    document.getElementById("depoimentos").hidden = true;
  }

  /* ---------- Formulário: unidades ---------- */
  document.getElementById("formUnits").innerHTML = UNITS.map((u, i) => `
    <label class="uopt"><input type="radio" name="unidade" value="${u.id}" ${i === 0 ? "checked" : ""}>
      <span>${u.nome.replace("Unidade ", "")}<small>${u.whatsappExibicao}</small></span></label>`).join("");

  /* ---------- Rodapé: unidades ---------- */
  document.getElementById("footerUnits").innerHTML = UNITS.map((u) => `
    <div class="funit">
      <h4><span>${u.numero}</span> ${u.nome}</h4>
      <p>${fullAddress(u)}</p>
      <p><a href="tel:${u.telLink}">Tel.: ${u.telefone}</a></p>
      <p><a href="${waLink(u.whatsapp)}" target="_blank" rel="noopener">WhatsApp: ${u.whatsappExibicao}</a></p>
      ${u.email ? `<p><a href="mailto:${u.email}">${u.email}</a></p>` : ""}
      ${u.horario.length ? `<p>${u.horario.join(" · ")}</p>` : ""}
      <p><a href="${u.mapsLink}" target="_blank" rel="noopener">Ver no Google Maps →</a></p>
    </div>`).join("");

  /* ---------- WhatsApp flutuante ---------- */
  const waBtn = document.getElementById("waBtn");
  const waMenu = document.getElementById("waMenu");
  document.getElementById("waMenuList").innerHTML = UNITS.map((u) =>
    `<a href="${waLink(u.whatsapp)}" target="_blank" rel="noopener">${u.nome.replace("Unidade ", "")} <small>${u.whatsappExibicao}</small></a>`).join("");
  const setWa = (open) => { waMenu.hidden = !open; waBtn.setAttribute("aria-expanded", open); };
  waBtn.addEventListener("click", (e) => { e.stopPropagation(); setWa(waMenu.hidden); });
  document.addEventListener("click", (e) => { if (!e.target.closest("#waFloat")) setWa(false); });

  /* ---------- Header ---------- */
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("menuToggle");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ---------- CTA dos serviços → pré-seleciona o interesse ---------- */
  document.querySelectorAll("[data-interest]").forEach((a) => a.addEventListener("click", () => {
    const sel = document.getElementById("interesse");
    [...sel.options].forEach((o) => { if (o.text === a.dataset.interest) sel.value = o.value; });
  }));

  /* ---------- Revelar ao rolar ---------- */
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const sibs = [...e.target.parentElement.children].filter((el) => el.classList.contains("reveal"));
    e.target.style.transitionDelay = `${Math.min(sibs.indexOf(e.target), 5) * 0.08}s`;
    e.target.classList.add("is-visible");
    io.unobserve(e.target);
  }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- Lightbox da galeria ---------- */
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.innerHTML = `
    <button class="lightbox__close" aria-label="Fechar">&times;</button>
    <div class="lightbox__inner">
      <img class="lightbox__img" alt="">
      <div class="lightbox__info">
        <span class="tag"></span><h3></h3><p></p>
        <a class="btn btn--outline btn--sm" target="_blank" rel="noopener">${icon("i-ig")} Ver no Instagram</a>
        <a class="btn btn--sun btn--sm" href="#contato" data-close>Solicitar orçamento</a>
      </div>
    </div>`;
  document.body.appendChild(lb);
  const closeLb = () => { lb.classList.remove("is-open"); document.body.style.overflow = ""; };
  document.querySelectorAll(".gitem").forEach((g) => g.addEventListener("click", () => {
    const img = g.querySelector("img");
    lb.querySelector(".lightbox__img").src = img.src;
    lb.querySelector(".lightbox__img").alt = img.alt;
    lb.querySelector(".tag").textContent = g.querySelector(".tag").textContent;
    lb.querySelector("h3").textContent = g.querySelector("strong").textContent;
    lb.querySelector("p").textContent = g.querySelector("figcaption > span:last-child").textContent;
    lb.querySelector(".btn--outline").href = g.dataset.link || SOCIAL.instagram;
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest(".lightbox__close,[data-close]")) closeLb(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeLb(); setMenu(false); setWa(false); } });

  /* ---------- Formulário → WhatsApp da unidade escolhida ---------- */
  const form = document.getElementById("quoteForm");
  const fb = document.getElementById("formFeedback");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const nome = form.elements.nome;
    if (!d.nome.trim()) {
      nome.classList.add("is-invalid");
      fb.textContent = "Informe seu nome para continuar.";
      nome.focus();
      return;
    }
    nome.classList.remove("is-invalid");
    fb.textContent = "";
    const u = UNITS.find((x) => x.id === d.unidade) || UNITS[0];
    const msg = [
      `Olá, ${u.nome}! Vim pelo site e gostaria de solicitar um orçamento.`,
      "",
      `*Nome:* ${d.nome.trim()}`,
      d.cidade.trim() ? `*Bairro/cidade:* ${d.cidade.trim()}` : null,
      `*Interesse:* ${d.interesse}`,
      d.mensagem.trim() ? `*Mensagem:* ${d.mensagem.trim()}` : null,
    ].filter((l) => l !== null).join("\n");
    window.open(waLink(u.whatsapp, msg), "_blank", "noopener");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
