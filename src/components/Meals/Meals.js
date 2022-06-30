//display the entire meal section, meal summary with description card and the menu items in availablemeals

import React from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <>
      {/* static meal summary */}
      <MealsSummary />
      {/* display list of meals */}
      <AvailableMeals />
    </>
  );
};

export default Meals;
