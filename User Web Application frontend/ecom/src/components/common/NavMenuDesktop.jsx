import React, { useState } from 'react'
import {Navbar,Container, Row, Col, Button} from 'react-bootstrap';
import Logo from '../../assets/images/easyshop.png';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMobileAlt, faSearch, faShoppingBag, faHeart, faBars } from '@fortawesome/free-solid-svg-icons'
import MegaMenuMobile from '../home/MegaMenuMobile';
// import { faBars } from '@fortawesome/free-solid-svg-icons'


function NavMenuDesktop() {
  let navigate = useNavigate();

  const [sideNav, setSideNav] = useState(false)
  const [searchKey, setSearchKey] = useState('')

  const SearchOnChange = (e) => {
    setSearchKey(e.target.value)
  }

  const handleSubmit = () => {
    if(searchKey.length >= 2) {
      navigate('/productbysearch/'+searchKey, { replace: true });
    }
  } 

  let displayButtons
  if(localStorage.getItem('token')){
    displayButtons = <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
      <Link to="/favourite" className="btn">
        <FontAwesomeIcon icon={faHeart} />
        <sup><span className="badge text-white bg-danger">2</span></sup>                  
      </Link>
      <Link to="/notification" className="btn">
        <FontAwesomeIcon icon={faBell} />
        <sup><span className="badge text-white bg-danger">5</span></sup>                  
      </Link>
      <Link to='/' className="btn">
        <FontAwesomeIcon icon={faMobileAlt} />
        </Link>
        <Link to="/profile" className="h4 btn">PROFILE</Link>
        <Link to="/register" className="h4 btn">LOGOUT</Link>

      <Link to="/cart" className="cart-btn">
        <FontAwesomeIcon icon={faShoppingBag} className='faShoppingBag'/>
        3 Items </Link>
    </Col>
  } else {
    displayButtons = <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
      <Link to="/favourite" className="btn">
        <FontAwesomeIcon icon={faHeart} />
        <sup><span className="badge text-white bg-danger">2</span></sup>                  
      </Link>
      <Link to="/notification" className="btn">
        <FontAwesomeIcon icon={faBell} />
        <sup><span className="badge text-white bg-danger">5</span></sup>                  
      </Link>
      <Link to='/' className="btn">
        <FontAwesomeIcon icon={faMobileAlt} />
        </Link>
        <Link to="/login" className="h4 btn">LOGIN</Link>
        <Link to="/register" className="h4 btn">REGISTER</Link>

      <Link to="/cart" className="cart-btn">
        <FontAwesomeIcon icon={faShoppingBag} className='faShoppingBag'/>
        3 Items </Link>
    </Col>
  }


    return (
     <>
     <div className="TopSectionDown">
        <Navbar fixed={"top"} className="navbar" bg="light">

        <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                <Row >
                      <Col lg={4} md={4} sm={12} xs={12}>
                      <FontAwesomeIcon onClick={() => setSideNav(!sideNav)} icon={faBars} />
                      <Link to="/"> <img className="nav-logo" src={Logo} alt='' /> </Link>
                     
                      </Col>

                      <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                          <div className="input-group w-100">
                          
                          <form onSubmit={handleSubmit} >
                            <input onChange={SearchOnChange} type="text" className="form-control" />
                            <Button type='submit' className="btn site-btn"><FontAwesomeIcon icon={faSearch} />
                            </Button>
                          </form>
                        
                          </div>
                      </Col>
                      {/* buttons condition */}
                      {displayButtons}
                      {/* end buttons condition */}

                </Row>

            </Container>

            <div className={sideNav ? 'sideNavOpen' : 'sideNavClose'}>
              <div className="list-group">
                <Link to='/' className="list-group-item nav-font nav-itemmenu list-group-item-action" >
                  <MegaMenuMobile />
                </Link>
             </div> 
            </div>
            <div className={sideNav ? 'ContentOverlayOpen' : 'ContentOverlayClose'}>
            </div>

          </Navbar>
      </div>
     </>
    )
  
}

export default NavMenuDesktop