import React, { useEffect, useState } from 'react'
import AppURL from '../../api/AppURL'
import axios from 'axios'
import { Link } from 'react-router-dom'

function MegaMenuMobile() {

  const [menuData,  setMenuData] = useState([])

  const MenuItemClick = (e) => {
    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    }else{
          panel.style.maxHeight= panel.scrollHeight+ "px"
    }
  }
  const MyView = menuData.map((cat, i) => {
    const {category_name, category_image, subcategory_name} = cat
      return <div key={category_name+i} >
                  <button onClick={MenuItemClick} className="accordionMobile">
                    <img className="accordionMenuIconMobile" src={category_image} />&nbsp; {category_name}
                  </button>
                  <div className="panelMobile">
                    <ul>
                      {subcategory_name.map((sub, ix) => {
                        return <li key={subcategory_name+ix}><Link to={`/productsubcategory/${category_name}/${sub.subcategory_name}`} className="accordionItemMobile" > {sub.subcategory_name} </Link></li>
                      })}
                    </ul>
                  </div>
                </div> 
  })
 

  async function getMenuData() {
    try {
      const response = await axios.get(AppURL.AllCategoryDetails)
      setMenuData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMenuData()
  }, []);

  
       return (
           <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">
                  {MyView}  
                </div>
           </div>
       )
  
}

export default MegaMenuMobile