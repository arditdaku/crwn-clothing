import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey =
    "pk_test_51JpebVLwmwApWbKG9zmxktODSq0AQm5Oeg1rSLEOA480p1kT7a8zvYZ7kGZIzsqi32yLfTjSE30GPMf9xcGCpfgV00MSkVlV9u";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Payn Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckoutButton;
