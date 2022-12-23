const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Marca';
    const Marca = sequelize.define('Marca', {
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
        tableName: 'marcas',
        timestamps: false,
        underscored: true
    });
   Marca.associate = function(models){
    Marca.hasMany(models.Produto, {
        as: "produtos",
        foreignKey: "marcas_id",
        timestamps: false
    })
   }
    
    return Marca;
}