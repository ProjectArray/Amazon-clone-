import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal.jsx';
import BasketItem from './BasketItem';
import { UseContextState } from '../StateProvider';
import FlipMove from 'react-flip-move';
// import "./Subtotal.css";

function Checkout(props) {
 const [{basket,user},dispatch]=UseContextState();
  
  return (
    <div className='checkout'>
    <div className='checkout__left'>
        <img 
        className='checkout__ad'
        src="https://external-preview.redd.it/6O61chOQmmkdSiLrfDXw-5IsicjgSKYG5i9HKM0IQKc.jpg?auto=webp&s=f9fcf5990d4fc95372d758d9b01722a6b2a61948"
        alt="amazone banner ad"
        />
        <div>
            <h2>hello,{user?.email}</h2>      
            {/* the question mark is to much important because if yoy will not give question mark then 
            you app will get freak out in showing error  */}
            <h1 className='checkout__title'>  
                Your shopping basket
            </h1>
        {/* <FlipMove> */}
          {basket.map((item,i) => 

             <BasketItem key={item.id}  image={item.image} price={item.price} rating={item.rating} title={item.title} id={item.id}/>
          )}
          {/* </FlipMove> React flip move is not working i will do that in future   key={item.id} is for flipMove but still not working*/} 
            {/* <BasketItem
              image="https://m.media-amazon.com/images/I/51AOF98NzyL._SX312_BO1,204,203,200_.jpg"
              price={20}
              rating={3}
              title="hey this is only checkig elemeent loren ipsum loren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsum"
            />
            <BasketItem
              image="https://m.media-amazon.com/images/I/81wJJj6jLfL._SY355_.jpg"
              price={20}
              rating={3}
              title="hey this is only checkig elemeent loren ipsum loren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsum"
            /> */}
            
            {/* we create static item for our checkout page so that it will not get render again and again we will easly able to style it.
            this is a sunny trick when we deal with dynamic item for styling */}

        </div>
    </div>
   <div className='checkout__right'>
      <Subtotal />
   </div>
    </div>
  )
}


// ctrl + b is shortcut for removing the sidebar of vs code.

export default Checkout;
   



// // chatgpt version of my code 
// import React from 'react';
// import './Checkout.css';
// import Subtotal from './Subtotal.jsx';
// import BasketItem from './BasketItem';
// import { UseContextState } from '../StateProvider';
// import FlipMove from 'react-flip-move';
// // import 'react-flip-move/dist/react-flip-move.css';


// function Checkout(props) {
//   const [{ basket, user }, dispatch] = UseContextState();

//   return (
//     <div className='checkout'>
//       <div className='checkout__left'>
//         <img
//           className='checkout__ad'
//           src='https://external-preview.redd.it/6O61chOQmmkdSiLrfDXw-5IsicjgSKYG5i9HKM0IQKc.jpg?auto=webp&s=f9fcf5990d4fc95372d758d9b01722a6b2a61948'
//           alt='amazone banner ad'
//         />
//         <div>
//           <h2>hello, {user?.email}</h2>
//           <h1 className='checkout__title'>Your shopping basket</h1>
//           <FlipMove>
//             {basket.map((item, i) => (
//               <BasketItem
//                 key={item.id}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//                 title={item.title}
//                 id={item.id}
//               />
//             ))}
//           </FlipMove>
//         </div>
//       </div>
//       <div className='checkout__right'>
//         <Subtotal />
//       </div>
//     </div>
//   );
// }

// export default Checkout;



// flip move is still not working instead of flip move i will gonna use react frame motion and animation string