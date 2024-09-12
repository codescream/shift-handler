'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('incidents', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      incidentDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      incidentTime: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key: "id",
        },
        allowNull: false,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('incidents');
  }
};
