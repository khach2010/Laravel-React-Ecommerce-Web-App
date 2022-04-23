import React, { useState} from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../assets/images/easyshop.png';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavMenuMobile() {
  const [sideNav, setSideNav] = useState(false)
  return (
    <>
    <div className="TopSectionDown">
        <Navbar fixed={"top"} className="navbar" bg="light">

          <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                <Row >
                      <Col lg={4} md={4} sm={12} xs={12}>
                      <FontAwesomeIcon onClick={() => setSideNav(!sideNav)} icon={faBars} />
                         <Link to="/"><img className="nav-logo" src={Logo} /> </Link>
                      </Col>
                </Row>
          </Container>
          <div className={sideNav ? 'sideNavOpen' : 'sideNavClose'}>
              <div className="list-group">
                <a className="list-group-item nav-font nav-itemmenu list-group-item-action" >
               Home 
                </a>
             </div> 
          </div>
          <div className={sideNav ? 'ContentOverlayOpen' : 'ContentOverlayClose'}>

          </div>
        </Navbar>
    </div>
   </>
  )
}

export default NavMenuMobile