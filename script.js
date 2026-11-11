/* =========================================================
   OskrOS — escritorio interactivo estilo Windows 7 / Aero
   ========================================================= */

/* ---------- Configuración editable ---------- */

// Correo que recibe los mensajes del formulario de contacto.
// Se envían con FormSubmit (https://formsubmit.co): la primera vez llega un
// correo "Activate Form" a esta dirección y hay que pulsar el botón para activarlo.
const CONTACT_EMAIL = 'oscartimaran60@gmail.com';

// Galerías. Para agregar una imagen: cópiala a la carpeta indicada
// (nombre sin espacios ni tildes) y añade una línea { src, title }.

// Tatuajes → assets/images/tatuajes/
const TATTOO_PHOTOS = [
  { src: 'assets/images/tatuajes/arana.png', title: 'Araña' },
  { src: 'assets/images/tatuajes/crybaby.png', title: 'CryBaby' },
  { src: 'assets/images/tatuajes/rei-ayanami.png', title: 'Rei Ayanami' },
  { src: 'assets/images/tatuajes/sol-vale.png', title: 'Sol y olas' },
  { src: 'assets/images/tatuajes/yoko.png', title: 'Yoko' }
];

// Dibujos → assets/images/dibujos/
const DRAWINGS = [
  { src: 'assets/images/dibujos/emos.png', title: 'Emos hijueputas' },
  { src: 'assets/images/dibujos/jhon-2.png', title: 'Jhon 2' },
  { src: 'assets/images/dibujos/vida-mhm.png', title: 'Vida MHM' },
  { src: 'assets/images/dibujos/nirvana-x-nana.png', title: 'Nirvana x Nana' },
  { src: 'assets/images/dibujos/tatu-oscar-dado.png', title: 'Tatu Oscar dado' },
  { src: 'assets/images/dibujos/tatuaje-kuromi.png', title: 'Tatuaje Kuromi' },
  { src: 'assets/images/dibujos/eri-tatuaje.png', title: 'ERI tatuaje' }
];

// Comunidad (dibujos que publican los visitantes desde Paint).
// Se guardan en Vercel Blob a través de /api/dibujos y todos los visitantes
// ven las mismas obras. Abriendo index.html sin servidor (file://) se usan
// solo las obras guardadas en este navegador.
const COMMUNITY_API = '/api/dibujos';

