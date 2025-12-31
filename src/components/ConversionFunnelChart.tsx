import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useTranslation } from '../contexts/TranslationContext'

export const ConversionFunnelChart = () => {
  const { t } = useTranslation()
  
  const data = [
    { stage: t('newRequestsTitle'), value: 187, color: '#3b82f6' },
    { stage: t('contacted'), value: 145, color: '#60a5fa' },
    { stage: t('sentOffersTitle'), value: 98, color: '#93c5fd' },
    { stage: t('negotiating'), value: 67, color: '#cbd5e1' },
    { stage: t('closedDealsTitle'), value: 23, color: '#10b981' },
  ]
  
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart 
        data={data} 
        layout="vertical"
        margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          type="number"
          stroke="#6b7280"
          style={{ fontSize: '0.75rem' }}
        />
        <YAxis 
          type="category"
          dataKey="stage"
          stroke="#6b7280"
          style={{ fontSize: '0.75rem' }}
          width={90}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem',
            fontSize: '0.875rem'
          }}
        />
        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}



