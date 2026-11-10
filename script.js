/* =========================================================
   OskrOS — escritorio interactivo estilo Windows 7 / Aero
   ========================================================= */

/* ---------- Configuración editable ---------- */

// Si pones tu correo aquí, el formulario de contacto abrirá el
// cliente de correo del visitante con el mensaje ya escrito.
const CONTACT_EMAIL = '';

// Galerías. Para agregar una imagen: cópiala a la carpeta indicada
// (nombre sin espacios ni tildes) y añade una línea { src, title }.

// Tatuajes → assets/images/tatuajes/
const TATTOO_PHOTOS = [
  { src: 'assets/images/tatuajes/arana.png', title: 'Araña' },
  { src: 'assets/images/tatuajes/crybaby.png', title: 'CryBaby' },
  { src: 'assets/images/tatuajes/rei-ayanami.png', title: 'Rei Ayanami' }
];

// Dibujos → assets/images/dibujos/
const DRAWINGS = [
  { src: 'assets/images/dibujos/emos.png', title: 'Emos hijueputas' },
  { src: 'assets/images/dibujos/jhon-2.png', title: 'Jhon 2' },
  { src: 'assets/images/dibujos/vida-mhm.png', title: 'Vida MHM' }
];

// Comunidad (dibujos que publican los visitantes desde Paint).
// Sin configurar, cada obra se guarda solo en el navegador de quien la hizo.
// Para que TODOS vean las obras de todos, crea un proyecto gratis en
// https://supabase.com, ejecuta el SQL de COMUNIDAD-SUPABASE.md y pega aquí
// la "Project URL" y la "anon public key".
const COMMUNITY = {
  supabaseUrl: '',
  supabaseKey: '',
  table: 'dibujos'
};

/* ---------- Datos de proyectos ---------- */
const PROJECTS = {
  legalflow: {
    name: 'LegalFlow',
    cat: 'web',
    kind: 'SaaS multi-tenant',
    title: 'LegalFlow · Gestión jurídica inteligente',
    subtitle: 'Plataforma SaaS multi-tenant para despachos de abogados con Next.js 16, React 19 y PostgreSQL',
    image: 'assets/images/project-legalflow.jpg',
    github: 'https://github.com/Oskrtim2/legalflow-app',
    overview: 'LegalFlow resuelve la dispersión de información y el riesgo de perder términos procesales en despachos jurídicos en Colombia. Centraliza expedientes con radicados judiciales, control de términos con alertas tempranas, facturación en COP y gestión de clientes con aislamiento estricto entre inquilinos.',
    architecture: [
      'Aislamiento multi-tenant estricto: filtrado obligatorio por <code>tenantId</code> en todas las consultas y transacciones con Prisma 7.',
      'Seguridad RBAC centralizada con un helper <code>can()</code> y una matriz de permisos, en lugar de simples validaciones por rol.',
      'Next.js 16 App Router con Server Actions de React 19 encapsuladas (<code>protectedAction</code>), esquemas Zod y Auth.js v5 con bcrypt (12 rondas).',
      'Arquitectura modular con patrón Repository (<code>BaseRepository</code> y repositorios por entidad).',
      'Dashboard con semáforo de riesgo procesal en tiempo real.',
      'Infraestructura reproducible con Docker Compose y Dockerfile multi-stage.'
    ],
    metrics: [['100%', 'Aislamiento multi-tenant'], ['Semáforo', 'Control de términos'], ['Next 16', 'React 19']],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL 16', 'Prisma 7', 'Server Actions', 'Auth.js v5', 'Tailwind CSS v4', 'shadcn/ui', 'Docker Compose', 'Zod']
  },
  smartstencil: {
    name: 'SmartStencil',
    cat: 'mobile',
    kind: 'AR & tatuajes',
    title: 'SmartStencil (InkSight) · Realidad aumentada',
    subtitle: 'App móvil AR con shaders GLSL propios y backend DDD en NestJS',
    image: 'assets/images/project-smartstencil.jpg',
    github: 'https://github.com/Oskrtim2/SmartStencil',
    overview: 'SmartStencil permite a tatuadores y clientes proyectar, ajustar y ver stencils en tiempo real sobre el cuerpo antes de tatuar. Resuelve la deformación en superficies curvas y protege el arte del diseñador contra copias usando tokens efímeros. Nació de juntar mis dos oficios: el código y el tatuaje.',
    architecture: [
      'Shader GLSL (<code>multiply_blend.frag</code>) con anti-aliasing MSAA para integrar la tinta con la textura y la luz de la piel.',
      'Mapeo cilíndrico UV con compensación de curvatura para brazos, piernas y torso.',
      'Gestos simultáneos (arrastrar, pellizcar, rotar) con deformación en tiempo real a 60 FPS.',
      'Las imágenes se cargan solo en memoria (RAM), sin guardarse en disco, para evitar que extraigan los stencils.',
      'Backend NestJS con Domain-Driven Design y 3 bounded contexts: <code>Identity</code>, <code>Catalog</code> y <code>Sharing</code>.',
      'Tokens QR atómicos y efímeros para que el cliente vea el diseño en su propio teléfono sin exponer el archivo original.'
    ],
    metrics: [['60 FPS', 'Render AR'], ['3', 'Bounded contexts DDD'], ['Solo RAM', 'Protección del arte']],
    stack: ['Flutter', 'GLSL Shaders', 'ARKit / ARCore', 'Riverpod', 'NestJS', 'TypeScript', 'DDD', 'Prisma ORM', 'PostgreSQL', 'AWS S3', 'Docker']
  },
  cyberplayer: {
    name: 'Cyber Player 2000',
    cat: 'data',
    kind: 'Estructuras de datos',
    title: 'Cyber Player 2000 · Listas doblemente enlazadas',
    subtitle: 'Reproductor retro con un motor de estructuras de datos propio y Web Audio API',
    image: 'assets/images/project-cyberplayer.jpg',
    github: 'https://github.com/Oskrtim2/reproductor-de-musica-listas-dobles',
    overview: 'Un reproductor de música construido sobre una lista doblemente enlazada genérica hecha desde cero, que maneja la reproducción, la navegación entre pistas y la cola sin usar los arrays nativos de JavaScript.',
    architecture: [
      '<code>DoublyLinkedList&lt;T&gt;</code> tipada con punteros <code>head</code>, <code>tail</code> y <code>current</code>, y nodos con referencias <code>prev</code>/<code>next</code>.',
      'Navegación anterior / siguiente / bucle en tiempo constante O(1).',
      'Motor de audio desacoplado sobre Web Audio API con visualizador de frecuencias.',
      'Inserción al inicio, al final y por índice, y eliminación con actualización de punteros.',
      'Estado persistido en <code>localStorage</code> y reconstrucción de la lista al recargar.',
      'TypeScript 5.7 en modo estricto y Vite 6.'
    ],
    metrics: [['O(1)', 'Siguiente / anterior'], ['0', 'Arrays nativos'], ['100%', 'TypeScript']],
    stack: ['TypeScript 5.7', 'Vite 6', 'Estructuras de datos', 'Web Audio API', 'HTML5 Canvas', 'localStorage']
  }
};

