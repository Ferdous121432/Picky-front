import axios from "axios";
import { baseURL, checkoutURL } from "./apiURL";
import { loadStripe } from "@stripe/stripe-js";

export const makePayment = async (paymentDetails, token) => {
  const stripe = await loadStripe(
    "pk_test_51QnyemI8jHUIhJ271mAAxO6krF4VK6h0TmcIkyWcdlOKKE2YFwgeOtn45Kfiaydv3a4CD6c8lFiNBPCGVE94RrHM00RdnXjp7d",
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
    "pk_test_51QnyemI8jHUIhJ271mAAxO6krF4VK6h0TmcIkyWcdlOKKE2YFwgeOtn45Kfiaydv3a4CD6c8lFiNBPCGVE94RrHM00RdnXjp7d",
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
