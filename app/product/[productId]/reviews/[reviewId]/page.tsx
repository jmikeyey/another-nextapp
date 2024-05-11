import React from 'react'
import { notFound } from 'next/navigation'

const ProductReviews = ( {params}: { params: {
  productId?: String,
  reviewId: number
} } ) => {

  if(params.reviewId > 100){
    notFound()
  }

  return (
    <div>Review {params.reviewId} for product {params.productId} </div>
  )
}
  
export default ProductReviews