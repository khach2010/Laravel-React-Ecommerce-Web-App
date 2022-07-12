import React from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

            <Row className="text-center">

              <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                <Form className="onboardForm">
                    <h4 className="section-title-login"> USER REGISTER  </h4>
                  
                    <input className="form-control m-2" type="text" placeholder="Enter Your Name" />

                    <input className="form-control m-2" type="email" placeholder="Enter Your Email Address" />

                    <input className="form-control m-2" type="password" placeholder="Enter Your Password" />

                    <input className="form-control m-2" type="password" placeholder="Enter Your Password Confirmation" />

                    <Button type="submit" className="btn btn-block m-2 site-btn-login"> REGISTER </Button>
                    <br></br> 
                    <br></br> 
                    <p> <b> Forget My Password? </b><Link to="/forget"><b> Froget Password </b> </Link> </p>

                    <p> <b> Already Have An Account ? </b><Link to="/login"><b> Login </b> </Link> </p>
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

export default Register