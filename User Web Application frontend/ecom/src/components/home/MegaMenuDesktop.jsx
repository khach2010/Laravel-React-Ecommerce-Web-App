import React, { Component } from 'react'

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
      return <div key={i.toString} >
                  <button onClick={MenuItemClick} className="accordion">
                    <img className="accordionMenuIcon" src={category_image} />&nbsp; {category_name}
                  </button>
                  <div className="panel">
                    <ul>
                      {subcategory_name.map((sub, ix) => {
                        return <li key={ix}><a href="#" className="accordionItem" > {sub.subcategory_name} </a></li>
                      })}
                    </ul>
                  </div>
                </div> 
  })



  // function MegeMenu(){
  //   var acc = document.getElementsByClassName("accordion");
  //   var i;

  //   for (i = 0; i < acc.length; i++) {
  //     acc[i].addEventListener("click", function() {
  //       this.classList.toggle("active");
  //       var panel = this.nextElementSibling;
  //       if(panel.style.maxHeight){
  //         panel.style.maxHeight = null;
  //       }else{
  //             panel.style.maxHeight= panel.scrollHeight+ "px"
  //       }
  //     });
  //   }
  // }

  // MegeMenu()
 
  return (
      <div className="accordionMenuDiv">
          <div className="accordionMenuDivInside">

            {MyView}

          </div>
      </div>
  )
  
}

export default MegaMenuDesktop