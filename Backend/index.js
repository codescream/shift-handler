import express from 'express';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import { configDotenv } from 'dotenv';

configDotenv();

const PORT = process.env.PORT || 8800;

const sequelize = new Sequelize(process.env.DB_STRING, {});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log("server request received");

  res.send("connected to server");
});

app.listen(PORT, async () => {
  console.log(`listening on ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('DB connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});