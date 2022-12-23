const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Pedido';
    const Pedido = sequelize.define('Pedido', {
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
        // usuarios_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // pagamentos_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }

    },
    {
        tableName: 'pedidos',
        timestamps: false,
        underscored: true
    });

    Pedido.associate = function(models){
        Pedido.hasMany(models.ProdutoPedido, {
            as: "produtoPedidos",
            foreignKey: "pedidos_id",
            timestamps: false
        });
    };
    Pedido.associate = function(models){
        Pedido.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "usuarios_id", 
            timestamps: false
        });
    };
    Pedido.associate = function(models){
        Pedido.belongsTo(models.Pagamento, {
            as: "pagamentos",
            foreignKey: "pagamentos_id",
            timestamps: false
        });
    };
    return Pedido;
};