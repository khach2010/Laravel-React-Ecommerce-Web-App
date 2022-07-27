import React, { Component } from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Favourite extends Component {
  render() {
    return (
      <>
      <Container className="text-center center-x" fluid={true}>

        <div className="section-title text-center mb-55">
          <h2>MY FAVOURITE ITEMS</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <div className="center-x">
          <Row>

          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Link to="/productdetails" >
              <Card className="image-box card">
                <img alt='' className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />   
                <Card.Body> 
                <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                <p className="product-price-on-card">Price : $120</p>
                <Button className="btn btn-sm"> Remove </Button> 
                </Card.Body>
                </Card>
              </Link> 
          </Col>

          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card">
              <img alt='' className="center" src="https://rukminim1.flixcart.com/image/416/416/knm2s280/mobile/j/x/c/hot-10-play-x688b-infinix-original-imag29gxqzuxkmnk.jpeg?q=70" />   
              <Card.Body> 
              <p className="product-name-on-card">Realme C21 (Cross Blue, 64 GB)</p>
              <p className="product-price-on-card">Price : $120</p>
              <Button className="btn btn-sm"> Remove </Button> 
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card">
                <img alt='' className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70" />   
                <Card.Body> 
                <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                <p className="product-price-on-card">Price : $120</p>
                <Button className="btn btn-sm"> Remove </Button> 
                </Card.Body>
                </Card>
          </Col>

          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card">
                <img alt='' className="center" src="https://rukminim1.flixcart.com/image/416/416/knm2s280/mobile/v/l/u/hot-10-play-x688b-infinix-original-imag29hfaedkgdfe.jpeg?q=70" />   
                <Card.Body> 
                <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                <p className="product-price-on-card">Price : $120</p>
                <Button className="btn btn-sm"> Remove </Button> 
                </Card.Body>
                </Card>
          </Col>

          </Row>
        </div>
        

      </Container>
      </>
    )
  }
}

export default Favourite