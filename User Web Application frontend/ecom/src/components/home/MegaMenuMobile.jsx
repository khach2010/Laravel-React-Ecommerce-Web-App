import React, { Component } from 'react'

class MegaMenuMobile extends Component {

  componentDidMount() {
    var acc = document.getElementsByClassName("accordionMobile");
    var i;
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
          panel.style.maxHeight = null;
        }else{
              panel.style.maxHeight= panel.scrollHeight+ "px"
        }
      });
    }
   }

   render() {
       return (
           <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">

                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="accordionMobile">
                      <img className="accordionMenuIconMobile" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panelMobile">
                      <ul>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  
                  

                </div>
           </div>
       )
  }
}

export default MegaMenuMobile