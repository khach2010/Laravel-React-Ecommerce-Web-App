import axios from 'axios'
import React, { useState } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'
import validation from '../../validation/validation'
import AppURL from '../../api/AppURL'


function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (e) => {
    let sendBtn = document.getElementById('sendBtn');
    let contactForm = document.getElementById('contactForm');

    if(message.length===0){
      alert("Please write your message");
    }
    else if(name.length===0){
          alert("Please write down our name");
    }
    else if(email.length===0){
          alert("Please write down our Email");
    }
    else if(!(validation.NameRegx).test(name)){
      alert("Invaid Name");
    }
    else{
      sendBtn.innerHTML="Sending...";   
      axios.post(AppURL.PostContactDetails, {
        "name": name,
        "email": email,
        "message": message,
      })
      .then(
        function (response) {
          if(response.status===200 && response.data===1){
            alert("Message Send Successfully");
            sendBtn.innerHTML="Send";
            contactForm.reset();
          }
          else{
          alert("error"); 
          sendBtn.innerHTML="Send";
          }
      })
      .catch(function (error) {
        alert(error.message);
        sendBtn.innerHTML="Send";
      });
    }
    e.preventDefault()
    
  }


        return (
          <>
            <Container>
              <Row className="p-2">
                  <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                    <Row className="text-center">
                        <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
        <Form id="contactForm" onSubmit={handleFormSubmit} className="onboardForm">
          <h4 className="section-title-login">CONTACT WITH US </h4>
          <h6 className="section-sub-title">Please Contact With Us </h6>
          <input onChange={(e) => setName(e.target.value)} className="form-control m-2" type="text" placeholder="Enter Your Name" />

          <input onChange={(e) => setEmail(e.target.value)} className="form-control m-2" type="email" placeholder="Enter Email" />

          <input onChange={(e) => setMessage(e.target.value)} className="form-control m-2" type="text" placeholder="Enter Your Message" />
          <Button id="sendBtn" type='submit' className="btn btn-block m-2 site-btn-login"> Send </Button>

        </Form>


                        </Col>

                          <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                <br></br><br></br>
          <p className="section-title-contact">
          1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
        Email: Support@easylearningbd.com
          </p>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

                        </Col>
                    </Row>
                  </Col>
              </Row>
            </Container>
          </>
        )
     
}

export default Contact