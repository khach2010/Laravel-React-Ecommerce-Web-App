import React, { Component } from 'react'

class MegaMenuDesktop extends Component {

 componentDidMount() {
  var acc = document.getElementsByClassName("accordion");
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
           <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button className="accordion">
                      <img className="accordionMenuIcon" src="https://t3.ftcdn.net/jpg/02/99/52/12/240_F_299521250_KYMpMWGPMwgSODiVhssX8Ma6woPzdkRn.jpg" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                      <ul>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                      </ul>
                    </div>
                  </div>


                </div>
           </div>
       )
  }
}

export default MegaMenuDesktop