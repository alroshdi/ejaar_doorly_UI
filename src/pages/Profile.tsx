import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { UserCircle, Mail, Phone, MapPin, Save, Camera } from 'lucide-react'
import './Profile.css'

const Profile = () => {
  const { t } = useTranslation()
  const [profile, setProfile] = useState({
    name: 'Ahmad Atef',
    email: 'ahmad@doorly.com',
    phone: '+968 9123 4567',
    company: 'Doorly Company',
    address: 'Muscat, Oman',
    position: 'Administrator'
  })

  const handleChange = (key: string, value: string) => {
    setProfile({ ...profile, [key]: value })
  }

  return (
    <div className="profile-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">{t('profile')}</h2>
          <p className="page-subtitle">{t('manageYourProfile')}</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-container">
              <div className="avatar">
                <UserCircle size={80} />
              </div>
              <button className="avatar-edit">
                <Camera size={18} />
              </button>
            </div>
            <div className="profile-info">
              <h3>{profile.name}</h3>
              <p>{profile.position}</p>
              <p className="company-name">{profile.company}</p>
            </div>
          </div>

          <div className="profile-form">
            <div className="form-group">
              <label>{t('fullName')}</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>{t('email')}</label>
              <div className="input-with-icon">
                <Mail size={18} />
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>{t('phone')}</label>
              <div className="input-with-icon">
                <Phone size={18} />
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>{t('company')}</label>
              <input
                type="text"
                value={profile.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>{t('address')}</label>
              <div className="input-with-icon">
                <MapPin size={18} />
                <input
                  type="text"
                  value={profile.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>{t('position')}</label>
              <input
                type="text"
                value={profile.position}
                onChange={(e) => handleChange('position', e.target.value)}
                className="form-input"
              />
            </div>

            <button className="save-button">
              <Save size={18} />
              {t('saveChanges')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

