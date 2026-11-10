# Comunidad compartida con Supabase

Sin configurar, cada dibujo publicado se guarda solo en el navegador de quien lo hizo.
Para que todos los visitantes vean las obras de todos:

1. Crea una cuenta y un proyecto gratis en https://supabase.com
2. En el proyecto, abre **SQL Editor**, pega esto y pulsa **Run**:

```sql
create table public.dibujos (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  title       text not null check (char_length(title)  between 1 and 60),
  author      text not null check (char_length(author) between 1 and 40),
  image       text not null check (image like 'data:image/jpeg;base64,%' and char_length(image) < 600000)
);

alter table public.dibujos enable row level security;

-- Cualquiera puede ver las obras
create policy "ver obras" on public.dibujos
  for select to anon using (true);

-- Cualquiera puede publicar (pero no editar ni borrar)
create policy "publicar obras" on public.dibujos
  for insert to anon with check (true);
```

3. Ve a **Project Settings → API** y copia:
   - **Project URL**
   - **anon public key**
4. Pégalos al inicio de `script.js`:

```js
const COMMUNITY = {
  supabaseUrl: 'https://TU-PROYECTO.supabase.co',
  supabaseKey: 'TU-ANON-KEY',
  table: 'dibujos'
};
```

La anon key es pública por diseño. La seguridad la dan las reglas de arriba:
los visitantes solo pueden leer y publicar, no borrar ni modificar.

**Moderar:** para borrar una obra inapropiada, entra a **Table Editor → dibujos**
en Supabase y elimina la fila.
