module.exports = [
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://client-d4ywyeuxi-jaimeguzmanlt-gmailcoms-projects.vercel.app/'], // Agrega el dominio de tu frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    },
  },

  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
