require('./models/User');
require('./models/FoodList');

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');
const requireAuth = require('./middlewares/requireAuth');

const dotenv = require('dotenv').config();
const app = express();

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(authRoutes);
app.use(foodRoutes);

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB");
})
mongoose.connection.on('error', error => {
  console.error("Error connecting to MongoDB", error);
})

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
