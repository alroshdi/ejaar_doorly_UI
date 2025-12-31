import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { DataTable } from '../components/DataTable'
import { Search, Shield, Plus } from 'lucide-react'
import './RoleManagement.css'

interface Role {
  id: string
  name: string
  description: string
  permissions: number
  users: number
}

const mockRoles: Role[] = [
  { id: 'ROLE-001', name: 'Admin', description: 'Full system access', permissions: 25, users: 3 },
  { id: 'ROLE-002', name: 'Manager', description: 'Property and tenant management', permissions: 18, users: 5 },
  { id: 'ROLE-003', name: 'Agent', description: 'Property viewing and client communication', permissions: 12, users: 8 },
  { id: 'ROLE-004', name: 'Accountant', description: 'Billing and financial management', permissions: 10, users: 2 },
]

const RoleManagement = () => {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRoles = mockRoles.filter(role => {
    if (searchQuery && !role.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !role.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    return true
  })

  const columns = [
    { key: 'id', label: t('roleId') },
    { key: 'name', label: t('roleName') },
    { key: 'description', label: t('description') },
    { key: 'permissions', label: t('permissions') },
    { key: 'users', label: t('users') }
  ]

  return (
    <div className="role-management-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('roleManagement')}</h2>
          <p className="page-subtitle">{t('manageUserRoles')}</p>
        </div>
        <div className="header-actions">
          <button className="action-button">
            <Plus size={18} />
            {t('addRole')}
          </button>
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={t('searchRoles')}
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
          data={filteredRoles}
        />
      </div>

      <div className="page-footer">
        <p className="results-count">{t('showing')} {filteredRoles.length} {t('of')} {mockRoles.length} {t('roles')}</p>
      </div>
    </div>
  )
}

export default RoleManagement

