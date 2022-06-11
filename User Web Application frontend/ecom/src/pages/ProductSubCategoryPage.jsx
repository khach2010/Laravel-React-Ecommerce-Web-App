import React, {useEffect, useState} from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import { useParams } from 'react-router-dom';
import AppURL from '../api/AppURL'
import axios from 'axios'
import SubCategory from '../components/ProductDetails/SubCategory'

function ProductSubCategoryPage() {
  const [productSubCategoryData, setProductSubCategoryData] = useState([])
  const {category} = useParams()
  const {subcategory} = useParams()

  async function getProductSubCategoryData() {
    try {
      const response = await axios.get(AppURL.ProductListBySubCategory(category, subcategory))
      setProductSubCategoryData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductSubCategoryData()
  }, []);

  return (
    <> 
    <div className="Desktop">
     <NavMenuDesktop /> 
    </div>

    <div className="Mobile">
    <NavMenuMobile />  
    </div>                       
   
    <SubCategory category={category} subcategory={subcategory} productSubCategoryData={productSubCategoryData} />

    <div className="Desktop">
    <FooterDesktop/>
    </div>

    <div className="Mobile">
    <FooterMobile/>
    </div>
    </>
  )
}

export default ProductSubCategoryPage