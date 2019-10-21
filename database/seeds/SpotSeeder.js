'use strict';

/*
|--------------------------------------------------------------------------
| SpotSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class SpotSeeder {
  async run() {
    await Factory.model('App/Models/Spot').createMany(2);
  }
}

module.exports = SpotSeeder;
