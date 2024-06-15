import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mod5-react2-router2-pokemon",  
  plugins: [react()],
})