/* ---------- Aplicaciones ---------- */
const APPS = {
  about:    { title: 'Sobre mí — Propiedades', icon: 'i-user',   w: 580, h: 580 },
  projects: { title: 'Proyectos',              icon: 'i-folder', w: 820, h: 560 },
  skills:   { title: 'Habilidades',            icon: 'i-skills', w: 760, h: 540 },
  tattoo:   { title: 'Tatuajes — Visualizador de fotos', icon: 'i-tattoo', w: 640, h: 480 },
  community:{ title: 'Comunidad — Galería de visitantes', icon: 'i-community', w: 760, h: 560 },
  paint:    { title: 'Sin título — Paint',     icon: 'i-paint',  w: 880, h: 560 },
  hobbies:  { title: 'Hobbies',                icon: 'i-games',  w: 640, h: 470 },
  contact:  { title: 'Mensaje nuevo',          icon: 'i-mail',   w: 560, h: 500 },
  bin:      { title: 'Papelera de reciclaje',  icon: 'i-bin',    w: 520, h: 320 },
  drawings: { title: 'Dibujos — Visualizador de fotos', icon: 'i-photos', w: 680, h: 520 }
};

const HASH_TO_APP = {
  'sobre-mi': 'about', proyectos: 'projects', habilidades: 'skills', tatuajes: 'tattoo',
  dibujos: 'drawings', comunidad: 'community', paint: 'paint', hobbies: 'hobbies', contacto: 'contact'
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const isTouch = matchMedia('(pointer: coarse)').matches;
const isMobile = () => innerWidth <= 760;

/* =========================================================
   Sonido (todo sintetizado con Web Audio, sin archivos)
   ========================================================= */
const Sound = (() => {
  let ctx = null;
  let on = localStorage.getItem('oskr-sound') !== 'off';

  function ac() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, dur, { type = 'sine', vol = .15, at = 0, slideTo } = {}) {
    const c = ac(); if (!c) return;
    const t = c.currentTime + at;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + .01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(c.destination);
    o.start(t); o.stop(t + dur + .05);
  }

  const ui = {
    click: () => tone(880, .05, { vol: .05, type: 'triangle' }),
    open: () => { tone(660, .12, { vol: .06 }); tone(990, .16, { vol: .05, at: .05 }); },
    close: () => { tone(700, .1, { vol: .05 }); tone(470, .14, { vol: .05, at: .05 }); },
    pop: () => tone(500 + Math.random() * 500, .09, { vol: .12, slideTo: 1600 }),
    error: () => { tone(440, .18, { vol: .08, type: 'triangle' }); tone(330, .25, { vol: .08, type: 'triangle', at: .12 }); },
    startup: () => [523, 659, 784, 1046].forEach((f, i) => { tone(f, 1.6, { vol: .07, at: i * .14 }); tone(f / 2, 1.6, { vol: .04, at: i * .14 }); }),
    send: () => { tone(600, .1, { vol: .06, slideTo: 1400 }); tone(1200, .2, { vol: .05, at: .1 }); }
  };

  return {
    get on() { return on; },
    toggle() { on = !on; localStorage.setItem('oskr-sound', on ? 'on' : 'off'); return on; },
    play(name) { if (on && ui[name]) ui[name](); },
    unlock: ac
  };
})();

