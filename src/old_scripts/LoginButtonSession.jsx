import { GoogleLogin } from '@react-oauth/google'
import { useSessionToken } from './hooks/useSessionToken'
import { useNavigate } from 'react-router-dom'

export const LoginButton = () => {
  const { saveToken, getUserFromToken, logout } = useSessionToken()
  
  let navigate = useNavigate()

  const handleSuccess = (response) => {
    const token = response?.credential

    if (!token) return

    saveToken(token)
    const user = getUserFromToken()
    console.log('User:', user)

    navigate('/main')

  }

  const handleError = () => {
    console.error('Login failed')
  }

  return (
    <>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      <button onClick={logout}>Logout</button>
    </>
  )
}
