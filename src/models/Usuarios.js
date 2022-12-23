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
        image: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true
    });
    Usuario.associate = function(models){
        Usuario.hasOne(models.Endereco, 
            {
                as: "enderecos",
                foreignKey: "usuarios_id",
                timestamps:false
            })
    }
  
    
    return Usuario;
};