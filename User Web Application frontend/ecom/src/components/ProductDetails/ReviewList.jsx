import React, {useState, useEffect} from 'react'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AppURL from '../../api/AppURL'
import axios from 'axios'

function ReviewList({product_code}) {
  const [productReviewData, setProductReviewData] = useState({})
 
  let myView
    if(productReviewData.length > 0) {
      myView = productReviewData.map((review) => {
        const {reviewer_name, reviewer_comments} = review
        if(review.reviewer_rating ==="1") {
          return <div>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">{reviewer_name + ' '}</span> 
                    <span className="text-success">
                    <FontAwesomeIcon icon={faStar} /> 
                    </span> 
                  </p>
                  <p>{reviewer_comments}</p>
                </div> 
        } else if (review.reviewer_rating ==="2") {
          return <div>
                  <h1>Reviews</h1>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">{reviewer_name + ' '}</span> 
                    <span className="text-success">
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    </span> 
                  </p>
                  <p>{reviewer_comments}</p>
                </div> 
        } else if (review.reviewer_rating ==="3") {
          return <div>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">{reviewer_name + ' '}</span> 
                    <span className="text-success">
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    </span> 
                  </p>
                  <p>{reviewer_comments}</p>
                </div> 
        } else if (review.reviewer_rating ==="4") {
          return <div>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">{reviewer_name + ' '}</span> 
                    <span className="text-success">
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    </span> 
                  </p>
                  <p>{reviewer_comments}</p>
                </div> 
        } else if (review.reviewer_rating ==="5") {
          return <div>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">{reviewer_name + ' '}</span> 
                    <span className="text-success">
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    </span> 
                  </p>
                  <p>{reviewer_comments}</p>
                </div> 
        } 
      
      })
    } else {
      myView = <div>There is no review yet</div>
    }

  async function getProductReview() {
    try {
      const response = await axios.get(AppURL.ReviewProduct(product_code))
      setProductReviewData(response.data)
      console.log(response)
    } catch (error) {
      // console.log(error)
    }
  }

    useEffect(() => {
         getProductReview()
    }, [])

   


  return (
    <Col className="" md={6} lg={6} sm={12} xs={12}>
     <h4 className='mt-3'>Reviews {product_code}</h4>
    
    {myView}

    </Col>
  )
}

export default ReviewList