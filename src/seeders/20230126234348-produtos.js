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
    imagem: 'atadura.jpg',
    preco: 5.99,
    estoque: 100,
    avaliacao: 5,
    categorias_id: 5,
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'Bomba de Vácuo Suctron Premium (7 consultórios) Bivolt- Schuster',
    descricao: 'Bomba de Vácuo com capacidade para até 07 consultórios simultaneamente. Indicada para clínicas, universidades e casos onde necessita longa distância para instalação.',
    imagem: 'bomba.jpg',
    preco: 5726.90,
    estoque: 20,
    avaliacao: 4,
    categorias_id: 2,
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'Aparelho de Pressão Esfigmomanômetro Durashock DS44 com Braçadeira Adulto - Welch Allyn',
    descricao: 'O primeiro esfigmomanômetro aneróide projetado para o modo como médicos e enfermeiros trabalham. Com um exclusivo design sem engrenagens e resistente a impactos, os aparelhos com a tecnologia DuraShock se manterão calibrados por muito mais tempo, garantindo leituras precisas a um custo menor por toda a vida útil do aparelho, garantindo total tranqüilidade e satisfação.    Com a tecnologia DuraShock, a Welch Allyn revolucionou o design dos aparelhos de pressão ao criar uma tecnologia sem engrenagens ',
    imagem: 'esfigmometro.jpg',
    preco: 349.90,
    estoque: 50,
    avaliacao: 5,
    categorias_id: 2,
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'Otoscópio 2.5V Mark II com 5 Espéculos e Estojo Macio - MD',
    descricao: 'Otoscópio Mark II 2.5V com 5 Espéculos e Estojo Macio - MD.    O Mark II é um Otoscópio clássico com iluminação direta de alta qualidade.',
    imagem: 'otoscopio.jpg',
    preco: 289.90,
    estoque: 50,
    avaliacao: 5,
    categorias_id: 2,
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'Kit Antisséptico Higienizante para as Mãos BIO ASSEPT OX | 5 Frascos de 60ml - Profilática',
    descricao: 'Solução alcoólica líquida para higienização das mãos à base de álcool a 70%, clorexidina 0,5% e peróxido de hidrogênio + AGE.',
    imagem: 'antisseptico.jpg',
    preco: 65.00,
    estoque: 100,
    avaliacao: 5,
    categorias_id: 6,
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'Máscara Cirúrgica Tripla Descartável com Elástico e Clip Nasal (cx 50 un) NurMASK - NurMed',
    descricao: 'A NurMed produz uma linha completa de máscaras cirúrgicas, duplas e triplas. As suas máscaras triplas possuem três camadas de filtro Meltblown assegurando um BFE superior a 95%, comprovado por laudos do Nelson Labs.',
    imagem: 'mascara.jpg',
    preco: 9.90,
    estoque: 100,
    avaliacao: 5,
    categorias_id: 7,
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'Álcool Gel Higienizador para as Mãos (Álcool 70%) 4,5kg - Mollis',
    descricao: 'Mollis Gel Higienizador possui agentes controladores que evitam a proliferação de bactérias. Embalagem de 4,5kg',
    imagem: 'alcool.jpg',
    preco: 35.00,
    estoque: 100,
    avaliacao: 5,
    categorias_id: 6,
    criador: 'Demetrius',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'Meia Antiembólica Comprinet Pro 18mmHg Panturrilha Branca - JOBST',
    descricao: 'Meia antiembolica (prevenção da Trombose Venosa Profunda), indicada para pacientes que vão fazer procedimentos cirúrgicos ou passar muito tempo acamados.',
    imagem: 'meia.jpg',
    preco: 55.90,
    estoque: 100,
    avaliacao: 5,
    categorias_id: 1,
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
