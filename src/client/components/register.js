import React, { Component } from 'react'
import { register } from './userConnect'

export default class Register extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',

    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }

    register(user).then(res => {
      this.props.history.push(`/api/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={this.state.firstName}
                  onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={this.state.lastName}
                  onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange} />
              </div>
              <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input type="confirmPassword"
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                value={this.state.confirmPassword}
                onChange={this.onChange} />
            </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

