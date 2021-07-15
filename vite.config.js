import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const htmlMinifier = require("rollup-plugin-html-minifier")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),
    htmlMinifier({
      collapseWhitespace: true,
    })
  
  ],
  
})
