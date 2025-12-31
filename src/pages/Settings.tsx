import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Settings as SettingsIcon, Save } from 'lucide-react'
import './Settings.css'

const Settings = () => {
  const { t } = useTranslation()
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
    autoBackup: true,
    language: 'en',
    timezone: 'Asia/Muscat'
  })

  const handleChange = (key: string, value: any) => {
    setSettings({ ...settings, [key]: value })
  }

  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('settings')}</h2>
          <p className="page-subtitle">{t('manageApplicationSettings')}</p>
        </div>
        <button className="save-button">
          <Save size={18} />
          {t('save')}
        </button>
      </div>

      <div className="settings-sections">
        <div className="settings-section">
          <h3 className="section-title">{t('notifications')}</h3>
          <div className="settings-group">
            <label className="setting-item">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleChange('notifications', e.target.checked)}
              />
              <span>{t('enableNotifications')}</span>
            </label>
            <label className="setting-item">
              <input
                type="checkbox"
                checked={settings.emailAlerts}
                onChange={(e) => handleChange('emailAlerts', e.target.checked)}
              />
              <span>{t('emailAlerts')}</span>
            </label>
            <label className="setting-item">
              <input
                type="checkbox"
                checked={settings.smsAlerts}
                onChange={(e) => handleChange('smsAlerts', e.target.checked)}
              />
              <span>{t('smsAlerts')}</span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="section-title">{t('general')}</h3>
          <div className="settings-group">
            <div className="setting-item">
              <label>{t('language')}</label>
              <select
                value={settings.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="setting-select"
              >
                <option value="en">{t('english')}</option>
                <option value="ar">{t('arabic')}</option>
              </select>
            </div>
            <div className="setting-item">
              <label>{t('timezone')}</label>
              <select
                value={settings.timezone}
                onChange={(e) => handleChange('timezone', e.target.value)}
                className="setting-select"
              >
                <option value="Asia/Muscat">Asia/Muscat (GMT+4)</option>
                <option value="UTC">UTC (GMT+0)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="section-title">{t('backup')}</h3>
          <div className="settings-group">
            <label className="setting-item">
              <input
                type="checkbox"
                checked={settings.autoBackup}
                onChange={(e) => handleChange('autoBackup', e.target.checked)}
              />
              <span>{t('autoBackup')}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings

