import React from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Register from '../components/common/Register'

function RegisterPage() {
  return (
    <>
    <div className="Desktop">
      <NavMenuDesktop />
    </div>

    <div className="Mobile">
      <NavMenuMobile />  
    </div>      
  
        <Register />

    <div className="Desktop">
      <FooterDesktop/>
    </div>

    <div className="Mobile">
      <FooterMobile/>
    </div>
    
  </>
  )
}

export default RegisterPage