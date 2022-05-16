import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCoffee} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

class FooterDesktop extends Component {
  render() {
    return (
      <>
      <div className="footerback m-0 mt-5 pt-3 shadow-sm"> 
          <Container>
              <Row className="px-0 my-5">
                  <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                        <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                        <p>1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104 <br></br>
                        Email: Support@easylearningbd.com
                        </p>
                        <h5 className="footer-menu-title">SOCIAL LINK</h5>
                        <Link to="/"><FontAwesomeIcon icon={faCoffee} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faBell} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faCoffee} /></Link>
                  </Col>

                  <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                    <h5 className="footer-menu-title">THE COMPANY</h5>
                    <Link to="/about" className="footer-link"> About Us</Link><br></br>
                    <Link to="/" className="footer-link"> Company Profile</Link><br></br>
                    <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
                  </Col>

                  <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                    <h5 className="footer-menu-title">MORE INFO</h5>
                    <Link to="/purchase" className="footer-link">How To Purchase</Link><br></br>
                    <Link to="/privacy" className="footer-link"> Privacy Policy</Link><br></br>
                    <Link to="/refund" className="footer-link"> Refund Policy </Link><br></br>
                    Change Your Language <br></br>
                    <div id="google_translate_element">  </div>
                  </Col>

                  <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                    <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                    <a><img src={Google}  /></a><br></br>
                    <a><img className="mt-2" src={Apple}  /></a><br></br>
                   
                  </Col>

              </Row>
          </Container>
        </div>
        </>
    )
  }
}

export default FooterDesktop