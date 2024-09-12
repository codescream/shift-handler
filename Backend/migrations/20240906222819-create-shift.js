'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shifts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Clients",
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      staffId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        set(val) {
          if(val === null) {
            this.setDataValue('status', 'open')
          }else {
            this.setDataValue('status', 'filled');
            this.setDataValue('staffId', val);
          }
        }
      },
      amount: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      paid: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['open', 'filled', 'ongoing', 'closed', 'finished'],
        allowNull: false,
        validate: {
          isIn: {
            args: [['open', 'filled', 'ongoing', 'closed', 'finished']],
            msg: "Must be one of these: 'open', 'filled', 'ongoing', 'closed', 'finished'"
          }
        },
        defaultValue: 'open',
        set(val) {
          if(val === "closed") {
            this.setDataValue('staffId', null);
          }
        }
      },
      notes: {
        type: Sequelize.JSON,
        defaultValue: {},
        //1:{name: "", notes: "", datetime: ""}
      },
      clockin: {
        type: Sequelize.JSON,
        defaultValue: {
          time: "",
          accuracy: 0.0,
          coords: {
            lat: 0.0,
            long: 0.0
          }
        },
        set(val) {
          if(val !== null) {
            this.setDataValue('status', 'ongoing');
            this.setDataValue('clockin', val);
          }
        }
      },
      clockout: {
        type: Sequelize.JSON,
        defaultValue: {
          time: "",
          accuracy: 0.0,
          coords: {
            lat: 0.0,
            long: 0.0
          }
        },
        set(val) {
          if(val !== null) {
            this.setDataValue('status', 'finished');
            this.setDataValue('clockout', val);
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shifts');
  }
};