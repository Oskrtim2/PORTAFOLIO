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

