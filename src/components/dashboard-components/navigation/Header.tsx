// import React from 'react'

const Header = () => {
  return (
        <header className="main-header">
            <div className="header-left">
                <button className="menu-toggle" id="menu-toggle">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="search-bar">
                    <i className="fa-solid fa-search"></i>
                    <input type="search" placeholder="Search properties, tenants..." />
                </div>
            </div>
            <div className="header-right">
                <button className="icon-button">
                    <i className="fa-regular fa-bell"></i>
                    <span className="notification-dot"></span>
                </button>
                <div className="user-profile">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Profile Image" />
                    <div className="user-info">
                        <span className="user-name">John Doe</span>
                        <span className="user-role">Landlord</span>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header
