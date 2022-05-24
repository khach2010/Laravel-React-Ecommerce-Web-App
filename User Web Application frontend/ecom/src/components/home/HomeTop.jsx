import React, { useState, useEffect } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import MegaMenuDesktop from './MegaMenuDesktop'
import HomeSlider from './HomeSlider'
import AppURL from '../../api/AppURL'
import axios from 'axios'

function HomeTop() {
  const [menuData,  setMenuData] = useState([])

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
      <>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
              <Row>
                  <Col lg={3} md={3} sm={12}>
                  <MegaMenuDesktop data={menuData} />
                  </Col>

                  <Col lg={9} md={9} sm={12}>
                  <HomeSlider />
                  </Col>
              </Row>
        </Container>
      </>
    )
  
}

export default HomeTop