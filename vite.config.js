import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  files:{
    assets:'./public'
  },
  plugins: [react()],
})
