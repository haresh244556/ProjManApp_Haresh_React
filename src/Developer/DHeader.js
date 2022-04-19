import React from 'react'
import { Link } from 'react-router-dom'

export const DHeader = () => {

  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-2 static-top shadow">
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fas fa-search fa-sm" />
              </button>
            </div>
          </div>
        </form>
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block" />
          <li className="nav-item dropdown no-arrow">
            <Link to="/" >
              <button className="btn btn-secondary" type="button">Logout</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>




  )
}
