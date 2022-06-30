import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Category({category, productCategoryData}) {
  const myView = productCategoryData.map((product, i) => {
    const {title, price, image, special_price, id} =  product
    if(special_price=="na") {
      return (
        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
           <Link to={"/productdetails/"+id} ></Link>
          <Card className="image-box card w-100">
          <img className="center w-75" src={image} />   
          <Card.Body> 
          <p className="product-name-on-card">{title}</p>
          <p className="product-price-on-card">Price : ${price}</p>
          </Card.Body>
          </Card>          
        </Col>
      )  
    } else {
      return (
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Link to={"/productdetails/"+id} ></Link>
            <Card className="image-box card w-100">
            <img className="center w-75" src={image} />   
            <Card.Body> 
            <p className="product-name-on-card">{title}</p>
            <p className="product-price-on-card">Price : <strike className="text-secondary">${price}</strike> ${special_price}</p>
            </Card.Body>
            </Card>          
          </Col>
        )  
    }
  })


  return (
    <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55">
        <h2> {category }  </h2>
      </div>
      <Row> 
              {myView}
      </Row>
    </Container>
  )
}

export default Category