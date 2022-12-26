
 allowNull: false,'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
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
      email: {
         allowNull: false,
        type: Sequelize.STRING
      },
      senha: {
         allowNull: false,
        type: Sequelize.STRING
      },
      telefone: {
         allowNull: false,
        type: Sequelize.STRING
      },
      image: {
         allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Usuarios');
  }
};