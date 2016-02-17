'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
            username: { type: DataTypes.STRING }
        }, {
            classMethods: {
                associate: (models) => {
                    User.hasMany(models.Task, {
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                        foreignKey: 'user_id',
                        targetKey: 'id'
                    });
                }
            }
        }
    );
};