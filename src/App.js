//main app component

import React, { useState } from "react";

import Header from "./components/Layout/Header"; //header component
import Meals from "./components/Meals/Meals"; //display meal component( available meal + meal summary)
import Cart from "./components/Cart/Cart"; //Cart inside the modal, but that when cartIsShown is true
import CartProvider from "./store/CartProvider"; // CartProvider to get access to the cart state context

function App() {
  //managing the cart visibility state
  const [cartIsShown, setCartIsShown] = useState(false);

  //FOR MODAL TO DISPLAY WITH THE CART

  //show the cart
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  //hide the cart
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  //RETURN THE COMPONENT WRAPPED IN CARTPROVIDER CONTEXT

  return (
    //all wrapped in cartProvider context
    <CartProvider>
      {/* this cart component is only shown in the modal when clicked on cart button */}
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
