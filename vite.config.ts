// vite.config.ts
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/piano-app/',
  test: {
    globals: true, // Para tener expect, describe, it, etc.
    environment: "jsdom", // Simula el navegador
    setupFiles: "./src/setupTests.ts", // setup con jest-dom
  },
})