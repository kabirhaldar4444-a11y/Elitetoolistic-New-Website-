import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function apiCheckoutPlugin() {
  return {
    name: 'api-checkout-plugin',
    configureServer(server) {
      server.middlewares.use('/api/checkout', async (req, res, next) => {
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Forwarded-For');
          res.statusCode = 204;
          return res.end();
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ error: 'Method not allowed' }));
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            let payload = JSON.parse(body || '{}');
            const PAYALMA_API_URL = 'https://gate.payalma.com/api/v1/purchases/';
            const PAYALMA_BRAND_ID = '9a0999f4-1298-4336-8b85-7c5d86238553';
            const PAYALMA_API_KEY = 'q_H9dTYyAEtoFVVhGPkREQLc27gGVIq3g8EONZemZN4wEvcqcZBou-7LckEecYcxVyjW46kSrvV6sSSNNnOWXA==';

            payload.brand_id = PAYALMA_BRAND_ID;
            if (!payload.client) payload.client = {};
            if (!payload.client.country) payload.client.country = 'IN';

            const headers = {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${PAYALMA_API_KEY}`
            };

            const response = await fetch(PAYALMA_API_URL, {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(payload)
            });

            const data = await response.json();
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.statusCode = response.status;
            res.end(JSON.stringify(data));
          } catch (error) {
            console.error('Vite PayAlma Middleware Error:', error);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: error.message || 'Payment initiation failed' }));
          }
        });
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), apiCheckoutPlugin()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
