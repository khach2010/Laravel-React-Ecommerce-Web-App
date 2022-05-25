import React, { useState, useEffect } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import axios from 'axios'

function Categories() {
  const [categoryData,  setCategoryData] = useState([])

  const categoryList = categoryData.map((cat,i) => {
    const {category_name, category_image} = cat
    return  <Col className="p-0" key={i.toString()} xl={2} lg={3} md={4} sm={6} xs={6}>
            <Card className="h-100 w-100 text-center">          
            <Card.Body> 
            <img className="center" src={category_image} />  
            <h5 className="category-name">{category_name}</h5>  
            </Card.Body>
            </Card> 
          </Col> 
  })


  async function getCategoryData() {
    try {
      const response = await axios.get(AppURL.AllCategoryDetails)
      setCategoryData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategoryData()
  }, []);
  
    return (
      <>
      <Container className="text-center center-x" fluid={true}>
        <div className="section-title text-center mb-55"><h2> CATEGORIES</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <div className="center-x">
          <Row>   
           {categoryList}
            {/* <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="h-100 w-100 text-center">          
              <Card.Body> 
              <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />  
              <h5 className="category-name">Top Offers</h5>  
              </Card.Body>
              </Card> 
            </Col>  */}
          </Row>
        </div>
      </Container>
      </>
    )
  
}

export default Categories