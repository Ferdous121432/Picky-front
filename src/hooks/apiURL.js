// export const baseURL = "http://127.0.0.1:3000";
export const baseURL = "https://picky-back.vercel.app/";
export const signupURL = "api/v1/users/signup";
export const loginURL = "api/v1/users/login";
export const userURL = "api/v1/users/me";
export const productURL = "api/v1/products";
export const productsByCategory = "api/v1/products/category"; // /:category
export const productCategory = "api/v1/categories"; // /:category

export const mycartURL = "api/v1/cartItems/mycart";
export const carItemsURL = "api/v1/cartitems";
export const checkoutURL = "api/v1/checkout/checkout-session";

export const userOrdersURL = "api/v1/checkout/my-orders";
export const userEditProfileURL = "api/v1/users/updateme";
export const url_productsCategory = `${baseURL}/${productsByCategory}`;
