'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Spot = use('App/Models/Spot');
const Helpers = use('Helpers');

class SpotController {
  async index() {
    const spots = await Spot.all();

    return spots;
  }

  async store({ request, auth }) {
    const { id } = auth.user;
    const { company, price, techs } = request.all();

    const thumbmail = request.file('thumbmail', {
      types: ['image'],
      size: '2mb'
    });

    const [filename, ext] = thumbmail.clientName.split('.');

    await thumbmail.move(Helpers.tmpPath('uploads'), {
      name: `${filename}-${new Date().getTime()}.${ext}`,
      overwrite: true
    });

    const data = {
      user_id: id,
      company,
      price,
      techs,
      thumbmail: thumbmail.fileName
    };

    const spot = await Spot.create(data);

    return spot;
  }

  async show({ params }) {
    const spot = await Spot.query()
      .with('user')
      .where('id', params.id)
      .first();

    return spot;
  }
}

module.exports = SpotController;
