# DI Digital Studio — Kit de Marca Digital

Todo lo necesario para lanzar la presencia digital: **landing web** + **kit de Instagram** (8 posts + 5 destacadas + copys).

---

## 📁 Estructura

```
DI Digital Studio.html      ← canvas de presentación (entrada principal)
logo-variants.html          ← variantes del logo (monogramas, colores)

brand/
  di-logo.svg               ← isotipo oficial (vector, usá este)

shared/
  tokens.css                ← variables CSS (colores, tipos, spacing)
  logo.jsx                  ← componente React del logo (<DILogoMark />)

web/
  landing.html              ← landing principal
  landing.css               ← estilos
  landing.jsx               ← secciones en React

instagram/
  instagram-kit.html        ← vista del kit completo (perfil + posts + highlights)
  export.html               ← exportar todos los PNGs (⬇ Descargar .zip)
  frame.html                ← frame individual (uso interno)
  captions.md               ← copys listos para pegar en IG
  ig-components.jsx         ← los 13 diseños
  ig.css                    ← estilos IG
```

---

## 🚀 Deploy del sitio web

### Opción 1 — Netlify / Vercel (recomendado)

1. Abrí `web/landing.html` localmente para revisar
2. Arrastrá la carpeta **completa del proyecto** a [app.netlify.com/drop](https://app.netlify.com/drop)
3. Configurá el dominio custom → apuntá `didigital.studio` a los nameservers de Netlify
4. En Netlify dashboard → Site settings → Build & deploy → configurá `web/landing.html` como página de inicio, o renombralo a `index.html`

### Opción 2 — Hosting estático propio

1. Subí las carpetas `brand/`, `shared/`, `web/` al hosting
2. Renombrá `web/landing.html` → `index.html` y movelo a la raíz
3. Ajustá las rutas relativas en `index.html`:
   - `../shared/tokens.css` → `shared/tokens.css`
   - `../brand/di-logo.svg` → `brand/di-logo.svg`
   - `../shared/logo.jsx` → `shared/logo.jsx`
   - `landing.css` → `web/landing.css`
   - `landing.jsx` → `web/landing.jsx`

### Dominio

Apuntar `didigital.studio` (A record o CNAME según proveedor de hosting).

---

## 📸 Exportar el kit de Instagram

1. Abrí `instagram/export.html` en Chrome/Edge (no Safari — mejor soporte de `html-to-image`)
2. Clic en **⬇ Descargar todo (.zip)** → genera los 13 PNGs a resolución final:
   - **8 posts** · 1080×1350 px (formato 4:5, el más grande que permite IG en feed)
   - **5 destacadas** · 1080×1080 px (cuadrado)
3. Si falla el zip (memoria del navegador), usá **PNGs individuales** — los descarga uno por uno

Los PNGs ya vienen nombrados: `post-01-manifiesto.png`, `highlight-03-casos.png`, etc.

---

## 📝 Publicar en Instagram

### Orden sugerido de posteo

1. **Post 01 · Manifiesto** — fijalo al perfil (pin)
2. **Post 07 · Proceso** — segundo pin
3. **Post 08 · CTA** — tercer pin
4. Resto en cadencia 2-3 por semana

### Cómo usar las destacadas

1. Subí 1 story cualquiera (puede ser un color plano)
2. Guardala como destacada
3. Editá la destacada → cambiá la portada → subí el PNG correspondiente:
   - `highlight-01-servicios.png` → título "Servicios"
   - `highlight-02-proceso.png` → título "Proceso"
   - `highlight-03-casos.png` → título "Casos"
   - `highlight-04-ia.png` → título "IA · Tips"
   - `highlight-05-contacto.png` → título "Contacto"

Después vas agregando stories reales dentro de cada destacada (sugerencias de contenido en `instagram/captions.md`).

### Bio y handle

Todo en `instagram/captions.md` — copy bio, sugerencia de handle (`@di.digitalstudio`), link in bio (`didigital.studio`).

### Copys

Los 8 captions (uno por post) están en `instagram/captions.md` — listos para pegar, con hashtags al final. Tono rioplatense, 1 CTA por post.

---

## 🎨 Tokens de marca (referencia rápida)

| Token | Valor |
|---|---|
| Violeta primario | `#a78bfa` |
| Cian acento | `#22d3ee` |
| Rosa acento | `#ec4899` |
| Fondo oscuro | `#07070b` |
| Texto | `#f5f5f7` |
| Tipo display | Inter (300-800) |
| Tipo mono | JetBrains Mono |

Definiciones completas en `shared/tokens.css`.

---

## 📬 Contacto (tuyo)

- 📧 `desa.baires@gmail.com`
- 💬 WhatsApp `+54 9 358 424 8863`
- 🌐 `didigital.studio`

---

## 🛠 Editar los diseños

- **Textos de posts / highlights**: `instagram/ig-components.jsx`
- **Textos de la web**: `web/landing.jsx`
- **Colores / tipos**: `shared/tokens.css` (cambia en todas partes a la vez)
- **Logo**: `brand/di-logo.svg` (si lo reemplazás, actualizá también `shared/logo.jsx`)
