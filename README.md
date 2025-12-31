# Doorly Dashboard - Alejaar Platform

A modern, enterprise-grade dashboard UI for Doorly company within the Alejaar property management platform.

## Features

- **Modern Dashboard**: Real-time KPI cards and interactive charts
- **Multiple Pages**: Dashboard, New Requests, Offers, Deals, and Expired Requests
- **Responsive Design**: Desktop-first with mobile support
- **RTL/LTR Support**: Ready for Arabic and English languages
- **Professional UI**: Matches Alejaar platform design system
- **Interactive Charts**: Built with Recharts for data visualization
- **Filtering & Search**: Advanced filtering and search capabilities

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Recharts** for data visualization
- **Lucide React** for icons
- **CSS Modules** for styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout with sidebar
│   ├── KPICard.tsx     # KPI metric cards
│   ├── FilterBar.tsx # Filter controls
│   ├── DataTable.tsx   # Data table component
│   └── Charts/         # Chart components
├── pages/              # Page components
│   ├── Dashboard.tsx
│   ├── NewRequests.tsx
│   ├── Offers.tsx
│   ├── Deals.tsx
│   └── ExpiredRequests.tsx
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## Pages Overview

### 1. Dashboard
- KPI cards showing key metrics
- Monthly requests vs deals chart
- Conversion funnel visualization
- Filter controls

### 2. New Requests
- Table of all new property requests
- Quick actions (Call, Message, Send Offer)
- Status badges
- Search and filter functionality

### 3. Offers
- List of all sent offers
- Communication status tracking
- Offer value and expiry dates
- Summary statistics

### 4. Deals
- Closed deals overview
- Revenue and commission summaries
- Property and client information
- Financial metrics

### 5. Expired Requests
- List of expired requests
- Days expired indicators
- Reactivation options
- Alert notifications

## Design System

The dashboard follows Alejaar's design system:

- **Primary Color**: Blue (#2563eb)
- **Neutral Colors**: Gray scale for text and backgrounds
- **Status Colors**: Green (success), Yellow (warning), Red (danger)
- **Spacing**: Consistent spacing scale
- **Typography**: System fonts for optimal performance
- **Shadows**: Subtle shadows for depth

## RTL Support

The dashboard is ready for RTL (Right-to-Left) languages. To enable RTL:

1. Add `dir="rtl"` to the HTML element
2. The CSS includes RTL-specific styles that will automatically apply

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the Alejaar platform.






