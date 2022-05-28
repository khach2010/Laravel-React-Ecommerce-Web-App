import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import axios from 'axios'

function FeatureProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([])

  const myView = featuredProducts.map((product, i) => {
    const {title, price, image, remark, special_price} =  product
    if(special_price === 'na') {
      return ( <Col key={i} className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
      <Link to={`/${remark}/${title}`} >
        <Card className="image-box card">
          <img className="center" src={image} />   
          <Card.Body> 
          <p className="product-name-on-card">{title}</p>
          <p className="product-price-on-card">Price : ${price}</p>
          </Card.Body>
          </Card>
        </Link> 
    </Col>)
    } else {
      return ( <Col key={i} className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
      <Link to={`/${remark}/${title}`} >
        <Card className="image-box card">
          <img className="center" src={image} />   
          <Card.Body> 
          <p className="product-name-on-card">{title}</p>
          <p className="product-price-on-card">Price : <strike>${price}</strike> - ${special_price}</p>
          </Card.Body>
          </Card>
        </Link> 
    </Col>)
    }
   
  }) 

  async function getFeaturedProducts() {
    try {
      const response = await axios.get(AppURL.ProductListByRemark("Featured"))
      setFeaturedProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFeaturedProducts()
  }, []);
  


    return (
      <>
      <Container className="text-center center-x" fluid={true}>

        <div className="section-title text-center mb-55">
          <h2>FEATURED PRODUCT</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <div className="center-x">
          <Row>
            {myView}
            {/* <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productdetails" >
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />   
                  <Card.Body> 
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                  </Card>
                </Link> 
            </Col> */}
          </Row>
        </div>
        

      </Container>
      </>
    )
  
}

export default FeatureProducts