import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Search, Clock, User } from 'lucide-react'
import './WaitingList.css'

interface WaitingListItem {
  id: string
  name: string
  propertyType: string
  city: string
  budget: string
  joinDate: string
  priority: 'high' | 'medium' | 'low'
}

const mockWaitingList: WaitingListItem[] = [
  { id: 'WL-001', name: 'Ahmed Al-Mansoori', propertyType: 'Villa', city: 'Muscat', budget: 'OMR 2,500', joinDate: '2025-01-05', priority: 'high' },
  { id: 'WL-002', name: 'Fatima Al-Zahra', propertyType: 'Apartment', city: 'Salalah', budget: 'OMR 800', joinDate: '2025-01-08', priority: 'medium' },
  { id: 'WL-003', name: 'Mohammed Al-Hashmi', propertyType: 'Commercial', city: 'Muscat', budget: 'OMR 5,000', joinDate: '2025-01-10', priority: 'high' },
  { id: 'WL-004', name: 'Sara Al-Balushi', propertyType: 'Villa', city: 'Nizwa', budget: 'OMR 1,800', joinDate: '2025-01-12', priority: 'low' },
]

const WaitingList = () => {
  const { t } = useTranslation()
  const [filters, setFilters] = useState({
    date: 'all',
    city: 'all',
    propertyType: 'all',
    status: 'all'
  })
  const [searchQuery, setSearchQuery] = useState('')

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      high: { label: t('high'), class: 'badge-high' },
      medium: { label: t('medium'), class: 'badge-medium' },
      low: { label: t('low'), class: 'badge-low' }
    }
    const config = priorityConfig[priority as keyof typeof priorityConfig] || priorityConfig.medium
    return <span className={`status-badge ${config.class}`}>{config.label}</span>
  }

  const filteredList = mockWaitingList.filter(item => {
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.city !== 'all' && item.city.toLowerCase() !== filters.city) return false
    if (filters.propertyType !== 'all' && item.propertyType.toLowerCase() !== filters.propertyType) return false
    return true
  })

  const columns = [
    { key: 'id', label: t('waitingListId') },
    { key: 'name', label: t('name') },
    { key: 'propertyType', label: t('propertyType') },
    { key: 'city', label: t('city') },
    { key: 'budget', label: t('budget') },
    { key: 'joinDate', label: t('joinDate') },
    { key: 'priority', label: t('priority') }
  ]

  return (
    <div className="waiting-list-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('waitingList')}</h2>
          <p className="page-subtitle">{t('manageWaitingList')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchWaitingList')}
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
          data={filteredList.map(item => ({
            ...item,
            priority: getPriorityBadge(item.priority)
          }))}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">{t('showing')} {filteredList.length} {t('of')} {mockWaitingList.length} {t('waitingListItems')}</p>
      </div>
    </div>
  )
}

export default WaitingList

