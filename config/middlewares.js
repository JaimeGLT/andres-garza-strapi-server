module.exports = [
  'strapi::errors',
// En Strapi, en el archivo config/middleware.js o config/env/production/middleware.js
{
    name: 'strapi::cors',
    config: {
        origin: ['http://localhost:5173', 'https://client-opal-xi-12.vercel.app'], // Asegúrate de que este esté correctamente configurado
    },
},

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          'media-src': ["'self", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          upgradeInsecureRequests: null
        },
      },
    },
  },
  'strapi::logger',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