/* ---------- Datos de proyectos ---------- */
const PROJECTS = {
  lexilearn: {
    name: 'LexiLearn',
    cat: 'api',
    kind: 'API de aprendizaje asistivo',
    title: 'LexiLearn · Aprender a leer sin barreras',
    subtitle: 'API REST en NestJS para estudiantes con dislexia, TDAH y TEA: OCR, texto a voz, silabación y gamificación calmada',
    image: 'assets/images/project-lexilearn.svg',
    github: 'https://github.com/Oskrtim2/LexiLearn-Backend',
    overview: 'LexiLearn es el backend de una plataforma de aprendizaje asistivo para estudiantes de primaria y secundaria con dislexia, TDAH o Trastorno del Espectro Autista. El estudiante fotografía una página, la API extrae el texto, lo divide en sílabas y frases cortas, calcula su legibilidad y lo lee en voz alta. Todo pensado para que nadie se frustre: sin contraseñas, sin castigos por perder la racha y con celebraciones silenciosas.',
    architecture: [
      'Inicio de sesión accesible sin contraseñas: <b>PIN corto</b>, <b>código QR firmado</b> o una <b>secuencia de iconos</b> (estrella → luna → hoja) guardada como digest HMAC.',
      'OCR de páginas escaneadas con <b>Tesseract</b> local o <b>AWS Textract</b>, validación por bytes mágicos (PNG / JPEG / WebP) y límite de 10 MB.',
      'Texto a voz neuronal con <b>Amazon Polly</b> o <b>Google Cloud TTS</b>, caché por hash de contenido, <i>advisory locks</i> de PostgreSQL y URLs firmadas de MP3.',
      'Asistente de lectura: silabación en español e inglés, microfrases por cláusulas, tiempo estimado e índice de legibilidad.',
      'Gamificación amigable para los sentidos: micro-XP, insignias suaves y rachas no punitivas.',
      'Monolito modular Controlador → Servicio → Repositorio → Prisma, proveedores intercambiables por interfaces y tokens de inyección, Helmet, CORS, <i>throttling</i> y Swagger.'
    ],
    metrics: [['3', 'Formas de entrar sin contraseña'], ['2 + 2', 'Proveedores OCR y TTS'], ['ES / EN', 'Silabación']],
    stack: ['NestJS 12', 'TypeScript 6', 'PostgreSQL 17', 'Prisma 6', 'JWT', 'Tesseract.js', 'AWS Textract', 'Amazon Polly', 'Google Cloud TTS', 'Swagger / OpenAPI', 'Vitest', 'Docker Compose']
  },
  contextflow: {
    name: 'ContextFlow',
    cat: 'desktop',
    kind: 'App de escritorio con IA local',
    title: 'ContextFlow · Gestor de entornos para Windows 11',
    subtitle: 'HUD flotante para trabajar con varios monitores, con un motor de IA 100 % local que optimiza el equipo',
    image: 'assets/images/project-contextflow.svg',
    github: 'https://github.com/Oskrtim2/contextflow',
    overview: 'ContextFlow vive en el escritorio como una burbuja translúcida. Con <b>Ctrl + E + F</b> se abre un HUD estilo Fluent con CPU, RAM y GPU en vivo, las ventanas agrupadas en "cápsulas" de trabajo y un enrutador para mandarlas a otro monitor. Con <b>Ctrl + E</b> y <b>Ctrl + F</b> recorres tus ventanas en un anillo infinito, como los espacios de trabajo de Pop!_OS. Cuando no estás usando algo, una IA embebida baja la prioridad de los procesos inactivos y libera memoria, sin internet, sin cuentas y sin nube.',
    architecture: [
      'Atajos globales (<code>Ctrl+E+F</code>) con un hook de teclado y navegación circular entre ventanas que las restaura, maximiza y enfoca.',
      'Cápsulas de trabajo en un lienzo infinito: cada una se asigna a un monitor y se acomoda en columnas, filas o cuadrícula.',
      'Telemetría asíncrona cada 500 ms con Win32: <code>GetSystemTimes</code>, <code>GlobalMemoryStatusEx</code> y contadores PDH de GPU.',
      'IA offline: un modelo de políticas ONNX de 9 variables, ejecutado con ONNX Runtime embebido, con respaldo si el modelo falla.',
      'Políticas prudentes y reversibles: prioridad baja, compactación de memoria y ocultar cápsulas inactivas de DWM, con exclusiones, enfriamiento y un diario que restaura todo si la app se cierra de golpe.',
      'Interfaz WPF con Acrylic/Mica reales de Windows 11, MVVM, tema claro y oscuro, inglés y español, y un instalador de un solo archivo.'
    ],
    metrics: [['100 % local', 'IA sin nube'], ['500 ms', 'Telemetría en vivo'], ['ES / EN', 'Interfaz bilingüe']],
    stack: ['C# 12', '.NET 8', 'WPF', 'MVVM', 'P/Invoke Win32', 'DWM', 'ONNX Runtime', 'PDH', 'System.Text.Json', 'Inno Setup']
  },
  pixelperfect: {
    name: 'Dakingo Bakery',
    cat: 'web',
    kind: 'Tienda online · demo en vivo',
    title: 'Dakingo Bakery · Tienda online de pastelería',
    subtitle: 'E-commerce en Next.js 16 y React 19 con carrito, categorías y cuentas de usuario',
    image: 'assets/images/project-pixelperfect.jpg',
    github: 'https://github.com/Oskrtim2/Pixel-perfect',
    demo: 'https://pixel-perfect-kappa-bay.vercel.app',
    overview: 'Una tienda online para una pastelería, hecha al pixel a partir de un diseño. El cliente busca tortas y postres, filtra por categoría, guarda favoritos y arma su pedido en un carrito lateral. Es el tipo de página que un negocio local necesita para vender por internet, lista y publicada.',
    architecture: [
      'Carrito lateral con cantidades, eliminación de productos y total calculado en tiempo real.',
      'Menú por categorías (clásicas, gourmet, postres, galletas) que filtra los productos más vendidos.',
      'Favoritos, buscador y menú adaptado a celular.',
      'Ventanas de inicio de sesión y registro, ayuda y un cupón de descuento que se copia con un clic.',
      'Componentes React tipados con TypeScript y estilos con Tailwind CSS 4.',
      'Publicada en Vercel con imágenes optimizadas por <code>next/image</code>.'
    ],
    metrics: [['En vivo', 'Publicada en Vercel'], ['Carrito', 'Pedido completo'], ['Responsive', 'Celular y escritorio']],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Lucide', 'Vercel']
  },
  flex: {
    name: 'Flex Dashboard',
    cat: 'web',
    kind: 'Panel de ventas · demo en vivo',
    title: 'Flex · Panel de administración de ventas',
    subtitle: 'Maqueta de dashboard maquetada al pixel en Next.js, con métricas, gráfica de sesiones y medidor de conversión',
    image: 'assets/images/project-flex.jpg',
    github: 'https://github.com/Oskrtim2/R-flex-copia-taller',
    demo: 'https://proyecto-flex-psi.vercel.app',
    overview: 'Un panel de control para una tienda online: ventas, visitantes y pedidos de un vistazo, sesiones a lo largo del tiempo y la tasa de conversión. Lo construí replicando un diseño profesional con fidelidad, que es justo lo que se necesita para paneles internos, apps de administración o reportes para clientes.',
    architecture: [
      'Menú lateral con secciones, integraciones (Jira, Slack, Intercom) y contador de mensajes.',
      'Tarjetas de métricas con variación porcentual al alza o a la baja.',
      'Gráfica de sesiones y medidor semicircular de conversión dibujados con SVG, sin librerías de gráficas.',
      'Estilos con CSS Modules, sin dependencias extra más allá de Next.js y React.',
      'Publicado en Vercel.'
    ],
    metrics: [['0', 'Librerías de gráficas'], ['SVG', 'Gráficas a mano'], ['En vivo', 'Publicado en Vercel']],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'CSS Modules', 'SVG', 'Vercel']
  },
  glassplayer: {
    name: 'Glass Player',
    cat: 'web',
    kind: 'UI de reproductor de video',
    title: 'Glass Player · Reproductor con diseño glassmorphism',
    subtitle: 'Interfaz de reproductor de video con paneles de vidrio esmerilado, en HTML, CSS y JavaScript puros',
    image: 'assets/images/project-glassplayer.svg',
    github: 'https://github.com/Oskrtim2/glassmorphism_reproductor',
    overview: 'Una interfaz de reproductor de video pensada como una app de streaming premium: la película flota sobre la sala en un panel de vidrio, con una barra lateral de acciones y controles de reproducción translúcidos. Muestra el cuidado por el detalle visual que pongo en cada interfaz.',
    architecture: [
      'Paneles de vidrio esmerilado con <code>backdrop-filter</code>, bordes de luz y sombras suaves.',
      'Barra lateral con reproducir, bloquear pantalla, transmitir, compartir y buscar.',
      'Controles de reproducción, volumen, calidad y barra de progreso con estados interactivos.',
      'Sin frameworks: HTML semántico, CSS y JavaScript puros.'
    ],
    metrics: [['0', 'Dependencias'], ['Glass', 'Estética premium'], ['Vanilla', 'HTML · CSS · JS']],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Glassmorphism', 'backdrop-filter']
  },
  wallsense: {
    name: 'WallSense',
    cat: 'mobile',
    kind: 'App para reloj Garmin',
    title: 'WallSense · Detector magnético para Garmin',
    subtitle: 'App Connect IQ para el Forerunner 165 que convierte el magnetómetro del reloj en un detector de anomalías con vibración',
    image: 'assets/images/project-wallsense.svg',
    github: 'https://github.com/Oskrtim2/WallSense_SmartWatch',
    overview: 'WallSense lee el magnetómetro de tres ejes del reloj, se calibra con el campo magnético del lugar y avisa con vibraciones cada vez más intensas cuando detecta algo que lo altera. Es un proyecto experimental de hobby, no un instrumento de seguridad, pero muestra que puedo programar sobre hardware real, sensores y dispositivos con recursos muy limitados.',
    architecture: [
      'Muestreo del magnetómetro a la máxima frecuencia que reporta el sensor, con reintento a 25 Hz si el firmware la rechaza.',
      'Calibración de 3 segundos con media y varianza en línea (algoritmo de Welford).',
      'Umbral adaptativo según el ruido del ambiente (<code>4σ + 1.5 mG</code>, entre 2 y 30 mG) e histéresis del 35 % para evitar falsas alarmas.',
      'Vibración dinámica con 8 patrones: el intervalo baja de 720 a 320 ms y el pulso crece de 50 a 150 ms según la intensidad.',
      'Interfaz negra para pantalla AMOLED con medidor de 270° y ecos de radar.',
      'Vigilante del sensor que lo vuelve a registrar si deja de enviar datos durante 3,5 s.'
    ],
    metrics: [['3 ejes', 'Magnetómetro'], ['8', 'Patrones de vibración'], ['Welford', 'Calibración en línea']],
    stack: ['Monkey C', 'Garmin Connect IQ', 'Sensores', 'Hápticos', 'AMOLED UI']
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
  about:    { title: 'Sobre mí — Propiedades', icon: 'i-user',   w: 580, h: 600 },
  cv:       { title: 'CV_Oscar_Timaran.pdf — Lector de documentos', icon: 'i-pdf', w: 1000, h: 660 },
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
  'sobre-mi': 'about', cv: 'cv', 'hoja-de-vida': 'cv', proyectos: 'projects', habilidades: 'skills', tatuajes: 'tattoo',
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
  let ctx = null, out = null;
  let on = localStorage.getItem('oskr-sound') !== 'off';
  const MASTER = 4; // volumen general de los efectos

  function ac() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      // Ganancia general + limitador: suena fuerte sin saturar cuando se juntan varios tonos
      const master = ctx.createGain();
      master.gain.value = MASTER;
      const limiter = ctx.createDynamicsCompressor();
      limiter.threshold.value = -6; limiter.knee.value = 4; limiter.ratio.value = 12;
      limiter.attack.value = .003; limiter.release.value = .15;
      master.connect(limiter).connect(ctx.destination);
      out = master;
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
    o.connect(g).connect(out);
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
        <div class="btn-row">${p.demo ? `<a class="aero-btn primary" href="${p.demo}" target="_blank" rel="noopener">Ver demo en vivo</a>` : ''}<a class="aero-btn" href="${p.github}" target="_blank" rel="noopener">
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

  community(body) {
    const gallery = $('.gallery', body), note = $('.community-note', body);
    note.textContent = CommunityStore.shared
      ? 'Cualquier visitante puede ver las obras publicadas aquí.'
      : 'Por ahora las obras se guardan solo en este navegador.';
    async function load() {
      gallery.innerHTML = '<div class="gallery-empty">Cargando obras...</div>';
      try {
        const items = await CommunityStore.list();
        if (!items.length) {
          gallery.innerHTML = `<div class="gallery-empty">Todavía no hay obras publicadas.<br>
            <a href="#" data-open="paint">Abre Paint</a>, dibuja algo y sé el primero en firmar una.</div>`;
          return;
        }
        renderGallery(gallery, items.map(it => ({ src: it.image, title: it.title, author: it.author })), 'Obra');
      } catch {
        gallery.innerHTML = '<div class="gallery-empty">No se pudieron cargar las obras. Revisa tu conexión e inténtalo de nuevo.</div>';
      }
    }
    load();
    return { onOpen: load };
  },

  contact(body) {
    const form = $('form', body), fb = $('.mail-feedback', body);
    const sendBtn = $('[type="submit"]', form);
    const say = (html, kind) => { fb.innerHTML = html; fb.dataset.kind = kind; fb.hidden = false; };
    const fallback = ' Escríbeme directo a <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a> o por <a href="https://www.instagram.com/0skrtm__/" target="_blank" rel="noopener">Instagram @0skrtm__</a>.';

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      const name = (d.name || '').trim(), email = (d.email || '').trim(), message = (d.message || '').trim();
      if (!name || !email || !message || !form.elements.email.checkValidity()) {
        say(!name ? 'Escribe tu nombre o empresa.' : !email || !form.elements.email.checkValidity()
          ? 'Escribe un correo válido para poder responderte.' : 'Escribe tu mensaje.', 'error');
        Sound.play('error');
        return;
      }
      if (d._honey) return; // campo trampa: solo lo llenan los bots

      sendBtn.disabled = true; sendBtn.textContent = 'Enviando...';
      try {
        const r = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `[Portafolio] ${d.subject} — ${name}`,
            _replyto: email,
            _template: 'table',
            Nombre: name,
            Correo: email,
            Asunto: d.subject,
            Mensaje: message
          })
        });
        const res = await r.json().catch(() => ({}));
        if (!r.ok || String(res.success) !== 'true') throw new Error(res.message || 'send failed');
        form.reset();
        say('¡Mensaje enviado! Te responderé a tu correo lo antes posible.', 'ok');
        Sound.play('send');
      } catch {
        say('No se pudo enviar el mensaje.' + fallback, 'error');
        Sound.play('error');
      } finally {
        sendBtn.disabled = false; sendBtn.textContent = 'Enviar';
      }
    });
    // Un enlace puede pedir un asunto concreto (p. ej. "Oportunidad laboral" desde el CV)
    return { onOpen: opts => { if (opts && opts.subject) form.elements.subject.value = opts.subject; } };
  },

  cv(body) {
    const reader = $('.cv-reader', body), scroll = $('.cv-scroll', body), paper = $('.cv-paper', body);
    const zoomLabel = $('.cv-zoom', body), where = $('.cv-where', body), notesBtn = $('.cv-notes-btn', body);
    const sections = $$('.cv-sec', body), marks = $$('[data-goto]', body);
    const ZOOMS = [.75, .9, 1, 1.15, 1.3, 1.5];
    let z = 2;

    function setZoom(i) {
      z = Math.max(0, Math.min(ZOOMS.length - 1, i));
      paper.style.setProperty('--z', ZOOMS[z]);
      zoomLabel.textContent = Math.round(ZOOMS[z] * 100) + '%';
    }
    $$('[data-zoom]', body).forEach(b => b.addEventListener('click', () => { setZoom(z + +b.dataset.zoom); Sound.play('click'); }));

    notesBtn.addEventListener('click', () => {
      const on = reader.classList.toggle('notes-on');
      notesBtn.classList.toggle('active', on);
      notesBtn.setAttribute('aria-pressed', on);
      Sound.play('click');
    });

    // Marcadores: desplazan hasta la sección y la resaltan como con un marcador fosforescente
    marks.forEach(b => b.addEventListener('click', () => {
      const sec = $(`[data-sec="${b.dataset.goto}"]`, paper);
      scroll.scrollTo({ top: sec.offsetTop - 16, behavior: 'smooth' });
      sec.classList.remove('flash'); void sec.offsetWidth; sec.classList.add('flash');
      Sound.play('click');
    }));

    // Marca en la barra lateral la sección que se está leyendo
    function spy() {
      const y = scroll.scrollTop + scroll.clientHeight * .3;
      let cur = sections[0];
      sections.forEach(s => { if (s.offsetTop <= y) cur = s; });
      if (scroll.scrollTop + scroll.clientHeight >= scroll.scrollHeight - 4) cur = sections[sections.length - 1];
      marks.forEach(m => m.classList.toggle('active', m.dataset.goto === cur.dataset.sec));
      where.textContent = $('h2', cur).textContent;
    }
    scroll.addEventListener('scroll', spy, { passive: true });

    // En pantallas pequeñas la hoja empieza más pequeña para que quepa
    setZoom(isMobile() ? 0 : 2);
    spy();
  },

  bin(body) {
    $('.bin-empty', body).addEventListener('click', e => {
      $('.ex-files', body).innerHTML = '<p class="muted" style="padding:12px">La papelera está vacía.</p>';
      $('.info-bar span', body).textContent = '0 elementos';
      e.currentTarget.disabled = true;
      Sound.play('close');
    });
  }
};