/* =========================================================
   Gestor de ventanas
   ========================================================= */
const WM = (() => {
  const layer = $('#windows');
  const tb = $('#tb-windows');
  const wins = new Map(); // id -> { el, btn, app, cleanup }
  let z = 10, cascade = 0;

  function bounds() { return layer.getBoundingClientRect(); }

  function open(id, opts = {}) {
    const app = APPS[id];
    if (!app) return;
    closeStartMenu();
    if (wins.has(id)) {
      const w = wins.get(id);
      restore(id);
      w.onOpen && w.onOpen(opts);
      return;
    }

    const el = document.createElement('section');
    el.className = 'window';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', opts.title || app.title);
    el.dataset.app = id;
    el.innerHTML = `
      <div class="titlebar">
        <svg><use href="#${app.icon}"/></svg>
        <span class="title"></span>
        <div class="controls">
          <button class="min" aria-label="Minimizar">&#8212;</button>
          <button class="max" aria-label="Maximizar">&#9633;</button>
          <button class="close" aria-label="Cerrar">&#10005;</button>
        </div>
      </div>
      <div class="win-body"></div>`;
    $('.title', el).textContent = opts.title || app.title;
    const body = $('.win-body', el);
    const tpl = document.getElementById('tpl-' + id);
    if (tpl) body.appendChild(tpl.content.cloneNode(true));

    // Tamaño y posición en cascada
    const b = bounds();
    const w = Math.min(app.w, b.width - 20), h = Math.min(app.h, b.height - 20);
    const step = (cascade++ % 7) * 28;
    let x = Math.max(10, Math.min(b.width - w - 10, (b.width - w) / 2 - 90 + step));
    let y = Math.max(6, Math.min(b.height - h - 6, (b.height - h) / 2 - 60 + step));
    Object.assign(el.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' });

    layer.appendChild(el);

    // Botón en la barra de tareas
    const btn = document.createElement('button');
    btn.className = 'tb-btn open';
    btn.innerHTML = `<svg><use href="#${app.icon}"/></svg><span></span>`;
    $('span', btn).textContent = (opts.title || app.title).split(' — ')[0];
    btn.addEventListener('click', () => {
      const cur = wins.get(id);
      if (el.classList.contains('minimized')) restore(id);
      else if (cur && el.style.zIndex == z) minimize(id);
      else focus(id);
    });
    tb.appendChild(btn);

    const rec = { el, btn, app };
    wins.set(id, rec);

    // Controles
    $('.min', el).addEventListener('click', e => { e.stopPropagation(); minimize(id); });
    $('.max', el).addEventListener('click', e => { e.stopPropagation(); toggleMax(id); });
    $('.close', el).addEventListener('click', e => { e.stopPropagation(); close(id); });
    $('.titlebar', el).addEventListener('dblclick', e => { if (!e.target.closest('.controls')) toggleMax(id); });
    el.addEventListener('pointerdown', () => focus(id));
    makeDraggable(el, id);

    Sound.play('open');
    focus(id);

    const init = AppInit[id];
    if (init) {
      const res = init(body, el, opts) || {};
      rec.cleanup = res.cleanup;
      rec.onOpen = res.onOpen;
      rec.onKey = res.onKey;
      res.onOpen && res.onOpen(opts);
    }
    updateHash(id);
  }

  function focus(id) {
    const w = wins.get(id);
    if (!w) return;
    if (w.el.style.zIndex != z) w.el.style.zIndex = ++z;
    wins.forEach((o, k) => {
      const active = k === id;
      o.el.classList.toggle('inactive', !active);
      o.btn.classList.toggle('active', active);
    });
  }

  function topVisible() {
    let best = null, bz = -1;
    wins.forEach((o, k) => {
      if (!o.el.classList.contains('minimized') && +o.el.style.zIndex > bz) { bz = +o.el.style.zIndex; best = k; }
    });
    return best;
  }

  function minimize(id) {
    const w = wins.get(id);
    if (!w) return;
    w.el.classList.add('minimized');
    w.btn.classList.remove('active');
    const next = topVisible();
    if (next) focus(next);
  }

  function restore(id) {
    const w = wins.get(id);
    if (!w) return;
    w.el.classList.remove('minimized');
    focus(id);
  }

  function toggleMax(id) {
    const w = wins.get(id);
    if (!w || isMobile()) return;
    w.el.classList.toggle('maximized');
    Sound.play('click');
  }

  function close(id, silent) {
    const w = wins.get(id);
    if (!w) return;
    wins.delete(id);
    w.cleanup && w.cleanup();
    w.btn.remove();
    if (!silent) Sound.play('close');
    w.el.classList.add('closing');
    setTimeout(() => w.el.remove(), 150);
    const next = topVisible();
    if (next) focus(next);
    if (!wins.size) history.replaceState(null, '', location.pathname);
  }

  function makeDraggable(el, id) {
    const bar = $('.titlebar', el);
    let sx, sy, ox, oy, dragging = false;
    bar.addEventListener('pointerdown', e => {
      if (e.target.closest('.controls') || isMobile() || e.button !== 0) return;
      dragging = true;
      if (el.classList.contains('maximized')) {
        // Al arrastrar una ventana maximizada, se restaura bajo el cursor
        el.classList.remove('maximized');
        const w = el.offsetWidth;
        el.style.left = Math.max(0, e.clientX - w / 2) + 'px';
        el.style.top = Math.max(0, e.clientY - 15) + 'px';
      }
      sx = e.clientX; sy = e.clientY; ox = el.offsetLeft; oy = el.offsetTop;
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener('pointermove', e => {
      if (!dragging) return;
      const b = bounds();
      const nx = Math.min(b.width - 80, Math.max(80 - el.offsetWidth, ox + e.clientX - sx));
      const ny = Math.min(b.height - 30, Math.max(0, oy + e.clientY - sy));
      el.style.left = nx + 'px';
      el.style.top = ny + 'px';
    });
    bar.addEventListener('pointerup', e => {
      if (!dragging) return;
      dragging = false;
      // Aero Snap: arrastrar arriba maximiza
      if (e.clientY <= 2) { el.classList.add('maximized'); Sound.play('click'); }
    });
  }

  function showDesktop() {
    const anyVisible = [...wins.values()].some(w => !w.el.classList.contains('minimized'));
    wins.forEach((w, k) => anyVisible ? minimize(k) : restore(k));
  }

  function active() {
    const id = topVisible();
    return id ? { id, ...wins.get(id) } : null;
  }

  function updateHash(id) {
    const hash = Object.keys(HASH_TO_APP).find(k => HASH_TO_APP[k] === id);
    if (hash) history.replaceState(null, '', '#' + hash);
  }

  return { open, close, focus, showDesktop, active, has: id => wins.has(id) };
})();

/* =========================================================
   Inicialización de cada aplicación
   ========================================================= */
const AppInit = {
  about(body) {
    const tabs = $$('.tab', body), panels = $$('.tab-panel', body);
    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.toggle('active', x === t));
      panels.forEach(p => p.classList.toggle('active', p.dataset.panel === t.dataset.tab));
      Sound.play('click');
    }));
  },

  projects(body) {
    const files = $('.ex-files', body), detail = $('.ex-detail', body);
    const back = $('[data-ex="back"]', body), fwd = $('[data-ex="fwd"]', body);
    const path = $('.ex-path', body), count = $('.ex-count', body), search = $('.ex-search', body);
    let filter = 'all', last = null;

    function renderList() {
      const q = search.value.trim().toLowerCase();
      const items = Object.entries(PROJECTS).filter(([, p]) =>
        (filter === 'all' || p.cat === filter) &&
        (!q || (p.name + p.kind + p.stack.join(' ')).toLowerCase().includes(q)));
      files.innerHTML = items.map(([k, p]) => `
        <button class="file" data-key="${k}">
          <img src="${p.image}" alt="" loading="lazy">
          <span>${p.name}</span><small>${p.kind}</small>
        </button>`).join('') || '<p class="muted" style="grid-column:1/-1">No hay elementos que coincidan con la búsqueda.</p>';
      count.textContent = items.length + (items.length === 1 ? ' elemento' : ' elementos');
    }

    function showList() {
      detail.hidden = true; files.hidden = false;
      path.textContent = 'Equipo ▸ Oscar ▸ Proyectos';
      back.disabled = true; fwd.disabled = !last;
    }

    function showDetail(key) {
      const p = PROJECTS[key];
      if (!p) return;
      last = key;
      detail.innerHTML = `
        <h2>${p.title}</h2>
        <p class="sub">${p.subtitle}</p>
        <img class="hero-img" src="${p.image}" alt="Captura de ${p.name}">
        <div class="metrics">${p.metrics.map(([v, l]) => `<div class="metric"><b>${v}</b><span>${l}</span></div>`).join('')}</div>
        <h3>Resumen</h3><p>${p.overview}</p>
        <h3>Arquitectura</h3><ul>${p.architecture.map(a => `<li>${a}</li>`).join('')}</ul>
        <h3>Tecnologías</h3><div class="stack">${p.stack.map(s => `<span class="pill">${s}</span>`).join('')}</div>
        <div class="btn-row"><a class="aero-btn" href="${p.github}" target="_blank" rel="noopener">
          <svg width="16" height="16"><use href="#i-github"/></svg> Ver en GitHub</a>
          <button class="aero-btn" data-back>Volver a Proyectos</button></div>`;
      files.hidden = true; detail.hidden = false;
      detail.parentElement.scrollTop = 0;
      path.textContent = 'Equipo ▸ Oscar ▸ Proyectos ▸ ' + p.name;
      back.disabled = false; fwd.disabled = true;
      Sound.play('click');
    }

    files.addEventListener('click', e => {
      const f = e.target.closest('.file');
      if (!f) return;
      $$('.file', files).forEach(x => x.classList.toggle('selected', x === f));
      if (isTouch) showDetail(f.dataset.key);
    });
    files.addEventListener('dblclick', e => { const f = e.target.closest('.file'); f && showDetail(f.dataset.key); });
    files.addEventListener('keydown', e => { const f = e.target.closest('.file'); if (f && e.key === 'Enter') { e.preventDefault(); showDetail(f.dataset.key); } });
    detail.addEventListener('click', e => { if (e.target.closest('[data-back]')) showList(); });
    back.addEventListener('click', showList);
    fwd.addEventListener('click', () => last && showDetail(last));
    search.addEventListener('input', () => { showList(); renderList(); });
    $$('.ex-filter', body).forEach(b => b.addEventListener('click', () => {
      filter = b.dataset.filter;
      $$('.ex-filter', body).forEach(x => x.classList.toggle('active', x === b));
      showList(); renderList(); Sound.play('click');
    }));

    renderList(); showList();
    return { onOpen: opts => opts && opts.project && showDetail(opts.project) };
  },

  tattoo(body) {
    renderGallery($('.gallery', body), TATTOO_PHOTOS, 'Tatuaje');
  },

  drawings(body) {
    renderGallery($('.gallery', body), DRAWINGS, 'Dibujo');
  },

  paint(body) {
    const canvas = $('.paint-canvas', body), wrap = $('.canvas-wrap', body);
    const ctx = canvas.getContext('2d');
    const COLORS = ['#000000', '#7f7f7f', '#880015', '#ed1c24', '#ff7f27', '#fff200', '#22b14c', '#00a2e8',
                    '#ffffff', '#c3c3c3', '#b97a57', '#ffaec9', '#ffc90e', '#b5e61d', '#99d9ea', '#3f48cc'];
    let color = '#000000', tool = 'brush', drawing = false, lx = 0, ly = 0;
    const sw = $('.swatches', body);
    sw.innerHTML = COLORS.map(c => `<button class="swatch${c === color ? ' active' : ''}" style="background:${c}" data-c="${c}" aria-label="Color ${c}"></button>`).join('');
    sw.addEventListener('click', e => {
      const b = e.target.closest('.swatch'); if (!b) return;
      color = b.dataset.c;
      $$('.swatch', sw).forEach(x => x.classList.toggle('active', x === b));
      setTool('brush');
    });
    const size = $('.brush-size', body);

    function setTool(t) {
      tool = t;
      $$('[data-tool]', body).forEach(x => x.classList.toggle('active', x.dataset.tool === t));
    }
    $$('[data-tool]', body).forEach(b => b.addEventListener('click', () => setTool(b.dataset.tool)));

    function fit() {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dpr = window.devicePixelRatio || 1;
      const copy = document.createElement('canvas');
      copy.width = canvas.width; copy.height = canvas.height;
      copy.getContext('2d').drawImage(canvas, 0, 0);
      canvas.width = Math.round(r.width * dpr); canvas.height = Math.round(r.height * dpr);
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (copy.width) ctx.drawImage(copy, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = ctx.lineJoin = 'round';
    }
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);

    function pos(e) { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
    function stroke(x, y) {
      ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
      ctx.lineWidth = +size.value * (tool === 'eraser' ? 2 : 1);
      ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(x, y); ctx.stroke();
      lx = x; ly = y;
    }
    canvas.addEventListener('pointerdown', e => {
      drawing = true; canvas.setPointerCapture(e.pointerId);
      [lx, ly] = pos(e); stroke(lx + .01, ly + .01);
    });
    canvas.addEventListener('pointermove', e => { if (drawing) stroke(...pos(e)); });
    canvas.addEventListener('pointerup', () => { drawing = false; });

    $('[data-act="clear"]', body).addEventListener('click', () => {
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.restore();
      Sound.play('close');
    });
    $('[data-act="save"]', body).addEventListener('click', () => {
      const a = document.createElement('a');
      a.download = 'mi-dibujo.png'; a.href = canvas.toDataURL('image/png'); a.click();
      Sound.play('send');
    });

    // Publicar en Comunidad: pide nombre de la obra y firma del autor
    const back = $('.modal-back', body), form = $('.dialog', body);
    const err = $('.dlg-error', body), preview = $('.dlg-preview', body);
    let exported = null;

    function isBlank() {
      const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      for (let i = 0; i < d.length; i += 16) if (d[i] < 250 || d[i + 1] < 250 || d[i + 2] < 250) return false;
      return true;
    }
    function exportImage() {
      // Reduce el dibujo a máx. 900 px y lo guarda como JPEG para que pese poco
      const scale = Math.min(1, 900 / Math.max(canvas.width, canvas.height));
      const c = document.createElement('canvas');
      c.width = Math.round(canvas.width * scale); c.height = Math.round(canvas.height * scale);
      const x = c.getContext('2d');
      x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
      x.drawImage(canvas, 0, 0, c.width, c.height);
      return c.toDataURL('image/jpeg', .85);
    }
    function closeDialog() { back.hidden = true; err.hidden = true; }

    $('[data-act="publish"]', body).addEventListener('click', () => {
      if (isBlank()) { Sound.play('error'); toast('El lienzo está vacío. ¡Dibuja algo primero!'); return; }
      exported = exportImage();
      preview.src = exported;
      back.hidden = false;
      err.hidden = true;
      Sound.play('open');
      form.elements.title.focus();
    });
    $('[data-cancel]', body).addEventListener('click', closeDialog);
    back.addEventListener('keydown', e => { if (e.key === 'Escape') { e.stopPropagation(); closeDialog(); } });
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const title = form.elements.title.value.trim();
      const author = form.elements.author.value.trim();
      if (!title || !author) {
        err.textContent = !title ? 'Escribe el nombre de la obra.' : 'Firma tu obra con tu nombre o alias.';
        err.hidden = false; Sound.play('error');
        (!title ? form.elements.title : form.elements.author).focus();
        return;
      }
      const btn = $('[type="submit"]', form);
      btn.disabled = true; btn.textContent = 'Publicando...';
      try {
        await CommunityStore.add({ title, author, image: exported });
        closeDialog();
        form.reset();
        Sound.play('send');
        WM.open('community');
      } catch (ex) {
        err.textContent = ex.message || 'No se pudo publicar. Inténtalo de nuevo.';
        err.hidden = false; Sound.play('error');
      } finally {
        btn.disabled = false; btn.textContent = 'Publicar';
      }
    });

    return { cleanup: () => ro.disconnect() };
  },

