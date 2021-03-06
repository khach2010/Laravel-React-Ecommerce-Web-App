import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'
import AppURL from '../../api/AppURL'
import axios from 'axios'
import parse from 'html-react-parser'

function FooterDesktop () {
  const [siteLinks, setSiteLinks] = useState({
    address:"",
    android_app_link:"",
    ios_app_link:"",
    facebook_link:"",
    twitter_link:"",
    instagram_link:"",
    copyright_text:"", 
    loaderDiv:"",
    mainDiv:"d-none"
}) 

  async function getSiteLinks() {
    const response = await axios.get(AppURL.AllSiteInfo);
    let StatusCode = response.status;
      if(StatusCode===200) {
        let JsonData = (response.data)[0];
        setSiteLinks({
          address:JsonData['address'],
          android_app_link:JsonData['android_app_link'],
          ios_app_link:JsonData['ios_app_link'],
          facbook_link:JsonData['facebook_link'],
          twitter_link:JsonData['twitter_link'],
          instagram_link:JsonData['instagram_link'],
          copyright_text:JsonData['copyright_text'], 
        })
      } 


  }

  useEffect(() => {
    getSiteLinks()
  },[])


    return (
      <>
      <div className="footerback m-0 mt-5 pt-3 shadow-sm"> 
          <Container>
              <Row className="px-0 my-5">
                  <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                    {parse(siteLinks.address)}
                        <h5 className="footer-menu-title">SOCIAL LINK</h5>
                        <Link to={parse(siteLinks.twitter_link)}><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
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
                    <a href={siteLinks.android_app_link}><img src={Google}  /></a><br></br>
                    <a href={siteLinks.ios_app_link}><img className="mt-2" src={Apple}  /></a><br></br>
                   
                  </Col>
                 
              </Row>
          </Container>
        </div>
        </>
    )
  
}

export default FooterDesktop