/* =========================================================
   Galerías + visor a pantalla completa
   ========================================================= */
// Escapa el texto que escriben los visitantes antes de ponerlo en el HTML
const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = str => String(str ?? '').replace(/[&<>"']/g, c => ESC[c]);
// Solo se aceptan imágenes propias del sitio, dibujos en base64 o enlaces https
const safeImg = src => /^(data:image\/(png|jpeg|webp);base64,|assets\/|https:\/\/)/.test(src || '') ? src : '';

function renderGallery(el, list, kind) {
  if (!list.length) {
    el.innerHTML = `<div class="gallery-empty">Todavía no hay imágenes en esta galería.</div>`;
    return;
  }
  el.innerHTML = list.map((p, i) => `
    <button class="thumb" data-i="${i}" title="Ver «${esc(p.title)}» en pantalla grande">
      <img src="${esc(safeImg(p.src))}" alt="${esc(kind)}: ${esc(p.title)}" loading="lazy">
      <span>${esc(p.title)}</span>
      ${p.author ? `<small class="by">por ${esc(p.author)}</small>` : ''}
    </button>`).join('');
  el.onclick = e => {
    const t = e.target.closest('.thumb');
    if (t) Viewer.open(list, +t.dataset.i);
  };
}

/* Mensaje flotante breve */
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('out'), 2600);
  setTimeout(() => t.remove(), 3000);
}

