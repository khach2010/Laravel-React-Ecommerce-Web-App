import React, { useState } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Favourite from '../components/Favourite/Favourite'

function FavouritePage({userProfile}) {
  const [favCount, setFavCount] = useState('')

    return (
      <>
      <div className="Desktop">
        <NavMenuDesktop favCount={favCount} />
      </div>

      <div className="Mobile">
        <NavMenuMobile favCount={favCount} />  
      </div>      
    
          <Favourite userEmail={userProfile.email} setFavCount={setFavCount}/>

      <div className="Desktop">
        <FooterDesktop/>
      </div>

      <div className="Mobile">
        <FooterMobile/>
      </div>
      
    </>
    )
}

export default FavouritePage