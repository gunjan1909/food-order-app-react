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
