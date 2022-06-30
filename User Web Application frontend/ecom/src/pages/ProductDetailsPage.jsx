import React, { useState, useEffect} from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct'
import AppURL from '../api/AppURL'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
   const [productData, setProductData] = useState([])
   const {code} = useParams()
   
   async function getProductData() {
     try {
       const response = await axios.get(AppURL.ProductDetails(code))
       setProductData(response.data)
     } catch (error) {
       console.log(error)
     }
   }

     useEffect(() => {
          window.scroll(0,0)
          getProductData()
     }, [])

     
          return (
               <> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <ProductDetails data={productData} /> 
               <SuggestedProduct />

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