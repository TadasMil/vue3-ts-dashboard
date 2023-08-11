import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: {
          recruitment:
            '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 8C5 8.79112 5.2346 9.56448 5.67412 10.2223C6.11365 10.8801 6.73836 11.3928 7.46927 11.6955C8.20017 11.9983 9.00444 12.0775 9.78036 11.9231C10.5563 11.7688 11.269 11.3878 11.8284 10.8284C12.3878 10.269 12.7688 9.55628 12.9231 8.78036C13.0775 8.00444 12.9983 7.20017 12.6955 6.46927C12.3928 5.73836 11.8801 5.11365 11.2223 4.67412C10.5645 4.2346 9.79112 4 9 4C7.93913 4 6.92172 4.42143 6.17157 5.17157C5.42143 5.92172 5 6.93913 5 8Z" fill="#B2B2B2"/><rect x="3" y="14" width="12" height="6" rx="3" fill="#B2B2B2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19 8H17V10L15 10V12H17V14H19V12H21V10L19 10V8Z" fill="#B2B2B2"/></svg>',
          'calendar-event':
            '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2222 4.8H16.4444V3H14.6667V4.8H9.33333V3H7.55556V4.8H5.77778C4.79733 4.8 4 5.6073 4 6.6V19.2C4 20.1927 4.79733 21 5.77778 21H18.2222C19.2027 21 20 20.1927 20 19.2V6.6C20 5.6073 19.2027 4.8 18.2222 4.8ZM17.3333 18.3H12V12.9H17.3333V18.3ZM18.2222 9.3H5.77778V7.5H18.2222V9.3Z" fill="#B2B2B2"/></svg>'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
