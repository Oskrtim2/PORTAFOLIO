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

## Formulario de contacto (Web3Forms)

El formulario envía los mensajes a `oscartimaran60@gmail.com` con
[Web3Forms](https://web3forms.com), sin servidor propio (gratis: 250 mensajes al mes).

- La clave (`WEB3FORMS_KEY` al inicio de `script.js`) se pide en web3forms.com
  con ese correo y llega a la bandeja de entrada. Puede ir en el código: solo
  permite enviar mensajes a ese correo.
- Los mensajes llegan con asunto `[Portafolio] <asunto> — <nombre>`; al pulsar
  "Responder" en Gmail se responde directo al correo del visitante.
- Para cambiar el correo destino hay que pedir una clave nueva con el otro correo.
