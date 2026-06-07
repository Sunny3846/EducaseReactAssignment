import { Component } from 'react'
import './index.css'

class SignupScreen extends Component {
  state = {
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes',
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAgencyChange = value => {
    this.setState({ agency: value })
  }

  handleCreate = () => {
    window.location.href = '/profile'
  }

  /* Render a single floating-label input.
     Label always sits on the top border line (never inside). */
  renderField(id, name, label, type = 'text', required = false) {
    return (
      <div className="fl-group" key={id}>
        <label htmlFor={id} className="fl-label">
          {label}
          {required && <span className="fl-required">*</span>}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          className="fl-input"
          value={this.state[name]}
          onChange={this.handleInputChange}
          placeholder={label}
        />
      </div>
    )
  }

  render() {
    const { agency } = this.state

    return (
      <div className="signup-screen">

        {/* ── Hero ── */}
        <div className="signup-hero">
          <h1 className="signup-title">
            Create your<br />PopX account
          </h1>
        </div>

        {/* ── Form ── */}
        <div className="signup-form">
          {this.renderField('su-name',     'fullName', 'Full Name',     'text',     true)}
          {this.renderField('su-phone',    'phone',    'Phone number',  'tel',      true)}
          {this.renderField('su-email',    'email',    'Email address', 'email',    true)}
          {this.renderField('su-password', 'password', 'Password',      'password', true)}
          {this.renderField('su-company',  'company',  'Company name',  'text',     false)}

          {/* ── Agency radio ── */}
          <div className="agency-section">
            <p className="agency-label">
              Are you an Agency?<span className="fl-required">*</span>
            </p>
            <div className="agency-options">

              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  className="radio-input"
                  checked={agency === 'yes'}
                  onChange={() => this.handleAgencyChange('yes')}
                />
                <span className={`radio-custom${agency === 'yes' ? ' radio-custom--checked' : ''}`} />
                <span className="radio-text">Yes</span>
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  className="radio-input"
                  checked={agency === 'no'}
                  onChange={() => this.handleAgencyChange('no')}
                />
                <span className={`radio-custom${agency === 'no' ? ' radio-custom--checked' : ''}`} />
                <span className="radio-text">No</span>
              </label>

            </div>
          </div>

          <button
            type="button"
            className="btn-create"
            onClick={this.handleCreate}
          >
            Create Account
          </button>
        </div>

      </div>
    )
  }
}

export default SignupScreen
