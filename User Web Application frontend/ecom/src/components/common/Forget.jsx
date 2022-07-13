import React, {useState } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";


function Forget() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {email}
  
   try {
    const response = await axios.post(AppURL.ForgetPassword, formData)
    if(response.status === 200) {
      console.log(response.data)
      setMessage(response.data.message + ' ' + email )
      setEmail('')
    } else {
      setMessage('something went wrong, please try again')
    }
   } catch (error) {
    setMessage(error.response.data.message + ' - Try again!')
   }

  } 
  return (
    <>
    <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

            <Row className="text-center">

              <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                <Form onSubmit={handleSubmit} className="onboardForm">
                    <h3>{message}</h3>
                    <h4 className="section-title-login"> Forget Password </h4>
                    <input value={email} onChange={e => setEmail(e.target.value)} className="form-control m-2" type="email" placeholder="Enter Your Email Address" />

                    <Button type='submit' className="btn btn-block m-2 site-btn-login"> Next </Button>

                </Form>
              </Col>

              <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} alt=''/>
              </Col>
            </Row>

          </Col>
          </Row>
    </Container>
    </>
  )
}

export default Forget