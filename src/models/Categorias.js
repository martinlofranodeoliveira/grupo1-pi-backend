const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Categoria';
    const Categoria = sequelize.define('Categoria', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: 'categorias',
        timestamps: false,
        underscored: true
    });
    Categoria.associate = function(models){
        Categoria.hasMany(models.Produto, {
            as: "produtos",
            foreignKey: "categorias_id",
            timestamps: false
        })
       }
    
    return Categoria;
};