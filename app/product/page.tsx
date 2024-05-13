import React from 'react'
import Link from "next/link";
// Sample array of products with ids and names
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
];
const Products = () => {
  return (
    <>
      <Link href="/">Go back</Link>
      <hr />
      <h1 className="bg-sky-400 px-1">Product List</h1>
      <div className="flex flex-col">
        {/* Map through the products array */}
        {products.map((product) => (
          // Use Link component to dynamically generate links
          <Link
            key={product.id}
            href={`/product/${product.id}`}
          >
            <h1 className="hover:bg-gray-200 px-1 py-2">{product.name}</h1>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Products