/* =========================================================
   Almacén de la Comunidad (Vercel Blob vía /api/dibujos, o este navegador)
   ========================================================= */
const CommunityStore = (() => {
  const LS_KEY = 'oskr-comunidad';
  const shared = /^https?:$/.test(location.protocol);
  // Obras publicadas desde este navegador que la caché de la CDN aún no muestra
  let recent = [];

  function readLocal() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; }
  }

  async function list() {
    if (!shared) return readLocal();
    const r = await fetch(COMMUNITY_API, { headers: { Accept: 'application/json' } });
    if (!r.ok) throw new Error('No se pudieron cargar las obras.');
    const items = await r.json();
    const known = new Set(items.map(it => it.id));
    recent = recent.filter(it => !known.has(it.id));
    return [...recent, ...items];
  }

  async function add({ title, author, image }) {
    const item = { title: title.slice(0, 60), author: author.slice(0, 40), image };
    if (shared) {
      const r = await fetch(COMMUNITY_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(item)
      });
      const res = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(res.error || 'El servidor no aceptó la obra. Inténtalo de nuevo.');
      recent.unshift(res);
      return;
    }
    const items = readLocal();
    items.unshift({ ...item, id: Date.now(), created_at: new Date().toISOString() });
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(items.slice(0, 40)));
    } catch {
      throw new Error('No queda espacio en este navegador para más obras.');
    }
  }

  return { shared, list, add };
})();

