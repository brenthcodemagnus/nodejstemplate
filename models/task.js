"use strict";

module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        title: {
            type: DataTypes.STRING   
        }
    }, {
        classMethods: {
            associate: function(models) {
                Task.belongsTo(models.User, {
                        
                    onDelete: "CASCADE",
                    
                    onUpdate: "CASCADE",

                    foreignKey: 'user_id',

                    targetKey: 'id'
                });
            }
        }
    });

    return Task;
};