const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JxmwiSDAmCs3ZvnAgwAgOBPK8gehSgCTjlEJnfGajuWIENUBeAFxqm1XpPKb28cOD1l1XZoP6MBHwArE136L1dZ00v4eq1q9t"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-app-29cb8/us-central1/api

//sk_test_51JxmwiSDAmCs3ZvnAgwAgOBPK8gehSgCTjlEJnfGajuWIENUBeAFxqm1XpPKb28cOD1l1XZoP6MBHwArE136L1dZ00v4eq1q9t