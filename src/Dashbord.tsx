// import React from 'react'
import MainChart from "./components/dashboard-components/MainChart"
import Aside from "./components/dashboard-components/navigation/Aside"
import Header from "./components/dashboard-components/navigation/Header"
import Stats from "./components/dashboard-components/Stats"
import WelcomeSection from "./components/dashboard-components/WelcomeSection"
// Styles
import './css/dashboard/style.css'

const Home = () => {
  return (
      <div className="dashboard-container">
        <Aside />
          <main className="main-content">
            <Header/>
            <WelcomeSection />
            <Stats />
            <MainChart/>
          </main>
      </div>
  )
}

export default Home
