import React, { useState, useEffect } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import MegaMenuDesktop from './MegaMenuDesktop'
import HomeSlider from './HomeSlider'
import AppURL from '../../api/AppURL'
import axios from 'axios'

function HomeTop() {
  const [menuData,  setMenuData] = useState([])
  const [allSliderData,  setAllSliderData] = useState([])

  async function getMenuData() {
    try {
      const response = await axios.get(AppURL.AllCategoryDetails)
      setMenuData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function getAllSliderData() {
    try {
      const response = await axios.get(AppURL.AllSlider)
      setAllSliderData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMenuData()
    getAllSliderData()
  }, []);


    return (
      <>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
              <Row>
                  <Col lg={3} md={3} sm={12}>
                  <MegaMenuDesktop data={menuData} />
                  </Col>

                  <Col lg={9} md={9} sm={12}>
                  <HomeSlider data={allSliderData} />
                  </Col>
              </Row>
        </Container>
      </>
    )
  
}

export default HomeTop