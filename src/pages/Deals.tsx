import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Search, TrendingUp } from 'lucide-react'
import './Deals.css'

interface Deal {
  id: string
  clientName: string
  propertyType: string
  city: string
  propertyAddress: string
  dealValue: string
  commission: string
  closedDate: string
}

const mockDeals: Deal[] = [
  { id: 'DEAL-001', clientName: 'Ahmed Al-Mansoori', propertyType: 'Villa', city: 'Muscat', propertyAddress: 'Al Khuwair, Muscat', dealValue: 'OMR 2,400', commission: 'OMR 240', closedDate: '2025-01-10' },
  { id: 'DEAL-002', clientName: 'Fatima Al-Zahra', propertyType: 'Apartment', city: 'Salalah', propertyAddress: 'Al Haffa, Salalah', dealValue: 'OMR 780', commission: 'OMR 78', closedDate: '2025-01-08' },
  { id: 'DEAL-003', clientName: 'Mohammed Al-Hashmi', propertyType: 'Commercial', city: 'Muscat', propertyAddress: 'Ruwi, Muscat', dealValue: 'OMR 4,800', commission: 'OMR 480', closedDate: '2025-01-05' },
  { id: 'DEAL-004', clientName: 'Sara Al-Balushi', propertyType: 'Villa', city: 'Nizwa', propertyAddress: 'Nizwa Center', dealValue: 'OMR 1,750', commission: 'OMR 175', closedDate: '2025-01-12' },
  { id: 'DEAL-005', clientName: 'Khalid Al-Saadi', propertyType: 'Apartment', city: 'Muscat', propertyAddress: 'Seeb, Muscat', dealValue: 'OMR 580', commission: 'OMR 58', closedDate: '2025-01-07' },
  { id: 'DEAL-006', clientName: 'Layla Al-Mazrouei', propertyType: 'Land', city: 'Sohar', propertyAddress: 'Sohar Industrial', dealValue: 'OMR 14,500', commission: 'OMR 1,450', closedDate: '2025-01-03' },
  { id: 'DEAL-007', clientName: 'Omar Al-Kindi', propertyType: 'Villa', city: 'Muscat', propertyAddress: 'Al Ghubra, Muscat', dealValue: 'OMR 3,100', commission: 'OMR 310', closedDate: '2025-01-09' },
  { id: 'DEAL-008', clientName: 'Noor Al-Abri', propertyType: 'Apartment', city: 'Salalah', propertyAddress: 'Al Dahariz, Salalah', dealValue: 'OMR 720', commission: 'OMR 72', closedDate: '2025-01-06' },
]

const Deals = () => {
  const { t } = useTranslation()
  const [filters, setFilters] = useState({
    date: 'all',
    city: 'all',
    propertyType: 'all',
    status: 'all'
  })
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDeals = mockDeals.filter(deal => {
    if (searchQuery && !deal.clientName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !deal.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.city !== 'all' && deal.city.toLowerCase() !== filters.city) return false
    if (filters.propertyType !== 'all' && deal.propertyType.toLowerCase() !== filters.propertyType) return false
    return true
  })

  const totalRevenue = mockDeals.reduce((sum, deal) => {
    const value = parseFloat(deal.dealValue.replace(/[^0-9.]/g, ''))
    return sum + value
  }, 0)

  const totalCommission = mockDeals.reduce((sum, deal) => {
    const value = parseFloat(deal.commission.replace(/[^0-9.]/g, ''))
    return sum + value
  }, 0)

  const columns = [
    { key: 'id', label: t('dealId') },
    { key: 'clientName', label: t('clientName') },
    { key: 'propertyType', label: t('propertyType') },
    { key: 'city', label: t('city') },
    { key: 'propertyAddress', label: t('propertyAddress') },
    { key: 'dealValue', label: t('dealValue') },
    { key: 'commission', label: t('commission') },
    { key: 'closedDate', label: t('closedDate') }
  ]

  return (
    <div className="deals-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('deals')}</h2>
          <p className="page-subtitle">{t('viewDeals')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchDeals')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Revenue Summary Cards */}
      <div className="revenue-summary">
        <div className="revenue-card revenue-total">
          <div className="revenue-icon">
            <TrendingUp size={24} />
          </div>
          <div className="revenue-content">
            <span className="revenue-label">{t('totalRevenue')}</span>
            <span className="revenue-value">OMR {totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
        <div className="revenue-card revenue-commission">
          <div className="revenue-icon">
            <TrendingUp size={24} />
          </div>
          <div className="revenue-content">
            <span className="revenue-label">{t('totalCommission')}</span>
            <span className="revenue-value">OMR {totalCommission.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
        <div className="revenue-card revenue-count">
          <div className="revenue-icon">
            <TrendingUp size={24} />
          </div>
          <div className="revenue-content">
            <span className="revenue-label">{t('totalDeals')}</span>
            <span className="revenue-value">{mockDeals.length}</span>
          </div>
        </div>
      </div>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <div className="table-container">
        <DataTable
          columns={columns}
          data={filteredDeals}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">Showing {filteredDeals.length} of {mockDeals.length} deals</p>
      </div>
    </div>
  )
}

export default Deals



