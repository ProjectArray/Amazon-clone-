import React, { useContext } from 'react'
import "./Product.css";
import { UseContextState } from '../StateProvider';
// import { useStateValue } from '../StateProvider';

function Product(props) {
const [state,dispatch]= UseContextState();
// console.log("hey i am basket >>> ", basket)
// console.log(state);

const addToBasket = () => {
  dispatch({
    type:"ADD_TO_BASKET",
    item:{
      id:props.id,
      title:props.title,
      price:props.price,
      rating:props.rating,
      image:props.image

    }
  })
}

  return (
    
<div className='product'>
   <div className='product__info'>
    <p className='product__heading'>{props.title}</p>
    <p className='product__price'>
        <small>$</small>
        <strong>{props.price}</strong>
    </p>
    <div className="product__rating">
    {Array(props.rating).fill().map((__,i) => <p>⭐</p> )}  
    </div>
   </div>
   <img src={props.image}
   alt="The lean startup" />
   <button onClick={addToBasket}>Add to Cart</button>    
   {/* <button onClick={()=> {
    props.cartNumber()
   }}>Add to Cart</button>     */}
    </div>
      )
}

export default Product ;