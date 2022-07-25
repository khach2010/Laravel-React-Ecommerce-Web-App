import React, { useState, useEffect } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import SuggestedProduct from './SuggestedProduct'
import ReviewList from './ReviewList'

function ProductDetails({dataDetails, dataList}) {
  
     const myView = chooseDataView (dataDetails, dataList)

     function chooseDataView(details, list){
          if(details.length == 0) {
               return (
                   <div>
                    <h1>No data for datails</h1>
                   </div>
               )
          } else if (list.length == 0) {
               return (
                    <div>
                     <h1>No data for list</h1>
                    </div>
                )
          } 
          else {
               const {product_id, color, size, short_description, long_description, image_one, image_two, image_three,image_four} = dataDetails[0]
              const {brand, category, id, image, price, product_code,remark, special_price, star, subcategory, title} = dataList[0]
              
              const imgOnCLick = event => {
                    let imgSrc = event.target.getAttribute('src')
                    let previewImg = document.getElementById('previewImg')
                    ReactDOM.findDOMNode(previewImg).setAttribute('src', imgSrc)
              }
               return (
                    <Container  className="BetweenTwoSection" fluid={true}>
                          <div className="breadbody">
                              <Breadcrumb>
                                   <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>

                                   <Breadcrumb.Item> <Link to={"/productcategory/"+category}> {category } </Link> </Breadcrumb.Item> 

                                   <Breadcrumb.Item> <Link to={"/productsubcategory/"+category+"/"+subcategory}> {subcategory } </Link> </Breadcrumb.Item>

                                   <Breadcrumb.Item> <Link to={"/productdetails/"+product_id}> {title } </Link> </Breadcrumb.Item>   
                              </Breadcrumb>
                         </div>

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
               <div className="Product-price-card d-inline ">{
                    special_price === 'no' ?  (
                         <p className="product-price-on-card"> Price : ${price} </p>
                         ) : (
                         <p className="product-price-on-card">
                         Price : <strike className="text-secondary">${price} </strike> ${special_price}
                             </p>)}
               </div>
           </div>
          <h6 className="mt-2">Category : <b>{category}</b>  </h6>       
          <h6 className="mt-2">SubCategory : <b>{subcategory}</b></h6>
          <h6 className="mt-2">Brand : <b>{brand}</b></h6>
          <h6 className="mt-2">Product Code : <b>{product_code}</b></h6>
        
          <div className=''>
               <h6 className="mt-2"> Choose Color: <span>{color}</span></h6>
             
               <select className="form-control form-select">
                    {color.split(',').map((c,i) => (
                         <option value={c}>{c}</option>
                    ))}
               </select> 
          </div>
          <div className=''>
               <h6 className="mt-2"> Choose Size: <span>{size}</span></h6>
             
               <select className="form-control form-select">
                    {size.split(',').map((s,i) => (
                         <option value={s}>{s}</option>
                    ))}
               </select> 
          </div>
     
          <div className="" >
               <h6 className="mt-2"> Choose Quantity  </h6>
               <select className="form-control form-select">
               <option>Choose Quantity</option>
               <option value="01">01</option>
               <option value="02">02</option>
               <option value="03">03</option>
               <option value="04">04</option>
               <option value="05">05</option>
               <option value="06">06</option>
               <option value="07">07</option>
               <option value="08">08</option>
               <option value="09">09</option>
               <option value="10">10</option> 
               </select> 
          </div>

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
           <ReviewList id={product_id} />
      </Row>
 </Col>

                    </Row>
                   
                    <SuggestedProduct sub={subcategory}  />
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