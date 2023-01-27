'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('produtos', [{
    nome: 'atadura',
    descricao: 'faixas de pano para ferimentos e torções',
    preco: 5.99,
    estoque: 100,
    avaliacao: 5,
    categorias_id: 1,
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   }],
   [{

   }]
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
