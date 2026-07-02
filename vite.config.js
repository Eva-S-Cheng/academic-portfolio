import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT — GitHub Pages :
// - Si le site est déployé sur https://<user>.github.io/<repo>/ :
//   mets base: '/<repo>/' (avec les slashes).
// - Si tu utilises un domaine custom ou <user>.github.io directement :
//   mets base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/academic-portfolio/',
})
