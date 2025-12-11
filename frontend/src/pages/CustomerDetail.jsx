import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Mock Data Source (In real app this comes from API)
const kCustomers = [
  { id: 1, name: 'Ahmad Rizki', age: 35, job: 'Management', education: 'University Degree', marital: 'Married', balance: 'Rp 125.000.000', email: 'ahmad.rizki@email.com', phone: '+62 812-3456-7890', lastContact: '15 Oktober 2024', score: 87, prediction: 'high' },
  { id: 2, name: 'Siti Nurhaliza', age: 42, job: 'Technician', education: 'Diploma', marital: 'Married', balance: 'Rp 85.000.000', email: 'siti.nur@email.com', phone: '+62 813-4567-8901', lastContact: '10 September 2024', score: 78, prediction: 'high' },
  { id: 3, name: 'Budi Santoso', age: 28, job: 'Entrepreneur', education: 'High School', marital: 'Single', balance: 'Rp 195.000.000', email: 'budi.s@email.com', phone: '+62 811-2345-6789', lastContact: '05 November 2024', score: 92, prediction: 'high' },
  { id: 4, name: 'Dewi Lestari', age: 38, job: 'Admin', education: 'Bachelor', marital: 'Married', balance: 'Rp 68.000.000', email: 'dewi.l@email.com', phone: '+62 815-6789-0123', lastContact: '20 Oktober 2024', score: 65, prediction: 'medium' },
]

