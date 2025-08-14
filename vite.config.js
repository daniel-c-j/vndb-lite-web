import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { PROJECT_SLUG } from './src/constants/defaults'

export default defineConfig(({ mode }) => {
  return {
    base: (mode === "dev") ? undefined : `/${PROJECT_SLUG}/`,
    plugins: [react(), tailwindcss()],
  }
})
