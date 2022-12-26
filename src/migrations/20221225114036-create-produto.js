'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
         allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
         allowNull: false,
        type: Sequelize.STRING
      },
      preco: {
         allowNull: false,
        type: Sequelize.DECIMAL(5, 2)
      },
      estoque: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      avaliação: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      categorias_id: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      marcas: {
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
    await queryInterface.dropTable('Produtos');
  }
};