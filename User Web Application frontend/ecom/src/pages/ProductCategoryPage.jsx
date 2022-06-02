import React, {useEffect, useState} from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Category from '../components/ProductDetails/Category'
import { useParams } from 'react-router-dom';
import AppURL from '../api/AppURL'
import axios from 'axios'
import { Link } from 'react-router-dom';

const ProductCategoryPage = () => {
  const [productCategoryData, setProductCategoryData] = useState([])
  const {category} = useParams()



  async function getProductCategoryData() {
    try {
      const response = await axios.get(AppURL.ProductListByCategory(category))
      setProductCategoryData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductCategoryData()
  }, []);
 
  return (
    <> 
    <div className="Desktop">
     <NavMenuDesktop /> 
    </div>

    <div className="Mobile">
    <NavMenuMobile />  
    </div>                       
   
    <Category category={category} productCategoryData={productCategoryData} />

    <div className="Desktop">
    <FooterDesktop/>
    </div>

    <div className="Mobile">
    <FooterMobile/>
    </div>
    </>
  )
   
}

export default ProductCategoryPage