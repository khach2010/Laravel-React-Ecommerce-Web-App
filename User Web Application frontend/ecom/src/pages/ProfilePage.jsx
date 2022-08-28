import React from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Profile from '../components/common/Profile'

function ProfilePage({userProfile}) {
  return (
    <> 
    <div className="Desktop">
     <NavMenuDesktop /> 
    </div>

    <div className="Mobile">
    <NavMenuMobile />  
    </div>                       
    
    <div className='responsive'>
      <Profile userData={userProfile}/> 
    </div>
     

    <div className="Desktop">
    <FooterDesktop/>
    </div>

    <div className="Mobile">
    <FooterMobile/>
    </div>

</>
  )
}

export default ProfilePage