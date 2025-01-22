import axios from "axios";
import { baseURL, checkoutURL } from "./apiURL";
import { loadStripe } from "@stripe/stripe-js";

export const makePayment = async (paymentDetails, token) => {
  const stripe = await loadStripe(
    "pk_test_51Q8ouGIeuxFSv7HPlf3neWTa0YHpGfFjPeCPPxKwAKXal02hyOHm7k8gZObfQPlmU2ttYsIAgn182hfCuKZ6nCx100iC3TVn49",
  );

  // send product details to the server
  // const paymentDetails = {
  //   product_id: _id,
  //   quantity: quantity,
  //   color: product.color,
  //   size: product.size,
  //   productName: name,
  //   price: price,
  //   subtotal: price * quantity,
  //   image: imageCover,
  // };

  const response = await axios.post(
    `${baseURL}/${checkoutURL}`,
    paymentDetails,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const session = response.data.session;
  console.log(session);
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });
  console.log(result);
};

export const makeMultiplePayments = async (products, token) => {
  const stripe = await loadStripe(
    "pk_test_51Q8ouGIeuxFSv7HPlf3neWTa0YHpGfFjPeCPPxKwAKXal02hyOHm7k8gZObfQPlmU2ttYsIAgn182hfCuKZ6nCx100iC3TVn49",
  );

  // const products = [
  //   {
  //     product_id: product._id,
  //     quantity: product.quantity,
  //     color: product.color,
  //     size: product.size,
  //     productName: product.name,
  //     price: product.price,
  //     subtotal: product.price * product.quantity,
  //     image: product.imageCover,
  //   },
  // ];

  const response = await axios.post(`${baseURL}/${checkoutURL}`, products, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const session = response.data.session;
  console.log(session);
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });
  console.log(result);
};
