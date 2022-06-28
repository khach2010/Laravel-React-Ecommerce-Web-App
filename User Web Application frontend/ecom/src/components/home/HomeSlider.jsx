import React, { Component } from 'react'
import {Container,Row, Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HomeSlider({data}) {
  console.log(data)
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed:3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
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
    const myView = data.map((sliderPhoto, i) => {
      return   <div key={i}>
                <img className="slider-img" src={sliderPhoto.slider_image} alt="sliderphoto" />
              </div>
    })

       return (
          <div>
            <Slider {...settings}>
              {myView}
            </Slider>
          </div>
       )

}

export default HomeSlider