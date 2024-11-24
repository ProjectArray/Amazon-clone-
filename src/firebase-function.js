// //// **** while pushing our function code which is inside index.js . we are geeting too much error like indention error and much more.
// //// ** so we i am going to copy the whole index.js and  pasting it inside this file firebase-function.js
// // .. so in the future we can easy see the whole code and now i am going to modify the index.js as the instruction of 
// // firebase wo it will sucessfully get uploaded into the cloud.


// /** @format */

// const functions = require("firebase-functions");
// // Their on this folder it will gonna be contain all of the
// // backund logics
// // we are going to write the function which will gonna be
// //  manipulate firebase services.

// // src folder is containing all of the frontend logic and
// // function folder is containing all of the backend logics

// //  we can also call it a server file and it will be developed by the express

// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
// 	"sk_test_51NCbywSAQk0u670sce8EUGjhpKQdZIaFZtLjPF4UourMlQU1tkfbSdaFCzVIpApX0lXol1ih5U6H3unHPMgcwYx800Qqa7A6V0"
// );

// // API

// // -- App config
// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// // - API routes
// app.get("/", (request, responce) => responce.status(200).send("hello wordl"));

// app.post("/payments/create", async (request, response) => {
// 	const total = request.query.total;
// 	// instead of query their should be param also
// 	console.log("Payment Request Received BOOM !!! for this amount  >>>", total);

// 	const paymentIntent = await stripe.paymentIntents.create({
// 		// amount:total,  // subunits of the currency
// 		// currency:"usd",
// 		description: "Software development services",
// 		shipping: {
// 			name: "Jenny Rosen",
// 			address: {
// 				line1: "510 Townsend St",
// 				postal_code: "98140",
// 				city: "San Francisco",
// 				state: "CA",
// 				country: "US",
// 			},
// 		},
// 		amount: total,
// 		currency: "usd",
// 	});

// 	/// now creating a customer
// 	const customer = await stripe.customers.create({
// 		name: "Jenny Rosen",
// 		address: {
// 			line1: "510 Townsend St",
// 			postal_code: "98140",
// 			city: "San Francisco",
// 			state: "CA",
// 			country: "US",
// 		},
// 	});

// 	// creating a customer is not working go through
// 	// that in the future

// 	// OK - Created
// 	response.status(201).send({
// 		clientSecret: paymentIntent.client_secret,
// 	});
// });

// // - Listen command
// exports.api = functions.https.onRequest(app);

// // This is a setup needed to get the backend express app
// // running on the cloud function

// // before deploying a cloud function we will gonna be
// //  emulate all that stuff.

// // api key end points
// // (http://127.0.0.1:5001/e-clone-47782/us-central1/api)

// // firebase emulators:start   this will spin the firebase
// // cloud function and it will give us a endpoint and log url
// // all of your logs related to endpoint will be there

// // what emulators is doing . it is making your function available
// //for your computer from your computer .
// // it is hosting cloud function locally from your computer .

// // test card payment for stripe is 4242 and keep typing 4242 until
// //  it will get fill up completely

// // Firebase Blaze plan and function deployment

// // Before deploying the function into the firebase cloud we have
// // to upgrade our firebase plan spark to blaze
// // because in spark plan their is nothing functionality like
// // delpoying the cloud function into the cloud is exist
// // so we have to upgrade our plan
// //when we will upgrade the plan then we have to setup card
// // detail in the starting it will make the payment
// // of rs. 2 then after some time it will get refunded
// // then you will see the msg you have successfully setup
// // your firebase plan to blaze
// // you also setup the budget limit like i seted the budget
// //  limit to rs. 100

// //firebase blaze will charge as you will grow your application
// // they will charge nothing in the starting
// // the brief description on charging is given on the firebase
// // website go and check it out

// //


const stripeSecret ="sk_test_51NCbywSAQk0u670sce8EUGjhpKQdZIaFZtLjPF4UourMlQU1tkfbSdaFCzVIpApX0lXol1ih5U6H3unHPMgcwYx800Qqa7A6V0";

export default stripeSecret;




/// *****todya date 25 07 2023

// solving firebase cloud function pre deployment error

// 1. while uploading the firebase cloud function into the cloud it will litreally irretate you so much because
// * when you will try to upload cloud function into the cloud it will show error in hyper cmd
// * just read all of the error and try to solve it . 
// * when the first time i tried to do that thing it was showing 90 error 
// * then inorder to solve those error i tried this approach
//1. first of all i copy all of the index.js (function ) into another file so that everything will be save for future
//2. the i removed all of the comment 
//3 then i formet the document by prettier
// 4. then after that i run (firebase deploy --only functions) so that it will only deploy by function not whole source code.
// 5. after doing all this thing the error go down to 50
// 6. then i reader all of the error and try to fix that 
// 7. one of the major error was firebase do not take tab instead of that we have to give space 
// 8 . one more major error was that firebase do not accept code line length more than 80 
// so we have to decrease the lenght 
// 9. for eg. stripe api key was so much lengthty and firebase was not accepting that.
// 10. then we break down the api key into mupltiple  variable then in the stripe sectio we added all of them
// 11. in this way we solved all of the firebase deployment error
// and finally we successfuly uploaded function into the cloud
// inorder to check it is working or not we can to firebase console
// then our project then fucntion we will able to see invoke function their on the website
// just copy the end point that function will return then paste into the search bar and 
// if you will get hello world then 
// cogratulation it is working fine.
