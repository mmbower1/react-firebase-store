import React, { useState } from "react";
import "./StripeForm.styles.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// component
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
  };

  return (
    <div className="stripe-form-container">
      <h2>Credit Card Payment</h2>
      <div className="form" onSubmit={paymentHandler}>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}></Button>
      </div>
    </div>
  );
};

// const stripe = require("stripe")(import.meta.env.VITE_STRIPE_SECRET_KEY);

// exports.handler = async (e) => {
//   try {
//     const { amount } = JSON.parse(e.body);
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       payment_method: ["card"],
//     });
//     return { statusCode: 200, body: JSON.stringify({ payment }) };
//   } catch (err) {
//     console.log(err);
//     return { status: 400, body: JSON.stringify() };
//   }
// };

export default StripeForm;
