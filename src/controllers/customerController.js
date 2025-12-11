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

const logInteraction = (req, res, next) => {
  try {
    const { id } = req.params;
    const { note, duration } = req.body;

    const result = customerService.logInteraction(id, note, duration);

    res.status(201).json({
      status: 'success',
      data: result
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDashboardData, logInteraction };