import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
const dotenv = require('dotenv').config();

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
