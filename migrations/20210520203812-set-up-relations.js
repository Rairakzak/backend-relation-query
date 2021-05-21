"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todolists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    }),
      queryInterface.addColumn("todoitems", "todolistId", {
        type: Sequelize.INTEGER,
        references: {
          model: "todolists",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn("totolists", "userId");
    // await queryInterface.removeColumn("todoitems", "todoListId");
  },
};
