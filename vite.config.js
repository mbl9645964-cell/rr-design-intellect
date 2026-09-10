import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Project page lives at /rr-design-intellect/ on GitHub Pages.
  base: command === 'build' ? '/rr-design-intellect/' : '/',
  plugins: [react()],
  server: {
    port: 5178,
    host: true,
  },
}))
