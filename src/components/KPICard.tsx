import { LucideIcon } from 'lucide-react'
import './KPICard.css'

interface KPICardProps {
  title: string
  icon: LucideIcon
  color: 'blue' | 'green' | 'success' | 'warning' | 'danger' | 'info'
  children: React.ReactNode
}

export const KPICard = ({ title, icon: Icon, color, children }: KPICardProps) => {
  return (
    <div className={`kpi-card kpi-card-${color}`}>
      <div className="kpi-card-header">
        <div className="kpi-icon-wrapper">
          <Icon size={24} />
        </div>
        <h3 className="kpi-card-title">{title}</h3>
      </div>
      <div className="kpi-card-content">
        {children}
      </div>
    </div>
  )
}






