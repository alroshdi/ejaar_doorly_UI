import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useTranslation } from '../contexts/TranslationContext'

const data = [
  { month: 'Jan', requests: 45, deals: 8 },
  { month: 'Feb', requests: 52, deals: 12 },
  { month: 'Mar', requests: 48, deals: 10 },
  { month: 'Apr', requests: 61, deals: 15 },
  { month: 'May', requests: 55, deals: 14 },
  { month: 'Jun', requests: 67, deals: 18 },
  { month: 'Jul', requests: 59, deals: 16 },
  { month: 'Aug', requests: 63, deals: 17 },
  { month: 'Sep', requests: 58, deals: 15 },
  { month: 'Oct', requests: 65, deals: 20 },
  { month: 'Nov', requests: 62, deals: 19 },
  { month: 'Dec', requests: 70, deals: 23 },
]

export const RequestsVsDealsChart = () => {
  const { t } = useTranslation()
  
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="month" 
          stroke="#6b7280"
          style={{ fontSize: '0.75rem' }}
        />
        <YAxis 
          stroke="#6b7280"
          style={{ fontSize: '0.75rem' }}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem',
            fontSize: '0.875rem'
          }}
        />
        <Legend 
          wrapperStyle={{ fontSize: '0.875rem' }}
          iconType="square"
        />
        <Bar 
          dataKey="requests" 
          fill="#3b82f6" 
          name={t('requests')}
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="deals" 
          fill="#6b7280" 
          name={t('closedDeals')}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}



