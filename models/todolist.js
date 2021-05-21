"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todolist extends Model {
    static associate(models) {
      todolist.belongsTo(models.user);
      todolist.hasMany(models.todoitem);
    }
  }
  todolist.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "todolist",
    }
  );
  return todolist;
};
