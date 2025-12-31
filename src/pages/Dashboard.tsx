import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { KPICard } from '../components/KPICard'
import { RequestsVsDealsChart } from '../components/RequestsVsDealsChart'
import { ConversionFunnelChart } from '../components/ConversionFunnelChart'
import { FilterBar } from '../components/FilterBar'
import { FileText, Send, CheckCircle, Clock } from 'lucide-react'
import './Dashboard.css'

const Dashboard = () => {
  const { t } = useTranslation()
  const [filters, setFilters] = useState({
    date: 'all',
    city: 'all',
    propertyType: 'all',
    status: 'all'
  })

  // Mock data - in real app, this would come from API
  const kpiData = {
    newRequests: {
      today: 12,
      thisWeek: 45,
      thisMonth: 187
    },
    sentOffers: {
      contacted: 89,
      messaged: 156,
      noResponse: 34
    },
    closedDeals: 23,
    expiredRequests: 8
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">{t('doorlyDashboard')}</h2>
          <p className="dashboard-subtitle">{t('realTimeOverview')}</p>
        </div>
      </div>

      {/* Filters */}
      <FilterBar filters={filters} onFilterChange={setFilters} />

      {/* KPI Cards */}
      <div className="kpi-grid">
        <KPICard
          title={t('newRequestsTitle')}
          icon={FileText}
          color="blue"
        >
          <div className="kpi-details">
            <div className="kpi-item">
              <span className="kpi-label">{t('today')}</span>
              <span className="kpi-value">{kpiData.newRequests.today}</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">{t('thisWeek')}</span>
              <span className="kpi-value">{kpiData.newRequests.thisWeek}</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">{t('thisMonth')}</span>
              <span className="kpi-value">{kpiData.newRequests.thisMonth}</span>
            </div>
          </div>
        </KPICard>

        <KPICard
          title={t('sentOffersTitle')}
          icon={Send}
          color="green"
        >
          <div className="kpi-details">
            <div className="kpi-item">
              <span className="kpi-label">{t('contacted')}</span>
              <span className="kpi-value">{kpiData.sentOffers.contacted}</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">{t('messaged')}</span>
              <span className="kpi-value">{kpiData.sentOffers.messaged}</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">{t('noResponse')}</span>
              <span className="kpi-value">{kpiData.sentOffers.noResponse}</span>
            </div>
          </div>
        </KPICard>

        <KPICard
          title={t('closedDealsTitle')}
          icon={CheckCircle}
          color="success"
        >
          <div className="kpi-single">
            <span className="kpi-large-value">{kpiData.closedDeals}</span>
            <span className="kpi-unit">{t('dealsThisMonth')}</span>
          </div>
        </KPICard>

        <KPICard
          title={t('expiredRequestsTitle')}
          icon={Clock}
          color="warning"
        >
          <div className="kpi-single">
            <span className="kpi-large-value">{kpiData.expiredRequests}</span>
            <span className="kpi-unit">{t('requestsExpired')}</span>
          </div>
        </KPICard>
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">{t('requestsVsDeals')}</h3>
            <p className="chart-subtitle">{t('requestsVsDealsSubtitle')}</p>
          </div>
          <RequestsVsDealsChart />
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">{t('conversionFunnel')}</h3>
            <p className="chart-subtitle">{t('conversionFunnelSubtitle')}</p>
          </div>
          <ConversionFunnelChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard



