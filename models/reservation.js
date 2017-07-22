'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define('Reservations', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    nights: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Reservation;
};