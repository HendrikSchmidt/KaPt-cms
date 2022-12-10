'use strict';

/**
 * philosophy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::philosophy.philosophy');
