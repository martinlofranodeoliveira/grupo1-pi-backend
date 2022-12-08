'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos_has_pedidos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      produtos_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pedidos_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos_has_pedidos');
  }
};
