const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Produto';
    const Produto = sequelize.define('Produto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
        },
        preco: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        estoque: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        avaliacao: {
            type: DataTypes.INTEGER,
        },
        // categorias_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // marcas_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
    },
    {
        tableName: 'produtos',
        timestamps: false,
        underscored: true
    });
    Produto.associate = function(models){
        Produto.belongsTo(models.Categoria, {
            as: 'categorias',
            foreignKey: 'categorias_id',
            timestamps:false
        });
    };
    Produto.associate = function(models){
        Produto.belongsTo(models.Marca, {
            as: 'marcas',
            foreignKey: 'marcas_id',
            timestamps:false
        });
    };
    Produto.associate = function(models){
        Produto.hasMany(models.ProdutoPedido, {
            as: 'produtoPedidos',
            foreignKey: 'produtos_id',
            timestamps:false
        });
    };
    return Produto;
};