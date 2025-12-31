import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { BarChart3, Download, Calendar } from 'lucide-react'
import './Report.css'

const Report = () => {
  const { t } = useTranslation()
  const [reportType, setReportType] = useState('monthly')

  return (
    <div className="report-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('report')}</h2>
          <p className="page-subtitle">{t('viewAndGenerateReports')}</p>
        </div>
        <div className="header-actions">
          <button className="action-button">
            <Download size={18} />
            {t('exportReport')}
          </button>
        </div>
      </div>

      <div className="report-filters">
        <div className="filter-group">
          <Calendar size={18} />
          <select
            className="filter-select"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="daily">{t('dailyReport')}</option>
            <option value="weekly">{t('weeklyReport')}</option>
            <option value="monthly">{t('monthlyReport')}</option>
            <option value="yearly">{t('yearlyReport')}</option>
          </select>
        </div>
      </div>

      <div className="report-sections">
        <div className="report-card">
          <div className="report-card-header">
            <BarChart3 size={24} />
            <h3>{t('financialReport')}</h3>
          </div>
          <div className="report-card-content">
            <p>{t('financialReportDescription')}</p>
            <button className="view-button">{t('viewReport')}</button>
          </div>
        </div>

        <div className="report-card">
          <div className="report-card-header">
            <BarChart3 size={24} />
            <h3>{t('propertyReport')}</h3>
          </div>
          <div className="report-card-content">
            <p>{t('propertyReportDescription')}</p>
            <button className="view-button">{t('viewReport')}</button>
          </div>
        </div>

        <div className="report-card">
          <div className="report-card-header">
            <BarChart3 size={24} />
            <h3>{t('tenantReport')}</h3>
          </div>
          <div className="report-card-content">
            <p>{t('tenantReportDescription')}</p>
            <button className="view-button">{t('viewReport')}</button>
          </div>
        </div>

        <div className="report-card">
          <div className="report-card-header">
            <BarChart3 size={24} />
            <h3>{t('maintenanceReport')}</h3>
          </div>
          <div className="report-card-content">
            <p>{t('maintenanceReportDescription')}</p>
            <button className="view-button">{t('viewReport')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report