export default function CustomerDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Find customer or default to first
  const person = kCustomers.find(c => c.id === parseInt(id)) || kCustomers[0]

  const [isCalling, setIsCalling] = useState(false)
  const [callStatus, setCallStatus] = useState('idle') // idle, ringing, connected, ended
  const [notes, setNotes] = useState('')

  // Simulated Call Logic
  const startCall = () => {
    setIsCalling(true)
    setCallStatus('ringing')
    setTimeout(() => {
      setCallStatus('connected')
    }, 2000)
  }

  const endCall = () => {
    setCallStatus('ended')
  }

  const saveLog = async () => {
    try {
      // ACTUAL API CALL TO BACKEND
      const response = await fetch(`http://localhost:3000/customers/${person.id}/interaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          note: notes,
          duration: '45s' // In real app, calculate actual duration
        })
      })

      if (response.ok) {
        alert(`✅ Success! Interaction saved to Backend (Express.js)\n\nNote: ${notes}`)
        setIsCalling(false)
        setCallStatus('idle')
        setNotes('')
      } else {
        alert('Failed to save log.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Could not connect to backend.')
    }
  }



  // Icons
  const PhoneIcon = () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>

  return (
    <div>
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="page-title">Detail Nasabah</div>
        <button className="btn ghost" onClick={() => navigate('/dashboard/customers')}>Kembali ke List</button>
      </div>

      {/* CALL MODAL OVERLAY */}
      {isCalling && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', zIndex: 100,
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div className="card" style={{ width: 400, padding: 30, textAlign: 'center' }}>
            {callStatus === 'ringing' && (
              <div className="animate-pulse">
                <div style={{ marginBottom: 20, color: '#667eea' }}><PhoneIcon /></div>
                <h3>Menghubungi {person.name}...</h3>
                <p>{person.phone}</p>
              </div>
            )}
            {callStatus === 'connected' && (
              <div>
                <div style={{ marginBottom: 20, color: '#2ecc71' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <h3>Terhubung</h3>
                <p style={{ color: '#6b7280' }}>Durasi: 00:45</p>
                <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />
                <div style={{ textAlign: 'left' }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#444' }}>Catatan Panggilan:</label>
                  <textarea
                    style={{ width: '100%', marginTop: 8, padding: 10, borderRadius: 6, border: '1px solid #ddd' }}
                    rows={4}
                    placeholder="Tulis hasil pembicaraan..."
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                  ></textarea>
                </div>
                <button className="btn primary" style={{ background: '#e74c3c', width: '100%', marginTop: 15 }} onClick={endCall}>
                  Akhiri Panggilan
                </button>
              </div>
            )}
            {callStatus === 'ended' && (
              <div>
                <h3>Panggilan Selesai</h3>
                <p style={{ marginBottom: 20, color: '#6b7280' }}>Jangan lupa simpan log aktivitas ini.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button className="btn ghost" style={{ flex: 1 }} onClick={() => setIsCalling(false)}>Batal</button>
                  <button className="btn primary" style={{ flex: 1 }} onClick={saveLog}>Simpan Log</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid">
        <div className="col-8">
          <div className="card profile-card">
            <h3>Informasi Pribadi</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <div style={{ color: '#6b7280' }}>Nama Lengkap</div>
                <div style={{ fontWeight: 700 }}>{person.name}</div>

                <div style={{ color: '#6b7280', marginTop: 10 }}>Pekerjaan</div>
                <div style={{ fontWeight: 700 }}>{person.job}</div>

                <div style={{ color: '#6b7280', marginTop: 10 }}>Pendidikan</div>
                <div style={{ fontWeight: 700 }}>{person.education}</div>
              </div>

              <div>
                <div style={{ color: '#6b7280' }}>Usia</div>
                <div style={{ fontWeight: 700 }}>{person.age} tahun</div>

                <div style={{ color: '#6b7280', marginTop: 10 }}>Status Pernikahan</div>
                <div style={{ fontWeight: 700 }}>{person.marital}</div>

                <div style={{ color: '#6b7280', marginTop: 10 }}>Saldo Rekening</div>
                <div style={{ fontWeight: 700 }}>{person.balance}</div>
              </div>
            </div>

            <div style={{ marginTop: 25, paddingTop: 20, borderTop: '1px solid #f0f0f0' }}></div>

            <div className="action-row" style={{ marginTop: 25 }}>
              <button className="btn primary" onClick={startCall}>Call Now</button>
              <button className="btn ghost">Schedule Meeting</button>
              <button className="btn ghost">Send Email</button>
            </div>

            <div style={{ marginTop: 30 }}>
              <h4>Activity History</h4>
              <ul style={{ paddingLeft: 18, marginTop: 10, color: '#444' }}>
                <li style={{ marginBottom: 8 }}><strong>15 Oct 2024</strong> — Called, customer interested in Gold Plan.</li>
                <li style={{ marginBottom: 8 }}><strong>03 Sep 2024</strong> — Email sent regarding promo.</li>
                <li style={{ marginBottom: 8 }}><strong>20 Jun 2024</strong> — Account activity detected.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', marginBottom: 5 }}>Approval Probability</div>
              <div style={{ fontSize: 48, fontWeight: 800, color: person.score > 80 ? '#12b76a' : person.score > 50 ? '#f39c12' : '#e74c3c' }}>
                {person.score}%
              </div>

              <div style={{ height: 10, background: '#eef2f7', borderRadius: 10, marginTop: 12, overflow: 'hidden' }}>
                <div style={{
                  width: `${person.score}%`,
                  height: 10,
                  background: person.score > 80 ? '#12b76a' : person.score > 50 ? '#f39c12' : '#e74c3c',
                  borderRadius: 10
                }}></div>
              </div>
            </div>

            <div style={{ marginTop: 25 }}>
              <h5 style={{ marginBottom: 10 }}>Key Success Factors (Why?)</h5>
              <div style={{ fontSize: 13 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>Stable Balance</span>
                  <span style={{ color: '#12b76a', fontWeight: 700 }}>+15%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>{person.marital} Status</span>
                  <span style={{ color: '#12b76a', fontWeight: 700 }}>+10%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>Age Range ({person.age})</span>
                  <span style={{ color: '#12b76a', fontWeight: 700 }}>+5%</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16 }} className="card">
            <div style={{ fontWeight: 700 }}>Rekomendasi</div>
            <div style={{ marginTop: 8, background: '#f6fbff', padding: 12, borderRadius: 8, border: '1px solid #e0f2fe' }}>
              <div style={{ fontWeight: 700, color: '#0b66ff' }}>
                {person.score > 80 ? 'Prioritas Tinggi' : 'Prioritas Sedang'}
              </div>
              <div style={{ marginTop: 8, color: '#6b7280', fontSize: 13 }}>
                Nasabah ini memiliki potensi {person.score > 80 ? 'sangat tinggi' : 'cukup baik'} untuk dihubungi.
              </div>
              <ul style={{ paddingLeft: 18, marginTop: 10, fontSize: 13, lineHeight: '1.5' }}>
                <li><strong>Tindakan:</strong> Hubungi dalam 24 jam</li>
                <li><strong>Produk:</strong> {person.score > 80 ? 'Platinum Cards' : 'Regular Savings'}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
