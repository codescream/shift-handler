import { Sequelize } from 'sequelize';
import { configDotenv } from 'dotenv';

configDotenv();

const sequelize = new Sequelize(process.env.DB_STRING, {});

export default sequelize;