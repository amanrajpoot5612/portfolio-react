import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,          // or '0.0.0.0'
    port: 5173,
    strictPort: true     // optional: fail if port is taken
  },
  plugins: [react()],
  base: './',
})
