import React from 'react'
import Badge from './Badge'
import { Link } from 'react-router-dom'

export default function TableRow({ item }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.job}</td>
      <td>{item.marital}</td>
      <td>{item.balance}</td>
      <td>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ fontWeight: 700 }}>{item.score}%</div>
          <Badge level={item.prediction} />
        </div>
      </td>
      <td><Link to={`/dashboard/customers/${item.id}`}>View Detail</Link></td>
    </tr>
  )
}
