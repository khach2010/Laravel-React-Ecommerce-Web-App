import React, {useState, useEffect} from 'react'
import { Container,Row,Col, Card,Button,Modal } from 'react-bootstrap'
import AppURL from '../../../api/AppURL'
import axios from 'axios'


function Notification() {
  const [show, setShow] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationsMsg, setNotificationsMsg] = useState([]);
  const [notificationsTitle, setNotificationsTitle] = useState([]);
  const [notificationsDate, setNotificationsDate] = useState([]);


  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    let Nmsg = event.target.getAttribute("data-message");
    let Ntitle = event.target.getAttribute("data-title");
    let Ndate = event.target.getAttribute("data-date");
    setNotificationsMsg(Nmsg)
    setNotificationsTitle(Ntitle)
    setNotificationsDate(Ndate)
  } 

  async function getNotifications() {
    try {
      const response = await axios.get(AppURL.NotificationHistory)
      console.log(response.data)
      setNotifications(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNotifications()
  }, []);
 



  return (
    <>
       <Container className="TopSection">
          <Row>
            {notifications.map((notification, i) => {
                const {title,message, date} = notification
                return (
                    <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                    <Card onClick={handleShow}  className="notification-card">
                        <Card.Body>
                            <h6>{title}</h6>
                            <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i> {date} | Status: Unread</p>
                        </Card.Body>
                        <Button data-title={title} data-date={date} data-message={message} className="btn btn-danger">Details </Button>
                    </Card>
                </Col>
                )
            })}
             
          </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{notificationsTitle} - {notificationsDate}</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>{notificationsMsg}</Modal.Body>
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