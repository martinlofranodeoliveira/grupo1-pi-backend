'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pagamentos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      confirmado: {
        type: Sequelize.INTEGER,
    },
    formapg_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pagamentos');
  }
};
