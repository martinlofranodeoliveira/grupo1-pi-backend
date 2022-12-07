const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Endereco';
    const Endereco = sequelize.define('Endereco', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        cep: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complemento: {
            type: DataTypes.STRING
        },
        usuarios_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    },
    {
        tableName: 'enderecos',
        timestamps: false,
        underscored: true
    });
    Endereco.associate = function(models){
        Endereco.belongsTo(models.Usuario,
            {
                as: "usuarios",
                foreignKey: "usuarios_id",
                timestamps:false
            });
    };
    return Endereco;
};