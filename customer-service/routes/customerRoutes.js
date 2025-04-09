const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/customers', customerController.createCustomer);
router.get('/customers/:id', customerController.getCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
