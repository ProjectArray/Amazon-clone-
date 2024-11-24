
import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { UseContextState } from '../StateProvider';
import { getBasketTotal } from '../reducer';
// import { Height } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{basket},dispatch]=UseContextState();
  const navigate = useNavigate();

  // console.log(basket)
  // // console.log('i am subtotal component')    // this console will only be get called when we will call the subtotal function and subtotal function is calling when we clicking the cart button 
  // var sum_of_price = 0
  // for (var i = 0;i<basket.length;i++) {
  //   sum_of_price += basket[i].price
  // }

  // console.log(sum_of_price)

  // we are using reduce method for implementing the upper code 
  // console.log(getBasketTotal(basket));   // our function getBasketTotal is returning the value that why we have to console.log it inorder to get return value.

  
  return (
    <div className='subtotal'>
      <CurrencyFormat 
      renderText={(value) => 
      <>
        <p>
            Subtotal ( {basket?.length} items):
            <strong>{value}</strong>
        </p>
        <small className='subtotal__gift'>
            <input type="checkbox" /> This order contain a gift
        </small>
        
    </>
      }
      decimalScale={2}
      value={getBasketTotal(basket)}
       displayType={'text'} 
        thousandSeparator={true}
        prefix={'$'}  />
      
      <button onClick={e => navigate("/payment")} >proceed to Checkout</button>
    </div>
  )
}

export default Subtotal


//write down things 
// max-height;
// CurrencyFormat;
// object-fit decrease the size when we will try to decrease the height of a image for maintaining fixels