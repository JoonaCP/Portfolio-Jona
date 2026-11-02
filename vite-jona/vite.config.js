import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages sirve 404.html en rutas desconocidas: así React Router resuelve las subpáginas
const spaFallback = () => ({
  name: 'spa-fallback',
  apply: 'build',
  writeBundle({ dir }) {
    copyFileSync(join(dir, 'index.html'), join(dir, '404.html'))
  },
})

export default defineConfig({
  plugins: [react(), spaFallback()],
  // Vercel sirve el sitio en la raíz; GitHub Pages, bajo el nombre del repositorio
  base: process.env.VERCEL ? '/' : '/Portfolio-Jona/',
})
