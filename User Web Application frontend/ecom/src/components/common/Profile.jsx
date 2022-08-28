import React from 'react'
import {useNavigate} from 'react-router-dom';
import {Navbar,Container, Row, Col,Button,Card,Modal,ListGroup,ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Profile(userProfile) {
  let navigate = useNavigate();
  const {userData: {id, name, email}} = userProfile

  if(!localStorage.getItem('token')){
    return navigate("/login");
  } 
 
  return (
    <div>
       <div className="section-title text-center mb-55"><h2>User Profile Page</h2>         
        </div>
        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' className="userprofile" />

                <ListGroup className="list-group-flush">

                  <ListGroupItem> <Link className="text-link" to="/orderhistory"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>

                  <ListGroupItem> <Link className="text-link" to="/orderhistory"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>

                  <ListGroupItem> <Link className="text-link" to="/orderhistory"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>
                </ListGroup>

              </Card>
            </Col>
            <Col lg={8} md={8} sm={12}>
              <ul>
                <li className="list-group-item">user name: {name}</li>
                <li className="list-group-item">user email: {email}</li>
              </ul>
            </Col>
          </Row>
        </Container>
       
    </div>
  )
}

export default Profile