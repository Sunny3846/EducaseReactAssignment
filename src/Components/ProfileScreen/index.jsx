import { Component } from 'react'
import './index.css'

const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="12"
    height="12"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)

class ProfileScreen extends Component {
  render() {
    return (
      <div className="profile-screen">

        {/* ── Header ── */}
        <header className="profile-header">
          <span className="profile-header__title">Account Settings</span>
        </header>

        {/* ── Profile card ── */}
        <div className="profile-card">
          <div className="avatar-wrapper">
            <div className="avatar-img">
              <span className="avatar-initials">MD</span>
            </div>
            <button className="avatar-camera-btn" aria-label="Change photo">
              <CameraIcon />
            </button>
          </div>

          <div className="profile-info">
            <p className="profile-name">Marry Doe</p>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* ── Description ── */}
        <div className="profile-description">
          <p className="profile-desc-text">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* ── Dotted divider ── */}
        <div className="profile-divider" />

        {/* ── Lower grey empty area ── */}
        <div className="profile-lower" />

      </div>
    )
  }
}

export default ProfileScreen
