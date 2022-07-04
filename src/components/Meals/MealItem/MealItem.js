//just a listitem component to display single meal item with data from props

import React, { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
//import Card from "../../UI/Card";
import classes from "./MealItem.module.css";

//MealItem component function
const MealItem = (props) => {
  //using cart context
  const cartCtx = useContext(CartContext);
  //fix the price to 2 decimals
  const price = `$ ${props.price.toFixed(2)}`;

  //this function is called when the form is submitted and the input is valid, amount is received thru lifting the state up to the parent component as enteredAmountNumber from MealItemForm.js
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* form goes here where user add meal to cart  */}
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
