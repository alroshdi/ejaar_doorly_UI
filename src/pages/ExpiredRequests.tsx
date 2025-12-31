import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Search, AlertCircle, RefreshCw } from 'lucide-react'
import './ExpiredRequests.css'

interface ExpiredRequest {
  id: string
  clientName: string
  propertyType: string
  city: string
  budget: string
  expiredDate: string
  daysExpired: number
}

const mockExpiredRequests: ExpiredRequest[] = [
  { id: 'REQ-101', clientName: 'Ahmed Al-Mansoori', propertyType: 'Villa', city: 'Muscat', budget: 'OMR 2,500', expiredDate: '2025-01-05', daysExpired: 10 },
  { id: 'REQ-102', clientName: 'Fatima Al-Zahra', propertyType: 'Apartment', city: 'Salalah', budget: 'OMR 800', expiredDate: '2025-01-08', daysExpired: 7 },
  { id: 'REQ-103', clientName: 'Mohammed Al-Hashmi', propertyType: 'Commercial', city: 'Muscat', budget: 'OMR 5,000', expiredDate: '2025-01-03', daysExpired: 12 },
  { id: 'REQ-104', clientName: 'Sara Al-Balushi', propertyType: 'Villa', city: 'Nizwa', budget: 'OMR 1,800', expiredDate: '2025-01-10', daysExpired: 5 },
  { id: 'REQ-105', clientName: 'Khalid Al-Saadi', propertyType: 'Apartment', city: 'Muscat', budget: 'OMR 600', expiredDate: '2025-01-07', daysExpired: 8 },
  { id: 'REQ-106', clientName: 'Layla Al-Mazrouei', propertyType: 'Land', city: 'Sohar', budget: 'OMR 15,000', expiredDate: '2025-01-01', daysExpired: 14 },
  { id: 'REQ-107', clientName: 'Omar Al-Kindi', propertyType: 'Villa', city: 'Muscat', budget: 'OMR 3,200', expiredDate: '2025-01-06', daysExpired: 9 },
  { id: 'REQ-108', clientName: 'Noor Al-Abri', propertyType: 'Apartment', city: 'Salalah', budget: 'OMR 750', expiredDate: '2025-01-09', daysExpired: 6 },
]

const ExpiredRequests = () => {
  const { t } = useTranslation()
  const [filters, setFilters] = useState({
    date: 'all',
    city: 'all',
    propertyType: 'all',
    status: 'all'
  })
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRequests = mockExpiredRequests.filter(req => {
    if (searchQuery && !req.clientName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !req.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.city !== 'all' && req.city.toLowerCase() !== filters.city) return false
    if (filters.propertyType !== 'all' && req.propertyType.toLowerCase() !== filters.propertyType) return false
    return true
  })

  const getDaysExpiredBadge = (days: number) => {
    let className = 'days-badge'
    if (days >= 14) className += ' days-critical'
    else if (days >= 7) className += ' days-warning'
    else className += ' days-info'
    
    return <span className={className}>{days} {t('daysExpired')}</span>
  }

  const columns = [
    { key: 'id', label: t('requestId') },
    { key: 'clientName', label: t('clientName') },
    { key: 'propertyType', label: t('propertyType') },
    { key: 'city', label: t('city') },
    { key: 'budget', label: t('budget') },
    { key: 'expiredDate', label: t('expiredDate') },
    { key: 'daysExpired', label: t('status') },
    { key: 'actions', label: t('actions') }
  ]

  return (
    <div className="expired-requests-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('expiredRequests')}</h2>
          <p className="page-subtitle">{t('reviewExpired')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchExpired')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="alert-banner">
        <AlertCircle size={20} />
        <div className="alert-content">
          <span className="alert-title">{t('expiredRequestsAlert')}</span>
          <span className="alert-message">
            {t('expiredRequestsMessage', { count: mockExpiredRequests.length })}
          </span>
        </div>
      </div>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <div className="table-container">
        <DataTable
          columns={columns}
          data={filteredRequests.map(req => ({
            ...req,
            daysExpired: getDaysExpiredBadge(req.daysExpired),
            actions: (
              <div className="action-buttons">
                <button className="action-btn action-reactivate" title={t('reactivate')}>
                  <RefreshCw size={16} />
                  {t('reactivate')}
                </button>
              </div>
            )
          }))}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">{t('showing')} {filteredRequests.length} {t('of')} {mockExpiredRequests.length} {t('expiredRequests')}</p>
      </div>
    </div>
  )
}

export default ExpiredRequests



