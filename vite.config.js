import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import taildwindcss from '@tailwindcss/vite';


export default defineConfig({
  fontFamily:{
    body:['Josefin Sans'],
    special: ['Roboto']
  },

  plugins: [react(), taildwindcss()],
})
