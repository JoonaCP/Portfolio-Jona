// Genera public/images/*.webp y las imágenes para redes (general y una por proyecto) a partir de source-images/
import { mkdir, readdir } from 'node:fs/promises'
import { dirname, join, parse, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { getProjectSlug, projects } from '../src/data/projects.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = join(root, 'source-images')
const outputDir = join(root, 'public', 'images')
const WIDTHS = [640, 1280, 1920]
// Medida que usan LinkedIn, WhatsApp y Facebook para la vista previa de un enlace
const SHARE_SIZE = { width: 1200, height: 630 }

const entries = await readdir(sourceDir, { recursive: true, withFileTypes: true })
// Ruta sin extensión, como la usa projects.js (por ejemplo "hall/hall1"), y su archivo original
const sources = new Map()

for (const entry of entries.filter((e) => e.isFile())) {
  const source = join(entry.parentPath, entry.name)
  const { dir, name } = parse(relative(sourceDir, source))
  sources.set(join(dir, name).replaceAll('\\', '/'), source)
  await mkdir(join(outputDir, dir), { recursive: true })

  for (const width of WIDTHS) {
    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(join(outputDir, dir, `${name}-${width}.webp`))
  }
}

await sharp(join(sourceDir, 'hall', 'hall1.jpg'))
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 80 })
  .toFile(join(root, 'public', 'og-image.jpg'))

// La portada de cada proyecto, para que su enlace muestre su propia imagen. El recorte busca
// la zona con más detalle, para que las portadas verticales no queden en una franja vacía
await mkdir(join(root, 'public', 'og'), { recursive: true })
for (const { name, img } of projects) {
  await sharp(sources.get(img))
    .rotate()
    .resize({ ...SHARE_SIZE, fit: 'cover', position: sharp.strategy.attention })
    .jpeg({ quality: 80 })
    .toFile(join(root, 'public', 'og', `${getProjectSlug(name)}.jpg`))
}
