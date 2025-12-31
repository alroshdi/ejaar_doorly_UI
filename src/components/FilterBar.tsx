import { Calendar, MapPin, Home, Filter } from 'lucide-react'
import { useTranslation } from '../contexts/TranslationContext'
import './FilterBar.css'

interface FilterBarProps {
  filters: {
    date: string
    city: string
    propertyType: string
    status: string
  }
  onFilterChange: (filters: any) => void
}

export const FilterBar = ({ filters, onFilterChange }: FilterBarProps) => {
  const { t } = useTranslation()
  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value
    })
  }

  return (
    <div className="filter-bar">
      <div className="filter-bar-header">
        <Filter size={20} />
        <span className="filter-bar-title">{t('filters')}</span>
      </div>
      <div className="filter-controls">
        <div className="filter-group">
          <Calendar size={18} />
          <select
            className="filter-select"
            value={filters.date}
            onChange={(e) => handleFilterChange('date', e.target.value)}
          >
            <option value="all">{t('allDates')}</option>
            <option value="today">{t('today')}</option>
            <option value="week">{t('thisWeek')}</option>
            <option value="month">{t('thisMonth')}</option>
            <option value="quarter">{t('thisQuarter')}</option>
            <option value="year">{t('thisYear')}</option>
          </select>
        </div>

        <div className="filter-group">
          <MapPin size={18} />
          <select
            className="filter-select"
            value={filters.city}
            onChange={(e) => handleFilterChange('city', e.target.value)}
          >
            <option value="all">{t('allCities')}</option>
            <option value="muscat">{t('muscat')}</option>
            <option value="salalah">{t('salalah')}</option>
            <option value="nizwa">{t('nizwa')}</option>
            <option value="sohar">{t('sohar')}</option>
          </select>
        </div>

        <div className="filter-group">
          <Home size={18} />
          <select
            className="filter-select"
            value={filters.propertyType}
            onChange={(e) => handleFilterChange('propertyType', e.target.value)}
          >
            <option value="all">{t('allTypes')}</option>
            <option value="apartment">{t('apartment')}</option>
            <option value="villa">{t('villa')}</option>
            <option value="commercial">{t('commercial')}</option>
            <option value="land">{t('land')}</option>
          </select>
        </div>

        <div className="filter-group">
          <Filter size={18} />
          <select
            className="filter-select"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="all">{t('allStatus')}</option>
            <option value="new">{t('new')}</option>
            <option value="contacted">{t('contacted')}</option>
            <option value="offered">{t('offered')}</option>
            <option value="closed">{t('closed')}</option>
            <option value="expired">{t('expired')}</option>
          </select>
        </div>
      </div>
    </div>
  )
}



