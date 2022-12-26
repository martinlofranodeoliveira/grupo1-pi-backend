'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto.belongsTo(models.Categorias, {
        foreignKey: 'categorias_id',
        as: 'categorias'
      }),
      Produto.belongsTo(models.Marcas, {
        foreignKey: 'marcas_id',
        as: 'marcas'
      })
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.DECIMAL(5, 2),
    estoque: DataTypes.INTEGER,
    avaliação: DataTypes.INTEGER,
    categorias_id: DataTypes.INTEGER,
    marcas_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};