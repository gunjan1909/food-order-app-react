//your cart button in the header /navbar along with the cart icon svg
import React, { useContext, useState, useEffect } from "react";

import CartIcon from "../Cart/CartIcon"; // cart icon svg component
import CartContext from "../../store/cart-context"; // cart context to get access to the cart state
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  //state for toggling the animated class for cart button
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  //console.log(items);

  //getting the total number of items in the cart thru cart context
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  //curNumber will have starting value 0

  //object destructuring

  //the class for button
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  //adding the highlighting effect class(not when items are 0), but also remove after 300ms(after the effect end) and add it again when item change in cart as effect will run only once then if not removed
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    //cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        {/* CartIcon component */}
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
