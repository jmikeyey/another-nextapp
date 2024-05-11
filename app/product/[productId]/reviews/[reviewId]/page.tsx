import React from 'react'

const ProductReviews = ( {params}: { params: {
  productId?: String,
  reviewId?: String
} } ) => {
  return (
    <div>Review {params.reviewId} for product {params.productId} </div>
  )
}
  
export default ProductReviews