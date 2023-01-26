'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedidos.belongsTo(models.Usuarios, {
        foreignKey: 'usuarios_id',
        as: 'usuarios'
      }),
      Pedidos.belongsTo(models.Pagamento, {
        foreignKey: 'pagamentos_id',
        as: 'pagamentos'
      })
    }
  }
  Pedidos.init({
    data: DataTypes.DATE,
    usuarios_id: DataTypes.INTEGER,
    pagamentos_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};