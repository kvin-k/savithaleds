import React from 'react';
import {Link} from 'gatsby'

const ProductCard = ({location}) => {
  if( location.state!==undefined){
    return (
      <>
      <div class="flex justify-between">
        <div className="text-xl font-semibold">{location.state.productDetails.title}</div><div><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
      <Link to="/">Close</Link>
    </button></div>
    </div>
        <p className="mt-6">{location.state.productDetails.content}</p>
        <div className="flex items-center mt-8">
          <img
            className="w-120 h-120 mr-4 "
            src={location.state.productDetails.productImage}
            alt={location.state.productDetails.title}
          />
        </div>
        </>
      )
  }else{
    return(
      <div>Error</div>
    )
  }
  
  
}

export default ProductCard;