const Viewer = (() => {
  const box = $('#viewer'), stage = $('.vw-stage', box), img = $('.vw-img', box);
  const title = $('.vw-title', box), count = $('.vw-count', box);
  const prevBtn = $('.vw-prev', box), nextBtn = $('.vw-next', box), zoomBtn = $('.vw-zoom', box);
  let list = [], i = 0, zoomed = false, lastFocus = null;

  function show() {
    const p = list[i];
    setZoom(false);
    img.classList.add('loading');
    img.onload = () => img.classList.remove('loading');
    img.src = safeImg(p.src);
    img.alt = p.title;
    title.textContent = p.author ? `${p.title} — por ${p.author}` : p.title;
    count.textContent = `${i + 1} de ${list.length}`;
    const many = list.length > 1;
    prevBtn.hidden = nextBtn.hidden = !many;
  }

  function open(l, idx) {
    list = l; i = idx;
    lastFocus = document.activeElement;
    show();
    box.hidden = false;
    requestAnimationFrame(() => box.classList.add('show'));
    Sound.play('open');
    $('.vw-close', box).focus();
  }

  function close() {
    if (box.hidden) return;
    box.classList.remove('show');
    setTimeout(() => { box.hidden = true; img.removeAttribute('src'); }, 200);
    Sound.play('close');
    lastFocus && lastFocus.focus && lastFocus.focus();
  }

  function go(d) {
    if (list.length < 2) return;
    i = (i + d + list.length) % list.length;
    show();
    Sound.play('click');
  }

  // Zoom: la imagen pasa a tamaño real y se puede arrastrar para recorrerla
  function setZoom(on, cx, cy) {
    // Medir la imagen ajustada antes de cambiar al modo ampliado
    const r = img.getBoundingClientRect();
    zoomed = on;
    box.classList.toggle('zoomed', on);
    zoomBtn.textContent = on ? '−' : '+';
    zoomBtn.setAttribute('aria-label', on ? 'Alejar' : 'Ampliar');
    if (on) {
      const fx = cx != null ? (cx - r.left) / r.width : .5;
      const fy = cy != null ? (cy - r.top) / r.height : .5;
      const fitW = r.width;
      const w = Math.max(img.naturalWidth, fitW * 2);
      img.style.width = w + 'px';
      // offsetWidth fuerza el cálculo del nuevo tamaño antes de mover el scroll
      stage.scrollLeft = fx * img.offsetWidth - stage.clientWidth / 2;
      stage.scrollTop = fy * img.offsetHeight - stage.clientHeight / 2;
    } else {
      img.style.width = '';
    }
  }

  // Arrastrar para recorrer cuando hay zoom
  let drag = null, moved = false;
  stage.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    moved = false;
    if (zoomed) {
      drag = { x: e.clientX, y: e.clientY, sl: stage.scrollLeft, st: stage.scrollTop };
      stage.setPointerCapture(e.pointerId);
    }
  });
  stage.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
    stage.scrollLeft = drag.sl - dx;
    stage.scrollTop = drag.st - dy;
  });
  stage.addEventListener('pointerup', () => { drag = null; });
  stage.addEventListener('click', e => {
    if (moved) return;
    if (e.target === img) setZoom(!zoomed, e.clientX, e.clientY);
    else if (!zoomed) close(); // clic en el fondo oscuro cierra
  });

  // Deslizar a los lados en pantallas táctiles
  let tx = null;
  stage.addEventListener('touchstart', e => { tx = zoomed ? null : e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (tx == null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) { moved = true; go(dx < 0 ? 1 : -1); }
    tx = null;
  });

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));
  zoomBtn.addEventListener('click', () => setZoom(!zoomed));
  $('.vw-close', box).addEventListener('click', close);

  function onKey(e) {
    if (box.hidden) return false;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') go(1);
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === '+' || e.key === '=') setZoom(true);
    else if (e.key === '-') setZoom(false);
    else return true; // dejar pasar Tab, etc. pero no a las ventanas
    e.preventDefault();
    return true;
  }

  return { open, close, onKey };
})();

/* =========================================================
   Menú Inicio
   ========================================================= */
const startMenu = $('#start-menu'), startBtn = $('#start-btn'), smSearch = $('#sm-search');

function openStartMenu() {
  startMenu.classList.add('open'); startBtn.classList.add('open');
  startMenu.setAttribute('aria-hidden', 'false');
  Sound.play('click');
  if (!isTouch) setTimeout(() => smSearch.focus(), 50);
}
function closeStartMenu() {
  startMenu.classList.remove('open'); startBtn.classList.remove('open');
  startMenu.setAttribute('aria-hidden', 'true');
  smSearch.value = ''; filterStart('');
}
startBtn.addEventListener('click', e => {
  e.stopPropagation();
  startMenu.classList.contains('open') ? closeStartMenu() : openStartMenu();
});
document.addEventListener('pointerdown', e => {
  if (startMenu.classList.contains('open') && !startMenu.contains(e.target) && !startBtn.contains(e.target)) closeStartMenu();
});

function filterStart(q) {
  q = q.trim().toLowerCase();
  let first = null;
  $$('.sm-item', startMenu).forEach(it => {
    const show = !q || it.textContent.toLowerCase().includes(q);
    it.classList.toggle('hide', !show);
    it.classList.remove('hl');
    if (show && q && !first) first = it;
  });
  first && first.classList.add('hl');
  return first;
}
smSearch.addEventListener('input', () => filterStart(smSearch.value));
smSearch.addEventListener('keydown', e => {
  if (e.key === 'Enter') { const f = filterStart(smSearch.value); f && WM.open(f.dataset.open); }
});

/* =========================================================
   Clics globales: cualquier [data-open] abre su ventana
   ========================================================= */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-open]');
  if (!t || t.classList.contains('icon')) return;
  e.preventDefault();
  WM.open(t.dataset.open, { project: t.dataset.project, subject: t.dataset.subject });
});

// Iconos del escritorio: un clic selecciona, doble clic abre (un toque en pantallas táctiles)
$$('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    $$('.icon').forEach(i => i.classList.toggle('selected', i === icon));
    if (isTouch) WM.open(icon.dataset.open);
  });
  icon.addEventListener('dblclick', () => WM.open(icon.dataset.open));
  icon.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); WM.open(icon.dataset.open); } });
});
$('#desktop').addEventListener('pointerdown', e => {
  if (!e.target.closest('.icon')) $$('.icon').forEach(i => i.classList.remove('selected'));
});

