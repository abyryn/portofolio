import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Jangan watch file video besar di public — mencegah EBUSY crash
      ignored: ['**/public/**/*.mp4', '**/public/**/*.webm', '**/public/**/*.mov']
    }
  }
})
