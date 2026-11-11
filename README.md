# OskrOS · Portafolio de Oscar Timaran

Portafolio interactivo con forma de escritorio de **Windows 7** y estética **Frutiger Aero**.

Ingeniero de software, tatuador y baterista.

## Qué hay dentro

- **Escritorio** con ventanas que se arrastran, minimizan y maximizan, barra de tareas, menú Inicio y gadgets.
- **Sobre mí**: quién soy, mi lado artístico y musical.
- **CV.pdf**: mi hoja de vida (formato Harvard) en un lector de documentos con marcadores, zoom, descarga del PDF y notas adhesivas que llevan a mis proyectos. El PDF original está en `assets/docs/`.
- **Proyectos**: explorador de archivos con ContextFlow, WallSense, SmartStencil, LexiLearn, Dakingo Bakery, Flex, Glass Player y Cyber Player 2000.
- **Tatuajes** y **Dibujos**: galerías con visor a pantalla completa (zoom, flechas, deslizar en móvil).
- **Habilidades** y **Hobbies**: paneles con lo que sé hacer y lo que me gusta.
- **Paint**: lienzo para dibujar, guardar en PNG y publicar en la Comunidad.
- **Comunidad**: los visitantes publican sus dibujos de Paint con nombre de la obra y firma.
  Un globo junto al reloj y las etiquetas "¡Dibuja!" y "¡Publica!" invitan a participar.
- **Contacto**: formulario que envía los mensajes a mi correo.
- **Modo noche**: botón de luna junto al reloj; cambia el fondo a una ciudad lluviosa con neones
  y oscurece las ventanas. La elección se guarda en el navegador.
- Burbujas para reventar, sonidos sintetizados y pantalla de arranque.

## Tecnología

- **HTML y JavaScript** sin frameworks.
- **CSS**: `style.css`, escrito a mano, tiene el aspecto Aero de todo el escritorio.
- **Tailwind CSS v4**: las ventanas **Contacto**, **Habilidades** y **Papelera** están hechas con sus clases.
  La configuración está en `tailwind/entrada.css` y genera `tailwind.css`.
  Va sin Preflight (el reseteo de Tailwind) para no cambiar el resto del diseño, y tiene una variante `night:` para el modo noche.
- **Vercel**: aloja el sitio y la función `api/dibujos.js` de la Comunidad (Vercel Blob).

## Correr en local

```bash
python -m http.server 8000
# abrir http://localhost:8000
```

### Tailwind

```bash
npm install          # una sola vez
npm run tw:watch     # mientras editas: regenera tailwind.css al guardar
npm run tw:build     # versión final (minificada)
```

`tailwind.css` se sube al repositorio: si cambias clases de Tailwind en `index.html` o `script.js`,
ejecuta `npm run tw:build` antes de hacer commit.

## Agregar tatuajes o dibujos

1. Copia la imagen a `assets/images/tatuajes/` o `assets/images/dibujos/` (sin espacios ni tildes en el nombre).
2. Añade una línea `{ src, title }` en `TATTOO_PHOTOS` o `DRAWINGS`, al inicio de `script.js`.

Las fotos originales (sin optimizar) no van en el repositorio.

## Comunidad (Vercel Blob)

Las obras que los visitantes publican desde Paint se guardan en el Blob store
**portafolio-comunidad** (Vercel → Storage) a través de `api/dibujos.js`.
Todos los visitantes ven la misma galería (las 60 obras más recientes).

- Cada obra es un único JPEG en `comunidad/`; el título y el autor van codificados en el nombre del archivo.
- **Moderar:** Vercel → Storage → portafolio-comunidad → Browser, y borra el archivo de la obra.
  Desaparece de la galería en menos de un minuto.
- Para probar en local con la galería real: `vercel env pull` y `vercel dev`.
  Abriendo `index.html` directamente, las obras se guardan solo en ese navegador.

## Formulario de contacto (Web3Forms)

Los mensajes llegan a `oscartimaran60@gmail.com` con [Web3Forms](https://web3forms.com)
(gratis: 250 mensajes al mes), sin servidor propio.

- La clave `WEB3FORMS_KEY`, al inicio de `script.js`, se pide en web3forms.com con ese correo.
  Puede ir en el código: solo permite enviar mensajes a ese correo.
- Llegan con el asunto `[Portafolio] <asunto> — <nombre>`; "Responder" en Gmail contesta directo al visitante.
- Para cambiar el correo destino hay que pedir una clave nueva con el otro correo.
