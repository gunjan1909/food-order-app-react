//main app component

import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  //managing the cart visibility state
  const [cartIsShown, setCartIsShown] = useState(false);
  //show the cart
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  //hide the cart
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    //all wrapped in cartProvider context
    <CartProvider>
      {/* the cart component, prop passed to close the cart and bakcdrop modal on clicking the backdrop or close button */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      {/* header component, props passed to show cart and modal on clicking cart button */}
      <Header onShowCart={showCartHandler} />

      {/* main section showing meals/items */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
