import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart/Cart'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import AppURL from '../api/AppURL';
import axios from 'axios'

function CartPage({userProfile: {email}}){

  const [shoppingList, setShoppingList] = useState([])
  const [pageRefesh, setPageRefesh] = useState(false)

  console.log(shoppingList)

  async function getShoppingList() {
    try {
      const response = await axios.get(AppURL.ShoppingCartReview(email))
      setShoppingList(response.data)
      setPageRefesh(false)
      
    } catch (error) {
      console.log(error)
      setPageRefesh(false)
    }
  }


  useEffect(() => {
    getShoppingList()
  
  }, [pageRefesh]);
    return (
      <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />  
      </div>      
    
          <Cart email={email} shoppingList={shoppingList} setPageRefesh={setPageRefesh}/>

      <div className="Desktop">
        <FooterDesktop/>
      </div>

      <div className="Mobile">
        <FooterMobile/>
      </div>
      
    </>
    )
  
}

export default CartPage