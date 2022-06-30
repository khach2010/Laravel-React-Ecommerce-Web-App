import React, { useState, useEffect } from 'react'
import {Container,Row, Card} from 'react-bootstrap'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import axios from 'axios'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function NewArrival() {
  const [newArrival, setNewArrival] = useState([])
  const [slider , setSlider] = useState()

  const myView = newArrival.map((product, i) => {
    const {title, price, image, special_price, id} =  product
    if(special_price === 'na') {
      return  <div key={title+id}>
               <Link to={"/productdetails/"+id} >
                <Card className="image-box card">
                    <img className="center" src={image} />   
                    <Card.Body> 
                    <p className="product-name-on-card">{title}</p>
                    <p className="product-price-on-card">Price : ${price}</p>

                    </Card.Body>
                  </Card>
               </Link>
             
              </div>
    } else {
      return  <div key={title+id}>
                <Link to={"/productdetails/"+id} >
                  <Card className="image-box card">
                    <img className="center" src={image} />   
                    <Card.Body> 
                    <p className="product-name-on-card">{title}</p>
                    <p className="product-price-on-card">Price : <strike>${price}</strike> - ${special_price}</p>

                    </Card.Body>
                  </Card>
                </Link>
              </div>
    }
  })

  async function getNewArrivalProducts() {
    try {
      const response = await axios.get(AppURL.ProductListByRemark("New"))
      setNewArrival(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNewArrivalProducts()
  }, []);


  function next() {
    slider.slickNext();
  }
  function previous() {
    slider.slickPrev();
  }
  
  var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
        <Container className="text-center" fluid={true}>
        
          <div className="section-title text-center mb-55">
            <h2>NEW ARRIVAL &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={previous} > <FontAwesomeIcon icon={faArrowLeft} /></a> 
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={next} > <FontAwesomeIcon icon={faArrowRight} /></a>
            </h2>
            
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>

            <Slider ref={c => (setSlider(c))}  {...settings}>
                {myView}
            </Slider>

          </Row>
        </Container>

    </>
  )
}

export default NewArrival