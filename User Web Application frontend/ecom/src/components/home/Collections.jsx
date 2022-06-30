import React, { useState, useEffect } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import axios from 'axios'


function Collections() {
  const [collectionProducts, setCollectionProducts] = useState([])

  const myView = collectionProducts.map((product, i) => {
    const {title, price, image, remark, special_price, id} =  product
    if(special_price === 'na') {
      return (
        
        <Col key={i+title} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link to={"/productdetails/"+id} >
                    <Card className="image-box card w-100">
                      <img className="center w-75" src={image} alt={title}/>   
                      <Card.Body> 
                      <p className="product-name-on-card">{title}</p>
                      <p className="product-price-on-card">Price : ${price}</p>

                      </Card.Body>
                    </Card>          
                </Link>
            </Col>
      ) 
    } else {
      return <Col key={i+title} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                 <Link to={"/productdetails/"+id} >
                  <Card className="image-box card w-100">
                      <img className="center w-75" src={image} alt={title}/>   
                      <Card.Body> 
                      <p className="product-name-on-card">{title}</p>
                      <p className="product-price-on-card">Price : <strike>${price}</strike> - ${special_price}</p>

                      </Card.Body>
                    </Card> 
                </Link>            
              </Col>  
    }
  })

  async function getCollectionProducts() {
    try {
      const response = await axios.get(AppURL.ProductListByRemark("Collection"))
      setCollectionProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCollectionProducts()
  }, []);
  
    return (
      <>
      <Container className="text-center center-x" fluid={true}>
        <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
        <div className="center-x">
        <Row>
            {myView}
        </Row>
        </div>
      </Container>
      </>
    )
  
}

export default Collections