import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'ar'

interface Translations {
  [key: string]: string | Translations
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    dashboard: 'Dashboard',
    properties: 'Properties',
    tenants: 'Tenants',
    billingCenter: 'Billing Center',
    expenses: 'Expenses',
    waitingList: 'Waiting List',
    maintains: 'Maintains',
    report: 'Report',
    settings: 'Settings',
    roleManagement: 'Role Management',
    userManagement: 'User Management',
    profile: 'Profile',
    newRequests: 'New Requests',
    offers: 'Offers',
    deals: 'Deals',
    expiredRequests: 'Expired Requests',
    
    // Dashboard
    doorlyDashboard: 'Doorly Dashboard',
    realTimeOverview: 'Real-time business performance overview',
    totalProperty: 'Total Property',
    totalUnits: 'Total Units',
    totalTenants: 'Total Tenants',
    totalAvailableUnits: 'Total Available Units',
    newRequestsTitle: 'New Requests',
    sentOffersTitle: 'Sent Offers',
    closedDealsTitle: 'Closed Deals',
    expiredRequestsTitle: 'Expired Requests',
    today: 'Today',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    contacted: 'Contacted',
    messaged: 'Messaged',
    noResponse: 'No Response',
    dealsThisMonth: 'deals this month',
    requestsExpired: 'requests expired',
    requestsVsDeals: 'Requests vs Deals (Monthly)',
    requestsVsDealsSubtitle: 'Comparison of monthly requests and closed deals',
    conversionFunnel: 'Offer Conversion Funnel',
    conversionFunnelSubtitle: 'Conversion rate from requests to closed deals',
    requests: 'Requests',
    closedDeals: 'Closed Deals',
    negotiating: 'Negotiating',
    
    // Filters
    filters: 'Filters',
    allDates: 'All Dates',
    allCities: 'All Cities',
    allTypes: 'All Types',
    allStatus: 'All Status',
    muscat: 'Muscat',
    salalah: 'Salalah',
    nizwa: 'Nizwa',
    sohar: 'Sohar',
    apartment: 'Apartment',
    villa: 'Villa',
    commercial: 'Commercial',
    land: 'Land',
    new: 'New',
    offered: 'Offered',
    expired: 'Expired',
    closed: 'Closed',
    thisQuarter: 'This Quarter',
    thisYear: 'This Year',
    
    // New Requests Page
    manageRequests: 'Manage and respond to new property requests',
    searchRequests: 'Search requests...',
    requestId: 'Request ID',
    clientName: 'Client Name',
    propertyType: 'Property Type',
    city: 'City',
    budget: 'Budget',
    status: 'Status',
    date: 'Date',
    actions: 'Actions',
    showing: 'Showing',
    of: 'of',
    requests: 'requests',
    
    // Offers Page
    trackOffers: 'Track and manage all sent property offers',
    searchOffers: 'Search offers...',
    offerId: 'Offer ID',
    offerValue: 'Offer Value',
    communicationStatus: 'Communication Status',
    sentDate: 'Sent Date',
    expiryDate: 'Expiry Date',
    called: 'Called',
    pending: 'Pending',
    totalOffers: 'Total Offers',
    offers: 'offers',
    
    // Deals Page
    viewDeals: 'View all successfully closed property deals',
    searchDeals: 'Search deals...',
    dealId: 'Deal ID',
    propertyAddress: 'Property Address',
    dealValue: 'Deal Value',
    commission: 'Commission',
    closedDate: 'Closed Date',
    totalRevenue: 'Total Revenue',
    totalCommission: 'Total Commission',
    totalDeals: 'Total Deals',
    deals: 'deals',
    
    // Expired Requests Page
    reviewExpired: 'Review and reactivate expired property requests',
    searchExpired: 'Search expired requests...',
    expiredDate: 'Expired Date',
    expiredRequestsAlert: 'Expired Requests Alert',
    expiredRequestsMessage: 'You have {count} expired requests. Consider following up with clients or reactivating these requests.',
    daysExpired: 'days expired',
    reactivate: 'Reactivate',
    expiredRequests: 'expired requests',
    
    // Properties Page
    manageProperties: 'Manage all properties and units',
    searchProperties: 'Search properties...',
    propertyId: 'Property ID',
    propertyName: 'Property Name',
    address: 'Address',
    occupied: 'Occupied',
    available: 'Available',
    monthlyRent: 'Monthly Rent',
    
    // Tenants Page
    manageTenants: 'Manage tenant information and leases',
    searchTenants: 'Search tenants...',
    tenantId: 'Tenant ID',
    tenantName: 'Tenant Name',
    tenant: 'Tenant',
    active: 'Active',
    inactive: 'Inactive',
    
