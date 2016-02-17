'use strict';

var models  =   require( __dirname + '/../models');
var Q       =   require('q');

// The order of migration is important
// for the foreign keys to work
var Models = [
    "User",
    "Task",
    "Profile"
];

module.exports = {

    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(Model.tableName, Model.attributes);
        // create the tables for each model
        // in the order declared above
        return Models.reduce(function(totalPromise, modelName){
            
            var Model = models[modelName];

            return totalPromise.then(function(){
                return queryInterface.createTable(Model.tableName, Model.attributes);
            })
        }, Q());
    },

    down: function (queryInterface, Sequelize) {
        // drop the tables for each model
        // in reverse order as declared above
        return Models.reverse().reduce(function(totalPromise, modelName){
            
            var Model = models[modelName];

            return totalPromise.then(function(){
                return queryInterface.dropTable(Model.tableName);
            })
        }, Q());
    }

};
