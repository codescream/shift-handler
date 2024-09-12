import express from 'express';
import cors from 'cors';
import sequelize from './utils/DB.js';
import { env as _env } from 'process';
import path from 'path';
import { scheduleWelcome } from './emailService/welcome.js';
import { userRoutes, announceRoutes, authRoutes, incidentRoutes, clientRoutes, shiftRoutes } from './routes/index.js';

// configDotenv();
scheduleWelcome();

const PORT = _env.PORT || 8800;
console.log(PORT);

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/announcement", announceRoutes);
app.use("/auth", authRoutes);
app.use("/incident", incidentRoutes);
app.use("/client", clientRoutes);
app.use('/shift', shiftRoutes);

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