'use client'

import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 450 },
  { name: 'May', value: 600 },
  { name: 'Jun', value: 550 },
]

const barData = [
  { name: 'Q1', value: 2400 },
  { name: 'Q2', value: 1398 },
  { name: 'Q3', value: 9800 },
  { name: 'Q4', value: 3908 },
]

const areaData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
]

export default function Charts() {
  return (
    <div className="w-full space-y-3 rounded-lg bg-gray-50 p-4">
      {/* Line Chart */}
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <h3 className="mb-2 text-xs font-semibold text-gray-700">Performance Metrics</h3>
        <ResponsiveContainer width="100%" height={80}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#069494" 
              strokeWidth={2}
              dot={{ fill: '#069494', r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <h3 className="mb-2 text-xs font-semibold text-gray-700">Quarterly Growth</h3>
        <ResponsiveContainer width="100%" height={80}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px'
              }}
            />
            <Bar dataKey="value" fill="#069494" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart */}
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <h3 className="mb-2 text-xs font-semibold text-gray-700">Weekly Trends</h3>
        <ResponsiveContainer width="100%" height={80}>
          <AreaChart data={areaData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#069494" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#069494" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#069494" 
              fillOpacity={1} 
              fill="url(#colorValue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

