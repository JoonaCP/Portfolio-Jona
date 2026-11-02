// Genera public/images/*.webp y la imagen para redes a partir de source-images/
import { mkdir, readdir } from 'node:fs/promises'
import { dirname, join, parse, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = join(root, 'source-images')
const outputDir = join(root, 'public', 'images')
const WIDTHS = [640, 1280, 1920]

const entries = await readdir(sourceDir, { recursive: true, withFileTypes: true })

for (const entry of entries.filter((e) => e.isFile())) {
  const source = join(entry.parentPath, entry.name)
  const { dir, name } = parse(relative(sourceDir, source))
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
