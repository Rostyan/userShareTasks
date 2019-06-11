import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default class Headers extends Component {

  logOut (e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
}
  render() {

    const loginLink = (
      <ul className="nav justify-content-end">
    <li className="nav-item">
      <Link className="nav-link " to='/login'>Login</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to='/register'>Register</Link>
    </li>
  </ul>
  )

  const userLink = (
    <ul className="navbar-nav">
        
        <li className="nav-item">
            <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                Logout
            </a>
        </li>
    </ul>
)
    return (
      <div className="header-style">

        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link " to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to='/list/'>List</Link>
          </li>
        </ul>


        {localStorage.usertoken ? userLink : loginLink}

      </div>
    )
  }
}
