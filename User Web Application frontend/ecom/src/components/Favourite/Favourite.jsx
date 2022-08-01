import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import axios from 'axios'

function Favourite({userEmail, setFavCount}) {
  const [favListData, setFavListData] = useState([])

  const myView = favListData.map((fav) => {
    const {id, product_name, image, product_code} = fav

    return  <Col key={id+product_code} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
    <Link to={`/productdetails/${id}`} >
      <Card className="image-box card">
        <img alt={product_name+id} className="center" src={image} />   
        <Card.Body> 
        <p className="product-name-on-card">{product_name}</p>
        <Button className="btn btn-sm"> Remove </Button> 
        </Card.Body>
        </Card>
      </Link> 
  </Col>
  })

  async function getFavListData() {
    try {
      const response = await axios.get(AppURL.FavouriteList(userEmail))
      setFavListData(response.data)
      setFavCount(response.data.length)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFavListData()
  }, []);
 
    return (
      <>
      <Container className="text-center center-x" fluid={true}>

        <div className="section-title text-center mb-55">
          <h2>MY FAVOURITE ITEMS</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <div className="center-x">
          <Row>

            {myView}         

          </Row>
        </div>
        

      </Container>
      </>
    )
  
}

export default Favourite