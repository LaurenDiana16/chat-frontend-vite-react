import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import './loginpage.css' 
import config from './config.js';
import { useSessionToken } from './hooks/useSessionToken'


export default function LoginPage() {
  
  const navigate = useNavigate()
  const { saveToken, getUserFromToken, logout } = useSessionToken()
  const onSuccess = (credentialResponse) => {
  
    // Successful login
    console.log('Login Success:', credentialResponse)
    
    // Get the user
    const token = credentialResponse?.credential
    if (!token) return
    saveToken(token)
    const user = getUserFromToken()
    console.log('User:', user)  

    // Call the /api/check-user endpoint to check if user exists, if so update user


    // Redirect to the chat page
    navigate('/chat')
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
            <h1>NANDA<span className="accent">.</span></h1>
            <h2>Agentic Chat Assistant</h2>
            <p>Connect with intelligent agents powered by advanced AI technology</p>
          <div className="signin-container">
            <GoogleLogin onSuccess={onSuccess} onError={onError} />
          </div>
        </div>
      </div>
    </div>
     )
}
