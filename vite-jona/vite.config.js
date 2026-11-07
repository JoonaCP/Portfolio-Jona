import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getProjectSlug, projects } from './src/data/projects.js'

const SITE_URL = 'https://portfolio-jona-pi.vercel.app'

// GitHub Pages sirve 404.html en rutas desconocidas: así React Router resuelve las subpáginas
const spaFallback = () => ({
  name: 'spa-fallback',
  apply: 'build',
  writeBundle({ dir }) {
    copyFileSync(join(dir, 'index.html'), join(dir, '404.html'))
  },
})

const escapeAttribute = (text) =>
  text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')

// Reemplaza el contenido de una etiqueta de index.html; si la etiqueta cambió, falla la compilación
const replaceTag = (html, pattern, value) => {
  if (!pattern.test(html)) throw new Error(`share-pages: no se encontró ${pattern} en index.html`)
  return html.replace(pattern, (_, start, end) => `${start}${escapeAttribute(value)}${end}`)
}

const withShareTags = (html, { title, description, path, image }) =>
  [
    [/(<title>)[^<]*(<\/title>)/, title],
    [/(<meta name="description" content=")[^"]*(")/, description],
    [/(<meta property="og:title" content=")[^"]*(")/, title],
    [/(<meta property="og:description" content=")[^"]*(")/, description],
    [/(<meta property="og:url" content=")[^"]*(")/, `${SITE_URL}${path}`],
    [/(<meta property="og:image" content=")[^"]*(")/, `${SITE_URL}${image}`],
  ].reduce((result, [pattern, value]) => replaceTag(result, pattern, value), html)

// LinkedIn y WhatsApp no ejecutan JavaScript: cada página lleva en su HTML su propio título,
// descripción e imagen, para que su enlace muestre una vista previa propia
const sharePages = () => ({
  name: 'share-pages',
  apply: 'build',
  writeBundle({ dir }) {
    const html = readFileSync(join(dir, 'index.html'), 'utf8')
    const pages = [
      {
        path: '/works',
        title: 'Works | Jonathan Calistro',
        description: 'Architecture and interior design projects by Jonathan Calistro.',
        image: '/og-image.jpg',
      },
      ...projects.map(({ name, description }) => ({
        path: `/works/${getProjectSlug(name)}`,
        title: `${name} | Jonathan Calistro`,
        description,
        image: `/og/${getProjectSlug(name)}.jpg`,
      })),
    ]

    for (const page of pages) {
      const folder = join(dir, page.path)
      mkdirSync(folder, { recursive: true })
      writeFileSync(join(folder, 'index.html'), withShareTags(html, page))
    }
  },
})

export default defineConfig({
  plugins: [react(), spaFallback(), sharePages()],
  // Vercel sirve el sitio en la raíz; GitHub Pages, bajo el nombre del repositorio
  base: process.env.VERCEL ? '/' : '/Portfolio-Jona/',
})
