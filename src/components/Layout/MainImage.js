import React from "react";

import classes from "./MainImage.module.css";

import mealImage from "../../assets/meals2.jpg"; //Just the background image

const MainImage = () => {
  return (
    //main image
    <div className={classes["main-image"]}>
      <img src={mealImage} alt="meal.jpg" />
    </div>
  );
};

export default MainImage;
