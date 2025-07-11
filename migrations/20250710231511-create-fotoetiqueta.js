'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotoetiquetas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foto_id: {
        type: Sequelize.INTEGER
      },
      etiqueta_id: {
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



    await queryInterface.addConstraint('fotoetiquetas', {
      fields: ['foto_id'],
      name: 'foto_id_fk',
      type: 'foreign key',
      references: {
        table: 'fotos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });

    await queryInterface.addConstraint('fotoetiquetas', {
      fields: ['etiqueta_id'],
      name: 'etiqueta_id_fk',
      type: 'foreign key',
      references: {
        table: 'etiquetas',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    })

    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fotoetiquetas');
    await queryInterface.removeConstraint('fotoetiquetas', 'foto_id_fk')
    await queryInterface.removeConstraint('fotoetiquetas', 'etiqueta_id_fk')
    await queryInterface.bulkDelete('etiquetas', null, {});
  }

  
};