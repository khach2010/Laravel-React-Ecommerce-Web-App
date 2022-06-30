import React from 'react'
import { Link } from 'react-router-dom';

function MegaMenuDesktop({data}) {
  const MenuItemClick = (e) => {
    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    }else{
          panel.style.maxHeight= panel.scrollHeight+ "px"
    }
  }
  
  const MyView = data.map((cat, i) => {
    const {category_name, category_image, subcategory_name} = cat
      return <div key={category_name+i} >
                  <button onClick={MenuItemClick} className="accordion">
                    <img className="accordionMenuIcon" src={category_image} />&nbsp; {category_name}
                  </button>
                  <div className="panel">
                    <ul>
                      {subcategory_name.map((sub, ix) => {
                        return <li key={subcategory_name+ix}><Link to={`/productsubcategory/${category_name}/${sub.subcategory_name}`} className="accordionItem" > {sub.subcategory_name} </Link></li>
                      })}
                    </ul>
                  </div>
                </div> 
  })
 
  return (
      <div className="accordionMenuDiv">
          <div className="accordionMenuDivInside">

            {MyView}

          </div>
      </div>
  )
  
}

export default MegaMenuDesktop