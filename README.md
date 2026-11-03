# PCalito

Sitio de PCalito, una tienda de computadoras en Verón, Punta Cana.

Luis Martin Peña Mejia · 2023-4341 · ISW-311 Tecnologías de Internet I

Sitio publicado: [https://luismartin023.github.io/pcalito/](https://luismartin023.github.io/pcalito/)

## Páginas

- `index.html` inicio
- `servicios.html` servicios, listas, tabla de precios y multimedia
- `contacto.html` formulario y contacto directo

## Mapa de etiquetas

| Familia | Dónde la usé | Por qué |
|---|---|---|
| Cimientos | el `head` de las 3 páginas | doctype, `lang="es"`, charset, viewport, `title` y `description` propios en cada una |
| Encabezados y párrafos | un `h1` por página y `h2` por sección, `p` para el texto | ordenar sin saltar niveles |
| Texto, citas y código | index y servicios: `strong`, `em`, `mark`, `del`/`ins`, `abbr`, `small`, `q`, `time`, `blockquote`+`cite` | precios tachados, siglas como GPU, citas de clientes y fechas con su `datetime` |
| Listas | servicios: `ul` con sublista, `ol reversed` el top 5, `dl` el glosario | la sublista va dentro del `li` padre; `dl` es para término/definición |
| Enlaces | contacto, sección contacto directo y el `nav` | `mailto`, `tel`, `download` del PDF, externo con `_blank`+`noopener` e interno `#directo` |
| Imágenes y multimedia | el logo en los 3 headers y servicios, sección del local | `img` con `alt`, `figure`+`figcaption` la fachada, `iframe` con `title` el mapa, `audio` con `controls` mi saludo |
| Tablas | servicios, precios del taller | `caption`, `thead`/`tbody`/`tfoot`, `scope`, `rowspan` para fusionar categorías y `colspan` en la nota |
| Formularios | contacto | 2 `fieldset` con `legend`, 10 tipos de `input`, `label` con `for`, `select` con `optgroup`, radios, checkbox, `textarea` y `button` |
| Semántica y div/span | la estructura de las 3 páginas; `div` en servicios para agrupar la foto con el mapa, `span` en index para la vigencia de la promo | `header`, `nav`, `main`, `footer`, `section`, `article` la noticia, `aside` el truco, `address` los datos de la tienda, `details`/`summary` las FAQ. `div` es la caja genérica cuando no hay etiqueta para ese grupo y `span` marca un pedazo de texto en línea |
