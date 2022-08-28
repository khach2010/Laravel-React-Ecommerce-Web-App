import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import AppURL from '../api/AppURL';
import axios from 'axios'
import OrderList from '../components/Cart/OrderList'


function OrderListPage({userProfile: {email, name}}) {
  const [orderListHistory, setOrderListHistory] = useState([])
  
  async function getOrderListHistory() {
    try {
      const response = await axios.get(AppURL.OrderHistory(email))
      return setOrderListHistory(response.data)
    } catch (error) {
      return console.log(error)
    }
  }

  useEffect(() => {
    window.scroll(0,0)
    getOrderListHistory()
  }, [email])

  return (
    <>
    <div className="Desktop">
      <NavMenuDesktop />
    </div>

    <div className="Mobile">
      <NavMenuMobile />  
    </div>     

    <div className='responsive'>
      <OrderList name={name} email={email} orderListHistory={orderListHistory} />
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

export default OrderListPage