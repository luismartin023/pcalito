# PCalito

Sitio web de PCalito, una tienda de computadoras en Verón, Punta Cana.
Venta de laptops y PCs, taller de reparación y PCs gamer armadas.

- Sitio publicado: https://luismartin023.github.io/pcalito/
- Autor: Luis Martin Peña Mejia · 2023-4341 · ISW-311 Tecnologías de Internet I

## Páginas

- `index.html` — inicio: quiénes somos, qué ofrecemos, la noticia de la vitrina y el truco del día
- `servicios.html` — las listas del taller, el glosario, la tabla de precios, la fachada, el mapa y el saludo
- `contacto.html` — el formulario completo y el contacto directo

## Mapa de etiquetas

| Familia | Dónde se usó | Por qué esa etiqueta |
|---|---|---|
| Cimientos | Las 3 páginas: doctype, `lang="es"`, charset, viewport, `title` y `description` propios | Es lo mínimo que lleva cualquier HTML5; cada página dice quién es |
| Semántica | `header`/`nav`/`main`/`footer` en las 3; `article` para la noticia; `aside` para el truco y el audio | La noticia se entiende sola aunque la saques de contexto; el aside es extra, no el tema |
| Encabezados | Un `h1` por página, `h2` por sección | Jerarquía sin saltos; el lector de pantalla navega por títulos |
| Texto | `strong` lo importante, `em` el tono, `mark` los resaltados, `del`/`ins` la promo, `abbr` siglas (LAN, GPU, SSD, RAM, NVMe), `q` la regla de la tienda, `time` las fechas, `small` el copyright | Cada una dice algo distinto: `del`/`ins` muestran el precio viejo y el nuevo, `abbr` explica la sigla al pasar el mouse |
| Citas | `blockquote`+`cite` la opinión del cliente; `q` la regla de la tienda | La cita larga va en bloque con su fuente; la corta va dentro del párrafo |
| Listas | `ul` con sublista dentro del `li` (servicios y sus subtareas); `ol reversed` el top 5; `dl` el glosario | La sublista copia la jerarquía real; `reversed` da la cuenta 5→1; `dl` es la etiqueta de término y definición |
| Enlaces | El `nav` igual en las 3; externo a amd.com con `_blank`+`noopener`; `mailto`, `tel`, `#directo` interno, `download` el PDF | `noopener` protege la página; `mailto`/`tel` abren la app correcta; `download` baja el archivo |
| Multimedia | `img` SVG propio con `alt`; `figure`+`figcaption` la fachada; `iframe`+`title` el mapa; `audio controls`+`source` el saludo | `figure` pega la imagen con su leyenda; el `title` hace accesible el iframe; `controls` da el reproductor nativo |
| Tablas | La de precios: `caption`, `thead` con `scope="col"`, `th scope="rowgroup"` con `rowspan`, `tfoot` con `colspan` | `scope` dice qué cubre cada encabezado; `rowspan`/`colspan` juntan celdas que comparten grupo |
| Formularios | 2 `fieldset`/`legend`, 10 tipos de `input`, `select`+`optgroup`, `radio`, `checkbox`, `textarea`, `button`, `label` con `for`/`id` | Cada input valida solo con su tipo; el `label for` conecta el texto con el campo |
| Interactivas | `details`/`summary` en las preguntas frecuentes | Acordeón nativo sin una línea de JavaScript |
