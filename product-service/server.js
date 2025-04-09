const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes'); // Đảm bảo rằng bạn đã có đúng file productRoutes.js

const app = express();
const PORT = process.env.PORT || 3004;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongodb:27017/mydb';

// Thay thế bodyParser bằng express.json() nếu bạn dùng Express >= 4.16
app.use(express.json()); // Cách mới để parse JSON request body

// Đưa productRoutes vào /products route
app.use('/products', productRoutes);

// Kết nối với MongoDB và sau đó khởi động server
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ Đã kết nối MongoDB');
        app.listen(PORT, () => console.log(`🚀 Product Service chạy tại cổng ${PORT}`));
    })
    .catch(err => console.error('❌ Lỗi MongoDB:', err));