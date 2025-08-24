import { Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import DashboardPage from './DashboardPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}
