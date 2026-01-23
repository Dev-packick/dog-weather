// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Désactive les source maps en production
  },
  esbuild: {
    sourcemap: false, // Désactive les source maps pour esbuild
  }
})