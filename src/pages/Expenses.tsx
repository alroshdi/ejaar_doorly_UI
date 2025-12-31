import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { FilterBar } from '../components/FilterBar'
import { Search, DollarSign, TrendingDown } from 'lucide-react'
import './Expenses.css'

interface Expense {
  id: string
  category: string
  description: string
  amount: string
  property: string
  date: string
  status: 'approved' | 'pending' | 'rejected'
}

const mockExpenses: Expense[] = [
  { id: 'EXP-001', category: 'Maintenance', description: 'AC Repair - Unit A-101', amount: 'OMR 150', property: 'Al Khuwair Tower', date: '2025-01-10', status: 'approved' },
  { id: 'EXP-002', category: 'Utilities', description: 'Water Bill - January', amount: 'OMR 85', property: 'Salalah Heights', date: '2025-01-12', status: 'pending' },
  { id: 'EXP-003', category: 'Repairs', description: 'Plumbing Fix - Unit V-205', amount: 'OMR 220', property: 'Salalah Heights', date: '2025-01-08', status: 'approved' },
  { id: 'EXP-004', category: 'Cleaning', description: 'Monthly Cleaning Service', amount: 'OMR 120', property: 'Nizwa Residences', date: '2025-01-15', status: 'approved' },
  { id: 'EXP-005', category: 'Insurance', description: 'Property Insurance Premium', amount: 'OMR 450', property: 'Seeb Garden Villas', date: '2025-01-05', status: 'pending' },
]

const Expenses = () => {
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
      approved: { label: t('approved'), class: 'badge-approved' },
      pending: { label: t('pending'), class: 'badge-pending' },
      rejected: { label: t('rejected'), class: 'badge-rejected' }
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    return <span className={`status-badge ${config.class}`}>{config.label}</span>
  }

  const filteredExpenses = mockExpenses.filter(exp => {
    if (searchQuery && !exp.description.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !exp.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.status !== 'all' && exp.status !== filters.status) return false
    return true
  })

  const totalExpenses = mockExpenses.reduce((sum, exp) => {
    const value = parseFloat(exp.amount.replace(/[^0-9.]/g, ''))
    return sum + value
  }, 0)

  const columns = [
    { key: 'id', label: t('expenseId') },
    { key: 'category', label: t('category') },
    { key: 'description', label: t('description') },
    { key: 'amount', label: t('amount') },
    { key: 'property', label: t('property') },
    { key: 'date', label: t('date') },
    { key: 'status', label: t('status') }
  ]

  return (
    <div className="expenses-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('expenses')}</h2>
          <p className="page-subtitle">{t('manageExpenses')}</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchExpenses')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="summary-card-large">
        <div className="summary-icon">
          <TrendingDown size={24} />
        </div>
        <div className="summary-content">
          <span className="summary-label">{t('totalExpenses')}</span>
          <span className="summary-value">OMR {totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <div className="table-container">
        <DataTable
          columns={columns}
          data={filteredExpenses.map(exp => ({
            ...exp,
            status: getStatusBadge(exp.status)
          }))}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">{t('showing')} {filteredExpenses.length} {t('of')} {mockExpenses.length} {t('expenses')}</p>
      </div>
    </div>
  )
}

export default Expenses

