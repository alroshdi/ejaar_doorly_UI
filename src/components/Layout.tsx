import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  FileText, 
  Send, 
  CheckCircle, 
  Clock,
  Menu,
  X,
  User,
  Building2,
  Sun,
  Moon,
  Languages,
  Home,
  Users,
  CreditCard,
  DollarSign,
  List,
  Wrench,
  BarChart3,
  Settings as SettingsIcon,
  Shield,
  UserCog,
  UserCircle
} from 'lucide-react'
import { useTranslation } from '../contexts/TranslationContext'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { language, setLanguage, t } = useTranslation()
  const location = useLocation()

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  // Apply RTL/LTR direction based on language
  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', language)
  }, [language])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  const menuItems = [
    { path: '/', labelKey: 'dashboard', icon: LayoutDashboard },
    { path: '/new-requests', labelKey: 'newRequests', icon: FileText },
    { path: '/offers', labelKey: 'offers', icon: Send },
    { path: '/deals', labelKey: 'deals', icon: CheckCircle },
    { path: '/expired-requests', labelKey: 'expiredRequests', icon: Clock },
    { path: '/properties', labelKey: 'properties', icon: Home },
    { path: '/tenants', labelKey: 'tenants', icon: Users },
    { path: '/billing-center', labelKey: 'billingCenter', icon: CreditCard },
    { path: '/expenses', labelKey: 'expenses', icon: DollarSign },
    { path: '/waiting-list', labelKey: 'waitingList', icon: List },
    { path: '/maintains', labelKey: 'maintains', icon: Wrench },
    { path: '/report', labelKey: 'report', icon: BarChart3 },
    { path: '/settings', labelKey: 'settings', icon: SettingsIcon },
    { path: '/role-management', labelKey: 'roleManagement', icon: Shield },
    { path: '/user-management', labelKey: 'userManagement', icon: UserCog },
    { path: '/profile', labelKey: 'profile', icon: UserCircle },
  ]

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Building2 size={24} />
            <span className="logo-text">DOORLY</span>
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                {sidebarOpen && <span>{t(item.labelKey)}</span>}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <header className="topbar">
          <div className="topbar-left">
            <button 
              className="mobile-menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={24} />
            </button>
            <h1 className="page-title">
              {t(menuItems.find(item => item.path === location.pathname)?.labelKey || 'dashboard')}
            </h1>
          </div>
          
          <div className="topbar-right">
            <div className="topbar-actions">
              {/* Language Toggle */}
              <button 
                className="icon-button language-toggle"
                onClick={toggleLanguage}
                title={language === 'en' ? t('switchToArabic') : t('switchToEnglish')}
              >
                <Languages size={20} />
                <span className="language-label">{language === 'en' ? 'E' : 'A'}</span>
              </button>

              {/* Dark/Light Mode Toggle */}
              <button 
                className="icon-button theme-toggle"
                onClick={toggleDarkMode}
                title={isDarkMode ? t('switchToLightMode') : t('switchToDarkMode')}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="user-profile">
              <div className="user-info">
                <span className="user-name">Ahmad Atef</span>
                <span className="user-company">{t('doorlyCompany')}</span>
              </div>
              <div className="user-avatar">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout



