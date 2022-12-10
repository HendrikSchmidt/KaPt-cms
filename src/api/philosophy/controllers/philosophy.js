'use strict';

/**
 * philosophy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::philosophy.philosophy');
