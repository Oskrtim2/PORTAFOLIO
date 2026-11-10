// Galería de la Comunidad: guarda y lista los dibujos de los visitantes en Vercel Blob.
//
// Cada obra es un solo archivo JPEG. El título y el autor van codificados en el
// nombre del archivo, así una sola llamada a list() trae toda la galería.
// Moderar: en Vercel → Storage → portafolio-comunidad, borra el archivo de la obra.

import { list, put } from '@vercel/blob';

const PREFIX = 'comunidad/';
const MAX_ITEMS = 60;
const MAX_IMAGE_BYTES = 450 * 1024; // un dibujo de 900 px en JPEG pesa ~60-200 KB

const toB64Url = text => Buffer.from(text, 'utf8').toString('base64url');
const fromB64Url = text => Buffer.from(text, 'base64url').toString('utf8');

function cleanText(value, max) {
  return String(value ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

// comunidad/<timestamp>-<aleatorio>--<base64url({t,a})>.jpg
function parse(blob) {
  const m = /^comunidad\/(\d{13})-[a-z0-9]+--([A-Za-z0-9_-]+)\.jpg$/.exec(blob.pathname);
  if (!m) return null;
  try {
    const meta = JSON.parse(fromB64Url(m[2]));
    return {
      id: blob.pathname,
      title: cleanText(meta.t, 60) || 'Sin título',
      author: cleanText(meta.a, 40) || 'Anónimo',
      image: blob.url,
      created_at: new Date(Number(m[1])).toISOString()
    };
  } catch {
    return null;
  }
}

async function listDrawings() {
  const all = [];
  let cursor;
  do {
    const page = await list({ prefix: PREFIX, limit: 1000, cursor });
    all.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor && all.length < 5000);

  return all
    .map(parse)
    .filter(Boolean)
    .sort((a, b) => b.created_at.localeCompare(a.created_at))
    .slice(0, MAX_ITEMS);
}

async function addDrawing(body) {
  const title = cleanText(body?.title, 60);
  const author = cleanText(body?.author, 40);
  const image = String(body?.image ?? '');

  if (!title) return [400, 'Escribe el nombre de la obra.'];
  if (!author) return [400, 'Firma tu obra con tu nombre o alias.'];

  const m = /^data:image\/jpeg;base64,([A-Za-z0-9+/=]+)$/.exec(image);
  if (!m) return [400, 'La imagen no es válida.'];

  const bytes = Buffer.from(m[1], 'base64');
  const isJpeg = bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (!isJpeg) return [400, 'La imagen no es válida.'];
  if (bytes.length > MAX_IMAGE_BYTES) return [413, 'La obra pesa demasiado.'];

  const stamp = String(Date.now()).padStart(13, '0');
  const rand = Math.random().toString(36).slice(2, 8);
  const pathname = `${PREFIX}${stamp}-${rand}--${toB64Url(JSON.stringify({ t: title, a: author }))}.jpg`;

  const blob = await put(pathname, bytes, {
    access: 'public',
    contentType: 'image/jpeg',
    addRandomSuffix: false,
    cacheControlMaxAge: 31536000
  });

  return [201, parse({ pathname: blob.pathname, url: blob.url })];
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const items = await listDrawings();
      // Caché corta en la CDN: ahorra operaciones de Blob con muchos visitantes.
      // Quien acaba de publicar ve su obra al instante (el navegador la agrega).
      res.setHeader('Cache-Control', 'public, s-maxage=20, stale-while-revalidate=300');
      return res.status(200).json(items);
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const [status, result] = await addDrawing(body);
      if (status >= 400) return res.status(status).json({ error: result });
      return res.status(status).json(result);
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Método no permitido.' });
  } catch (error) {
    console.error('dibujos:', error);
    return res.status(500).json({ error: 'No se pudo completar la operación. Inténtalo de nuevo.' });
  }
}
