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
    await queryInterface.addColumn('Incidents', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
    });

    await queryInterface.addColumn('Incidents', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Incidents', 'createdAt');
    await queryInterface.removeColumn('Incidents', 'updatedAt');
  }
};
