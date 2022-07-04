//display the cart which will be seen in the modal when clicking the cart button in the header

import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {
        //this array needs to be dynamic ie user entered items in cart
        [
          {
            id: "c1",
            name: "Cheese Burger",
            amount: 2,
            price: 10.99,
          },
        ].map((item) => (
          <li>{item.name}</li>
        ))
      }
    </ul>
  );
  return (
    // the cart is wrapped inside a modal which is displayed outside the root element in ./public/indexedDB.html
    <Modal onClose={props.onClose}>
      {/* item in cart : {cartItems} */}
      {cartItems}
      {/* total amount of item in cart */}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.25</span>
      </div>
      {/* cart actions: close and order btn */}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
