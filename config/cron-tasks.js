const axios = require('axios');

const { VITE_URL_VIDEOS_SHORTS, VITE_KEY, VITE_URL_VIDEOS_POPULARES, VITE_URL_VIDEOS_RECIENTES } = process.env;

module.exports = {
  '* 17 * *': async ({ strapi }) => {
    try {

      const response = await axios.get(`${VITE_URL_VIDEOS_POPULARES}${VITE_KEY}`);
      
      // Verificar si existe el registro con ID 1
      const existingPopular = await strapi.entityService.findOne('api::registros-cron-popular.registros-cron-popular', 1);
      if (existingPopular) {
        // Actualizar el registro si existe
        await strapi.entityService.update('api::registros-cron-popular.registros-cron-popular', 3, { 
          data: {
            Hora: new Date(),
            Respuesta: JSON.stringify(response.data),
          },
        });
      } else {
        // Crear un nuevo registro si no existe
        await strapi.entityService.create('api::registros-cron-popular.registros-cron-popular', {
          data: {
            Hora: new Date(),
            Respuesta: JSON.stringify(response.data),
          },
        });
      }
    } catch (error) {
      console.error('Error en registros-cron-popular:', error.message);
    }

    try {
      const responseR = await axios.get(`${VITE_URL_VIDEOS_RECIENTES}${VITE_KEY}`);
      
      const existingRecent = await strapi.entityService.findOne('api::registros-cron-reciente.registros-cron-reciente', 1);
      if (existingRecent) {
        await strapi.entityService.update('api::registros-cron-reciente.registros-cron-reciente', 1, { 
          data: {
            Hora: new Date(),
            Respuesta: JSON.stringify(responseR.data),
          },
        });
      } else {
        await strapi.entityService.create('api::registros-cron-reciente.registros-cron-reciente', {
          data: {
            Hora: new Date(),
            Respuesta: JSON.stringify(responseR.data),
          },
        });
      }
    } catch (error) {
      console.error('Error en registros-cron-reciente:', error.message);
    }

    try {
      const responseS = await axios.get(`${VITE_URL_VIDEOS_SHORTS}${VITE_KEY}`);
      
      const existingShort = await strapi.entityService.findOne('api::registros-cron-short.registros-cron-short', 1);
      if (existingShort) {
        await strapi.entityService.update('api::registros-cron-short.registros-cron-short', 1, { 
          data: {
            Hora: new Date(),
            Respuesta: JSON.stringify(responseS.data),
          },
        });
      } else {
        await strapi.entityService.create('api::registros-cron-short.registros-cron-short', {
          data: {
            Hora: new Date(),
            Respuesta: JSON.stringify(responseS.data),
          },
        });
      }
    } catch (error) {
      console.error('Error en registros-cron-short:', error.message);
    }
  },
};
