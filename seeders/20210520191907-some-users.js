"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Rakan Douli",
          email: "rakan@gmail.com",
          phone: 24343434,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anjad",
          email: "Anjad@gmail.com",
          phone: 24443434,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sam Walter",
          email: "walter@gmail.com",
          phone: 66643434,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
