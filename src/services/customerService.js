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
}

module.exports = new CustomerService();