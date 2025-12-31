import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TranslationProvider } from './contexts/TranslationContext'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import NewRequests from './pages/NewRequests'
import Offers from './pages/Offers'
import Deals from './pages/Deals'
import ExpiredRequests from './pages/ExpiredRequests'
import Properties from './pages/Properties'
import Tenants from './pages/Tenants'
import BillingCenter from './pages/BillingCenter'
import Expenses from './pages/Expenses'
import WaitingList from './pages/WaitingList'
import Maintains from './pages/Maintains'
import Report from './pages/Report'
import Settings from './pages/Settings'
import RoleManagement from './pages/RoleManagement'
import UserManagement from './pages/UserManagement'
import Profile from './pages/Profile'

function App() {
  return (
    <TranslationProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/new-requests" element={<NewRequests />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/expired-requests" element={<ExpiredRequests />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/billing-center" element={<BillingCenter />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/waiting-list" element={<WaitingList />} />
            <Route path="/maintains" element={<Maintains />} />
            <Route path="/report" element={<Report />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/role-management" element={<RoleManagement />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </TranslationProvider>
  )
}

export default App



