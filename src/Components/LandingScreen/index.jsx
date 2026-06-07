import { useNavigate } from 'react-router-dom'
import './index.css'

const LandingScreen = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-screen-container">
      <div className="content-container">
        <h1 className="heading">Welcome to PopX</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <button
  type="button"
  className="register-button"
  onClick={() => navigate('/signup')}
>
  Create Account
</button>

<button
  type="button"
  className="login-button"
  onClick={() => navigate('/login')}
>
  Already Registered? Login
</button>
      </div>
    </div>
  )
}

export default LandingScreen