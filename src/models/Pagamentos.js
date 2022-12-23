const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Pagamento';
    const Pagamento = sequelize.define('Pagamento', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        confirmado: {
            type: DataTypes.INTEGER,
        },
        // formapg_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
    },
    {
        tableName: 'pagamentos',
        timestamps: false,
        underscored: true
    });
    Pagamento.associate = function(models){
        Pagamento.hasMany(models.Pedido, {
            as: "pedidos",
            foreignKey: "pagamentos_id",
            timestamps: false
        });
    };
    Pagamento.associate = function(models){
        Pagamento.belongsTo(models.FormaPagamento, {
            as: "formaPagamentos",
            foreignKey: "formapg_id",
            timestamps: false
        });
    };
    return Pagamento;
};