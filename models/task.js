'use strict';


module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Task", {
        title: { type: DataTypes.STRING }
    }, {
        classMethods: {
            associate: (models) => {
                Task.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                    foreignKey: 'user_id',
                    targetKey: 'id'
                });
            }
        }
    });
};