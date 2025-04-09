const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Tạo sản phẩm mới
router.post('/', async(req, res) => {
    try {
        const product = new Product(req.body);
        const saved = await product.save();
        res.status(201).json(saved); // Trả về sản phẩm đã lưu với mã 201
    } catch (err) {
        res.status(400).json({ error: err.message }); // Lỗi với dữ liệu đầu vào
    }
});

// Lấy sản phẩm theo ID
router.get('/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm với ID này' });
        }
        res.json(product); // Trả về sản phẩm nếu tìm thấy
    } catch (err) {
        res.status(500).json({ error: 'Lỗi máy chủ: ' + err.message });
    }
});

// Cập nhật sản phẩm
router.put('/:id', async(req, res) => {
    try {
        // Kiểm tra nếu sản phẩm có tồn tại không
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }

        // Cập nhật sản phẩm
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated); // Trả về sản phẩm đã cập nhật
    } catch (err) {
        res.status(400).json({ error: 'Lỗi khi cập nhật sản phẩm: ' + err.message });
    }
});

// Xóa sản phẩm
router.delete('/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm để xóa' });
        }

        // Xóa sản phẩm
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Đã xóa sản phẩm thành công' });
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi xóa sản phẩm: ' + err.message });
    }
});

module.exports = router;