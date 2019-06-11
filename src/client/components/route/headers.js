import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Headers extends Component {
  render() {
    return (
      <div>

        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to='/list/'>List</Link>
          </li>
        </ul>

      </div>
    )
  }
}
