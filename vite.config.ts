import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/consulter/' //Linha temporária para rodar em uma página de teste. No projeto real retirar
});
