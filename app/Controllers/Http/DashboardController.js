'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Spot = use('App/Models/Spot');

/* Dashboard for the user who is logged in */

class DashboardController {
  async show({ auth }) {
    const { id } = auth.user;

    const spot = await Spot.query()
      .where('user_id', id)
      .first();

    return spot;
  }
}

module.exports = DashboardController;
