import React from 'react'
import DashboarNavbar from './dashboard_components/DashboardNavbar'
import DashboardMessage from './dashboard_components/DashboardMessage'
import DashboardFooter from './dashboard_components/DashboardFooter'
function Dashboard() {
  return (
    <div>
      <h1> DashBoard Component</h1>
      <DashboarNavbar />
      <DashboardMessage />
      <DashboardFooter />
    </div>
  )
}

export default Dashboard
