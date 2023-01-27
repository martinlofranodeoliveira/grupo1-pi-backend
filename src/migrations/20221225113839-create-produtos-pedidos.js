'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProdutosPedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      produtos_id: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      pedidos_id: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      quantidade: {
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
    await queryInterface.dropTable('ProdutosPedidos');
  }
};

// 'use strict';

// const {
// INTEGER,
// DATE,
// STRING,
// } = require('sequelize');

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
// async up(queryInterface, Sequelize) {
// await queryInterface.createTable('ProdutosPedidos', {
// id: {
// allowNull: false,
// autoIncrement: true,
// primaryKey: true,
// type: INTEGER
// },
// produtos_id: {
// allowNull: false,
// type: INTEGER,
// references: {
// model: 'Produtos',
// key: 'id'
// },
// onUpdate: 'CASCADE',
// onDelete: 'CASCADE'
// },
// pedidos_id: {
// allowNull: false,
// type: INTEGER,
// references: {
// model: 'Pedidos',
// key: 'id'
// },
// onUpdate: 'CASCADE',
// onDelete: 'CASCADE'
// },
// quantidade: {
// allowNull: false,
// type: INTEGER
// },
// createdAt: {
// allowNull: false,
// type: DATE
// },
// updatedAt: {
// allowNull: false,
// type: DATE
// }
// });
// },
// async down(queryInterface, Sequelize) {
// await queryInterface.dropTable('ProdutosPedidos');
// }
// };