import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Search, Users, Phone, Mail } from 'lucide-react'
import './Tenants.css'

interface Tenant {
  id: string
  name: string
  property: string
  unit: string
  phone: string
  email: string
  rent: string
  status: 'active' | 'pending' | 'expired'
}

const mockTenants: Tenant[] = [
  { id: 'TEN-001', name: 'Ahmed Al-Mansoori', property: 'Al Khuwair Tower', unit: 'A-101', phone: '+968 9123 4567', email: 'ahmed@example.com', rent: 'OMR 450', status: 'active' },
  { id: 'TEN-002', name: 'Fatima Al-Zahra', property: 'Salalah Heights', unit: 'V-205', phone: '+968 9234 5678', email: 'fatima@example.com', rent: 'OMR 1,200', status: 'active' },
  { id: 'TEN-003', name: 'Mohammed Al-Hashmi', property: 'Ruwi Commercial Center', unit: 'C-301', phone: '+968 9345 6789', email: 'mohammed@example.com', rent: 'OMR 1,600', status: 'pending' },
  { id: 'TEN-004', name: 'Sara Al-Balushi', property: 'Nizwa Residences', unit: 'A-402', phone: '+968 9456 7890', email: 'sara@example.com', rent: 'OMR 600', status: 'active' },
  { id: 'TEN-005', name: 'Khalid Al-Saadi', property: 'Seeb Garden Villas', unit: 'V-103', phone: '+968 9567 8901', email: 'khalid@example.com', rent: 'OMR 1,850', status: 'expired' },
]

const Tenants = () => {
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
      active: { label: t('active'), class: 'badge-active' },
      pending: { label: t('pending'), class: 'badge-pending' },
      expired: { label: t('expired'), class: 'badge-expired' }
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active
    return <span className={`status-badge ${config.class}`}>{config.label}</span>
  }

  const filteredTenants = mockTenants.filter(tenant => {
    if (searchQuery && !tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !tenant.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.status !== 'all' && tenant.status !== filters.status) return false
    return true
  })

  const columns = [
    { key: 'id', label: t('tenantId') },
    { key: 'name', label: t('tenantName') },
    { key: 'property', label: t('property') },
    { key: 'unit', label: t('unit') },
    { key: 'phone', label: t('phone') },
    { key: 'email', label: t('email') },
    { key: 'rent', label: t('monthlyRent') },
    { key: 'status', label: t('status') }
  ]

  return (
    <div className="tenants-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('tenants')}</h2>
          <p className="page-subtitle">{t('manageTenants')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchTenants')}
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
          data={filteredTenants.map(tenant => ({
            ...tenant,
            status: getStatusBadge(tenant.status)
          }))}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">{t('showing')} {filteredTenants.length} {t('of')} {mockTenants.length} {t('tenants')}</p>
      </div>
    </div>
  )
}

export default Tenants

