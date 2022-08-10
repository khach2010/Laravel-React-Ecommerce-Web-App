import React, {useState, useEffect} from 'react'
import {Navbar,Container, Row, Col,Button,Card} from 'react-bootstrap';
import AppURL from '../../api/AppURL'
import axios from 'axios'
import { toast } from 'react-toastify'

function OrderList({orderListHistory}) {
  
  const myView = orderListHistory.map((order) => {
    const {product_name, quantity, size, color, unit_price, total_price, order_status, invoice_no} = order
    return <div>
            <Col key={invoice_no} md={6} lg={6} sm={6} xs={6}>
            <h5 className="product-name">{product_name}</h5>
            <h6> Quantity = {quantity} </h6>
            <p>{size} | {color}</p>
            <h6>Price = {unit_price} x {quantity} = {total_price}$</h6>
            <h6>Status = {order_status} </h6>
            </Col>
            <Button className="btn btn-danger">Post Review </Button>
              <hr></hr>
         </div>
  })

  return (
    <>
        <h1>order list page </h1>
      <Container>
    <div className="section-title text-center mb-55"><h2>Order History </h2>

    </div>

        <Card >                
    <Card.Body>
    <Row>
        {myView}

    </Row>              
    </Card.Body>               
    </Card>



      </Container>
    </>
  )
}

export default OrderList