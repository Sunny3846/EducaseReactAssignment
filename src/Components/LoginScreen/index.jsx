import { Component } from 'react'
import './index.css'

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLogin = () => {
    window.location.href = '/profile'
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="login-screen">

        {/* ── Hero ── */}
        <div className="login-hero">
          <h1 className="login-title">
            Signin to your<br />PopX account
          </h1>
          <p className="login-subtitle">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
        </div>

        {/* ── Form ── */}
        <div className="login-form">

          {/* Email field */}
          <div className="fl-group">
            <label htmlFor="login-email" className="fl-label">
              Email Address
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              className="fl-input"
              placeholder="Enter email address"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          {/* Password field */}
          <div className="fl-group">
            <label htmlFor="login-password" className="fl-label">
              Password
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              className="fl-input"
              placeholder="Enter password"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={this.handleLogin}
          >
            Login
          </button>

        </div>
      </div>
    )
  }
}

export default LoginScreen
