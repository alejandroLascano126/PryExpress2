'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proyectos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  proyectos.init({
    grupo: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    calificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'proyectos',
  });
  return proyectos;
};