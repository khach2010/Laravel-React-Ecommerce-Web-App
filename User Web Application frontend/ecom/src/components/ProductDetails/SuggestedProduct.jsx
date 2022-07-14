import React, { useState, useEffect } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import axios from 'axios'

function SuggestedProduct({sub}) {
     const [productSubCategoryData, setProductSubCategoryData] = useState([])

     const myView = productSubCategoryData.map((product) => {
          const {brand,category,price,title,image, id } = product
          return   <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to={`/productdetails/${id}`}>
                         <Card className="image-box card">
                              <img className="center" src={image} alt={title}/>   
                              <Card.Body> 
                              <p className="product-name-on-card">{title}</p>
                              <p className="product-price-on-card">Price : ${price}</p>

                              </Card.Body>
                         </Card>
                    </Link>
               </Col>
     })

     async function getProductSubCategoryData() {
          try {
            const response = await axios.get(AppURL.SimilarProduct(sub))
            setProductSubCategoryData(response.data)
          } catch (error) {
            console.log(error)
          }
        }

     useEffect(() => {
     getProductSubCategoryData()
     }, []);
     
     return (
          <>
               <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55"><h2>YOU MAY ALSO LIKE </h2>
                         <p>Some Of Our Exclusive Collection, You May Like</p>
                    </div>


                    <Row>
                         {myView}
                    </Row>


               </Container>
          </>
     ) 
     
}

export default SuggestedProduct