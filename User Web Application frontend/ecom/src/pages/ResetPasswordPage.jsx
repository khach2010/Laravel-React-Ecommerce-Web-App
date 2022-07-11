import React from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'

import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ResetPassword from '../components/common/ResetPassword'

function ResetPasswordPage() {
  return (
    <>
    <div className="Desktop">
      <NavMenuDesktop />
    </div>

    <div className="Mobile">
      <NavMenuMobile />  
    </div>      
  
        <ResetPassword />

    <div className="Desktop">
      <FooterDesktop/>
    </div>

    <div className="Mobile">
      <FooterMobile/>
    </div>
    
  </>
  )
}

export default ResetPasswordPage