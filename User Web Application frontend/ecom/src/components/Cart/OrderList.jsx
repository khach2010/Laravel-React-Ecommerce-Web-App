import React, {useState, useEffect} from 'react'
import {Container, Row, Col,Button,Card, Modal} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import { ToastContainer, toast } from 'react-toastify';
import { faL } from '@fortawesome/free-solid-svg-icons';


function OrderList({orderListHistory, email}) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')
  const [productName, setProductName] = useState('')
  const [productCode, setProductCode] = useState('')


  let navigate = useNavigate();
  if(!localStorage.getItem('token')){
    return <navigate to="/login" />
  }

  const handleClose = () => setShow(false);
  const handleShow = (prodName, proCode) => {
    setShow(true);
    setProductName(prodName)
    setProductCode(proCode)
  }
    
  const myView = orderListHistory.map((order) => {
    const {product_name, product_code, quantity, size, color, unit_price, total_price, order_status, invoice_no} = order

    return <div>
            <Col key={invoice_no} md={6} lg={6} sm={6} xs={6}>
            <h5 className="product-name">{product_name} - {product_code}</h5>
            <h6> Quantity = {quantity} </h6>
            <p>{size} | {color}</p>
            <h6>Price = {unit_price} x {quantity} = {total_price}$</h6>
            <h6>Status = {order_status} </h6>
            </Col>
            <Button onClick={() => handleShow(product_name, product_code)} className="btn btn-danger">Post Review </Button>
              <hr></hr>
         </div>
  })

  const PostReview = () => {
    let formData
    if(name.length===0){
      toast.error("Name Is Required");
      }
      else if(comment.length===0){
            toast.error("Comment Is Required");
      }
      else if(rating.length===0){
            toast.error("Rating Is Required");
      }
      else if(comment.length>150){
            toast.error("Comments can't more then 150 character");
      }
      else {
        formData = {
          'product_name' : productName,
          'product_code' : productCode,
          'reviewer_name' : name,
          'reviewer_photo' : '',
          'reviewer_rating' : rating,
          'reviewer_comments' : comment
        }
        axios.post(AppURL.PostReview, formData)
        .then(res => {
          if(res.data === 1) {
             toast.success('thanks for your rating')
             setShow(false)
          } else {
            toast.error("Something went wrong, please try again");
          }
        })
        .catch(err => {
          toast.error("Something went wrong, please try again");
        })
      }
  }


  return (
    <>
      <Container>
        <div className="section-title text-center mb-55">
          <h2>Order History by {email}</h2>
        </div>

        <Card >                
          <Card.Body>
            <Row>
              <ToastContainer position="top-right" autoClose={3000} />
            </Row>
            <Row>
                {myView}
            </Row>              
          </Card.Body>               
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product review</Modal.Title>
            
          </Modal.Header>
          <Modal.Body> 
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Your Name</label>
              <input onChange={(e) => setName(e.target.value)} className="form-control" type="text" placeholder=""/>
            </div>
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                <label className="form-label">Select Product Rating</label>
                <select onChange={(e) => setRating(e.target.value)} className="form-control">
                <option value="">Choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
            </div>
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                <label className="form-label">Your Comment</label>
                <textarea onChange={(e) => setComment(e.target.value)}  rows={2} className="form-control" type="text" placeholder="Your Comment" />   
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={PostReview}>
              Post
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    </>
  )
}

export default OrderList