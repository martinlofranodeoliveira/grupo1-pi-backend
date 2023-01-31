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
   await queryInterface.bulkInsert('Categorias', [{
    nome: 'suprimentos',
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'equipamentos de medição',
    criador: 'Italo',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'material cirurgico',
    criador: 'Martin',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'respiratorio',
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'curativo',
    criador: 'Italo',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'higiene',
    criador: 'Martin',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'Equipamento de Proteção Individual',
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   }   
  ]
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
