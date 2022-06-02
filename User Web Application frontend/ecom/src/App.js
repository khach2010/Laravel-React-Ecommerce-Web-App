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
import FavouritePage from './pages/FavouritePage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import ProductCategoryPage from './pages/ProductCategoryPage'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/login" element={<UserLoginPage />} />
      <Route exact path="/privacy" element={<PrivacyPage />} />
      <Route exact path="/refund" element={<RefundPage />} />
      <Route exact path="/purchase" element={<PurchasePage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/productdetails" element={<ProductDetailsPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route exact path="/favourite" element={<FavouritePage />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route
        path="/productcategory/:category"
        element={<ProductCategoryPage />}
      />
    </Routes>
  )
}

export default App
