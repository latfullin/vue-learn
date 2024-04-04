import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
    server: {
    host: '0.0.0.0',
    hmr: { clientPort: 5173 }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
    }
  },
    css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/default/variables.scss";
          @import "@/assets/scss/default/ui-mixins.scss";
        `,
      },
    },
  },
})
