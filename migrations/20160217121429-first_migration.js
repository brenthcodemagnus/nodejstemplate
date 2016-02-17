'use strict';

const models  =   require( __dirname + '/../models');
const Q       =   require('q');

// The order of migration is important
// for the foreign keys to work
const Models = [
    "User",
    "Task",
    "Profile"
];

module.exports = {

    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(Model.tableName, Model.attributes);
        // create the tables for each model
        // in the order declared above
        return Models.reduce((totalPromise, modelName) => {
            return totalPromise.then(() => {
                return queryInterface.createTable(models[modelName].tableName, models[modelName].attributes);
            })
        }, Q());
    },

    down: (queryInterface, Sequelize) => {
        // drop the tables for each model
        // in reverse order as declared above
        return Models.reverse().reduce((totalPromise, modelName) => {
            return totalPromise.then(() => {
                return queryInterface.dropTable(models[modelName].tableName);
            })
        }, Q());
    }

};
