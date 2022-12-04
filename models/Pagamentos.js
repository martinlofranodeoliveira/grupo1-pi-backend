const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Pagamento';
    const Produto = sequelize.define('Pagamento', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        confirmado: {
            type: DataTypes.INTEGER,
        },
        formapg_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'pagamentos',
        timestamps: false,
        underscored: true
    });
};