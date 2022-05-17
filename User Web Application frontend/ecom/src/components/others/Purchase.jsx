import React, {useState, useEffect} from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import axios from 'axios'
import parse from 'html-react-parser'

function Purchase() {
     const [purchase, setPurchase] = useState('')
     let SiteInfoPurchase = sessionStorage.getItem("SiteInfoPurchase");

     async function getPurchase() {

          if(SiteInfoPurchase == null){
               try {
                    const response = await axios.get(AppURL.AllSiteInfo);
                    if(response.status === 200) {
                    let resData = response.data[0]['purchase_guide']
                    setPurchase(resData)
                    sessionStorage.setItem("SiteInfoPurchase",resData)
                    }
                    else {
                         alert('something went wrong')
                    }
                    
               } catch (error) {
                    console.error(error);
               }
          } 
          else {
               setPurchase(SiteInfoPurchase)
          }


        
     }


     useEffect(() => {
          getPurchase()
     },[])

     return (
          <>
               <Container>
                    <Row className="p-2">
               <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                              {parse(purchase) }
                         </Col>
                    </Row>
               </Container>
          </>
     )
}

export default Purchase