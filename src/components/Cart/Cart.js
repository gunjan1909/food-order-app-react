//display the cart which will be seen in the modal when clicking the cart button in the header

import React, { useContext } from "react";
import Modal from "../UI/Modal"; //cart is wrapped in modal which itself wraps cart items
import CartItem from "./CartItem"; //sngle cart item along with the add remove button and stuff
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context"; // cart context to get access to the cart state

const Cart = (props) => {
  //cart context
  const cartCtx = useContext(CartContext);

  //total amount/price of items in the cart
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  //check if cart has items or not and used to display order button conditionally
  const hasItems = cartCtx.items.length > 0;

  //FOR REMOVE AKA '-' BUTTON IN CART
  //remove item from the cart on - button in cart
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //FOR AD AKA '+' BUTTON IN CART
  //add more item to the cart on + button in cart
  const cartItemAddHandler = (item) => {
    //add item to the cart on + button in cart, item is the item object and amount is 1( ie 1 added at once)
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    //alert that order placed
    alert("Order Placed Successfully");
    //reloading the window
    window.location.reload();
  };

  //console.log(cartCtx.items);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {
        //this array needs to be dynamic ie user entered items in cart
        cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
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
        <span>{totalAmount}</span>
      </div>
      {/* cart actions: close and order btn */}
      <div className={classes.actions}>
        {/* close cart button */}
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {/* displaying order button if cart has items */}
        {hasItems && (
          <button onClick={orderHandler} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
