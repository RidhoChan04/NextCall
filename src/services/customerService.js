// src/services/customerService.js
const { customers } = require('../database/mockData');

class CustomerService {
  getAllCustomers() {
    // Logika: Mengembalikan daftar nasabah
    // Fitur Dashboard: Urutkan berdasarkan probabilityScore tertinggi ke terendah
    const sortedCustomers = [...customers].sort((a, b) => b.probabilityScore - a.probabilityScore);
    return sortedCustomers;
  }

  // Nanti kita tambah fitur filter/search di sini
  logInteraction(customerId, note, duration) {
    // In a real app, this would save to a database
    // For now, we'll just return a success message mock
    return {
      success: true,
      message: `Interaction logged for customer ${customerId}`,
      data: {
        customerId,
        note,
        duration,
        timestamp: new Date().toISOString()
      }
    };
  }
}

module.exports = new CustomerService();