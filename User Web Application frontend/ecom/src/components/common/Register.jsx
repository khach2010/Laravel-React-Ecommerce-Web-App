import React, {useState} from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'
import { Link, useNavigate } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import axios from 'axios'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')
  const [message, setMessage] = useState('')

  let navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {name, email, password, password_confirmation}
  
   try {
    const response = await axios.post(AppURL.Register, formData)
    if(response.status === 200) {
      console.log(response.data)
      const {id, name, email} = response.data.user
      localStorage.setItem('token',response.data.token);

      navigate("/profile", {state: {id, name, email, msg: 'successfully Register'}});

    } else {
      setMessage('something went wrong, please try again')
    }
   } catch (error) {
    console.log(error)
    setMessage('something went wrong, please try again')
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
                    <h4 className="section-title-login"> REGISTER </h4>
                    <p>{message}</p>
                    <input onChange={e => setName(e.target.value)} className="form-control m-2" type="text" placeholder="Your Name" />
                    <input onChange={e => setEmail(e.target.value)} className="form-control m-2" type="email" placeholder="Email Address" />

                    <input onChange={e => setPassword(e.target.value)}className="form-control m-2" type="password" placeholder="Password" />
                    <input onChange={e => setPassword_confirmation(e.target.value)}className="form-control m-2" type="password" placeholder="Password Confirmation" />


                    <Button type='submit' className="btn btn-block m-2 site-btn-login"> Register </Button>

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