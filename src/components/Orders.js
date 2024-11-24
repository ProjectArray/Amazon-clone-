import React, { useEffect,useState } from 'react'
import "./Orders.css";
import { UseContextState } from '../StateProvider';
import { db } from '../firebase';
import Order from './Order';
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  QuerySnapshot,
} from 'firebase/firestore';

function Orders() {
const [{basket,user},dispatch]=UseContextState();
const [orders,setOrders]=useState([]);




useEffect(()=> {
  if (user) {
    // db.collection('users')
    // .doc(user?.uid)
    // .collection('orders')
    // .orderBy('created','desc')
    // .onSnapshot(snapshot => {
    //   setOrders(snapshot.docs.map(doc => ({
    //     id:doc.id,
    //     data:doc.data()
    //   })))
    // })


    // **** this is the ealier version of firebase

    // query is a great tool that had been given by the firebase which help us in query our database
    // it take collection reference , then where , and then orderBy 
    // but it also work if we remove 'where' or 'orderBy
    // basically it help us in reading database
    

   try {
    const collectionRef= collection(db,`users/${user?.uid}/orders`);     //user.uid is very much important because on the behalf of that we are separating which user order what 
    const queryForOrderBy =query(collectionRef,orderBy('created','desc'));
    onSnapshot(queryForOrderBy, Snapshot => {                               // when different user will be login and if he will order something then different collection will get created with specific user uid.
      // console.log('👌',Snapshot.docs);                                 // that make our order dynamic
      // Snapshot.docs.map(doc => {
      //   console.log(doc.id);
      //   console.log(doc.data())
      //   console.log('😒',doc)
      // })

      // Snapshot.forEach(doc => {
      //   console.log('>>>>>'.doc.data())
      // })      // ** *** this is wrong block of code .


      // **** onSnapshot is a function that is given by firebase firestore which help us to read our database . it's 
      // return a call back function and that call back function contain the docs which is a array which hold the id of  when 
      // this specific collection is pushed into firebase firestore and give us a one data() function so when we will
      // call it . it will give us all of the data that is stored in specific collection.

      setOrders(Snapshot.docs.map(doc => ({
         id:doc.id,
         data:doc.data()
      })))

    })
   } catch (error) {
    console.log(error);
   }

  } else {
    setOrders([])
  }
},[user])

console.log("😁",orders);


return (
  <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders_order'>
         {orders?.map(order => {
          console.log(".....",order)
          return <Order order={order} />
         }
          
         )}
      </div>
  </div>
  
)

// ******** or ******** //  this is one line map downward one b

return (
  <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders_order'>
         {orders?.map(order => (
          <Order order={order} />
         ))}
      </div>
  </div>
)





}

export default Orders
