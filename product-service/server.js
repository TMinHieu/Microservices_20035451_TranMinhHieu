const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3004;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/products';

app.use(bodyParser.json());
app.use('/products', productRoutes);

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('✅ Đã kết nối MongoDB');
    app.listen(PORT, () => console.log(`🚀 Product Service chạy tại cổng ${PORT}`));
  })
  .catch(err => console.error('❌ Lỗi MongoDB:', err));
