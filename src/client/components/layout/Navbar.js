import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/authActions'

  const Navbar = ({ auth, logoutUser }) => (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-container">
          <li>
            <Link className="navbar-brand" to="/">
              Task app
            </Link>
          </li>
          {!auth.isAuthenticated && (
            <Fragment>
              <li>
                <Link className="navbar-item" to="/register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/login">
                  Login
                </Link>
              </li>
            </Fragment>
          )}
          {auth.isAuthenticated && (
            <Fragment>
              <li>
                <Link className="navbar-item" to="/dashboard">
                  New Task
                </Link>
              </li>
              <li>
                <a className="navbar-item" onClick={logoutUser}>
                  Logout
                </a>
              </li>
            </Fragment>
          )}
        </ul>
        {auth.isAuthenticated && (
          <p className="navbar-user">Logged in as {auth.user.name}</p>
        )}
      </div>
    </nav>
  );

  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { logoutUser })(Navbar);
