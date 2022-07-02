//just a listitem component to display single meal item with data from props

import React from "react";

import MealItemForm from "./MealItemForm";
//import Card from "../../UI/Card";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* form goes here where user add meal to cart  */}
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
