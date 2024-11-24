import React, { useState } from 'react'
import "./Login.css";
import { Link,  useNavigate } from 'react-router-dom';
// import { auth, db } from '../firebase.js';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import {auth} from "../firebase.js";


function Login() {
    // const History = useHistory(); for react router dom version greater than 6 you have to use useNavigation instead of useHistory();
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]= useState('');
    
    const signIn = (e) => {
     e.preventDefault();
     // some fancy firebase login sheettttt;
     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    // ...
    if (userCredential) {
      navigate("/");
    }
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

    }

    const register = (e)=> {
        e.preventDefault();    // their is no more necessary of doing e.preventDefault but we are just doing it is not so much necessary
        // some fancy firebase register sheetttt;
        // auth
        //    .createUserWithEmailAndPassword(email,password)
        //    .then((auth) => {
        //     console.log(auth);
        //    })
        //    .catch(error => alert(error.message))
        // const auth = getAuth();


// this is firebase way of creating a user with email and password but without verfication 

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    // ...
    // console.log(userCredential);
    if (userCredential) {
    // History.push("/") 
    navigate("/");
    }
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
    alert(error.message);
  });


// register user with email and password but we are tryping to register user with verification but i get failed i will study about authentication in the futue
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     user.sendEmailVerification();
//     console.log("user is registered with verification")
//     // ...
//     // console.log(userCredential);
//     if (userCredential) {
//     // History.push("/") 
//     navigate("/");
//     }
//   })
//   .catch((error) => {
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // ..
//     alert(error.message);
//   });


    }
  return (
    <div className='login'>
    <Link to="/">
    <img 
      className='login__logo'
      src="https://bills.alterra.id/wp-content/uploads/2019/09/amazon-logo-transparent.png"
      alt="login amazone logo"
      />
      </Link>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type="text" value ={email} onChange={e=>setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button onClick={signIn}className='login__signInButton'>Sign In</button>
        </form>
        <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of use & sales. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
        </p>
        <button onClick={register} className='login__registerButton'>Create Your Amazone Account</button>
      </div>
      
    </div>
  )
}

export default Login
 