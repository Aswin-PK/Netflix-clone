import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <header className="header">
      <nav className="navbar" id='navbar'>
        {/* <div className="container"> */}
          <div className="left-container">
            <span>
              <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix-logo" />
            </span>
            <ul className='leftside-lists'>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Recently Added</li>
              <li>My List</li>
            </ul>
          </div>
          <div className="right-container">
            <ul className='rightside-lists'>
                <li><i className="bi bi-search"></i></li>
                <li>KIDS</li>
                <li>DVD</li>
                <li><i className="bi bi-bell"></i></li>
                <li>
                  <div className="account">
                    profile
                  </div>
                </li>
              </ul>
          </div>
        {/* </div> */}
      </nav>
    </header>
  )
}

export default NavBar