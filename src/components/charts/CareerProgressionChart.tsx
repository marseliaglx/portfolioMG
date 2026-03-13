import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export function CareerProgressionChart() {
  const data = [
    { year: '2014', role: 'Junior', teamSize: 0 },
    { year: '2016', role: 'Mid-level', teamSize: 2 },
    { year: '2018', role: 'Senior', teamSize: 5 },
    { year: '2020', role: 'Lead', teamSize: 8 },
    { year: '2022', role: 'Manager', teamSize: 12 },
    { year: '2024', role: 'Director', teamSize: 15 }
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.08)" />
          <XAxis dataKey="year" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Line
            type="monotone"
            dataKey="teamSize"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ fill: '#10B981', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
