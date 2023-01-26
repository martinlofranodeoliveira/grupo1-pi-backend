'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Enderecos.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id',
        as: 'usuario'
      })
    }
  }
  Enderecos.init({
    cep: DataTypes.INTEGER,
    logradouro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    complemento: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enderecos',
  });
  return Enderecos;
};