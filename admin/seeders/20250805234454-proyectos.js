'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let proyectos = [[1,'Grupo 1',85],[2,'Grupo 2',95]]

    for(let proyecto of proyectos){
      await queryInterface.bulkInsert('proyectos', [{
        grupo: proyecto[0],
        titulo: proyecto[1],
        calificacion: proyecto[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('proyectos', null, {});
  }
};
