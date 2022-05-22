import React, {useState, useEffect} from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import axios from 'axios'
import parse from 'html-react-parser'


function About() {
  const [about, setAbout] = useState('')
  let SiteAbout = sessionStorage.getItem("SiteAbout");

  async function getAbout() {
    if(SiteAbout === null) {
      try {
        const response = await axios.get(AppURL.AllSiteInfo);
        if(response.status === 200) {
          let resData = response.data[0]['about']
          setAbout(resData)
          sessionStorage.setItem('SiteAbout', resData)
        }
        
      } catch (error) {
        console.error(error);
      }
    } else {
      setAbout(SiteAbout)
    }

 
  }


  useEffect(() => {
    getAbout()
  },[])

  return (
    <>
    <Container>
         <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
             {parse(about)}
            </Col>
         </Row>
    </Container>
   </>
  )
}

export default About