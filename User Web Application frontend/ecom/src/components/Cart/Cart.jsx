
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Container, Row, Col,Button,Card} from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Cart({shoppingList, setPageRefesh, email}) {
  const [city, setCity] = useState('')
  const [payment, setPayment] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [confirmBtn, setConfirmBtn] = useState('')

  let navigate = useNavigate();

  const confirmOnClick = () => {
    if(city.length===0){
      toast.error("Please Select City");
      }
      else if(payment.length===0){
            toast.error("Please Select Payment");
      }
      else if(name.length===0){
            toast.error("Please Select Your Name");
      }
      else if(address.length===0){
            toast.error("Please Select Your Address");
      }
      else {

        let invoice = new Date().getTime()
        let FormData = {
          'city': city,
          'payment_method': payment,
          'name': name,
          'email': email,
          'delivery_address': address,
          'delivery_charge': 'delivery_charge - $0',
          'invoice_no': invoice
        }
        
        axios.post(AppURL.CartOrder, FormData)
        .then(res => {
          if(res.data === 1) {
            toast.success("Your order is already confirmed");
            setPageRefesh(true)
          }
        })
        .catch(err => {
          console.log(err)
          setPageRefesh(false)
        })

      }
  }

  const totalPriceCart = shoppingList
    .map(item => Number(item.total_price))
    .reduce(function(a,b){
      return a + b
      },0)
  const totalItemsInCart = shoppingList
  .map(item => Number(item.quantity))
  .reduce(function(a,b){
    return a + b
    },0)
   

  function RemoveItem(ID) {
    axios.get(AppURL.ShoppingCartRemove(ID))
    .then(res => {
      if(res.data === 1) {
        setPageRefesh(true)
      }
    })
    .catch(err => {
      console.log(err)
      setPageRefesh(false)
    })
  }

  const myView = shoppingList.map((item) => {
    const {id, product_name, product_code, image, quantity, total_price, unit_price, color, size} = item 
    
    const PlusItem = (id, quantity, unit_price) => {
      axios.get(AppURL.CartItemPlus(id, quantity, unit_price))
      .then(res => {
        if(res.data === 1) {
          setPageRefesh(true)
        }
      })
      .catch(err => {
        console.log(err)
        setPageRefesh(false)
      })
    }
    const MinusItem = (id, quantity, unit_price) => {
      axios.get(AppURL.CartItemMinus(id, quantity, unit_price))
      .then(res => {
        if(res.data === 1) {
          setPageRefesh(true)
        }
      })
      .catch(err => {
        setPageRefesh(false)
      })
    }

    return <Col key={product_name+id} className="p-1" lg={12} md={12} sm={12} xs={12} >
            <Card >                
              <Card.Body>

                <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                          <img alt={product_name} className="cart-product-img" src={image} />
                    </Col>

                    <Col md={6} lg={6} sm={6} xs={6}>
                      <h5 className="product-name">{product_name}</h5>
                      <h6> Product Code: {product_code} </h6>
                      <h6> {size} </h6>
                      <h6> {color} </h6>
                      <h6> Quantity = {quantity} </h6>
                      <h6> Unit Price = {unit_price} </h6>
                      <h6> Total Price = {quantity} x {unit_price} = ${total_price}</h6>
                    </Col>

                    <Col md={3} lg={3} sm={12} xs={12}>
                      <Row>
                        <Col>
                          <Button onClick={() => PlusItem(id, quantity, unit_price)}> <FontAwesomeIcon icon={faPlus} /> </Button>
                        </Col>
                        <Col> <input placeholder={quantity} className="form-control text-center" type="number" />
                        </Col>
                        <Col>
                          <Button onClick={() => MinusItem(id, quantity, unit_price)}> <FontAwesomeIcon icon={faMinus} /> </Button>
                        </Col>
                      </Row>
                      <Button onClick={() => RemoveItem(id)} className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>
                    </Col>
                </Row>           

              </Card.Body>               
            </Card>
          </Col> 
  })
  



    return (
      <>
      <Container>   

        <div className="section-title text-center mb-55"><h2>Product Cart List</h2>   
        </div>

        <Row>
        <ToastContainer position="top-right" autoClose={3000} />
          {myView}
        </Row>

        <Row>
          <Col className="p-1" lg={6} md={6} sm={12} xs={12} >
            <Card >                
                <Card.Body>
                  <Row>
                      <Col md={4} lg={4} sm={6} xs={6} className="checkout-total-price">
                      <h3 className=""><i className="fa fa-shopping-cart"></i> Shipping Address & Payment </h3>

                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                          <label className="form-label">Choose City</label>
                          <select onChange={(e) => setCity(e.target.value)} className="form-control">
                          <option value="">Choose</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar </option>
                          <option value="Goa">Goa </option>
                          <option value="Gujarat">Gujarat </option>
                          <option value="Himachal Pradesh">Himachal Pradesh </option>
                          <option value="Punjab">Punjab  </option>
                          </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                          <label className="form-label">Choose Payment Method</label>
                          <select onChange={(e) => setPayment(e.target.value)}   className="form-control">
                          <option value="">Choose</option>
                          <option value="Cash On Delivery">Cash On Delivery</option>
                          <option value="Stripe">Stripe</option>
                          </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                          <label className="form-label">Your Name</label>
                          <input onChange={(e) => setName(e.target.value)}  className="form-control" type="text" placeholder=""/>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                          <label className="form-label">Delivery Address</label>
                          <textarea  onChange={(e) => setAddress(e.target.value)}  rows={2}  className="form-control" type="text" placeholder=""/>
                      </div>
                     
                   
                      </Col> 
                  </Row>              
                </Card.Body>               
            </Card>
          </Col> 
          <Col className="p-1" lg={6} md={6} sm={12} xs={12} >
            <Card >                
                <Card.Body>
                  <Row>
                      <Col md={4} lg={4} sm={6} xs={6} className="checkout-total-price">

                    <h5> Total Item = {totalItemsInCart} </h5>
                    <h5>Total Price = ${totalPriceCart}</h5>
                    <Button onClick={confirmOnClick}  className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-shopping-cart"></i> CheckOut </Button>
                      </Col> 
                  </Row>              
                </Card.Body>               
            </Card>
          </Col> 
        </Row>

      </Container>
      </>
    )
  
}

export default Cart