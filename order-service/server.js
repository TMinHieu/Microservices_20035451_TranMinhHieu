const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3003;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongodb:27017/mydb';

app.use(bodyParser.json());
app.use('/orders', orderRoutes);

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('✅ Đã kết nối MongoDB');
        app.listen(PORT, () => console.log(`🚀 Order Service chạy tại cổng ${PORT}`));
    })
    .catch(err => console.error('❌ Lỗi MongoDB:', err));