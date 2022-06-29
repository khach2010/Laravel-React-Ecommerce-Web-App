import React, { useState, useEffect } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import MegaMenuMobile from './MegaMenuMobile'
import AppURL from '../../api/AppURL'
import axios from 'axios'
import HomeSlider from './HomeSlider'

function HomeTopMobile() {
  const [allSliderData,  setAllSliderData] = useState([])

  async function getAllSliderData() {
    try {
      const response = await axios.get(AppURL.AllSlider)
      setAllSliderData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllSliderData()
  }, []);
    return (
      <>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
              <Row>
                  <Col lg={3} md={3} sm={12}>
                  <HomeSlider data={allSliderData} />
                  </Col>
              </Row>
        </Container>
      </>
    )
  
}

export default HomeTopMobile