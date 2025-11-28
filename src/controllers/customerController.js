// src/controllers/customerController.js
const customerService = require('../services/customerService');

const getDashboardData = (req, res, next) => {
  try {
    const customers = customerService.getAllCustomers();

    res.status(200).json({
      status: 'success',
      data: {
        customers
      }
    });
  } catch (error) {
    next(error); // Lempar ke error handling middleware
  }
};

module.exports = { getDashboardData };