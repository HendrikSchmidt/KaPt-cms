'use strict';

/**
 * philosophy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::philosophy.philosophy');
