import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JpebVLwmwApWbKG9zmxktODSq0AQm5Oeg1rSLEOA480p1kT7a8zvYZ7kGZIzsqi32yLfTjSE30GPMf9xcGCpfgV00MSkVlV9u";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
        toast.success("successful payment", {
          theme: "colored",
          progress: false,
        });
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        toast.error(
          "There was an issue with your payment! Please make sure you use the provided credit card.",
          {
            theme: "colored",
            progress: false,
          }
        );
        alert();
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
