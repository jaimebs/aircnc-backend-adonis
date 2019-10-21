'use strict';

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/Spot', faker => {
  return {
    company: faker.company(),
    price: 198.63,
    techs: faker.name(),
    user_id: faker.integer({ min: 1, max: 2 })
  };
});
