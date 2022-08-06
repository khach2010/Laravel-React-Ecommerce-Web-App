import React, { useState, useEffect} from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import AppURL from '../api/AppURL'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function ProductDetailsPage(userProfile) {
  const [productDataDetails, setProductDataDetails] = useState([])
  const [productDataList, setProductDataList] = useState([])
  const [cartCount, setCartCount] = useState('')
   const {code} = useParams()
   
   async function getProductData() {
     try {
       const response = await axios.get(AppURL.ProductDetails(code))
       setProductDataDetails(response.data['productDetails'])
       setProductDataList(response.data['productList'])
     } catch (error) {
       console.log(error)
     }
   }


     useEffect(() => {
          getProductData()
     }, [cartCount])
     
          return (
               <> 
               <div className="Desktop">
                <NavMenuDesktop cartCount={cartCount} /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       
  
               <ProductDetails cartCount={cartCount} setCartCount={setCartCount} user={userProfile} dataDetails={productDataDetails} dataList={productDataList}/> 

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </>
          )
     
}

export default ProductDetailsPage