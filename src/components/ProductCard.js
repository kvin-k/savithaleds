import React from 'react';
import Card from './Card';
import productsLED from '../data/products-leds';
import productsCovid from '../data/products-covid';

const ProductCard = ({ location,products }) => {
  console.log(location.state.productTitle)
  const product = productsLED.map((product)=>{
    if(location.state.productTitle===product.title){
      return product
    }
  })
  return(
  // <Card className="mb-8">
  <>
    <p className="text-xl font-semibold">{product.title}</p>
    <p className="mt-6">{customer.content}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-120 h-120 mr-4 "
        src={customer.customerImage}
        alt={customer.customerName}
      />
    </div>
    </>
  // </Card>
  )
  
  }

export default ProductCard;
