import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

export function AIFluencyRadar() {
  const data = [
    { skill: 'Prompt Eng.', value: 90 },
    { skill: 'Data Analysis', value: 85 },
    { skill: 'ML/AI Tools', value: 80 },
    { skill: 'LLM Integration', value: 88 },
    { skill: 'AI Strategy', value: 90 }
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(0,0,0,0.1)" />
          <PolarAngleAxis dataKey="skill" stroke="#6b7280" />
          <PolarRadiusAxis stroke="#6b7280" />
          <Radar
            name="Proficiency"
            dataKey="value"
            stroke="#A855F7"
            fill="#A855F7"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
