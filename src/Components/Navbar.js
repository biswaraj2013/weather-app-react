import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Weather-App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Hourly Forecast</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Future Forecast</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">AQI</Link>
          </li> */}
        </ul>        
      </div>
    </div>
  </nav>
  )
}

export default Navbar
