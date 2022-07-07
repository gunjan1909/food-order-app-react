//header component, display the header, cart button and main image .
import React from "react";

import HeaderCartButton from "./HeaderCartButton"; //The cartButton in header
import MainImage from "./MainImage";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MarvelMeals</h1>
        {/* cart button */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <MainImage />
    </>
  );
};

export default Header;
