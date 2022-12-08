const { sequelize, Datatypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let alias = 'FormaPagamento';
    const FormaPagamento = sequelize.define('FormaPagamento', {
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
        tableName: 'pg_formas',
        timestamps: false,
        underscored: true
    });
    FormaPagamento.associate = function(models){
        FormaPagamento.belongsTo(models.Pagamento, {
            as: "pagamentos",
            foreignKey: "formapg_id",
            timestamps: false
        });
    };
    return FormaPagamento;
};