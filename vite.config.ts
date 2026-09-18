import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function staticApkPlugin(): Plugin {
  return {
    name: 'serve-apk-and-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/Ahl-al-Quran.apk' || url === '/photo.png') {
          const publicFile = path.resolve(__dirname, 'public', url.slice(1));
          const rootFile = path.resolve(__dirname, url.slice(1));
          const targetFile = fs.existsSync(publicFile) ? publicFile : (fs.existsSync(rootFile) ? rootFile : null);

          if (targetFile) {
            const stat = fs.statSync(targetFile);
            const contentType = url.endsWith('.apk')
              ? 'application/vnd.android.package-archive'
              : 'image/png';
            res.writeHead(200, {
              'Content-Type': contentType,
              'Content-Length': stat.size,
              'Content-Disposition': url.endsWith('.apk') ? 'attachment; filename="Ahl-al-Quran.apk"' : 'inline',
              'Cache-Control': 'no-cache',
            });
            fs.createReadStream(targetFile).pipe(res);
            return;
          }
        }
        next();
      });
    },
    buildStart() {
      const assets = ['photo.png', 'Ahl-al-Quran.apk'];
      const publicDir = path.resolve(__dirname, 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      for (const file of assets) {
        const rootPath = path.resolve(__dirname, file);
        const publicPath = path.resolve(publicDir, file);
        if (fs.existsSync(rootPath) && !fs.existsSync(publicPath)) {
          try {
            fs.copyFileSync(rootPath, publicPath);
          } catch {
            // ignore
          }
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), staticApkPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
