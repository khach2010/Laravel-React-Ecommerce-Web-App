import React, {useState} from 'react'
import { Container,Row,Col, Card,Button,Modal } from 'react-bootstrap'

function Notification() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <Container className="TopSection">
          <Row>
              <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                  <Card onClick={handleShow}  className="notification-card">
                      <Card.Body>
                          <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                          <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                      </Card.Body>
                  </Card>
              </Col>
              <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                  <Card onClick={handleShow}  className="notification-card">
                      <Card.Body>
                          <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                          <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                      </Card.Body>
                  </Card>
              </Col>
              <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                  <Card onClick={handleShow}  className="notification-card">
                      <Card.Body>
                          <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                          <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                      </Card.Body>
                  </Card>
              </Col>
              <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                  <Card onClick={handleShow}  className="notification-card">
                      <Card.Body>
                          <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                          <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



  </>
  )
}

export default Notification