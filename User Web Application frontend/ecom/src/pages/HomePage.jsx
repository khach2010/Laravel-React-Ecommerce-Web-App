import React, { useEffect } from 'react'
import Categories from '../components/home/Categories'
import Collections from '../components/home/Collections'
import FeatureProducts from '../components/home/FeatureProducts'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import axios from 'axios'
import AppURL from '../api/AppURL'

function HomePage() {
  
  const GetVisitorDetails = () => {
    axios.get(AppURL.VisitorDetails).then().catch()
  }

  useEffect(() => {
    window.scroll(0,0)
    GetVisitorDetails()
  }, [])

  
    return (
      <>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />  
          <HomeTopMobile />
        </div>      
      
       
       
        <FeatureProducts />
        <Collections />
        <NewArrival />
        <Categories />

        <div className="Desktop">
          <FooterDesktop/>
        </div>

        <div className="Mobile">
          <FooterMobile/>
        </div>
        
      </>
    )
  
}

export default HomePage