'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddColumnThumbmailSchema extends Schema {
  up() {
    this.alter('spots', table => {
      table.string('thumbmail');
    });
  }

  down() {
    this.drop('spots');
  }
}

module.exports = AddColumnThumbmailSchema;
