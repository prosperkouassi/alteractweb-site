// server.js - Point d'entrée pour Hostinger Node.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Récupération des variables d'environnement Hostinger
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// Initialisation de Next.js en mode standalone
const app = next({ 
  dev, 
  hostname, 
  port,
  // Chemin vers le dossier standalone généré par npm run build
  dir: __dirname 
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('❌ Erreur Next.js:', req.url, err);
      res.statusCode = 500;
      res.end('Erreur interne du serveur');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`✅ HoplaTech Next.js prêt sur http://${hostname}:${port}`);
    console.log(` Dossier racine: ${__dirname}`);
  });
});