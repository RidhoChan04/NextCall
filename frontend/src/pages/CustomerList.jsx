import React, { useState } from 'react'
import TableRow from '../components/TableRow'

const sample = [
  { id: 1, name: 'Ahmad Rizki', age: 35, job: 'Management', marital: 'Married', balance: 'Rp 125.000.000', score: 87, prediction: 'high' },
  { id: 2, name: 'Siti Nurhaliza', age: 42, job: 'Technician', marital: 'Married', balance: 'Rp 85.000.000', score: 78, prediction: 'high' },
  { id: 3, name: 'Budi Santoso', age: 28, job: 'Entrepreneur', marital: 'Single', balance: 'Rp 195.000.000', score: 92, prediction: 'high' },
  { id: 4, name: 'Dewi Lestari', age: 38, job: 'Admin', marital: 'Married', balance: 'Rp 68.000.000', score: 65, prediction: 'medium' },
  { id: 5, name: 'Eko Prasetyo', age: 45, job: 'Blue-collar', marital: 'Married', balance: 'Rp 45.000.000', score: 55, prediction: 'low' },
  { id: 6, name: 'Fina Andriani', age: 29, job: 'Services', marital: 'Single', balance: 'Rp 110.000.000', score: 82, prediction: 'high' },
  { id: 7, name: 'Gunawan Wibowo', age: 50, job: 'Retired', marital: 'Married', balance: 'Rp 250.000.000', score: 88, prediction: 'high' },
  { id: 8, name: 'Hani Safitri', age: 32, job: 'Technician', marital: 'Divorced', balance: 'Rp 75.000.000', score: 70, prediction: 'medium' },
  { id: 9, name: 'Indra Wijaya', age: 41, job: 'Management', marital: 'Married', balance: 'Rp 150.000.000', score: 95, prediction: 'high' },
  { id: 10, name: 'Joko Susilo', age: 36, job: 'Self-employed', marital: 'Married', balance: 'Rp 90.000.000', score: 72, prediction: 'medium' },
]

export default function Customers() {
  const [q, setQ] = useState('')
  const [job, setJob] = useState('All')
  const [status, setStatus] = useState('All')

  const filtered = sample.filter(s => (s.name.toLowerCase().includes(q.toLowerCase()) || s.job.toLowerCase().includes(q.toLowerCase())) && (job === 'All' || s.job === job))

  return (
    <div>
      <div className="header">
        <div className="page-title">Daftar Nasabah</div>
      </div>

      <div className="container">
        <div className="search-row">
          <input className="input" placeholder="Cari nama atau pekerjaan..." value={q} onChange={e => setQ(e.target.value)} />
          <select className="filter" value={job} onChange={e => setJob(e.target.value)}>
            <option>All</option>
            <option>Management</option>
            <option>Technician</option>
            <option>Entrepreneur</option>
            <option>Admin</option>
          </select>
          <select className="filter" value={status} onChange={e => setStatus(e.target.value)}>
            <option>All</option>
            <option>Married</option>
            <option>Single</option>
          </select>
          <select className="filter">
            <option>All Scores</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Usia</th>
              <th>Pekerjaan</th>
              <th>Status</th>
              <th>Saldo</th>
              <th>Skor Prediksi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(i => <TableRow key={i.id} item={i} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
