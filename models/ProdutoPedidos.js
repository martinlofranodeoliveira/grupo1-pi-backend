const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'ProdutoPedido';
    const Produto = sequelize.define('ProdutoPedido', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        produtos_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pedidos_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantidade: {
            type: DataTypes.INTEGER
        }       
    },
    {
        tableName: 'produtos_has_pedidos',
        timestamps: false,
        underscored: true
    });
};