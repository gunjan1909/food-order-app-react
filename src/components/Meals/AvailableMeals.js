//basically displaying the menu, has to be dynamic fr, but rn dummy meal array

import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cheese Burger",
    description: "Finest burger in town",
    price: 10.99,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Italian style pizza",
    price: 15.5,
  },
  {
    id: "m3",
    name: "Chicken Burger",
    description: "American, raw, meaty",
    price: 18.5,
  },
  {
    id: "m4",
    name: "Chicken Pizza",
    description: "Chicken toppings Pizza",
    price: 25.99,
  },
];
const AvailableMeals = () => {
  //mealsList will loop through dummyMeals and create a mealList array of meal items for each meal
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  //displaying the meal list
  return (
    <section className={classes.meals}>
      <Card>
        {/* meallist is an array of jsx element MealItem */}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
