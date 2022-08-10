import React, {useState, useEffect} from 'react'
import {Container, Row, Col,Button,Card, Modal} from 'react-bootstrap';


function OrderList({orderListHistory}) {
  const [show, setShow] = useState(false);

 
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  
  } 

  
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
            <Button onClick={handleShow} className="btn btn-danger">Post Review </Button>
              <hr></hr>
         </div>
  })

  return (
    <>
        <h1>order list page </h1>
      <Container>
        <div className="section-title text-center mb-55">
          <h2>Order History </h2>
        </div>

        <Card >                
          <Card.Body>
          <Row>
              {myView}
          </Row>              
          </Card.Body>               
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product review</Modal.Title>
            
          </Modal.Header>
          <Modal.Body>Preview Details</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    </>
  )
}

export default OrderList