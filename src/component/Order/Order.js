import React from "react";
const Order = (props) => {
  console.log(props);
  const cart = props.cart;
  const totalPrice = cart.reduce(
    (totalPrice, item) => totalPrice + item.price,
    0
  );
  return (
    <div>
      <h2>Order Summary:</h2>

      <p>Items Ordered:{cart.length}</p>
      <p> total price:${totalPrice}</p>
    </div>
  );
};
export default Order;
