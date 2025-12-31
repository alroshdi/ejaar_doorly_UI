import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Search, CreditCard, DollarSign, TrendingUp } from 'lucide-react'
import './BillingCenter.css'

interface Invoice {
  id: string
  tenant: string
  property: string
  amount: string
  dueDate: string
  status: 'paid' | 'pending' | 'overdue'
  paidDate?: string
}

const mockInvoices: Invoice[] = [
  { id: 'INV-001', tenant: 'Ahmed Al-Mansoori', property: 'Al Khuwair Tower', amount: 'OMR 450', dueDate: '2025-01-15', status: 'paid', paidDate: '2025-01-10' },
  { id: 'INV-002', tenant: 'Fatima Al-Zahra', property: 'Salalah Heights', amount: 'OMR 1,200', dueDate: '2025-01-20', status: 'pending' },
  { id: 'INV-003', tenant: 'Mohammed Al-Hashmi', property: 'Ruwi Commercial Center', amount: 'OMR 1,600', dueDate: '2025-01-10', status: 'overdue' },
  { id: 'INV-004', tenant: 'Sara Al-Balushi', property: 'Nizwa Residences', amount: 'OMR 600', dueDate: '2025-01-18', status: 'paid', paidDate: '2025-01-15' },
  { id: 'INV-005', tenant: 'Khalid Al-Saadi', property: 'Seeb Garden Villas', amount: 'OMR 1,850', dueDate: '2025-01-12', status: 'pending' },
]

const BillingCenter = () => {
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
      paid: { label: t('paid'), class: 'badge-paid' },
      pending: { label: t('pending'), class: 'badge-pending' },
      overdue: { label: t('overdue'), class: 'badge-overdue' }
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    return <span className={`status-badge ${config.class}`}>{config.label}</span>
  }

  const filteredInvoices = mockInvoices.filter(inv => {
    if (searchQuery && !inv.tenant.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !inv.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.status !== 'all' && inv.status !== filters.status) return false
    return true
  })

  const totalAmount = mockInvoices.reduce((sum, inv) => {
    const value = parseFloat(inv.amount.replace(/[^0-9.]/g, ''))
    return sum + value
  }, 0)

  const paidAmount = mockInvoices
    .filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => {
      const value = parseFloat(inv.amount.replace(/[^0-9.]/g, ''))
      return sum + value
    }, 0)

  const columns = [
    { key: 'id', label: t('invoiceNo') },
    { key: 'tenant', label: t('tenant') },
    { key: 'property', label: t('property') },
    { key: 'amount', label: t('amount') },
    { key: 'dueDate', label: t('dueDate') },
    { key: 'status', label: t('status') },
    { key: 'paidDate', label: t('paidDate') }
  ]

  return (
    <div className="billing-center-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('billingCenter')}</h2>
          <p className="page-subtitle">{t('manageInvoices')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchInvoices')}
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
            <CreditCard size={24} />
          </div>
          <div className="summary-content">
            <span className="summary-label">{t('totalInvoices')}</span>
            <span className="summary-value">{mockInvoices.length}</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <DollarSign size={24} />
          </div>
          <div className="summary-content">
            <span className="summary-label">{t('totalAmount')}</span>
            <span className="summary-value">OMR {totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <TrendingUp size={24} />
          </div>
          <div className="summary-content">
            <span className="summary-label">{t('paidAmount')}</span>
            <span className="summary-value">OMR {paidAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <div className="table-container">
        <DataTable
          columns={columns}
          data={filteredInvoices.map(inv => ({
            ...inv,
            status: getStatusBadge(inv.status),
            paidDate: inv.paidDate || '-'
          }))}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">{t('showing')} {filteredInvoices.length} {t('of')} {mockInvoices.length} {t('invoices')}</p>
      </div>
    </div>
  )
}

export default BillingCenter

