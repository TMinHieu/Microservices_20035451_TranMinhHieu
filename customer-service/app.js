const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const customerRoutes = require('./routes/customerRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', customerRoutes);

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Customer Service is running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
