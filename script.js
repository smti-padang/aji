/* ============================================================
   Portfolio — pure JS, no framework
   - Data + social links read from window.PORTFOLIO_CONFIG (config.js)
   - Custom IntersectionObserver-based reveal animation
     (more consistent than AOS — no "jumps" on fast scroll)
   - CSS fallback: if JS is late/disabled, elements still appear
   ============================================================ */

const CFG = window.PORTFOLIO_CONFIG || {};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

/* ---------- Inline SVG icons for socials (no external deps) ---------- */
const ICONS = {
  github: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.65 18.85.5 12 .5Z"/>
  </svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
  </svg>`,
  instagram: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>`,
  tiktok: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
  </svg>`,
  email: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-10 6L2 7"/>
  </svg>`,
};

/* ---------- Build social-button HTML from config ---------- */
function socialButtonsHTML(opts = {}) {
  const order = ["github", "linkedin", "instagram", "tiktok", "email"];
  const labels = {
    github: "GitHub", linkedin: "LinkedIn",
    instagram: "Instagram", tiktok: "TikTok", email: "Email",
  };
  return order
    .filter((k) => CFG.socials && CFG.socials[k])
    .map((k) => {
      const url = CFG.socials[k];
      const ext = k !== "email" ? 'target="_blank" rel="noreferrer"' : "";
      return `<a href="${url}" ${ext} class="social-btn" aria-label="${labels[k]}" title="${labels[k]}">${ICONS[k]}</a>`;
    })
    .join("");
}

function fillSocials() {
  $$("[data-socials]").forEach((el) => (el.innerHTML = socialButtonsHTML()));
}

function fillIdentity() {
  const id = CFG.identity || {};
  $$("[data-id-name]").forEach((el) => (el.textContent = id.name || ""));
  $$("[data-id-brand]").forEach((el) => (el.textContent = id.brand || ""));
  $$("[data-id-email]").forEach((el) => (el.textContent = id.email || ""));
  $$("[data-id-phone]").forEach((el) => (el.textContent = id.phone || ""));
  $$("[data-id-location]").forEach((el) => (el.textContent = id.location || ""));
  $$("[data-photo-hero]").forEach((el) => (el.src = CFG.photos?.hero || ""));
  $$("[data-photo-about]").forEach((el) => (el.src = CFG.photos?.about || ""));
}

/* ---------- Render dynamic sections ---------- */
function renderProjects() {
  const grid = $("#projectsGrid");
  if (!grid) return;
  grid.innerHTML = (CFG.projects || []).map((p, i) => {
    const dir = i % 2 === 0 ? "left" : "right";
    return `
    <article class="project-card reveal" data-reveal="${dir}" data-delay="${(i % 3) * 100}">
      <span class="project-metric">${p.metric}</span>
      <div class="project-cover">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="project-meta">${p.client}</div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
      </div>
    </article>`;
  }).join("");
}

function renderCertificates() {
  const grid = $("#certsGrid");
  if (!grid) return;
  grid.innerHTML = (CFG.certificates || []).map((c, i) => {
    const dir = i % 2 === 0 ? "left" : "right";
    return `
    <div class="cert-card reveal" data-reveal="${dir}" data-delay="${(i % 3) * 80}">
      <div class="cert-cover">
        <img src="${c.image}" alt="${c.name}" loading="lazy" />
        <div class="cert-badge">✓</div>
      </div>
      <div class="cert-body">
        <div class="cert-name">${c.name}</div>
        <div class="cert-meta">
          <span>${c.issuer}</span>
          <span class="sep"></span>
          <span style="font-family:'JetBrains Mono',monospace;">${c.year}</span>
        </div>
      </div>
    </div>`;
  }).join("");
}

function renderTech() {
  const grid = $("#techGrid");
  if (!grid) return;
  grid.innerHTML = (CFG.tech || []).map((t, i) => {
    const dir = i % 2 === 0 ? "left" : "right";
    return `
    <div class="tech-card reveal" data-reveal="${dir}" data-delay="${(i % 6) * 50}">
      <div class="tech-logo">
        <img src="${t.logo}" alt="${t.name}" loading="lazy" />
      </div>
      <div class="tech-name">${t.name}</div>
    </div>`;
  }).join("");
}

