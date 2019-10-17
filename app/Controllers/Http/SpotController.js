'use strict';

const Spot = use('App/Models/Spot');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class SpotController {
  async index() {
    const spots = await Spot.all();

    return spots;
  }

  async store({ request, response }) {
    const { user_id } = request.headers();
    const { company, price, techs } = request.all();
    const data = {
      user_id,
      company,
      price,
      techs
    };

    const spot = await Spot.create(data);

    return spot;
  }

  async show({ params, response }) {
    const spot = await Spot.find(params.id);

    return spot;
  }
}

module.exports = SpotController;
