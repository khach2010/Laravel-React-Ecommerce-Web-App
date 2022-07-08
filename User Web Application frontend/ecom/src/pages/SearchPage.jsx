import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import AppURL from '../api/AppURL'
import axios from 'axios'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import { Link } from 'react-router-dom';
import SearchList from '../components/ProductDetails/SearchList';

function SearchPage() {
  let { searchKey } = useParams();
  const [searchData, setSearchData] = useState([])


  async function getSearchData() {
    try {
      const response = await axios.get(AppURL.ProductBySearch(searchKey))
      setSearchData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSearchData()
  }, []);


  return (
    <> 
    <div className="Desktop">
     <NavMenuDesktop /> 
    </div>

    <div className="Mobile">
    <NavMenuMobile />  
    </div>                       
   
    <SearchList searchData={searchData} searchKey={searchKey} />

    <div className="Desktop">
    <FooterDesktop/>
    </div>

    <div className="Mobile">
    <FooterMobile/>
    </div>
    </>
  )
}

export default SearchPage