/* ---------- CONSISTENT REVEAL ANIMATION ----------
   - Uses IntersectionObserver, not AOS
   - data-reveal="left|right|up|down" → starting offset
   - data-delay="ms" → optional stagger
   - Applies .is-visible once and unobserves (no flicker on re-scroll)
   - CSS fallback: if .js-ready isn't set, elements stay visible
*/
function initReveal() {
  document.documentElement.classList.add("js-ready");

  const els = $$(".reveal");
  if (!els.length) return;

  // Reduced motion → just show everything immediately
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Set delay inline
  els.forEach((el) => {
    const d = parseInt(el.dataset.delay || "0", 10);
    if (d) el.style.transitionDelay = `${d}ms`;
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px",
  });

  els.forEach((el) => io.observe(el));

  // Failsafe: anything still hidden after 3s gets shown
  setTimeout(() => {
    $$(".reveal:not(.is-visible)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add("is-visible");
    });
  }, 3000);
}

/* ---------- Navbar ---------- */
function initNavbar() {
  const nav = $("#navbar");
  const toggle = $("#navToggle");
  const mobile = $("#navMobile");

  const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle?.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "✕" : "☰";
  });

  $$(".nav-mlink").forEach((a) =>
    a.addEventListener("click", () => {
      mobile.classList.remove("open");
      toggle.textContent = "☰";
    })
  );
}

function initActiveSection() {
  const ids = ["Home", "About", "Portofolio", "Contact"];
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
  const setActive = (id) => {
    $$(".nav-link, .nav-mlink").forEach((a) => {
      a.classList.toggle("active", a.dataset.section === id);
    });
  };
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
    { rootMargin: "-40% 0px -50% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ---------- Typing ---------- */
function initTyping() {
  const el = $("#typing");
  if (!el) return;
  const words = ["PLC & SCADA Specialist", "Robotics Integrator", "Industry 4.0 Engineer", "OT/IT Convergence"];
  let wi = 0, ci = 0, deleting = false;
  const tick = () => {
    const w = words[wi];
    if (!deleting) {
      el.textContent = w.slice(0, ++ci);
      if (ci === w.length) { deleting = true; return setTimeout(tick, 1600); }
    } else {
      el.textContent = w.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, deleting ? 40 : 80);
  };
  tick();
}

/* ---------- Tabs ---------- */
function initTabs() {
  const tabs = $$(".tab");
  const panels = $$(".tab-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.tab;
      tabs.forEach((t) => t.classList.toggle("active", t === tab));
      panels.forEach((p) => p.classList.toggle("active", p.id === `panel-${id}`));
      // re-trigger reveal for newly visible cards
      $$(`#panel-${id} .reveal:not(.is-visible)`).forEach((el) => {
        requestAnimationFrame(() => el.classList.add("is-visible"));
      });
    });
  });
}

/* ---------- Background blob parallax ---------- */
function initBgBlobs() {
  const blobs = $$(".blob");
  if (!blobs.length) return;
  let raf = null;
  const update = () => {
    const s = window.pageYOffset;
    blobs.forEach((b, i) => {
      const xOff = Math.sin(s / 100 + i * 0.5) * 280;
      const yOff = Math.cos(s / 100 + i * 0.5) * 40;
      b.style.transform = `translate(${xOff}px, ${yOff}px)`;
    });
    raf = null;
  };
  window.addEventListener("scroll",
    () => { if (raf == null) raf = requestAnimationFrame(update); },
    { passive: true });
  update();
}

/* ---------- Counters ---------- */
function initCounters() {
  const counters = $$(".stat-value[data-count]");
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + (target > 9 ? "+" : "");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => io.observe(c));
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    if (!name || !email || !message) {
      status.textContent = "Mohon lengkapi semua kolom.";
      status.className = "form-status error";
      return;
    }
    status.textContent = "Membuka aplikasi email Anda...";
    status.className = "form-status success";
    const subject = encodeURIComponent(`Pesan dari ${name} via Portfolio`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const to = (CFG.identity?.email) || "hello@example.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      form.reset();
      status.textContent = "Pesan siap dikirim. Terima kasih!";
    }, 800);
  });
}

function initToTop() {
  const btn = $("#toTop");
  if (!btn) return;
  window.addEventListener("scroll",
    () => btn.classList.toggle("show", window.scrollY > 600),
    { passive: true });
  btn.addEventListener("click",
    () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initYear() {
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
}

function initSmoothScroll() {
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  fillIdentity();
  fillSocials();
  renderProjects();
  renderCertificates();
  renderTech();

  initNavbar();
  initActiveSection();
  initTyping();
  initTabs();
  initBgBlobs();
  initCounters();
  initContactForm();
  initToTop();
  initYear();
  initSmoothScroll();

  // Reveal LAST so all dynamic .reveal elements are observed
  initReveal();
});
