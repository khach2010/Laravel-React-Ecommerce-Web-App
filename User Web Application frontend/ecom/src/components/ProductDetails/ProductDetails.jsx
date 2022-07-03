import React, { useState, useEffect } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'


function ProductDetails({dataDetails, dataList}) {
     console.log(dataDetails)
     console.log(dataList)
     const myView = chooseDataView (dataDetails, dataList)

     function chooseDataView(details, list){
          if(details.length == 0) {
               return (
                   <div>
                    <h1>No data for datails</h1>
                   </div>
               )
          } else if (dataList.length == 0) {
               return (
                    <div>
                     <h1>No data for list</h1>
                    </div>
                )
          } else {
               const {product_id, color, size, short_description, long_description, image_one, image_two, image_three,image_four} = dataDetails[0]
              const {brand, category, id, image, price, product_code,remark, special_price, star, subcategory, title} = dataList[0]
              
              const imgOnCLick = event => {
                    let imgSrc = event.target.getAttribute('src')
                    let previewImg = document.getElementById('previewImg')
                    ReactDOM.findDOMNode(previewImg).setAttribute('src', imgSrc)
              }
               return (
                    <Container  className="BetweenTwoSection" fluid={true}>
                         <Row className="p-2">

 <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
      <Row>
           <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
           <img id='previewImg' className="w-50" src={image_one} alt='preview' />
           <Container  className="my-3">
                <Row>
                     <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                          <img onClick={imgOnCLick} className="w-100" src={image_one} alt='preview 1'/>
                     </Col>
                     <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                          <img onClick={imgOnCLick}  className="w-100" src={image_two} alt='preview 2'/>
                     </Col>
                     <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                          <img onClick={imgOnCLick} className="w-100" src={image_three} alt='preview 3'/>
                     </Col>
                     <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                          <img onClick={imgOnCLick} className="w-100" src={image_four} alt='preview 4'/>
                     </Col>
                </Row>
           </Container>
           </Col>
           <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
           <h5 className="Product-Name">{title}</h5>
           <h6 className="section-sub-title">{short_description}</h6>
           <div className="input-group">
                <div className="Product-price-card d-inline ">${price}</div>
                <div className="Product-price-card d-inline ">50% Discount</div>
                <div className="Product-price-card d-inline ">New Price ${special_price}</div>
           </div>
          <h6 className="mt-2">Category : <b>{category}</b>  </h6>       
          <h6 className="mt-2">SubCategory : <b>{subcategory}</b></h6>
          <h6 className="mt-2">Brand : <b>{brand}</b></h6>
          <h6 className="mt-2">Product Code : <b>{product_code}</b></h6>
 
           <h6 className="mt-2">Quantity</h6>
           <input  className="form-control text-center w-50" type="number" />
 
           <div className="input-group mt-3">
                <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
           </div>
           </Col>
      </Row>
 
      <Row>
           <Col className="" md={6} lg={6} sm={12} xs={12}>
           <h6 className="mt-2">DETAILS</h6>
                    {long_description}
           </Col>
 
           <Col className="" md={6} lg={6} sm={12} xs={12}>
           <h6 className="mt-2">REVIEWS</h6>
           <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
 
           <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
 
           <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
 
           </Col>
      </Row>
 </Col>

                    </Row>
                </Container>
               )
          }
     }

     return (
          <>
               {myView}
          </>
     )
     
}

export default ProductDetails