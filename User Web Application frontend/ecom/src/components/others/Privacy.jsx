import React, { useState, useEffect } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import axios from 'axios'
import parse from 'html-react-parser'

function Privacy () {
     const [privacy, setPrivacy] = useState('')
     let SitePrivacy = sessionStorage.getItem("SitePrivacy");

     async function getPrivacy() {

          if(SitePrivacy == null){
               try {
                    const response = await axios.get(AppURL.AllSiteInfo);
                    if(response.status === 200) {
                    let resData = response.data[0]['privacy']
                    setPrivacy(resData)
                    sessionStorage.setItem("SitePrivacy",resData)
                    }
                    else {
                         alert('something went wrong')
                    }
                    
               } catch (error) {
                    console.error(error);
               }
          } 
          else {
               setPrivacy(SitePrivacy)
          }


        
     }


     useEffect(() => {
          getPrivacy()
     },[])

          return (
               <>
               <Container>
                    <Row className="p-2">
                         <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                              {parse(privacy)}

                         </Col>
                    </Row>
               </Container>
          </>
          )
     
}

export default Privacy