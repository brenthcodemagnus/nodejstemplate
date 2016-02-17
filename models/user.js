"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User",
        {
            username: {
                type: DataTypes.STRING   
            }
        },
        {
            classMethods: {
                associate: function(models) {
                    User.hasMany(models.Task, {
                            
                        onDelete: "CASCADE",
                        
                        onUpdate: "CASCADE",

                        foreignKey: 'user_id',

                        targetKey: 'id'
                    })
                }
            }
        }
    );

    return User;
};