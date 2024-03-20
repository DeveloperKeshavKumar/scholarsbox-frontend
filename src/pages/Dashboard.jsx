import React from 'react'
import { Navbar } from '../components/Navbar';
import  Footer  from '../components/Footer';
import { DashboardUtil } from '../components/DashboardUtil'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <DashboardUtil/>
      <Footer/>
    </>
  )
}

export default Dashboard;
