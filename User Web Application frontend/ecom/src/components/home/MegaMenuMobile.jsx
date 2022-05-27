import React, { useEffect, useState } from 'react'
import AppURL from '../../api/AppURL'
import axios from 'axios'

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
      return <div key={i.toString} >
                  <button onClick={MenuItemClick} className="accordionMobile">
                    <img className="accordionMenuIconMobile" src={category_image} />&nbsp; {category_name}
                  </button>
                  <div className="panelMobile">
                    <ul>
                      {subcategory_name.map((sub, ix) => {
                        return <li key={ix}><a href="#" className="accordionItemMobile" > {sub.subcategory_name} </a></li>
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