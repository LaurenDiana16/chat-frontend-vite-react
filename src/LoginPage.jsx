import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { useSessionToken } from './hooks/useSessionToken'
import './loginpage.css' 

export default function LoginPage() {
  const navigate = useNavigate()
  
  const { saveToken, getUserFromToken, logout } = useSessionToken()

  const onSuccess = (credentialResponse) => {
   
    console.log('Login Success:', credentialResponse)
    
    // token storage, may need to send to backend
    const token = credentialResponse?.credential
    if (!token) return
    
    saveToken(token)
    const user = getUserFromToken()
    console.log('User:', user)  

    // Perform any necessary actions with the credentialResponse (e.g., send to backend)
    
    // Redirect to the dashboard page
    navigate('/dashboard')
  }

  const onError = () => {
    console.log('Login Failed')
  }

  // update to use nice styling
  return (
    <div className="particles-container" id="particles-js">
      <div className="container">
        <div className="content">
          <div className="logo-container">
            <div className="logo-pulse"></div>
              <div className="logo">
                <i className="fas fa-robot"></i>
              </div>
            </div>
            <h1>NANDA<span class="accent">.</span></h1>
            <h2>Agentic Chat Assistant</h2>
            <p>Connect with intelligent agents powered by advanced AI technology</p>
          <div className="signin-container">
            <GoogleLogin onSuccess={onSuccess} onError={onError} />
          </div>
        </div>
      </div>
      <p className="terms">By signing in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
    </div>
      )
}
