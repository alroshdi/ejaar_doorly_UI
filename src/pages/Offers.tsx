import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Phone, MessageSquare, Clock, Search } from 'lucide-react'
import './Offers.css'

interface Offer {
  id: string
  clientName: string
  propertyType: string
  city: string
  offerValue: string
  status: 'called' | 'messaged' | 'pending'
  expiryDate: string
  sentDate: string
}

const mockOffers: Offer[] = [
  { id: 'OFF-001', clientName: 'Ahmed Al-Mansoori', propertyType: 'Villa', city: 'Muscat', offerValue: 'OMR 2,400', status: 'called', expiryDate: '2025-01-25', sentDate: '2025-01-10' },
  { id: 'OFF-002', clientName: 'Fatima Al-Zahra', propertyType: 'Apartment', city: 'Salalah', offerValue: 'OMR 780', status: 'messaged', expiryDate: '2025-01-28', sentDate: '2025-01-12' },
  { id: 'OFF-003', clientName: 'Mohammed Al-Hashmi', propertyType: 'Commercial', city: 'Muscat', offerValue: 'OMR 4,800', status: 'pending', expiryDate: '2025-01-30', sentDate: '2025-01-13' },
  { id: 'OFF-004', clientName: 'Sara Al-Balushi', propertyType: 'Villa', city: 'Nizwa', offerValue: 'OMR 1,750', status: 'called', expiryDate: '2025-01-27', sentDate: '2025-01-11' },
  { id: 'OFF-005', clientName: 'Khalid Al-Saadi', propertyType: 'Apartment', city: 'Muscat', offerValue: 'OMR 580', status: 'messaged', expiryDate: '2025-01-26', sentDate: '2025-01-09' },
  { id: 'OFF-006', clientName: 'Layla Al-Mazrouei', propertyType: 'Land', city: 'Sohar', offerValue: 'OMR 14,500', status: 'pending', expiryDate: '2025-02-01', sentDate: '2025-01-14' },
  { id: 'OFF-007', clientName: 'Omar Al-Kindi', propertyType: 'Villa', city: 'Muscat', offerValue: 'OMR 3,100', status: 'called', expiryDate: '2025-01-29', sentDate: '2025-01-12' },
  { id: 'OFF-008', clientName: 'Noor Al-Abri', propertyType: 'Apartment', city: 'Salalah', offerValue: 'OMR 720', status: 'messaged', expiryDate: '2025-01-24', sentDate: '2025-01-08' },
]

const Offers = () => {
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
      called: { label: t('called'), class: 'badge-called', icon: Phone },
      messaged: { label: t('messaged'), class: 'badge-messaged', icon: MessageSquare },
      pending: { label: t('pending'), class: 'badge-pending', icon: Clock }
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    const Icon = config.icon
    return (
      <span className={`status-badge ${config.class}`}>
        <Icon size={14} />
        {config.label}
      </span>
    )
  }

  const filteredOffers = mockOffers.filter(offer => {
    if (searchQuery && !offer.clientName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !offer.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.city !== 'all' && offer.city.toLowerCase() !== filters.city) return false
    if (filters.propertyType !== 'all' && offer.propertyType.toLowerCase() !== filters.propertyType) return false
    if (filters.status !== 'all' && offer.status !== filters.status) return false
    return true
  })

  const columns = [
    { key: 'id', label: t('offerId') },
    { key: 'clientName', label: t('clientName') },
    { key: 'propertyType', label: t('propertyType') },
    { key: 'city', label: t('city') },
    { key: 'offerValue', label: t('offerValue') },
    { key: 'status', label: t('communicationStatus') },
    { key: 'sentDate', label: t('sentDate') },
    { key: 'expiryDate', label: t('expiryDate') }
  ]

  return (
    <div className="offers-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('offers')}</h2>
          <p className="page-subtitle">{t('trackOffers')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchOffers')}
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
          data={filteredOffers.map(offer => ({
            ...offer,
            status: getStatusBadge(offer.status)
          }))}
        />
      </div>

      <div className="page-footer">
        <div className="summary-cards">
          <div className="summary-card">
            <span className="summary-label">{t('totalOffers')}</span>
            <span className="summary-value">{mockOffers.length}</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">{t('called')}</span>
            <span className="summary-value">{mockOffers.filter(o => o.status === 'called').length}</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">{t('messaged')}</span>
            <span className="summary-value">{mockOffers.filter(o => o.status === 'messaged').length}</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">{t('pending')}</span>
            <span className="summary-value">{mockOffers.filter(o => o.status === 'pending').length}</span>
          </div>
        </div>
        <p className="results-count">{t('showing')} {filteredOffers.length} {t('of')} {mockOffers.length} {t('offers')}</p>
      </div>
    </div>
  )
}

export default Offers



