'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fotoetiqueta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  fotoetiqueta.init({
    foto_id: DataTypes.INTEGER,
    etiqueta_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'fotoetiqueta',
    tableName: 'fotoetiquetas'
  });
  return fotoetiqueta;
};