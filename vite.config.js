import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from '@nabla/vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),   // shows ESLint errors in terminal during dev
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    strictPort: false,
  },
})
