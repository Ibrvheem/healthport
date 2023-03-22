import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    assets: [
      // Add any additional assets that you want the server to serve here
      './src/assets/fonts',
    ],
  },
})
