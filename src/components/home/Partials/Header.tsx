// import React from 'react'
// HEADER
// import { link } from 'fs'
import  '../../../css/module.css/Header.css'

const Header = () => {
  return (
      <header>
      <nav>
        <div className='nav-bar'>
          <div>
              <a href="/">
                <img
                  src=""
                  alt="Landa-HQ logo"
                  className='logo'
                />
              </a>
          </div>
          <div className='nav'>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">House Listings</a></li>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Contact</a></li>
              </ul>
          </div>
          <div>
              <button className='nav-cta-btn'>Get Started as a LandLord</button>
          </div>
        </div>
<hr className='hr' />
        <div className='search-nav'>
          <div className='nav-search-input-styles'>
            <input
              type="search"
              placeholder="Search for property,location..."
            />
          </div>
          <div>
            social media icons
          </div>
        </div>
      </nav>
      
    </header>
  )
}

export default Header
