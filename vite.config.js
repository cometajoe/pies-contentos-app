import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss(),],
//   base: '/pies-contentos-app/',
// })


export default defineConfig(({ command }) => {
  // 'command' será 'serve' en desarrollo (npm run dev) o 'build' en producción (npm run build)
  
  if (command === 'build') {
    // Configuración SÓLO para producción (GitHub Pages)
    return {
      plugins: [react(),tailwindcss(),],
      base: '/pies-contentos-app/' // El nombre de tu repositorio
    }
  } else {
    // Configuración para desarrollo (localhost)
    return {
      plugins: [react(),tailwindcss(),]
      // No se define 'base', por lo que Vite usa el valor por defecto '/'
    }
  }
})