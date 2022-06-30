//providing static card having just the description/summary

import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You!</h2>
      <hr />
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All the food is prepared fresh with best ingredients by best chefs,
        totally hygenic environment and best service at affordable price.
      </p>
    </section>
  );
};

export default MealsSummary;
