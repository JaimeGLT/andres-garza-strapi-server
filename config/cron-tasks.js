const axios = require('axios');

const { VITE_URL_VIDEOS_SHORTS, VITE_KEY, VITE_URL_VIDEOS_POPULARES, VITE_URL_VIDEOS_RECIENTES } = process.env;

module.exports = {
  '22 15 * * *': async ({ strapi }) => {
    try {
      const response = await axios.get(`${VITE_URL_VIDEOS_POPULARES}${VITE_KEY}`);
      await strapi.entityService.update('api::registros-cron-popular.registros-cron-popular', 1, { 
        data: {
          Hora: new Date(),
          Respuesta: JSON.stringify(response.data),
        },
      });
    } catch (error) {
      console.error('Error:', error.message);
    }

    try {
      const responseR = await axios.get(`${VITE_URL_VIDEOS_RECIENTES}${VITE_KEY}`);
      await strapi.entityService.update('api::registros-cron-reciente.registros-cron-reciente', 1, { 
        data: {
          Hora: new Date(),
          Respuesta: JSON.stringify(responseR.data),
        },
      });
    } catch (error) {
      console.error('Error:', error.message);
    }

    try {
      const responseS = await axios.get(`${VITE_URL_VIDEOS_SHORTS}${VITE_KEY}`);
      await strapi.entityService.update('api::registros-cron-short.registros-cron-short', 1, { 
        data: {
          Hora: new Date(),
          Respuesta: JSON.stringify(responseS.data),
        },
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  },
};
