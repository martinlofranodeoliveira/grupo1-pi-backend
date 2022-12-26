'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cep: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      logradouro: {
         allowNull: false,
        type: Sequelize.STRING
      },
      cidade: {
         allowNull: false,
        type: Sequelize.STRING
      },
      estado: {
         allowNull: false,
        type: Sequelize.STRING
      },
      complemento: {
         allowNull: false,
        type: Sequelize.STRING
      },
      usuario_id: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enderecos');
  }
};