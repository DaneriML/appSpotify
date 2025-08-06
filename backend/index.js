import express from 'express';
import 'dotenv/config';
import db from './src/config/connectionDB.js';
import userRoutes from './src/routes/userRoutes.js';

db.sync();



const app = express();
app.use(express.json());
app.use('/', userRoutes);


app.listen (process.env.SERVER_PORT || 3000, () => {
  console.log(`El servidor se está ejecutando en el puerto ${process.env.SERVER_PORT || 3000}`);
});
