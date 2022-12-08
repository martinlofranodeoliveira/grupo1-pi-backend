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
        foto: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true
    });
    
    Usuario.associate = function(models){
        Usuario.belongsTo(models.Endereco,
            {
                as: "enderecos",
                foreignKey: "usuario_id",
                timestamps:false
            });
    };
    Usuario.associate = function(models){
        Usuario.belongsTo(models.Pedido,
            {
                as: "pedidos",
                foreignKey: "usuario_id",
                timestamps:false
            });
    };
    return Usuario;
};