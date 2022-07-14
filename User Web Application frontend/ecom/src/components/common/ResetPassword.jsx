import React, {useState } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function ResetPassword() {
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')
  const [message, setMessage] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {token, email, password, password_confirmation}
    console.log(formData)
   try {
    const response = await axios.post(AppURL.ResetPassword, formData)
    if(response.status === 200) {
      console.log(response.data)
      setMessage('successfully change Password')
      setToken('')
      setEmail('')
      setPassword('')
      setPassword_confirmation('')

    } else {
      setMessage('something went wrong, please try again')
    }
   } catch (error) {
    setMessage(error.response.data.message+'. Please try again!')
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
                    <h4 className="section-title-login"> Reset Password </h4>
                    <p>{message}</p>
                    <input value={token} onChange={e => setToken(e.target.value)} className="form-control m-2" type="text" placeholder="Pin code" />
                    <input value={email} onChange={e => setEmail(e.target.value)} className="form-control m-2" type="email" placeholder="Email Address" />

                    <input value={password} onChange={e => setPassword(e.target.value)}className="form-control m-2" type="password" placeholder="New Password" />
                    <input value={password_confirmation} onChange={e => setPassword_confirmation(e.target.value)}className="form-control m-2" type="password" placeholder="New Password Confirmation" />


                    <Button type='submit' className="btn btn-block m-2 site-btn-login"> Change Password </Button>

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

export default ResetPassword