    // Billing Center
    manageInvoices: 'Manage invoices and payments',
    searchInvoices: 'Search invoices...',
    invoiceNo: 'Invoice No',
    dueDate: 'Due Date',
    paidDate: 'Paid Date',
    paid: 'Paid',
    overdue: 'Overdue',
    totalInvoices: 'Total Invoices',
    totalAmount: 'Total Amount',
    paidAmount: 'Paid Amount',
    invoices: 'invoices',
    
    // Expenses
    manageExpenses: 'Track and manage property expenses',
    searchExpenses: 'Search expenses...',
    expenseId: 'Expense ID',
    category: 'Category',
    description: 'Description',
    totalExpenses: 'Total Expenses',
    approved: 'Approved',
    rejected: 'Rejected',
    expenses: 'expenses',
    
    // Waiting List
    manageWaitingList: 'Manage property waiting list',
    searchWaitingList: 'Search waiting list...',
    waitingListId: 'ID',
    name: 'Name',
    joinDate: 'Join Date',
    priority: 'Priority',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    waitingListItems: 'waiting list items',
    
    // Maintains
    manageMaintenance: 'Manage maintenance requests',
    searchMaintenance: 'Search maintenance...',
    maintenanceId: 'Maintenance ID',
    unit: 'Unit',
    issue: 'Issue',
    reportedDate: 'Reported Date',
    open: 'Open',
    inProgress: 'In Progress',
    completed: 'Completed',
    urgent: 'Urgent',
    maintenanceRequests: 'maintenance requests',
    
    // Report
    viewAndGenerateReports: 'View and generate various reports',
    exportReport: 'Export Report',
    dailyReport: 'Daily Report',
    weeklyReport: 'Weekly Report',
    monthlyReport: 'Monthly Report',
    yearlyReport: 'Yearly Report',
    financialReport: 'Financial Report',
    financialReportDescription: 'View revenue, expenses, and profit reports',
    propertyReport: 'Property Report',
    propertyReportDescription: 'View property occupancy and performance',
    tenantReport: 'Tenant Report',
    tenantReportDescription: 'View tenant information and lease details',
    maintenanceReport: 'Maintenance Report',
    maintenanceReportDescription: 'View maintenance requests and status',
    viewReport: 'View Report',
    
    // Settings
    manageApplicationSettings: 'Configure application settings and preferences',
    save: 'Save',
    enableNotifications: 'Enable Notifications',
    emailAlerts: 'Email Alerts',
    smsAlerts: 'SMS Alerts',
    general: 'General',
    language: 'Language',
    timezone: 'Timezone',
    backup: 'Backup',
    autoBackup: 'Auto Backup',
    english: 'English',
    arabic: 'Arabic',
    
    // Role Management
    manageUserRoles: 'Manage user roles and permissions',
    addRole: 'Add Role',
    searchRoles: 'Search roles...',
    roleId: 'Role ID',
    roleName: 'Role Name',
    permissions: 'Permissions',
    users: 'Users',
    roles: 'roles',
    
    // User Management
    manageSystemUsers: 'Manage system users and access',
    addUser: 'Add User',
    searchUsers: 'Search users...',
    userId: 'User ID',
    userName: 'User Name',
    role: 'Role',
    lastLogin: 'Last Login',
    
    // Profile
    manageYourProfile: 'Manage your personal information',
    fullName: 'Full Name',
    position: 'Position',
    saveChanges: 'Save Changes',
    
