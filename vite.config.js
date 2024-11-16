import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'client',
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});