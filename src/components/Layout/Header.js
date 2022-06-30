//header component, display the header, cart button and main image .
import React from "react";

import HeaderCartButton from "./HeaderCardButton";
import mealImage from "../../assets/meals2.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MarvelMeals</h1>
        {/* cart button */}
        <HeaderCartButton />
      </header>
      {/* main image */}
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="meal.jpg" />
      </div>
    </>
  );
};

export default Header;
