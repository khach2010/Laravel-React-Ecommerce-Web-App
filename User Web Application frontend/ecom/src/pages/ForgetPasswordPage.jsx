import React from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import Forget from '../components/common/Forget'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

function ForgetPasswordPage() {
  return (
    <>
    <div className="Desktop">
      <NavMenuDesktop />
    </div>

    <div className="Mobile">
      <NavMenuMobile />  
    </div>      
  
        <Forget />

    <div className="Desktop">
      <FooterDesktop/>
    </div>

    <div className="Mobile">
      <FooterMobile/>
    </div>
    
  </>
  )
}

export default ForgetPasswordPage