import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import UserLoginPage from './pages/UserLoginPage'
import PrivacyPage from './pages/PrivacyPage'
import RefundPage from './pages/RefundPage'
import PurchasePage from './pages/PurchasePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import NotificationPage from './pages/NotificationPage'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/refund" element={<RefundPage />} />
      <Route path="/purchase" element={<PurchasePage />} />
      <Route path="/productdetails" element={<ProductDetailsPage />} />
      <Route path="/notification" element={<NotificationPage />} />
    </Routes>
  )
}

export default App
