import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Search, Home, MapPin, DollarSign } from 'lucide-react'
import './Properties.css'

interface Property {
  id: string
  name: string
  type: string
  city: string
  address: string
  units: number
  occupied: number
  available: number
  monthlyRent: string
}

const mockProperties: Property[] = [
  { id: 'PROP-001', name: 'Al Khuwair Tower', type: 'Apartment', city: 'Muscat', address: 'Al Khuwair, Muscat', units: 24, occupied: 18, available: 6, monthlyRent: 'OMR 28,500' },
  { id: 'PROP-002', name: 'Salalah Heights', type: 'Villa', city: 'Salalah', address: 'Al Haffa, Salalah', units: 12, occupied: 8, available: 4, monthlyRent: 'OMR 15,200' },
  { id: 'PROP-003', name: 'Ruwi Commercial Center', type: 'Commercial', city: 'Muscat', address: 'Ruwi, Muscat', units: 8, occupied: 6, available: 2, monthlyRent: 'OMR 12,800' },
  { id: 'PROP-004', name: 'Nizwa Residences', type: 'Apartment', city: 'Nizwa', address: 'Nizwa Center', units: 16, occupied: 12, available: 4, monthlyRent: 'OMR 9,600' },
  { id: 'PROP-005', name: 'Seeb Garden Villas', type: 'Villa', city: 'Muscat', address: 'Seeb, Muscat', units: 10, occupied: 7, available: 3, monthlyRent: 'OMR 18,500' },
]

const Properties = () => {
  const { t } = useTranslation()
  const [filters, setFilters] = useState({
    date: 'all',
    city: 'all',
    propertyType: 'all',
    status: 'all'
  })
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProperties = mockProperties.filter(prop => {
    if (searchQuery && !prop.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !prop.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.city !== 'all' && prop.city.toLowerCase() !== filters.city) return false
    if (filters.propertyType !== 'all' && prop.type.toLowerCase() !== filters.propertyType) return false
    return true
  })

  const columns = [
    { key: 'id', label: t('propertyId') },
    { key: 'name', label: t('propertyName') },
    { key: 'type', label: t('propertyType') },
    { key: 'city', label: t('city') },
    { key: 'address', label: t('address') },
    { key: 'units', label: t('totalUnits') },
    { key: 'occupied', label: t('occupied') },
    { key: 'available', label: t('available') },
    { key: 'monthlyRent', label: t('monthlyRent') }
  ]

  const totalProperties = mockProperties.length
  const totalUnits = mockProperties.reduce((sum, p) => sum + p.units, 0)
  const totalOccupied = mockProperties.reduce((sum, p) => sum + p.occupied, 0)
  const totalAvailable = mockProperties.reduce((sum, p) => sum + p.available, 0)

  return (
    <div className="properties-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('properties')}</h2>
          <p className="page-subtitle">{t('manageProperties')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchProperties')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card">
          <div className="summary-icon">
            <Home size={24} />
          </div>
          <div className="summary-content">
            <span className="summary-label">{t('totalProperties')}</span>
            <span className="summary-value">{totalProperties}</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <Home size={24} />
          </div>
          <div className="summary-content">
            <span className="summary-label">{t('totalUnits')}</span>
            <span className="summary-value">{totalUnits}</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <MapPin size={24} />
          </div>
          <div className="summary-content">
            <span className="summary-label">{t('occupied')}</span>
            <span className="summary-value">{totalOccupied}</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <DollarSign size={24} />
          </div>
          <div className="summary-content">
            <span className="summary-label">{t('available')}</span>
            <span className="summary-value">{totalAvailable}</span>
          </div>
        </div>
      </div>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <div className="table-container">
        <DataTable
          columns={columns}
          data={filteredProperties}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">{t('showing')} {filteredProperties.length} {t('of')} {mockProperties.length} {t('properties')}</p>
      </div>
    </div>
  )
}

export default Properties

