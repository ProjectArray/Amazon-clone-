import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./Login";
import { auth } from "../firebase";
import { UseContextState } from "../StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51NCbywSAQk0u670sWNV7CcuO7qCxVqNbkkLVkS8MXtIDOZT5vs8bncAdEgeCtNGTcVzfHlyjEvjVLCdHRU7X1WyC00YN2yYc3Q');

// this is the test api key for accepting payment globally


function App() {
  const [newCount,setNewCount]=useState(0);
  const [{},dispatch]=UseContextState();
  useEffect(() => {
   auth.onAuthStateChanged(authUser => {  // onAuthStateChanged is listening all of the login . and authUser is the user who is logged in right now 
    //firebase give us onAuthStateChange it take track of what user is logging in and logging out kind of similar to cookies
    
    console.log("THE USER IS >>> ",authUser);
    if (authUser) {
      // user just logged in | and the user was logged in
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    } else {
      // the user just logged out
      dispatch({  // dispatch is a function that take a object as a argument
        type:"SET_USER",
        user:null
      })
    }
   })
  },[])

  const getData = (data) => {
    setNewCount(newCount +1);
  }
const router = createBrowserRouter(
  
  [
    {
      path: "/",
      element: (
        <div>
          <Header updateCount={newCount} />
          <Home getCountHome={getData} />
        </div>
      ),
    },
    {
      path:"/orders",
      element:
      <div>
       <Header />
       <Orders />
      </div>
    },
    {
      path: "checkout",
      element:( <div>
        <Header />
        <Checkout />
      </div>
      ),
    },
    {
      path:"login",
      element:<Login />
    },
    {
      path:"payment",
      element:
      <>
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>

      </>
    }
  ]);


    return     <RouterProvider router={router} />
    
    }



export default App;