    // Common
    user: 'User',
    company: 'Company',
    doorlyCompany: 'Doorly Company',
    switchToArabic: 'Switch to Arabic',
    switchToEnglish: 'Switch to English',
    switchToLightMode: 'Switch to Light Mode',
    switchToDarkMode: 'Switch to Dark Mode',
  },
  ar: {
    // Navigation
    dashboard: 'لوحة التحكم',
    properties: 'العقارات',
    tenants: 'المستأجرين',
    billingCenter: 'مركز الفواتير',
    expenses: 'المصروفات',
    waitingList: 'قائمة الانتظار',
    maintains: 'الصيانة',
    report: 'التقارير',
    settings: 'الإعدادات',
    roleManagement: 'إدارة الأدوار',
    userManagement: 'إدارة المستخدمين',
    profile: 'الملف الشخصي',
    newRequests: 'الطلبات الجديدة',
    offers: 'العروض',
    deals: 'الصفقات',
    expiredRequests: 'الطلبات المنتهية',
    
    // Dashboard
    doorlyDashboard: 'لوحة تحكم دورلي',
    realTimeOverview: 'نظرة عامة على أداء الأعمال في الوقت الفعلي',
    totalProperty: 'إجمالي العقارات',
    totalUnits: 'إجمالي الوحدات',
    totalTenants: 'إجمالي المستأجرين',
    totalAvailableUnits: 'إجمالي الوحدات المتاحة',
    newRequestsTitle: 'الطلبات الجديدة',
    sentOffersTitle: 'العروض المرسلة',
    closedDealsTitle: 'الصفقات المغلقة',
    expiredRequestsTitle: 'الطلبات المنتهية',
    today: 'اليوم',
    thisWeek: 'هذا الأسبوع',
    thisMonth: 'هذا الشهر',
    contacted: 'تم الاتصال',
    messaged: 'تم إرسال رسالة',
    noResponse: 'لا يوجد رد',
    dealsThisMonth: 'صفقة هذا الشهر',
    requestsExpired: 'طلب منتهي',
    requestsVsDeals: 'الطلبات مقابل الصفقات (شهرياً)',
    requestsVsDealsSubtitle: 'مقارنة الطلبات الشهرية والصفقات المغلقة',
    conversionFunnel: 'قمع تحويل العروض',
    conversionFunnelSubtitle: 'معدل التحويل من الطلبات إلى الصفقات المغلقة',
    requests: 'الطلبات',
    closedDeals: 'الصفقات المغلقة',
    negotiating: 'قيد التفاوض',
    
    // Filters
    filters: 'المرشحات',
    allDates: 'جميع التواريخ',
    allCities: 'جميع المدن',
    allTypes: 'جميع الأنواع',
    allStatus: 'جميع الحالات',
    muscat: 'مسقط',
    salalah: 'صلالة',
    nizwa: 'نزوى',
    sohar: 'صحار',
    apartment: 'شقة',
    villa: 'فيلا',
    commercial: 'تجاري',
    land: 'أرض',
    new: 'جديد',
    offered: 'تم تقديم عرض',
    expired: 'منتهي',
    closed: 'مغلق',
    thisQuarter: 'هذا الربع',
    thisYear: 'هذا العام',
    
    // New Requests Page
    manageRequests: 'إدارة والرد على طلبات العقارات الجديدة',
    searchRequests: 'البحث في الطلبات...',
    requestId: 'رقم الطلب',
    clientName: 'اسم العميل',
    propertyType: 'نوع العقار',
    city: 'المدينة',
    budget: 'الميزانية',
    status: 'الحالة',
    date: 'التاريخ',
    actions: 'الإجراءات',
    showing: 'عرض',
    of: 'من',
    requests: 'طلبات',
    
    // Offers Page
    trackOffers: 'تتبع وإدارة جميع عروض العقارات المرسلة',
    searchOffers: 'البحث في العروض...',
    offerId: 'رقم العرض',
    offerValue: 'قيمة العرض',
    communicationStatus: 'حالة التواصل',
    sentDate: 'تاريخ الإرسال',
    expiryDate: 'تاريخ الانتهاء',
    called: 'تم الاتصال',
    pending: 'قيد الانتظار',
    totalOffers: 'إجمالي العروض',
    offers: 'عروض',
    
    // Deals Page
    viewDeals: 'عرض جميع صفقات العقارات المغلقة بنجاح',
    searchDeals: 'البحث في الصفقات...',
    dealId: 'رقم الصفقة',
    propertyAddress: 'عنوان العقار',
    dealValue: 'قيمة الصفقة',
    commission: 'العمولة',
    closedDate: 'تاريخ الإغلاق',
    totalRevenue: 'إجمالي الإيرادات',
    totalCommission: 'إجمالي العمولات',
    totalDeals: 'إجمالي الصفقات',
    deals: 'صفقات',
    
    // Expired Requests Page
    reviewExpired: 'مراجعة وإعادة تفعيل طلبات العقارات المنتهية',
    searchExpired: 'البحث في الطلبات المنتهية...',
    expiredDate: 'تاريخ الانتهاء',
    expiredRequestsAlert: 'تنبيه الطلبات المنتهية',
    expiredRequestsMessage: 'لديك {count} طلب منتهي. فكر في متابعة العملاء أو إعادة تفعيل هذه الطلبات.',
    daysExpired: 'يوم منتهي',
    reactivate: 'إعادة التفعيل',
    expiredRequests: 'طلبات منتهية',
    
    // Common
    user: 'المستخدم',
    company: 'الشركة',
    doorlyCompany: 'شركة دورلي',
    switchToArabic: 'التبديل إلى العربية',
    switchToEnglish: 'Switch to English',
    switchToLightMode: 'التبديل إلى الوضع الفاتح',
    switchToDarkMode: 'التبديل إلى الوضع الداكن',
  }
}

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    if (typeof value !== 'string') {
      return key
    }
    
    // Replace parameters
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey]?.toString() || match
      })
    }
    
    return value
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider')
  }
  return context
}

