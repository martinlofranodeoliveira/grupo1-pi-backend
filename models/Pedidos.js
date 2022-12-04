const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Pedido';
    const Produto = sequelize.define('Pedido', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        usuarios_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pagamentos_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        tableName: 'pedidos',
        timestamps: false,
        underscored: true
    });
};