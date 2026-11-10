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

