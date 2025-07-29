// import React from 'react'

const Aside = () => {
  return (
      <aside className="sidebar">
            <div className="sidebar-header">
                <h1 className="logo">LandaHQ</h1>
            </div>
            <nav className="sidebar-nav">
                <a href="#" className="nav-link active">
                    <i className="fa-solid fa-house-user"></i>
                    <span>Dashboard</span>
                </a>
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-user-group"></i>
                    <span>Tenants</span>
                </a>
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-hotel"></i>
                    <span>Properties</span>
                </a>
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-credit-card"></i>
                    <span>Payment</span>
                </a>
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-wrench"></i>
                    <span>Maintenance</span>
                </a>
            </nav>
            <div className="sidebar-footer">
                 <a href="#" className="nav-link">
                    <i className="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </a>
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Logout</span>
                </a>
            </div>
        </aside>
  )
}

export default Aside
