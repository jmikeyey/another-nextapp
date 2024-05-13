import React from 'react'
import { Metadata } from 'next';

// ** import types
type Props = {
  params: { productId?: string };
};



export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};


const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      ProductDetails {params.productId}
      <SignIn />
    </div>
  );
};

export default ProductDetails

function SignIn () {
  return (
    <h1>Hello Products</h1>
  )
}