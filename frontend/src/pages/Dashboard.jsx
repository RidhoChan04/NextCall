import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  // Mock Data: Priority Worklist
  const priorityLeads = [
    { id: 1, name: 'Ahmad Rizki', score: 87, type: 'High Value', phone: '+62 812-3456-7890' },
    { id: 3, name: 'Budi Santoso', score: 92, type: 'Potential Churn', phone: '+62 811-2345-6789' },
    { id: 6, name: 'Fina Andriani', score: 82, type: 'Upsell Opportunity', phone: '+62 813-4567-8901' },
    { id: 7, name: 'Gunawan Wibowo', score: 88, type: 'Retirement Plan', phone: '+62 815-6789-0123' },
  ]

  return (
    <div>
      <div className="header">
        <div className="page-title">Sales Dashboard</div>
        <div style={{ fontSize: 13, color: '#666' }}>Welcome back, Eka. You have 4 high-priority leads today.</div>
      </div>

      <div className="grid">
        {/* LEFT COLUMN: ACTIONABLE WORKLIST */}
        <div className="col-8">
          <div className="card">
            <h3 style={{ marginBottom: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              High Priority Worklist
              <span style={{ fontSize: 12, background: '#eef2f7', padding: '4px 10px', borderRadius: 12, color: '#667eea' }}>
                {priorityLeads.length} Leads
              </span>
            </h3>

            <div className="worklist">
              {priorityLeads.map((lead) => (
                <div key={lead.id} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px', borderBottom: '1px solid #f0f0f0', transition: 'background 0.2s'
                }} className="worklist-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', background: '#f0f9ff',
                      color: '#0b66ff', border: '1px solid #e0f2fe', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
                    }}>
                      {lead.score}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{lead.name}</div>
                      <div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>
                        {lead.type} • {lead.phone}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <button className="btn ghost" onClick={() => navigate(`/dashboard/customers/${lead.id}`)}>View</button>
                    <button className="btn primary" onClick={() => navigate(`/dashboard/customers/${lead.id}`)}>Call</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 15, textAlign: 'center' }}>
              <button className="btn ghost" onClick={() => navigate('/dashboard/customers')}>View All Customers</button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: TARGETS & QUICK ACTIONS */}
        <div className="col-4">
          {/* DAILY TARGET CARD */}
          <div className="card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <div style={{ marginBottom: 5, fontSize: 13, opacity: 0.9 }}>Today's Target</div>
            <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 15 }}>12 / 20 Calls</div>

            <div style={{ background: 'rgba(255,255,255,0.2)', height: 6, borderRadius: 3, marginBottom: 10 }}>
              <div style={{ width: '60%', background: 'white', height: 6, borderRadius: 3 }}></div>
            </div>
            <div style={{ fontSize: 12, opacity: 0.9 }}>8 calls remaining to hit goal</div>
          </div>

          <div className="card" style={{ marginTop: 20 }}>
            <h4 style={{ marginBottom: 15 }}>Quick Actions</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ padding: 15, border: '1px solid #eee', borderRadius: 8, textAlign: 'center', cursor: 'pointer' }} className="hover-card">
                <div style={{ fontSize: 24, marginBottom: 5 }}>📅</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Calendar</div>
              </div>
              <div style={{ padding: 15, border: '1px solid #eee', borderRadius: 8, textAlign: 'center', cursor: 'pointer' }} className="hover-card">
                <div style={{ fontSize: 24, marginBottom: 5 }}>📝</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Notes</div>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 20 }}>
            <h4 style={{ marginBottom: 10 }}>Recent Activity</h4>
            <div style={{ fontSize: 13 }}>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                <div><strong>Called Budi S.</strong></div>
                <div style={{ color: '#666', fontSize: 12 }}>10 mins ago • No Answer</div>
              </div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                <div><strong>Email to Dewi L.</strong></div>
                <div style={{ color: '#666', fontSize: 12 }}>1 hour ago • Sent</div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div><strong>Meeting with Ahmad R.</strong></div>
                <div style={{ color: '#666', fontSize: 12 }}>Yesterday • Successful</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
