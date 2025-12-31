import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { Search, UserCog, Plus, Mail, Phone } from 'lucide-react'
import './UserManagement.css'

interface User {
  id: string
  name: string
  email: string
  phone: string
  role: string
  status: 'active' | 'inactive'
  lastLogin: string
}

const mockUsers: User[] = [
  { id: 'USER-001', name: 'Ahmad Atef', email: 'ahmad@doorly.com', phone: '+968 9123 4567', role: 'Admin', status: 'active', lastLogin: '2025-01-15' },
  { id: 'USER-002', name: 'Fatima Al-Zahra', email: 'fatima@doorly.com', phone: '+968 9234 5678', role: 'Manager', status: 'active', lastLogin: '2025-01-14' },
  { id: 'USER-003', name: 'Mohammed Al-Hashmi', email: 'mohammed@doorly.com', phone: '+968 9345 6789', role: 'Agent', status: 'active', lastLogin: '2025-01-13' },
  { id: 'USER-004', name: 'Sara Al-Balushi', email: 'sara@doorly.com', phone: '+968 9456 7890', role: 'Accountant', status: 'inactive', lastLogin: '2025-01-10' },
]

const UserManagement = () => {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: t('active'), class: 'badge-active' },
      inactive: { label: t('inactive'), class: 'badge-inactive' }
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active
    return <span className={`status-badge ${config.class}`}>{config.label}</span>
  }

  const filteredUsers = mockUsers.filter(user => {
    if (searchQuery && !user.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !user.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !user.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    return true
  })

  const columns = [
    { key: 'id', label: t('userId') },
    { key: 'name', label: t('userName') },
    { key: 'email', label: t('email') },
    { key: 'phone', label: t('phone') },
    { key: 'role', label: t('role') },
    { key: 'status', label: t('status') },
    { key: 'lastLogin', label: t('lastLogin') }
  ]

  return (
    <div className="user-management-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('userManagement')}</h2>
          <p className="page-subtitle">{t('manageSystemUsers')}</p>
        </div>
        <div className="header-actions">
          <button className="action-button">
            <Plus size={18} />
            {t('addUser')}
          </button>
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchUsers')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="table-container">
        <DataTable
          columns={columns}
          data={filteredUsers.map(user => ({
            ...user,
            status: getStatusBadge(user.status)
          }))}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">{t('showing')} {filteredUsers.length} {t('of')} {mockUsers.length} {t('users')}</p>
      </div>
    </div>
  )
}

export default UserManagement

