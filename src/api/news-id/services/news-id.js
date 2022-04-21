'use strict';

/**
 * news-id service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-id.news-id');
