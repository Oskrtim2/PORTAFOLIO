# OskrOS · Portafolio de Oscar Timaran

Portafolio interactivo con forma de escritorio de **Windows 7** y estética **Frutiger Aero**.

Ingeniero de software, tatuador y baterista.

## Qué hay dentro

- **Escritorio** con ventanas que se arrastran, minimizan y maximizan, barra de tareas, menú Inicio y gadgets.
- **Sobre mí**: quién soy, mi lado artístico y musical.
- **CV.pdf**: mi hoja de vida (formato Harvard) en un lector de documentos con marcadores, zoom, descarga del PDF y notas adhesivas que llevan a mis proyectos. El PDF original está en `assets/docs/`.
- **Proyectos**: explorador de archivos con LexiLearn, ContextFlow, SmartStencil y Cyber Player 2000.
- **Tatuajes** y **Dibujos**: galerías con visor a pantalla completa (zoom, flechas, deslizar en móvil).
- **Paint**: lienzo para dibujar y guardar en PNG.
- **Comunidad**: los visitantes publican sus dibujos de Paint con nombre de la obra y firma.
- Burbujas para reventar, sonidos sintetizados y pantalla de arranque.

## Tecnología

HTML, CSS y JavaScript puros. Sin dependencias ni paso de compilación.

## Correr en local

```bash
python -m http.server 8000
# abrir http://localhost:8000
```

## Agregar tatuajes o dibujos

1. Copia la imagen a `assets/images/tatuajes/` o `assets/images/dibujos/` (sin espacios ni tildes en el nombre).
2. Añade una línea `{ src, title }` en `TATTOO_PHOTOS` o `DRAWINGS`, al inicio de `script.js`.

## Comunidad compartida

Por defecto las obras se guardan en el navegador de cada visitante.
Para que todos vean las obras de todos, sigue [COMUNIDAD-SUPABASE.md](COMUNIDAD-SUPABASE.md).
