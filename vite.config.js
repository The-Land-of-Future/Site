import { fileURLToPath, URL } from 'node:url'

import {defineConfig, send} from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
// noinspection ES6PreferShortImport //npm run preview fails, if this is a short import
import {faqIds} from './src/data/faq/questions.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Pages({
      extensions: ['vue', 'md'],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output:{
        manualChunks(id) {
          if (id.includes('@fortawesome/free-solid-svg-icons')) return 'fas';
          if (id.includes('@fortawesome/free-regular-svg-icons')) return 'far';
          if (id.includes('@fortawesome/free-brands-svg-icons')) return 'fab';

          let at_index = id.indexOf("@");
          let new_id = id.substring(at_index);
          let end_idx = new_id.indexOf("/");

          if (id.includes("@fortawesome"))
            end_idx = new_id.indexOf("/", end_idx + 1);

          new_id = new_id.substring(0, end_idx)

          if (at_index >= 0) {
            console.log("id:", id, "new_id:", new_id);
            return new_id;
          }
        }
      }
    }
  },
  ssgOptions: {
    script: 'async',
    mock: true,
    crittersOptions : {
      path: "./dist",
      pruneSource: true,
      fonts: true,
      allowRules: ['.content'],
    },
    formatting: "minify",
    dirStyle: "nested",
    /*include the dynamic FAQ routes*/
    includedRoutes(paths, routes) {
      return routes.flatMap(route => {
        if (route.path === '/:catchAll(.*)') return []
        return route.path === '/faq/:id?/' ? faqIds.map(id => `/faq/${id}/`) : route.path
      });
    },
    /* generate a sitemap */
    onFinished() {
      generateSitemap({
        hostname: "https://tlof.party",
        exclude: ["/404"],
        generateRobotsTxt: false,
      })
    },
  }
})
