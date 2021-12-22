import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';

const app = express();
const dotenv = require('dotenv').config();

app.use(authRoutes);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB");
})
mongoose.connection.on('error', error => {
  console.error("Error connecting to MongoDB", error);
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
