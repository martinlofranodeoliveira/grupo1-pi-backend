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
      // define association here
      this.belongsTo(models.Categorias, {
        foreignKey: 'categorias_id',
        as: 'categorias'
      });
      this.belongsTo(models.Usuarios, {
        foreignKey: 'criador',
        as: 'usuarios'
      });

    }
}
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.DECIMAL(5, 2),
    estoque: DataTypes.INTEGER,
    avaliacao: DataTypes.INTEGER,
    categorias_id: DataTypes.INTEGER,
    criador: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};