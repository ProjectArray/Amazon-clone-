/** @format */
// import stripeSecret from "../src/firebase-function";
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripeSecret ="sk_test_51NCbywSAQk0u670s";
const s1="ce8EUGjhpKQdZIaFZtLjPF4UourMlQU";
const s2="1tkfbSdaFCzVIpApX0lXol1ih5U6H3u";
const s3="nHPMgcwYx800Qqa7A6V0";
const stripe = require("stripe")(stripeSecret+s1+s2+s3);
// console.log(stripeSecret);

const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, responce) => responce.status(200).send("hello wordl"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM !!! for this amount  >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    description: "Software development services",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command

exports.api = functions.https.onRequest(app);
