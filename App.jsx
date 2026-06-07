import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingScreen from './Components/LandingScreen'
// import LoginScreen from './Components/LoginScreen'
// import SignupScreen from './Components/SignupScreen'
// import ProfileScreen from './Components/ProfileScreen'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="mobile-shell">
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            {/* <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} /> */}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App