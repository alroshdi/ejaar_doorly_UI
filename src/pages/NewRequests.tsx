import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Phone, MessageSquare, Send, Search } from 'lucide-react'
import './NewRequests.css'

interface Request {
  id: string
  clientName: string
  propertyType: string
  city: string
  budget: string
  status: 'new' | 'contacted' | 'offered'
  date: string
}

const mockRequests: Request[] = [
  { id: 'REQ-001', clientName: 'Ahmed Al-Mansoori', propertyType: 'Villa', city: 'Muscat', budget: 'OMR 2,500', status: 'new', date: '2025-01-15' },
  { id: 'REQ-002', clientName: 'Fatima Al-Zahra', propertyType: 'Apartment', city: 'Salalah', budget: 'OMR 800', status: 'new', date: '2025-01-15' },
  { id: 'REQ-003', clientName: 'Mohammed Al-Hashmi', propertyType: 'Commercial', city: 'Muscat', budget: 'OMR 5,000', status: 'contacted', date: '2025-01-14' },
  { id: 'REQ-004', clientName: 'Sara Al-Balushi', propertyType: 'Villa', city: 'Nizwa', budget: 'OMR 1,800', status: 'new', date: '2025-01-15' },
  { id: 'REQ-005', clientName: 'Khalid Al-Saadi', propertyType: 'Apartment', city: 'Muscat', budget: 'OMR 600', status: 'offered', date: '2025-01-13' },
  { id: 'REQ-006', clientName: 'Layla Al-Mazrouei', propertyType: 'Land', city: 'Sohar', budget: 'OMR 15,000', status: 'new', date: '2025-01-15' },
  { id: 'REQ-007', clientName: 'Omar Al-Kindi', propertyType: 'Villa', city: 'Muscat', budget: 'OMR 3,200', status: 'contacted', date: '2025-01-14' },
  { id: 'REQ-008', clientName: 'Noor Al-Abri', propertyType: 'Apartment', city: 'Salalah', budget: 'OMR 750', status: 'new', date: '2025-01-15' },
]

const NewRequests = () => {
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
      new: { label: t('new'), class: 'badge-new' },
      contacted: { label: t('contacted'), class: 'badge-contacted' },
      offered: { label: t('offered'), class: 'badge-offered' }
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.new
    return <span className={`status-badge ${config.class}`}>{config.label}</span>
  }

  const filteredRequests = mockRequests.filter(req => {
    if (searchQuery && !req.clientName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !req.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.city !== 'all' && req.city.toLowerCase() !== filters.city) return false
    if (filters.propertyType !== 'all' && req.propertyType.toLowerCase() !== filters.propertyType) return false
    if (filters.status !== 'all' && req.status !== filters.status) return false
    return true
  })

  const columns = [
    { key: 'id', label: t('requestId') },
    { key: 'clientName', label: t('clientName') },
    { key: 'propertyType', label: t('propertyType') },
    { key: 'city', label: t('city') },
    { key: 'budget', label: t('budget') },
    { key: 'status', label: t('status') },
    { key: 'date', label: t('date') },
    { key: 'actions', label: t('actions') }
  ]

  return (
    <div className="new-requests-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('newRequests')}</h2>
          <p className="page-subtitle">{t('manageRequests')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchRequests')}
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
          data={filteredRequests.map(req => ({
            ...req,
            status: getStatusBadge(req.status),
            actions: (
              <div className="action-buttons">
                <button className="action-btn action-call" title="Call">
                  <Phone size={16} />
                </button>
                <button className="action-btn action-message" title="Message">
                  <MessageSquare size={16} />
                </button>
                <button className="action-btn action-offer" title="Send Offer">
                  <Send size={16} />
                </button>
              </div>
            )
          }))}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">Showing {filteredRequests.length} of {mockRequests.length} requests</p>
      </div>
    </div>
  )
}

export default NewRequests



