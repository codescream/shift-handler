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
    await queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      DOB: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ndisNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "client",
      },
      desc: Sequelize.TEXT,
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      picture: {
        type: Sequelize.STRING,
      },
      documents: {
        type: Sequelize.JSON
      }
    });

    await queryInterface.sequelize.query('ALTER TABLE Clients AUTO_INCREMENT = 1000;');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('clients');
  }
};
