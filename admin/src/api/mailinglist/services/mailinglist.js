'use strict';

/**
 * mailinglist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mailinglist.mailinglist');
