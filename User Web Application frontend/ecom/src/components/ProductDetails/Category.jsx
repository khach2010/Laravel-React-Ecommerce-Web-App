import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'

function Category({category, productCategoryData}) {
  const myView = productCategoryData.map((product, i) => {
    const {title, price, image, special_price} =  product
    return  <div>
              <Col key={i+title} className="p-0" xl={6} lg={6} md={6} sm={12} xs={12}>
                
                    <Card className="image-box card w-100">
                        <img className="center w-75" src={image} alt={title}/>   
                        <Card.Body> 
                        <p className="product-name-on-card">{title}</p>
                        <p className="product-price-on-card">Price : <strike>${price}</strike> - ${special_price}</p>

                        </Card.Body>
                      </Card> 
                     
                </Col>  
            </div>
   
  })
  return (
    <div>
     {myView}
    </div>
  )
}

export default Category