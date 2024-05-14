'use client'
import React from 'react'
import { notFound } from 'next/navigation'

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ProductReviews = ( {params}: { params: {
  productId?: String,
  reviewId: number
} } ) => {

  if(params.reviewId > 100){
    notFound()
  }
  const random = getRandomInt(2)
  if(random === 1){
    throw new Error('Error Loading Result hatdog')
  }
  return (
    <div>Review {params.reviewId} for product {params.productId} </div>
  )
}
  
export default ProductReviews