import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const qaProxyTarget = env.QA_DEVTOOLS_PROXY_TARGET || 'https://localhost:7193'

  return {
    base: '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/api/qa': {
          target: qaProxyTarget,
          changeOrigin: true,
          secure: false,
        },
        '/api/usuario-config': {
          target: qaProxyTarget,
          changeOrigin: true,
          secure: false,
        },
        '/api/auth': {
          target: qaProxyTarget,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})
