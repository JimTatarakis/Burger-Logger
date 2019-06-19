module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burgers", {
      name: {
        type: DataTypes.STRING,
        notNull: true,
        validate: {
          len: [1, 140]
        }
      },
      eaten: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Burger;
  };