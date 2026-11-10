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

