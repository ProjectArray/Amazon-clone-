import React from 'react'
import "./BasketItem.css";
import { UseContextState } from '../StateProvider';
function BasketItem({image,rating,price,title,id,hideButton}) {
    const [{basket},dispatch]=UseContextState();
    // console.log(basket  )
    // const removeFromBasket =(id) => {          // this is not working because the basket can only be trigger by the dispatch function we can not 
    //  basket.filter(item=> {                    // directly trig it because it is inside the data layer . we have to take use of dispatch function to trig that.
    //     return console.log(item.id)
    //  })
    // }

    const removeFromBasket = ()=> {
       dispatch({
        type:"remove_from_basket",
        id:id
       })
    }
  return (
      <div className='checkoutProduct'>
        <div className='onlyForImage'>
        <img className='checkoutProduct__image' src={image} alt="checkout item image" />
        </div>
        
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map((_,i) => {
                    return <p>⭐</p>
                })}
            </div>
            {/* <button onClick={()=> {
                removeFromBasket(id)
            }}> Remove from Basket</button> */}
            {!hideButton && 
            //when hideButton props exist then it make the hideButton false and do not render the button but 
            // when the hide button do not exist then it make the hideButton true and render the button on the screen 
            <button onClick={removeFromBasket}> Remove from Basket</button>
            }
         </div>
      </div>
  )
}

export default BasketItem
