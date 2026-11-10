# Comunidad y contacto

## Dibujos de la Comunidad (Vercel Blob)

Las obras que los visitantes publican desde Paint se guardan en el Blob store
**portafolio-comunidad** (Vercel → Storage), a través de la función `api/dibujos.js`.
Todos los visitantes ven la misma galería (las 60 obras más recientes).

- Cada obra es un único archivo JPEG en `comunidad/`. El título y el autor van
  codificados en el nombre del archivo.
- **Moderar:** Vercel → Storage → portafolio-comunidad → Browser, y borra el
  archivo de la obra. Desaparece de la galería en menos de un minuto.
- El token `BLOB_READ_WRITE_TOKEN` lo agrega Vercel solo al proyecto. Para probar
  en local: `vercel env pull` y `vercel dev`.
- Abriendo `index.html` directamente (file://) las obras se guardan solo en ese navegador.

## Formulario de contacto (FormSubmit)

El formulario envía los mensajes a `oscartimaran60@gmail.com` con
[FormSubmit](https://formsubmit.co), sin servidor propio ni claves.

- **Activación (una sola vez):** el primer mensaje enviado desde la web hace que
  llegue a ese correo un email de FormSubmit "Activate Form". Pulsa el botón de
  ese email; desde entonces todos los mensajes llegan a la bandeja de entrada.
- Para cambiar el correo destino, edita `CONTACT_EMAIL` al inicio de `script.js`
  (habrá que activarlo de nuevo).
