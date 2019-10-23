'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class PageDetector {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request }, next) {
    const page = request.only(['page']);
    request.page = page;
    await next();
  }
}

module.exports = PageDetector;
