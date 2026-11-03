# PCalito

Sitio de PCalito, una tienda de computadoras en Verón, Punta Cana.

Luis Martin Peña Mejia · 2023-4341 · ISW-311 Tecnologías de Internet I

Sitio publicado: https://luismartin023.github.io/pcalito/

## Páginas

- `index.html` inicio
- `servicios.html` servicios, listas, tabla de precios y multimedia
- `contacto.html` formulario y contacto directo

## Mapa de etiquetas

| Familia | Dónde la usé | Por qué |
|---|---|---|
| Cimientos | el `head` de las 3 páginas | doctype, `lang="es"`, charset, viewport, `title` y `description` propios en cada una |
| Semántica | `header`, `nav`, `main`, `footer` en las 3; `article` la noticia y `aside` el truco en index; `time` en las fechas, `details`/`summary` en las FAQ | cada zona tiene su nombre; la noticia se entiende sola y el aside es algo extra |
| Texto | index y servicios: `strong`, `em`, `mark`, `del`/`ins`, `abbr`, `small`, `q` | marcar precios tachados, siglas como GPU y lo importante |
| Citas | index, la opinión del cliente | `blockquote`+`cite` porque es una cita larga; `q` sirve para la frase corta |
| Listas | servicios: `ul` con sublista, `ol reversed` el top 5, `dl` el glosario | la sublista va dentro del `li` padre; `dl` es para término/definición |
| Enlaces | contacto, sección contacto directo | `mailto`, `tel`, `download` del PDF, externo con `_blank`+`noopener` e interno `#directo` |
| Multimedia | servicios, sección del local | `img` con `alt`, `figure`+`figcaption` la fachada, `iframe` con `title` el mapa, `audio` con `controls` mi saludo |
| Tabla de datos | servicios, precios del taller | `caption`, `thead`/`tbody`/`tfoot`, `scope`, `rowspan` para fusionar categorías y `colspan` en la nota |
| Formulario | contacto | 2 `fieldset` con `legend`, 10 tipos de `input`, `label` con `for`, `select` con `optgroup`, radios, checkbox, `textarea` y `button` |
