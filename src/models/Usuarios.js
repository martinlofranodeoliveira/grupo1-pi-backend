const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Usuario';
    const Usuario = sequelize.define('Usuario', {
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
        email: {
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
        },
        Image: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true
    });
    
  
    
    return Usuario;
};