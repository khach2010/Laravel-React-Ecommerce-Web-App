import React, { Component } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import MegaMenuMobile from './MegaMenuMobile'

class HomeTopMobile extends Component {
  render() {
    return (
      <>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
              <Row>
                  <Col lg={3} md={3} sm={12}>
                  <MegaMenuMobile />
                  </Col>

                 
              </Row>
        </Container>
      </>
    )
  }
}

export default HomeTopMobile