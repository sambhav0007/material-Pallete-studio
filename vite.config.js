import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'unkingly-inextensible-tova.ngrok-free.dev' // Add your ngrok host here
    ],
    base: "/"
  }
})