// Teclado: Escape cierra menú; la batería escucha teclas cuando está al frente
document.addEventListener('keydown', e => {
  if (Viewer.onKey(e)) return;
  if (e.key === 'Escape') { closeStartMenu(); return; }
  if (e.target.matches('input, textarea, select')) return;
  const a = WM.active();
  if (a && a.onKey && a.onKey(e)) e.preventDefault();
});

$('#show-desktop').addEventListener('click', () => WM.showDesktop());

/* =========================================================
   Sonido on/off
   ========================================================= */
const soundBtn = $('#sound-btn');
function paintSoundBtn() {
  soundBtn.classList.toggle('muted-snd', !Sound.on);
  soundBtn.title = Sound.on ? 'Sonido activado' : 'Sonido desactivado';
}
soundBtn.addEventListener('click', () => { Sound.toggle(); paintSoundBtn(); Sound.play('click'); });
paintSoundBtn();

/* =========================================================
   Relojes
   ========================================================= */
(function clocks() {
  const ticks = $('#ticks');
  for (let i = 0; i < 12; i++) {
    const a = i * 30 * Math.PI / 180, r1 = i % 3 ? 38 : 34;
    ticks.insertAdjacentHTML('beforeend',
      `<line x1="${50 + Math.sin(a) * r1}" y1="${50 - Math.cos(a) * r1}" x2="${50 + Math.sin(a) * 42}" y2="${50 - Math.cos(a) * 42}" stroke="#4a627a" stroke-width="${i % 3 ? 1.2 : 2.4}" stroke-linecap="round"/>`);
  }
  const hh = $('#hand-h'), mh = $('#hand-m'), shd = $('#hand-s');
  const tt = $('#tb-time'), td = $('#tb-date');
  function tick() {
    const d = new Date();
    const s = d.getSeconds(), m = d.getMinutes() + s / 60, h = (d.getHours() % 12) + m / 60;
    hh.setAttribute('transform', `rotate(${h * 30} 50 50)`);
    mh.setAttribute('transform', `rotate(${m * 6} 50 50)`);
    shd.setAttribute('transform', `rotate(${s * 6} 50 50)`);
    tt.textContent = d.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' });
    td.textContent = d.toLocaleDateString('es', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
  tick(); setInterval(tick, 1000);
})();

/* =========================================================
   Burbujas (mini-juego)
   ========================================================= */
// Siempre activo: en Windows con los efectos de animación apagados el navegador
// pide "reducir movimiento"; ahí las burbujas suben rectas y despacio (ver style.css).
(function bubbles() {
  const box = $('#bubbles'), counter = $('#bubble-count');
  let popped = 0;
  function spawn() {
    if (document.hidden || box.childElementCount > 32) return;
    const b = document.createElement('div');
    const size = 18 + Math.random() * 54;
    b.className = 'bubble';
    Object.assign(b.style, {
      width: size + 'px', height: size + 'px',
      left: (8 + Math.random() * 88) + '%',
      animationDuration: (11 + Math.random() * 12) + 's'
    });
    b.style.setProperty('--dur', b.style.animationDuration);
    b.addEventListener('animationend', () => b.remove());
    b.addEventListener('pointerdown', e => {
      e.stopPropagation();
      if (b.classList.contains('pop')) return;
      b.classList.add('pop');
      Sound.play('pop');
      counter.textContent = ++popped;
    });
    box.appendChild(b);
  }
  for (let i = 0; i < 10; i++) setTimeout(spawn, i * 300);
  setInterval(spawn, 650);
})();

/* =========================================================
   Modo noche: ciudad lluviosa con neones + cambio de tema
   ========================================================= */
const NightScene = (() => {
  const scene = $('.scene.night');
  const farCv = $('.n-city.far canvas'), nearCv = $('.n-city.near canvas');
  const signsBox = $('.n-signs'), rainCv = $('.n-rain');
  const NEON = ['#fcee0a', '#00f0ff', '#ff2a6d', '#b967ff', '#ff003c'];
  const SIGNS_V = ['オスカー', 'ネオン', '夜の雨', 'ラーメン', '電脳', 'バー'];
  const SIGNS_H = ['OSKR', 'HOTEL', '24/7', 'BAR', 'NEO', 'RAMEN'];
  let drawnFor = '', running = false, raf = 0;

  // Aleatorio con semilla: la ciudad sale igual cada vez que se dibuja
  function seeded(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }

  function fit(cv) {
    const r = cv.parentElement.getBoundingClientRect();
    const d = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.max(1, Math.round(r.width * d));
    cv.height = Math.max(1, Math.round(r.height * d));
    const c = cv.getContext('2d');
    c.setTransform(d, 0, 0, d, 0, 0);
    return [c, r.width, r.height];
  }

  // Ventanas encendidas: cálidas, frías o rosadas
  function windowColor(R, a) {
    const k = R();
    const rgb = k < .5 ? '255,196,120' : k < .8 ? '120,220,255' : '255,120,220';
    return `rgba(${rgb},${a})`;
  }

  function drawFar() {
    const [c, w, h] = fit(farCv), R = seeded(7);
    c.clearRect(0, 0, w, h);
    for (let x = -10; x < w;) {
      const bw = 26 + R() * 64, bh = h * (.22 + R() * .7), top = h - bh;
      const g = c.createLinearGradient(0, top, 0, h);
      g.addColorStop(0, '#2c1a4c'); g.addColorStop(1, '#170d2c');
      c.fillStyle = g; c.fillRect(x, top, bw, bh);
      if (R() < .35) { // antena con luz roja
        const ah = 14 + R() * 30;
        c.fillStyle = '#2c1a4c'; c.fillRect(x + bw / 2 - 1, top - ah, 2, ah);
        c.fillStyle = '#ff2a6d'; c.shadowColor = '#ff2a6d'; c.shadowBlur = 8;
        c.fillRect(x + bw / 2 - 1.5, top - ah - 2, 3, 3); c.shadowBlur = 0;
      }
      for (let y = top + 8; y < h - 6; y += 7)
        for (let wx = x + 4; wx < x + bw - 4; wx += 6)
          if (R() < .16) { c.fillStyle = windowColor(R, .15 + R() * .35); c.fillRect(wx, y, 3, 3); }
      x += bw + R() * 5;
    }
  }

  function drawNear() {
    const [c, w, h] = fit(nearCv), R = seeded(42);
    const ground = h * .72;
    // Los edificios se dibujan aparte para poder reflejarlos en la calle
    const off = document.createElement('canvas');
    off.width = nearCv.width; off.height = nearCv.height;
    const o = off.getContext('2d');
    o.setTransform(nearCv.width / w, 0, 0, nearCv.height / h, 0, 0);

    const signs = [];
    for (let x = -10; x < w;) {
      const bw = 60 + R() * 110, bh = ground * (.32 + R() * .6), top = ground - bh;
      const g = o.createLinearGradient(0, top, 0, ground);
      g.addColorStop(0, '#120a22'); g.addColorStop(1, '#06030c');
      o.fillStyle = g; o.fillRect(x, top, bw, bh);
      // Borde iluminado por los neones
      const rim = NEON[Math.floor(R() * NEON.length)];
      o.fillStyle = rim; o.globalAlpha = .35; o.fillRect(x, top, 1.5, bh); o.fillRect(x, top, bw, 1.5); o.globalAlpha = 1;
      // Ventanas
      for (let y = top + 12; y < ground - 14; y += 15)
        for (let wx = x + 8; wx < x + bw - 10; wx += 13)
          if (R() < .2) {
            o.fillStyle = windowColor(R, .35 + R() * .5);
            o.shadowColor = o.fillStyle; o.shadowBlur = 6;
            o.fillRect(wx, y, 6, 8); o.shadowBlur = 0;
          }
      // Letrero de neón
      if (bw > 70 && R() < .55) {
        const color = NEON[Math.floor(R() * NEON.length)];
        const vertical = R() < .55;
        const sw = vertical ? 24 : 54 + R() * 40, sh = vertical ? 80 + R() * 70 : 24;
        const sx = x + 8 + R() * Math.max(1, bw - sw - 16);
        const sy = top + 16 + R() * Math.max(1, Math.min(bh - sh - 40, 160));
        if (sy + sh < ground - 10) {
          signs.push({ x: sx, y: sy, w: sw, h: sh, color, vertical, flick: R() < .4,
            text: vertical ? SIGNS_V[signs.length % SIGNS_V.length] : SIGNS_H[signs.length % SIGNS_H.length] });
          // Halo del letrero (también se refleja en la calle)
          o.fillStyle = color; o.shadowColor = color; o.shadowBlur = 40; o.globalAlpha = .45;
          o.fillRect(sx, sy, sw, sh); o.globalAlpha = 1; o.shadowBlur = 0;
        }
      }
      x += bw + R() * 4;
    }

    // Calle mojada: fondo, reflejo invertido y difuminado de la ciudad, y luces en los charcos
    c.clearRect(0, 0, w, h);
    const sg = c.createLinearGradient(0, ground, 0, h);
    sg.addColorStop(0, '#140a24'); sg.addColorStop(1, '#030107');
    c.fillStyle = sg; c.fillRect(0, ground, w, h - ground);
    c.save();
    c.globalAlpha = .4; c.filter = 'blur(3px)';
    const k = .7;
    c.translate(0, ground * (1 + k)); c.scale(1, -k);
    c.drawImage(off, 0, 0, w, h);
    c.restore();
    const fade = c.createLinearGradient(0, ground, 0, h);
    fade.addColorStop(0, 'rgba(3,1,7,0)'); fade.addColorStop(1, 'rgba(3,1,7,.85)');
    c.fillStyle = fade; c.fillRect(0, ground, w, h - ground);
    c.drawImage(off, 0, 0, w, h);
    // Bordillo con luz cian
    c.fillStyle = 'rgba(0,240,255,.35)'; c.fillRect(0, ground, w, 1.5);

    // Letreros como elementos para que puedan parpadear. En porcentajes:
    // si el canvas se estira, siguen alineados con su resplandor.
    const pct = (v, total) => (v / total * 100).toFixed(3) + '%';
    signsBox.innerHTML = signs.map(s =>
      `<i class="neon${s.vertical ? ' v' : ''}${s.flick ? ' flick' : ''}" style="left:${pct(s.x, w)};top:${pct(s.y, h)};width:${pct(s.w, w)};height:${pct(s.h, h)};--c:${s.color};animation-delay:${(-s.x % 7).toFixed(1)}s">${s.text}</i>`
    ).join('');
  }

  function drawCity() {
    const r = nearCv.parentElement.getBoundingClientRect();
    const key = Math.round(r.width) + 'x' + Math.round(r.height);
    if (key === drawnFor) return;
    drawnFor = key;
    drawFar(); drawNear();
  }

  /* ---- Lluvia ---- */
  const rc = rainCv.getContext('2d');
  let W = 0, H = 0, drops = [], splashes = [], last = 0;
  const WIND = .2;

  function newDrop(anywhere) {
    const z = Math.random();
    return {
      x: Math.random() * (W + 200) - 150,
      y: anywhere ? Math.random() * H : -30 - Math.random() * 120,
      z, len: 12 + z * 26, speed: 650 + z * 750,
      floor: H * (.86 + z * .14)
    };
  }
  function sizeRain() {
    W = rainCv.width = rainCv.clientWidth;
    H = rainCv.height = rainCv.clientHeight;
    const n = Math.min(520, Math.round(W * H / 4200));
    drops = Array.from({ length: n }, () => newDrop(true));
    splashes = [];
  }

  function frame(t) {
    const dt = Math.min((t - last) / 1000 || 0, .05);
    last = t;
    rc.clearRect(0, 0, W, H);
    rc.lineCap = 'round';
    // Tres capas de profundidad: lejos (finas y tenues) a cerca (gruesas y brillantes)
    for (let layer = 0; layer < 3; layer++) {
      rc.beginPath();
      rc.strokeStyle = `rgba(200,225,255,${.14 + layer * .12})`;
      rc.lineWidth = .7 + layer * .55;
      for (const d of drops) {
        if (Math.min(2, Math.floor(d.z * 3)) !== layer) continue;
        const step = d.speed * dt;
        d.y += step; d.x += step * WIND;
        if (d.y > d.floor) {
          if (d.z > .45) splashes.push({ x: d.x, y: d.floor, r: 1, a: .5 });
          Object.assign(d, newDrop(false));
          continue;
        }
        rc.moveTo(d.x, d.y);
        rc.lineTo(d.x - d.len * WIND, d.y - d.len);
      }
      rc.stroke();
    }
    // Salpicaduras en la calle
    rc.lineWidth = 1;
    for (let i = splashes.length - 1; i >= 0; i--) {
      const s = splashes[i];
      s.r += 26 * dt; s.a -= 1.5 * dt;
      if (s.a <= 0) { splashes.splice(i, 1); continue; }
      rc.strokeStyle = `rgba(160,235,255,${s.a})`;
      rc.beginPath(); rc.ellipse(s.x, s.y, s.r * 2.2, s.r * .6, 0, 0, Math.PI * 2); rc.stroke();
    }
    raf = running && !document.hidden ? requestAnimationFrame(frame) : 0;
  }

  function start() {
    running = true;
    drawCity();
    if (!W) sizeRain();
    if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
  }
  function stop() {
    running = false;
    // La lluvia sigue mientras dura el fundido y luego se detiene
    setTimeout(() => { if (!running) { cancelAnimationFrame(raf); raf = 0; } }, 1500);
  }

  // Redibuja cuando cambia el tamaño del fondo (ventana, zoom, rotar el celular)
  let resizeT = 0;
  new ResizeObserver(() => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => { if (running) { drawCity(); sizeRain(); } else { drawnFor = ''; W = 0; } }, 150);
  }).observe($('.wallpaper'));
  document.addEventListener('visibilitychange', () => {
    if (running && !document.hidden && !raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
  });

  return { start, stop };
})();

const Theme = (() => {
  const root = document.documentElement, btn = $('#theme-btn');
  const isNight = () => root.classList.contains('night');

  function paint() {
    const n = isNight();
    const label = n ? 'Cambiar a modo día' : 'Cambiar a modo noche';
    btn.title = label; btn.setAttribute('aria-label', label);
    $('use', btn).setAttribute('href', n ? '#i-sun' : '#i-moon');
  }
  function set(night) {
    root.classList.toggle('night', night);
    try { localStorage.setItem('oskr-theme', night ? 'night' : 'day'); } catch (e) {}
    night ? NightScene.start() : NightScene.stop();
    paint();
  }

  btn.addEventListener('click', () => { set(!isNight()); Sound.play('click'); });
  paint();
  if (isNight()) NightScene.start();
  return { set, isNight };
})();

/* =========================================================
   Fondo con paralaje: las capas siguen al mouse con suavidad
   ========================================================= */
(function parallax() {
  if (isTouch || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const wp = $('.wallpaper');
  let tx = 0, ty = 0, x = 0, y = 0, raf = 0;

  function step() {
    // Se acerca un poco al objetivo en cada cuadro para que el movimiento sea suave
    x += (tx - x) * .07;
    y += (ty - y) * .07;
    wp.style.setProperty('--px', x.toFixed(4));
    wp.style.setProperty('--py', y.toFixed(4));
    raf = Math.abs(tx - x) + Math.abs(ty - y) > .001 ? requestAnimationFrame(step) : 0;
  }
  function aim(nx, ny) {
    tx = nx; ty = ny;
    if (!raf) raf = requestAnimationFrame(step);
  }
  document.addEventListener('pointermove', e => {
    aim(e.clientX / innerWidth * 2 - 1, e.clientY / innerHeight * 2 - 1);
  }, { passive: true });
  // Al salir de la ventana del navegador, el fondo vuelve al centro
  document.documentElement.addEventListener('pointerleave', () => aim(0, 0));
})();

/* =========================================================
   Apagar / encender
   ========================================================= */
const shutdownScreen = $('#shutdown-screen');
$('#shutdown').addEventListener('click', () => {
  closeStartMenu();
  Sound.play('close');
  shutdownScreen.classList.add('show');
  shutdownScreen.setAttribute('aria-hidden', 'false');
});
$('#power-on').addEventListener('click', () => {
  sessionStorage.removeItem('oskr-booted');
  location.hash = '';
  location.reload();
});

/* =========================================================
   Arranque
   ========================================================= */
(function boot() {
  const bootEl = $('#boot'), welcome = $('#welcome');
  const initialApp = HASH_TO_APP[location.hash.slice(1)];

  function ready() {
    WM.open(initialApp || 'about');
  }

  if (sessionStorage.getItem('oskr-booted') || initialApp) {
    bootEl.remove(); welcome.remove();
    ready();
    return;
  }
  sessionStorage.setItem('oskr-booted', '1');

  let done = false;
  function finish() {
    if (done) return; done = true;
    Sound.play('startup');
    bootEl.classList.add('hidden-fade');
    welcome.classList.add('show');
    setTimeout(() => {
      welcome.classList.remove('show');
      setTimeout(() => { bootEl.remove(); welcome.remove(); ready(); }, 500);
    }, 1300);
  }
  bootEl.addEventListener('click', finish);
  setTimeout(finish, 2200);
})();

window.addEventListener('hashchange', () => {
  const app = HASH_TO_APP[location.hash.slice(1)];
  if (app) WM.open(app);
});
