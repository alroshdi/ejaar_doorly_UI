import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Search, Wrench, AlertCircle } from 'lucide-react'
import './Maintains.css'

interface Maintenance {
  id: string
  property: string
  unit: string
  issue: string
  category: string
  reportedDate: string
  status: 'open' | 'in-progress' | 'completed'
  priority: 'urgent' | 'high' | 'medium' | 'low'
}

const mockMaintenance: Maintenance[] = [
  { id: 'MAINT-001', property: 'Al Khuwair Tower', unit: 'A-101', issue: 'AC Not Working', category: 'HVAC', reportedDate: '2025-01-10', status: 'in-progress', priority: 'urgent' },
  { id: 'MAINT-002', property: 'Salalah Heights', unit: 'V-205', issue: 'Leaking Pipe', category: 'Plumbing', reportedDate: '2025-01-12', status: 'open', priority: 'high' },
  { id: 'MAINT-003', property: 'Nizwa Residences', unit: 'A-402', issue: 'Broken Door Lock', category: 'Security', reportedDate: '2025-01-08', status: 'completed', priority: 'medium' },
  { id: 'MAINT-004', property: 'Seeb Garden Villas', unit: 'V-103', issue: 'Electrical Outlet Not Working', category: 'Electrical', reportedDate: '2025-01-15', status: 'open', priority: 'high' },
]

const Maintains = () => {
  const { t } = useTranslation()
  const [filters, setFilters] = useState({
    date: 'all',
    city: 'all',
    propertyType: 'all',
    status: 'all'
  })
  const [searchQuery, setSearchQuery] = useState('')

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      open: { label: t('open'), class: 'badge-open' },
      'in-progress': { label: t('inProgress'), class: 'badge-in-progress' },
      completed: { label: t('completed'), class: 'badge-completed' }
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.open
    return <span className={`status-badge ${config.class}`}>{config.label}</span>
  }

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      urgent: { label: t('urgent'), class: 'badge-urgent' },
      high: { label: t('high'), class: 'badge-high' },
      medium: { label: t('medium'), class: 'badge-medium' },
      low: { label: t('low'), class: 'badge-low' }
    }
    const config = priorityConfig[priority as keyof typeof priorityConfig] || priorityConfig.medium
    return <span className={`priority-badge ${config.class}`}>{config.label}</span>
  }

  const filteredMaintenance = mockMaintenance.filter(maint => {
    if (searchQuery && !maint.issue.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !maint.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.status !== 'all' && maint.status !== filters.status) return false
    return true
  })

  const columns = [
    { key: 'id', label: t('maintenanceId') },
    { key: 'property', label: t('property') },
    { key: 'unit', label: t('unit') },
    { key: 'issue', label: t('issue') },
    { key: 'category', label: t('category') },
    { key: 'reportedDate', label: t('reportedDate') },
    { key: 'status', label: t('status') },
    { key: 'priority', label: t('priority') }
  ]

  return (
    <div className="maintains-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('maintains')}</h2>
          <p className="page-subtitle">{t('manageMaintenance')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchMaintenance')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <div className="table-container">
        <DataTable
          columns={columns}
          data={filteredMaintenance.map(maint => ({
            ...maint,
            status: getStatusBadge(maint.status),
            priority: getPriorityBadge(maint.priority)
          }))}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">{t('showing')} {filteredMaintenance.length} {t('of')} {mockMaintenance.length} {t('maintenanceRequests')}</p>
      </div>
    </div>
  )
}

export default Maintains

