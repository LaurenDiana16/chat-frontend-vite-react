import { Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import ChatPage from './ChatPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  )
}
