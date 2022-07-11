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
import ProductSubCategoryPage from './pages/ProductSubCategoryPage'
import SearchPage from './pages/SearchPage'
import RegisterPage from './pages/RegisterPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/login" element={<UserLoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/forgetpassword" element={<ForgetPasswordPage />} />
      <Route exact path="/resetpassword" element={<ResetPasswordPage />} />
      <Route exact path="/privacy" element={<PrivacyPage />} />
      <Route exact path="/refund" element={<RefundPage />} />
      <Route exact path="/purchase" element={<PurchasePage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route
        exact
        path="/productdetails/:code"
        element={<ProductDetailsPage />}
      />
      <Route path="/notification" element={<NotificationPage />} />
      <Route exact path="/favourite" element={<FavouritePage />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route
        path="/productcategory/:category"
        element={<ProductCategoryPage />}
      />
      <Route
        path="/productsubcategory/:category/:subcategory"
        element={<ProductSubCategoryPage />}
      />
      <Route path="/productbysearch/:searchKey" element={<SearchPage />} />
    </Routes>
  )
}

export default App
