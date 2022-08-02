import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Container, Row, Col,Button,Card} from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import Product1 from '../../assets/images/product/product1.png'

function Cart({email}) {

  const [shoppingList, setShoppingList] = useState([])

  const myView = shoppingList.map((item) => {
    const {product_name, product_code, image, quantity, total_price, unit_price, color} = item 
 

    return <Col key={product_name} className="p-1" lg={12} md={12} sm={12} xs={12} >
    <Card >                
      <Card.Body>
        <Row>
            <Col md={3} lg={3} sm={6} xs={6}>
                  <img alt='' className="cart-product-img" src={image} />
            </Col>

            <Col md={6} lg={6} sm={6} xs={6}>
            <h5 className="product-name">{product_name}</h5>
        <h6> Quantity = {quantity} </h6>
        <h6>Price = {quantity} x {unit_price} = ${total_price}</h6>
            </Col>

            <Col md={3} lg={3} sm={12} xs={12}>
            <input placeholder="2" className="form-control text-center" type="number" />
            <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

            </Col>
        </Row>              
      </Card.Body>               
    </Card>
  </Col> 
  })
  

  async function getShoppingList() {
    try {
      const response = await axios.get(AppURL.ShoppingCartReview(email))
      
      setShoppingList(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getShoppingList()
  }, []);
 
    return (
      <>
      <Container>   
        <div className="section-title text-center mb-55"><h2>Product Cart List</h2>   
        </div>
        <Row>
         
       {myView}

        </Row>
      </Container>

      <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
          <Card >                
               <Card.Body>
                <Row>
                    <Col md={4} lg={4} sm={6} xs={6} className="checkout-total-price">

                  <h5> Total Item = 05 </h5>
                  <h5>Total Price = 5000$</h5>
                  <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-shopping-cart"></i> CheckOut </Button>
                    </Col> 
                </Row>              
               </Card.Body>               
          </Card>
     </Col> 
      </>
    )
  
}

export default Cart