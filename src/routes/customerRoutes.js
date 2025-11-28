// src/routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Endpoint: GET /customers (Untuk dashboard)
router.get('/', customerController.getDashboardData);

module.exports = router;