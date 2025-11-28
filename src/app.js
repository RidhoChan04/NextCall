require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const customerRoutes = require('./routes/customerRoutes');
// const authRoutes = require('./routes/authRoutes'); // Nanti kita buat

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parsing JSON body
app.use(cors());         // Allow Cross-Origin
app.use(morgan('dev'));  // Logging

// Routes
app.use('/customers', customerRoutes);
// app.use('/auth', authRoutes);

// Error Handling Middleware (Sederhana)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Terjadi kesalahan pada server'
  });
});

app.listen(port, () => {
  console.log(`Server Sales Dashboard berjalan di http://localhost:${port}`);
});