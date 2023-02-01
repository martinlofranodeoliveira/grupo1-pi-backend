'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdutosPedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProdutosPedidos.belongsTo(models.Pedidos, {
        foreignKey: 'pedidos_id',
        as: 'pedidos'
      }),
      ProdutosPedidos.belongsTo(models.Produto, {
        foreignKey: 'produtos_id',
        as: 'produtos'
      })
    }
  }
  ProdutosPedidos.init({
    produtos_id: DataTypes.INTEGER,
    pedidos_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProdutosPedidos',
  });
  return ProdutosPedidos;
};