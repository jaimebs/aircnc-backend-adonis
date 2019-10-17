'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SpotSchema extends Schema {
  up() {
    this.create('spots', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('company', 256).notNullable();
      table.decimal('price');
      table.string('techs', 256).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('spots');
  }
}

module.exports = SpotSchema;
