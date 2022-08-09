import React, { useEffect, useState } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import AppURL from '../api/AppURL';
import axios from 'axios'
import OrderList from '../components/Cart/OrderList'


function OrderListPage({userProfile: {email}}) {
  const [pageRefesh, setPageRefesh] = useState(false)
  const [orderListHistory, setOrderListHistory] = useState([])

  async function getOrderListHistory() {
    try {
      const response = await axios.get(AppURL.OrderHistory(email))
      setOrderListHistory(response.data)
      setPageRefesh(true)
      
    } catch (error) {
      console.log(error)
      setPageRefesh(false)
    }
  }


  useEffect(() => {
    window.scroll(0,0)
    getOrderListHistory()
  }, [pageRefesh]);

  return (
    <>
    <div className="Desktop">
      <NavMenuDesktop />
    </div>

    <div className="Mobile">
      <NavMenuMobile />  
    </div>     

   <OrderList email={email} orderListHistory={orderListHistory}  setPageRefesh={setPageRefesh} />

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