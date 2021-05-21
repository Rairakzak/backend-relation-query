"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "frontend",
          deadline: "25-June-2021",
          todolistId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "backend",
          deadline: "22-June-2021",
          todolistId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "grocery",
          deadline: "20-may-2021",
          todolistId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "summer camp",
          deadline: "30-may-2021",
          todolistId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Canvas and paint",
          deadline: "23-June-2021",
          todolistId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Backyard fix",
          deadline: "14-June-2021",
          todolistId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoitems", null, {});
  },
};
