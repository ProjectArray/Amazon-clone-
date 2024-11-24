/** @format */
import React, { useEffect } from "react";
import { UseContextState } from "../StateProvider";
import BasketItem from "./BasketItem";
import { Link,useNavigate } from "react-router-dom";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase.js";
import {collection,doc,setDoc} from 'firebase/firestore';
function Payment() {
	const [{ user, basket },dispatch] = UseContextState();
	const stripe = useStripe();
	const element = useElements();
	const [error, setError] = useState(null);
	const [disable, setDisable] = useState(true);
	const [processing, setProcessing] = useState("");

	const [succeeded, setSucceeded] = useState(false);
	const [clientSecret,setClientSecret]=useState("");
	const navigate = useNavigate();
  

	// console.log("the user.uid is ",user.uid);

	// console.log('😊',user);	

	// console.log("the db is",db);

	// console.log('😍',collection);

	// const collectionRef = collection(db,'users');
	// // const collectionRef2 = collection(db,'orders');
	// try {
	// 	const checkingRef = doc(collectionRef,'123456666');
	// 	// checkingRef.doc(collectionRef2,'55343535353')
	// 	setDoc(checkingRef,{
	// 		name:'shivam',
	// 		doing:"coding"
	// 	})
	// }catch (error) {
	// 	console.log(error);
	// }


	// the upper coder for firebase firestore database is working fine
	// collection is taking two parameter db and name of the collecion 
	// doc is also taking two parameter first collection and second is id for those collection 
	// setDoc is also taking two parameter taking doc and taking second parameter which is object
		
	
	
////     const checkingFirestoreDOt =async () => {
     
//// 		try{
//// 			const data = await db.collection('users').get()
//// 			data.then(e=> {
// //				console.log(e.docs);
//// 			})
//// 		}catch (error) {
//// 		console.log(error)
//// 	}
	

//// 	checkingFirestoreDOt();
//// const checkingDot2 =async () => {

//// 	db.collection('users').get().then(e => {
//// 		console.log('❤️',e.docs)
//// 	})

//// }
//// checkingDot2();


// ** all of the code which are in the double coment are wrong code . In this code i tried to read the the firebase 
// firestore database but some how something is wrong that's why it is not working so i am leaving that thing right now
//  ** but In the future i have to learn firestore fullY (CRUD) operation 

// *** For now i am learning only few functionality of firebase firestore which is important for making amazone - clone
// *** but , in the future i will understand it fully 

// try {
// 	const collection1 = collection(db,'user')
//    const ref = doc(collection1,"111111111")
//    setDoc(ref, {
// 	name:"shivam",
// 	doing:"coding"
//    })
//    setDoc(doc(collection(db,'user/111111111/orders'),'checking nol 2'), {
//    name:"mohan",
// 	doing:'working'
//    })
// //    setDoc(doc(db,'user/111111111/orders','checking nol 2'), {
// //    name:"mohan",
// // 	doing:'working'
// //    })             ***** Both of them is same upper one or lower one both of them is working same with collection or without collection *****
// } catch (e) {
// 	console.log(e);
// }


// **** The upper line of code is also working fine in this code i learn how to create sub collection of collection 

	// whenever we wanted to make a payment like whenever our client wanted to make a payment through our website.eg 
	// our client wanted to make a payment of 50 dollar then we will tell the stripe give me the client secret and 
	// accept the payment . when ever our website user wanted to make a payment and wanted to buy our product we will 
	// tell the stripe give me the client secret and this client secret is api key which allow us to communicate with stripe
	// and we will tell stripe accept the payment of 50 dollar . and if the api key will be wrong then we will be no more able
	// to make payment with the help of stripe.
	
	// console.log('the user.uid is ', user.uid)
	
	useEffect(()=>{
		// let source = axios.CancelToken.source();
		// let mounted = true;

		// generate he special stripe secret which allows us to charge a customer
		// everytime we will update the item inside our basket client secret (api key )
		// will also get change . 

		// const getClientSecret = async () => {
        // try {
		// 		// Stripe expects the total in a currencies subunitss
		// 		const responce = await axios({
		// 			method:'post',
		// 			url:`/payments/create?total=${getBasketTotal(basket) * 100}`,
		// 			// cancelToken:source.token,
		// 		});
		// 		setClientSecret(responce.data.clientSecret)
		// 	}  catch (error) {
		// 		if (axios.isCancel(error)) {
		// 			console.log('component got unmounted');
		// 		} else {
		// 			throw error;
		// 		}
		// 	}
		// 	getClientSecret();
		// }

//    if (mounted) {
// 		const getClientSecret = async () => {
// 			const responce = await axios({
// 				method:'post',
// 				url:`/payments/create?total=${getBasketTotal(basket) * 100}`,
// 				// cancelToken:source.token,
// 			});
// 			setClientSecret(responce.data.clientSecret)
// 		}
// 		getClientSecret();
//    }

// 		return () => {
// 			mounted = false;
// 		}


// ********* my way making post request by axios
// const source = axios.CancelToken.source();
// console.log("the source is ",source)
// async function getClientSecret() {
// 	try {
// 		const responce = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`,{
// 			cancelToken: source.token
// 		});
// 		// console.log(responce);
// 		setClientSecret(responce.data.clientSecret);
// 	} catch (error ) {
// 		if (axios.isCancel(error)) {
// 			// Request was canceled, so you can handle it here
// 		  } else {
// 			// Handle other errors
// 			throw error;

// 		  }
// 	}
// 	// return responce;  // i am doing that thing so that getClientSecret sould not get freak out
// }
// getClientSecret();

// return () => {
// 	source.cancel('Request canceled by component unmount'); // Cancel the request when the component unmounts
// }


// it is again not working i am not able to cancel the axios request while component get unmounted



// ***** normla writing code for get clientSecret;
const source = axios.CancelToken.source();

async function getClientSecret () {
	const responce = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`,{
					cancelToken: source.token
	});
	setClientSecret(responce.data.clientSecret);
	return responce;
}
const clientAsync = getClientSecret();
clientAsync.then(responce => {
	console.log(responce);
})
	},[basket])
	
	
	console.log("the secret key is >> ",clientSecret);
	
	const handleSubmit = async (event) => {
		// do all the fancy stripe stuff....
		event.preventDefault();
		setProcessing(true);
		
		
		const payload = await stripe.confirmCardPayment(clientSecret,{
			payment_method:{
				card:element.getElement(CardElement)
			}
		}). then(({paymentIntent}) => {
			
			// paymentIntent = payment confirmation
            console.log('⭐',paymentIntent);
			
			// db
			// .collection('users')
			// .doc(user?.uid)
			// .collection('orders')
			// .doc(paymentIntent.id)
			// .add({
			// 		basket:basket,
			// 		amount:paymentIntent.amount,
			// 		created:paymentIntent.created   // time stamp when the payment is maded 
			// 	})
			
			//** The upper line of code is earlier version of firestore > I get that thing while developing amazone clone 
	          console.log("the paymentIntent.id is ", paymentIntent.id);

			try {
				setDoc(doc(db,`users/${user?.uid}/orders`, paymentIntent.id), {    //this line of code meaning is that if user exist with specific document id then fine create orders and if user do not exist then first create users with specific document id and then create orders
					basket:basket,                                                 // and if document id will not match with users id then it will create a new collection whose name will be user and id will be new id    
			 		amount:paymentIntent.amount,
			 		created:paymentIntent.created   // time stamp when the payment is maded 
				})

			}catch (error) {
				console.log("The firebase error is ", error)
			}
				
				
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				
				dispatch({
					type:'EMPTY_BASKET'
				})
				navigate('/orders')
				
				
			})
			
		};
		
		const handleChange = (event) => {
			// console.log("checking is working fine for db of firestore");
			// db.collection("user").doc('123456');
			// Listen for changes in the CardElement
			// and display any errors as teh customer types their card details
			setDisable(event.empty);  // because event.empty is true so button is disable but when we enter anything inside cardElement disable become false
		setError(event.error ? event.error.message : "");
	};
	return (
		<div className='payment'>
			<div className='payment__container'>
				<h1>
					Checkout(<Link to='/checkout'> {basket?.length} items </Link>)
				</h1>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Haryana, India</p>
					</div>
				</div>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Review item and delivery</h3>
					</div>
					<div className='payment__items'>
						{basket.map((item) => (
							<BasketItem
								id={item.id}
								image={item.image}
								title={item.title}
								rating={item.rating}
								price={item.price}
							/>
						))}
					</div>
				</div>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment__detail'>
						{/* Stripe magic will go here */}
						{/* <h1>just checking working of payment section </h1> */}
						{/* CardElement is appearing after putting h1 because after putting h1 div come into play define its size according to the h1 */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className='payment__priceContainer'>
								<CurrencyFormat
									renderText={(value) => (
										<>
											<h3>Order Total : {value}</h3>
										</>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>

					 			<button disabled={processing || disable || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
						</form>
						{/* error */}
						{error && <div>{error}</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
